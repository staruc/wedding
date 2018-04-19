<?php get_header(); ?>
<div class="block w100 padded_block rust centert">
	<div class="tan padme leftt">
		<div class="spacer50"></div>
		<div class="container lil centerm">
		<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

			<?php the_title('<h1 class="centert">','</h1>'); ?>
		
			<?php the_content(); ?>

		<?php endwhile; ?>

		<?php else: ?>
		<?php endif; ?>			

		</div>



		<div class="clearish"></div>
	</div>

	<div class="spacer50"></div>
	<div class="container">
		</div>
	</div>



</div>



<?php get_footer(); ?>