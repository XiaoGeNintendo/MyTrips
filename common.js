/**
 * fill the stuff in prefix_tr|name|text with data
 */
function fillView(data, prefix, slashMode=false){
    s=""
    for(var i in data.tag){
        si=data.tag[i]
        if(si.startsWith("tr:")){
            var id=""
            if(si.endsWith("t")){ //train
                id="🚃 Train"
            }else if(si.endsWith("p")){ //plane
                id="✈️ Aeroplane"
            }else if(si.endsWith("b")){ //bus
                id="🚌 Bus"
            }else if(si.endsWith("s") || si.endsWith("m")){ //subway
                id="🚇 Metro"
            }else if(si.endsWith("c")){ //car
                id="🚗 Car"
            }else if(si.endsWith("h")){ //high speed railway
                id="🚄 High-speed train"
            }

            s+='<div class="ui label">'+id+'</div>'
        }
    }
    $('#'+prefix+'_tr').html(s)
    $('#'+prefix+'_name').text(data.content)

    var text=""
    var end=slashMode?data._end:data.end
    if(end==undefined){
        text=`On <span class="ui red text">${data.start}</span>,`
    }else{
        text=`On <span class="ui red text">${data.start}</span> to <span class="ui red text">${end}</span>,`
    }

    text+=` I went to <span class="ui green text">${data.loc.map(
        function(e){return e.altname==undefined?`${e.name}`:
            `<ruby>${e.name}<rt>${e.altname}</rt></ruby>`})
        .join(" and ")}</span> with <span class="ui purple text">${data.tag.filter(function(e){return e.startsWith("w")}).map(function(e){return e.substr(2)}).join(" and ")}</span>`
    $('#'+prefix+'_text').html(text);
}

function sum(predicate){
    var ans=0;
    data.forEach(element => {
        ans+=predicate(element);
    })
    return ans;
}

function radians(degrees) {
    return degrees * Math.PI / 180;
}

//[latitude, longitude]
function dist(l1, l2){
    var lat1=l1[0]
    var lon1=l1[1]
    var lat2=l2[0]
    var lon2=l2[1]

    var R = 6371; // Earth's radius in kilometers

    var lat1Rad = radians(lat1);
    var lon1Rad = radians(lon1);
    var lat2Rad = radians(lat2);
    var lon2Rad = radians(lon2);

    var dLat = lat2Rad - lat1Rad;
    var dLon = lon2Rad - lon1Rad;

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat1Rad) * Math.cos(lat2Rad) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);

    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    var distance = R * c;

    return distance;
}

function days(date1Str, date2Str) {
    // Parse the date strings into Date objects
    var date1 = new Date(date1Str);
    var date2 = new Date(date2Str);

    // Calculate the difference in milliseconds
    var differenceMs = Math.abs(date2 - date1);

    // Convert milliseconds to days
    var differenceDays = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));

    return differenceDays;
}