//get the 'background-color' value in a css string
function getBackgroundColor(css){
    var index=css.indexOf("background-color:");
    if(index==-1){
        return undefined;
    }
    var start=index+17;
    var end=css.indexOf(";",start);
    return css.substring(start,end).trim();
}

function dateHash(date){
    return date.getMonth()+"$"+date.getDate();
}

function reloadActivity(year){
    // console.log("reload ",year)
    // console.log(data)

    var datemap={};
    //for each activity in data
    for(var i=0;i<data.length;i++){
        var activity=data[i];
        if(activity._end==undefined){
            var date=new Date(activity.start);
            if(date.getFullYear()!=year){
                continue;
            }

            var _content=`${activity.content}<br/>${year}年${date.getMonth()+1}月${date.getDate()}日`;
            datemap[dateHash(date)]={color:getBackgroundColor(activity.style),content:_content,index:i};
        }else{
            // console.log(activity.content);
            var start=new Date(activity.start);
            var end=new Date(activity._end);
            
            //stupid JS prasing
            end.setHours(start.getHours());

            // console.log(start,end,activity);
            while(start<=end){
                // console.log(start.getFullYear(),year);
                if(start.getFullYear()==year){
                    var _content=`${activity.content}<br/>${year}年${start.getMonth()+1}月${start.getDate()}日`;
                    datemap[dateHash(start)]={color:getBackgroundColor(activity.style),content:_content,index:i};
                    // console.log("Pend:",_content);
                    
                }
                start.setDate(start.getDate()+1);
                // console.log(start);
            }
        }
    }

    // console.log(datemap);

    var date=new Date(year,0,1);
    var svg=$("#timeline_svg");
    svg.html("");

    //add child to svg with tag rect and transform="translate(25,20)"
    var g=$("<g></g>").attr("transform","translate(25,20)");

    var line=0;
    var month=0;
    while(date.getFullYear()==year){
        var dateOfWeek=date.getDay();

        var hash=dateHash(date);
        
        // console.log(date,datemap[hash]);

        //add a rect to g with x=line*13 y=dateOfWeek*13
        $("<rect>")
            .attr("x",line*13)
            .attr("y",dateOfWeek*13)
            .attr("width",11)
            .attr("height",11)
            .attr("fill",datemap[hash]==undefined?(date.getMonth()%2==0? "#EBEDF0" : "#EBEDF0"):datemap[hash].color)
            .attr("stroke",(date.getMonth()%2==0? "#D2D4D6" : "#888888"))
            .attr("class","svg_popup")
            .attr("data-html",datemap[hash]==undefined?"":datemap[hash].content)
            .attr("onclick",datemap[hash]==undefined?"":`$('#qv').transition('scale in');fillView(data[${datemap[hash].index}],'qv',true)`)
            .appendTo(g);
        
        if(dateOfWeek==6){
            line++;
        }

        if(date.getMonth()!=month){
            //get the short name of the month
            var monthName=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
            
            g.append('<text x="'+(line*13)+'" y="-5" class="wday">'+monthName[date.getMonth()]+'</text>')

            month=date.getMonth();
        }


        date.setDate(date.getDate()+1);
    }
    g.append('<text text-anchor="middle" class="wday" dx="-13" dy="22">Mon</text>');
    g.append('<text text-anchor="middle" class="wday" dx="-13" dy="48">Wed</text>');
    g.append('<text text-anchor="middle" class="wday" dx="-13" dy="74">Fri</text>');

    g.appendTo(svg);

    //refresh the svg. a "hack"
    $("#timeline_svg_div").html($("#timeline_svg_div").html());

    $('.svg_popup').popup();

}