'use strict';

describe('Service: Photos', function () {

  // load the service's module
  beforeEach(module('angularSimpleApp'));

  // instantiate service
  var Photos;
  beforeEach(inject(function (_Photos_) {
    Photos = _Photos_;
  }));

  it('should do something', function () {
    expect(!!Photos).toBe(true);
  });

});
