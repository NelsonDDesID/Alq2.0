<?php

/**
 * @file
 * The PHP page that serves all page requests on a Drupal installation.
 *
 * The routines here dispatch control to the appropriate handler, which then
 * prints the appropriate page.
 *
 * All Drupal code is released under the GNU General Public License.
 * See COPYRIGHT.txt and LICENSE.txt.
 */

/**
 * Root directory of Drupal installation.
 */
define('DRUPAL_ROOT', getcwd());

require_once DRUPAL_ROOT . '/includes/bootstrap.inc';
drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);
menu_execute_active_handler();
?>
<div class="tip t-[field_color] [php]" >
	<div class="description">[field_content]</div>
	<div class="image">[field_image]</div>
	<img src="[base_url]/sites/all/themes/alqueria/img/share-tip.png">
	<div class="social networks">
		<div class="options">
			<span class="share">COMPÁRTELO</span>
			<a href="https://www.facebook.com/dialog/feed?app_id=149377435120323&amp;display=popup&amp;redirect_uri=[base_url][path]&amp;link=[base_url][path]&amp;caption=[title]&amp;picture=[php_1]" class="btn-facebook" data-postname="[title]"><img src="[base_url]/sites/all/themes/alqueria/img/share-tip-fb.png" /></a>
			<a href="http://m.facebook.com/dialog/feed?app_id=149377435120323&amp;display=touch&amp;redirect_uri=[base_url][path]&amp;link=[base_url][path]&amp;picture=[php_1]" class="btn-facebook mobile" data-postname="[title]"><img src="[base_url]/sites/all/themes/alqueria/img/share-tip-fb.png" /></a>
			<a href="https://twitter.com/intent/tweet?url=[base_url][path]&amp;text=[title]&amp;via=LecheAlqueria" class="btn-twitter both" data-postname="[title]"><img src="[base_url]/sites/all/themes/alqueria/img/share-tip-tw.png" /></a>
			<a href="https://plus.google.com/share?url=[base_url][path]" class="btn-gplus both" data-postname="[title]"><img src="[base_url]/sites/all/themes/alqueria/img/share-tip-gp.png" /></a>
			<a href="mailto:?subject=[title]&amp;body=[base_url][path]" class="btn-email both" data-postname="[title]"><img src="[base_url]/sites/all/themes/alqueria/img/share-tip-em.png" /></a>
			<a href="whatsapp://send?text=[base_url][path]" class="btn-whatsapp mobile" data-postname="[title]"  data-action="share/whatsapp/share"><img src="[base_url]/sites/all/themes/alqueria/img/share-tip-wa.png" /></a>
		</div>
		<div class="back"></div>
	</div>
</div>
