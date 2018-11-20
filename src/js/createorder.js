$(document).ready(function(){
    (function(){
        $(".style__order_btn").on("click", function(e){
            e.preventDefault();
            var style = "";
            var current = $(this);
            var link = current.attr('href');
            var form  = $(".wpcf7-form");
            var top = $(form).offset().top-60;
            switch(link){
                case "#art-deco":{
                    style = "стиле арт-деко.";
                    break;
                }
                case "#country":{
                    style = "стиле кантри.";
                    break;
                }
                case "#barocco":{
                    style = "стиле барокко.";
                    break;
                }
                case "#minimalism":{
                    style = "стиле минимализм.";
                    break;
                }
                case "#modern":{
                    style = "стиле модерн.";
                    break;
                }
                case "#loft":{
                    style = "стиле лофт.";
                    break;
                }
                case "#pop-art":{
                    style = "стиле поп-арт.";
                    break;
                }
                case "#scandi":{
                    style = "скандинавском стиле.";
                    break;
                }
                case "#hi-tech":{
                    style = "стиле хай-тек.";
                    break;
                }
            }
            $("#consultarea").val("Здравствуйте! Хочу заказать дизайн-проект в "+style);
            $('body,html').animate({scrollTop: top}, 1500);
        })
    })();
});
