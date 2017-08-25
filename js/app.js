$(document).ready(function(){

    // burger menu

    $('.hamburger').on('click', function(e) {
      e.preventDefault();
      $('.menu').toggleClass('slide-down');
    });

$('#menu1').click(function() {
$('html, body').animate({
    scrollTop: $("#favourite").offset().top
}, 700);
})

$('#menu2').click(function() {
$('html, body').animate({
    scrollTop: $("#maps").offset().top
}, 1000);
})

$('#menu3').click(function() {
$('html, body').animate({
    scrollTop: $("#contact").offset().top
}, 1000);
})


$('#more_info').click(function() {
$('html, body').animate({
    scrollTop: $("#history").offset().top
}, 800);
})

});
function initMap(){

    var styledMapType = new google.maps.StyledMapType(
        [
{
    "featureType": "landscape",
    "stylers": [
        {
            "hue": "#FFAD00"
        },
        {
            "saturation": 50.2
        },
        {
            "lightness": -34.8
        },
        {
            "gamma": 1
        }
    ]
},
{
    "featureType": "road.highway",
    "stylers": [
        {
            "hue": "#FFAD00"
        },
        {
            "saturation": -19.8
        },
        {
            "lightness": -1.8
        },
        {
            "gamma": 1
        }
    ]
},
{
    "featureType": "road.arterial",
    "stylers": [
        {
            "hue": "#FFAD00"
        },
        {
            "saturation": 72.4
        },
        {
            "lightness": -32.6
        },
        {
            "gamma": 1
        }
    ]
},
{
    "featureType": "road.local",
    "stylers": [
        {
            "hue": "#FFAD00"
        },
        {
            "saturation": 74.4
        },
        {
            "lightness": -18
        },
        {
            "gamma": 1
        }
    ]
},
{
    "featureType": "water",
    "stylers": [
        {
            "hue": "#00FFA6"
        },
        {
            "saturation": -63.2
        },
        {
            "lightness": 38
        },
        {
            "gamma": 1
        }
    ]
},
{
    "featureType": "poi",
    "stylers": [
        {
            "hue": "#FFC300"
        },
        {
            "saturation": 54.2
        },
        {
            "lightness": -14.4
        },
        {
            "gamma": 1
        }
    ]
}
],
        {name: 'Styled Map'});
  // Map options
  var options = {
    zoom:6,
    center:{lat: 56.7682, lng: -3.8434},
  }

  // New map
  var map = new google.maps.Map(document.getElementById('map'), options);


  var markers = [
    {
      coords:{lat:55.6355,lng:-6.1262},
      content:'<p>Lagavulin distillery<p>'
    },
    {
      coords:{lat:57.4749,lng:-3.2170},
      content:'<p>Aberlour distillery<p>'
    },
    {
      coords:{lat:57.4548,lng:-3.1287},
      content:'<p>Glenfiddich distillery</p>'
  },
  {
    coords:{lat:55.6421,lng:-6.1121},
    content:'<p>Ardbeg distillery</p>'
  }
  ];

  for(var i = 0;i < markers.length;i++){
    // Add marker
    addMarker(markers[i]);
  }

  function addMarker(props){
    var marker = new google.maps.Marker({
      position:props.coords,
      map:map,
    });


    if(props.content){
      var infoWindow = new google.maps.InfoWindow({
        content:props.content
      });

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
    }
  }
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');
}
