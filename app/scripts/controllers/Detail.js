'use strict';

angular.module('stApp')
  .controller('DetailCtrl', function ($scope, $routeParams, $filter, ProductService, ListService) {

        $scope.product = ProductService.getById($routeParams.id);
        $scope.formConfig = ListService.priceFilter;

        //$scope.htmlReady();

  });
