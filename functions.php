<?php 


// NQ
if (!is_admin()) add_action("wp_enqueue_scripts", "my_jquery_enqueue", 11);
function my_jquery_enqueue() {

    $q_string = '0.05';

    wp_deregister_script('jquery');
    wp_deregister_script( 'wp-embed' );
    //wp_register_script('jquery', bloginfo('template_url') . "/js/vendor/jquery-1.11.2.js", array(), null, true);
    wp_register_script('jquery', get_bloginfo('template_url') . "/js/vendor/jquery-2.2.4.min.js", array(), null, false);
    wp_register_script('init', get_bloginfo('template_url') . "/js/init.js", array('jquery'), $q_string, true);
    wp_register_script('plugins', get_bloginfo('template_url') . "/js/plugins.js", array('jquery'), $q_string, true);
    wp_register_script('main', get_bloginfo('template_url') . "/js/main.js", array('plugins'), $q_string, true);
    
    wp_register_style( 'crit', get_template_directory_uri() . '/css/crit.css', array(), $q_string, false );

    wp_dequeue_script('plan_selector_js');
    wp_dequeue_style('plan_selector_style');

    wp_enqueue_script('init');
    wp_enqueue_style('crit');

    wp_localize_script("init",
        "site",
        array(
            "theme_path"    => get_bloginfo('template_url'),
            "plugins_path"  => plugins_url(),
            "version"       => $q_string
        )
    );
}

// bye emoji
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' ); 


//if ( function_exists( 'rsvp_init' ) ) {
    /*
    add_action("rsvp_init", "relink_validate", 2);
    function relink_validate() {
        wp_deregister_script('jquery_validate');
        wp_register_script('jquery_validate', get_bloginfo('template_url') . "/js/vendor/jquery.validate.min.js", array(), null, false);
    }
    */
//}


// Menu Registration
register_nav_menus(array(
	'main_menu'    => 'Main Menu',
	'secondary_menu'  => 'Secondary Menu'
));


// image sizes
if ( function_exists( 'add_theme_support' ) ) {
	add_theme_support( 'post-thumbnails' );
	add_image_size( 'sumo', 2000, 9999, false ); // e.g. 172px width, 220px height; false = soft crop; true = hard crop
}


// CHANGE EXCERPT LENGTH FOR DIFFERENT POST TYPES
/*
function isacustom_excerpt_length($length) {
	global $post;
	return 30;
}
add_filter('excerpt_length', 'isacustom_excerpt_length');
*/

/*
//custom excerpt ellipsis
function new_excerpt_more( $more ) {
    return 'custom ellipsis here...';
}
add_filter('excerpt_more', 'new_excerpt_more');
*/


/*
//change the default validation message.
add_filter( 'gform_validation_message', 'change_message', 10, 2 );
function change_message( $message, $form ) {
    return "<div class='validation_error h2 gold'>Please complete all fields marked with an asterisk \"*\"</div>";
}
*/

/*
// rename posts to news, because.
function revcon_change_post_label() {
    global $menu;
    global $submenu;
    $menu[5][0] = 'News';
    $submenu['edit.php'][5][0] = 'News';
    $submenu['edit.php'][10][0] = 'Add News';
    $submenu['edit.php'][16][0] = 'News Tags';
    echo '';
}
function revcon_change_post_object() {
    global $wp_post_types;
    $labels = &$wp_post_types['post']->labels;
    $labels->name = 'News';
    $labels->singular_name = 'News';
    $labels->add_new = 'Add News';
    $labels->add_new_item = 'Add News';
    $labels->edit_item = 'Edit News';
    $labels->new_item = 'News';
    $labels->view_item = 'View News';
    $labels->search_items = 'Search News';
    $labels->not_found = 'No News found';
    $labels->not_found_in_trash = 'No News found in Trash';
    $labels->all_items = 'All News';
    $labels->menu_name = 'News';
    $labels->name_admin_bar = 'News';
}
 
add_action( 'admin_menu', 'revcon_change_post_label' );
add_action( 'init', 'revcon_change_post_object' );
*/



/*
// View page via specific template
function add_print_query_vars($vars) {
    $new_vars = array('print_recipe'); // this query variable will show up in your url, so make it unique.
    $vars = $new_vars + $vars;
    return $vars;
}
add_filter('query_vars', 'add_print_query_vars');
add_action("template_redirect", 'my_template_redirect_2322');

function my_template_redirect_2322()
{
    global $wp;
    global $wp_query;
    if (isset($wp->query_vars["print_recipe"])) 
    {
        include(TEMPLATEPATH . '/recipe-printer.php'); // this is your spec template.
        die();

    }
}
*/



/*
// add menu li classes depending on menu location
add_filter('nav_menu_css_class' , 'special_nav_class' , 10 , 2);
function special_nav_class($classes, $item){

    $menu_locations = get_nav_menu_locations();

    if ( has_term($menu_locations['main'], 'nav_menu', $item) ) {
        $classes[] = 'grid__item palm--one-whole lap--one-sixth desk--one-sixth menu-link';
    return $classes;
    } elseif ( has_term($menu_locations['newsmenu'], 'nav_menu', $item) ) {
             $classes[] = "grid__item palm--one-whole lap--one-fifth desk--one-fifth";
    return $classes;
    } elseif ( has_term($menu_locations['aboutmenu'], 'nav_menu', $item) ) {
             $classes[] = "grid__item palm--one-whole lap--one-third desk--one-third";
    return $classes;
    } else {
             $classes[] = ""; // nothing
    return $classes;
    }
}
*/



// comprehensive menu output
class Menu_With_Description extends Walker_Nav_Menu {
    function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0) {
        global $wp_query;
        $indent = ( $depth ) ? str_repeat( "\t", $depth ) : '';
        
        $class_names = $value = '';

        $classes = empty( $item->classes ) ? array() : (array) $item->classes;

        $class_names = join( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item ) );
        $class_names = ' class="' . esc_attr( $class_names ) . '"';

        $output .= $indent . '<li id="menu-item-'. $item->ID . '"' . $value . $class_names .'>';

        $attributes = ! empty( $item->attr_title ) ? ' title="' . esc_attr( $item->attr_title ) .'"' : '';
        $attributes .= ! empty( $item->target ) ? ' target="' . esc_attr( $item->target ) .'"' : '';
        $attributes .= ! empty( $item->xfn ) ? ' rel="' . esc_attr( $item->xfn ) .'"' : '';
        $attributes .= ! empty( $item->url ) ? ' href="' . esc_attr( $item->url ) .'"' : '';

        $item_output = $args->before;
        $item_output .= '<a'. $attributes .'><span class="inner">';
        $item_output .= $args->link_before . apply_filters( 'the_title', $item->title, $item->ID ) . $args->link_after;
        $item_output .= '</span></a>';        

        $item_output .= $args->after;

        $output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
    }
}

/*
// put this in your template nav call
$walker = new Menu_With_Description; 
'walker'          => $walker
*/

