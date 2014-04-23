/**
 * Created by dave on 23/04/14.
 */
zapocApp.factory('playerService',[ function () {
    return {

        isPlayerASurvivor : function(player) {
            return player.role == "SURVIVOR"; },

        isPlayerTheZombieMaster : function(player) {
            return player.role == "ZOMBIE_MASTER" }
    };
}]);