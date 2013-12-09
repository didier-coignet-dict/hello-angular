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
                }, {
                    text    : 'Valeur 3',
                    value   : 'valeur3'
                }]
            };

            return scope;
        });

        element = angular.element('<span sglk-select ng-model="formConfig.predicate" data-options="formConfig.options" data-text-var="text" data-required data-name="sglkSelectFilter" class="targetWidth"></span>');
        element = $compile(element)(scope);
    }));

    it('should initiate element with a selected option from 3 choices', inject(function () {

        scope.$digest();

        expect(element.find('.textWrap').text()).toBe('Prix croissant');

    }));

    it('should initiate element with no selected option from 3 options', inject(function () {

        scope.$apply(function() {
            return scope.formConfig.predicate = null;
        });

        expect(element.find('.textWrap').html()).toBe('&nbsp;');

    }));

    it('should have 3 html items for 3 object array in parameter', inject(function () {

        scope.$digest();

        expect(element.find('.dropSelect > *').length).toBe(3);

    }));

    it('should show dropdown by clicking', inject(function () {

        scope.$digest();

        element.find('.btn-dropdown').click();

        expect(element.find('.dropSelect').hasClass('hide')).toBeFalsy();

    }));

    it('should hide dropdown by clicking on title', inject(function () {

        scope.$digest();

        element.find('.btn-dropdown').click().click();

        expect(element.find('.dropSelect').hasClass('hide')).toEqual(true);

    }));

    it('should show dropdown by enter key', inject(function () {

        scope.$digest();

        var e = jQuery.Event("keydown");
        e.keyCode = 13;// enter keycode
        element.find('.btn-dropdown').trigger(e);

        expect(element.find('.dropSelect').hasClass('hide')).toBeFalsy();

    }));

    it('should hide dropdown by enter key', inject(function () {

        scope.$digest();

        var e = jQuery.Event("keydown");
        e.keyCode = 13;// enter keycode
        element.find('.btn-dropdown').trigger(e).trigger(e);

        expect(element.find('.dropSelect').hasClass('hide')).toEqual(true);

    }));

    it('should hide dropdown by escape keypressing on title', inject(function () {

        scope.$digest();

        var e = jQuery.Event("keydown");
        e.keyCode = 13;// enter keycode
        element.find('.btn-dropdown').trigger(e);

        e.keyCode = 27;// escape keycode
        element.find('.btn-dropdown').trigger(e);

        expect(element.find('.dropSelect').hasClass('hide')).toEqual(true);

    }));

    it('should hide dropdown by bluring', inject(function () {

        scope.$digest();

        var e = jQuery.Event("keydown");
        e.keyCode = 13;// enter keycode
        element.find('.btn-dropdown').trigger(e);

        element.blur();

        expect(element.find('.dropSelect').hasClass('hide')).toEqual(true);

    }));

    it('should hide dropdown by item clicking', inject(function () {

        scope.$digest();

        element.click();
        element.find('.dropSelect > *:first-child').click(scope.formConfig.options[0]);

        expect(element.find('.dropSelect').hasClass('hide')).toEqual(true);

    }));

    it('should update predicate when enter keypressed on item', inject(function () {

        scope.$digest();

        var e = jQuery.Event("keydown");
        e.keyCode = 13;// enter keycode
        element.trigger(e);

        e.keyCode = 40;// enter keycode
        element.trigger(e);

        e.keyCode = 13;// enter keycode
        element.trigger(e);

        expect(scope.formConfig.predicate.value).toBe('-price');

    }));

    it('should update predicate when clicked on item', inject(function () {

        scope.$apply(function() {
            return scope.formConfig.predicate = {
                text    : 'Prix décroissant',
                value   : '-price'
            };
        });

        element.click();
        element.find('.dropSelect > *:last-child').click();

        expect(scope.formConfig.predicate.value).toBe('valeur3');

    }));

    it('should nav by up key pressing', inject(function () {

        scope.$apply(function() {
            return scope.formConfig.predicate = {
                text    : 'Prix décroissant',
                value   : '-price'
            };
        });


        element.click();
        var e = jQuery.Event("keydown");
        e.keyCode = 38;// up arrow keycode
        element.trigger(e);

        expect(element.find('.dropSelect > *').slice(2, 3).hasClass('focusOn')).toEqual(true);

    }));

    it('should boucle nav by up key pressing 2 times on 3 options', inject(function () {

        scope.$apply(function() {
            return scope.formConfig.predicate = {
                text    : 'Prix décroissant',
                value   : '-price'
            };
        });

        element.click();
        var e = jQuery.Event("keydown");
        e.keyCode = 38;// up arrow keycode
        element.trigger(e);
        element.trigger(e);

        expect(element.find('.dropSelect > *').slice(1, 2).hasClass('focusOn')).toEqual(true);

    }));

    it('should nav by down key pressing', inject(function () {

        scope.$apply(function() {
            return scope.formConfig.predicate = {
                text    : 'Prix décroissant',
                value   : '-price'
            };
        });

        element.click();
        var e = jQuery.Event("keydown");
        e.keyCode = 40;// down arrow keycode
        element.trigger(e);

        expect(element.find('.dropSelect > *').slice(0, 1).hasClass('focusOn')).toEqual(true);

    }));

    it('should boucle nav by down key pressing 2 times on 3 options', inject(function () {

        scope.$apply(function() {
            return scope.formConfig.predicate = {
                text    : 'Prix décroissant',
                value   : '-price'
            };
        });

        element.click();
        var e = jQuery.Event("keydown");
        e.keyCode = 40;// down arrow keycode
        element.trigger(e);
        element.trigger(e);

        expect(element.find('.dropSelect > *').slice(1, 2).hasClass('focusOn')).toEqual(true);

    }));

    // (to avoid keyboard trap)
    it('should blur by tab', inject(function () {

        scope.$digest();

        var $el = element.find('.btn-dropdown');

        // give focus
        element.focus();

        // show dropdown
        $el.click();

        var e = jQuery.Event("keydown");
        e.keyCode = 9;// TAB keycode

        // press TAB key
        $el.trigger(e);

        expect(element.find('.dropSelect').hasClass('hide')).toEqual(true);

    }));
});
