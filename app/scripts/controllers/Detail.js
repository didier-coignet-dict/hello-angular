'use strict';

angular.module('stApp')
  .controller('DetailCtrl', function ($scope, $routeParams, Productservice) {

        $scope.product = Productservice.products[$routeParams.id];

        $scope.htmlReady();

  });
