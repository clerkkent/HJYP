;
HJY.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", "$httpProvider", function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    window.version_glo = "1.0";
    var v = "?" + window.version_glo;
    $stateProvider.state("index", {
            url: "/index",
            controller: "index",
            templateUrl: "html/index/index.html" + v,
            resolve: {
                loadMyService: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        './js/index/controller/index_c.js' + v,
                        './js/index/directive/index_d.js' + v,
                        './js/index/filter/index_f.js' + v,
                        './js/index/service/index_s.js' + v,
                        './css/index/index.css' + v
                    ]); // 按需加载目标 js file
                }]
            }
        })
        .state("index.help", {
            url: "/help",
            controller: "help",
            templateUrl: "html/help/help.html" + v,
        })
    $urlRouterProvider.otherwise("index");
}]);
HJY.run(['$rootScope', function($rootScope) {
    if (location.hostname == "www.ihaomu.com") {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?fdb9e557f9cc49a60c8ed0c30b13a40e";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    }
    // $rootScope.url_global = "http://192.168.11.179:8888";
    $rootScope.url_global = "http://" + location.hostname; //本地测试
}]);