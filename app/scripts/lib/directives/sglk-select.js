'use strict';

/**
 * @license Tous droits réservés
 * @copyright DICT.fr
 * @author Yann Lombard (yann.lombard@sogelink.fr)
 * @module lib
 * @fileOverview Custom select directive
 */

angular.module('lib.directive').directive('sglkSelect', function () {

        return {
            templateUrl : 'views/sglk-select.html',
            restrict    : 'A',
            replace     : true,
            scope: {
                options     : '=',
                value       : '=ngModel',
                textVar     : '@',
                multiple    : '='
            },

            controller: function($scope, $filter, hasFocusFilter, selectedIndexFilter) {

                var self = this;
                $scope.isMultiple = false;
                $scope.opts = [];

                this.cloneOptionsFilter = function(options) {

                    var opts = [];

                    angular.forEach(options, function(option) {

                        opts.push({
                            active  : false,
                            value   : option
                        });

                    });

                    return opts;
                };

                // clone options into opts
                $scope.opts = self.cloneOptionsFilter($scope.options);

                $scope.init = true;

                // watch options change to update opts
                $scope.$watch('options', function(value) {

                    // reset opts content
                    $scope.opts = self.cloneOptionsFilter(value);

                    // reset value if not initializing
                    $scope.value = $scope.init ? $scope.value : null;

                    $scope.init = false;

                }, true);

                // sync selected values in value var with opts
                this.syncValues = function(values, options) {

                    var opts = angular.copy(options);

                    angular.forEach(opts, function(option) {

                        option.active = false;

                        angular.forEach(values, function(value) {

                            // seach for matching option
                            option.active = angular.equals(option.value, value) ? true : option.active;

                        });

                    });

                    return opts;

                };

                // observe value changes for two ways data binding
                $scope.$watch('value', function(value) {

                    $scope.opts = self.syncValues(value, $scope.opts);

                });

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

                // dispatch item click in simple or multiple case
                $scope.select = function(index) {

                    $scope.isMultiple ? $scope.selectMulti(index) : $scope.selectSimple(index);

                };

                // simple select item
                $scope.selectSimple = function(index) {

                    // set value > ngModel
                    if($scope.opts[index]) {
                        $scope.value = $scope.opts[index].value;
                    }

                    // hide dropdown list
                    $scope.hideDrop();

                };

                this.getActiveFilter = function(opts) {

                    var actives = [];

                    angular.forEach(opts, function(opt) {

                        if(opt.active) {
                            actives.push(opt.value);
                        }

                    });

                    return actives.length ? actives : null;

                };

                // select item in multiselect
                $scope.selectMulti = function(index) {

                    // set active param
                    if($scope.opts[index]) {

                        $scope.opts[index].active = !$scope.opts[index].active;

                    }

                    $scope.value = self.getActiveFilter($scope.opts);

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

                                //$scope.selectFocused();
                                $scope.select($scope.focused);

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

            },
            link: function(scope, element, attrs, ctrl) {

                scope.isMultiple = !angular.isUndefined(attrs.multiple);

                var $dropSelect = element.find('.dropSelect');

                // scroll drop down top when rebuild options list
                scope.$watch('options', function() {

                    $dropSelect.scrollTop(0);

                }, true);

            }
        };
    }
)/*.directive('sglkOption', function () {

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