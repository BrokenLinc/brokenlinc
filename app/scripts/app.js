'use strict';

angular.module('brokenlincApp', ['ngResource', 'ui', 'ui.bootstrap', 'landerson352'])
	.config(function ($routeProvider) {

		// var sitemap = {

		// 	root: 'pages',
		// 	pages : ['special'],
		// 	folders : [
		// 		{
		// 			root: 'sandbox',
		// 			pages: ['canvas-test', 'svg-test']
		// 		}
		// 	]
		// };

		$routeProvider
			.when('/', {
				templateUrl: 'pages/main.html',
				controller: 'pages.main'
			})
			.when('/canvas-test', {
				templateUrl: 'pages/canvas-test.html',
				controller: 'pages.sandbox.canvas-test'
			})
			.otherwise({
				redirectTo: '/'
			});
	});