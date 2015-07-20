'use strict';

/**
 * @ngdoc function
 * @name myFirstGameApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myFirstGameApp
 */
angular.module('myFirstGameApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
