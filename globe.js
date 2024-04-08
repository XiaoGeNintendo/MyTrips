
function getMapFeatures(domestic=false) {
    var seriesData = []
    for (var i in data) {
        var e = data[i]
        if (e.globe == undefined || domestic && e.style==STYLE_ABROAD) {
            continue
        }
        if (typeof e.globe[0] == 'number') {
            seriesData.push({ name: e.content, geometry: { type: 'Point', coordinates: [e.globe[1], e.globe[0]] } })
        } else {
            for (var j in e.globe) {
                var ee = e.globe[j]

                seriesData.push({ name: e.content, geometry: { type: 'Point', coordinates: [ee[1], ee[0]] } })
            }
        }
    }
    return seriesData
}
function getLineFeatures(domestic=false) {
    var seriesData = []
    for (var i in data) {
        var e = data[i]
        if (e.globe == undefined || typeof e.globe[0] == "number" || domestic && e.style==STYLE_ABROAD) {
            continue
        }
        for (var j = 0; j < e.globe.length - 1; j++) {
            var e1 = e.globe[j]
            var e2 = e.globe[j + 1]
            seriesData.push({
                name: e.content,
                geometry: {
                    type: 'LineString',
                    coordinates: [
                        [e1[1], e1[0]], // Yemen
                        [e2[1], e2[0]] // Java
                    ]
                },
                className: 'animated-line',
                color: '#666'
            })
        }
    }

    return seriesData
}

(async () => {
    const topology = await fetch(
        'https://code.highcharts.com/mapdata/custom/world-highres.topo.json'
    ).then(response => response.json());
    
    //Initialize cn map
    $('#cn_map').highcharts('Map', {
        title: {
            text: 'Destinations in China',
        },
        subtitle: {
            text: "Note that this map may contain error on borders. Please contact Jianshu Technology for the problem."
        },
        mapNavigation: {
            enabled: true,
            enableDoubleClickZoomTo: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
        tooltip: {
            headerFormat: '',
            pointFormat: '<b>{point.name}</b>'
        },
        series: [{
            mapData: Highcharts.maps['cn/china'],
            name: 'Basemap',
            borderColor: '#A0A0A0',
            showInLegend: false
        }, 
        {
            // Specify points using lat/lon
            type: 'mappoint',
            name: 'Tour Destinations',
            color: '#0369f3',
            marker: {
                "fillColor": "white",
                "lineColor": "black",
                "lineWidth": 2,
                "radius": 3
            },
            data: getMapFeatures(true)
        }]
    });


    // Initialize the chart
    var chart = Highcharts.mapChart('globe_map', {
        chart: {
            map: topology
        },

        title: {
            text: 'Destinations Around the World'
        },
        mapNavigation: {
            enabled: true,
            enableDoubleClickZoomTo: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
        mapView: {
            maxZoom: 30,
            zoom: 3,
            projection: {
                name: 'Orthographic',
                rotation: [-myLoc[1], -myLoc[0]],
            },
        },
        tooltip: {
            pointFormat: '{point.name}'
        },
        series: [
            {
                name: 'Journey Map',
                showInLegend: false
            },
            {
                type: 'mapline',
                name: "Routes",
                data: getLineFeatures()
            },
            {
                name: "Destinations",
                type: 'mappoint',
                color: '#333',
                marker: {
                    "fillColor": "white",
                    "lineColor": "black",
                    "lineWidth": 2,
                    "radius": 3
                },
                data: getMapFeatures(),
            }
        ]
    });

    // chart.setView([myLoc[1],myLoc[0]],3);
})();


