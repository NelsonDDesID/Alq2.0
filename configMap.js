//Config Map
var map,placesList;


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
				

//Icons GPS
var imageGPS		= 'sites/all/themes/alqueria/img/icon-gps.png';
var imageCost		= 'sites/all/themes/alqueria/img/icon-cost.png';
var imageDate		= 'sites/all/themes/alqueria/img/icon-date.png';
var imageTime		= 'sites/all/themes/alqueria/img/icon-time.png';
var imageHealth 	= 'sites/all/themes/alqueria/img/icon-gps-health.png';
var imageNutrition 	= 'sites/all/themes/alqueria/img/icon-gps-nutrition.png';
var imageLifeStyle 	= 'sites/all/themes/alqueria/img/icon-gps-lifestyle.png';

var points = [
				{id:'',category:'Health', icon:imageHealth, title:'Rompemontañas Monserrate',content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta diam interdum erat bibendum aliquet.Morbi eget augue dolor. Nulla id luctus ante, non aliquet lorem. Maecenas accumsan urna arcu, rutrum semper ex placerat et. Maecenas magna justo, blandit vitae congue in, eleifend a eros.',town:'Bogotá',address:'Avenida Circunvalar',cost:'10.000 - 30.000',date:'Mayo 09/2015',times:'9.00 am - 7.00 pm',latlog:new google.maps.LatLng(4.6854479,-74.0620073)},
				{id:'',category:'Nutrition', icon:imageNutrition, title:'Desafío de Guerreros',content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',town:'Bogotá',address:'Direccion',cost:'',date:'Mayo 23-24/2015',times:'',latlog:new google.maps.LatLng(4.6539342,-74.071162)},
				{id:'',category:'LifeStyle', icon:imageLifeStyle, title:'Aquatlón Distrital',content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',town:'Bogotá',address:'',cost:'',date:'Mayo 24/2015',times:'',latlog:new google.maps.LatLng(4.6560312,-74.0690356)}
			  ];
