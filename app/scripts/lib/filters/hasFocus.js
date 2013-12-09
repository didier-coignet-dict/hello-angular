'use strict';

angular.module('lib.filter').filter('hasFocus', function () {
    return function(options, $index, focused, value, textVar) {

        var resp    = false;

        if(options) {

            var option  = options[$index];

            if($index === focused ||
                (value &&
                    focused < 0 &&
                    option[textVar] === value[textVar])) {

                resp = true;

            }

        }

        return resp;

    };
});
