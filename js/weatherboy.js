//Genre Ajax Filtering
jQuery(function($)
{
	//Load posts on page load
	weatherBoy_go();

	//Main ajax function
	function weatherBoy_go()
	{
		var ajax_url = ajax_weatherboy_params.ajax_url;
		var post_id = ajax_weatherboy_params.post_id;

		$.ajax({
			type: 'GET',
			url: ajax_url,
			dataType:"json",
			data: {
				action: 'weatherboy',
				post_id: post_id
			},
			beforeSend: function ()
			{
				//Show loader here
				//$(".events-lotion").html('');

				
			},
			success: function(data)
			{

				var weatherCss = document.createElement("link");
				weatherCss.rel = "stylesheet";
				weatherCss.href = site.theme_path + "/css/pe-icon-set-weather.css"+qstring;
				document.getElementsByTagName("head")[0].appendChild(weatherCss);


				console.log(data);
				var $weather_desc = '',
				$weather_icon_class = '',
				city = new Array(),
				cities = data['list'];

				for (var i = 0; i < cities.length; i++) {

					if(cities[i]['name']);
						city['name'] = cities[i]['name'];

					if(cities[i]['main']['temp']);
						city['temp'] = Math.round(cities[i]['main']['temp']);

					if(cities[i]['weather'][0]['description']);
						city['desc'] = cities[i]['weather'][0]['description'];

					//console.log(city);

					$weather_desc = city['desc'];

					if($weather_desc == "clear sky") {
					    $weather_icon_class = 'pe-is-w-sun-1';
					} else if($weather_desc == "few clouds") {
					    $weather_icon_class = 'pe-is-w-sun-1';
					} else if($weather_desc == "scattered clouds" || $weather_desc == "broken clouds") {
					    $weather_icon_class = 'pe-is-w-partly-cloudy-1';
					} else if($weather_desc == "overcast clouds") {
					    $weather_icon_class = 'pe-is-w-mostly-cloudy-2';
					} else if( $weather_desc == "shower rain" || $weather_desc == "light rain" || $weather_desc == "moderate rain") {
					    $weather_icon_class = 'pe-is-w-rain-1';
					} else if($weather_desc == "rain") {
					    $weather_icon_class = 'pe-is-w-rain-day';
					} else if($weather_desc == "thunderstorm") {
					    $weather_icon_class = 'pe-is-w-thunderstorm';
					} else if($weather_desc == "snow") {
					    $weather_icon_class = 'pe-is-w-snowflake';
					} else if( $weather_desc == "mist" || $weather_desc == "haze" ) {
					    $weather_icon_class = 'pe-is-w-mist';
					}

					$('[data-city="'+city['name']+'"] .weather_temp').html(city['temp']+'&deg');
					$('[data-city="'+city['name']+'"] .weather_icon').addClass($weather_icon_class).attr('data-description',$weather_desc);

				};

			},
			complete: function(data)
			{


			},
			error: function()
			{
				$("#weatherBoy").html(' ');
				console.log('weather or not');
			}
		});				
	}
	
});