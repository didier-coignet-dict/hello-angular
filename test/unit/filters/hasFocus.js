'use strict';

describe('Filter: hasFocus', function () {

    // load the filter's module
    beforeEach(module('stApp'));

    var hasFocus,
        options = [{
            index: 'valeur1'
        }, {
            index: 'valeur2'
        }],
        $index  = 0,
        focused = -1,
        value   = null,
        textVar = 'index';

    // initialize a new instance of the filter before each test
    beforeEach(inject(function ($filter) {
        hasFocus = $filter('hasFocus');
    }));

    it('should return false when init & no value selected', function () {

        expect(hasFocus(options, $index, focused, value, textVar)).toBeFalsy();

    });

    it('should return true when init & first value is selected', function () {

        var $index  = 0,
            value   = {
                index: 'valeur1'
            };

        expect(hasFocus(options, $index, focused, value, textVar)).toEqual(true);

    });


    it('should return false when init, second value is selected & first item is tested', function () {

        var $index  = 0,
            value   = {
                index: 'valeur2'
            };

        expect(hasFocus(options, $index, focused, value, textVar)).toBeFalsy();

    });

    it('should return true when init, second value is selected & second item is tested', function () {

        var $index  = 1,
            value   = {
                index: 'valeur2'
            };

        expect(hasFocus(options, $index, focused, value, textVar)).toEqual(true);

    });

    it('should return false when focus on first item, second value is selected & second item is tested', function () {

        var $index  = 1,
            focused = 0,
            value   = {
                index: 'valeur2'
            };

        expect(hasFocus(options, $index, focused, value, textVar)).toBeFalsy();

    });

    it('should return true when focus on first item, second value is selected & first item is tested', function () {

        var $index  = 0,
            focused = 0,
            value   = {
                index: 'valeur2'
            };

        expect(hasFocus(options, $index, focused, value, textVar)).toEqual(true);

    });

    it('should return false when options value is not defined', function () {

        var options = null;

        expect(hasFocus(options, $index, focused, value, textVar)).toBeFalsy();

    });

});
