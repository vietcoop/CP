<?php
// $Id: template.php,v 1.1.2.6 2010/01/11 00:08:12 sociotech Exp $

define('COMMONPASSION_PATH', drupal_get_path('theme', 'commonpassion'));

/**
 * Implements hook_preprocess_ID().
 */
function commonpassion_preprocess_page(&$vars) {
  if ($group_node = og_get_group_context()) {
    $vars['logo'] = base_path() . COMMONPASSION_PATH . '/images/hosted-by-cp.gif';
  }
}
