(function () {
  'use strict';

  angular.module('ads-mobile').factory('CalculadorDeFatorialService', function(){
    return {
      executar: function(){

        var numero = 3;
        var fatorial = 1;

        for (var i = 1; i <= numero; i++) {
          fatorial *= i;
        }

        console.log('fatorial', fatorial);

      }
    };
  });

})();
