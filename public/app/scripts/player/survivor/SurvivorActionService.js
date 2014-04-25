zapocApp.factory('survivorActionService',[ function () {

    inject(['survivorService', function(bs) { survivorService = bs; }]);

    return {
        performRestAction : function(survivor) {
            survivorService.recoverEnergy(survivor,1);
        }
    };
}]);
