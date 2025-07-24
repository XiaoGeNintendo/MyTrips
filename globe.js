let map;
function loadMap(){
    map = L.map('map').setView(myLoc, 4);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    //show my location with a marker
    L.marker(myLoc).addTo(map)
        .bindPopup('Home');

    data.forEach(function(trip) {
        drawTrip(trip);
    });
}

function getBackgroundColor(style) {
    //style is string of format "color: black; background-color: palegreen;"
    var index = style.indexOf("background-color:");
    if (index == -1) {  
        return "#114514";
    }
    var start = index + "background-color:".length;
    var end = style.indexOf(";", start);
    return style.substring(start, end).trim().replace("palegreen","green");
}

const LARGE_RADIUS = 5;
const SMALL_RADIUS = 3;

function drawTrip(trip){
    if(typeof trip.globe[0] == 'number'){
        //single trip
        L.circleMarker(trip.globe, {
            radius: LARGE_RADIUS,
            weight: 1,
            color: 'black',
            fillColor: getBackgroundColor(trip.style),
            fillOpacity: 0.5
        }).addTo(map).bindPopup(trip.content);
    }else{
        //multiple locations
        var latlngs = trip.globe

        L.polyline(latlngs, {
            color: getBackgroundColor(trip.style),
            weight: SMALL_RADIUS,
            opacity: 0.5,
            smoothFactor: 1
        }).addTo(map).bindPopup(trip.content);

        //draw markers for each location
        for(var i = 0; i < latlngs.length; i++) {
            var latlng = latlngs[i];
            var important = i == 0 || i == latlngs.length - 1;
            L.circleMarker(latlng, {
                radius: important ? LARGE_RADIUS : SMALL_RADIUS,
                weight: important ? 1 : 0.5,
                color: 'black',
                fillColor: getBackgroundColor(trip.style),
                fillOpacity: 0.5
            }).addTo(map).bindPopup(trip.content + ' (' + (i + 1) + '/' + latlngs.length + ')');
        }
    }
}