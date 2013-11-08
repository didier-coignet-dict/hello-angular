'use strict';

angular.module('stApp')
  .controller('DetailCtrl', function ($scope, $routeParams, Sextoyservice) {

        $scope.sextoy = Sextoyservice.toys[$routeParams.id];

  });
