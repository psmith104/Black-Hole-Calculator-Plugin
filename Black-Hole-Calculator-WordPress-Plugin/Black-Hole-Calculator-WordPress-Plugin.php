<?php
/*
Plugin Name:  Black Hole Calculator
Description:  Black Hole Calculator developed for Fabio Pacucci by Patrick M Smith
*/

/* [BlackHoleCalculator] */
function ShortcodeOutput($atts)
{
	return file_get_contents(plugins_url('Calculator.html', __FILE__));
}
add_shortcode('BlackHoleCalculator', 'ShortcodeOutput');
?>