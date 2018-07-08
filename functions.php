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
            "home_url"      => home_url(),
            "theme_path"    => get_bloginfo('template_url'),
            "plugins_path"  => plugins_url(),
            "qstring"       => $q_string
        )
    );

    wp_localize_script( 'init', 'ajax_gravityboy_params', array(
        'ajax_url' => admin_url( 'admin-ajax.php' ),
        'post_id'  => get_the_id()

    ) );

    wp_localize_script( 'init', 'ajax_rsvplookup_params', array(
        'ajax_url' => admin_url( 'admin-ajax.php' )
    ) );


}

// bye emoji
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' ); 


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

add_action('wp_ajax_rsvplookup', 'ajax_rsvplookup');
add_action('wp_ajax_nopriv_rsvplookup', 'ajax_rsvplookup');

add_action('wp_ajax_gravityboy', 'ajax_gravityboy');
add_action('wp_ajax_nopriv_gravityboy', 'ajax_gravityboy');


function ajax_rsvpLookup() {
    $lookup_html = '';
    $query_data = $_GET;
    $first_name = ($query_data['first_name']) ? $query_data['first_name'] : false;
    $last_name = ($query_data['last_name']) ? $query_data['last_name'] : false;


    global $wpdb;
    $results = $wpdb->get_results( 
        'SELECT * FROM `wedding_guests` 
        WHERE `first_name` LIKE "'.$first_name.'" 
        AND `last_name` LIKE "'.$last_name.'"
        ', ARRAY_A );

    $results_last = $wpdb->get_results( 
        'SELECT * FROM `wedding_guests` 
        WHERE `last_name` LIKE "'.$last_name.'"
        ', ARRAY_A );



    if((empty($results) && empty($results_last)) || $first_name.$last_name === 'GuestGuest') {
        $lookup_html = 'Hm. I\'m not sure you\'re invited.';

    } elseif( !empty($results) ) {


        $guest_first = $results[0]['guest_first'];
        $guest_last = $results[0]['guest_last'];
        $invite_id = $results[0]['guest_id'];

        $lookup_html .= 'i know you, ' . $first_name;
        $lookup_html .= '<input type="hidden" name="guest_first" value="'.$guest_first.'"><input type="hidden" name="guest_last" value="'.$guest_last.'"><input type="hidden" name="invite_id" value="'.$invite_id.'">';
        $lookup_html .= '<div class="gravity_init"></div>';

    } elseif(!empty($results_last) & $last_name != '') {

        $lookup_html .= '<p>I couldn\'t find an exact match, but I did find the last name <b>'.$last_name.'</b>, is your name below?</p>';

        foreach($results_last as $last_match) {
            $lookup_html .= '<li>'.$last_match['first_name'].'</li>';
        }

        $lookup_html = '<ul>'.$lookup_html.'</ul>';


    } 
    //echo var_export($results);

    echo $lookup_html;

    die();
}


function ajax_gravityBoy() {

    $query_data = $_GET;
    $form_id = ($query_data['form_id']) ? $query_data['form_id'] : false;
    $invite_id = ($query_data['invite_id']) ? $query_data['invite_id'] : false;
    $guest_first = ($query_data['guest_first']) ? $query_data['guest_first'] : false;
    $guest_last = ($query_data['guest_last']) ? $query_data['guest_last'] : false;
    $grav_html = '';



    $grav_html .= //gravity_form( $form_id, $display_title = false, $display_description = false, $display_inactive = false, $field_values = 'has_guest2=Test', $ajax = true, $tabindex, $echo = false );

    $grav_html = do_shortcode( '[gravityform id="1" title="false" field_values="has_guest='.$guest_first.$guest_last.'" ajax="true"]', $ignore_html = false );

    echo $grav_html;
    die();
}






/*
//change the default validation message.
add_filter( 'gform_validation_message', 'change_message', 10, 2 );
function change_message( $message, $form ) {
    return "<div class='validation_error h2 gold'>Please complete all fields marked with an asterisk \"*\"</div>";
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


