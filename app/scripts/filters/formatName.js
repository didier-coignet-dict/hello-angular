'use strict';

angular.module('stApp')
  .filter('formatName', function () {
    return function(value, textVar) {

        var nbsp = '\u00A0';

        var arrayToString = function(ar, id) {

            var st = '';

            for (var i = 0, len = ar.length; i < len; i++) {

                var item = angular.isString(ar[i]) ? ar[i] : ar[i][id];

                item = item || nbsp;

                st = i ? st + ', ' + item : st + item;

            }

            return st;

        };

        var ret;
        if(value && value[textVar] && angular.isArray(value[textVar])) {

            ret = arrayToString(value[textVar]);

        } else if(value && value[textVar]) {

            ret = value[textVar];

        } else if(angular.isArray(value)) {

            ret = arrayToString(value, textVar);

        } else if(angular.isString(value)) {

            ret = value;

        } else {

            ret = nbsp;

        }

        return ret;

    };
  });
