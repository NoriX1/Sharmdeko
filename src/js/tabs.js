$(document).ready(function(){
    (function(){
        var flag = true;
        $(".project__link").on("click", function(e){
            e.preventDefault();
            var current = $(this);
            var item = current.closest(".project__item");
            var container = current.closest(".project");
            var content = container.find(current.attr("href"));
            var activeContent = container.find(".project__content-item")
                                .filter(".active");
            if (flag){
                if(!item.hasClass("active")){
                    flag = false;
                    item.addClass("active")
                        .siblings()
                        .removeClass("active");
                    activeContent.fadeOut(300, function(){
                        content.addClass("active")
                            .siblings()
                            .removeClass("active");
                        content.fadeIn(300, function(){
                            flag = true;
                        });
                    });
                }
            }
        });
    })();
});
