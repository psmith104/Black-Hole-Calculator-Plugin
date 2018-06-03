<?php
/*
Plugin Name:  Black Hole Calculator
Description:  Black Hole Calculator developed for Fabio Pacucci by Patrick M Smith
*/

/* [BlackHoleCalculator] */
function ShortcodeOutput($atts)
{
	wp_enqueue_style("IsolatedBootstrap", plugins_url('bootstrap.iso.css', __FILE__), array(), false, "all");
	return file_get_contents(plugins_url('Calculator.html', __FILE__));
}
add_shortcode('BlackHoleCalculator', 'ShortcodeOutput');
?>