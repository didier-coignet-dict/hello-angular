'use strict';

describe('Directive: arrayMaxlength', function () {

    // load the directive's module
    beforeEach(module('lib.directive'));
    beforeEach(module('views/sglk-select.html', 'views/sglk-select.html'));

    var element,
        scope;

    beforeEach(inject(function ($rootScope, $compile) {

        scope = $rootScope.$new();

        scope.$apply(function() {

            scope.config = {
                predicate : [{
                    text    : 'Rouge',
                    color   : 'red'
                }, {
                    text    : 'Vert',
                    color   : 'green'
                }],

                options: [{
                    text    : 'Rouge',
                    color   : 'red'
                }, {
                    text    : 'Vert',
                    color   : 'green'
                }, {
                    text    : 'Bleu',
                    color   : 'blue'
                }],
                maxlength : 2
            };

            return scope;
        });

        element = angular.element('<form name="form"><span array-maxlength="config.maxlength" ng-model="config.predicate" data-options="config.options" data-text-var="text" data-name="sglkSelect"></span></form>');
        element = $compile(element)(scope);

    }));

    it('should be KO when maxlength is 1 and 2 item selected', inject(function () {

        scope.$apply(function() {
            return scope.config.maxlength = 1;
        });

        expect(scope.form.sglkSelect.$error.arrayMaxlength).toBe(true);

    }));

    it('should be OK when maxlength is 2 and 2 item selected', inject(function () {

        scope.$apply(function() {
            return scope.config.maxlength = 2;
        });

        expect(scope.form.sglkSelect.$error.arrayMaxlength).toBe(false);

    }));

    it('should be OK when maxlength is 3 and 2 item selected', inject(function () {

        scope.$apply(function() {
            return scope.config.maxlength = 3;
        });

        expect(scope.form.sglkSelect.$error.arrayMaxlength).toBe(false);

    }));

    it('should be OK when maxlength transmit by direct integer, is 3 and 2 item selected', inject(function ($compile) {

        element = angular.element('<form name="form"><span array-maxlength="3" ng-model="config.predicate" data-options="config.options" data-text-var="text" data-name="sglkSelect"></span></form>');
        element = $compile(element)(scope);

        scope.$digest();

        expect(scope.form.sglkSelect.$error.arrayMaxlength).toBe(false);

    }));

    it('should be OK when maxlength transmit by direct integer, is 2 and 2 item selected', inject(function ($compile) {

        element = angular.element('<form name="form"><span array-maxlength="2" ng-model="config.predicate" data-options="config.options" data-text-var="text" data-name="sglkSelect"></span></form>');
        element = $compile(element)(scope);

        scope.$digest();

        expect(scope.form.sglkSelect.$error.arrayMaxlength).toBe(false);

    }));

    it('should be OK when maxlength transmit by direct integer, is 1 and 2 item selected', inject(function ($compile) {

        element = angular.element('<form name="form"><span array-maxlength="1" ng-model="config.predicate" data-options="config.options" data-text-var="text" data-name="sglkSelect"></span></form>');
        element = $compile(element)(scope);

        scope.$digest();

        expect(scope.form.sglkSelect.$error.arrayMaxlength).toBe(true);

    }));

    it('should be OK when maxlength transmit by string value, is 3 and 2 item selected', inject(function ($compile) {

        element = angular.element('<form name="form"><span array-maxlength="\'3\'" ng-model="config.predicate" data-options="config.options" data-text-var="text" data-name="sglkSelect"></span></form>');
        element = $compile(element)(scope);

        scope.$digest();

        expect(scope.form.sglkSelect.$error.arrayMaxlength).toBe(false);

    }));

    it('should be OK when maxlength transmit by string value, is 2 and 2 item selected', inject(function ($compile) {

        element = angular.element('<form name="form"><span array-maxlength="\'2\'" ng-model="config.predicate" data-options="config.options" data-text-var="text" data-name="sglkSelect"></span></form>');
        element = $compile(element)(scope);

        scope.$digest();

        expect(scope.form.sglkSelect.$error.arrayMaxlength).toBe(false);

    }));

    it('should be OK when maxlength transmit by string value, is 1 and 2 item selected', inject(function ($compile) {

        element = angular.element('<form name="form"><span array-maxlength="\'1\'" ng-model="config.predicate" data-options="config.options" data-text-var="text" data-name="sglkSelect"></span></form>');
        element = $compile(element)(scope);

        scope.$digest();

        expect(scope.form.sglkSelect.$error.arrayMaxlength).toBe(true);

    }));
});
