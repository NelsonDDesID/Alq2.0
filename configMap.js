

// Categorías: Salud, Vida Saludable, Alimentación
var health = 'Salud', life = 'Vida Saludable', food = 'Alimentación';
var icons = {};
icons[food] = 'sites/all/themes/alqueria/img/icon-gps-lifestyle.png';
icons[health] = 'sites/all/themes/alqueria/img/icon-gps-health.png';
icons[life] = 'sites/all/themes/alqueria/img/icon-gps-nutrition.png';

//Icons GPS
var imageGPS = 'sites/all/themes/alqueria/img/icon-gps.png';
var imageCost = 'sites/all/themes/alqueria/img/icon-cost.png';
var imageDate = 'sites/all/themes/alqueria/img/icon-date.png';
var imageTime = 'sites/all/themes/alqueria/img/icon-time.png';

//Style Map
var styleMap = [
	{
		"featureType": "water",
		"elementType": "all",
		"stylers": [
			{
				"color": "#8bc7eb"
			},
			{
				"hue": "#8bc7eb"
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "all",
		"stylers": [
			{
				"color": "#ffffff"
			},
			{
				"hue": "#ffffff"
			}
		]
	},
	{
		"featureType": "road.local",
		"elementType": "all",
		"stylers": [
			{
				"visibility": "simplified"
			},
			{
				"color": "#e5e5e5"
			}
		]
	},
	{
		"featureType": "landscape.man_made",
		"elementType": "all",
		"stylers": [
			{
				"visibility": "simplified"
			},
			{
				"color": "#f0f0f0"
			}
		]
	}
];

//Locations GPS
var centerLatLng	= new google.maps.LatLng(4.6493808,-74.0691929);

//Map Options
var mapOptions = {
	zoom: 14,
	center: centerLatLng,
	styles: styleMap
};


var places = [
	{
		category: health,
		title: 'Rompemontañas Prueba',
		subtitle: 'Rompemontañas Monserrate',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta diam interdum erat bibendum aliquet.Morbi eget augue dolor. Nulla id luctus ante, non aliquet lorem. Maecenas accumsan urna arcu, rutrum semper ex placerat et. Maecenas magna justo, blandit vitae congue in, eleifend a eros.',
		town: 'Bogotá',
		address: 'Avenida Circunvalar',
		cost: '10.000 - 30.000',
		date: 'Mayo 09/2015',
		times: '9.00 am - 7.00 pm',
		latlog: new google.maps.LatLng(4.6854479, -74.0620073)
	},
	{
		category: health,
		title: 'Rompemontañas Monserrate',
		subtitle: 'Rompemontañas Monserrate',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta diam interdum erat bibendum aliquet.Morbi eget augue dolor. Nulla id luctus ante, non aliquet lorem. Maecenas accumsan urna arcu, rutrum semper ex placerat et. Maecenas magna justo, blandit vitae congue in, eleifend a eros.',
		town: 'Bogotá',
		address: 'Avenida Circunvalar',
		cost: '10.000 - 30.000',
		date: 'Mayo 09/2015',
		times: '9.00 am - 7.00 pm',
		latlog: new google.maps.LatLng(4.6854479, -74.0620073)
	},
	{
		category: health,
		title: 'Rompemontañas Monserrate',
		subtitle: 'Rompemontañas Monserrate',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta diam interdum erat bibendum aliquet.Morbi eget augue dolor. Nulla id luctus ante, non aliquet lorem. Maecenas accumsan urna arcu, rutrum semper ex placerat et. Maecenas magna justo, blandit vitae congue in, eleifend a eros.',
		town: 'Bogotá',
		address: 'Avenida Circunvalar',
		cost: '10.000 - 30.000',
		date: 'Mayo 09/2015',
		times: '9.00 am - 7.00 pm',
		latlog: new google.maps.LatLng(4.6854479, -74.0620073)
	},
	{
		category: health,
		title: 'Rompemontañas Monserrate',
		subtitle: 'Rompemontañas Monserrate',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta diam interdum erat bibendum aliquet.Morbi eget augue dolor. Nulla id luctus ante, non aliquet lorem. Maecenas accumsan urna arcu, rutrum semper ex placerat et. Maecenas magna justo, blandit vitae congue in, eleifend a eros.',
		town: 'Bogotá',
		address: 'Avenida Circunvalar',
		cost: '10.000 - 30.000',
		date: 'Mayo 09/2015',
		times: '9.00 am - 7.00 pm',
		latlog: new google.maps.LatLng(4.6854479, -74.0620073)
	},
	{
		category: life,
		title: 'Desafío de Guerreros',
		subtitle: 'Desafío de Guerreros',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		town: 'Bogotá',
		address: 'Direccion',
		cost: '',
		date: 'Mayo 23-24/2015',
		times: '',
		latlog: new google.maps.LatLng(4.6539342, -74.071162)
	},
	{
		category: life,
		title: 'Desafío de Guerreros',
		subtitle: 'Desafío de Guerreros',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		town: 'Bogotá',
		address: 'Direccion',
		cost: '',
		date: 'Mayo 23-24/2015',
		times: '',
		latlog: new google.maps.LatLng(4.6539342, -74.071162)
	},
	{
		category: life,
		title: 'Desafío de Guerreros',
		subtitle: 'Desafío de Guerreros',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		town: 'Bogotá',
		address: 'Direccion',
		cost: '',
		date: 'Mayo 23-24/2015',
		times: '',
		latlog: new google.maps.LatLng(4.6539342, -74.071162)
	},
	{
		category: food,
		title: 'Aquatlón Distrital',
		subtitle: 'Aquatlón Distrital',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		town: 'Bogotá',
		address: '',
		cost: '',
		date: 'Mayo 24/2015',
		times: '',
		latlog: new google.maps.LatLng(4.6560312, -74.0690356)
	},
	{
		category: food,
		title: 'Aquatlón Distrital',
		subtitle: 'Aquatlón Distrital',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		town: 'Bogotá',
		address: '',
		cost: '',
		date: 'Mayo 24/2015',
		times: '',
		latlog: new google.maps.LatLng(4.6560312, -74.0690356)
	},
	{
		category: food,
		title: 'Aquatlón Distrital',
		subtitle: 'Aquatlón Distrital',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		town: 'Bogotá',
		address: '',
		cost: '',
		date: 'Mayo 24/2015',
		times: '',
		latlog: new google.maps.LatLng(4.6560312, -74.0690356)
	}
];

function initialize( ) {

	var $placesList = $('#places');
	var $resultsList = $('#results .list');
	var byLocation = {};
	var byCategory = {};

	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	var infowindow = new google.maps.InfoWindow();

	for( var index in places ) {
		var place = places[index];
		byLocation[place.town] = byLocation[place.town] || [];
		byLocation[place.town].push( place );
		byCategory[place.category] = byCategory[place.category] || [];
		byCategory[place.category].push( place );

		var marker = new google.maps.Marker({position: place.latlog,map: map,icon: icons[place.category],title: place.title});
		place.marker = marker;
		google.maps.event.addListener(marker, 'click', (function(marker,point) {
			return function() {
				var url = encodeURI( window.top && window.top.location && window.top.location.href ? window.top.location.href : document.location.href );
				infowindow.setContent('' +
					'<div class="content-marker">' +
						'<h3 class="content-title">' +
							'<img src="' + icons[point.category] + '" /> ' +
							point.title +
						'</h3>' +
						'<div class="content-body">' +
							'<div class="left">' +
								( !!point.subtitle ? '<h4 class="content-title">' + point.subtitle +'</h4>' : '' ) +
								'<p>' + point.content + '</p>' +
								'<div class="social-networks">' +
									'<a href="https://www.facebook.com/dialog/feed?app_id=406778042835232&amp;display=popup&amp;redirect_uri=' + url + '&amp;link=' + url + '&amp;name=' + point.title + '&amp;caption=' + point.content + '&amp;picture=sites/all/themes/alqueria/img/600x315.png" class="btn-facebook" data-postname="' + point.title + '"><img src="sites/all/themes/alqueria/img/share-tip-fb-b.png"></a>' +
									'<a href="http://m.facebook.com/dialog/feed?app_id=406778042835232&amp;display=touch&amp;redirect_uri=' + url + '&amp;link=' + url + '&amp;name=' + point.title + '&amp;caption=' + point.content + '&amp;picture=sites/all/themes/alqueria/img/600x315.png" class="btn-facebook mobile" data-postname="' + point.title + '"><img src="sites/all/themes/alqueria/img/share-tip-fb-b.png"></a>' +
									'<a href="https://twitter.com/intent/tweet?url=' + url + '&amp;text=' + point.title + '&amp;via=LecheAlqueria" class="btn-twitter both" data-postname="' + point.title + '"><img src="sites/all/themes/alqueria/img/share-tip-tw-b.png"></a>' +
									'<a href="https://plus.google.com/share?url=' + url + '" class="btn-gplus both" data-postname="' + point.title + '"><img src="sites/all/themes/alqueria/img/share-tip-gp-b.png"></a>' +
									'<a href="mailto:?subject=' + point.title + '&amp;body=' + url + '" class="btn-email both" data-postname="' + point.title + '"><img src="sites/all/themes/alqueria/img/share-tip-em-b.png"></a>' +
									'<a href="whatsapp://send?text=' + url + '" class="btn-whatsapp mobile" data-postname="' + point.title + '" data-action="share/whatsapp/share"><img src="sites/all/themes/alqueria/img/share-tip-wa-b.png"></a>' +
								'</div>' +
							'</div>' +
							'<div class="right">' +
								'<div class="location">' +
									'<b>' + point.town + '</b><br/>' + point.address +
								'</div>' +
								(
									point.cost
									?
										'<div class="cost">' + point.cost + '</div>'
									:
										''
								) +
								(
									point.date
									?
										'<div class="date">' + point.date + '</div>'
									:
										''
								) +
								(
									point.times
									?
										'<div class="times">' + point.times + '</div>'
									:
										''
								) +
							'</div>' +
							'<div class="clearfix"></div>' +
						'</div>' +
					'</div>');
				infowindow.open(map, marker);
			};
		})(marker, place));
	}

	for( var category in icons ) {
		$resultsList.append('<h3><img src="' + icons[category] + '" /> ' + category + '</h3>');

		for( var c = 0; c < byCategory[category].length; c ++ ) {
			var place = byCategory[category][c];
			var $holder = $placesList.find('.' + category.toLowerCase().replace(/([^a-z]+)/gi, ''));
			if( $holder.length < 1 ) {
				$holder = $('<div/>');
				$holder.addClass(category.toLowerCase().replace(/([^a-z]+)/gi, ''));
				$holder.append('<h3><img src="' + icons[category] + '" /> ' + category + '</h3>');
				$placesList.append($holder);
			}
			var $point = $('<div/>');
			$point.addClass('place');
			$point.html(place.title);
			$point.data('marker',place.marker);
			$point.click(function(){
				google.maps.event.trigger($(this).data('marker'), 'click');
			});

			$holder.append($point);
		}
	}
}

google.maps.event.addDomListener(window, 'load', initialize);
