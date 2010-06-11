<?php
// $Id$

class context_condition_w_og_pages extends context_condition {
  function condition_values() {
    $values = array();
    foreach (node_get_types() as $type) {
      if (variable_get("og_content_type_usage_{$type->type}", FALSE)) {
        $values[$type->type] = $type->name;
      }
    }
    return $values;
  }

  function options_form($context) {
    $defaults = $this->fetch_from_context($context, 'options');

    return array(
      'visible' => array(
        '#title' => 'Set on',
        '#type'  => 'radios',
        '#options' => array(
          'front' => 'Only on front page',
          'child' => 'Only on child page',
          'both'  => 'All all group pages',
        ),
        '#description' => 'Set this context on group\'s sub pages',
        '#default_value' => isset($defaults['visible']) ? $defaults['visible'] : 'both',
      ),
    );
  }

  function execute($group_node) {
    foreach (context_enabled_contexts() as $context) {
      $visible = $context->conditions['w_og_pages']['options']['visible'];
      
      if (isset($context->conditions['w_og_pages'])) {
        if (!empty($context->conditions['w_og_pages']['values'])) {
          foreach ($context->conditions['w_og_pages']['values'] as $type) {
            if ($type === $group_node->type) {
              if ($visible === 'both') {
                $this->condition_met($context, TRUE);
              }
              else {
                // Front page
                if ($_GET['q'] === "node/{$group_node->nid}") {
                  if ($visible === 'front') {
                    $this->condition_met($context, TRUE);
                  }
                }
                // Sub-pages
                elseif ($visible === 'child') {
                  $this->condition_met($context, TRUE);
                }
              }
            }
          }
        }
      }
    }
  }
}
