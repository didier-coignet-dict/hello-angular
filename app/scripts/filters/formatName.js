'use strict';

angular.module('stApp')
  .filter('formatName', function () {
    return function(value, textVar) {

        return value[textVar] || '\u00A0';

    };
  });
