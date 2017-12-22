(function () {
  'use strict';

	angular.module('ads-mobile', ['ui.router', 'ngMaterial', 'md.data.table', 'MotorDeExperimentoModule', 'MotorDeSimulacaoModule']);

	angular.module('ads-mobile').run(function(
		$rootScope, 
		$state, 
		CalculadorDeFatorialService, 
		MultiplicadorDeMatrizesService, 
		MedidorDeGeolocalizacaoFactory) {
			

		$rootScope.recursos = [
			{
				nome: 'Fatorial',
				slug: 'fatorial',
				executador: CalculadorDeFatorialService
			},
			{
				nome: 'Multiplicação de Matrizes',
				slug: 'multiplicacaodematrizes',
				executador: MultiplicadorDeMatrizesService
			},
			{
				nome: 'Geolocalização',
				slug: 'geolocalizacao',
				executador: MedidorDeGeolocalizacaoFactory
			}
		];

	});

})();