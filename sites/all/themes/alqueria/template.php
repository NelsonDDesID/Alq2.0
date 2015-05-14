<?php
function alqueria_preprocess_views_view(&$vars) {
	if ($vars['view']->name == 'article'){
	   $theme_path = drupal_get_path('theme', 'alqueria');
	   drupal_add_js($theme_path . '/js/plugins/masonry.js');
	   drupal_add_js($theme_path . '/js/plugins/classie.js');
	   drupal_add_js($theme_path . '/js/plugins/imageload.js');
	   drupal_add_js($theme_path . '/js/vendor/masonry-remove.js');
	}
}
?>