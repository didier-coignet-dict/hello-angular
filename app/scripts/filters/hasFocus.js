'use strict';

angular.module('stApp').filter('hasFocus', function () {
    return function(options, $index, focused, value, textVar) {

        var resp    = false,
            option  = options[$index];

        if($index === focused ||
            value &&
                focused < 0 &&
                option[textVar] === value[textVar]) {

            resp = true;
        }

        return resp;

    };
});
