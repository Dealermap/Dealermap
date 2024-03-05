var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5
});

var bounds = [[0, 0], [8192, 8192]]; // Bildgröße

L.imageOverlay('https://www.gtavision.com/images/content/gtav/maps/grand-theft-auto-v_karte-satellit_hq.jpg', bounds).addTo(map);

map.fitBounds(bounds);

// Markierungen mit Beschreibungen hinzufügen
var locations = [
    { coords: [3233, 5292], description: "Los Santos International Airport" },
    { coords: [3058, 5526], description: "Del Perro Beach" },
    // Weitere Orte hinzufügen
];

locations.forEach(function(location) {
    var marker = L.marker(location.coords).addTo(map);
    marker.bindPopup(location.description).openPopup();
});
