$(document).ready(function(){
    (function(){
        $(".gallery__link").on("click", function(e){
            e.preventDefault();
            var current = $(this);
            var item = current.closest(".gallery__item");
            var container = current.closest(".project__content-item");
            var urlOfImage = current.children(".gallery__image").css("background-image");
            var urlofImageURL = urlOfImage.replace("url(\"","");
            urlofImageURL = urlofImageURL.replace("\")","");
            var display = container.find(".gallery__photo");
            if(!item.hasClass("active")){
                var preloader = container.find(".gallery__preloader").show();
                display.fadeOut(300, function(){
                    $('<img/>').attr('src', urlofImageURL).on('load', function() {
                        $(this).remove();
                        display.css("background-image", urlOfImage);
                        preloader.hide();
                        display.fadeIn();
                        item.addClass("active")
                            .siblings()
                            .removeClass("active");
                    });

                })
            }
        })
    })();
});
