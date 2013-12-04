'use strict';

angular.module('stApp').filter('selectedIndex', function () {
    return function(value, options, text) {

        var selected = -1;

        if(value && !angular.isUndefined(value[text])) {

            angular.forEach(options, function(option, $index) {

                if(selected == -1 && option[text] == value[text]) {

                    selected = $index;
                }

            });

        }

        return selected;

    };
});
