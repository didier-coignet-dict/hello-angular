'use strict';

angular.module('stApp')
  .controller('ListCtrl', function ($scope, ProductService, ListService) {

        $scope.products     = ProductService.products;
        $scope.formConfig   = ListService.priceFilter;

        //$scope.htmlReady();

  });
