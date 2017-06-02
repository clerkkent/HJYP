angular.module('HJY').controller("index", ["$scope", "$state", function($scope, $state) {
    $scope.test = "dasdad";
    $scope.turn = function() {
        $state.go("index.help")
    }
    $scope.backindex = function() {
        $state.go("index", { reload: true });
    }
}]);
angular.module('HJY').controller("help", ["$scope", "$state", "$http", function($scope, $state, $http) {
    $scope.test = "dasdad";
    var v = "?" + 1;

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
    $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
        $(".help_menu p").eq(0).addClass("select");
        $('html body .main_content').scrollTop(0);
    })
}]);
angular.module('HJY').controller("index1", ["$scope", "$state", "$http", function($scope, $state, $http) {
    // $(".main_content").scroll(function() {
    //     var h = $(".main_content").scrollTop();
    //     console.log(h)
    //     if (h > 900) {
    //         $(".transition03 .butn").css({ left: "40%" })
    //         setTimeout(function() {
    //             $(".transition03 .butn .app").css({ transform: 'scale(1)' })
    //         }, 1100)
    //     } else {
    //         $(".transition03 .butn").css({ left: "40%" })
    //         $(".transition03 .butn .app").css({ transform: 'scale(0)' })
    //     }
    // })
}])