zapocApp.factory('survivorService',[ function () {

    inject(['backgroundService', function(bs) { backgroundService = bs; }]);

    return {
        isSurvivorAlive : function(survivor) {
            return survivor.health > 0;
        },

        getTurnedThreshold : function(survivor) {
            return survivor.health + 1;
        },

        getInfectionLevel : function(survivor) {
            if (survivor.infectionTokens) {
                return survivor.infectionTokens.filter(function (val) {
                    return val;
                }).length;
            } else {
                return 0;
            }
        },

        isTurning : function(survivor) {
            return this.getInfectionLevel(survivor) >= this.getTurnedThreshold(survivor);
        },

        getMaxEnergy : function(survivor) {
            return backgroundService.getEnergy(survivor.background);
        },

        getMaxHealth : function(survivor) {
            return backgroundService.getHealth(survivor.background);
        },

        loseHealth : function(survivor,value) {
            survivor.health = Math.max(survivor.health-value,0);
        },

        recoverHealth : function(survivor,value) {
            survivor.health = Math.min(survivor.health+value,this.getMaxHealth(survivor));
        },

        loseEnergy : function(survivor,value) {
            survivor.energy = Math.max(survivor.energy - value, 0 );
        },

        recoverEnergy : function(survivor,value) {
            survivor.energy = Math.min(survivor.energy+value,this.getMaxEnergy(survivor));
        }
    };
}]);
/*
Survivor
{
    background : Background,
    energy : 2,
    health : 4,
    loot : [Loot],
    infectionTokens : [InfectionToken],
    bleeding : false
    turned : false
}
*/