'use strict';

describe('Filter: formatName', function () {

  // load the filter's module
  beforeEach(module('stApp'));

  // initialize a new instance of the filter before each test
  var formatName;
  beforeEach(inject(function ($filter) {
    formatName = $filter('formatName');
  }));

  it('should return the input prefixed with "formatName filter:"', function () {
    var text = 'angularjs';
    expect(formatName(text)).toBe('formatName filter: ' + text);
  });

});
