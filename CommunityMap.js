mapboxgl.accessToken = 'pk.eyJ1IjoieW9taWN0aW4iLCJhIjoiY2p5a3J5bnZqMDB1cDNscXVheDZraXowbSJ9.aCxJ4gTBxMt439R7MMI2-w';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/yomictin/ck6rbie5l08kr1inwpmlkgfnt',
  zoom: 14,
  pitch: 45,
  bearing: -17.6,
  center: [-122.41, 37.777],
  antialias: true
});

var nav = new mapboxgl.NavigationControl();
map.addControl(nav);

nav._container.parentNode.className="mapboxgl-ctrl-top-right";

map.on('load', function() {
  map.addSource('Unsafe_for_Pedestrians', {
    type: 'vector',
    url: 'mapbox://yomictin.ck6rm5fui04iw2lqrsglx795u-4qkzo',
  });
  map.addLayer({
    'id': 'Unsafe for Pedestrians',
    'type': 'circle',
    'source': 'Unsafe_for_Pedestrians',
    'layout': {
      'visibility': 'visible'
    },
    'source-layer': 'Unsafe_for_Pedestrians',
    'paint': {
      'circle-color': 'rgba(255, 0, 58, 1)'
    }
  });
  map.addSource('Opportunities for Public Realm Improvements', {
    'type': 'geojson',
    'data': {
      'type': 'FeatureCollection',
      'features': [{
          'type': 'Feature',
          'properties': {
            'description': '<strong>Mint Mall, Pilipino Senior Resource Center, JT Restaurant</strong>',
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.40751700368246,
              37.78128033307958
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': '<strong>2nd and Howard</strong>',
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.39825994559139,
              37.786768070956526
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': '<strong>Yerba Buena Public Square</strong>',

          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.40108967948346,
              37.78356587372994
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': "<strong>St. Patrick's Church </strong>",
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.40352060072114,
              37.78538496231377
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': "<strong>Yerba Buena Gardens</strong><p>Ideas: Monument/plaque to Philippine history, explanation of the Philippines' 'Pearl of the Orient' nickname </p>",

          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.40285220771952,
              37.785193323871425
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': '<strong>Moscone Center West along 4th</strong><p>Ideas: Plaque on the history of the displacement of Filipinos</p>',

          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.40332005231494,
              37.78363418063884
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': '<strong>4th and Howard</strong><p>Ideas: Sampaguita arch/art</p>',

          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.40275825407406,
              37.7832735073421
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': "<strong>4th and Folsom</strong>",
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.40117836439357,
              37.78203556628709
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': "<strong>Mabini and Folsom</strong><p>Ideas: Plaque indicating entrance to Heroes' Square, potential location for welcome arch, Filipino artwork</p>",
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.40039124223523,
              37.78265144762101
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': "<strong>Lipi ni Lapu Lapu Mural</strong><p>Ideas: Plaque explaining Lapu Lapu's importance, imagery of Lapu Lapu defeating Magellan </p>",
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.3992500858796,
              37.78241654783274
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': '<strong>Moscone Center West along Howard</strong>',
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.40416046681847,
              37.78211123424761
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': "<strong>Gallagher and Clementina</strong><p>Ideas: Plaque commemorating St. Patrick's Day Care Center</p>",
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.4028747895947,
              37.78154747873775
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': "<strong>5th and Folsom</strong><p>Ideas: Artwork on walls, especially those facing Folsom</p>",
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.40339955307826,
              37.78031765456616
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': "<strong>Mary and Howard</strong><p>Ideas: Artwork on blank walls and shutter doors</p>",
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.40575739944404,
              37.78091051125486
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': "<strong>Clementina-Folsom Alley</strong><p>Ideas: Moss walls and murals</p>",
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.40479672518381,
              37.77997037068502
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': "<strong>301 6th St. Public Parking</strong>",
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.4054129520492,
              37.778483638554306
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': "<strong>350 6th St.</strong><p>",
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.40482760650002,
              37.77783405075962
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': "<strong>Bindlestiff Studio</strong><p>Ideas: Plaque commemorating Juvy Barbonio</p>",
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.40723948956875,
              37.77997166698573
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': "<strong>Bill Sorro Community</strong><p>Ideas: Plaque commemorating Bill Sorro and former location of Hugo Hotel</p>",
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.40715268466366,
              37.77961695875969
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': "<strong>Bill Sorro Community</strong><p>Ideas: Plaque commemorating Bill Sorro and former location of Hugo Hotel</p>",
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.40715268466366,
              37.77961695875969
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': "<strong>Former de Vera Store, Russ between Natoma and Howard</strong>",
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.40883115021583,
              37.77930875083764
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': "<strong>Russ and Howard</strong><p>Ideas: Planters, CCTV-equipped lamppost</p>",
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.40827640896197,
              37.778854589790654
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': "<strong>Russ and Folsom</strong><p>Ideas: Potential location for welcome arch</p>",
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.40675760138666,
              37.777641421935385
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': "<strong>Gene Friend Rec Center</strong>",
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.40613820822097,
              37.778481833807334
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': "<strong>Sherman and Folsom</strong>",
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.40697626709712,
              37.77735942031207
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': "<strong>Bessie Carmichael School Area along Sherman</strong><p>Ideas: Improve connectivity between park and school</p>",
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.40646135999168,
              37.77694601966242
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': "<strong>Victoria Manalo Draves Park</strong>",
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.40643546957857,
              37.777590484569615
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': "<strong>Bessie Carmichael School Area along 7th</strong><p>Ideas: Artwork of kids, commemorative plaque for the history of Bessie Carmichael, public art representing the Pearl of the Orient</p>",
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.40666625972335,
              37.77585649155965
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': "<strong>7th and Folsom</strong><p>Ideas: Plaque commemorating Gabriela Silang</p>",
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.4078639811958,
              37.77675796880132
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': "<strong>7th and Howard, SE Corner</strong>",
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.40920122541968,
              37.77794553399768
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': "<strong>Langton and Howard</strong>",
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.41000125789157,
              37.77758964071231
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': "<strong>Mid-Langton St./Langton Community Garden</strong>",
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.40946203199448,
              37.77714853816666
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': "<strong>8th and Howard, formerly First Legal</strong><p>Ideas: Plaque commemorating site of Gusaling Pilipino</p>",
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.41167502435411,
              37.77619909818583
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': "<strong>9th and Howard, NE Corner</strong>",
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.41301041941686,
              37.77520857560182
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': "<strong>Howard between 9th and Washburn</strong><p>Ideas: Increased tree cover</p>",
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.41347416253049,
              37.77483839935191
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': "<strong>10th and Howard</strong><p>Ideas: Sto. Nino shrine, increased tree cover and resting places across from St. Joseph's Church to emphasize the corridor's social functions</p>",
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.414355630334,
              37.77394641500793
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': "<strong>11th, Howard, and Kissling</strong><p>Ideas: Increased tree cover and other vegetation</p>",
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.41533455830887,
              37.772921744640996
            ]
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'description': "<strong>12th and Howard</strong><p>Ideas: Art welcoming people into SOMA</p>",
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.41692971801379,
              37.77173672858207
            ]
          }
        },
      ]
    }
  });

  map.addLayer({
    'id': 'Opportunities for Public Realm Improvements',
    'type': 'circle',
    'source': 'Opportunities for Public Realm Improvements',
    'layout': {
      'visibility': 'visible'
    },
    'paint': {
      'circle-radius': 9,
      'circle-color': 'rgb(209, 28, 230)'
    }
  });

  map.addSource('Happy_Places', {
    type: 'vector',
    url: 'mapbox://yomictin.ck6mnoidk0gaq2ro2yjzbqh2h-3dwwq',
  });

  map.addLayer({
    'id': 'Happy Places',
    'type': 'heatmap',
    'source': 'Happy_Places',
    'maxzoom': 22,
    'layout': {
      'visibility': 'visible'
    },
    'source-layer': 'Happy_Places',
    'paint': {
      'heatmap-opacity': 0.5,
    }
  });
  map.addSource('Cultural_Places', {
    type: 'vector',
    url: 'mapbox://yomictin.ck6rknz5y0sds2xs1emxicdya-85pbc',
  });

  map.addLayer({
    'id': 'Cultural Places',
    'type': 'heatmap',
    'source': 'Cultural_Places',
    'maxzoom': 22,
    'layout': {
      'visibility': 'visible'
    },
    'source-layer': 'Cultural_Places',
    'paint': {
      'heatmap-opacity': 0.6,
      'heatmap-color': [
        'interpolate',
        ['linear'],
        ['heatmap-density'],
        0,
        'hsla(33,102,171,0)',
        0.1,
        'rgb(104,169,207)',
        0.3,
        'rgb(209,229,240)',
        0.5,
        'rgb(253,220,119)',
        0.7,
        'rgb(239,137,97)',
        1,
        'rgb(180,24,43)'
      ]
    }
  });
   var popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false
        });

        map.on('mouseenter', 'Opportunities for Public Realm Improvements', function(e) {
            // Change the cursor style as a UI indicator.
            map.getCanvas().style.cursor = 'pointer';

            var coordinates = e.features[0].geometry.coordinates.slice();
            var description = e.features[0].properties.description;

          
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

           
            popup
                .setLngLat(coordinates)
                .setHTML(description)
                .addTo(map);
        });

        map.on('mouseleave', 'Opportunities for Public Realm Improvements', function() {
            map.getCanvas().style.cursor = '';
            popup.remove();
        });
});

var toggleableLayerIds = ['Unsafe for Pedestrians', 'Happy Places', 'Cultural Places', 'Opportunities for Public Realm Improvements'];

for (var i = 0; i < toggleableLayerIds.length; i++) {
  var id = toggleableLayerIds[i];

  var link = document.createElement('a');
  link.href = '#';
  link.className = 'active';
  link.textContent = id;

  link.onclick = function(e) {
    var clickedLayer = this.textContent;
    e.preventDefault();
    e.stopPropagation();

    var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

    if (visibility === 'visible') {
      map.setLayoutProperty(clickedLayer, 'visibility', 'none');
      this.className = '';
    } else {
      this.className = 'active';
      map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
    }
  };

  var layers = document.getElementById('menu');
  layers.appendChild(link);
}