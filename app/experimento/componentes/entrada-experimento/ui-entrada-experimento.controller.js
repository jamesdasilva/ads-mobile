(function () {
  'use strict';

  angular.module('ads-mobile').controller('EntradaExperimentoController', function($scope, $state, $stateParams){

    $scope.executarExperimento = function(numeroDeEventos, numeroDeReplicacoes){
    
      $state.go('executando-experimento', {
        recurso: $stateParams.recurso, 
        numeroDeEventos: numeroDeEventos, 
        numeroDeReplicacoes: numeroDeReplicacoes } );

    };
  });
})();
