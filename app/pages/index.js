'use strict';

angular.module('brokenlincApp')
	.controller('pages/index', function ($scope) {
		$scope.things = [{
			title:'Bootstrap',
			url:'http://www.getbootstrap.com/',
			key:'bootstrap',
			links:[{
				title:'2.3.2',
				url:'http://www.getbootstrap.com/2.3.2/'
			},{
				title:'ng directives',
				url:'http://angular-ui.github.io/bootstrap/'
			}]
		},{
			title:'Reddit',
			url:'http://www.reddit.com/',
			key:'reddit'
		},{
			title:'Glyphicons',
			url:'http://glyphicons.com/',
			key:'glyphicons'
		},{
			title:'Font Awesome',
			url:'http://fortawesome.github.io/Font-Awesome/icons/',
			key:'font-awesome'
		},{
			title:'Heroku',
			url:'http://www.heroku.com/',
			key:'heroku',
			links:[{
				title:'dash',
				url:'http://dashboard.heroku.com/'
			},{
				title:'brokenlinc',
				url:'http://dashboard.heroku.com/apps/brokenlinc/'
			}]
		},{
			title:'GMail',
			url:'http://www.gmail.com/',
			key:'gmail'
		},{
			title:'Webmail',
			url:'http://connect.emailsrvr.com/',
			key:'exchange'
		},{
			title:'AngularJS',
			url:'http://angularjs.org/',
			key:'angularjs',
			links:[{
				title:'docs',
				url:'http://docs.angularjs.org/guide/'
			},{
				title:'bs directives',
				url:'http://angular-ui.github.io/bootstrap/'
			}]
		},{
			title:'jQuery',
			url:'http://api.jquery.com/',
			key:'jquery',
			links:[{
				title:'plugin kickstart',
				url:'http://starter.pixelgraphics.us/'
			}]
		},{
			title:'KnockoutJS',
			url:'http://knockoutjs.com/',
			key:'knockoutjs',
			links:[{
				title:'docs',
				url:'http://knockoutjs.com/documentation/introduction.html'
			},{
				title:'validation',
				url:'http://github.com/ericmbarnard/Knockout-Validation'
			}]
		},{
			title:'LESS',
			url:'http://lesscss.org/',
			key:'lesscss'
		},{
			title:'Yammer',
			url:'http://www.yammer.com/352media.com/',
			key:'yammer'
		},{
			title:'Grooveshark',
			url:'http://www.grooveshark.com/',
			key:'grooveshark'
		},{
			title:'Google WebFonts',
			url:'http://www.google.com/fonts/',
			key:'google-fonts'
		},{
			title:'TypeKit',
			url:'https://typekit.com/',
			key:'typekit'
		},{
			title:'ExpressJS',
			url:'http://expressjs.com/api.html',
			key:'shim'
		},{
			title:'Resistor Decoder',
			url:'http://worrydream.com/ResistorDecoder/',
			key:'shim'
		}];
	});