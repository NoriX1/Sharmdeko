$(document).ready(function(){
    (function(){
        $(".form__close").on("click", function(e){
            e.preventDefault();
            $("#wpcf7-f298-o1").children(".wpcf7-form").removeClass("active");
            toggleForm();
        })
        $(".header__number").on("click", function(e){
            e.preventDefault();
            
            $("#wpcf7-f298-o1").children(".wpcf7-form").toggleClass("active");
            toggleForm();
        })
        $("#phone-contact").mask("+9 (999) 999-99-99");
        $("#phone-back").mask("+9 (999) 999-99-99");
        $("#phone-portfolio").mask("+9 (999) 999-99-99");
    })();
    function toggleForm(){
        var form = $("#wpcf7-f298-o1").children(".wpcf7-form");
        if (form.hasClass("active")){
            form.fadeIn(500);
        }else{
            form.fadeOut(500);
        }
    }
});
