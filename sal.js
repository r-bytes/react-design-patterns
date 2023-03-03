
// <script>

//   </script>

//   <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAebdB9Pjo4IUe7OMFaK7xhF_tD13GklUA&libraries=places&callback=initAutocomplete" async defer></script>











//   <script>
      // This example displays an address form, using the autocomplete feature
      // of the Google Places API to help users fill in the information.

      // This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

      var placeSearch, autocomplete;
      var componentForm = {
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'short_name',
        country: 'long_name',
        postal_code: 'short_name'
      };

      function initAutocomplete() {
        // Create the autocomplete object, restricting the search to geographical
        // location types.
        autocomplete = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */(document.getElementById('field_autocomplete')),
            {types: ['geocode']});

        // When the user selects an address from the dropdown, populate the address
        // fields in the form.
        autocomplete.addListener('place_changed', fillInAddress);
      }

      function fillInAddress() {
        // Get the place details from the autocomplete object.
        var place = autocomplete.getPlace();

        // Get each component of the address from the place details
        // and fill the corresponding field on the form.
        for (var i = 0; i < place.address_components.length; i++) {
            // TODO: This
            console.log("place.address_components", place.address_components[i].types[0])
          var addressType = place.address_components[i].types[0];
          if (componentForm[addressType]) {
            var val = place.address_components[i][componentForm[addressType]];
            document.getElementById('field_' + addressType).value = val;
          }
        }
      }

      // Bias the autocomplete object to the user's geographical location,
      // as supplied by the browser's 'navigator.geolocation' object.
      function geolocate() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var geolocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            var circle = new google.maps.Circle({
              center: geolocation,
              radius: position.coords.accuracy
            });
            autocomplete.setBounds(circle.getBounds());
          });
        }
      }
    }
    
    /**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * SPDX-License-Identifier: Apache-2.0
     */
    function initMap() {
        const bounds = new google.maps.LatLngBounds();
        const markersArray = [];
        const map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: 55.53, lng: 9.4 },
          zoom: 10,
        });
        // initialize services
        const geocoder = new google.maps.Geocoder();
        const service = new google.maps.DistanceMatrixService();
        // build request
        const origin1 = { lat: 55.93, lng: -3.118 };
        const origin2 = "Greenwich, England";
        const destinationA = "Stockholm, Sweden";
        const destinationB = { lat: 50.087, lng: 14.421 };
        const request = {
          origins: [origin1, origin2],
          destinations: [destinationA, destinationB],
          travelMode: google.maps.TravelMode.DRIVING,
          unitSystem: google.maps.UnitSystem.METRIC,
          avoidHighways: false,
          avoidTolls: false,
        };
      
        // put request on page
        document.getElementById("request").innerText = JSON.stringify(
          request,
          null,
          2
        );
        // get distance matrix response
        service.getDistanceMatrix(request).then((response) => {
          // put response
          document.getElementById("response").innerText = JSON.stringify(
            response,
            null,
            2
          );
      
          // show on map
          const originList = response.originAddresses;
          const destinationList = response.destinationAddresses;
      
          deleteMarkers(markersArray);
      
          const showGeocodedAddressOnMap = (asDestination) => {
            const handler = ({ results }) => {
              map.fitBounds(bounds.extend(results[0].geometry.location));
              markersArray.push(
                new google.maps.Marker({
                  map,
                  position: results[0].geometry.location,
                  label: asDestination ? "D" : "O",
                })
              );
            };
            return handler;
          };
      
          for (let i = 0; i < originList.length; i++) {
            const results = response.rows[i].elements;
      
            geocoder
              .geocode({ address: originList[i] })
              .then(showGeocodedAddressOnMap(false));
      
            for (let j = 0; j < results.length; j++) {
              geocoder
                .geocode({ address: destinationList[j] })
                .then(showGeocodedAddressOnMap(true));
            }
          }
        });
    
  function deleteMarkers(markersArray) {
    for (let i = 0; i < markersArray.length; i++) {
      markersArray[i].setMap(null);
    }
  
    markersArray = [];
  }
  
  window.initMap = initMap;

    // </script>



    




    // <script>
    
    
//     $(function() {
//         // add input listeners
//         google.maps.event.addDomListener(window, 'load', function () {
//             var from_places = new google.maps.places.Autocomplete(document.getElementById('from_places'));
//             var to_places = new google.maps.places.Autocomplete(document.getElementById('to_places'));

//             google.maps.event.addListener(from_places, 'place_changed', function () {
//                 var from_place = from_places.getPlace();
//                 var from_address = from_place.formatted_address;
//                 $('#origin').val(from_address);
//             });

//             google.maps.event.addListener(to_places, 'place_changed', function () {
//                 var to_place = to_places.getPlace();
//                 var to_address = to_place.formatted_address;
//                 $('#destination').val(to_address);
//             });

//         });
//         // calculate distance
//         function calculateDistance() {
//             var origin = $('#origin').val();
//             var destination = $('#destination').val();
//             var service = new google.maps.DistanceMatrixService();
//             service.getDistanceMatrix(
//                 {
//                     origins: [origin],
//                     destinations: [destination],
//                     travelMode: google.maps.TravelMode.DRIVING,
//                     unitSystem: google.maps.UnitSystem.IMPERIAL, // miles and feet.
//                     // unitSystem: google.maps.UnitSystem.metric, // kilometers and meters.
//                     avoidHighways: false,
//                     avoidTolls: false
//                 }, callback);
//         }
//         // get distance results
//         function callback(response, status) {
//             if (status != google.maps.DistanceMatrixStatus.OK) {
//                 $('#result').html(err);
//             } else {
//                 var origin = response.originAddresses[0];
//                 var destination = response.destinationAddresses[0];
//                 if (response.rows[0].elements[0].status === "ZERO_RESULTS") {
//                     $('#result').html("Better get on a plane. There are no roads between "  + origin + " and " + destination);
//                 } else {
//                     var distance = response.rows[0].elements[0].distance;
//                     var duration = response.rows[0].elements[0].duration;
//                     console.log(response.rows[0].elements[0].distance);
//                     // var distance_in_kilo = distance.value / 1000; // the kilom
//                     // var distance_in_mile = distance.value / 1609.34; // the mile
//                     // conversion factor
//                     const kmToMileFactor = 0.621371
//                     var distance_in_km = distance.value / 1609.34 * kmToMileFactor; // the mile
//                     var duration_text = duration.text;
//                     var duration_value = duration.value;
//                     $('#in_km').text(distance_in_km.toFixed(2));
//                     // $('#in_kilo').text(distance_in_kilo.toFixed(2));
//                     $('#duration_text').text(duration_text);
//                     $('#duration_value').text(duration_value);
//                     $('#from').text(origin);
//                     $('#to').text(destination);
//                 }
//             }
//         }
//         // print results on submit the form
//         $('#distance_form').submit(function(e){
//             e.preventDefault();
//             calculateDistance();
//         });

//     });

// </script>

    // <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAebdB9Pjo4IUe7OMFaK7xhF_tD13GklUA&libraries=places&callback=initAutocomplete" async defer></script>
    // AIzaSyAebdB9Pjo4IUe7OMFaK7xhF_tD13GklUA sal
    // AIzaSyCd2G-wHgLkKJglrvnFDWxXZfU01E45pc8 ray






























var myLatLng = { lat: 0.0, lng: 0.0 };
var mapOptions = {
    center: myLatLng,
    zoom: 1,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

// Hide result box
document.getElementById("output").style.display = "none";

// Create/Init map
var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

// Create a DirectionsService object to use the route method and get a result for our request
var directionsService = new google.maps.DirectionsService();

// Create a DirectionsRenderer object which we will use to display the route
var directionsDisplay = new google.maps.DirectionsRenderer();

// Bind the DirectionsRenderer to the map
directionsDisplay.setMap(map);


// Define calcRoute function
function calcRoute() {
    //create request
    var request = {
        origin: document.getElementById("location-1").value,
        destination: document.getElementById("location-2").value,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC
    }

    // Routing
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {

            //Get distance and time            
            
            $("#output").html("<div class='result-table'> Driving distance: " + result.routes[0].legs[0].distance.text + ".<br />Duration: " + result.routes[0].legs[0].duration.text + ".</div>");
            document.getElementById("output").style.display = "block";

            //display route
            directionsDisplay.setDirections(result);
        } else {
            //delete route from map
            directionsDisplay.setDirections({ routes: [] });
            //center map in London
            map.setCenter(myLatLng);

            //Show error message           
           
            alert("Can't find road! Please try again!");
            clearRoute();
        }
    });

}

// Clear results

function clearRoute(){
    document.getElementById("output").style.display = "none";
    document.getElementById("location-1").value = "";
    document.getElementById("location-2").value = "";
    directionsDisplay.setDirections({ routes: [] });
    
}

// Create autocomplete objects for all inputs

var options = {
    types: ['(cities)']
}


var input1 = document.getElementById("location-1");
console.log("FIRST LOCATION => ", input1)
var autocomplete1 = new google.maps.places.Autocomplete(input1, options);

var input2 = document.getElementById("location-2");
console.log("SECOND LOCATION => ", input2)
var autocomplete2 = new google.maps.places.Autocomplete(input2, options);