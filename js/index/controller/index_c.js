angular.module('HJY').controller("index", ["$scope", "$state", function($scope, $state) {
    $scope.test = "dasdad";
    $scope.turn = function() {
        $state.go("index.help")
    }
    $scope.backindex = function() {
        $state.go("index")
    }
}]);
angular.module('HJY').controller("help", ["$scope", "$state", "$http", function($scope, $state, $http) {
    $scope.test = "dasdad";
    var v = "?" + 1
    $http.get("mock/help/help.json" + v).then(function(data) {
        $scope.help_information = data.data;
        // var v = "?" + window.version_glo;
        $scope.se = $scope.help_information[0]["con"];
        $scope.change = function(x) {
            $scope.se = $scope.help_information[x]["con"];
            $(".help_menu p").removeClass("select")
            $(".help_menu p").eq(x).addClass("select")
        }
    })
}]);