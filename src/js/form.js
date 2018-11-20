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
