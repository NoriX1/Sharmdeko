$(document).ready(function(){
    (function(){
        $(".sitecover__link").on("click", function(e){
            e.preventDefault();
            var current = $(this);
            var link = current.attr('href');
            var top = $(link).offset().top;
            $('body,html').animate({scrollTop: top}, 500);
        })
    })();
    (function(){
        $(".sitecover__link").on("click", function(e){
            e.preventDefault();
            var current = $(this);
            var link = current.attr('href');
            var top = $(link).offset().top;
            $('body,html').animate({scrollTop: top}, 500);
        })
    })();
    (function(){
        $(".menu__link").on("click", function(e){
            e.preventDefault();
            var current = $(this);
            var link = current.attr('href');
            var top = $(link).offset().top-135;
            $('body,html').animate({scrollTop: top}, 1000);
        })
        $(".slider__link").on("click", function(e){
            e.preventDefault();
            var current = $(this);
            var link = current.attr('href');
            var top = $(link).offset().top-135;
            $('body,html').animate({scrollTop: top}, 1000);
        })
        $(window).on("scroll", function(e){
            if($(".menu").children(".menu__list").length > 0){
                var scroll = $(window).scrollTop();
                if(scroll >= 200){
                    $(".header__fixed").addClass("active");
                }else{
                    $(".header__fixed").removeClass("active");
                }
            }  
        })
    })();
});
