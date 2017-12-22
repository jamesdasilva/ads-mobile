(function () {
  'use strict';

  angular.module('ads-mobile').controller('UiEntradaSimulacaoController', function($scope, $state, $stateParams){

    $scope.executarSimulacao = function(numeroDeEventos, numeroDeReplicacoes, taxaDeChegada, taxaDeServico){

      $state.go('executando-simulacao', {
        recurso: $stateParams.recurso, 
        numeroDeEventos: numeroDeEventos, 
        numeroDeReplicacoes: numeroDeReplicacoes,
        taxaDeChegada: taxaDeChegada,
        taxaDeServico: taxaDeServico } );

    };
  });
})();
