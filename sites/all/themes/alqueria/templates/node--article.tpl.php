<?php

/**
 * @file
 * Default theme implementation to display a node.
 *
 * Available variables:
 * - $title: the (sanitized) title of the node.
 * - $content: An array of node items. Use render($content) to print them all,
 *   or print a subset such as render($content['field_example']). Use
 *   hide($content['field_example']) to temporarily suppress the printing of a
 *   given element.
 * - $user_picture: The node author's picture from user-picture.tpl.php.
 * - $date: Formatted creation date. Preprocess functions can reformat it by
 *   calling format_date() with the desired parameters on the $created variable.
 * - $name: Themed username of node author output from theme_username().
 * - $node_url: Direct URL of the current node.
 * - $display_submitted: Whether submission information should be displayed.
 * - $submitted: Submission information created from $name and $date during
 *   template_preprocess_node().
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It can be manipulated through the variable $classes_array from
 *   preprocess functions. The default values can be one or more of the
 *   following:
 *   - node: The current template type; for example, "theming hook".
 *   - node-[type]: The current node type. For example, if the node is a
 *     "Blog entry" it would result in "node-blog". Note that the machine
 *     name will often be in a short form of the human readable label.
 *   - node-teaser: Nodes in teaser form.
 *   - node-preview: Nodes in preview mode.
 *   The following are controlled through the node publishing options.
 *   - node-promoted: Nodes promoted to the front page.
 *   - node-sticky: Nodes ordered above other non-sticky nodes in teaser
 *     listings.
 *   - node-unpublished: Unpublished nodes visible only to administrators.
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 *
 * Other variables:
 * - $node: Full node object. Contains data that may not be safe.
 * - $type: Node type; for example, story, page, blog, etc.
 * - $comment_count: Number of comments attached to the node.
 * - $uid: User ID of the node author.
 * - $created: Time the node was published formatted in Unix timestamp.
 * - $classes_array: Array of html class attribute values. It is flattened
 *   into a string within the variable $classes.
 * - $zebra: Outputs either "even" or "odd". Useful for zebra striping in
 *   teaser listings.
 * - $id: Position of the node. Increments each time it's output.
 *
 * Node status variables:
 * - $view_mode: View mode; for example, "full", "teaser".
 * - $teaser: Flag for the teaser state (shortcut for $view_mode == 'teaser').
 * - $page: Flag for the full page state.
 * - $promote: Flag for front page promotion state.
 * - $sticky: Flags for sticky post setting.
 * - $status: Flag for published status.
 * - $comment: State of comment settings for the node.
 * - $readmore: Flags true if the teaser content of the node cannot hold the
 *   main body content.
 * - $is_front: Flags true when presented in the front page.
 * - $logged_in: Flags true when the current user is a logged-in member.
 * - $is_admin: Flags true when the current user is an administrator.
 *
 * Field variables: for each field instance attached to the node a corresponding
 * variable is defined; for example, $node->body becomes $body. When needing to
 * access a field's raw values, developers/themers are strongly encouraged to
 * use these variables. Otherwise they will have to explicitly specify the
 * desired field language; for example, $node->body['en'], thus overriding any
 * language negotiation rule that was previously applied.
 *
 * @see template_preprocess()
 * @see template_preprocess_node()
 * @see template_process()
 *
 * @ingroup themeable
 */
?>
<div id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
<?php
  /** Modificado por camilo.rincon@imagendigital.co **/
  $result           = null;
  $taxonomyTermName = null;
  $field_image      = null;
  $field_image_logo      = null;
  $field_created    = null;

  $result           = field_view_field('node', $node, 'field_tags', array('default'));
  $taxonomyTermName = $result['#object']->field_tags['und'][0]['taxonomy_term']->name;
  
  if(!empty($taxonomyTermName)){
    print '<div class="category ' . $taxonomyTermName . '"><h2>' .
          ( $taxonomyTermName == 'Entera' ? 'Bienestar' : ( $taxonomyTermName == 'semidescremada' ? 'Estilo de Vida' : 'Alimentaci&oacute;n' ) ) .
          '</h2></div>';
  }

  if($node->type==='article'){
    print '<h3>'.$title.'</h3>';
  }

?>
<div class="banner-article">
<?php
  if(!empty($result['#object']->field_image)){
    $field_image      = file_create_url($result['#object']->field_image['und'][0]['uri']);
    print '<div class="image"><img src="'.$field_image.'"></div>';
  }

  if(!empty($result['#object']->field_image_logo)){
    $field_image_logo      = file_create_url($result['#object']->field_image_logo['und'][0]['uri']);
  }

  if(!empty($result['#object']->created)){
    $monthNum = date("m", $result['#object']->created);
    $monthTxt = null;
    switch ($monthNum) {
      case '01':
        $monthTxt = 'ENERO';
        break;
      case '02':
        $monthTxt = 'FEBRERO';
        break;
      case '03':
        $monthTxt = 'MARZO';
        break;
      case '04':
        $monthTxt = 'ABRIL';
        break;
      case '05':
        $monthTxt = 'MAYO';
        break;
      case '06':
        $monthTxt = 'JUNIO';
        break;
      case '07':
        $monthTxt = 'JULIO';
        break;
      case '08':
        $monthTxt = 'AGOSTO';
        break;
      case '09':
        $monthTxt = 'SEPTIEMBRE';
        break;
      case '10':
        $monthTxt = 'OCTUBRE';
        break;
      case '11':
        $monthTxt = 'NOVIEMBRE';
        break;
      case '12':
        $monthTxt = 'DICIEMBRE';
        break;
    }

    print '<div class="date ' . $taxonomyTermName . '">'.$monthTxt.' '.date("d/Y", $result['#object']->created).'</div>';
  }

	$base_url = 'http://www.alqueriaportubienestar.com/';
	$path = '';
?>
</div>
  <div class="content" <?php print $content_attributes; ?>>
    <div class="share">
      <span>COMP&Aacute;RTELO</span>
      <a onclick="ga('send', 'event','Compartir','<?php echo $title ?>', 'Facebook')" href="https://www.facebook.com/dialog/feed?app_id=406778042835232&amp;display=popup&amp;redirect_uri=<?php echo $base_url ?><?php echo $path ?>&amp;link=<?php echo $base_url ?><?php echo $path ?>&amp;caption=<?php echo $title ?>&amp;picture=<?php echo $field_image_logo ?>" class="btn-facebook" data-postname="<?php echo $title ?>"><img src="<?php echo $base_url ?>/sites/all/themes/alqueria/img/share-tip-fb-b.png" /></a>
      <a onclick="ga('send', 'event','Compartir','<?php echo $title ?>', 'Facebook')" href="http://m.facebook.com/dialog/feed?app_id=406778042835232&amp;display=touch&amp;redirect_uri=<?php echo $base_url ?><?php echo $path ?>&amp;link=<?php echo $base_url ?><?php echo $path ?>&amp;picture=<?php echo $field_image_logo ?>" class="btn-facebook mobile" data-postname="<?php echo $title ?>"><img src="<?php echo $base_url ?>/sites/all/themes/alqueria/img/share-tip-fb-b.png" /></a>
      <a onclick="ga('send', 'event','Compartir','<?php echo $title ?>', 'Twitter')" href="https://twitter.com/intent/tweet?url=<?php echo $base_url ?><?php echo $path ?>&amp;text=<?php echo $title ?>&amp;via=LecheAlqueria" class="btn-twitter both" data-postname="<?php echo $title ?>"><img src="<?php echo $base_url ?>/sites/all/themes/alqueria/img/share-tip-tw-b.png" /></a>
      <a onclick="ga('send', 'event','Compartir','<?php echo $title ?>', 'Google')" href="https://plus.google.com/share?url=<?php echo $base_url ?><?php echo $path ?>" class="btn-gplus both" data-postname="<?php echo $title ?>"><img src="<?php echo $base_url ?>/sites/all/themes/alqueria/img/share-tip-gp-b.png" /></a>
      <a onclick="ga('send', 'event','Compartir','<?php echo $title ?>', 'Mail')" href="mailto:?subject=<?php echo $title ?>&amp;body=<?php echo $base_url ?><?php echo $path ?>" class="btn-email both" data-postname="<?php echo $title ?>"><img src="<?php echo $base_url ?>/sites/all/themes/alqueria/img/share-tip-em-b.png" /></a>
      <a onclick="ga('send', 'event','Compartir','<?php echo $title ?>', 'Whatsapp')" href="whatsapp://send?text=<?php echo $base_url ?><?php echo $path ?>" class="btn-whatsapp mobile" data-postname="<?php echo $title ?>"  data-action="share/whatsapp/share"><img src="<?php echo $base_url ?>/sites/all/themes/alqueria/img/share-tip-wa-b.png" /></a>
    </div>
<?php

  // We hide the comments and links now so that we can render them later.
  hide($content['comments']);
  hide($content['links']);
  print render($content);
?>
  </div>

  <?php //print render($content['links']); ?>

  <?php //print render($content['comments']); ?>

</div>