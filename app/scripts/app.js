'use strict';

var app = angular.module('brokenlincApp', ['ngResource', 'ui', 'ui.bootstrap', 'landerson352'])
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