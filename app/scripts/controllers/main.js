'use strict';

angular.module('brokenlincApp')
	.controller('MainCtrl', function ($scope) {
		$scope.things = [{
			title:'KnockoutJS',
			url:'http://knockoutjs.com/',
			links:[{
				title:'docs',
				url:'http://knockoutjs.com/documentation/introduction.html'
			},{
				title:'validation',
				url:'http://github.com/ericmbarnard/Knockout-Validation'
			}]
		},{
			title:'LESS',
			url:'http://lesscss.org/'
		},{
			title:'Reddit',
			url:'http://www.reddit.com/'
		},{
			title:'GMail',
			url:'http://www.gmail.com/'
		},{
			title:'Yammer',
			url:'http://www.yammer.com/352media.com/'
		},{
			title:'Grooveshark',
			url:'http://www.grooveshark.com/'
		},{
			title:'Webmail',
			url:'http://connect.emailsrvr.com/'
		},{
			title:'Resistor Decoder',
			url:'http://worrydream.com/ResistorDecoder/'
		},{
			title:'ExpressJS',
			url:'http://expressjs.com/api.html'
		},{
			title:'Google WebFonts',
			url:'http://www.google.com/fonts/'
		},{
			title:'TypeKit',
			url:'https://typekit.com/'
		},{
			title:'Font Awesome',
			url:'http://fortawesome.github.io/Font-Awesome/icons/'
		},{
			title:'Glyphicons',
			url:'http://glyphicons.com/'
		},{
			title:'Heroku',
			url:'http://www.heroku.com/',
			links:[{
				title:'dash',
				url:'http://dashboard.heroku.com/'
			},{
				title:'brokenlinc',
				url:'http://dashboard.heroku.com/apps/brokenlinc/'
			}]
		},{
			title:'Bootstrap',
			url:'http://www.getbootstrap.com/',
			links:[{
				title:'2.3.2',
				url:'http://www.getbootstrap.com/2.3.2/'
			},{
				title:'ng directives',
				url:'http://angular-ui.github.io/bootstrap/'
			}]
		},{
			title:'jQuery',
			url:'http://api.jquery.com/',
			links:[{
				title:'plugin kickstart',
				url:'http://starter.pixelgraphics.us/'
			}]
		},{
			title:'AngularJS',
			url:'http://angularjs.org/',
			links:[{
				title:'docs',
				url:'http://docs.angularjs.org/guide/'
			},{
				title:'bs directives',
				url:'http://angular-ui.github.io/bootstrap/'
			}]
		}];
	});