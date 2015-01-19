'use strict';

/**
 * @ngdoc function
 * @name tutoAngularJsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tutoAngularJsApp
 */
angular.module('tutoAngularJsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
