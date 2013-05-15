'use strict';


// Declare app level module which depends on filters, and services
var an5anApp = angular.module('myApp', ['myApp.filters', 'ax5an.services', 'ui.bootstrap.dialog']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.when('/project', {templateUrl: 'partials/projects.html', controller: 'ProjectCtrl'});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
