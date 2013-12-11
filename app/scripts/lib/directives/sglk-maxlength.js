'use strict';

angular.module('lib.directive').directive('sglkMaxlength', function () {

    return {
        require: 'ngModel',
        restrict: 'A',
        link: function postLink(scope, element, attrs, ctrl) {

            // check value length
            var check = function(value) {

                var isValid = false;

                var target = scope.$eval(attrs.sglkMaxlength);
                var test = angular.isArray(value) || angular.isString(value) ? value : [];

                if(test.length <= target) {
                    isValid = true;
                }

                ctrl.$setValidity('sglkMaxlength', isValid);

                return value;

            };

            // DOM to model validation
            ctrl.$parsers.unshift(check);

            // model to DOM validation
            ctrl.$formatters.unshift(check);

        }
    };

});
