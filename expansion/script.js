

window.addEventListener("DOMContentLoaded", function() {
    var btn = document.querySelector("#btn"),
    txt = document.querySelector("#fild1"),
    fild2 = document.querySelector("#fild2");
    btn.addEventListener("click", function() {
		var request = new XMLHttpRequest();
		var text = encodeURIComponent(txt.value);

		var f1 = document.querySelector("#f1");
		var f2 = document.querySelector("#f2");
		var newLan;

		if(f1.checked) newLan = 'en-ru';
		if(f2.checked) newLan = 'ru-en';
		if(f1.checked && f2.checked){
			f1.checked = false;
			f2.checked = false;
		}

		var key = "trnsl.1.1.20190703T165402Z.0a3c6bb157851eaf.865546ae9a234b40d9b32b17e28d1c6354b72bc7";
		var url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key="
		+key+"&text="+text+"&lang="+newLan+"&format=plain&options=1"
		request.open('GET', url, true);
		request.onload = function() {
		  if (request.status >= 200 && request.status < 400) {
		    var data = JSON.parse(request.responseText);
		    fild2.value = data.text;
		  }
		};
request.send();
    });
});

