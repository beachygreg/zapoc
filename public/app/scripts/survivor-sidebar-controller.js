zapocApp.controller('SurvivorSidebarController', ['$scope', function ($scope) {

    $scope.players = [
        {
            "name": "Player #1",
            "role": "SURVIVOR",
            "survivor": {
                "energy": 1,
                "health": 1
            }
        },
        {
            "name": "Player #2",
            "role": "SURVIVOR",
            "survivor": {
                "energy": 2,
                "health": 2
            }
        },
        {
            "name": "Player #3",
            "role": "SURVIVOR",
            "survivor": {
                "energy": 3,
                "health": 3
            }
        },
        {
            "name": "Player #4",
            "role": "SURVIVOR",
            "survivor": {
                "energy": 4,
                "health": 4
            }
        },
        {
            "name": "Player #5",
            "role": "ZOMBIE_MASTER"
        }
    ];
}]);