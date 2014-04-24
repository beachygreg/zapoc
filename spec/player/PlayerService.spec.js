describe("Player Service", function() {

    var playerService;
    beforeEach(function() {
        module('zapocApp');
        inject(['playerService', function(ps) { playerService = ps; }]);
    });

    function getMockedSurvivor() {
        return { role: "SURVIVOR" };
    }

    function getMockedZombieMaster() {
        return { role: "ZOMBIE_MASTER" };
    }

    it("isPlayerASurvivor returns true for a survivor", function() {
        expect(playerService.isPlayerASurvivor(getMockedSurvivor())).toBeTruthy();
    });

    it("isPlayerASurvivor returns false for the zombie master", function() {
        expect(playerService.isPlayerASurvivor(getMockedZombieMaster())).toBeFalsy();
    });

    it("isPlayerTheZombieMaster returns true for the zombie master", function() {
        expect(playerService.isPlayerTheZombieMaster(getMockedZombieMaster())).toBeTruthy();
    });

    it("isPlayerTheZombieMaster returns false for a survivor", function() {
        expect(playerService.isPlayerTheZombieMaster(getMockedSurvivor())).toBeFalsy();
    });
});
