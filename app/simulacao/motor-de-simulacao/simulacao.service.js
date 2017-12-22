(function () {
  'use strict';

  angular.module('MotorDeSimulacaoModule').factory('SimulcaoService', function(QSRIService){
    
    return {
      executar: function(numeroDeEventos, numeroDeReplicacoes, taxaDeChegada, taxaDeServico){

        var resultados = new Object();
        resultados.vetor = [];
        var resultado;
        var N = numeroDeEventos, R = numeroDeReplicacoes, l = taxaDeChegada, m = taxaDeServico;
        
        for (var r = 1; r <= R; r++) {

          var qs = new QSRIService.construtor(l, m);
          qs.start( );
          for (var e = 1; e <= N; e++) {
            qs.event(e);
          }
          resultado = qs.statistics();
          resultados.vetor.push(resultado);

        }
        return resultados;
      }

    };

  });

})();
