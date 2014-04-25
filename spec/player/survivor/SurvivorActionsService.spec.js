describe("Survivor Actions Service", function() {
    var survivorActionService;
    beforeEach(function() {
        module('zapocApp');
        inject(['survivorActionService', function(ss) { survivorActionService = ss; }]);
    });

    it("performRestAction doesn't recover energy in excess of survivor's maximum", function() {
        var survivor = { energy: 3, background: { energy: 3 } };
    });

    it("performRestAction recovers 1 energy in the typical case", function() {
        var survivor = { energy: 3, background: { energy: 4 } };
    });

});
