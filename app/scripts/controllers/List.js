'use strict';

angular.module('stApp').controller('ListCtrl', function ($scope, ProductService, ListService, i18n, Page) {

    Page.setMeta(i18n.list);

    $scope.products     = ProductService.products;
    $scope.formConfig   = ListService.priceFilter;

});
