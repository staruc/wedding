var qstring = '?v='+site.version, 

pluginsJs = document.createElement('script'), 
mainJs = document.createElement('script'), 
mapJs = document.createElement('script'),
gMapJs = document.createElement('script'),
isoJs = document.createElement('script'),
weatherJs = document.createElement('script'),
gravityBoyJs = document.createElement('script'),
fancyBoxJs = document.createElement('script'),


jsonJs = document.createElement('script'),
gravityformsJs = document.createElement('script'),
placeholdersJs = document.createElement('script');
maskedInputJs = document.createElement('script');


pluginsJs.type = 'text/javascript', mainJs.type = 'text/javascript', mapJs.type = 'text/javascript', isoJs.type = 'text/javascript', weatherJs.type = 'text/javascript';
pluginsJs.src = site.theme_path + '/js/plugins.js'+qstring,
mainJs.src = site.theme_path + '/js/main-dist.js'+qstring,
fancyBoxJs.src = site.theme_path + '/js/vendor/jquery.fancybox.min.js'+qstring,
isoJs.src = site.theme_path + '/js/vendor/isotope.pkgd.min.js'+qstring,
weatherJs.src = site.theme_path + '/js/weatherboy.js'+qstring,
gravityBoyJs.src = site.theme_path + '/js/gravityboy.js'+qstring,
mapJs.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyByeqFuKZa0UDnZOHtyl_J3uUFbmNJSY9Q&callback=initMap',
gMapJs.src = site.theme_path + '/js/gmap.js'+qstring,



jsonJs.src = site.plugins_path + '/gravityforms/js/jquery.json.min.js'+qstring,
gravityformsJs.src = site.plugins_path + '/gravityforms/js/gravityforms.min.js'+qstring,
placeholdersJs.src = site.plugins_path + '/gravityforms/js/placeholders.jquery.min.js'+qstring;
maskedInputJs.src = site.plugins_path + '/gravityforms/js/jquery.maskedinput.min.js'+qstring;

pluginsJs.setAttribute('async', ''), 
mainJs.setAttribute('async', ''), 
mapJs.setAttribute('async', ''), 
gMapJs.setAttribute('async', ''), 
isoJs.setAttribute('async', '');

var packCss = document.createElement('link'), fancyboxCss = document.createElement('link');
packCss.rel = 'stylesheet', fancyboxCss.rel = 'stylesheet';
packCss.href = site.theme_path + '/css/pack.css'+qstring;

var cB = 'cubic-bezier(0.645, 0.045, 0.355, 1)';

pluginsJs.onload = function() {

	if(document.querySelector('[data-fancybox]'))
		document.body.appendChild(fancyBoxJs);

	if(document.getElementById('gravity_contact')) {
		document.body.appendChild(gravityBoyJs);

	}

	mainCallBack();
};

gMapJs.onload = function() {
	
}

isoJs.onload = function() {
	document.body.appendChild(mainJs);
};


function mainCallBack() {
	if(document.getElementById('iso')) {
		document.body.appendChild(isoJs);
	} else {
		document.body.appendChild(mainJs);
	}

	if(document.getElementById('weatherBoy'))
		document.body.appendChild(weatherJs);
	

	if(document.getElementById('mapBoy')) {
		document.body.appendChild(weatherJs);
		document.body.appendChild(gMapJs);
	}

}



window.onload = function() {
	document.body.appendChild(pluginsJs);
	document.getElementsByTagName('head')[0].appendChild(packCss);


}