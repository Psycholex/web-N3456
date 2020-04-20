const setDisabled = ($object) => { //ф-я делает недоступными все дочерние эл-ты $object
	$object.children().attr("disabled", "true");
}

const setHttps = ($object) =>{ // ф-я замены всех http на https
	for (let i = 0; i < $object.length; i++) {
		let newHref = $object.eq(i).attr("href").substring(0, 5);
		if (newHref[4]!='s'){
			newHref = $object.eq(i).attr("href");
			let href = newHref.slice(0,4)+'s'+newHref.slice(4);
			$object.eq(i).attr("href", href);
		}
	}
}

const setHttp = ($object) =>{//ф-я замены всех https на http
	for (let i = 0; i < $object.length; i++) {
		let newHref = $object.eq(i).attr("href").substring(0,5);
		if (newHref[4]='s'){
			newHref = $object.eq(i).attr("href");
			let href = newHref.slice(0,4)+newHref.slice(5);
			$object.eq(i).attr("href", href);
		}
	}
}

$(document).ready(() => {
	//Задание 1
	$('.myAnchor').css("fontStyle", "italic");
	$('.item').css("fontSize", "16px");
	$('.item').css("width", "30%");
	$('.item').css("border-bottom", "1px solid rgba(60, 60, 60, 50%)");
	$('.myParagraph').css("font-family", "Georgia");

	setDisabled($('.myForm'));

	//Задание 2
	$('a').prepend('↗');
	$('a').attr("target", "_blank");
	setHttps($('a'));

	$('.btnCancel').on('click', () =>{//кнопка отмены
		$('a').attr("target", "_self");
		setHttp($('a'));
		$('.btnCancel').attr("disabled", "true");
	});

	//Задание 3
	//Картинка 1
	$('.btnFadeIn').on('click', () =>{
		$('#img1').fadeIn(700);
	});
	$('.btnFadeOut').on('click', () =>{
		$('#img1').fadeOut(700);
	});
	//Картинка 2
	$('.btnFadeToggle').on('click', () =>{
		$('#img2').fadeToggle("slow", "linear");
	});
	//Картинка 3
	$('.btnSlideToggle').on('click', () =>{
		$('#img3').slideToggle("fast");
	});
	//Картинка 4
	$('.btnAnimate').on('click', () =>{
		$('#img4').animate({
			opacity: 0.5,
			marginLeft: "0.6in"
		}, 1500);
	});
	$('.btnResetAnimate').on('click', () =>{
		$('#img4').animate({
			opacity: 1,
			marginLeft: "0"
		}, 500);
	});
	//Картинка 5
	$('.btnHide').on('click', () =>{
		$('#img5').hide();
	});
	$('.btnShow').on('click', () =>{
		$('#img5').show();
	});

});

    © 2020 GitHub, Inc.
    Terms
    Privacy
    Security
    Status
    Help

