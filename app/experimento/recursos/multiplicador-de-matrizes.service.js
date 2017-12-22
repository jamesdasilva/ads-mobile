(function () {
  'use strict';

  angular.module('ads-mobile').factory('MultiplicadorDeMatrizesService', function(){
  	return {
  		executar: function(){
        var m1 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
        var m2 = [ [1, 0, 0], [0, 1, 0], [0, 0, 1] ];

        //console.log('m1[0].length (coluna)', m1[0].length);
        //console.log('m2.length (linha)', m2.length);

        /* m2.length = m1[0].length */

        var linha = m1.length;
        var coluna = m2[0].length;
        var resultado = [];

        for (var i = 0; i < linha; i++) {

          resultado[i] = [];
          for (var j = 0; j < coluna; j++) {

            resultado[i][j] = 0;

            for (var k = 0; k < m2.length; k++) {
              resultado[i][j] += m1[i][k] * m2[k][j];
            }
          }
        }


  		}
  	};
  });

})();
