describe("Background Service", function() {

    var backgroundService;
    beforeEach(function() {
        module('zapocApp');
        inject(['backgroundService', function(bs) { backgroundService = bs; }]);
    });

    it("getHealth returns the correct value", function() {
        var background = { health: 4 };
        expect(backgroundService.getHealth(background)).toBeTruthy();
    });

    it("getEnergy returns the correct value", function() {
        var background = { energy: 4 };
        expect(backgroundService.getEnergy(background)).toBeTruthy();
    });
});
