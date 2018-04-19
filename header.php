<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <?php wp_head(); ?>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-20126431-8"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-20126431-8');
</script>


        
<?php 

$post_arr = $_POST;
if(!empty($post_arr['rsvpStep'])) {
  $post_styles = '.rsvp_wrap{display:block;}';
}
if($post_arr['rsvpStep'] == 'handleRsvp') {
 // $post_styles = '.rsvp_wrap{text-align:center;}';
}
$post_wrap = '<style>'.$post_styles.'</style>';


echo $post_wrap;

 ?>
    </head>
    <body <?php body_class(); ?>>
        <!--[if lte IE 9]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <header class="layer5 w100">
            <div class="ulay block black layer2 object_fit abs"></div>
            <?php $walker = new Menu_With_Description; 
            $nav_args = array(
                    'theme_location' => 'main_menu',
                    'menu' => 'Main Menu',
                    'container' => 'nav',
                    'container_class' => 'main_menu',
                    'container_id' => '',
                    'menu_class' => 'menu',
                    'menu_id' => '',
                    'echo' => true,
                    'fallback_cb' => 'wp_page_menu',
                    'before' => '',
                    'after' => '',
                    'link_before' => '',
                    'link_after' => '',
                    'items_wrap' => '<ul id="%1$s" class="%2$s layer4 rel">%3$s</ul>',
                    'depth' => 0,
                    'walker' => $walker
                );
                wp_nav_menu( $nav_args ); ?>
        </header>
