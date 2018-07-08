//Genre Ajax Filtering
jQuery(function($)
{
	//Load posts on page load


	$('.rsvp_lookup_form').on('submit',function(r) {
		r.preventDefault();
		rsvpLookup_init();

	});

	function getFirstName() {
		var fname;
		fname = $('input[name="first_name"]').val();
		return fname;
	}
	function getLastName() {
		var lname;
		lname = $('input[name="last_name"]').val();
		return lname;
	}


	//Main ajax function
	function rsvpLookup_init()
	{
		var ajax_url = ajax_rsvplookup_params.ajax_url;
		var post_id = ajax_rsvplookup_params.post_id;

		$.ajax({
			type: 'GET',
			url: ajax_url,
			//dataType:"json",
			data: {
				action: 'rsvplookup',
				first_name: getFirstName(),
				last_name: getLastName()

			},
			beforeSend: function ()
			{
				console.log('name ' + getFirstName());

				$('.lookup_result').html('Looking up your info...');
			},
			success: function(data)
			{

				$('.lookup_result').html(data);
				


				$('html,body').animate({
				    scrollTop: $('.lookup_result').offset().top - 100
				}, 500);

			},
			complete: function(data)
			{
				if($('.form_intro .gravity_init').length) {
					console.log('g there');
					document.body.appendChild(gravityBoyJs);

				}
					
			},
			error: function()
			{
				
				console.log('that\'s not how this works. that\'s not how any of this works.');
			}
		});				
	}
	
});