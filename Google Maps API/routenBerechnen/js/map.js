var mymap = L.map('mapid').setView([47.3738, 8.5371], 9);

//https://c.tile.openstreetmap.de/{z}/{x}/{y}.png
L.tileLayer('http://a.tile.stamen.com/toner/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1 
}).addTo(mymap);


L.Routing.control({
    waypoints: [
       L.latLng(47.3738, 8.5371),
       L.latLng(52.5002237, -0.949),
       L.latLng(52.5002237, -1.949)
    ],
    language: 'de', // here's the magic
    autoRoute: true,
    routeWhileDragging: true,
 }).addTo(mymap);

 var someFeatures = [{
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "show_on_map": true
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404, 39.75621]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "Busch Field",
        "show_on_map": false
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.98404, 39.74621]
    }
}];

L.geoJSON(someFeatures, {
    filter: function(feature, layer) {
        return feature.properties.show_on_map;
    }
}).addTo(map);

