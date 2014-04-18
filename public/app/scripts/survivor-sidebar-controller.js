zapocApp.controller('SurvivorSidebarController', ['$scope', function ($scope) {

    $scope.players = [
        {
            "name": "Dave",
            "role": "SURVIVOR",
            "survivor": {
                "energy": 1,
                "health": 1,
                "infection": [true,false],
                "background": {
                    "energy": 5,
                    "health": 5
                }
            }
        },
        {
            "name": "Q-Dawg",
            "role": "SURVIVOR",
            "survivor": {
                "energy": 2,
                "health": 2,
                "infection": [true,false,false],
                "background": {
                    "energy": 5,
                    "health": 5
                }
            }
        },
        {
            "name": "Sandy",
            "role": "SURVIVOR",
            "survivor": {
                "energy": 3,
                "health": 3,
                "infection": [true,false,false,false],
                "background": {
                    "energy": 5,
                    "health": 5
                }
            }
        },
        {
            "name": "G-man",
            "role": "SURVIVOR",
            "survivor": {
                "energy": 4,
                "health": 4,
                "infection": [true,false,false,false,false],
                "background": {
                    "energy": 5,
                    "health": 5
                }
            }
        },
        {
            "name": "Mr. Poitras",
            "role": "ZOMBIE_MASTER",
            "horror": 3,
            "horrorCards": []
        }
    ];
}]);