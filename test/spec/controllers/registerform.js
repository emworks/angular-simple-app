'use strict';

describe('Controller: RegisterformCtrl', function () {

  // load the controller's module
  beforeEach(module('angularSimpleApp'));

  var RegisterformCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegisterformCtrl = $controller('RegisterformCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RegisterformCtrl.awesomeThings.length).toBe(3);
  });
});
