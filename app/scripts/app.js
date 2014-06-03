'use strict';

var sanguineTestApp = angular.module('sanguineTestApp', [
  'ngRoute',
  'ui.bootstrap'
]);

sanguineTestApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
  });

sanguineTestApp.directive('href', function() {
  return {
    compile: function(element) {
      element.attr('target', '_blank');
    }
  };
});

