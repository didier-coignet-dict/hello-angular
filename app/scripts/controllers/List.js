'use strict';

angular.module('stApp')
  .controller('ListCtrl', function ($scope, Sextoyservice) {

        $scope.toys = Sextoyservice.toys;


  });
