$(document).on('click', ".show-form-wrap", function () {
	$(this).text($(this).data("title"));
	$('.s-form-nav__dropdown').slideToggle();
});
$(document).on('click', ".hide-form-wrap", function () {
	var _this = this;



	$(this).text($('.s-form-nav__title').data("title"));
	setTimeout(function () {
		$(_this).removeClass("hide-form-wrap").addClass('show-form-wrap');
	}, 400);
	$('.form-wrap').fadeOut(function () {
		$('.s-form-nav__dropdown').slideDown();
	});
});
$(".s-form-nav__dropdown-item").click(function () {
	$('.form-wrap').slideDown();
	$('.s-form-nav__dropdown').slideUp();
	$(".s-form-nav__title").removeClass('show-form-wrap').addClass("hide-form-wrap").text($(this).data("title"));
	$(".order").val($(this).data("title"));
});





$(document).ready(function () {

	var $menu = $(".top");

	$(window).scroll(function () {
		if ($(this).scrollTop() > 200 && $menu.hasClass("default")) {
			$menu.removeClass("default").addClass("fixed");
		} else if ($(this).scrollTop() <= 200 && $menu.hasClass("fixed")) {
			$menu.removeClass("fixed").addClass("default");
		}
	});//scroll
});



const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const blockID = anchor.getAttribute('href').substr(1)

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}





var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);



const divEl = document.querySelector('.hover__img');

const icons = document.querySelector('.icons');
divEl.addEventListener('mouseover', function () {
	icons.classList.add('active');
})
divEl.addEventListener('mouseout', function () {
	icons.classList.remove('active');
})






var timeoutHandler = null;
$(".hover__img").click(function () {
	$(".icons").addClass('active-mob');
	if (timeoutHandler) clearTimeout(timeoutHandler);

	timeoutHandler = setTimeout(function () {
		$(".icons").removeClass('active-mob');

	}, 800);
});

// const screenWidth = window.screen.width

// if (screenWidth < 768) {
// 	const iosMob = document.querySelector('.hover-ios')
// 	const bgBlue = document.querySelector('.bg-blu-fone')
// 	console.log(bgBlue);
// 	iosMob.addEventListener('mouseover', function () {
// 		iosMob.classList.toggle('active-mob');
// 		bgBlue.classList.remove('dis-act');
// 	})
// 	iosMob.addEventListener('mouseout', function () {
// 		iosMob.classList.toggle('active-mob');
// 		bgBlue.classList.add('dis-act');
// 	})
// }


if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
	const iosMob = document.querySelector('.hover-ios')
	const bgBlue = document.querySelector('.bg-blu-fone')
	console.log(bgBlue);
	iosMob.addEventListener('mouseover', function () {
		iosMob.classList.toggle('active-mob');
		bgBlue.classList.remove('dis-act');
	})
	iosMob.addEventListener('mouseout', function () {
		iosMob.classList.toggle('active-mob');
		bgBlue.classList.add('dis-act');
	})
}