angular.module('HJY').directive("allL", function($timeout) {
    return {
        restrict: "ECMA",
        link: function(scope, element, attr) {
            var f = 1;
            $(".main_content").scroll(function() {
                var h = $(".main_content").scrollTop();
                if (h > 850) {
                    $(".left_p").css({ left: "0" })
                    $(".right_p").css({ right: "0" })
                } else {
                    $(".left_p").css({ left: "-1000px" })
                    $(".right_p").css({ right: "-1000px" })
                }

                if (h > 200) {
                    if (f == 1) {
                        f = 0;
                        $(".transition01 li").css({
                            transform: "roateX(360deg)",
                            marginTop: 0
                        })
                    }
                } else {

                }

            })
            $(".btn").mouseover(function() {
                $(".transition03 .app").css({ right: "20%" })
            })
        }
    }
})