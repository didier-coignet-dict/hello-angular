'use strict';

angular.module('stApp').controller('ListCtrl', function ($scope, ProductService, ListService, Page, l10n) {

    var setLocale = function() {

        // set page metas
        Page.setMeta(l10n.get('list'));

    };

    // catch l10n locale change
    $scope.$on('l10n-locale', function() {
        setLocale();
    });
    setLocale();

    $scope.translate = function() {

        if(l10n.getLocale() == 'en-us') {

            l10n.setLocale('fr-fr');

        } else {

            l10n.setLocale('en-us');

        }


    };

    // set page static content
    $scope.l10n = l10n;

    // set list content
    $scope.products     = ProductService.products;
    $scope.formConfig   = ListService.priceFilter;

});
