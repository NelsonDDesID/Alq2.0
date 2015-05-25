// http://masonry.desandro.com/masonry.pkgd.js added as external resource
// added http://rawgithub.com/desandro/classie/master/classie.js

(function ($) {
	Drupal.behaviors.da_vinciThemeMasonry = {
		attach: function (context) {

			var container = document.querySelector('.view-article');
			var msnry = new Masonry(container, {
				itemSelector: '.views-row',
				columnWidth: '.views-row'
			});

			imagesLoaded(container, function () {
				msnry.layout();
			}).progress(function( imgLoad, image ) {

				console.debug( image );
				// get item
				// image is imagesLoaded class, not <img>, <img> is image.img
				var $item = $(image.img).closest( itemSelector );

				$item.css({
					'opacity': 0,
					'margin-top': '50px'
				});

				msnry.appended( $item );

				$item.show();
				$item.animate({
					'opacity': 1,
					'margin-top': '0px'
				}, 300);

				/*
				// un-hide item
				// masonry does its thing
				*/
			});


			/*
			var $container = $('.view-article').masonry({
				itemSelector: '.views-row',
				columnWidth: '.views-row'
			}).imagesLoaded( function() {
				$container.masonry();
			});
			// Close event and element remove
			$container.find('.views-row .close').click (function(){
				$(this).parent('.views-row').remove();
				$container.masonry();
				// Close element
				$('.view-masonry .node-article').append('<span class="close">close</a>');
			});
			*/

			/*
			var container = document.querySelector('.view-article');
			var msnry = new Masonry(container, {
				itemSelector: '.views-row',
				columnWidth: '.views-row'
			});
			// ImageLoaded
			imagesLoaded(container, function () {
				msnry.layout();
			});
			// Close event and remove element
			eventie.bind(container, 'click', function (event) {
				if (!classie.has(event.target, 'close')) {
					return;
				}
				msnry.remove($(event.target).closest('li'));
				msnry.layout();
			});
			*/
		}
	}
})(jQuery);
