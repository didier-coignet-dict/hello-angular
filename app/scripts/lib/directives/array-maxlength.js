'use strict';

angular.module('lib.directive').directive('arrayMaxlength', function () {

    return {
        require: 'ngModel',
        restrict: 'A',
        link: function postLink(scope, element, attrs, ctrl) {

            // check value length
            var check = function(value) {

                var isValid = false;

                var target = scope.$eval(attrs.arrayMaxlength);
                var test = angular.isArray(value) || angular.isString(value) ? value : [];

                if(test.length <= target) {
                    isValid = true;
                }

                ctrl.$setValidity('arrayMaxlength', isValid);

                return value;

            };

            // DOM to model validation
            ctrl.$parsers.unshift(check);

            // model to DOM validation
            ctrl.$formatters.unshift(check);

        }
    };

});
