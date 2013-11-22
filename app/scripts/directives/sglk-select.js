'use strict';

/**
 * @license Tous droits réservés
 * @copyright DICT.fr
 * @author Yann Lombard (yann.lombard@sogelink.fr)
 * @module stApp
 * @fileOverview Custom select directive
 */

angular.module('stApp').directive('sglkSelect', function () {

    return {
        templateUrl: 'views/directives/sglk-select.html',
        restrict: 'A',
        replace : true,
        scope: {
            options     : '=',
            value       : '=ngModel',
            multiple    : '@',
            textVar     : '@'
        },

        controller: function($scope, $filter) {

            // is shown dropdown list ?
            $scope.show = false;

            // toggle dropdown list
            $scope.toggle = function() {

                $scope.show = !$scope.show;

            };

            // hide dropdown list
            $scope.hideDrop = function() {

                $scope.show = false;

            };

            // simple select item
            $scope.select = function(clicked) {

                // set value > ngModel
                $scope.value = clicked || {};

                // hide dropdown list
                $scope.hideDrop();

            };

        }

    };

});

angular.module('stApp').filter('formatName', function () {

    return function(value, textVar) {

        return value[textVar] || '\u00A0';

    };
});