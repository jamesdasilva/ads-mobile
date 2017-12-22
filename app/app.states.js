(function() {
	'use strict';
	
	angular
	.module('ads-mobile')
	.config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise('/menu-inicial');

		$stateProvider
			.state('menu-inicial', {
				url: '/menu-inicial',
				component: 'uiMenuInicial'
			})
			.state('menu-experimento', {
				url: '/menu-experimento',
				component: 'uiMenuExperimento'
			})
			.state('entrada-experimento', {
				url: '/entrada-experimento?recurso',
				component: 'uiEntradaExperimento'
			})
			.state('executando-experimento', {
				url: '/executando-experimento',
				component: 'uiExecutandoExperimento',
				params: {
			        recurso: null,
			        numeroDeEventos: null,
			        numeroDeReplicacoes: null
			    }
			})
			.state('saida-experimento', {
				url: '/saida-experimento',
				component: 'uiSaidaExperimento',
				params: {
			        mediaExperimento: null,
			        recurso: null
			    }
			})
			.state('menu-simulacao', {
				url: '/menu-simulacao',
				component: 'uiMenuSimulacao',
			})
			.state('entrada-simulacao', {
				url: '/entrada-simulacao?recurso',
				component: 'uiEntradaSimulacao'
			})
			.state('executando-simulacao', {
				url: '/executando-simulacao',
				component: 'uiExecutandoSimulacao',
				params: {
			        recurso: null,
			        numeroDeEventos: null,
			        numeroDeReplicacoes: null,
			        taxaDeChegada: null,
			        taxaDeServico: null
			    },
			})
			.state('saida-simulacao', {
				url: '/saida-simulacao',
				component: 'uiSaidaSimulacao',
				params: {
			        parametrosEntrada: null
			    }
			});
	});

})();
