'use strict';

// TODO put it in e2e tests
describe('Directive: disabled sglkSelect', function () {

    // load the directive's module
    beforeEach(module('lib.directive'));
    beforeEach(module('views/sglk-select.html', 'views/sglk-select.html'));

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

        element = angular.element('<span data-disabled sglk-select ng-model="formConfig.predicate" data-options="formConfig.options" data-text-var="text" data-required data-name="sglkSelectFilter" class="targetWidth"></span>');
        element = $compile(element)(scope);
    }));

    it('shouldn\'t show dropdown by clicking', inject(function () {

        scope.$digest();

        element.find('.btn-dropdown').click();

        expect(element.find('.dropSelect').hasClass('hide')).toEqual(true);

    }));

    it('shouldn\'t show dropdown by enter key', inject(function () {

        scope.$digest();

        var e = jQuery.Event("keydown");
        e.keyCode = 13;// enter keycode
        element.find('.btn-dropdown').trigger(e);

        expect(element.find('.dropSelect').hasClass('hide')).toEqual(true);

    }));
});
