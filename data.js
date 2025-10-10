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
        content:"五号线探线",
        start:"2025-10-7",
        style:STYLE_NJ,
        tag:["tr:bi","tr:m","w:ZKY"],
        loc:[{
            name:"南京",
            altname:"Nanjing"
        }
        ],
        globe:[
            [32.10332491016267, 118.74381356755181],
            [32.068108847046865, 118.7730177745209],
            [32.03333776620578, 118.77445119806546],
            [32.00664533117359, 118.83035478085591],
            [31.95244397091891, 118.84376230612014],
            [31.886407177762464, 118.79529794850104]
        ],
    },
     {
        content:"长江大桥玻璃栈道",
        start:"2025-10-5",
        style:STYLE_NJ,
        tag:["tr:bi","w:Family"],
        loc:[{
            name:"南京",
            altname:"Nanjing"
        }
        ],
        globe:[
            [32.11005241102495, 118.74894801633337]
        ],
    },

    {
        content:"平山森林公园、恋山坝上草原",
        start:"2025-10-2",
        style:STYLE_NJ,
        tag:["tr:c","w:Family"],
        loc:[{
            name:"南京",
            altname:"Nanjing"
        }
        ],
        globe:[
            [32.45100645771533, 118.83593749969893],
            [32.46432595122143, 118.77007255087645]
        ],
    },
    {
        content:"呼伦贝尔",
        start:"2025-8-11",
        end:"2025-8-19",
        style:STYLE_FAR,
        tag:["tr:c","tr:p","w:ZKY"],
        loc:[{
            name:"海拉尔",
            altname:"Hailar"
        },
        {
            name:"满洲里",
            altname:"Manzhouli"
        },
        {
            name:"黑山头",
            altname:"Heishantou"
        },
        {
            name:"室韦",
            altname:"Shiwei"
        },
        {
            name:"额尔古纳",
            altname:"Erguna"
        },
        {
            name:"阿尔山",
            altname:"Arxan"
        },
        ],
        globe:[
            [49.21177894733427, 119.75736616667443], //Hailar
            [49.59454125082626, 117.46084982799267], //Manzhouli
            [49.4816493124561, 118.56250084983691],  //Xiwuzhuer
            [50.214006523429575, 119.57491996429874], //Heishantou
            [51.33607665365525, 119.89545283182507], //Shiwei
            [50.24458981888875, 120.17425343455022], //Erguna
            [49.21177894733427, 119.75736616667443], //Hailar
            [47.17683566580556, 119.9424172195922], //Arxan
            [47.41502319157154, 120.56552506302272], //Forest Park
            [47.17683566580556, 119.9424172195922], //Arxan
            [49.21177894733427, 119.75736616667443], //Hailar
        ],
        //a link
        page:"https://blog.hellholestudios.top/archives/1788",
        //link's text
        linkText:"Diary (Chinese)"
    },
    {
        content:"神秘小岛",
        start:"2025-7-12",
        end:"2025-7-13",
        style:STYLE_NEAR,
        tag:["tr:c","w:ZYT","w:HDD","w:XZM","w:Family","w:ZHR"],
        loc:[{
            name:"宁国",
            altname:"Ningguo"
        },
        ],
        globe:[
            [30.497814042245544, 118.8121504861024],
            [30.479851,118.72214]
        ],
    },
    {
        content:"公交地铁S3",
        start:"2025-7-4",
        end:"2025-7-9",
        style:STYLE_FAR,
        tag:["tr:h","tr:b","tr:t","w:ZYT"],
        loc:[{
            name:"砀山",
            altname:"Dangshan"
        },
        {
            name:"商丘",
            altname:"Shangqiu"
        },
        {
            name:"兰考",
            altname:"Lankao"
        },
        {
            name:"开封",
            altname:"Kaifeng"
        },
        {
            name:"郑州",
            altname:"Zhengzhou"
        }
        ],
        globe:[
            [34.21200163477587, 117.28750672209237], //xuzhou
            [34.56348882188939, 116.32181569155642], //dangshan
            [34.23114216403074, 116.14811939372223], //xiayi
            [34.40590938961319, 115.64489114589661], //shangqiu
            [34.81318837258077, 114.80399534417283], //lankao
            [34.804664593385446, 114.31606818120719], //kaifeng
            [34.75585654441137, 113.61894093928865], //zhengzhou
        ],
    },
    {
        content:"南大浦口校区和太古可口可乐厂",
        start:"2025-7-1",
        style:STYLE_NJ,
        tag:["tr:b","w:Myself"],
        loc:[{
            name:"南京",
            altname:"Nanjing"
        }
        ],
        globe:[
            32.17403238427789, 118.70759606714832
        ],
    },
    {
        content:"满记甜品自助",
        start:"2025-6-11",
        style:STYLE_NJ,
        tag:["tr:m","tr:c","w:XZM"],
        loc:[{
            name:"南京",
            altname:"Nanjing"
        }
        ],
        globe:[
            [31.964633267731557, 118.7288848148817]
        ],
    },
    {
        content:"石臼湖、龙猫草海、漆桥古镇",
        start:"2025-5-3",
        style:STYLE_NJ,
        tag:["tr:c","w:Family"],
        loc:[{
            name:"南京",
            altname:"Nanjing"
        }
        ],
        globe:[
            [31.5056088824488, 118.875907073307],
            [31.532833404543787, 118.89912933864771],
            [31.483531583875205, 118.98100413789781],
            [31.376476979076017, 118.99135442771404]
        ],
    },
    {
        content:"东庐观音寺",
        start:"2025-4-6",
        style:STYLE_NJ,
        tag:["tr:c","w:Family"],
        loc:[{
            name:"南京",
            altname:"Nanjing"
        }
        ],
        globe:[
            [31.641154644515282, 119.1090082471966]
        ],
    },
    {
        content:"合肥非空运转",
        start:"2025-2-22",
        style:STYLE_NEAR,
        tag:["tr:h","tr:t","tr:m","w:Family"],
        loc:[{
            name:"合肥",
            altname:"Hefei"
        },{
            name:"芜湖",
            altname:"Wuhu"
        }
        ],
        globe:[
            [31.834797567333414, 117.23810701746953],
            [31.35418791508688, 118.43514131421733]
        ],
    },
    {
        content:"公交地铁S2",
        start:"2025-2-8",
        end:"2025-2-13",
        style:STYLE_NEAR,
        tag:["tr:h","tr:b","w:ZYT"],
        loc:[{
            name:"扬州",
            altname:"Yangzhou"
        },{
            name:"高邮",
            altname:"Gaoyou"
        },{
            name:"淮安",
            altname:"Huaian"
        },{
            name:"宿迁",
            altname:"Suqian"
        },{
            name:"徐州",
            altname:"Xuzhou"
        },
        ],
        globe:[
            [32.17837096233473, 119.42826117527743],
            [32.39943322359401, 119.41399757293983],
            [32.78122403290078, 119.45437997632256],
            [33.55798507736442, 119.10436963862237],
            [33.966050328012365, 118.27060268746048],
            [34.20550635437412, 117.28218547362884]
        ],
    },
    {
        content:"老家",
        start:"2025-1-24",
        end:"2025-2-5",
        style:STYLE_FAR,
        tag:["tr:h","tr:c","w:Family"],
        loc:[{
            name:"平陆",
            altname:"Pinglu"
        },{
            name:"三门峡",
            altname:"Sanmenxia"
        },
        ],
        globe:[
            [34.834875504360696, 111.19323936254696]
        ]
    },
    {
        content:"北海道",
        start:"2025-1-13",
        end:"2025-1-21",
        style:STYLE_ABROAD,
        tag:["tr:p","tr:t","tr:b","tr:m","tr:h","w:ZKY"],
        loc:[{
            name:"東京",
            altname:"Tokyo"
        },
        {
            name:"函館",
            altname:"Hakodate"
        },
        {
            name:"登別",
            altname:"Noboribetsu"
        },
        {
            name:"札幌",
            altname:"Sapporo"
        },
        {
            name:"小樽",
            altname:"Otaru"
        },
    ],
        globe:[[35.72779523718679, 139.98562015424446],[41.751503738055405, 140.74018087998505],[42.418572414208704, 141.09760957075207],[43.06384699396693, 141.3523774621787],[43.19495319685896, 140.9898231832162],[43.05907420060333, 141.35890997170955],[35.55178611673673, 139.78565427326058]],
        
        page:"https://blog.hellholestudios.top/archives/1597",
        linkText:"Diary (Chinese)"
    },
    {
        content:"芜湖探线&银杏湖跨年音乐会",
        start:"2024-12-31",
        end:"2025-1-1",
        style:STYLE_NEAR,
        tag:["tr:h","tr:c","tr:m","w:Myself","w:Family"],
        loc:[{
            name:"南京",
            altname:"Nanjing"
        },
        {
            name:"芜湖",
            altname:"Wuhu"
        }],
        globe:[[31.348664422451343, 118.43109974993274],[32.05809727420399, 118.73981570624122],[31.802141724831543, 118.71407188457921]]
    },
    {
    content:"7号线全线探线",
    start:"2024-12-29",
    style:STYLE_NJ,
    tag:["tr:m","w:ZKY"],
    loc:[{
        name:"南京",
        altname:"Nanjing"
    }],
    globe:[[32.04478945320006, 118.79584747451658],[32.1106922652806, 118.77753240231422],[32.050340069867005, 118.7610735143828],[31.952630628700845, 118.70339846410715]]
    },
    {
    content:"总统府",
    start:"2024-12-21",
    style:STYLE_NJ,
    tag:["tr:c","w:Family"],
    loc:[{
        name:"南京",
        altname:"Nanjing"
    }],
    globe:[32.044974556291145, 118.79713780003296]
    },
    {
    content:"栖霞山",
    start:"2024-12-15",
    style:STYLE_NJ,
    tag:["tr:c","w:Family"],
    loc:[{
        name:"南京",
        altname:"Nanjing"
    }],
    globe:[32.155588278290665, 118.96514156846214]
    },
    {
    content:"上海ACM",
    start:"2024-11-16",
    end:"2024-11-17",
    style:STYLE_NEAR,
    tag:["tr:h","w:ZZX","w:CDR"],
    loc:[{
        name:"上海",
        altname:"Shanghai"
    }],
    globe:[[31.313231588039564, 121.39486107810913]]
    },
    {
    content:"华为Hackathon",
    start:"2024-10-25",
    end:"2024-10-27",
    style:STYLE_FAR,
    tag:["tr:p","tr:b","tr:m","tr:c","w:QHL","w:LLQ"],
    loc:[{
        name:"东莞",
        altname:"Dongguan"
    },{
        name:"深圳",
        altname:"Shenzhen"
    }],
    globe:[[22.638657123104284, 113.81369260397328],[22.901856027344433, 113.88496379278725],[22.523044239982784, 114.00061978555637]]
    },
    {
    content:"上海（公交地铁only）",
    start:"2024-8-19",
    end:"2024-8-26",
    style:STYLE_NEAR,
    tag:["tr:b","tr:m","tr:h","tr:c","w:ZYT","w:HDD"],
    loc:[{
        name:"镇江",
        altname:"Zhenjiang"
    },{
        name:"丹阳",
        altname:"Danyang"
    },{
        name:"常州",
        altname:"Changzhou"
    },{
        name:"江阴",
        altname:"Jiangyin"
    },{
        name:"无锡",
        altname:"Wuxi"
    },{
        name:"苏州",
        altname:"Suzhou"
    },{
        name:"上海",
        altname:"Shanghai"
    }],
    globe:[[32.188216596233424, 119.4243681156659],[31.81428080734463, 119.97309894481812],[31.904964877584717, 120.25947811188641],[31.529716333095237, 120.29989595465464],[31.301077139685685, 120.60014278958407],[31.226856320047386, 121.49881070489461]]
    },
    {
    content:"云南",
    start:"2024-7-29",
    end:"2024-8-7",
    style:STYLE_FAR,
    tag:["tr:b","tr:t","tr:p","tr:m","tr:h","tr:bi","w:ZKY"],
    loc:[{
        name:"昆明",
        altname:"Kunming"
    },{
        name:"大理",
        altname:"Dali"
    },{
        name:"丽江",
        altname:"Lijiang"
    },{
        name:"香格里拉",
        altname:"Shangrila"
    }],
    globe:[[24.881714199500408, 102.83766573606022],[25.60216161796883, 100.26137184782675],[26.86353717754515, 100.22841287292901],[27.82475725205385, 99.7065622656677],[24.881714199500408, 102.83766573606022],],
    page:"https://blog.hellholestudios.top/archives/1435",
    linkText:"Diary (Chinese)"    
    },
    {
    content:"浦口",
    start:"2024-6-9",
    style:STYLE_NJ,
    tag:["tr:b","tr:bi","tr:sh","w:ZKY"],
    loc:[{
        name:"南京",
        altname:"Nanjing"
    }],
    globe:[[32.09608585751714, 118.72161580160076],[32.131462142496346, 118.74228724991852]]
    },
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
        tag:["tr:bi","tr:m","tr:b","w:ZKY"],
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