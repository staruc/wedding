<?php get_header(); ?>
<div class="block w100 padded_block rust centert">
	<div class="tan padme">
		<div class="spacer50"></div>
		<h2 class="ib h4 skew">Registry</h2>
		<p>Select one of the vendor links below to view our registry items. Thank you!</p>
		<div class="clearish"></div>
	</div>

	<div class="spacer50"></div>
	<div class="container">

		<div class="form_intro">
			<p>Please enter be your name as spelled in your invitation</p>
			<div class="pure-g">
				<div class="pure-u-sm-1-1 pure-u-md-2-3">
					<form action="" class="rsvp_lookup_form rsvp">
						<div class="gform_wrapper rsvp">
							<div class="gform_body">
								<ul>
									<li class="gfield">
										<div class="ginput_container"><input type="text" name="first_name" placeholder="Your first name"></div>
									</li>
									<li class="gfield">
										<div class="ginput_container"><input type="text" name="last_name" placeholder="Your last name"></div>
									</li>
								</ul>
							</div>
						</div>
						<div class="gform_footer"><input type="submit" class="rsvp_submit" value="lookup"></div>
					</form>
				</div>
				<div class="lookup_result tan p1"></div>
			</div>
			<div class="spacer50"></div>			
		</div>

		
		<div id="gravity_contact" data-form-id="1"><?php //echo gravity_form( 1, false, false, false, null, true, null, false ); ?></div>
	

		<div class="pure-g rel">
			<div class="vrule block tan abs mrule"></div>
			<div class="pure-u-sm-1-1 pure-u-md-1-2 tan">
				<div class="spacer50 hide_on_mobile"></div>
				<a class="padme content bl tan revlink" target="_blank" href="https://www.crateandbarrel.com/gift-registry/stephen-taruc-and-lydia-hawthorne/r5809498">
					<h3 class="nom">Crate &amp; Barrel</h3>
					<div class="hide_on_mobile">
						<div class="spacer50"></div>
						<img class="img" src="<?php bloginfo('template_url') ?>/img/CrateandBarrelLogo.png" alt="Crate &amp; Barrel">						
					</div>
				</a>
				<div class="spacer20"></div>
			</div>
			<div class="pure-u-sm-1-1 pure-u-md-1-2 rel tan">
				<div class="spacer50 hide_on_mobile"></div>
				<a class="padme content bl tan revlink" target="_blank" href="http://tgt.gifts/stephen-and-lydia">
					<h3 class="nom">Target</h3>
					<div class="padme hide_on_mobile">
						<div class="spacer20"></div>
						<img class="img" src="<?php bloginfo('template_url') ?>/img/targetlogo.png" alt="Target">						
					</div>
					<div class="spacer20"></div>
					
					
				</a>
				<div class="spacer50"></div>
			</div>
		</div>

	<!--
		<div id="rsvp" class="babycon centerm tan leftt">
			<div class="rsvp_wrap">
				<?php // echo do_shortcode( '[rsvp]' ); ?>				
			</div>
		</div>
	-->
	</div>



</div>




	<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

	

	<?php endwhile; ?>

	<?php else: ?>
	<?php endif; ?>

<?php get_footer(); ?>