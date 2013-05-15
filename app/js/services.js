'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.

/*angular.module('myApp.services', []).
  value('version', '0.1');*/


/*
angular.module('ax5an.services', []).
	factory('Project', function($rootScope, $http) {
		var parseUrl = "http://localhost:8080/ax5spike/rest/project";
		return {
			get: function(callback) {
				$http.get(
					parseUrl
				).success(function(response) {
					$rootScope.$apply(function() { callback(null, response); });
				}).error(function(response) {
					$rootScope.$apple(function() { callback(response.error || "Could not query projects"); });
				});
			}
		}
	})
*/

angular.module('ax5an.services', ['ngResource']).
	factory('Project', function($resource) {
		return $resource('http://localhost\\:8080/ax5spike/rest/project' + '/:id' + '/:name', {id: '@id', name: '@name'}, {
			query: { method: 'GET', params:{}, isArray:true },
			create: { method: 'PUT', params: {} },
			delete: { method: 'DELETE', params: {} },
			update: { method: 'POST', params: {} }
		});
	});