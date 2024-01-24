"use strict";(self.webpackChunkmorph_doc=self.webpackChunkmorph_doc||[]).push([[8985],{9613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(r),u=a,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||s;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6849:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=r(8063),a=(r(9496),r(9613));const s={},i=void 0,o={unversionedId:"build-on-morph/sdk/interfaces/CoreCrossChainMessage",id:"build-on-morph/sdk/interfaces/CoreCrossChainMessage",title:"CoreCrossChainMessage",description:"@morph-l2/sdk / Exports / CoreCrossChainMessage",source:"@site/docs/build-on-morph/sdk/interfaces/CoreCrossChainMessage.md",sourceDirName:"build-on-morph/sdk/interfaces",slug:"/build-on-morph/sdk/interfaces/CoreCrossChainMessage",permalink:"/docs/build-on-morph/sdk/interfaces/CoreCrossChainMessage",draft:!1,editUrl:"https://github.com/morph-l2/morph-doc/tree/main/docs/build-on-morph/sdk/interfaces/CoreCrossChainMessage.md",tags:[],version:"current",frontMatter:{},sidebar:"DevSidebar",previous:{title:"BridgeAdapters",permalink:"/docs/build-on-morph/sdk/interfaces/BridgeAdapters"},next:{title:"CrossChainMessage",permalink:"/docs/build-on-morph/sdk/interfaces/CrossChainMessage"}},l={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"message",id:"message",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"messageNonce",id:"messagenonce",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"minGasLimit",id:"mingaslimit",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"sender",id:"sender",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"target",id:"target",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"value",id:"value",level:3},{value:"Defined in",id:"defined-in-5",level:4}],d={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/build-on-morph/sdk/intro"},"@morph-l2/sdk")," / ",(0,a.kt)("a",{parentName:"p",href:"../modules"},"Exports")," / CoreCrossChainMessage"),(0,a.kt)("h1",{id:"interface-corecrosschainmessage"},"Interface: CoreCrossChainMessage"),(0,a.kt)("p",null,"Core components of a cross chain message."),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"CoreCrossChainMessage"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"CrossChainMessage"},(0,a.kt)("inlineCode",{parentName:"a"},"CrossChainMessage"))))),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"CoreCrossChainMessage#message"},"message")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"CoreCrossChainMessage#messagenonce"},"messageNonce")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"CoreCrossChainMessage#mingaslimit"},"minGasLimit")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"CoreCrossChainMessage#sender"},"sender")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"CoreCrossChainMessage#target"},"target")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"CoreCrossChainMessage#value"},"value"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"message"},"message"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"message"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/morph-l2/sdk/tree/97c4394/src/interfaces/types.ts#L185"},"src/interfaces/types.ts:185")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"messagenonce"},"messageNonce"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"messageNonce"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/morph-l2/sdk/tree/97c4394/src/interfaces/types.ts#L186"},"src/interfaces/types.ts:186")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"mingaslimit"},"minGasLimit"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"minGasLimit"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/morph-l2/sdk/tree/97c4394/src/interfaces/types.ts#L188"},"src/interfaces/types.ts:188")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"sender"},"sender"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"sender"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/morph-l2/sdk/tree/97c4394/src/interfaces/types.ts#L183"},"src/interfaces/types.ts:183")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"target"},"target"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"target"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/morph-l2/sdk/tree/97c4394/src/interfaces/types.ts#L184"},"src/interfaces/types.ts:184")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"value"},"value"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"value"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/morph-l2/sdk/tree/97c4394/src/interfaces/types.ts#L187"},"src/interfaces/types.ts:187")))}m.isMDXComponent=!0}}]);