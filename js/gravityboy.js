//Genre Ajax Filtering
jQuery(function($)
{
	//Load posts on page load
/*
	if($('.waypoint_form'))
		$('.waypoint_form').waypoint(function(direction) {

			gForm_initAll();
			this.destroy();
		}, {
			offset: '100%'
		});
*/

	$('.newbiz').click(function(nb) {
		nb.preventDefault();



		$('.form_curtain').click();

	});

	gForm_initAll();
	$('.gravity_init').on('click', function() {
		console.log('init_click');
		gForm_initAll();
	});

	function gForm_initAll() {

		gravityformsJs.onload = function() {

			document.body.appendChild(maskedInputJs);
			gravityBoy_init();
		}
		
		document.body.appendChild(jsonJs);
		document.body.appendChild(placeholdersJs);
		document.body.appendChild(gravityformsJs);

		
	} 

	//Main ajax function
	function gravityBoy_init()
	{
		var ajax_url = ajax_gravityboy_params.ajax_url;
		var post_id = ajax_gravityboy_params.post_id;
		var form_id = $('#gravity_contact').data('form-id');
		var invite_id = $('input[name="invite_id"]').val();
		var guest_first = $('input[name="guest_first"]').val();
		var guest_last = $('input[name="guest_last"]').val();

		$.ajax({
			type: 'GET',
			url: ajax_url,
			//dataType:"json",
			data: {
				action: 'gravityboy',
				post_id: post_id,
				form_id: form_id,
				invite_id: invite_id,
				guest_first: guest_first,
				guest_last: guest_last
			},
			beforeSend: function ()
			{
				$('.form_intro').slideUp(200);	

				console.log('form_id: ' + form_id);
				console.log('guest: ' + guest_first);
				//$('.good_ans').html('Good answer. Just a sec...');
			},
			success: function(data)
			{
				console.log('working');

				$('#gravity_contact').html(data);


				//setTimeout(function() {

				$('html,body').animate({
				    scrollTop: $('#gravity_contact').offset().top - 100
				}, 350);

				//}, 300);
				$('input[type="file"]').on('change', function() {
					var fileInput = $(this);
					var fileVal = fileInput.val();
					console.log(fileVal);
					if(fileVal) {
						fileInput.closest('.gfield').addClass('not_empty');
						console.log('not empty ' +fileVal);
					} else {
						fileInput.closest('.gfield').removeClass('not_empty');
						console.log('its empty ' +fileVal);
					}
				});

				//$(document).on('gform_confirmation_loaded', function(event, formId) {
					
				//});


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