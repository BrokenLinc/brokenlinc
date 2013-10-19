'use strict';

angular.module('brokenlinc', [])
	.directive('navMenu', function($location) {
		return function(scope, element, attrs) {
			var links = element.find('li'),
			onClass = attrs.navMenu || 'active',
			routePattern,
			link,
			url,
			currentLink,
			urlMap = {},
			i;

			if (!$location.$$html5) {
				routePattern = /^#[^/]*/;
			}

			for (i = 0; i < links.length; i++) {
				link = angular.element(links[i]);
				url = angular.element(link.find('a')).attr('href');

				if ($location.$$html5) {
					urlMap[url] = link;
				} else {
					urlMap[url.replace(routePattern, '')] = link;
				}
			}

			scope.$on('$routeChangeStart', function() {
				var pathLink = urlMap[$location.path()];

				if (pathLink) {
					if (currentLink) {
						currentLink.removeClass(onClass);
					}
					currentLink = pathLink;
					currentLink.addClass(onClass);
				}
			});
		};
	});

angular.module('brokenlincApp', ['ngResource', 'ui', 'ui.bootstrap', 'brokenlinc'])
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