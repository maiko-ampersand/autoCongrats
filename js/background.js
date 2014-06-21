window.addEventListener('load',function(){
	if(window.location.pathname === '/ajax/stream/inline.php') {
		window.location = 'https://www.facebook.com/';
	}
	// 誕生日の友達がいる
	var _birthdayLink = document.getElementById('birthday_reminders_link');
	if (_birthdayLink) {
		// クリックイベントを発火
		_birthdayLink.click();
		var _form = document.getElementsByClassName('uiStreamInlineAction');
		for(var i = 0; i < _form.length ; i++ ) {
			var _text = _form[i].getElementsByTagName('textarea');
			for(var j = 0; j < _text.length ; j++ ) {
				if(_text[j].getAttribute('placeholder') === 'タイムラインに誕生日メッセージを投稿…') {
					_text[j].value = 'おめでとうございます！';
					_text[j].focus();
				}
				_form[i].submit();
			}
		}
	}
});
