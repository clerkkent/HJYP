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
                if (h > 1800) {
                    $(".transition03 .butn").css({ left: "40%" })
                    setTimeout(function() {
                        $(".transition03 .butn .app").css({ transform: 'scale(1)' })
                    }, 1100)
                } else {
                    $(".transition03 .butn").css({ left: "0" })
                    $(".transition03 .butn .app").css({ transform: 'scale(0)' })
                }
            })
            var flag = 1;
            $(".transition03 .butn").click(function() {
                flag == 1 ? flag = 0 : flag = 1
                if (flag == 0) {
                    $(".transition03 .txt").css({ display: "none" });
                    $(".transition03 .apim").css({ opacity: "1" });
                } else {
                    $(".transition03 .txt").css({ display: "inline" });
                    $(".transition03 .apim").css({ opacity: "0" });
                }
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
angular.module('HJY').directive('onFinishRenderFilters', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function() {
                    scope.$emit('ngRepeatFinished');
                });
            }
        }
    };
});