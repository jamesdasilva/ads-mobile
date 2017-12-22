(function () {
  'use strict';

  angular.module('MotorDeExperimentoModule').factory('ExperimentoService', function(CalculadorDeMediaService){
  	return {
  		executarBlocoDeEventos: function(MedidorDeRecurso, numeroDeEventos){

  			var start = performance.now();

  			for (var i = numeroDeEventos; i > 0; i--) {
  				MedidorDeRecurso.executar();
  			}

  			return performance.now() - start;
  		},
  		executarReplicacoes: function(MedidorDeRecurso, numeroDeEventos, numeroDeReplicacoes){
        
  			var tempos = [];

  			for (var i = numeroDeReplicacoes; i > 0; i--) {
  				tempos.push( this.executarBlocoDeEventos(MedidorDeRecurso, numeroDeEventos) / 1000 );
  			}

  			return tempos;
  		},
      executar: function(recurso, numeroDeEventos, numeroDeReplicacoes){
    
        var tempos = this.executarReplicacoes(recurso, numeroDeEventos, numeroDeReplicacoes);
        var media = CalculadorDeMediaService.calcular(tempos);

        return media;
      }

  	};
  });

})();