'use strict';

angular.module('lib.directive').directive('sglkMaxlength', function () {

    return {
        require: 'ngModel',
        restrict: 'A',
        link: function postLink(scope, element, attrs, ctrl) {

            ctrl.$parsers.unshift(function(value) {

                console.log('value', value);

                var validity = undefined;
                /*scope.isLess    = false;
                scope.isMore    = false;
                scope.isEqual   = false;

                if(angular.isArray(value)) {

                    *//*if(scope.) {

                    }*//*

                    validity = value;
                }*/

                return validity;

                /*scope.pwdValidLength = (viewValue && viewValue.length >= 8 ? 'valid' : undefined);
                scope.pwdHasLetter = (viewValue && /[A-z]/.test(viewValue)) ? 'valid' : undefined;
                scope.pwdHasNumber = (viewValue && /\d/.test(viewValue)) ? 'valid' : undefined;

                if(scope.pwdValidLength && scope.pwdHasLetter && scope.pwdHasNumber) {
                    ctrl.$setValidity('pwd', true);
                    //elm.$setValidity('pwd', true); //<-- I WANT THIS TO WORK! (or something like it)

                    return viewValue;
                } else {
                    ctrl.$setValidity('pwd', false);
                    //elm.$setValidity('pwd', false); //<-- I WANT THIS TO WORK! (or something like it)

                    return undefined;
                }*/

            });

        }
    };

});
