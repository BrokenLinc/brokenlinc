'use strict';

angular.module('brokenlincApp')
	.controller('navbar', function ($scope, $location) {
		$scope.routeIs = function(routeName) {
			return $location.path() === routeName;
		};
	});