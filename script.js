var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5
});

var bounds = [[0, 0], [8192, 8192]]; // Image size

L.imageOverlay('https://www.gtavision.com/images/content/gtav/maps/grand-theft-auto-v_karte-satellit_hq.jpg', bounds).addTo(map);

map.fitBounds(bounds);

// Add markers with descriptions
var locations = [
    { coords: [3233, 5292], description: "Los Santos International Airport" },
    { coords: [3058, 5526], description: "Del Perro Beach" },
    // Add more locations as needed
];

locations.forEach(function(location) {
    var marker = L.marker([location.coords[1], location.coords[0]]).addTo(map); // Beachte die Reihenfolge der Koordinaten
    marker.bindPopup(location.description).openPopup();
});
