'use strict';

angular.module('brokenlincApp', ['ngResource', 'ui.bootstrap'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/pin-helper', {
				templateUrl: 'views/pin-helper.html',
				controller: 'PinHelperCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
