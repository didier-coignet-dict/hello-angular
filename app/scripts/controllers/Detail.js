'use strict';

angular.module('stApp').controller('DetailCtrl', function ($scope, $routeParams, $filter, ProductService, ListService, i18n, Page) {

    Page.setMeta(i18n.detail[$routeParams.id]);

    $scope.product = ProductService.getById($routeParams.id);
    $scope.formConfig = ListService.priceFilter;

});
