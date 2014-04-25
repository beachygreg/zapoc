describe("Survivor Service", function() {

    var survivorService;
    beforeEach(function() {
        module('zapocApp');
        inject(['survivorService', function(ss) { survivorService = ss; }]);
    });

    it("isSurvivorAlive returns true for a healthy survivor", function() {
        var healthySurvivor = { health: 4 };
        expect(survivorService.isSurvivorAlive(healthySurvivor)).toBeTruthy();
    });

    it("isSurvivorAlive returns false for a dead survivor", function() {
        var unhealthySurvivor = { health: 0 };
        expect(survivorService.isSurvivorAlive(unhealthySurvivor)).toBeFalsy();
    });

    it("getTurnedThreshold returns remaining health for a survivor", function() {
        var survivor = { health: 3 };
        expect(survivorService.getTurnedThreshold(survivor)).toBe(4);
    });

    it("getInfectionLevel can handle an absent infection token list", function() {
        var survivor = {};
        expect(survivorService.getInfectionLevel(survivor)).toBe(0);
    });

    it("getInfectionLevel can handle a typical infection token list", function() {
        var survivor = { infectionTokens: [true,false,false,false,true] };
        expect(survivorService.getInfectionLevel(survivor)).toBe(2);
    });

    it("isTurning can handle an absent infection token list", function() {
        var survivor = {health:3};
        expect(survivorService.isTurning(survivor)).toBeFalsy();
    });

    it("isTurning can handle a typical survivor about to turn", function() {
        var survivor = {health:3, infectionTokens: [true,true,false,true,false,true]};
        expect(survivorService.isTurning(survivor)).toBeTruthy();
    });

    it("isTurning can handle a typical survivor that is not about to turn", function() {
        var survivor = {health:3, infectionTokens: [true,false,false,false,true,true]};
        expect(survivorService.isTurning(survivor)).toBeFalsy();
    });

    it("getMaxEnergy returns the background's energy value", function() {
        var survivor = {energy:2, background:{energy: 4}};
        expect(survivorService.getMaxEnergy(survivor)).toBe(4);
    });

    it("getMaxHealth returns the background's health value", function() {
        var survivor = {health:2, background:{health: 4}};
        expect(survivorService.getMaxHealth(survivor)).toBe(4);
    });

    it("recoverEnergy doesn't allow us to exceed max energy", function() {
        var survivor = {energy:3, background:{energy:4}};
        survivorService.recoverEnergy(survivor,2);
        expect(survivor.energy).toBe(4);
    });

    it("recoverEnergy for a typical case", function() {
        var survivor = {energy:1, background:{energy:5}};
        survivorService.recoverEnergy(survivor,3);
        expect(survivor.energy).toBe(4);
    });

    it("loseEnergy doesn't allow energy to fall below 0", function() {
        var survivor = {energy:2};
        survivorService.loseEnergy(survivor,3);
        expect(survivor.energy).toBe(0);
    });

    it("loseEnergy for a typical case", function() {
        var survivor = {energy:4};
        survivorService.loseEnergy(survivor,3);
        expect(survivor.energy).toBe(1);
    });

    it("recoverHealth doesn't allow us to exceed max health", function() {
        var survivor = {health:3, background:{health:4}};
        survivorService.recoverHealth(survivor,2);
        expect(survivor.health).toBe(4);
    });

    it("recoverHealth works for a typical call", function() {
        var survivor = {health:2, background:{health:5}};
        survivorService.recoverHealth(survivor,2);
        expect(survivor.health).toBe(4);
    });

    it("loseHealth doesn't allow health to fall below 0", function() {
        var survivor = {health:2};
        survivorService.loseHealth(survivor,3);
        expect(survivor.health).toBe(0);
    })

    it("loseHealth works for a typical case", function() {
        var survivor = {health:4};
        survivorService.loseHealth(survivor,3);
        expect(survivor.health).toBe(1);
    })
});
