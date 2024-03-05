var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5
});

var bounds = [[0, 0], [1536, 2048]]; // Image size

L.imageOverlay('https://www.gtavision.com/images/content/gtav/maps/grand-theft-auto-v_karte-satellit_hq.jpg', bounds).addTo(map);

map.fitBounds(bounds);

// Add markers for different locations
var locations = [
    { name: "Los Santos International Airport", coords: [873, 992] },
    { name: "Del Perro Beach", coords: [570, 520] },
    // Add more locations as needed
];

locations.forEach(function(location) {
    var marker = L.marker(map.unproject(location.coords, map.getMaxZoom())).addTo(map);
    marker.bindPopup(location.name).openPopup();
});
