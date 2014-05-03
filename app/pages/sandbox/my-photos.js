'use strict';

angular.module('brokenlincApp')
	.controller('pages/sandbox/my-photos', function ($scope) {

		//Flickr public API: Recently Uploaded
		$scope.gallery_config = {
			url:'http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK',
			map: {
				'collection': 'items',
				'thumbnail': 'media.m',
				'url': 'link'
			}
		};

		//tags, tagmode

		//BWC on Tumbler: Photos Only
		// $scope.gallery_config = {
		// 	url:'http://bwc.tumblr.com/api/read/json?type=photo&callback=JSON_CALLBACK',
		// 	map: {
		// 		'collection': 'posts',
		// 		'thumbnail': 'photo-url-250',
		// 		'fullscreen': 'photo-url-1280',
		// 		'url': 'url'
		// 	}
		// };
		
		//start, num, search

		// $scope.gallery_config = {
		// 	api: {
		// 		url:'http://api.flickr.com/services/feeds/photos_public.gne',
		// 		get: {
		// 			static: {
		// 				format:'json',
		// 				jsoncallback:'JSON_CALLBACK'
		// 			},
		// 			map: {
		// 				'tags': 'tags',
		// 				'tagmode': 'tagmode'
		// 			}
		// 		},
		// 		response: {
		// 			'collection': 'items',
		// 			'thumbnail': 'media.m',
		// 			'url': 'link'
		// 		}
		// 	}
		// };
	});