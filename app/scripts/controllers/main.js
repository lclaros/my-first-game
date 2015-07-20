'use strict';

/**
 * @ngdoc function
 * @name myFirstGameApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myFirstGameApp
 */
angular.module('myFirstGameApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
