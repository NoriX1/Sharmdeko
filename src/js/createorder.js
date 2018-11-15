$(document).ready(function(){
    (function(){
        $(".style__order_btn").on("click", function(e){
            e.preventDefault();
            var current = $(this);
            var link = current.attr('href');
            var form  = $(".consult__form");
            var top = $(form).offset().top-100;
            $('body,html').animate({scrollTop: top}, 1500);
        })
    })();
});
