'use strict';

// TODO put it in e2e tests
describe('Directive: sglkSelect', function () {

    // load the directive's module
    beforeEach(module('lib.directive'));
    beforeEach(module('views/directives/sglk-select.html', 'views/directives/sglk-select.html'));

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
                }]
            };

            return scope;
        });

        element = angular.element('<span sglk-select data-multiple ng-model="formConfig.predicate" data-options="formConfig.options" data-text-var="text" data-required data-name="sglkSelectFilter" class="targetWidth"></span>');
        element = $compile(element)(scope);
    }));

    it('should initiate element with 2 selected options from 3 choices', inject(function () {

        scope.$digest();

        expect(element.find('.textWrap').text()).toBe('Rouge, Vert');

    }));

    it('should initiate element with no selected option from 3 options', inject(function () {

        scope.$apply(function() {
            return scope.formConfig.predicate = null;
        });

        expect(element.find('.textWrap').html()).toBe('&nbsp;');

    }));

    it('should initiate element with 3 options', inject(function () {

        scope.$digest();

        expect(element.find('.dropSelect > *').length).toEqual(3);

    }));

    it('should initiate element with 2 checked options and have 2 checked lines', inject(function () {

        scope.$digest();

        expect(element.find('.dropSelect input:checked').length).toEqual(2);

    }));

    it('should have no checked items when predicate is empty', inject(function () {

        scope.$apply(function() {
            return scope.formConfig.predicate = null;
        });

        expect(element.find('.dropSelect input:checked').length).toEqual(0);

    }));

    it('should have text update when predicate is updated by external function', inject(function () {

        scope.$digest();

        scope.$apply(function() {
            return scope.formConfig.predicate = [{
                text    : 'Rouge',
                color   : 'red'
            }];
        });

        expect(element.find('.textWrap').html()).toBe('Rouge');

    }));

    it('should have checked the right option when predicate is updated by external function', inject(function () {

        scope.$digest();

        scope.$apply(function() {
            return scope.formConfig.predicate = [{
                text    : 'Rouge',
                color   : 'red'
            }];
        });

        expect(element.find('.dropSelect input:checked').next().text()).toBe('Rouge');

    }));

    it('should have checked the right number of options when predicate is updated by external function', inject(function () {

        scope.$digest();

        scope.$apply(function() {
            return scope.formConfig.predicate = [{
                text    : 'Rouge',
                color   : 'red'
            }];
        });

        expect(element.find('.dropSelect input:checked').length).toEqual(1);

    }));

    it('should have no checked options when predicate don\'t match with options', inject(function () {

        scope.$digest();

        scope.$apply(function() {
            return scope.formConfig.predicate = [{
                text    : 'Orange',
                color   : 'orange'
            }];
        });

        expect(element.find('.dropSelect input:checked').length).toEqual(0);

    }));


    it('should have new options list when options list is updated', inject(function () {

        scope.$digest();

        scope.$apply(function() {
            return scope.formConfig.options = [{
                text    : 'Rouge',
                color   : 'red'
            }, {
                text    : 'Vert',
                color   : 'green'
            }];
        });

        expect(element.find('.dropSelect > *').length).toEqual(2);

    }));

    it('should have no checked options when options list is updated', inject(function () {

        scope.$digest();

        scope.$apply(function() {
            return scope.formConfig.options = [{
                text    : 'Rouge',
                color   : 'red'
            }, {
                text    : 'Vert',
                color   : 'green'
            }];
        });

        expect(element.find('.dropSelect input:checked').length).toEqual(0);

    }));


    it('should empty predicate when options list is updated', inject(function () {

        scope.$digest();

        scope.$apply(function() {
            return scope.formConfig.options = [{
                text    : 'Rouge',
                color   : 'red'
            }, {
                text    : 'Vert',
                color   : 'green'
            }];
        });

        expect(scope.formConfig.predicate).toBe(null);

    }));


    it('should update text when enter key selection', inject(function () {

        scope.$digest();

        // show list
        element.find('.btn-dropdown').click();

        // focus on first item
        var e = jQuery.Event("keydown");
        e.keyCode = 40;// down arrow keycode
        element.trigger(e);

        // type enter key
        var e = jQuery.Event("keydown");
        e.keyCode = 13;// enter keycode
        element.trigger(e);

        expect(element.find('.textWrap').html()).toBe('Vert');

    }));

    it('should update text when click on item', inject(function () {

        scope.$digest();

        // show list
        element.find('.btn-dropdown').click();

        // test
        element.find('.dropSelect > *:first-child').click();

        expect(element.find('.textWrap').html()).toBe('Vert');

    }));

    it('shouldn\'t collapse dropdown list when item select by click', inject(function () {

        scope.$digest();

        // show list
        element.find('.btn-dropdown').click();

        // test
        element.find('.dropSelect > *:first-child').click();

        expect(element.find('.dropSelect').hasClass('hide')).toBeFalsy();

    }));

    it('shouldn\'t collapse dropdown list when item select by enter key', inject(function () {

        scope.$digest();

        // show list
        element.find('.btn-dropdown').click();

        // focus on first item
        var e = jQuery.Event("keydown");
        e.keyCode = 40;// down arrow keycode
        element.trigger(e);

        // type enter key
        var e = jQuery.Event("keydown");
        e.keyCode = 13;// enter keycode
        element.trigger(e);

        expect(element.find('.dropSelect').hasClass('hide')).toBeFalsy();

    }));

});
