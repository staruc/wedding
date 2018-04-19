<?php get_header(); ?>
<div class="block w100 rust centert">
<!--
	<div class="tan padme">
		<div class="spacer50"></div>
		<h2 class="ib h4 skew">Registry</h2>
		<p>Woohoo! Click on one of the vendor links below to see our selections. Thank you!</p>
		<div class="clearish"></div>
	</div>
-->


		<?php
		$fotos_html = '';
		$fotos_inner = '';
		$gct = 0;

		if( get_field('fotos') ) {
			$fotos = get_field('fotos');

			foreach ($fotos as $key => $img) {
				$fotos_inner = '';
				$init_src = '';
				$init_srcset = '';
				$img_srcset = wp_get_attachment_image_srcset( $img['id'], 'full' );
				$img_sizes = wp_get_attachment_image_sizes( $img['id'], 'full' );

				$grid_class = '';
				$top = '';

				$img_pos = get_field('position', $img['id']);

				if($img_pos == 'top') {
					$top = 'top';					
				} elseif($img_pos == 'bottom') {
					$top = 'bottom';
				}



				if( $gct === 0 ) {
					$grid_class = 'pure-u-sm-1-1 tall-stack';
				} elseif( $gct % 12 == 0 ) {
					$grid_class = 'pure-u-sm-1-1 tall-stack';
				} elseif( $gct === 1 || $gct % 8 == 0 ) {
					$grid_class = 'pure-u-sm-1-1 wide-stack';
				} elseif( $gct % 7 == 0 ) {
					$grid_class = 'pure-u-sm-1-1 pure-u-md-5-12 wide-row-2';
				} elseif( $gct % 6 == 0 ) {
					$grid_class = 'pure-u-sm-1-1 pure-u-md-7-12 wide-row-1';
				} elseif( $gct % 5 == 0 && $gct % 10 != 0 ) {
					$grid_class = 'pure-u-sm-1-1 wide-stack';
				} elseif( $gct % 4 == 0 || $gct === 11 ) {
					$grid_class = 'pure-u-sm-1-1 tall-stack';
				} elseif( $gct % 3 == 0 ) {
					$grid_class = 'pure-u-sm-1-2 tall-stack';
				} elseif( $gct % 2 == 0 ) {
					$grid_class = 'pure-u-sm-1-2 tall-stack';
				} 

				$fotos_inner = '<div class="gct_'.$gct.' '.$grid_class.' rel"><img src="'.$img['sizes']['large'].'" srcset="" data-src="'.$img['sizes']['large'].'" data-srcset="'.$img_srcset.'" sizes="'.$img_sizes.'" class="object_fit '.$top.'" /></div>';

				if( $gct === 0 ) {
					$fotos_html .= $fotos_inner;
				} elseif( $gct === 1) {
					$fotos_html .= '<div class="pure-u-sm-1-1 pure-u-md-5-12"><div class="pure-g">'.$fotos_inner;
				} elseif( $gct % 5 == 0 ) {
					$fotos_html .= $fotos_inner.'</div></div>';
				} elseif( $gct % 4 == 0 || $gct === 11 ) {
					$fotos_html .= '<div class="pure-u-sm-1-1 pure-u-md-7-12"><div class="pure-g">'.$fotos_inner;
				} elseif ( $gct % 3 == 0 && $gct % 6 != 0 && $gct % 9 != 0 ) {
					$fotos_html .= $fotos_inner.'</div></div>';
				} 
				/*
				$gct % 2 == 0 {


				} */
				else {
					$fotos_html .= $fotos_inner;
				}

				if($gct == 7) {
					$gct = 0;
				} else {
					$gct++;
				}
				

			}
			echo '<div class="pure-g rel pho">'.$fotos_html.'</div>';

		} ?>

		
		

		<div id="rsvp" class="babycon centerm tan leftt">
			<div class="rsvp_wrap">
				<?php echo do_shortcode( '[rsvp]' ); ?>				
			</div>
		</div>



</div>




	<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

	

	<?php endwhile; ?>

	<?php else: ?>
	<?php endif; ?>

<?php get_footer(); ?>