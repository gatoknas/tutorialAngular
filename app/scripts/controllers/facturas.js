'use strict';

/**
 * @ngdoc function
 * @name tutoAngularJsApp.controller:FacturasCtrl
 * @description
 * # FacturasCtrl
 * Controller of the tutoAngularJsApp
 */
angular.module('tutoAngularJsApp')
  .controller('FacturasCtrl', function ($scope, $log, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.items = [
      'The first choice!',
      'And another choice for you.',
      'but wait! A third!'
    ];

    $scope.status = {
      isopen: false
    };

    $scope.toggled = function (open) {
      $log.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function ($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.status.isopen = !$scope.status.isopen;
    };

    $scope.crearFacturaRedirect = function () {
      $location.path('crearfactura');
    };

  })

;
