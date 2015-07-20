'use strict';

describe('Service: helloWorldService', function () {

  // load the service's module
  beforeEach(module('myFirstGameApp'));

  // instantiate service
  var helloWorldService;
  beforeEach(inject(function (_helloWorldService_) {
    helloWorldService = _helloWorldService_;
  }));

  it('should do something', function () {
    expect(!!helloWorldService).toBe(true);
  });

});
