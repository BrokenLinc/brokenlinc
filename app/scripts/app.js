'use strict';

var app = angular.module('brokenlincApp', [
	'ngRoute', 
	'ngAnimate', 
	'ui.bootstrap',
	'iso.directives',
	'quack'
	])
	app.config(function ($routeProvider) {

		var page_namespace = 'pages';

		for(var i = 0; i < app._invokeQueue.length; i++) {
			if(app._invokeQueue[i][0] == '$controllerProvider') {
				var c = app._invokeQueue[i][2][0];
				if(c.substr(0, page_namespace.length) == page_namespace) {
					var p  = '/' + c.substr(page_namespace.length + 1);
					if(p.substr(p.length-6) == '/index') p = p.substr(0, p.length-5);
					$routeProvider.when(p, {
							templateUrl: c + '.html',
							controller: c
						});
				}

			}
		}

		$routeProvider.otherwise({
				redirectTo: '/'
			});
	});
	app.animation('.alert', function(){
		return {
			leave: function(element, done) {
				TweenMax.to(element, 0.3, {
					opacity:0, 
					scaleX:0.8, 
					scaleY:0.8,
					onComplete:function(){
						TweenMax.to(element, 0.3, {
							height:0, 
							'padding-top':0, 
							'padding-bottom':0, 
							'margin-top':0, 
							'margin-bottom':0, 
							onComplete:done
						});
					}
				});
			},
			enter: function(_element, done) {
				var element = _element.filter('.alert');
				TweenMax.to(element, 0, {
					opacity:0,
					scaleX:0.8, 
					scaleY:0.8
				});
				TweenMax.fromTo(element, 0.3, {
						height:0, 
						'padding-top':0, 
						'padding-bottom':0, 
						'margin-top':0, 
						'margin-bottom':0
					}, {
						height: element.outerHeight(),
						'padding-top':element.css('padding-top'),
						'padding-bottom':element.css('padding-bottom'),
						'margin-top':element.css('margin-top'),
						'margin-bottom':element.css('margin-bottom'),
						onComplete:function(){
							TweenMax.to(element, 0.3, {
								opacity:1, 
								scaleX:1, 
								scaleY:1,
								onComplete: done
							});
						}
					});					
			}
		};
	});