<?php get_header(); ?>

<div class="head w100 rel centert">
	<div class="block abs object_fit ulay2 black layer2"></div>
	<?php 
			$img = get_field('image');
			$img_srcset = wp_get_attachment_image_srcset( $img['id'], 'sumo' );
			$img_sizes = wp_get_attachment_image_sizes( $img['id'], 'sumo' );
			echo '<img src="'.$img['sizes']['large'].'" srcset="'.$init_srcset.'" data-src="'.$img['sizes']['sumo'].'" data-srcset="'.$img_srcset.'" sizes="'.$img_sizes.'" alt="'.$img['alt'].'" class="object_fit layer1">'; ?>

	<div class="valign abs centerm layer3 white shadowed"><h2 class="h4 skew">The Wedding Celebration of</h2><span class="h1 nom rule2 rel">Stephen &amp;&nbsp;Lydia</span><h3 class="">Saturday October&nbsp;13,&nbsp;2018<br>Petoskey, MI</h3></div>
	<a href="#rsvp" class="button bottomed block or2 layer4 abs scrollto"><span class="green">RSVP</span></a>

</div>
<div class="block w100 padded_block rust centert">

	<div class="container">
		<div id="rsvp" class="babycon centerm tan leftt">
			<div class="rsvp_wrap">
				<?php echo do_shortcode( '[rsvp]' ); ?>				
			</div>

		</div>

		<div class="pure-g">
			<div class="pure-u-sm-1-1 pure-u-md-1-2 tan rel">
				<div class="spacer50"></div>
				<h2 class="ib rule2 tan rel nom under">Ceremony</h2>
				<div class="padme content">
					<p class="">3:00pm</p>
					<h3 class="nom padme">Emmanuel Episcopal Church</h3>
					<p class="nom"><a target="_blank" class="revlink" href="https://www.google.com/maps/dir//Emmanuel+Episcopal+Church,+1020+E+Mitchell+St,+Petoskey,+MI+49770/@45.3743481,-84.9539341,15z/data=!4m16!1m6!3m5!1s0x4d4a84812bcfa8f7:0xbcc867adb5c09ece!2sEmmanuel+Episcopal+Church!8m2!3d45.373274!4d-84.943822!4m8!1m0!1m5!1m1!1s0x4d4a84812bcfa8f7:0xbcc867adb5c09ece!2m2!1d-84.943822!2d45.373274!3e2">1020 E Mitchell St, Petoskey, MI 49770</a><br><small><a href="https://www.google.com/maps/dir//Emmanuel+Episcopal+Church,+1020+E+Mitchell+St,+Petoskey,+MI+49770/@45.3743481,-84.9539341,15z/data=!4m16!1m6!3m5!1s0x4d4a84812bcfa8f7:0xbcc867adb5c09ece!2sEmmanuel+Episcopal+Church!8m2!3d45.373274!4d-84.943822!4m8!1m0!1m5!1m1!1s0x4d4a84812bcfa8f7:0xbcc867adb5c09ece!2m2!1d-84.943822!2d45.373274!3e2">get directions</a></small></p>
				</div>
				<div class="spacer50"></div>
				
			</div>
			<div class="pure-u-sm-1-1 pure-u-md-1-2 tan rel">
				<div class="vrule block tan abs lrule"></div>
				<div class="spacer50"></div>
				<h2 class="ib rule2 tan rel nom under">Reception</h2>
				<div class="padme content">
					<p class="">5:00pm</p>
					<h3 class="nom padme">Stafford's Perry Hotel</h3>
					<p class="nom"><a target="_blank" class="revlink" href="https://www.google.com/maps/dir//Stafford's+Perry+Hotel,+Lewis+Street,+Petoskey,+MI/@45.3763458,-85.0938966,11z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x4d4a8489fbe3d62f:0xd9e1fc3e27432a03!2m2!1d-84.9541547!2d45.3761898!3e2">100 Lewis St, Petoskey, MI 49770</a><br><small><a href="https://www.google.com/maps/dir//Stafford's+Perry+Hotel,+Lewis+Street,+Petoskey,+MI/@45.3763458,-85.0938966,11z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x4d4a8489fbe3d62f:0xd9e1fc3e27432a03!2m2!1d-84.9541547!2d45.3761898!3e2">get directions</a></small></p>
				</div>
				<div class="spacer50"></div>
			</div>
		</div>	
	</div>
	<div class="spacer50"></div>

</div>



	<?php // the_title('<h1 class="centert">','</h1>'); ?>

	<?php the_content(); ?>




<?php get_footer(); ?>