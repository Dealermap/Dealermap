var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5
});

var bounds = [[0, 0], [8192, 8192]]; // Image size

L.imageOverlay('https://www.gtavision.com/images/content/gtav/maps/grand-theft-auto-v_karte-satellit_hq.jpg', bounds).addTo(map);

map.fitBounds(bounds);

// Add markers with descriptions
var locations = [
    { coords: [5292, 3233], description: "Los Santos International Airport" },
    { coords: [3058, 5526], description: "Del Perro Beach" },
    // Add more locations as needed
];

locations.forEach(function(location) {
    var marker = L.marker(map.unproject(location.coords, map.getMaxZoom())).addTo(map);
    marker.bindPopup(location.description).openPopup();
});
