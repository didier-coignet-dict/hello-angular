'use strict';

/**
 * @license Tous droits réservés
 * @copyright DICT.fr
 * @author Yann Lombard (yann.lombard@sogelink.fr)
 * @module stApp
 * @fileOverview Custom multi select directive
 */

angular.module('stApp').directive('sglkMultiSelect', function () {

    return {
        templateUrl: 'views/directives/sglk-multi-select.html',
        restrict: 'A',
        replace : true,
        scope: {
            options     : '=',
            value       : '=ngModel',
            multiple    : '@',
            textVar     : '@',
            getActive   : '&'
        },

        controller: function($scope, $filter) {

            // is shown dropdown list ?
            $scope.show = false;

            // get active item > ngModel
            $scope.getActive = function() {

                return $filter('filter')($scope.options, {active: true});

            };

            // toggle dropdown list
            $scope.toggle = function() {

                $scope.show = !$scope.show;

            };

            // hide dropdown list
            $scope.hideDrop = function() {

                $scope.show = false;

            };

            // show dropdown list
            $scope.showDrop = function() {

                $scope.show = true;

            };

            // item click handler
            $scope.clickHandler = function(clicked) {

                if($scope.isMultiple) {

                    $scope.toggleSelect(clicked);

                } else {

                    $scope.select(clicked);

                }

            };

            // simple select item
            $scope.select = function(clicked) {

                // unselect previous item
                angular.forEach($scope.options, function(option) {

                    option.active = false;

                });

                // set active
                clicked.active = true;

                // set value > ngModel
                $scope.value = clicked || {};

                // hide dropdown list
                $scope.hideDrop();

            };

            // toggle clicked item active value
            $scope.toggleSelect = function(clicked) {

                clicked.active = !clicked.active;

                $scope.value = $scope.getActive();

            }

        },

        link: function(scope, element, attrs) {

            // TODO do it best
            var undefinedOrNull = function(variable) {

                return !angular.isUndefined(variable) || variable;

            };

            // is multiple dropdown list ?
            scope.isMultiple = undefinedOrNull(attrs.multiple);

        }

    };

});

angular.module('stApp').filter('formatName', function () {

    return function(value, textVar) {

        var text = '',
            init = true;

        if(angular.isArray(value)) {

            // multiple
            angular.forEach(value, function(val) {

                text = init ? val[textVar] : text + ', ' + val[textVar];
                init = false;

            });

            text = text || '\u00A0';

        } else {

            // simple
            text = value[textVar] || '\u00A0';

        }

        return text;

    };
});