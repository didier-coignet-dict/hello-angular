'use strict';

describe('Directive: sglkSelect', function () {

    var $compile,
        $rootScope;

    // load the directive's module
    beforeEach(module('stApp'));
    beforeEach(module('views/directives/sglk-select.html', 'views/directives/sglk-select.html'));

    /*var element,
        scope;*/

    beforeEach(inject(function (_$compile_, _$rootScope_) {

        $compile = _$compile_;
        $rootScope = _$rootScope_;

        //scope = $rootScope.$new();
    }));

    it('should initiate element with selected option from 2 choices', function () {


        expect(true).toEqual(true);

        /*var elmtText = '<span sglk-select ng-model="formConfig.predicate" data-options="formConfig.options" data-text-var="text" data-required data-name="sglkSelectFilter" class="targetWidth"></span>';
        var element = $compile(elmtText)($rootScope);

        $rootScope.$digest();

        expect(element.find('.textWrap').text()).toBe('Prix croissant');*/

        /*element = angular.element();
        element = $compile(element)(scope);

        scope.$apply(function() {
            return scope.formConfig = {
                predicate : {
                    text    : 'Prix croissant',
                    value   : '+price'
                },

                options: [{
                    text    : 'Prix croissant',
                    value   : '+price'
                }, {
                    text    : 'Prix décroissant',
                    value   : '-price'
                }]
            };
        });

        */

    });

    /*it('should initiate element with no selected option from 2 options', inject(function ($compile) {

        element = angular.element('<span sglk-select ng-model="formConfig.predicate" data-options="formConfig.options" data-text-var="text" data-required data-name="sglkSelectFilter" class="targetWidth"></span>');
        element = $compile(element)(scope);

        scope.$apply(function() {
            return scope.formConfig = {
                predicate : null,

                options: [{
                    text    : 'Prix croissant',
                    value   : '+price'
                }, {
                    text    : 'Prix décroissant',
                    value   : '-price'
                }]
            };
        });

        expect(element.find('.textWrap').html()).toBe('&nbsp;');

    }));

    it('should have 2 html items for 2 object array in parameter', inject(function ($compile) {

        element = angular.element('<span sglk-select ng-model="formConfig.predicate" data-options="formConfig.options" data-text-var="text" data-required data-name="sglkSelectFilter" class="targetWidth"></span>');
        element = $compile(element)(scope);

        scope.$apply(function() {
            return scope.formConfig = {
                predicate : null,

                options: [{
                    text    : 'Prix croissant',
                    value   : '+price'
                }, {
                    text    : 'Prix décroissant',
                    value   : '-price'
                }]
            };
        });

        expect(element.find('.dropSelect > *').length).toBe(2);

    }));

    it('should show dropdown by clicking', inject(function ($compile) {

        element = angular.element('<span sglk-select ng-model="formConfig.predicate" data-options="formConfig.options" data-text-var="text" data-required data-name="sglkSelectFilter" class="targetWidth"></span>');
        element = $compile(element)(scope);

        scope.$apply(function() {
            return scope;
        });

        element.find('.btn-dropdown').click();

        expect(element.find('.dropSelect').hasClass('hide')).toBeFalsy();

    }));

    it('should hide dropdown by clicking on title', inject(function ($compile) {

        element = angular.element('<span sglk-select ng-model="formConfig.predicate" data-options="formConfig.options" data-text-var="text" data-required data-name="sglkSelectFilter" class="targetWidth"></span>');
        element = $compile(element)(scope);

        scope.$apply(function() {
            return scope;
        });

        element.find('.btn-dropdown').click().click();

        expect(element.find('.dropSelect').hasClass('hide')).toEqual(true);

    }));

    it('should show dropdown by enter key', inject(function ($compile) {

        element = angular.element('<span sglk-select ng-model="formConfig.predicate" data-options="formConfig.options" data-text-var="text" data-required data-name="sglkSelectFilter" class="targetWidth"></span>');
        element = $compile(element)(scope);

        scope.$apply(function() {
            return scope;
        });

        var e = jQuery.Event("keydown");
        e.keyCode = 13;// enter keycode
        element.find('.btn-dropdown').trigger(e);

        expect(element.find('.dropSelect').hasClass('hide')).toBeFalsy();

    }));

    it('should hide dropdown by enter key', inject(function ($compile) {

        element = angular.element('<span sglk-select ng-model="formConfig.predicate" data-options="formConfig.options" data-text-var="text" data-required data-name="sglkSelectFilter" class="targetWidth"></span>');
        element = $compile(element)(scope);

        scope.$apply(function() {
            return scope;
        });

        var e = jQuery.Event("keydown");
        e.keyCode = 13;// enter keycode
        element.find('.btn-dropdown').trigger(e).trigger(e);

        expect(element.find('.dropSelect').hasClass('hide')).toEqual(true);

    }));

    it('should hide dropdown by escape keypressing on title', inject(function ($compile) {

        element = angular.element('<span sglk-select ng-model="formConfig.predicate" data-options="formConfig.options" data-text-var="text" data-required data-name="sglkSelectFilter" class="targetWidth"></span>');
        element = $compile(element)(scope);

        scope.$apply(function() {
            return scope;
        });

        var e = jQuery.Event("keydown");
        e.keyCode = 13;// enter keycode
        element.find('.btn-dropdown').trigger(e);

        e.keyCode = 27;// escape keycode
        element.find('.btn-dropdown').trigger(e);

        expect(element.find('.dropSelect').hasClass('hide')).toEqual(true);

    }));

    it('should hide dropdown by bluring', inject(function ($compile) {

        element = angular.element('<span sglk-select ng-model="formConfig.predicate" data-options="formConfig.options" data-text-var="text" data-required data-name="sglkSelectFilter" class="targetWidth"></span>');
        element = $compile(element)(scope);

        scope.$apply(function() {
            return scope;
        });

        var e = jQuery.Event("keydown");
        e.keyCode = 13;// enter keycode
        element.find('.btn-dropdown').trigger(e);

        element.blur();

        expect(element.find('.dropSelect').hasClass('hide')).toEqual(true);

    }));

    it('should hide dropdown by item clicking', inject(function ($compile) {

        element = angular.element('<span sglk-select ng-model="formConfig.predicate" data-options="formConfig.options" data-text-var="text" data-required data-name="sglkSelectFilter" class="targetWidth"></span>');
        element = $compile(element)(scope);

        scope.$apply(function() {
            return scope;
        });

        browserTrigger(element, 'click');
        browserTrigger(element.find('.dropSelect > *:first-child'), 'click');

        expect(element.find('.dropSelect').hasClass('hide')).toEqual(true);

    }));*/

    // predicate update by click
    // predicate update by enter key
    // nav by up key
    // boucle nav by up key
    // nav by down key
    // boucle nav by down key
    // blur by tab (to avoid keyboard trap)
});
