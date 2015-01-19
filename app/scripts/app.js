'use strict';

/**
 * @ngdoc overview
 * @name tutoAngularJsApp
 * @description
 * # tutoAngularJsApp
 *
 * Main module of the application.
 */
angular
  .module('tutoAngularJsApp', [
    'ui.bootstrap',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/facturas', {
        templateUrl: 'views/facturas.html',
        controller: 'FacturasCtrl'
      })
      .when('/crearfactura', {
        templateUrl: 'views/crearfactura.html',
        controller: 'FacturasCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
