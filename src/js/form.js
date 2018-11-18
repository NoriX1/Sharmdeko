jQuery(document).ready(function($) {
	$(".consult__form").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "/wp-content/themes/sharmdeco/mail.php",      // здесь указываем путь ко второму файлу
			data: str,
			success: function(msg) {
				if(msg == 'OK') {
                    $(".result__message").html("Сообщение отправлено!");
                    $(".result__message").addClass("success");
                    $(".form__result").fadeIn(500);
                    setTimeout(function(){
                        $(".form__result").fadeOut(500);
                        $(".result__message").removeClass("success");
                    }, 5000)
				}
				else {
                    $(".result__message").html(msg);
                    $(".result__message").addClass("error");
                    $(".form__result").fadeIn(500);
                    setTimeout(function(){
                        $(".form__result").fadeOut(500);
                        $(".result__message").removeClass("error");
                    }, 5000)
                }
				 $('.form__input', '.consult__form')       // очищаем поля после того, как сообщение отправилось
                        .not(':button, :submit, :reset, :hidden')
                        .val('')			 
			}
		});
		return false;
	});
});