'use strict';

angular.module('lib.filter').filter('formatName', function () {
    return function(value, index) {

        var nbsp = '\u00A0';

        var arrayToString = function(ar, id) {

            var st = '';

            for (var i = 0, len = ar.length; i < len; i++) {

                var item;

                if(angular.isString(ar[i])) {
                    // is string

                    item = ar[i] || nbsp;

                } else if(angular.isString(ar[i][id])) {
                    // is object

                    item = ar[i][id] || nbsp;

                } else {

                    item = nbsp;

                }

                st = i ? st + ', ' + item : st + item;

            }

            return st;

        };

        var ret;

        if(angular.isUndefined(value)) {

            ret = nbsp;

        } else if(angular.isString(value)) {
            // is string

            ret = value || nbsp;

        } else if(angular.isString(index) && !angular.isUndefined(value[index]) && angular.isString(value[index])) {
            // is object & value is string

            ret = value[index] || nbsp;

        } else if(angular.isArray(value) && value.length) {
            // is array

            // index test is done in arrayToString function
            ret = arrayToString(value, index);

        } else {

            ret = nbsp;

        }

        return ret;

    };
});
