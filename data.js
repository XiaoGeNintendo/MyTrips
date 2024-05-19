var STYLE_NJ="color: black; background-color: palegreen;"
var STYLE_NEAR="color: black; background-color: aqua;"
var STYLE_FAR="color: white; background-color: orangered;"
var STYLE_ABROAD="color: white; background-color: purple;"
var myLoc=[32.063603,118.744264]

/*
{
    content:"吴家大洼", //the name of the trip
    start:"2024-4-14", //the date in YYYY-MM-DD
    style:STYLE_NJ, //the style to be displayed on the timeline. Have preset above.
    //Tags to supplement information for the system.
    //- "tr:" identifies transportation means. Possible values are:
    //h: high speed train
    //t: train
    //m or s: metro
    //b: bus
    //p: plane
    //c: car
    //- "w:" identifies "with whom". It is case sensitive. Some presets:
    //Myself
    //Family
    tag:["tr:c","w:Family"], 
    
    //city of destinations in a list. altname is not mandatory.
    loc:[{
        name:"南京",
        altname:"Nanjing"
    }],
    
    //the location of the destination in format [lat,long] or [[lat,long],[lat,long],...]
    //You can find such information on https://map.google.com by right-clicking
    //Or https://api.map.baidu.com/lbsapi/getpoint/index.html Note: Baidu returns [long,lat]. Please be careful!!
    globe:[[32.10040233513357, 118.62085518551899],[32.09799052838991, 118.59370303800573]]
    //a link
    page:"https://blog.hellholestudios.top/archives/1332",
    //link's text
    linkText:"Diary (Chinese)"
},
*/
var data=[
    {
    content:"句容",
    start:"2024-5-19",
    style:STYLE_NEAR,
    tag:["tr:h","tr:b","tr:m","w:ZKY"],
    loc:[{
        name:"句容",
        altname:"Jurong"
    }],
    globe:[[31.968913069066605, 118.79775886680548],[31.833122743903072, 118.97940408029298],[31.92410849630656, 119.16938428847926],[31.94397856569287, 119.15929370063395],[32.04993667378882, 118.89478439531656]]
    },
    {
    content:"象山湖公园",
    start:"2024-5-2",
    style:STYLE_NJ,
    tag:["tr:c","w:Family"],
    loc:[{
        name:"南京",
        altname:"Nanjing"
    }],
    globe:[32.086906028058216, 118.61767661113373]
    },
    {
    content:"吴家大洼",
    start:"2024-4-14",
    style:STYLE_NJ,
    tag:["tr:c","w:Family"],
    loc:[{
        name:"南京",
        altname:"Nanjing"
    }],
    globe:[[32.10040233513357, 118.62085518551899],[32.09799052838991, 118.59370303800573]]
    },
    {
        content:"滁州",
        start:"2024-4-5",
        style:STYLE_NEAR,
        tag:["tr:h","tr:m","tr:b","w:ZKY"],
        loc:[{
            name:"滁州",
            altname:"Chuzhou"
        }],
        globe:[32.28025222977801, 118.25857982120513],
        page:"https://blog.hellholestudios.top/archives/1362",
        linkText:"Diary (Chinese)"
    },
    {
        content:"达摩古洞",
        start:"2024-3-31",
        style:STYLE_NJ,
        tag:["tr:c","w:Family"],
        loc:[{
            name:"南京",
            altname:"Nanjing"
        }],
        globe:[32.13450753576947, 118.79865612554016]
    },
    {
        content:"上海(￥8.5の旅行)",
        start:"2024-2-20",
        end:"2024-2-22",
        style:STYLE_NEAR,
        tag:["tr:t","tr:m","tr:b","w:ZKY"],
        loc:[{
            name:"上海",
            altname:"Shanghai"
        }],
        globe:[31.22876861110972, 121.47585997363281],
        page:"https://blog.hellholestudios.top/archives/1332",
        linkText:"Diary (Chinese)"
    },
    {
        content:"熙南里、老门东",
        start:"2024-2-5",
        style:STYLE_NJ,
        tag:["tr:m","tr:b","w:ZKY"],
        loc:[{
            name:"南京",
            altname:"Nanjing"
        }],
        globe:[32.02524016612299, 118.7822577244791]
    },
    {
        content:"厦门",
        start:"2024-1-22",
        end:"2024-1-27",
        style:STYLE_FAR,
        tag:["tr:p","tr:m","tr:b","w:ZKY"],
        loc:[{
            name:"厦门",
            altname:"Amoy"
        }],
        globe:[24.47823792283241, 118.08722983759961],
        page:"https://blog.hellholestudios.top/archives/1318",
        linkText:"Diary (Chinese)"
    },
    {
        content:"汤山一号温泉(HHS冬大祭'24)",
        start:"2024-1-6",
        end:"2024-1-7",
        style:STYLE_NJ,
        tag:["tr:c","tr:b","w:ZKY","w:HDD","w:XZM"],
        loc:[{
            name:"南京",
            altname:"Nanjing"
        }],
        globe:[32.05210169380145, 119.06336199564463]
    },
    {
        content:"明觉(政治之旅)",
        start:"2024-1-3",
        style:STYLE_NJ,
        tag:["tr:m","w:Myself"],
        loc:[{
            name:"南京",
            altname:"Nanjing"
        }],
        globe:[31.54721341449204, 118.90159507825025]
    },
    {
        content:"南京花博园",
        start:"2024-1-1",
        style:STYLE_NJ,
        tag:["tr:c","w:Family"],
        loc:[{
            name:"南京",
            altname:"Nanjing"
        }],
        globe:[31.762175483084512, 118.77468795884074]
    },
    {
        content:"南外新校区探索",
        start:"2023-12-28",
        style:STYLE_NJ,
        tag:["tr:c","w:XZM","w:HDD","w:ZKY"],
        loc:[{
            name:"南京",
            altname:"Nanjing"
        }],
        globe:[31.998654,118.83963]
    },
    {
        content:"江心洲",
        start:"2023-12-9",
        style:STYLE_NJ,
        tag:["tr:c","w:Family"],
        loc:[{
            name:"南京",
            altname:"Nanjing"
        }],
        globe:[32.0331762565581, 118.70334032768788]
    },
    {
        content:"济南ACM",
        start:"2023-12-1",
        end:"2023-12-3",
        style:STYLE_FAR,
        tag:["tr:h","tr:m","w:CDR","w:ZZX"],
        loc:[{
            name:"济南",
            altname:"Jinan"
        }],
        globe:[36.55552744537021, 116.81161026700912]
    },
    {
        content:"哈尔滨ACM",
        start:"2023-11-3",
        end:"2023-11-5",
        style:STYLE_FAR,
        tag:["tr:p","tr:m","w:CDR","w:ZZX"],
        loc:[{
            name:"哈尔滨",
            altname:"Haerbin"
        }],
        globe:[45.77324415964055, 126.6640436880847]
    },
    {
        content:"莫愁湖",
        start:"2023-8-18",
        style:STYLE_NJ,
        tag:["tr:m","w:ZKY"],
        loc:[{
            name:"南京",
            altname:"Nanjing"
        }],
        globe:[32.03574590645321, 118.76359822373891]
    },
    {
        content:"日本",
        start:"2023-8-6",
        end:"2023-8-15",
        style:STYLE_ABROAD,
        tag:["tr:p","tr:h","tr:t","tr:m","tr:b","w:Family"],
        loc:[{
            name:"大阪",
            altname:"Osaka"
        },
        {
            name:"奈良",
            altname:"Nara"
        },{
            name:"京都",
            altname:"Kyoto"
        },{
            name:"富士山",
            altname:"Mt.Fuji"
        },{
            name:"東京",
            altname:"Tokyo"
        },{
            name:"上海",
            altname:"Shanghai"
        },],
        globe:[[34.6682527294969, 135.49495949655758], //osaka
                [34.68505579517406, 135.84302272459405], //nara
                [34.6682527294969, 135.49495949655758],
                [35.00893837172541, 135.7696135782356], //kyoto
                [34.6682527294969, 135.49495949655758],
                [35.68248305436946, 139.78175070789558], //tokyo
                [35.49633933867448, 138.76660368798593], //mt fuji
                [35.68248305436946, 139.78175070789558],
                [35.76710123923504, 140.38231334585927], //narita airport
            ],
            page:"https://blog.hellholestudios.top/archives/1066",
            linkText:"Diary (Chinese)"
    },
    {
        content:"湖州",
        start:"2023-7-24",
        end:"2023-7-25",
        style:STYLE_NEAR,
        tag:["tr:h","w:ZKY"],
        loc:[{
            name:"湖州",
            altname:"Huzhou"
        },
        {
            name:"南浔",
            altname:"Nanxun"
        }],
        globe:[30.88924121849804, 120.08493684071456],
        page:"https://blog.hellholestudios.top/archives/1019",
        linkText:"Diary (Chinese)"
    },
    {
        content:"山西老家附近",
        start:"2023-7-14",
        end:"2023-7-21",
        style:STYLE_FAR,
        tag:["tr:h","tr:c","w:Family"],
        loc:[{
            name:"运城",
            altname:"Yuncheng"
        },{
            name:"平陆",
            altname:"Pinglu"
        },{
            name:"三门峡",
            altname:"Sanmenxia"
        },
        ],
        globe:[
            [34.77236192312757, 111.1992974333047], //sanmenxia
            [34.834717660518784, 111.19439805251731], //pinglu
            [34.826802008443046, 111.34461399576483], //daba
            [34.786456407167286, 111.21118708042053], //museum
            [34.834717660518784, 111.19439805251731],
            [35.2913808384205, 110.72431545655647], //li house
            [35.337510972707044, 110.63771653811673], //houtuci
            [34.834717660518784, 111.19439805251731],
        ]
    },
    {
        content:"鱼嘴探索",
        start:"2023-7-3",
        style:STYLE_NJ,
        tag:["tr:m","w:Myself"],
        loc:[{
            name:"南京",
            altname:"Nanjing"
        }],
        globe:[31.981454491786973, 118.67824978613223]
    },
    {
        content:"溧阳",
        start:"2023-6-26",
        end:"2023-6-27",
        style:STYLE_NEAR,
        tag:["tr:h","w:ZKY"],
        loc:[{
            name:"溧阳",
            altname:"Liyang"
        }],
        detail:"天目湖、南山竹海",
        globe:[31.31884723157039, 119.44629610664302],
        page:"https://blog.hellholestudios.top/archives/978",
        linkText:"Diary (Chinese)"
    },
    {
        content:"7号线探线",
        start:"2023-6-15",
        style:STYLE_NJ,
        tag:["tr:m","tr:b","w:ZKY"],
        loc:[{
            name:"南京",
            altname:"Nanjing"
        }],
        globe:[[32.111709,118.778112],[32.132917,118.901899],[32.097854,118.923278]] //mufuxilu - xianxinlu - xuezulu
    },
    {
        content:"老山",
        start:"2023-1-25",
        style:STYLE_NJ,
        tag:["tr:c","w:Family"],
        loc:[{
            name:"南京",
            altname:"Nanjing"
        }],
        globe:[32.106567,118.607822]
    },
    {
        content:"镇江",
        start:"2023-1-24",
        style:STYLE_NEAR,
        tag:["tr:t","tr:h","tr:b","w:ZKY"],
        loc:[{
            name:"镇江",
            altname:"Zhenjiang"
        }],
        globe:[32.18756875165215, 119.42304682284521]
    },
    {
        content:"汤山矿坑公园",
        start:"2022-10-3",
        style:STYLE_NJ,
        tag:["tr:c","w:Family"],
        loc:[{
            name:"南京",
            altname:"Nanjing"
        }],
        globe:[32.04153046843297, 119.04124005146599]
    },
    {
        content:"邗江数竞",
        start:"2022-9-10",
        end:"2022-9-11",
        style:STYLE_NEAR,
        tag:["tr:c","w:Family","w:ZKY"],
        loc:[{
            name:"邗江",
            altname:"Hanjiang"
        }],
        globe:[32.413481,119.374808]
    },
    {
        content:"高淳",
        start:"2022-8-12",
        style:STYLE_NJ,
        tag:["tr:m","w:ZKY"],
        loc:[{
            name:"南京",
            altname:"Nanjing"
        }],
        globe:[31.320338305054378, 118.86781926677888]
    },
    {
        content:"紫金山",
        start:"2022-4-22",
        style:STYLE_NJ,
        tag:["w:ZKY","w:?"],
        loc:[{
            name:"南京",
            altname:"Nanjing"
        }],
        globe:[32.07054127162361, 118.85312253369837]
    },
    {
        content:"德基美术馆II",
        start:"2022-2-12",
        style:STYLE_NJ,
        tag:["tr:m","w:Family"],
        loc:[{
            name:"南京",
            altname:"Nanjing"
        }],
        globe:[32.044561085699016, 118.78439889564427]
    },
    {
        content:"银杏湖民宿",
        start:"2022-2-3",
        end:"2022-2-4",
        style:STYLE_NJ,
        tag:["tr:c","w:WZZ","w:PrimarySchoolFriends"],
        loc:[{
            name:"南京",
            altname:"Nanjing"
        }],
        globe:[31.781057616564993, 118.71298284668042]
    },
    {
        content:"德基美术馆",
        start:"2022-2-2",
        style:STYLE_NJ,
        tag:["tr:m","w:Family"],
        loc:[{
            name:"南京",
            altname:"Nanjing"
        }],
        globe:[32.044561085699016, 118.78439889564427]
    },
    {
        content:"S6、麒麟有轨探线",
        start:"2022-2-1",
        style:STYLE_NJ,
        tag:["tr:m","w:Family"],
        loc:[{
            name:"南京",
            altname:"Nanjing"
        },
        {
            name:"句容",
            altname:"Jurong"
        }],
        globe:[[31.928709,119.176313] //jurong
        ,[32.055632,118.901]//maqun
        ,[32.011001,118.882068] //shiyanglu
        ,[32.055632,118.901]
    ]
    },
    {
        content:"NJTHO 2021",
        start:"2021-12-26",
        style:STYLE_NJ,
        tag:["tr:c","w:ZKY","w:ZYT"],
        loc:[{
            name:"南京",
            altname:"Nanjing"
        }],
        globe:[32.00623325904225, 118.72466700616351]
    },
    {
        content:"红山动物园春游",
        start:"2021-11-13",
        style:STYLE_NJ,
        tag:["tr:c","w:ZKY","w:HDD"],
        loc:[{
            name:"南京",
            altname:"Nanjing"
        }],
        globe:[32.09167042128037, 118.80202699564636]
    },
    {
        content:"灵谷寺",
        start:"2021-10-5",
        style:STYLE_NJ,
        tag:["tr:m","tr:b","w:ZKY","w:XZM","w:ZYT","w:MonkeyKing"],
        loc:[{
            name:"南京",
            altname:"Nanjing"
        }],
        globe:[32.05496578776216, 118.8678259956447],
        page:"https://blog.hellholestudios.top/archives/634",
        linkText:"Diary (Chinese)"
    },
    {
        content:"无想山",
        start:"2021-2-14",
        style:STYLE_NJ,
        tag:["tr:m","tr:c","w:ZKY","w:ZYT","w:WZZ","w:Family"],
        loc:[{
            name:"南京",
            altname:"Nanjing"
        }],
        globe:[31.602118045450478, 119.01618924266474],
        page:"https://blog.hellholestudios.top/archives/510",
        linkText:"Diary (Chinese)"
    },
]