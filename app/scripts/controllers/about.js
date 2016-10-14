'use strict';

/**
 * @ngdoc function
 * @name myFirstGameApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myFirstGameApp
 */
angular.module('myFirstGameApp')
    .controller('AboutCtrl', function($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.soundID = "Thunder";
        $scope.playSound = function() {
            console.log("Play Sound");
            createjs.Sound.play($scope.soundID);
            setTimeout($scope.stopSound, 1000);
        }

        $scope.stopSound = function() {
            console.log("Stopped Sound");
            createjs.Sound.stop($scope.soundID);
        }

        $scope.loadSound = function() {
            console.log("Load Sound");
            createjs.Sound.registerSound("images/0614.ogg", $scope.soundID);
        }
    });
