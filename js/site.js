$(document).ready(function() {

	var $headerNav = $('.header.navbar'),
		  $footerNav = $('footer');
		  $body = $('body'),
		  $window = $(window),
		  $popoverLink = $('[data-popover]'),
		  navOffsetTop = $headerNav.offset().top,
		  $document = $(document);

	function init() {
	  $window.on('scroll', onScroll);
	  $window.on('resize', resize);
	  $('a[href^="#"]').on('click', smoothScroll);
	}

	function resize() {
	  $body.removeClass('has-docked-nav')
	  navOffsetTop = $headerNav.offset().top
	  onScroll()
	}

	function onScroll() {
	  if(navOffsetTop < $window.scrollTop() && !$body.hasClass('has-docked-nav')) {
	    $body.addClass('has-docked-nav');
	    $footerNav.addClass('active');
	  }
	  if(navOffsetTop > $window.scrollTop() && $body.hasClass('has-docked-nav')) {
	    $body.removeClass('has-docked-nav');
	    $footerNav.removeClass('active');
	  }
	}

  function smoothScroll(e) {
    e.preventDefault();
    $(document).off("scroll");
    var navHeight = $('.header.navbar').height();
    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - (navHeight + 20)
    }, 0, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
    });
  }

  function alternateSection() {
  	var sections = $('.section-wrapper');
  	for (i = 0; i < sections.length; i++){
  		if (i%2 === 1) { $(sections[i]).addClass('odd-section'); }
  	}
  }

alternateSection();

init();

var currentDate = new Date;

$('footer p').append(', ' + currentDate.getFullYear());

});