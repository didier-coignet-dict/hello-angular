'use strict';

// TODO put it in e2e tests
describe('Directive: sglkSelect', function () {

    // load the directive's module
    beforeEach(module('lib.directive'));
    beforeEach(module('views/sglk-select.html', 'views/sglk-select.html'));

    var element,
        scope;

    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();

        scope.$apply(function() {

            scope.formConfig = {
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

        element = angular.element('<span sglk-select array-maxlength="formConfig.maxlength" data-multiple ng-model="formConfig.predicate" data-options="formConfig.options" data-text-var="text" data-required data-name="sglkSelectFilter" class="targetWidth"></span>');
        element = $compile(element)(scope);
    }));

    it('shouldn\'t activate an other option when 2 selected options from 3 choices and maxlength is 2', inject(function () {

        scope.$digest();

        // show list
        element.find('.btn-dropdown').click();

        // test
        element.find('.dropSelect > *:last-child').click();

        expect(element.find('.textWrap').html()).toBe('Rouge, Vert');

    }));

    it('should disactivate an option when 2 selected options from 3 choices and maxlength is 2', inject(function () {

        scope.$digest();

        // show list
        element.find('.btn-dropdown').click();

        // test
        element.find('.dropSelect > *:first-child').click();

        expect(element.find('.textWrap').html()).toBe('Vert');

    }));

    it('should activate an option when 1 selected options from 3 choices and maxlength is 2', inject(function () {

        scope.$apply(function() {
            return scope.formConfig.predicate = [{
                text    : 'Vert',
                color   : 'green'
            }];
        });

        // show list
        element.find('.btn-dropdown').click();

        // test
        element.find('.dropSelect > *:first-child').click();

        expect(element.find('.textWrap').html()).toBe('Rouge, Vert');

    }));

});
