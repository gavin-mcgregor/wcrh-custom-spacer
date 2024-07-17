<?php

/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */


// Get height
$wrapper_attributes = get_block_wrapper_attributes();
if (!empty($attributes['height'])) {
    $height = $attributes['height'];
    $wrapper_attributes = str_replace('class="', 'class="' . esc_attr($height) . ' ', $wrapper_attributes);
}

?>
<div <?php echo $wrapper_attributes ?>></div>