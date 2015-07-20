'use strict';

/**
 * @ngdoc service
 * @name myFirstGameApp.helloWorldService
 * @description
 * # helloWorldService
 * Service in the myFirstGameApp.
 */
angular.module('myFirstGameApp')
    .service('helloWorldService', function() {
        var manifest = [{
                src: "spritesheet_grant.png",
                id: "grant"
            }, {
                src: "sky.png",
                id: "sky"
            }, {
                src: "ground.png",
                id: "ground"
            }, {
                src: "hill1.png",
                id: "hill"
            }, {
                src: "hill2.png",
                id: "hill2"
            }],
            loader = new createjs.LoadQueue(true);

        this.getResult = function(asset) {
            return loader.getResult(asset);
        };
        this.getLoader = function() {
            return loader;
        };
        this.loadAssets = function() {
            loader.loadManifest(manifest, true, "images/");
        };
    });
