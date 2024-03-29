<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Los Santos Karte</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css"/>
    <style>
        #map {
            height: 800px;
            width: 100%;
        }
    </style>
</head>
<body>

<div id="map"></div>

<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
<script>
    var map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -5
    });

    var bounds = [[0, 0], [8192, 8192]]; // Image size

    L.imageOverlay('https://www.gtavision.com/images/content/gtav/maps/grand-theft-auto-v_karte-satellit_hq.jpg', bounds).addTo(map);

    map.fitBounds(bounds);

    // Event-Listener für das Klicken auf die Karte hinzufügen
    map.on('click', function(event) {
        var latlng = map.mouseEventToLatLng(event.latlng);
        var marker = L.marker(latlng).addTo(map);
        marker.bindPopup("Neuer Marker").openPopup();
    });
</script>

</body>
</html>
