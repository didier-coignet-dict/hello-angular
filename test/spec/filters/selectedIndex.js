'use strict';

describe('Filter: selectedIndex', function () {

  // load the filter's module
  beforeEach(module('stApp'));

  // initialize a new instance of the filter before each test
  var selectedIndex;
  beforeEach(inject(function ($filter) {
    selectedIndex = $filter('selectedIndex');
  }));

  it('should return the input prefixed with "selectedIndex filter:"', function () {
    var text = 'angularjs';
    expect(selectedIndex(text)).toBe('selectedIndex filter: ' + text);
  });

});
