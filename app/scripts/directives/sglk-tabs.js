'use strict';

angular.module('stApp').directive('sglkTabs', function () {

    return {
        templateUrl: 'views/sglk-tabs.html',
        transclude: true,
        restrict: 'A',
        scope: {},
        controller: function($scope) {

            $scope.panes = [];

            // scope function
            $scope.select = function(pane) {

                angular.forEach($scope.panes, function(pane) {
                    pane.active = false;

                });

                pane.active = true;

            };

            // this.functionName expose function to be accessible in tab directive
            // (requirer with require: '^sglkTabs' & injected into link with sglkTabsCtrl)
            this.addPane = function(pane) {

                if(!$scope.panes.length) {
                    $scope.select(pane);
                }

                $scope.panes.push(pane);

            };

        }
    };
}).directive('sglkTab', function () {

    return {
        require: '^sglkTabs',
        templateUrl: 'views/sglk-tab.html',
        transclude: true,
        restrict: 'A',
        scope: {
            text: '@'
        },
        controller: function($scope) {

            // unable to inject sglkTabsCtrl in controller like line below
            //controller: function($scope, sglkTabsCtrl) {

        },
        link: function postLink(scope, element, attrs, sglkTabsCtrl) {
            // sglkTabsCtrl is arbitrary. only order matters

            // call exposed function from sglkTabs directive's controller
            sglkTabsCtrl.addPane(scope);

        }
    };
});
