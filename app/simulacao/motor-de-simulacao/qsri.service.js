(function () {
  'use strict';

  angular.module('MotorDeSimulacaoModule').factory('QSRIService', function(){

    
    return {
      construtor: function(novoL, novoM){
        // variáveis de entrada e estado
        var N = 0, iat = [], st = [], at = [], bs = [], es = [], nq = [];
        // variveis de saída
        var Enq, Vnq, Ew, Vw, Es, Vs, Er, Vr, p0, U, T;

        var saida = new Object();


        var l = novoL, m = novoM;


        this.F = function(a){
          return -a * Math.log( Math.random() );
        };

        this.start = function(){
          iat[0] = this.F(l);
          st[0] = this.F(m);
          at[0] = bs[0] = iat[0];
          es[0] = at[0] + st[0];
        };

        this.event = function(e){
          N = e+1;
          iat[e] = this.F(l);
          st[e] = this.F(m);
          at[e] = iat[e] + at[e-1];
          bs[e] = at[e] > es[e-1] ? at[e] : es[e-1];
          es[e] = bs[e] + st[e];

        };

        this.statistics = function(){

          Enq = Vnq = Ew = Vw = Es = Vs = Er = Vr = p0 = U = T = nq[0] = 0.0;

          for( var e = 1; e < N; e++ ){
            nq[e] = 0;
            for( var c = 0; c < e; c++ )
              if( at[e] < es[c] ) nq[e] += 1;
          }
          for( var e = 0; e < N; e++ ){
            Enq += nq[e];
            Ew += bs[e]-at[e];
            Es += es[e]-bs[e];
            Er += es[e]-at[e];
          }
          Enq /= N;
          Ew /= N;
          Es /= N;
          Er /= N;
          for( var e = 0; e < N; e++ ){
            Vnq += Math.pow(nq[e] - Enq, 2.0);
            Vw += Math.pow(bs[e]-at[e] - Ew , 2.0);
            Vs += Math.pow(es[e]-bs[e] - Es , 2.0);
            Vr += Math.pow(es[e]-at[e] - Er , 2.0);
          }
          Vnq /= (N-1);
          Vw /= (N-1);
          Vs /= (N-1);
          Vr /= (N-1);
          T = es[N-1];
          p0 = bs[0];
          for( var e = 1; e < N; e++ )
            if(at[e] > es[e-1]) p0 += at[e]-es[e-1];
          p0 /= T;
          U = 1.0-p0;


          saida.Enq = Enq;
          saida.Vnq = Vnq;
          saida.Ew = Ew;
          saida.Vw = Vw;
          saida.Es = Es;
          saida.Vs = Vs;
          saida.Er = Er;
          saida.Vr = Vr;
          saida.p0 = p0;
          saida.U = U;
          saida.T = T;

          return saida; 
        }
      }
    };

  });

})();
