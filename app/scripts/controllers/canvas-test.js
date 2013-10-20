'use strict';

angular.module('brokenlincApp')
	.controller('pages.sandbox.canvas-test', function ($scope) {
		
		var game_loop = function() {
			if($scope.drawingContext) draw($scope.drawingContext);
		};
		var game_loop_interval = setInterval(game_loop, 30);
		var draw = function(ctx) {
			
		};
	});