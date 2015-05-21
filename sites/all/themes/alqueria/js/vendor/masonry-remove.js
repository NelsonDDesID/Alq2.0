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
		}
	}
})(jQuery);
