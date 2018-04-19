//Genre Ajax Filtering
jQuery(function($)
{
	//Load posts on page load

	if($('.waypoint_form'))
		$('.waypoint_form').waypoint(function(direction) {

			gForm_initAll();
			this.destroy();
		}, {
			offset: '100%'
		});


	$('.newbiz').click(function(nb) {
		nb.preventDefault();



		$('.form_curtain').click();
		$('html,body').animate({
		    scrollTop: $('#gravity_contact').offset().top - 50
		}, 500);
	});


	$('.gravity_init').on('click', function() {
		gForm_initAll();
	});

	function gForm_initAll() {

		gravityformsJs.onload = function() {
			gravityBoy_init();
		}
		document.body.appendChild(jsonJs);
		document.body.appendChild(placeholdersJs);
		document.body.appendChild(maskedInputJs);
		document.body.appendChild(gravityformsJs);
	} 

	//Main ajax function
	function gravityBoy_init()
	{
		var ajax_url = ajax_gravityboy_params.ajax_url;
		var post_id = ajax_gravityboy_params.post_id;
		var form_id = $('#gravity_contact').data('form-id');

		$.ajax({
			type: 'GET',
			url: ajax_url,
			//dataType:"json",
			data: {
				action: 'gravityboy',
				post_id: post_id,
				form_id: form_id
			},
			beforeSend: function ()
			{

				$.scrollify.disable();
				console.log('form_id ' + form_id);
				$('.good_ans').html('Good answer. Just a sec...');
			},
			success: function(data)
			{

				$('#gravity_contact').html(data);
				//setTimeout(function() {

					if( form_id == 2 || form_id == 4 ) {
						$('.gravity_init').slideUp(200);

						$('html,body').animate({
						    scrollTop: $('.gravity_init').offset().top - 50
						}, 500);
					}

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

				$(document).on('gform_confirmation_loaded', function(event, formId) {
					$('.form_intro').slideUp(200);

					
				});


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