'use strict';

angular.module('stApp').controller('DetailCtrl', function ($scope, $routeParams, $filter, ProductService, ListService, Page, l10n) {

    var setLocale = function() {

        // set page meta
        Page.setMeta(l10n.get('detail.'+$routeParams.id));

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

    // set product content
    $scope.product      = ProductService.getById($routeParams.id);
    $scope.formConfig   = ListService.priceFilter;

});
