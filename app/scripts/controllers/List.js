'use strict';

angular.module('stApp').controller('ListCtrl', function ($scope, ProductService, ListService, Page, l10n) {

    //Page.setMeta(i18n.list);
    Page.setMeta(l10n.get('list'));

    console.log(l10n.get('list'));

    $scope.products     = ProductService.products;
    $scope.formConfig   = ListService.priceFilter;

});
