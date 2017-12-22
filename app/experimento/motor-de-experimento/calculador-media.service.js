(function () {
  'use strict';

  angular.module('MotorDeExperimentoModule').factory('CalculadorDeMediaService', function(){
    
  	return {
  		calcular: function(vetorDevalores){

        var resultado = new Object(), soma = 0;

        for (var i = vetorDevalores.length - 1; i >= 0; i--) {
          soma += vetorDevalores[i];
        }
        resultado.media = soma / vetorDevalores.length;
  			
        soma = 0;

        for (var i = vetorDevalores.length - 1; i >= 0; i--) {
          soma += Math.pow( vetorDevalores[i] - resultado.media, 2 );
        }

        resultado.desvioPadrao = Math.sqrt( soma / vetorDevalores.length );

        return resultado;
  		}
  	};
  });


})();
