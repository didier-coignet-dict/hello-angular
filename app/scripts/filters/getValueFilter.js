'use strict';

angular.module('stApp').filter('getValueFilter', function () {
    return function (items, values, name) {

        var hasValue = [];

        if(values && values.length) {

            angular.forEach(items, function(item) {

                angular.forEach(values, function(value) {

                    if(item[name] == value[name]) {

                        hasValue.push(item);
                    }

                });

            });

        } else {

            hasValue = items;

        }


        return hasValue;

    };
});
