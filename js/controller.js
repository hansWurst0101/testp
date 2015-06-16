// Controller fuer Events

$(document).ready(function(){
    //Ereignis: Attraktion suchen
    $('#toAttraktionButton').click(searchPosition);

    console.log("DOM ready");
});

function searchPosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(nearestLocation);
    } else {
        alert("Geolocation wird vom Browser nicht unterstuetzt");
    }
}

function nearestLocation(position){

    var myLocation;
    var currentLng = position.coords.longitude;
    var currentLat = position.coords.latitude;
    var locationLng;
    var locationLat;
    var dx;
    var dy;

    var distance;
    var nearestAttraktion = 15000; // ein extrem weit entfernter Ort (unrealistisch)

    var current=0;

    //Annahme: Maximal drei Attraktionen
    for (var i = 0; i < 3; i++){

        myLocation = myLocations[i];

        locationLng = myLocation.longitude;
        locationLat = myLocation.latitude;

        /***************************************************************************/
        /* TODO: 5a1 nearestLocation ergaenzen */
        /***************************************************************************/
            //distance: Entfernung in km: distance = Math.sqrt(dx * dx + dy * dy)
		

		// Code found at Stackoverflow
		var R = 6371; // Radius of the earth in km
		var dLat = deg2rad(locationLat - currentLat);  // deg2rad below
		var dLon = deg2rad(locationLng - currentLng); 
		var a = 
		Math.sin(dLat/2) * Math.sin(dLat/2) +
		Math.cos(deg2rad(currentLat)) * Math.cos(deg2rad(locationLat)) * 
		Math.sin(dLon/2) * Math.sin(dLon/2); 
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
		distance = R * c; // Distance in km
		

		// Save the smallest Distance and its Location index
		if(distance < nearestAttraktion) {
			nearestAttraktion = distance;
			current = i;
		}

        console.log('Distance ' + i + ': ' + distance);
    }
    showLocation(current, nearestAttraktion);
    showMap(position, current);
}

function deg2rad(deg) {
	return deg * (Math.PI/180)
}

//Location anzeigen ohne Karte
function showLocation(current, nearestAttraktion) {

    var myLocation = myLocations[current];

    // Location page oeffnen
    $(':mobile-pagecontainer').pagecontainer('change', '#page-attraktion', { transition: 'slideup' });

    /***************************************************************************/
    /* TODO: ANZEIGEN: Beschreibung, Adresse, Tel. etc. zur aktuellen Location */
    /***************************************************************************/

    $("#beschrLocationContentTop").text(myLocation.bezeichnung);
    $("#beschrLocationContent").text(myLocation.beschreibung);
    $("#adrLocation").text(myLocation.adresse);

    $("#telLocation").text(myLocation.telefon); // +' <a href="tel:' + myLocation.telefon + '">link</a>'
    $("#telLocationLink").attr("href", "tel:" + myLocation.telefon);

    $("#mailLocation").text(myLocation.email);
    $("#mailLocationLink").attr("href", "mailto:" + myLocation.email);

    // ANZEIGEN: Alle (Mini-)Bilder zum aktuellen Location anzeigen
    $("#imgLocation ul").empty();

    var i = 0;

    for (i = 0; i < 2; i++){
        $("#imgLocation ul").append("<li><img src='./img/" + myLocation.images[i] + "' width='200'></li>");

    }

    /***************************************************************************/
    /* TODO 5a2: Aktuelle Entferung zu Attraktion auf 2 Stellen runden und */
    /* an beschrLocationContent anfuegen                               */
    /***************************************************************************/
    var km = (Math.round(nearestAttraktion * 100) / 100);

    $('#beschrLocationContent').append("<p>Entfernung: " + km + " km</p>");

}

function showMap(position, current){

    var myLocation = myLocations[current];

    var latlngCurrent = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var latlngLocation = new google.maps.LatLng(myLocation.latitude,myLocation.longitude);

    var geocoder = new google.maps.Geocoder();

    //Optionen fuer Kartendarstellung festlegen

    //----------------------------------------------------------------
    //-- TODO: 5c1. OPTIONEN FESTLEGEN
    //----------------------------------------------------------------
    var myOptions = {
    	zoom: 14,
    	center: latlngCurrent
    };

    //----------------------------------------------------------------
    // TODO: 5c2. KARTE DARSTELLEN (im Div-Container mit der id=karteAusgabe)
    //----------------------------------------------------------------
    //map = ...;
    map = new google.maps.Map(document.getElementById("karteAusgabe"), myOptions);

    // Fucking Workaround
	setTimeout(function(){
		google.maps.event.trigger(map, "resize");
	}, 500);

    //----------------------------------------------------------------
    // TODO: 5c3.1 ICON FUER EIGENE POSITION DEFINIEREN
    //----------------------------------------------------------------
    //markerCurrent = ...;

    //----------------------------------------------------------------
    // TODO: 5c3.2 ICON FUER ATTRAKTION DEFINIEREN
    //----------------------------------------------------------------
    //markerLocation = ...;

    // Postalische Adresse der aktuellen Pos. ermitteln und darstellen
    geocoder.geocode({
        'latLng' : latlngCurrent
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                this.adresse = results[0].formatted_address;
                $("#adresseAusgabe").text("Sie sind gerade hier:" + this.adresse);
            }
        }
    });

    //----------------------------------------------------------------
    // Request für Navigation erstellen
    //----------------------------------------------------------------
    /** var directionsService = new google.maps.DirectionsService();

     var directionsRenderer = new google.maps.DirectionsRenderer();
     directionsRenderer.setMap(map);

     var request = {
              origin: latlngCurrent,
              destination: latlngLocation,
              travelMode: google.maps.DirectionsTravelMode.DRIVING
              };

     // directions request absetzen
     directionsService.route(request, function (result, status) {
                  if (status == google.maps.DirectionsStatus.OK) {
                      // Display the directions using Google's Directions
                      // Renderer.
                      directionsRenderer.setDirections(result);

                  } else {
                      error("Directions failed due to: " + status);
                  }
              }); **/

}



