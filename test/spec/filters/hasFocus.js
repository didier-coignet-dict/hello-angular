'use strict';

describe('Filter: hasFocus', function () {

  // load the filter's module
  beforeEach(module('stApp'));

  // initialize a new instance of the filter before each test
  var hasFocus;
  beforeEach(inject(function ($filter) {
    hasFocus = $filter('hasFocus');
  }));

  it('should return the input prefixed with "hasFocus filter:"', function () {
    var text = 'angularjs';
    expect(hasFocus(text)).toBe('hasFocus filter: ' + text);
  });

});
