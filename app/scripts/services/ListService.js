'use strict';

angular.module('stApp').service('ListService', function ListService(l10n) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    console.log('Version', l10n.getLocale());

    var productsFilter = {

        options: [{
            text    : 'Prix croissant',
            value   : '+price'
        }, {
            text    : 'Prix décroissant',
            value   : '-price'
        }],

        colorOptions: [{
            text    : 'Rouge',
            color   : 'red'
        }, {
            text    : 'Vert',
            color   : 'green'
        }, {
            text    : 'Bleu',
            color   : 'blue'
        }],

        reverse     : false,
        maxlength   : 2
    };

    productsFilter.predicate       = {
        text    : 'Prix croissant',
        value   : '+price'
    };
    productsFilter.predicateColor  = [{
        text    : 'Rouge',
        color   : 'red'
    }, {
        text    : 'Vert',
        color   : 'green'
    }];

    return {
        priceFilter: productsFilter
    };

});