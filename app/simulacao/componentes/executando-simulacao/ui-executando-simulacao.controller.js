(function () {
  'use strict';

  angular.module('ads-mobile').controller('SimulacaoController', function(
    $scope, $state, $timeout, $stateParams, SimulcaoService){

    $scope.numeroDeEventos = $stateParams.numeroDeEventos; 
    $scope.numeroDeReplicacoes = $stateParams.numeroDeReplicacoes; 
    $scope.taxaDeChegada = $stateParams.taxaDeChegada;
    $scope.taxaDeServico = $stateParams.taxaDeServico;

    $scope.executarSimulacao = function(numeroDeEventos, numeroDeReplicacoes, taxaDeChegada, taxaDeServico){

      $timeout(function(){
        
        var resultados = SimulcaoService.executar(numeroDeEventos, numeroDeReplicacoes, taxaDeChegada, taxaDeServico);

        $state.go('saida-simulacao', {parametrosEntrada: resultados});

      }, 2000);
      
    };

  });

})();
