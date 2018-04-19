
var waypoint = new Waypoint({
  element: document.querySelector('.map_init'),
  handler: function(direction) {
    console.log('hit');

	document.body.appendChild(mapJs);

  },offset:'150%'
});

function initMap() {
	var mapDivs = document.querySelectorAll('.map_init');
	//console.log('map on');
	for (var i = mapDivs.length - 1; i >= 0; i--) {


		var mapCity = mapDivs[i].getAttribute('data-city');
		var mapLat = mapDivs[i].getAttribute('data-lat');
		var mapLong = mapDivs[i].getAttribute('data-long');
		//console.log('map '+mapCity);
		//google.maps.event.addDomListener(window, 'load', init);

		//CustomMarkerSetup();

		var myLatlng = new google.maps.LatLng(mapLat, mapLong);
	    var mapOptions = {
	        zoom: 13,
	        center: myLatlng,
	        //styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
	    };
	    var mapElement = mapDivs[i];
	    var map = new google.maps.Map(mapElement, mapOptions);
	    // Let's also add a marker while we're at it
	    var marker = new google.maps.Marker({
	        position: myLatlng,
	        map: map,
	        title: 'UpShift Creative ' + mapCity
	    });
	    /*
		var overlay = new CustomMarker(
			myLatlng, 
			map,
			{
				'innerHTML': '<img class="" src="" />'
			}
		);
		*/
	}
	/*
	function CustomMarker(latlng, map, args) {
		this.latlng = latlng;	
		this.args = args;	
		this.setMap(map);	
	}
	function CustomMarkerSetup() {

		CustomMarker.prototype = new google.maps.OverlayView();
		CustomMarker.prototype.draw = function() {
			
			var self = this;
			
			var div = this.div;
			
			if (!div) {
			
				div = this.div = document.createElement('div');
				
				div.className = 'marker';
				
				div.style.position = 'absolute';
				div.style.cursor = 'pointer';
				div.style.width = '42px';
				div.style.height = '42px';
				//div.style.background = 'blue';
				
				if (typeof(self.args.marker_id) !== 'undefined') {
					div.dataset.marker_id = self.args.marker_id;
				}
				if (typeof(self.args.innerHTML) !== 'undefined') {div.innerHTML = self.args.innerHTML;}
				
				google.maps.event.addDomListener(div, "click", function(event) {			
					google.maps.event.trigger(self, "click");
				});
				
				var panes = this.getPanes();
				panes.overlayImage.appendChild(div);
			}
			
			var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
			
			if (point) {
				      var w = div.style.width;
				      w = w.replace( 'px', '');
				      var h = div.style.height;
				      h = h.replace( 'px', '');
				      div.style.left = (point.x - (w/2)) + 'px';
				      div.style.top = (point.y - h) + 'px';
			}
		};   	
	}
	*/
};