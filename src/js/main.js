
//SCROLL

const menuItems = document.querySelectorAll('.menu a[href^="#"]');

function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
	window.scroll({
	top: to,
    behavior: "smooth",
     
    })
}
function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget)- 74;
	scrollToPosition(to);
}

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});



 //MENU STICKY
 

let navbar = $(".navbar");

$(window).scroll(function () {
  let oTop = $("#servicos").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky");
  } else {
	navbar.removeClass("sticky");
  }
});

