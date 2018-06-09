<?php
/*
Plugin Name:  Black Hole Calculator
Description:  Black Hole Calculator developed by Patrick M Smith and Fabio Pacucci
*/

/* [BlackHoleCalculator] */
function ShortcodeOutput($atts)
{
	wp_enqueue_style("IsolatedBootstrap", plugins_url('bootstrap/bootstrap.iso.css', __FILE__), array(), false, "all");
	wp_enqueue_style("BlackHoleCalculator", plugins_url('Calculator.css', __FILE__), array(), "0.0.1", "all");
	wp_enqueue_script("jQuery");
	wp_enqueue_script("IsolatedBootstrap", plugins_url('bootstrap/bootstrap.min.js', __FILE__), array(), false, true);
	wp_enqueue_script("BlackHoleCalculator", plugins_url('Calculator.js', __FILE__), array(), "0.0.1", true);
	return file_get_contents(plugins_url('Calculator.html', __FILE__));
}
add_shortcode('BlackHoleCalculator', 'ShortcodeOutput');
?>