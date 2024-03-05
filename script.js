var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5
});

var bounds = [[0, 0], [8192, 8192]]; // Bildgröße

L.imageOverlay('https://www.gtavision.com/images/content/gtav/maps/grand-theft-auto-v_karte-satellit_hq.jpg', bounds).addTo(map);

map.fitBounds(bounds);

// Funktion zur Umrechnung von Pixelkoordinaten in geografische Koordinaten
function pixelToLatLng(pixelCoords) {
    var x = pixelCoords[0];
    var y = pixelCoords[1];
    var maxX = bounds[1][0];
    var maxY = bounds[1][1];
    var lat = (1 - y / maxY) * 90;
    var lng = x / maxX * 180 - 90;
    return [lat, lng];
}

// Markierungen mit Beschreibungen hinzufügen
var locations = [
    { coords: [3233, 5292], description: "Los Santos International Airport" },
    { coords: [3058, 5526], description: "Del Perro Beach" },
    // Weitere Orte hinzufügen
];

locations.forEach(function(location) {
    var latlng = pixelToLatLng(location.coords);
    L.marker(latlng).addTo(map)
        .bindPopup(location.description)
        .openPopup();
});
