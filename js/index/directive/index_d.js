angular.module('HJY').directive("allL", function($timeout) {
    return {
        restrict: "ECMA",
        link: function(scope, element, attr) {
            var f = 1;
            setTimeout(function() {
                if (f == 1) {
                    f = 0;
                    $(".transition01 li").css({
                        transform: "roateX(360deg)",
                        marginTop: 0
                    })
                }
            }, 1000);
            $(".main_content").scroll(function() {
                var h = $(".main_content").scrollTop();
                if (h > 350) {
                    $(".left_p").css({ left: "0" })
                    $(".right_p").css({ right: "0" })
                } else {
                    $(".left_p").css({ left: "-1000px" })
                    $(".right_p").css({ right: "-1000px" })
                }
            })
            $(".btn").mouseenter(function() {
                $(".transition03 .app").css({ opacity: "1" })
            })
            $(".btn").mouseout(function() {
                $(".transition03 .app").css({ opacity: "0" })
            })
        }
    }
})
angular.module('HJY').directive("indexHead", function($timeout) {
    return {
        restrict: "ECMA",
        replace: true,
        templateUrl: "html/index/head.html"
    }
})
angular.module('HJY').directive("indexFooter", function($timeout) {
    return {
        restrict: "ECMA",
        replace: true,
        templateUrl: "html/index/footer.html"
    }
})