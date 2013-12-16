'use strict';

angular.module('stApp').controller('DetailCtrl', function ($scope, $routeParams, $filter, ProductService, ListService, Page, l10n) {

    Page.setMeta(l10n.get('detail.'+$routeParams.id));

    $scope.product = ProductService.getById($routeParams.id);
    $scope.formConfig = ListService.priceFilter;

});
