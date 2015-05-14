// Avoid `console` errors in browsers that lack a console.
(function() {
	var method;
	var noop = function () {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());


($ || jQuery)(function(){
	var $ = $ || jQuery;

	// Menú Próximamente
	(function(){
		var $options = $('.header ul.menu:first li.disable');
		$options.each(function(index,li){
			var $li = $(li);
			var $next = $('<div/>');
			$next.addClass('next');
			$li.append($next);
			$next.fadeOut(0);

			$li.mouseenter(function(){
				$(this).find('div.next').stop().fadeIn(400);
			});
			$li.mouseleave(function(){
				$(this).find('div.next').stop().fadeOut(300);
			});
		});
	})();

	// Menú inactivo
	(function(){
		$('body .header .center:first li.disable a').click(function(event){
			event.preventDefault();
		});
	})();

	// Menú móbiles
	(function(){
		var $gmenu = $('#gmenu');
		var open = false;
		if( $gmenu.length > 0 ) {
			var $body = $('body:first');

			var $list = $('body>div:not(.header,.footer)');
			$gmenu.click(function(event){
				event.preventDefault();

				if( open )  {
					$body.css({
						'overflow-x': 'auto'
					});

					$('body>.header .center>div:first').hide();
					$list.unbind('click');
				}
				else {
					$body.css({
						'overflow-x': 'hidden'
					});

					$('body>.header .center>div:first').show();
					$list.click(function(event){
						event.preventDefault();
						event.stopPropagation();
						$gmenu.click();
					});
				}
				open = !open;
			});

			$(window).resize(function() {
				if( open )
					$gmenu.click();
				if( $(window).width( ) > 800 )
					$('body>.header .center>div:first').show();
			});
		}
	})();

	// Header ocultado
	(function(){

		if($('body').hasClass('not-front'))
			return;

		var $toHide = $('body .header .left:first');
		var toHideHeight = $toHide.height();

		var toHideActualHeight = toHideHeight;

		var $logo = $('body .header .left:first a#logo');
		var logoHeight = $logo.height();
		var logoSmall = false;

		$(window).scroll(function() {
			var scrolled = $(this).scrollTop();

			if($(window).width( ) <= 800 ) {
				var newHeight = 0;

				if( scrolled <= toHideHeight )
					newHeight = toHideHeight - scrolled;
				else
					newHeight = 0;

				if( newHeight != toHideActualHeight ) {
					toHideActualHeight = newHeight;
					$toHide.height(toHideActualHeight);
					console.debug('Listo:',toHideActualHeight);
				}
			}
			else {
				if( scrolled > 20 ) {
					if( !logoSmall ) {
						logoSmall = true;
						$logo.animate({
							height: logoHeight / 1.6
						}, 300);
					}
				}
				else {
					logoSmall = false;
					$logo.stop().animate({
						height: logoHeight
					}, 300);
				}
			}
		});

		var rTimeout = null;
		var lastWindowWidth = $(window).width();
		$(window).resize(function() {

			if( lastWindowWidth == $(window).width() )
				return;

			lastWindowWidth = $(window).width();

			logoSmall = false;
			$logo.stop().css({
				height: ''
			});
			$toHide.stop().css({
				height: ''
			});

			toHideHeight = $toHide.height();
			toHideActualHeight = toHideHeight;
			logoHeight = $logo.height();

			clearTimeout( rTimeout );
			rTimeout = setTimeout(function(){
				logoSmall = false;
				$logo.stop().css({
					height: ''
				});
				$toHide.stop().css({
					height: ''
				});
				$(window).scroll()
			}, 500);

		});

	})();

	// Home 1.1 productos
	(function(){
		var $containers = $('body>.content .middle .landing .container:not(.last)');
		if( $containers.length > 0 ) {
			$containers.append([
				'<div class="over">',
					'<img src="' + pathToTheme + '/img/home-container-over.png" width="100%" />',
					'<div class="icon"></div>',
				'</div>',
			].join(''));
			$containers.find('.over').fadeOut(0);
			$containers.mouseenter(function( event ){
				$(this).find('.over').stop().fadeIn(300);
				if( $(window).width( ) <= 800 )
					$(this).click();
			});
			$containers.mouseleave(function( event ){
				$(this).find('.over').stop().fadeOut(300);
			});
			$containers.click(function( event ){
				event.preventDefault();
				event.stopPropagation();

				var $itemValue	= $(this).parent().find('a:first').attr('href');
				ga('send', 'event','Productos', 'Select_product', $itemValue);

				document.location.href = $(this).find('a').attr('href');
			});

		}
	})();

	// Tag Site
	(function(){
		//Main Menu
		$('.header .center .menu a').click(function() {
			var $itemValue=$(this).html();
			ga('send', 'event','Menu', 'select_Item', $itemValue);
		});
		//Links Footer Politycs and Terms
		$('.footer .right .pol_ter_con a').click(function() {
			var $itemValue=$(this).html();
			ga('send', 'event','Footer', 'legales', $itemValue);
		});
		//Social Networks Menu
		$('.header .right .menu a').click(function() {
			var $itemValue=$(this).html();
			ga('send', 'event','Redes-sociales', 'select_Item', $itemValue);
		});

		//Slider Home
		$('.views-field.views-field-field-url a').click(function() {
			var $itemValue	= $(this).closest(".views-slideshow-cycle-main-frame-row").attr('id');
			var $lastChar	= parseInt($itemValue.substr($itemValue.length - 1))+1;
			ga('send', 'event','Home', 'Banner', 'Banner_'+$lastChar);
		});

		//Content Home
		$('.content .middle .landing a').click(function() {
			var $itemValue	= $(this).attr('href');
			ga('send', 'event','Home', 'Select_product', $itemValue);
		});

		//Products Home
		$('.content .middle .product a').click(function() {
			var $itemValue	= $(this).attr('href');
			ga('send', 'event','Productos', 'Select_product', $itemValue);
		});

		//Social Network
		$('.social.networks a').click(function(event) {
			var $a = $(this);

			var name = $a.attr('data-postname');
			var red = '';

			if( $a.hasClass('btn-facebook') )
				red = 'Facebook';
			else if( $a.hasClass('btn-twitter') )
				red = 'Twitter';
			else if( $a.hasClass('btn-gplus') )
				red = 'Google+';
			else if( $a.hasClass('btn-email') )
				red = 'E-mail';
			else if( $a.hasClass('btn-whatsapp') )
				red = 'Whatsapp';
			else
				red = 'None';

			ga('send', 'event','Compartir', name , red);
		});

	})();

	// Tips Over
	(function(){
		var $tips = $('body.not-front .content .middle .view-content .tip');
		var tipWidth = 0;
		var tipHeight = 0;
		if( $tips.length > 0 ) {
			tipWidth = $($tips[0]).width();
			tipHeight = $($tips[0]).height();

			$tips.find('.social').css({
				top:tipHeight,
				left:tipWidth
			}).addClass('js');
			$tips.each(function(index, tip){
				var $tip = $(tip);
				var $image = $tip.children('img:first');
				var $social = $tip.children('.social:first');
				$image.click(function(){
					$(this).stop().fadeOut(300);
					$(this).parent().children('.social').stop().animate({
						top:0,
						left:0
					},400);
					$tips.find('.social').not(':eq(' + index + ')').mouseleave();
				});
				$social.mouseleave(function(){
					$(this).stop().animate({
						top:tipHeight,
						left:tipWidth
					},600,function(){
						$(this).parent().children('img:first').stop().fadeIn(300);
					});
				});

				var $wa = $tip.find('.btn-whatsapp');
				if($wa.attr('href').indexOf('whatsapp:') != 0) {
					$wa.attr('href', 'whatsapp:' + $wa.attr('href') );
				}

			});

			$(window).resize(function() {
				tipWidth = $('body.not-front .content .middle .view-content .tip:first').width();
				tipHeight = $('body.not-front .content .middle .view-content .tip:first').height();
			});
		}

	})();

	// Registro
	(function(){
		if($('form.webform-client-form').length > 0) {
			var $radios = $('form.webform-client-form input[type="radio"]');
			$radios.each(function(index, radio){
				var $radio = $(radio);
				$radio.addClass('js').css({
					opacity: 0.01,
					position: 'absolute'
				});

				var $newRadio = $('<div/>');

				$newRadio.addClass('input-radio');
				$newRadio.data('radio',$radio);
				$radio.data('radio',$newRadio);

				$radio.change(function(){
					$radios.each(function(index2, radio2) {
						$(radio2).data('radio').toggleClass('checked', !!$(radio2).prop('checked'));
					});
				});

				$newRadio.click(function(){
					$radios.removeProp('checked');
					$radio.prop('checked', true);
					$radios.each(function(index2, radio2) {
						$(radio2).data('radio').toggleClass('checked', !!$(radio2).prop('checked'));
					});
				});

				$radio.after($newRadio);
				$newRadio.toggleClass('checked', !!$(radio).attr('checked'));
			});
		}
	})();
});




