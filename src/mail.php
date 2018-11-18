<?php
$post = (!empty($_POST)) ? true : false;
if($post) {
	$phone = $_POST['phone'];
	$name = $_POST['name'];
	$message = $_POST['message'];
	$error = '';
	if(!$name) {$error .= 'Укажите свое имя. ';}
	if(!$phone) {$error .= 'Укажите номер телефона. ';}
	if(!$message) {$error .= 'Введите сообщение. ';}
	if(!$error) {
		$address = "salimov396@gmail.com";    // ВНИМАНИЕ! Здесь указываем адрес электронной почты на которую будут приходить письма
		$email = "safmail96@gmail.com"; 
		$mes = "Имя: ".$name."\n\nСообщение: ".$message."\n\n";
		$send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = UTF-8\r\nFrom:$email");
		if($send) {echo 'OK';}
	}
	else {echo '<div class="err">'.$error.'</div>';}
}
?>