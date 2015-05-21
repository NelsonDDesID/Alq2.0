

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

// Lugares
var places = [
	{
		category: health,
		title: '10K Bodytech',
		subtitle: '10K Bodytech',
		content: 'Una carrera que unirá a todos los corredores de Colombia por una buena causa. ',
		town: 'Medellín',
		address: '#####',
		cost: '####',
		date: 'Agosto 12 de 2015',
		times: '#####',
		latlog: new google.maps.LatLng(4.6854479, -74.0620073)
	},
	{
		category: health,
		title: 'Carrera Atlética de la Mujer',
		subtitle: 'Carrera Atlética de la Mujer',
		content: 'Esta es la oportunidad esperada por todas las mujeres deportistas para reunirse y demostrar toda su fortaleza, decisión y disciplina.  Más información <a href="http://www.carreradelamujercolombia.com/MED/" title="Carrera Atlética de la Mujer">clic aquí</a>',
		town: 'Medellín',
		address: '#####',
		cost: 'En segunda etapa $ 46.000 individual / $ 92.000 para parejas / $ 42.000 para mamás y bebés',
		date: 'Julio 12 de 2015',
		times: '#####',
		latlog: new google.maps.LatLng(4.6854479, -74.0620073)
	},
	{
		category: health,
		title: 'Nike 10K She Runs',
		subtitle: 'Nike 10K She Runs',
		content: 'Una carrera especial para que todas las mujeres paisas se unan entorno al deporte y a todas las cosas positivas que este le aporta a sus vidas. Más información <a href="http://www.antena2.com.co/noticias/nike-presenta-por-primera-vez-la-carrera-she-81837" title="Nike 10K She Runs">clic aquí</a>',
		town: 'Medellín',
		address: '#####',
		cost: '35.000',
		date: 'Junio 7 de 2015',
		times: '#####',
		latlog: new google.maps.LatLng(4.6854479, -74.0620073)
	},
	{
		category: health,
		title: '10k de la luz',
		subtitle: '10k de la luz',
		content: 'Una carrera para que todos los caleños disfruten de su ciudad mientras se ejercitan y se ponen a prueba. Más información <a href="http://www.juanchocorrelon.com/10k-de-la-luz" title="10k de la luz">clic aquí</a>',
		town: 'Cali',
		address: '#####',
		cost: '#####',
		date: 'Octubre 18 de 2015',
		times: '#####',
		latlog: new google.maps.LatLng(4.6854479, -74.0620073)
	},
	{
		category: health,
		title: 'Epic Farallones',
		subtitle: 'Epic Farallones',
		content: 'Es una emocionante carrera en la que los deportistas podrán medir sus capacidades mientras aprecian el hermoso paisaje natural de los Farallones. Más información <a href="http://www.juanchocorrelon.com/trail/index.php/epic-farallones" title="Epic Farallones">clic aquí</a>',
		town: 'Cali',
		address: '#####',
		cost: '80.000',
		date: 'Septiembre 13 de 2015',
		times: '#####',
		latlog: new google.maps.LatLng(4.6854479, -74.0620073)
	},
	{
		category: health,
		title: 'Maratón Latina',
		subtitle: 'Maratón Latina',
		content: 'Una maratón especial para que los amantes del deporte puedan practicarlo y disfrutar los hermosos paisajes que rodean el lago Calima. Más información <a href="http://desafiodeguerreros.com/desafio-urbano/" title="Maratón Latina">clic aquí</a>',
		town: 'Cali',
		address: '#####',
		cost: '70.000',
		date: 'Agosto 2 de 2015',
		times: '7:00 a.m.',
		latlog: new google.maps.LatLng(4.6854479, -74.0620073)
	},
	{
		category: health,
		title: 'Desafío de Guerreros urbano',
		subtitle: 'Desafío de Guerreros urbano',
		content: 'Una emocionante carrera de obstáculos en la que los participantes podrán poner a prueba toda su resistencia y ejercitarse de una manera divertida y dinámica. Más información <a href="http://desafiodeguerreros.com/desafio-urbano/" title="Desafío de Guerreros urbano">clic aquí</a>',
		town: 'Cali',
		address: '#####',
		cost: '70.000 (el valor sube según la etapa)',
		date: 'Julio 12 de 2015',
		times: '9:00 a.m.',
		latlog: new google.maps.LatLng(4.6854479, -74.0620073)
	},
	{
		category: health,
		title: 'Media Maratón de Cali',
		subtitle: 'Media Maratón de Cali',
		content: 'Un evento que reunirá a corredores expertos y novatos alrededor de un solo sentimiento: el amor por el deporte y la ciudad. Más información <a href="http://www.juanchocorrelon.com/inscripciones-media-maraton-cali" title="Media Maratón de Cali">clic aquí</a>',
		town: 'Cali',
		address: '#####',
		cost: '50.000',
		date: 'Junio 7 de 2015',
		times: '7:30 a.m.',
		latlog: new google.maps.LatLng(4.6854479, -74.0620073)
	},
	{
		category: health,
		title: 'Pacific Trail',
		subtitle: 'Pacific Trail',
		content: 'Una carrera especial para que todos los caleños amantes del atletismo salgan a las calles de su ciudad a medir sus capacidades. Más información <a href="http://www.pacificrace.co/" title="Pacific Trail">clic aquí</a>',
		town: 'Cali',
		address: '#####',
		cost: '####',
		date: 'Mayo 17 de 2015',
		times: '####',
		latlog: new google.maps.LatLng(4.6854479, -74.0620073)
	},
	{
		category: health,
		title: 'Carrera Atlética de la mujer',
		subtitle: 'Carrera Atlética de la mujer',
		content: 'Esta es la oportunidad esperada por todas las mujeres deportistas para reunirse y demostrar toda su fortaleza, decisión y disciplina. Más información <a href="http://www.carreradelamujercolombia.com/CAL/" title="Carrera Atlética de la mujer">clic aquí</a>',
		town: 'Cali',
		address: '#####',
		cost: 'En quinta etapa $ 70.000 individual / $140.000 para parejas / $55.000 para mamás y bebés',
		date: 'Mayo 10 de 2015',
		times: '####',
		latlog: new google.maps.LatLng(4.6854479, -74.0620073)
	},
	{
		category: health,
		title: 'Carrera Ascenso Torre Colpatria',
		subtitle: 'Carrera Ascenso Torre Colpatria',
		content: 'Ha sido catalogada como una de las mejores carreras de ascenso vertical del mundo, ideal para los deportistas más extremos. Más información <a href="http://www.correcaminoscolombia.com/Colpatria.shtml" title="Carrera Ascenso Torre Colpatria">clic aquí</a>',
		town: 'Bogotá',
		address: '#####',
		cost: '####',
		date: 'Diciembre 8 de 2015',
		times: '7:00 a.m.',
		latlog: new google.maps.LatLng(4.6854479, -74.0620073)
	},
	{
		category: health,
		title: 'Excellent Series 15K',
		subtitle: 'Excellent Series 15K',
		content: 'Una carrera especial para los que aman correr sin ponerse límites. Más información <a href="http://www.newbalance.com.co/fit/excellent-series-15k-bogota" title="Excellent Series 15K">clic aquí</a>',
		town: 'Bogotá',
		address: '#####',
		cost: '####',
		date: 'Noviembre 29 de 2015',
		times: '#####',
		latlog: new google.maps.LatLng(4.6854479, -74.0620073)
	},
	{
		category: health,
		title: 'Carrera Cartoon Network',
		subtitle: 'Carrera Cartoon Network',
		content: 'Una carrera muy especial en la que todos los padres de familia podrán disfrutar del deporte junto a sus hijos pequeños y enseñarles valores como la tenacidad y el esfuerzo.',
		town: 'Bogotá',
		address: '#####',
		cost: '######',
		date: 'Noviembre 22 de 2015',
		times: '#####',
		latlog: new google.maps.LatLng(4.6854479, -74.0620073)
	},
	{
		category: health,
		title: 'Carrera Atlética de la Mujer',
		subtitle: 'Carrera Atlética de la Mujer',
		content: 'Esta es la oportunidad esperada por todas las mujeres deportistas para reunirse y demostrar toda su fortaleza, decisión y disciplina. Más información <a href="http://www.carreradelamujercolombia.com/BOG/" title="Carrera Atlética de la Mujer">clic aquí</a>',
		town: 'Bogotá',
		address: '#####',
		cost: 'En segunda etapa $ 75.000 individual / $150.000 para parejas / $55.000 para mamás y bebés',
		date: 'Septiembre 20 de 2015',
		times: '#####',
		latlog: new google.maps.LatLng(4.6854479, -74.0620073)
	},
	{
		category: health,
		title: 'Carrera Atlética Fundación Club El Nogal',
		subtitle: 'Carrera Atlética Fundación Club El Nogal',
		content: 'En esta carrera los deportistas no solo podrán ejercitarse, sino también hacerle honor a las víctimas del atentado terrorista al club, por medio del deporte y la vida sana. Más información <a href="http://www.10kmas1fundacionelnogal.com/" title="Carrera Atlética Fundación Club El Nogal">clic aquí</a>',
		town: 'Bogotá',
		address: '#####',
		cost: '#####',
		date: 'Septiembre 6 de 2015',
		times: '07:00 a.m.',
		latlog: new google.maps.LatLng(4.6854479, -74.0620073)
	},
	{
		category: health,
		title: '12K Bodytech',
		subtitle: '12K Bodytech',
		content: 'Una carrera que unirá a todos los corredores de Colombia por una buena causa. Más información <a href="http://www.bodytech.com.co/colombia/noticias/10-bogota-suma-12-kilometros-a-los-100k-de-bodytech" title="12K Bodytech">clic aquí</a>',
		town: 'Bogotá',
		address: '#####',
		cost: '50.000 para afiliados al Bodytech y $ 55.000 para no afiliados',
		date: 'Agosto 23 de 2015',
		times: '07:00 a.m.',
		latlog: new google.maps.LatLng(4.6854479, -74.0620073)
	},
	{
		category: health,
		title: 'Media Maratón de Bogotá',
		subtitle: 'Media Maratón de Bogotá',
		content: 'Un evento que reunirá a corredores expertos y novatos alrededor de un solo sentimiento: el amor por el deporte y la ciudad. Más información <a href="http://www.mediamaratonbogota.com/2015/" title="Media Maratón de Bogotá">clic aquí</a>',
		town: 'Bogotá',
		address: '#####',
		cost: '85.000 individual',
		date: 'Julio 26 de 2015',
		times: '09:00 a.m.',
		latlog: new google.maps.LatLng(4.6854479, -74.0620073)
	},
	{
		category: health,
		title: 'Carrera atlética Allianz 15K',
		subtitle: 'Carrera atlética Allianz 15K',
		content: 'Una oportunidad perfecta para que los amantes de las carreras salgan a las calles de Bogotá a disfrutar este evento y a ejercitarse. Más información <a href="https://www.allianz.co/15k?gclid=CMfA56jnvMUCFRAwaQodDkQAUQ" title="Carrera atlética Allianz 15K">clic aquí</a>',
		town: 'Bogotá',
		address: '#####',
		cost: '40.000',
		date: 'Mayo 31 de 2015',
		times: '06:30 a.m.',
		latlog: new google.maps.LatLng(4.6854479, -74.0620073)
	},
	{
		category: health,
		title: 'Acuatlón Distrital',
		subtitle: 'Acuatlón Distrital',
		content: 'Los mejores atletas del distrito podrán concursar en pruebas acuáticas para medir su resistencia y batir sus récords personales. Más información <a href="http://tribogota.com.co/index.php/eventos-y-resultados/icalrepeat.detail/2015/05/24/88/11/acuatlon-istrital" title="Acuatlón Distrital">clic aquí</a>',
		town: 'Bogotá',
		address: '#####',
		cost: 'Gratuito',
		date: 'Mayo 24 de 2015',
		times: '07:00 a.m.',
		latlog: new google.maps.LatLng(4.6854479, -74.0620073)
	},
	{
		category: health,
		title: 'Desafío de Guerreros',
		subtitle: 'Desafío de Guerreros',
		content: 'Una emocionante carrera de obstáculos en la que los participantes podrán poner a prueba toda su resistencia y ejercitarse de una manera divertida y dinámica. Más información <a href="http://desafiodeguerreros.com/" title="Desafío de Guerreros">clic aquí</a>',
		town: 'Bogotá',
		address: '#####',
		cost: '105.000',
		date: 'Mayo 23 y 24 de 2015',
		times: 'Salidas de 9:00 a.m a 2:00 p.m. cada media hora',
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
				hideEvents();
			});

			$holder.append($point);
		}
	}
	hideEvents( );

	$('#results .title:first').click(function(){
		toggleEvents();
	});
}

var hiddenEvents = false;

function toggleEvents( ) {
	if( hiddenEvents )
		showEvents();
	else
		hideEvents();
}

function showEvents( ) {
	hiddenEvents = false;
	var $results = $('#results');
	var $left = $results.children('.left');
	var $places = $('#places');

	$left.stop().slideDown();
	$places.stop().slideDown();
}

function hideEvents( ) {
	hiddenEvents = true;
	var $results = $('#results');
	var $left = $results.children('.left');
	var $places = $('#places');

	$left.stop().slideUp();
	$places.stop().slideUp();
}


google.maps.event.addDomListener(window, 'load', initialize);
