zapocApp.factory('backgroundService',[ function () {
    return {
        getHealth: function(background) {
            return background.health;
        },

        getEnergy: function(background) {
            return background.energy;
        }
    };
}]);
/*
Background
{
    name : "Mr. White",
        history : "Chemist",
    energy : 4,
    health : 4,
    loot : [Loot],
    special: "Mr. White gains +1 power when attacking special zombies."
}
*/