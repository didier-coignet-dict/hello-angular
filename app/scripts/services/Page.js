'use strict';

angular.module('stApp').factory('Page', function () {

    var title       = 'Hello Angular',
        description = 'Hello Angular description';

    // Public API here
    return {
        title: function() {
            return title;
        },
        description: function() {
            return description;
        },
        setMeta: function(newMeta) {
            title       = newMeta.title;
            description = newMeta.description;
        }
    };
});