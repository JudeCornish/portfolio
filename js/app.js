window.onscroll = function () {
	myFunction();
};

function myFunction() {
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height =
		document.documentElement.scrollHeight -
		document.documentElement.clientHeight;
	var scrolled = (winScroll / height) * 100;
	document.getElementById("myBar").style.width = scrolled + "%";
}

var counter = document.querySelector(".percent");

function progress() {
	var windowScrollTop = $(window).scrollTop();
	var docHeight = $(document).height();
	var windowHeight = $(window).height();
	var progress = (windowScrollTop / (docHeight - windowHeight)) * 100;

	var $bgColor = progress > 99 ? "rgb(0, 141, 157);" : "";
	var $textColor = progress > 99 ? "#fff" : "#fff";

	$("h4")
		.text(Math.round(progress) + "%")
		.css({ color: $textColor });

	$(".fill")
		.height(progress + "%")
		.css({ backgroundColor: $bgColor });
}
progress();
$(document).on("scroll", progress);

//Get the button:
mybutton = document.getElementById("topBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Detect request animation frame
var scroll =
	window.requestAnimationFrame ||
	// IE Fallback
	function (callback) {
		window.setTimeout(callback, 1000 / 60);
	};
var elementsToShow = document.querySelectorAll(".show-on-scroll");

function loop() {
	elementsToShow.forEach(function (element) {
		if (isElementInViewport(element)) {
			element.classList.add("is-visible");
		} else {
			element.classList.remove("is-visible");
		}
	});

	scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
	// special bonus for those using jQuery
	if (typeof jQuery === "function" && el instanceof jQuery) {
		el = el[0];
	}
	var rect = el.getBoundingClientRect();
	return (
		(rect.top <= 0 && rect.bottom >= 0) ||
		(rect.bottom >=
			(window.innerHeight || document.documentElement.clientHeight) &&
			rect.top <=
				(window.innerHeight || document.documentElement.clientHeight)) ||
		(rect.top >= 0 &&
			rect.bottom <=
				(window.innerHeight || document.documentElement.clientHeight))
	);
}

TweenMax.from(".ring", 3, {
	delay: 0,
	opacity: 0,
	scaleX: 0.9,
	scaleY: 0.9,
	ease: Expo.easeInOut,
});

TweenMax.from(".percent", 1, {
	delay: 2,
	opacity: 0,
	ease: Expo.easeInOut,
});

TweenMax.from(".media-fixed", 1, {
	delay: 2,
	opacity: 0,
	ease: Expo.easeInOut,
});

TweenMax.from(".header-text", 2, {
	delay: 0.25,
	opacity: 0,
	ease: Expo.easeInOut,
});

TweenMax.from("#scroll-animation", 1, {
	delay: 1.1,
	opacity: 0,
	ease: Expo.easeInOut,
});
