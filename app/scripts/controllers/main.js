'use strict';

/**
 * @ngdoc function
 * @name tutoAngularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tutoAngularJsApp
 */
angular.module('tutoAngularJsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
