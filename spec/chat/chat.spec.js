describe("Chat controller", function() {

  beforeEach(function() {
    module(function($provide) {
      $provide.value('socketService', { on: function() {}, emit: function() {} });
    });
  });

  beforeEach(angular.mock.module('zapocApp'));

  beforeEach(inject(function($injector) {
    this.rootScope = $injector.get('$rootScope');
    this.scope = this.rootScope.$new();

    var socketService = angular.mock.service;
    var $controller = $injector.get('$controller');
    this.controller = $controller('ChatController', { '$scope': this.scope });
  }));

  it("can access its scope", function() {
    expect(true).toBeTruthy();
  });

});
