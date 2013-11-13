'use strict';

angular.module('stApp')
  .controller('ListCtrl', function ($scope, Productservice) {

        $scope.products = Productservice.products;

  });
