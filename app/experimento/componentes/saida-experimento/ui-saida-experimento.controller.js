(function () {
  'use strict';

	angular.module('ads-mobile').controller('SaidaExperimentoController', function($scope, $state, $stateParams){

		$scope.mediaParaExibir = $stateParams.mediaExperimento;
		$scope.recurso = $stateParams.recurso;

	});


})();
