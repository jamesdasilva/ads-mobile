(function () {
  'use strict';

  angular.module('ads-mobile').controller('SaidaSimulacaoController', function($scope, $state, $stateParams){

   $scope.resultados = $stateParams.parametrosEntrada.vetor;

   console.log("$stateParams.resultados.length", $scope.resultados.length);
   console.log("$stateParams.resultados", $scope.resultados);
  });

})();
