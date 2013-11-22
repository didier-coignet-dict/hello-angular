'use strict';

describe('Directive: sglkMultiSelect', function () {

  // load the directive's module
  beforeEach(module('stApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sglk-multi-select></sglk-multi-select>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the sglkMultiSelect directive');
  }));
});
