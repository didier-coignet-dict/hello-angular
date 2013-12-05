'use strict';

describe('Filter: formatName', function () {

    // load the filter's module
    beforeEach(module('stApp'));

    var formatName,
        nbsp = '\u00A0';

    // initialize a new instance of the filter before each test
    beforeEach(inject(function ($filter) {
        formatName = $filter('formatName');
    }));

    it('should return the value"', function () {

        var value = 'not empty';

        expect(formatName(value)).toBe(value);

    });

    it('should return nbsp if value empty"', function () {

        var value = '';

        expect(formatName(value)).toBe(nbsp);

    });

    it('should return value1, value2, value3 if value is an array of strings"', function () {

        var value = ['value1', 'value2', 'value3'];

        expect(formatName(value)).toBe('value1, value2, value3');

    });

    it('should return nbsp if value[index] is an empty string"', function () {

        var value = {}, index = 'index';
        value[index] = '';

        expect(formatName(value, index)).toBe(nbsp);

    });

    it('should return value of value[index] if is not empty string"', function () {

        var value = {}, index = 'index';
        value[index] = 'not empty';

        expect(formatName(value, index)).toBe(value[index]);

    });

    it('should return value1, value2... if is an array of value[index] objects"', function () {

        var value = [], index = 'index';

        value = [{
            index: 'value1'
        },{
            index: 'value2'
        },{
            index: 'value3'
        }];

        expect(formatName(value, index)).toBe('value1, value2, value3');

    });

    it('should return value1, nbsp, value3 if is an array of value[index] objects with one item have an empty string"', function () {

        var value = [], index = 'index';

        value = [{
            index: 'value1'
        },{
            index: ''
        },{
            index: 'value3'
        }];

        expect(formatName(value, index)).toBe('value1, ' + nbsp + ', value3');

    });

    it('should return value1, nbsp, value3 if is an array of value[index] objects with one empty item"', function () {

        var value = [], index = 'index';

        value = [{
            index: 'value1'
        },{

        },{
            index: 'value3'
        }];

        expect(formatName(value, index)).toBe('value1, ' + nbsp + ', value3');

    });

    it('should return value1, nbsp, value3 if is an array of value[index] objects with one item have a function"', function () {

        var value = [], index = 'index';

        value = [{
            index: 'value1'
        },{
            index: function() {}
        },{
            index: 'value3'
        }];

        expect(formatName(value, index)).toBe('value1, ' + nbsp + ', value3');

    });

    it('should return value1, nbsp, value3 if is an array of value[index] objects with one item have a other not empty object"', function () {

        var value = [], index = 'index';

        value = [{
            index: 'value1'
        },{
            index: {index: 'test'}
        },{
            index: 'value3'
        }];

        expect(formatName(value, index)).toBe('value1, ' + nbsp + ', value3');

    });

    it('should return nbsp, nbsp, nbsp if is an array of undefined indexes"', function () {

        var value = [], index = 'index';

        value = [{},{},{}];

        expect(formatName(value, index)).toBe(nbsp + ', ' + nbsp + ', ' + nbsp);

    });

    it('should return nbsp if is an empty array"', function () {

        var value = [];

        expect(formatName(value)).toBe(nbsp);

    });

});