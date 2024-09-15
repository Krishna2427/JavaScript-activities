function initMap() {
    const location = { lat: 40.7128, lng: -74.0060 }; // Example coordinates (New York City)
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: location
    });
    new google.maps.Marker({
        position: location,
        map: map
    });
}

// Initialize the map when the window loads
window.onload = initMap;