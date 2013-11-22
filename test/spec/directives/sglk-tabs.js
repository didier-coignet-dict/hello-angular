'use strict';

describe('Directive: sglkTabs', function () {

  // load the directive's module
  beforeEach(module('stApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sglk-tabs></sglk-tabs>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the sglkTabs directive');
  }));
});
