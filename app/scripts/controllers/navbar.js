'use strict';

angular.module('brokenlincApp')
	.controller('NavbarCtrl', function ($scope, $location) {
		$scope.routeIs = function(routeName) {
			return $location.path() === routeName;
		};
	});