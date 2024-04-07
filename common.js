/**
 * fill the stuff in prefix_tr|name|text with data
 */
function fillView(data, prefix){
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
    if(data._end==undefined){
        text=`On <span class="ui red text">${data.start}</span>,`
    }else{
        text=`On <span class="ui red text">${data.start}</span> to <span class="ui red text">${data._end}</span>,`
    }

    text+=` I went to <span class="ui green text">${data.loc.map(
        function(e){return e.altname==undefined?`${e.name}`:
            `<ruby>${e.name}<rt>${e.altname}</rt></ruby>`})
        .join(" and ")}</span> with <span class="ui purple text">${data.tag.filter(function(e){return e.startsWith("w")}).map(function(e){return e.substr(2)}).join(" and ")}</span>`
    $('#'+prefix+'_text').html(text);
}