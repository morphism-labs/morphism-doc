"use strict";(self.webpackChunkmorph_doc=self.webpackChunkmorph_doc||[]).push([[2367],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var i=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),p=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),k=p(n),m=r,f=k["".concat(o,".").concat(m)]||k[m]||u[m]||l;return n?i.createElement(f,a(a({ref:t},s),{},{components:n})):i.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=m;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[k]="string"==typeof e?e:r,a[1]=d;for(var p=2;p<l;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var i=n(8063),r=(n(9496),n(9613));const l={},a=void 0,d={unversionedId:"build-on-morph/sdk/interfaces/L2Block",id:"build-on-morph/sdk/interfaces/L2Block",title:"L2Block",description:"@morph-l2/sdk / Exports / L2Block",source:"@site/docs/build-on-morph/sdk/interfaces/L2Block.md",sourceDirName:"build-on-morph/sdk/interfaces",slug:"/build-on-morph/sdk/interfaces/L2Block",permalink:"/docs/build-on-morph/sdk/interfaces/L2Block",draft:!1,editUrl:"https://github.com/morph-l2/morph-doc/tree/main/docs/build-on-morph/sdk/interfaces/L2Block.md",tags:[],version:"current",frontMatter:{},sidebar:"DevSidebar",previous:{title:"IBridgeAdapter",permalink:"/docs/build-on-morph/sdk/interfaces/IBridgeAdapter"},next:{title:"L2BlockWithTransactions",permalink:"/docs/build-on-morph/sdk/interfaces/L2BlockWithTransactions"}},o={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"_difficulty",id:"_difficulty",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"baseFeePerGas",id:"basefeepergas",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"difficulty",id:"difficulty",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"extraData",id:"extradata",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"gasLimit",id:"gaslimit",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"gasUsed",id:"gasused",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"hash",id:"hash",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"miner",id:"miner",level:3},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"nonce",id:"nonce",level:3},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"number",id:"number",level:3},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"parentHash",id:"parenthash",level:3},{value:"Inherited from",id:"inherited-from-10",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"stateRoot",id:"stateroot",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"timestamp",id:"timestamp",level:3},{value:"Inherited from",id:"inherited-from-11",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"transactions",id:"transactions",level:3},{value:"Inherited from",id:"inherited-from-12",level:4},{value:"Defined in",id:"defined-in-13",level:4}],s={toc:p},k="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/build-on-morph/sdk/intro"},"@morph-l2/sdk")," / ",(0,r.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / L2Block"),(0,r.kt)("h1",{id:"interface-l2block"},"Interface: L2Block"),(0,r.kt)("p",null,"JSON block representation when returned by L2Geth nodes. Just a normal block but with\nan added stateRoot field."),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Block")),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"L2Block"))))),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"L2Block#_difficulty"},"_","difficulty")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"L2Block#basefeepergas"},"baseFeePerGas")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"L2Block#difficulty"},"difficulty")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"L2Block#extradata"},"extraData")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"L2Block#gaslimit"},"gasLimit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"L2Block#gasused"},"gasUsed")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"L2Block#hash"},"hash")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"L2Block#miner"},"miner")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"L2Block#nonce"},"nonce")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"L2Block#number"},"number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"L2Block#parenthash"},"parentHash")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"L2Block#stateroot"},"stateRoot")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"L2Block#timestamp"},"timestamp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"L2Block#transactions"},"transactions"))),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"_difficulty"},"_","difficulty"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"_","difficulty"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,"Block.","_","difficulty"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,"node_modules/@ethersproject/abstract-provider/lib/index.d.ts:41"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"basefeepergas"},"baseFeePerGas"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"baseFeePerGas"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.kt)("p",null,"Block.baseFeePerGas"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,"node_modules/@ethersproject/abstract-provider/lib/index.d.ts:46"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"difficulty"},"difficulty"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"difficulty"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,r.kt)("p",null,"Block.difficulty"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,"node_modules/@ethersproject/abstract-provider/lib/index.d.ts:40"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"extradata"},"extraData"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"extraData"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,r.kt)("p",null,"Block.extraData"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,"node_modules/@ethersproject/abstract-provider/lib/index.d.ts:45"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"gaslimit"},"gasLimit"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"gasLimit"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,r.kt)("p",null,"Block.gasLimit"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,"node_modules/@ethersproject/abstract-provider/lib/index.d.ts:42"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"gasused"},"gasUsed"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"gasUsed"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,r.kt)("p",null,"Block.gasUsed"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,"node_modules/@ethersproject/abstract-provider/lib/index.d.ts:43"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"hash"},"hash"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"hash"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,r.kt)("p",null,"Block.hash"),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,"node_modules/@ethersproject/abstract-provider/lib/index.d.ts:35"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"miner"},"miner"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"miner"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,r.kt)("p",null,"Block.miner"),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,"node_modules/@ethersproject/abstract-provider/lib/index.d.ts:44"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"nonce"},"nonce"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"nonce"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,r.kt)("p",null,"Block.nonce"),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,"node_modules/@ethersproject/abstract-provider/lib/index.d.ts:39"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"number"},"number"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"number"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,r.kt)("p",null,"Block.number"),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,"node_modules/@ethersproject/abstract-provider/lib/index.d.ts:37"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"parenthash"},"parentHash"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"parentHash"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from-10"},"Inherited from"),(0,r.kt)("p",null,"Block.parentHash"),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,"node_modules/@ethersproject/abstract-provider/lib/index.d.ts:36"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"stateroot"},"stateRoot"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"stateRoot"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/morph-l2/sdk/tree/97c4394/src/interfaces/l2-provider.ts#L27"},"src/interfaces/l2-provider.ts:27")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"timestamp"},"timestamp"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"timestamp"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"inherited-from-11"},"Inherited from"),(0,r.kt)("p",null,"Block.timestamp"),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,"node_modules/@ethersproject/abstract-provider/lib/index.d.ts:38"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"transactions"},"transactions"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"transactions"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,r.kt)("h4",{id:"inherited-from-12"},"Inherited from"),(0,r.kt)("p",null,"Block.transactions"),(0,r.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,r.kt)("p",null,"node_modules/@ethersproject/abstract-provider/lib/index.d.ts:49"))}u.isMDXComponent=!0}}]);