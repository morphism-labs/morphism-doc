(()=>{"use strict";var e,a,d,c,f,b={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var d=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(d.exports,d,d.exports,r),d.loaded=!0,d.exports}r.m=b,r.c=t,e=[],r.O=(a,d,c,f)=>{if(!d){var b=1/0;for(i=0;i<e.length;i++){d=e[i][0],c=e[i][1],f=e[i][2];for(var t=!0,o=0;o<d.length;o++)(!1&f||b>=f)&&Object.keys(r.O).every((e=>r.O[e](d[o])))?d.splice(o--,1):(t=!1,f<b&&(b=f));if(t){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[d,c,f]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},d=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var f=Object.create(null);r.r(f);var b={};a=a||[null,d({}),d([]),d(d)];for(var t=2&c&&e;"object"==typeof t&&!~a.indexOf(t);t=d(t))Object.getOwnPropertyNames(t).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,r.d(f,b),f},r.d=(e,a)=>{for(var d in a)r.o(a,d)&&!r.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,d)=>(r.f[d](e,a),a)),[])),r.u=e=>"assets/js/"+({44:"60479fa4",177:"3d947c8b",334:"31699625",361:"e8c42455",408:"76db7a6d",569:"eac819ad",586:"71cc7c85",655:"465c0bc5",690:"25bec567",720:"98d1a41e",835:"3f6197d4",841:"7c1e7b23",866:"4a10ae38",933:"24734b3e",999:"ff883f18",1141:"720f9cb5",1201:"d4781eda",1243:"a0d49790",1282:"7c45cc48",1311:"fda70fd8",1394:"5c242b2e",1508:"81f29526",1544:"1483841d",1557:"c7ccd35b",1688:"fe9c53f2",1971:"9235c071",1995:"b4c00acc",2061:"82419dfd",2106:"9a9366b1",2138:"1a4e3797",2188:"ed22c7e9",2286:"4784893f",2322:"8d0b932e",2397:"b0d24208",2428:"9e78961b",2487:"d26d133a",2500:"f435c040",2634:"c4f5d8e4",2708:"af91f293",2736:"08b9f613",2792:"2ef0e7db",2960:"9e1db927",3046:"a0d75a43",3051:"74fdc727",3186:"59f4fb6c",3197:"59db22f4",3210:"5acb1cf6",3237:"b3ee98c3",3398:"acba9d96",3427:"829b4b9b",3457:"5bc5b9ce",3654:"a2db6fd6",3667:"e7a84acc",3679:"979f48c0",3732:"beb6ddce",3764:"c5f7ff1a",3797:"028d32dc",3838:"ec29823a",3894:"08313b4f",3918:"e8fcecf9",3961:"7a5975a7",4116:"e912b961",4145:"40b4f046",4300:"ca4c51aa",4305:"fac53bf8",4352:"e3bda051",4405:"79dc0904",4766:"57c15217",4788:"a4da47e1",4908:"fdc91eb1",4991:"e7f02677",5027:"52171187",5042:"d475c619",5107:"fb24aa13",5116:"95a7ae32",5130:"70e8639a",5223:"44bbd017",5678:"1a1587e1",5784:"a00dd934",5980:"39f485e7",5991:"ad8d1448",6019:"9b2efb4f",6039:"2a31694d",6107:"9ff57eaa",6142:"578ca001",6184:"bce3eedd",6232:"dcf2e50b",6290:"f619ad04",6371:"a1f831b5",6632:"405a8a84",6736:"4cbe5783",6819:"5a91095f",6913:"69301e8b",6935:"3250a443",6941:"c30bab43",6956:"e3875bab",6969:"14eb3368",7e3:"fb26d209",7049:"6f5ac92b",7098:"a7bd4aaa",7131:"a399e926",7220:"9d4e1be7",7275:"d8273606",7335:"c07bca7c",7362:"5aa3c257",7396:"4a269d4a",7430:"dfd8dfaf",7450:"e6f27cd2",7481:"2b4bd9da",7511:"5f126ac2",7762:"6a8ddb26",7855:"9b96db99",7975:"8613d4b8",7990:"22a82985",8237:"833a0690",8308:"6f037fd7",8318:"325638e1",8324:"72171cd8",8343:"33e57971",8371:"99b8a708",8401:"17896441",8451:"8b6091b0",8476:"38e6cd8b",8520:"c33d6554",8525:"61b1ff91",8581:"935f2afb",8656:"9fc9b620",8676:"7824cff9",8752:"8347fa88",8898:"f93d7a3b",8991:"46618904",9048:"a94703ab",9075:"066c1628",9200:"f6623e93",9248:"829cd294",9266:"618914bf",9344:"a5f26d61",9640:"2f19d5d4",9647:"5e95c892",9720:"6ba36391",9849:"02a35c22"}[e]||e)+"."+{44:"b4988a59",177:"055ac196",334:"8d77373b",361:"c205f87f",408:"0afe694c",569:"8f20034b",586:"13becfa5",655:"6bfdb2fc",690:"812fc80e",720:"fdb37ceb",835:"238ab34e",841:"aea15d1f",866:"1df24a9e",933:"3ad301c1",999:"96f67b10",1022:"47537bec",1141:"3ce027f4",1201:"3e83ba38",1243:"93ae43f6",1282:"04c9c3e7",1311:"0787519d",1394:"7d9485b2",1508:"947baab7",1544:"49c855e2",1557:"4cde6b32",1688:"6e252e5d",1965:"a43f3b33",1971:"e334b5d6",1995:"381aa0af",2061:"149637c3",2106:"870698a9",2138:"20b16744",2188:"1c15433a",2286:"379a37aa",2322:"0bc61134",2397:"f2adae3f",2428:"62dbfa4b",2487:"1abd825c",2500:"9a696798",2634:"535c32fa",2708:"a69e9a2b",2736:"068f6187",2792:"f26526ea",2960:"f6457615",3046:"2d924b63",3051:"cc9416e7",3186:"43a18475",3197:"da3f45e1",3210:"380e90a3",3237:"6f879f2f",3398:"e6a02dbe",3427:"52726404",3457:"db1d3170",3654:"ceb19896",3667:"1dc384b3",3679:"6c7e8b57",3732:"e4ab7eec",3764:"d115e6eb",3797:"1b698f04",3838:"1152981b",3894:"e70c1b97",3918:"ca3788e5",3961:"4c71ff63",4116:"ecb1b798",4145:"c692e7f7",4300:"4afb0a16",4305:"f81a28bb",4352:"39c2cc0c",4405:"36cbb9fb",4766:"e4bacde8",4788:"9e7d5274",4908:"05fb4897",4991:"3a3ab274",5027:"db8af086",5042:"8cd567b5",5107:"9f926910",5116:"b384d86d",5130:"f501f0e6",5223:"0b5ff9e6",5678:"0a402f8c",5784:"37307af4",5980:"b6b5a1c7",5991:"de8beca8",6019:"f59d0742",6039:"1579b616",6107:"8741717e",6142:"4379dd90",6184:"3c5b2e65",6232:"71098b45",6290:"5984a3c3",6371:"ffb4bd23",6632:"e1de3e69",6736:"9ebc7cfc",6819:"da8a5e5b",6913:"f649c8f2",6935:"c7e60e11",6941:"a9e78c88",6956:"3a4abd9c",6969:"f7e9da84",7e3:"c8fccdcf",7049:"7c64324c",7098:"f5612402",7131:"479fbb82",7220:"1011c091",7275:"a2846103",7335:"f81f8d3b",7362:"a2b68266",7396:"cb3dd122",7430:"e8e601fd",7450:"e04adcea",7481:"7dcb8475",7511:"bc68b92b",7762:"bb20b217",7855:"3262745a",7975:"57109ea3",7990:"7edbc764",8237:"c32e479c",8308:"de0d89b6",8318:"8beee3a7",8324:"54c5ee4c",8343:"6f4b72c2",8371:"3f8bf2d3",8401:"8d5d9a86",8451:"07d8a007",8476:"a8cc1a56",8520:"f1b6c17f",8525:"a74aaf75",8581:"03626451",8589:"ab857865",8656:"63fe2917",8676:"3096b8d9",8752:"e4b09989",8852:"4ffac5c4",8898:"84f16635",8991:"aa956f14",9040:"4747e79d",9048:"bc697f24",9075:"0ff362a7",9200:"1abeda03",9248:"ef34853e",9266:"1303992e",9344:"4bf1ba1b",9640:"440e58b9",9647:"f83fa08e",9720:"47baf76a",9849:"028a360c"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},f="morph-doc:",r.l=(e,a,d,b)=>{if(c[e])c[e].push(a);else{var t,o;if(void 0!==d)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==f+d){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",f+d),t.src=e),c[e]=[a];var l=(a,d)=>{t.onerror=t.onload=null,clearTimeout(s);var f=c[e];if(delete c[e],t.parentNode&&t.parentNode.removeChild(t),f&&f.forEach((e=>e(d))),a)return a(d)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/",r.gca=function(e){return e={17896441:"8401",31699625:"334",46618904:"8991",52171187:"5027","60479fa4":"44","3d947c8b":"177",e8c42455:"361","76db7a6d":"408",eac819ad:"569","71cc7c85":"586","465c0bc5":"655","25bec567":"690","98d1a41e":"720","3f6197d4":"835","7c1e7b23":"841","4a10ae38":"866","24734b3e":"933",ff883f18:"999","720f9cb5":"1141",d4781eda:"1201",a0d49790:"1243","7c45cc48":"1282",fda70fd8:"1311","5c242b2e":"1394","81f29526":"1508","1483841d":"1544",c7ccd35b:"1557",fe9c53f2:"1688","9235c071":"1971",b4c00acc:"1995","82419dfd":"2061","9a9366b1":"2106","1a4e3797":"2138",ed22c7e9:"2188","4784893f":"2286","8d0b932e":"2322",b0d24208:"2397","9e78961b":"2428",d26d133a:"2487",f435c040:"2500",c4f5d8e4:"2634",af91f293:"2708","08b9f613":"2736","2ef0e7db":"2792","9e1db927":"2960",a0d75a43:"3046","74fdc727":"3051","59f4fb6c":"3186","59db22f4":"3197","5acb1cf6":"3210",b3ee98c3:"3237",acba9d96:"3398","829b4b9b":"3427","5bc5b9ce":"3457",a2db6fd6:"3654",e7a84acc:"3667","979f48c0":"3679",beb6ddce:"3732",c5f7ff1a:"3764","028d32dc":"3797",ec29823a:"3838","08313b4f":"3894",e8fcecf9:"3918","7a5975a7":"3961",e912b961:"4116","40b4f046":"4145",ca4c51aa:"4300",fac53bf8:"4305",e3bda051:"4352","79dc0904":"4405","57c15217":"4766",a4da47e1:"4788",fdc91eb1:"4908",e7f02677:"4991",d475c619:"5042",fb24aa13:"5107","95a7ae32":"5116","70e8639a":"5130","44bbd017":"5223","1a1587e1":"5678",a00dd934:"5784","39f485e7":"5980",ad8d1448:"5991","9b2efb4f":"6019","2a31694d":"6039","9ff57eaa":"6107","578ca001":"6142",bce3eedd:"6184",dcf2e50b:"6232",f619ad04:"6290",a1f831b5:"6371","405a8a84":"6632","4cbe5783":"6736","5a91095f":"6819","69301e8b":"6913","3250a443":"6935",c30bab43:"6941",e3875bab:"6956","14eb3368":"6969",fb26d209:"7000","6f5ac92b":"7049",a7bd4aaa:"7098",a399e926:"7131","9d4e1be7":"7220",d8273606:"7275",c07bca7c:"7335","5aa3c257":"7362","4a269d4a":"7396",dfd8dfaf:"7430",e6f27cd2:"7450","2b4bd9da":"7481","5f126ac2":"7511","6a8ddb26":"7762","9b96db99":"7855","8613d4b8":"7975","22a82985":"7990","833a0690":"8237","6f037fd7":"8308","325638e1":"8318","72171cd8":"8324","33e57971":"8343","99b8a708":"8371","8b6091b0":"8451","38e6cd8b":"8476",c33d6554:"8520","61b1ff91":"8525","935f2afb":"8581","9fc9b620":"8656","7824cff9":"8676","8347fa88":"8752",f93d7a3b:"8898",a94703ab:"9048","066c1628":"9075",f6623e93:"9200","829cd294":"9248","618914bf":"9266",a5f26d61:"9344","2f19d5d4":"9640","5e95c892":"9647","6ba36391":"9720","02a35c22":"9849"}[e]||e,r.p+r.u(e)},(()=>{var e={5354:0,1869:0};r.f.j=(a,d)=>{var c=r.o(e,a)?e[a]:void 0;if(0!==c)if(c)d.push(c[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var f=new Promise(((d,f)=>c=e[a]=[d,f]));d.push(c[2]=f);var b=r.p+r.u(a),t=new Error;r.l(b,(d=>{if(r.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var f=d&&("load"===d.type?"missing":d.type),b=d&&d.target&&d.target.src;t.message="Loading chunk "+a+" failed.\n("+f+": "+b+")",t.name="ChunkLoadError",t.type=f,t.request=b,c[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,d)=>{var c,f,b=d[0],t=d[1],o=d[2],n=0;if(b.some((a=>0!==e[a]))){for(c in t)r.o(t,c)&&(r.m[c]=t[c]);if(o)var i=o(r)}for(a&&a(d);n<b.length;n++)f=b[n],r.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return r.O(i)},d=self.webpackChunkmorph_doc=self.webpackChunkmorph_doc||[];d.forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d))})()})();