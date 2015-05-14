<?php
function alqueria_preprocess_views_view(&$vars) {
	print $vars['view']->name;
	if ($vars['view']->name == 'article'){
	   $theme_path = drupal_get_path('theme', 'alqueria');
	   drupal_add_js($theme_path . '/js/plugins/masonry.js');
	}
}
?>