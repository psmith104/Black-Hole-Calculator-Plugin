<?php
/*
Plugin Name:  Black Hole Calculator
Description:  Black Hole Calculator developed for Fabio Pacucci by Patrick M Smith
*/

/* [BlackHoleCalculator] */
function ShortcodeOutput($atts)
{
	wp_enqueue_style("IsolatedBootstrap", plugins_url('bootstrap/bootstrap.iso.css', __FILE__), array(), false, "all");
	wp_enqueue_style("BlackHoleCalculator", plugins_url('Calculator.css', __FILE__), array(), false, "all");
	wp_enqueue_script("jQuery");
	wp_enqueue_script("IsolatedBootstrap", plugins_url('bootstrap/bootstrap.min.js', __FILE__), array(), false, true);
	return file_get_contents(plugins_url('Calculator.html', __FILE__));
}
add_shortcode('BlackHoleCalculator', 'ShortcodeOutput');
?>