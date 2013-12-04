'use strict';

describe('Filter: selectedIndex', function () {

    // load the filter's module
    beforeEach(module('stApp'));

    var selectedIndex,
        text    = 'index',
        options = [{
            index: 'valeur1'
        }, {
            index: 'valeur2'
        }, {
            index: 'valeur3'
        }],
        value   = {
            index: 'valeur2'
        };

    // initialize a new instance of the filter before each test
    beforeEach(inject(function ($filter) {

        selectedIndex = $filter('selectedIndex');

    }));

    it('should return the index of selected options', function () {

        expect(selectedIndex(value, options, text)).toBe(1);

    });

    it('should return -1 when value not found in options', function () {

        var value = null;

        expect(selectedIndex(value, options, text)).toBe(-1);

    });

    it('should return -1 when options is undefined', function () {

        var options = null;

        expect(selectedIndex(value, options, text)).toBe(-1);

    });

    it('should return -1 when text is undefined', function () {

        var text = null;

        expect(selectedIndex(value, options, text)).toBe(-1);

    });

    it('should return -1 when value[text] doesn\'t exist', function () {

        var text = 'wrongIndex';

        expect(selectedIndex(value, options, text)).toBe(-1);

    });

});
