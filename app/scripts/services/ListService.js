'use strict';

angular.module('stApp').service('ListService', function ListService() {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var priceFilter = {

        options: [{
            text    : 'Prix croissant',
            value   : '+price'
        }, {
            text    : 'Prix décroissant',
            value   : '-price'
        }],

        reverse: false
    };

    priceFilter.predicate = priceFilter.options[1];

    return {
        priceFilter: priceFilter
    };

});