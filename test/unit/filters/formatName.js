'use strict';

describe('Filter: formatName', function () {

    // load the filter's module
    beforeEach(module('stApp'));

    // initialize a new instance of the filter before each test
    var formatName;
    beforeEach(inject(function ($filter) {
        formatName = $filter('formatName');
    }));

    it('should return the value of object index"', function () {

        var text    = 'index',
            value   = {};

        value[text] = 'not empty';

        expect(formatName(value, text)).toBe(value[text]);

    });


    it('should return non breaking space if empty"', function () {

        var text    = 'index',
            value   = {};

        value[text] = '';

        expect(formatName(value, text)).toBe('\u00A0');

    });

    it('should return non breaking space if index is null"', function () {

        var text = 'index';
        var value = {};

        value[text] = null;

        expect(formatName(value, text)).toBe('\u00A0');

    });

    it('should return non breaking space if index doesn\'t exist"', function () {

        var text    = 'index',
            value   = {};

        expect(formatName(value, text)).toBe('\u00A0');

    });

    it('should return non breaking space if value doesn\'t exist"', function () {

        var value   = null,
            text    = null;

        expect(formatName(value, text)).toBe('\u00A0');

    });

    it('should return value of value var if is a string', function () {

        var text    = null,
            value   = 'test';

        expect(formatName(value, text)).toBe(value);

    });


    it('should return value1, value2, ... if value[text] is an array of values', function () {

        var text    = 'index',
            value   = {};

        value[text] = ['value1', 'value2', 'value3'];

        expect(formatName(value, text)).toBe('value1, value2, value3');

    });

    it('should return value1, value2, ... if value is an array of values', function () {

        var text    = null,
            value   = ['value1', 'value2', 'value3'];

        expect(formatName(value, text)).toBe('value1, value2, value3');

    });

    it('should return value1, value2, ... if value is an array of object values', function () {

        var text    = 'index',
            value   = [];

        value.push({index: 'value1'});
        value.push({index: 'value2'});
        value.push({index: 'value3'});

        expect(formatName(value, text)).toBe('value1, value2, value3');

    });

});