var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5
});

var bounds = [[0, 0], [8192, 8192]]; // Bildgröße

L.imageOverlay('https://www.gtavision.com/images/content/gtav/maps/grand-theft-auto-v_karte-satellit_hq.jpg', bounds).addTo(map);

map.fitBounds(bounds);

// Event-Listener für das Klicken auf die Karte hinzufügen
map.on('click', function(event) {
    var latlng = map.mouseEventToLatLng(event.originalEvent);
    var marker = L.marker(latlng).addTo(map);
    marker.bindPopup("Neuer Marker").openPopup();
});
