'use strict';

describe('Service: Productservice', function () {

  // load the service's module
  beforeEach(module('StApp'));

  // instantiate service
  var Sextoyservice;
  beforeEach(inject(function (_Sextoyservice_) {
    Sextoyservice = _Sextoyservice_;
  }));

  it('should do something', function () {
    expect(!!Sextoyservice).toBe(true);
  });

});
