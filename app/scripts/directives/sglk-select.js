'use strict';

/**
 * @license Tous droits réservés
 * @copyright DICT.fr
 * @author Yann Lombard (yann.lombard@sogelink.fr)
 * @module stApp
 * @fileOverview Custom select directive
 */

angular.module('stApp')
    .controller('SglkSelectController', ['$scope', '$filter', 'hasFocusFilter', 'selectedIndexFilter',
        function($scope, $filter, hasFocusFilter, selectedIndexFilter) {

        // dropdown list visibility
        $scope.show = false;

        // toggle dropdown list
        $scope.toggle = function() {

            $scope.show ? $scope.hideDrop() : $scope.showDrop();

        };

        // hide dropdown list
        $scope.hideDrop = function() {

            $scope.show = false;

            // reset focused index
            $scope.focused = -1;

        };

        // show dropdown list
        $scope.showDrop = function() {

            $scope.show = true;

            // set focused index based on a filter of selected option
            if($scope.value) {

                $scope.focused = selectedIndexFilter($scope.value, $scope.options, $scope.textVar);

            }

        };

        // simple select item
        $scope.select = function(clicked) {

            // set value > ngModel
            if(clicked) {
                $scope.value = clicked;
            }

            // hide dropdown list
            $scope.hideDrop();

        };

        // init selected item
        $scope.focused = -1;

        $scope.hasFocus = function($index) {

            return hasFocusFilter($scope.options,
                $index,
                $scope.focused,
                $scope.value,
                $scope.textVar);

        };

        $scope.selectFocused = function() {

            $scope.select($scope.options[$scope.focused]);

        };

        $scope.focusNext = function() {

            $scope.focused = $scope.focused + 1 < $scope.options.length ? $scope.focused + 1 : 0;

        };

        $scope.focusPrev = function() {

            $scope.focused = $scope.focused - 1 >= 0  ? $scope.focused - 1 : $scope.options.length - 1;

        };

        $scope.keyDownHandler = function(e) {

            // catch arrow navigation
            switch (e.keyCode) {

                case 27:// Escape key

                    e.preventDefault();
                    $scope.hideDrop();

                    break;

                case 9:// TAB key

                    $scope.hideDrop();

                    break;

                case 13:// Enter key

                    e.preventDefault();
                    // if drop show
                    if($scope.show && $scope.focused > -1) {

                        $scope.selectFocused();

                    } else if($scope.show) {

                        $scope.hideDrop();

                    } else {

                        $scope.showDrop();

                    }

                    break;

                case 38:// up arrow key

                    e.preventDefault();
                    $scope.focusPrev();

                    break;

                case 40:// down arrow key

                    e.preventDefault();
                    $scope.focusNext();

                    break;
            }

        }

    }]).directive('sglkSelect', function () {

    return {
        templateUrl : 'views/directives/sglk-select.html',
        restrict    : 'A',
        replace     : true,
        scope: {
            options     : '=',
            value       : '=ngModel',
            textVar     : '@'
        },

        controller: 'SglkSelectController'
    };

})/*.directive('sglkOption', function () {

    return {
        templateUrl: 'views/directives/sglk-option.html',
        //transclude: true,
        require: '^sglkSelect',
        link: function(scope, element, attrs, sglkSelectCtrl) {

            scope.text = scope.o[sglkSelectCtrl.getTextVar()];

            sglkSelectCtrl.addOption(scope);

        }
    };

})*/;