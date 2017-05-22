var HJY = angular.module("HJY", ["ionic", "ui.router", "oc.lazyLoad"]);
HJY.controller("MainCtrl", ["$scope", "$state", "$timeout", function($scope, $state, $timeout) {
    // $ionicLoading.show({
    //     content: 'Loading',
    //     animation: 'fade-in',
    //     template: '<ion-spinner icon="ripple" class="spinner-calm"></ion-spinner>',
    //     showBackdrop: true,
    //     maxWidth: 800,
    //     showDelay: 0
    // });
    // Set a timeout to clear loader, however you would actually call the $ionicLoading.hide(); method whenever everything is ready or loaded.
    Pace.on("done", function() {
        // $ionicLoading.hide();
    });
    $scope.goBack = function() {
        // $ionicNavBarDelegate.back();
    };
}]);