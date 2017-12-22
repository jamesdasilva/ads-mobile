(function () {
  'use strict';

  angular.module('ads-mobile').controller('ExperimentoController', function(
    $scope, $rootScope, $state, $timeout, $stateParams, ExperimentoService){

    $scope.executarExperimento = function(){

      $timeout(function(){

        for(var i = 0; i < $rootScope.recursos.length; i++){
          if($rootScope.recursos[i].slug == $stateParams.recurso){
            $scope.media = ExperimentoService.executar($rootScope.recursos[i].executador, $stateParams.numeroDeEventos, $stateParams.numeroDeReplicacoes);
          }
        }

        $state.go('saida-experimento', { mediaExperimento:$scope.media, recurso:$stateParams.recurso });

      }, 2000);

    }
  });
  
})();