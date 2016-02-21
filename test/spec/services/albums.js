'use strict';

describe('Service: Albums', function () {

  // load the service's module
  beforeEach(module('angularSimpleApp'));

  // instantiate service
  var Albums;
  beforeEach(inject(function (_Albums_) {
    Albums = _Albums_;
  }));

  it('should do something', function () {
    expect(!!Albums).toBe(true);
  });

});
