function getFormData() {
    var mapName = document.getElementById("MapName").value;
    var author = document.getElementById("MapAuthor").value;
    var place = document.getElementById("autocomplete").value;
    //tomar map para datos del mapa
    console.log(place);
    console.log(map);
    

}

$('#createModal').on('shown.bs.modal', function () {
        initMap();
    });

function initMap() {
        // Create a map object and specify the DOM element for display.
        map = new google.maps.Map(document.getElementById('mapModal'), {
          center: {lat: 0, lng: 0},
          zoom: 1
        });
          
        var input = /** @type {!HTMLInputElement} */(
            document.getElementById('autocomplete'));

        var types = document.getElementById('type-selector');

        var autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.bindTo('bounds', map);

        var infowindow = new google.maps.InfoWindow();
        var marker = new google.maps.Marker({
          map: map,
          anchorPoint: new google.maps.Point(0, -29)
        });

        autocomplete.addListener('place_changed', function() {
          infowindow.close();
          marker.setVisible(false);
          var place = autocomplete.getPlace();
          if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            return;
          }

          // If the place has a geometry, then present it on a map.
          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
          } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);  // Why 17? Because it looks good.
          }
        
        });

      }