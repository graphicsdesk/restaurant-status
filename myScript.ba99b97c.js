parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"GoEG":[function(require,module,exports) {
mapboxgl.accessToken="pk.eyJ1IjoiaGFvaGFvbTEiLCJhIjoiY2tlenMwMDdhMDh5dDJxcWk1MXRpNWdrcSJ9.WJ50sc0kycv1demj-0tlMQ";var e=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/light-v10",center:[-73.9626,40.8075],zoom:13.8});e.on("load",function(){e.addSource("places",{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",properties:{name:"Chandni",status:"Closed",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9610781,40.8011486]}},{type:"Feature",properties:{name:"Zanny's Cafe",status:"Closed",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9616751,40.8003081]}},{type:"Feature",properties:{name:"Roasted Masala",status:"Closed",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.96377,40.798561]}},{type:"Feature",properties:{name:"Elsa Cafe and Restaurant",status:"Closed",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9635283,40.7980143]}},{type:"Feature",properties:{name:"Uncle Luoyang",status:"Closed",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.966261,40.80023]}},{type:"Feature",properties:{name:"The Ellington",status:"Closed",tables:0,loan:"$150k-$350k",jobs:18},geometry:{type:"Point",coordinates:[-73.96584250000001,40.8006579]}},{type:"Feature",properties:{name:"La Toulousaine",status:"Closed",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9656775999999,40.8008758]}},{type:"Feature",properties:{name:"The Hamilton",status:"Closed",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.96439000000001,40.80277279999999]}},{type:"Feature",properties:{name:"Flat Top",status:"Closed",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9584781,40.8100471]}},{type:"Feature",properties:{name:"Harlem's Floridita",status:"Closed",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.960982,40.817997999999996]}},{type:"Feature",properties:{name:"Cascabel Taqueria",status:"Closed",tables:0,loan:"$150k-$350k",jobs:0},geometry:{type:"Point",coordinates:[-73.9679002,40.80297279999999]}},{type:"Feature",properties:{name:"107 West",status:"Closed",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9681495,40.802732299999995]}},{type:"Feature",properties:{name:"The West End Lounge",status:"Closed",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9683426,40.802297700000004]}},{type:"Feature",properties:{name:"Szechuan Garden",status:"Closed",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.96754709999999,40.800545899999996]}},{type:"Feature",properties:{name:"The Manchester Diner",status:"Closed",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.96700909999998,40.8029095]}},{type:"Feature",properties:{name:"Saiguette",status:"Closed",tables:0,loan:"$150k-$350k",jobs:21},geometry:{type:"Point",coordinates:[-73.96273120000001,40.7989928999999]}},{type:"Feature",properties:{name:"Zaad",status:"Outdoor",tables:5,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9648225,40.8011679]}},{type:"Feature",properties:{name:"Baylander Steel Beach",status:"Outdoor",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9654375,40.8134842]}},{type:"Feature",properties:{name:"The Tang",status:"Closed",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9663666,40.7999805]}},{type:"Feature",properties:{name:"Chokolat Patisserie",status:"Outdoor",tables:4,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9607338,40.8129171]}},{type:"Feature",properties:{name:"Miss Mamie's Spoonbread Too",status:"Outdoor",tables:4,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.96090600000001,40.8014423]}},{type:"Feature",properties:{name:"Red Hot Hot Pot",status:"Outdoor",tables:10,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9613308,40.8015291]}},{type:"Feature",properties:{name:"Ortomare Ristorante Pizzeria",status:"Outdoor",tables:10,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9617471,40.8011789]}},{type:"Feature",properties:{name:"Crêpes on Columbus",status:"Outdoor",tables:8,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9618311,40.801051799999996]}},{type:"Feature",properties:{name:"Don Ramon",status:"Outdoor",tables:6,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9618127999999,40.8002891]}},{type:"Feature",properties:{name:"The Calaveras",status:"Outdoor",tables:13,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9623762,40.7995536]}},{type:"Feature",properties:{name:"Coma Bueno",status:"Outdoor",tables:6,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9629607999999,40.7996425]}},{type:"Feature",properties:{name:"Curry King",status:"Outdoor",tables:3,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9629607999999,40.7995654]}},{type:"Feature",properties:{name:"Mighty Catch",status:"Outdoor",tables:4,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.963059,40.799521]}},{type:"Feature",properties:{name:"Bob's Your Uncle",status:"Outdoor",tables:8,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.962823,40.7987746]}},{type:"Feature",properties:{name:"Ranchito",status:"Outdoor",tables:4,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9662705,40.8000976]}},{type:"Feature",properties:{name:"Grain House",status:"Outdoor",tables:3,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9655816,40.800022600000005]}},{type:"Feature",properties:{name:"Living Thai",status:"Outdoor",tables:4,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9655849999999,40.800036999999996]}},{type:"Feature",properties:{name:"Acosta Restaurant",status:"Outdoor",tables:5,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9661291,40.8004399999999]}},{type:"Feature",properties:{name:"Makana",status:"Outdoor",tables:4,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.965222,40.800417100000004]}},{type:"Feature",properties:{name:"Mama's Pizzeria",status:"Outdoor",tables:3,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9653002,40.8004615]}},{type:"Feature",properties:{name:"Dive 106",status:"Outdoor",tables:12,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9658536,40.8007864]}},{type:"Feature",properties:{name:"Awash Ethiopian Restaurant",status:"Outdoor",tables:11,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9652543,40.800686299999995]}},{type:"Feature",properties:{name:"Nobody Told Me",status:"Outdoor",tables:11,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.96510500000001,40.8007904]}},{type:"Feature",properties:{name:"Tropical Sensation",status:"Outdoor",tables:7,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9650705999999,40.800853000000004]}},{type:"Feature",properties:{name:"Thai Market",status:"Outdoor",tables:22,loan:"$350k-$500k",jobs:44},geometry:{type:"Point",coordinates:[-73.9652933,40.8013469]}},{type:"Feature",properties:{name:"Panchos",status:"Outdoor",tables:1,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9653026,40.8014793]}},{type:"Feature",properties:{name:"La Piccola Cucina",status:"Outdoor",tables:3,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9653026,40.8014793]}},{type:"Feature",properties:{name:"Tacqueria y Fonda La Mexicana",status:"Outdoor",tables:2,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9652074999999,40.8016168]}},{type:"Feature",properties:{name:"Spice",status:"Outdoor",tables:6,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9645585,40.8015256]}},{type:"Feature",properties:{name:"Amity Hall",status:"Outdoor",tables:23,loan:"$150k-$350k",jobs:25},geometry:{type:"Point",coordinates:[-73.96470079999999,40.8022031]}},{type:"Feature",properties:{name:"Lion's Head Tavern",status:"Outdoor",tables:10,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9640539999999,40.80215379999999]}},{type:"Feature",properties:{name:"Roti Roll",status:"Outdoor",tables:8,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.96440600000001,40.802609000000004]}},{type:"Feature",properties:{name:"Suite",status:"Outdoor",tables:4,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9644394,40.8025791]}},{type:"Feature",properties:{name:"Elis",status:"Outdoor",tables:11,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9642935999999,40.8028403]}},{type:"Feature",properties:{name:"Marlow Bistro",status:"Outdoor",tables:16,loan:"$150k-$350k",jobs:22},geometry:{type:"Point",coordinates:[-73.9642863,40.802973]}},{type:"Feature",properties:{name:"1020",status:"Outdoor",tables:13,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.96396419999991,40.80326420000001]}},{type:"Feature",properties:{name:"V&T",status:"Outdoor",tables:16,loan:"$150k-$350k",jobs:18},geometry:{type:"Point",coordinates:[-73.9639208999999,40.8033908]}},{type:"Feature",properties:{name:"Hungarian Pastry Shop",status:"Outdoor",tables:15,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9639459,40.8035598]}},{type:"Feature",properties:{name:"Tartina",status:"Outdoor",tables:11,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.96374240000002,40.8036683]}},{type:"Feature",properties:{name:"Arts and Crafts",status:"Outdoor",tables:7,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9610072,40.8065685]}},{type:"Feature",properties:{name:"Elysian Fields",status:"Outdoor",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9592048,40.8088413]}},{type:"Feature",properties:{name:"Massawa",status:"Outdoor",tables:9,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.95859890000001,40.809783200000005]}},{type:"Feature",properties:{name:"Bar 314",status:"Outdoor",tables:7,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.95845909999998,40.8109046999999]}},{type:"Feature",properties:{name:"Max Caffe",status:"Outdoor",tables:10,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9584291,40.81091970000001]}},{type:"Feature",properties:{name:"El Nuevo Tina",status:"Outdoor",tables:2,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.95642790000001,40.8140406]}},{type:"Feature",properties:{name:"Dear Mama",status:"Outdoor",tables:4,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.95862120000001,40.8169696]}},{type:"Feature",properties:{name:"Dinosaur BBQ",status:"Outdoor",tables:29,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.96091740000001,40.818031899999994]}},{type:"Feature",properties:{name:"123BSB",status:"Outdoor",tables:20,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9608423,40.8181571]}},{type:"Feature",properties:{name:"Jin Ramen",status:"Outdoor",tables:6,loan:"$150k-$350k",jobs:23},geometry:{type:"Point",coordinates:[-73.9588495,40.815394399999995]}},{type:"Feature",properties:{name:"Expat",status:"Outdoor",tables:10,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.960078,40.815509999999996]}},{type:"Feature",properties:{name:"Toast",status:"Outdoor",tables:10,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9594250999999,40.8147935]}},{type:"Feature",properties:{name:"Craftsman",status:"Outdoor",tables:13,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.959471,40.8146844]}},{type:"Feature",properties:{name:"Chapati House",status:"Outdoor",tables:3,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9595628,40.814620399999995]}},{type:"Feature",properties:{name:"Falafel on Broadway",status:"Outdoor",tables:4,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9596088,40.814511200000005]}},{type:"Feature",properties:{name:"El Porton",status:"Outdoor",tables:11,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9596088,40.814511200000005]}},{type:"Feature",properties:{name:"Bettolona",status:"Outdoor",tables:8,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.95983829999999,40.8141969]}},{type:"Feature",properties:{name:"Pisticci",status:"Outdoor",tables:18,loan:"$350k-$500k",jobs:40},geometry:{type:"Point",coordinates:[-73.9602515999999,40.814332799999995]}},{type:"Feature",properties:{name:"Shake Shack",status:"Outdoor",tables:8,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9643383,40.8079743]}},{type:"Feature",properties:{name:"Haagen-Dazs",status:"Outdoor",tables:4,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9654262999999,40.8064456]}},{type:"Feature",properties:{name:"Wu + Nussbaum",status:"Outdoor",tables:11,loan:"$150k-$350k",jobs:28},geometry:{type:"Point",coordinates:[-73.96570600000001,40.8061198]}},{type:"Feature",properties:{name:"Community",status:"Outdoor",tables:11,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9657625999999,40.8059632999999]}},{type:"Feature",properties:{name:"Le Monde",status:"Outdoor",tables:15,loan:"$350k-$500k",jobs:49},geometry:{type:"Point",coordinates:[-73.9658847,40.8058863]}},{type:"Feature",properties:{name:"Pinkberry",status:"Outdoor",tables:2,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.966196,40.805315]}},{type:"Feature",properties:{name:"Hex & Co",status:"Outdoor",tables:3,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.96623259999998,40.8052641]}},{type:"Feature",properties:{name:"Famiglia",status:"Outdoor",tables:4,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.966647,40.804876]}},{type:"Feature",properties:{name:"Fumo",status:"Outdoor",tables:23,loan:"$150k-$350k",jobs:50},geometry:{type:"Point",coordinates:[-73.96811720000001,40.80283789999999]}},{type:"Feature",properties:{name:"Serafina",status:"Outdoor",tables:21,loan:"$150k-$350k",jobs:12},geometry:{type:"Point",coordinates:[-73.9683376,40.8004902]}},{type:"Feature",properties:{name:"Tap a Keg",status:"Outdoor",tables:11,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9684709,40.8003487]}},{type:"Feature",properties:{name:"Café Du Soleil",status:"Outdoor",tables:32,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9684479,40.8000562]}},{type:"Feature",properties:{name:"Jerusalem Restaurant",status:"Outdoor",tables:3,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.96858399999991,40.799754899999996]}},{type:"Feature",properties:{name:"Sun-chan",status:"Outdoor",tables:5,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.968717,40.7995038]}},{type:"Feature",properties:{name:"Ollie's",status:"Outdoor",tables:8,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9687503,40.7994458999999]}},{type:"Feature",properties:{name:"Aangan ",status:"Outdoor",tables:5,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9687850999999,40.7993945]}},{type:"Feature",properties:{name:"McDonalds",status:"Outdoor",tables:2,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9676444,40.7999227]}},{type:"Feature",properties:{name:"Mama's Too",status:"Outdoor",tables:7,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9676358,40.8008185]}},{type:"Feature",properties:{name:"Calle Ocho",status:"Outdoor",tables:13,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9676468,40.8009753]}},{type:"Feature",properties:{name:"108 Food",status:"Outdoor",tables:6,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9673342999999,40.8027098]}},{type:"Feature",properties:{name:"Koronet",status:"Outdoor",tables:6,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9661291,40.8044117]}},{type:"Feature",properties:{name:"Mel's",status:"Outdoor",tables:12,loan:"$150k-$350k",jobs:27},geometry:{type:"Point",coordinates:[-73.9660373,40.8044372]}},{type:"Feature",properties:{name:"Tom's",status:"Outdoor",tables:10,loan:"$150k-$350k",jobs:24},geometry:{type:"Point",coordinates:[-73.9654415,40.805449100000004]}},{type:"Feature",properties:{name:"Symposium",status:"Outdoor",tables:4,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.964326,40.805415999999994]}},{type:"Feature",properties:{name:"Max Soha",status:"Outdoor",tables:6,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9581736,40.8113136]}},{type:"Feature",properties:{name:"The Heights",status:"Outdoor",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9663587,40.8051769]}},{type:"Feature",properties:{name:"Giovanni's",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9609863,40.8014826]}},{type:"Feature",properties:{name:"Hunan Chen's Kitchen",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9611853,40.8012776]}},{type:"Feature",properties:{name:"Freda's",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.96131379999999,40.8009166999999]}},{type:"Feature",properties:{name:"Demitasse",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9618127999999,40.8002891]}},{type:"Feature",properties:{name:"Sheshe",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.962069,40.799918]}},{type:"Feature",properties:{name:"Chirping Chicken",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.96328220000001,40.7991484]}},{type:"Feature",properties:{name:"Doaba Deli",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9623762,40.7993994]}},{type:"Feature",properties:{name:"Mekong",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9632041,40.7983689]}},{type:"Feature",properties:{name:"Benny's",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.96378409999998,40.798287200000004]}},{type:"Feature",properties:{name:"Suma",status:"Takeout",tables:4,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9653026,40.8014793]}},{type:"Feature",properties:{name:"Domino's",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9647422,40.801243299999996]}},{type:"Feature",properties:{name:"Happy Hot Hunan",status:"Outdoor",tables:2,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9646963,40.8013524]}},{type:"Feature",properties:{name:"Subway",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9646963,40.8014295]}},{type:"Feature",properties:{name:"Insomnia",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9637815,40.803489299999995]}},{type:"Feature",properties:{name:"Hula Poke",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9637815,40.803489299999995]}},{type:"Feature",properties:{name:"The New York Basics",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9624786999999,40.805454299999994]}},{type:"Feature",properties:{name:"Strokos",status:"Takeout",tables:0,loan:"$150k-$350k",jobs:40},geometry:{type:"Point",coordinates:[-73.9624786999999,40.805454299999994]}},{type:"Feature",properties:{name:"Hamilton Deli",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9610952,40.8064744]}},{type:"Feature",properties:{name:"Friedman's",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9597661,40.8082925]}},{type:"Feature",properties:{name:"Subs Conscious",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9591987,40.8089695]}},{type:"Feature",properties:{name:"Sliced",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9591141,40.8089857]}},{type:"Feature",properties:{name:"Appletree Deli",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.95889939999991,40.8093936]}},{type:"Feature",properties:{name:"Dunkin",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9584893,40.809807899999996]}},{type:"Feature",properties:{name:"Dragon Sushi",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9583998,40.811060100000006]}},{type:"Feature",properties:{name:"Dun Huang",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9583141,40.811138]}},{type:"Feature",properties:{name:"Mellow",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9583141,40.811138]}},{type:"Feature",properties:{name:"Nikko",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.95787750000001,40.811460499999995]}},{type:"Feature",properties:{name:"El Puerto",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.95642790000001,40.8140406]}},{type:"Feature",properties:{name:"Lincoln Fried Chicken",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9581293,40.8150606]}},{type:"Feature",properties:{name:"Go Go Curry",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9578727999999,40.8155334]}},{type:"Feature",properties:{name:"Starbucks",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.959122,40.815045]}},{type:"Feature",properties:{name:"Oasis Jimma Juice Bar",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9591725,40.8149599]}},{type:"Feature",properties:{name:"Peking Garden",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9591725,40.8149599]}},{type:"Feature",properties:{name:"Capt Loui",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9597465,40.8142995]}},{type:"Feature",properties:{name:"Kuro Kuma",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9600902,40.8140929]}},{type:"Feature",properties:{name:"La Salle Dumpling Room",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.95984820000001,40.8140597]}},{type:"Feature",properties:{name:"Broadway Au Lait",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9611314,40.811389399999996]}},{type:"Feature",properties:{name:"Prêt a Manger",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9643383,40.807928100000005]}},{type:"Feature",properties:{name:"Sweetgreen",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.96488000000001,40.807261700000005]}},{type:"Feature",properties:{name:"Starbucks",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.96491479999999,40.807103399999995]}},{type:"Feature",properties:{name:"Dos Toros",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9652409999999,40.8065907]}},{type:"Feature",properties:{name:"Mill",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.965745,40.8060994]}},{type:"Feature",properties:{name:"Shaking Crab",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9662306,40.8052649]}},{type:"Feature",properties:{name:"Samad's",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9663587,40.8051769]}},{type:"Feature",properties:{name:"Pressed Juicery",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.96669820000001,40.8047867]}},{type:"Feature",properties:{name:"Kung Fu Tea",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9667079,40.8046958]}},{type:"Feature",properties:{name:"Five Guys",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9667861,40.80461939999999]}},{type:"Feature",properties:{name:"Chipotle",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.96684690000001,40.804474600000006]}},{type:"Feature",properties:{name:"Six Corners Marketplace",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.96815440000002,40.8012986]}},{type:"Feature",properties:{name:"Broadway Pizza",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9686711,40.7996265]}},{type:"Feature",properties:{name:"Ben & Jerry's",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.96783429999991,40.7998219]}},{type:"Feature",properties:{name:"Malaysian Grill",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9677821,40.7994024]}},{type:"Feature",properties:{name:"Silver Moon Bakery",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9676712999999,40.8005179]}},{type:"Feature",properties:{name:"Koko Wings",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9673689,40.8009247]}},{type:"Feature",properties:{name:"Absolute Bagels",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9673998,40.802516]}},{type:"Feature",properties:{name:"Gong Cha",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9670764999999,40.8031948]}},{type:"Feature",properties:{name:"Atlas Kitchen",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9669785999999,40.8032407]}},{type:"Feature",properties:{name:"HMart Cafe",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.96642759999999,40.8036251]}},{type:"Feature",properties:{name:"Panda Express",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.96594540000001,40.804501200000004]}},{type:"Feature",properties:{name:"Tea Magic",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.9655844999999,40.8052781]}},{type:"Feature",properties:{name:"Oren's",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.96530759999999,40.8055818]}},{type:"Feature",properties:{name:"Dig Inn",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.96534840000001,40.8055612]}},{type:"Feature",properties:{name:"Milano Market",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.96524040000001,40.805732899999995]}},{type:"Feature",properties:{name:"Junzi",status:"Takeout",tables:0,loan:"$0-$150k",jobs:0},geometry:{type:"Point",coordinates:[-73.96506740000001,40.805795700000004]}},{type:"Feature",properties:{name:"West Side Market",status:"Takeout",tables:0,loan:"$500k-$1mm",jobs:160},geometry:{type:"Point",coordinates:[-73.9714889999999,40.795879]}}]}}),e.addLayer({id:"places",type:"circle",source:"places",paint:{"circle-radius":8,"circle-opacity":.5,"circle-stroke-width":1,"circle-color":["match",["get","status"],"Closed","#e6a030","Outdoor","#56b4ea","#cc79a7"],"circle-stroke-color":["match",["get","status"],"Closed","#e6a030","Outdoor","#56b4ea","#cc79a7"]}});var t=new mapboxgl.Popup({closeButton:!1,closeOnClick:!1,className:"popup"});e.on("mouseenter","places",function(o){e.getCanvas().style.cursor="pointer";var a=o.features[0].geometry.coordinates.slice(),s=o.features[0].properties.name,r=o.features[0].properties.status,n="none";for(0!==o.features[0].properties.tables&&(n=o.features[0].properties.tables);Math.abs(o.lngLat.lng-a[0])>180;)a[0]+=o.lngLat.lng>a[0]?360:-360;var p="<p class = 'name'>"+s+"</p><p class = 'status'>Current status: "+r+"</p><p class = 'tables'>Tables: "+n+"</p>";t.setLngLat(a).setHTML(p).addTo(e)}),e.on("mouseleave","places",function(){e.getCanvas().style.cursor="",t.remove()})});
},{}]},{},["GoEG"], "script")
//# sourceMappingURL=myScript.ba99b97c.js.map