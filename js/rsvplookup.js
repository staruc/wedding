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
				first_name: getFirstName()

			},
			beforeSend: function ()
			{

				console.log('name ' + getFirstName());
				$('.lookup_result').html('Looking up...');
			},
			success: function(data)
			{

			$('.lookup_result').html(data);


			},
			complete: function(data)
			{

			},
			error: function()
			{
				
				console.log('that\'s not how this works. that\'s not how any of this works.');
			}
		});				
	}
	
});