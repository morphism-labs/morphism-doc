"use strict";(self.webpackChunkmorph_doc=self.webpackChunkmorph_doc||[]).push([[1040],{9613:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>g});var i=a(9496);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,i,n=function(t,e){if(null==t)return{};var a,i,n={},r=Object.keys(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=i.createContext({}),c=function(t){var e=i.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=c(t.components);return i.createElement(l.Provider,{value:e},t.children)},d="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=c(a),m=n,g=d["".concat(l,".").concat(m)]||d[m]||h[m]||r;return a?i.createElement(g,o(o({ref:e},p),{},{components:a})):i.createElement(g,o({ref:e},p))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[d]="string"==typeof t?t:n,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7701:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=a(8063),n=(a(9496),a(9613));const r={title:"Bridge",lang:"en-US",keywords:["morph","ethereum","rollup","layer2","validity proof","optimstic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimstic zk-rollup solution. Try it now!"},o="Deposit from Sepolia to Morph Testnet",s={unversionedId:"quick-start/bridge",id:"quick-start/bridge",title:"Bridge",description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimstic zk-rollup solution. Try it now!",source:"@site/docs/quick-start/4-bridge.md",sourceDirName:"quick-start",slug:"/quick-start/bridge",permalink:"/docs/quick-start/bridge",draft:!1,editUrl:"https://github.com/morph-l2/morph-doc/tree/main/docs/quick-start/4-bridge.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Bridge",lang:"en-US",keywords:["morph","ethereum","rollup","layer2","validity proof","optimstic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimstic zk-rollup solution. Try it now!"},sidebar:"StartSidebar",previous:{title:"Faucet",permalink:"/docs/quick-start/faucet"}},l={},c=[{value:"Instructions:",id:"instructions",level:2},{value:"How long does it take for a token to arrive to Morph Testnet ?",id:"how-long-does-it-take-for-a-token-to-arrive-to-morph-testnet-",level:2},{value:"Initiate withdrawal",id:"initiate-withdrawal",level:2},{value:"Waiting for the verification challenge period",id:"waiting-for-the-verification-challenge-period",level:2},{value:"Claim the Withdrawal",id:"claim-the-withdrawal",level:2}],p={toc:c},d="wrapper";function h(t){let{components:e,...r}=t;return(0,n.kt)(d,(0,i.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"deposit-from-sepolia-to-morph-testnet"},"Deposit from Sepolia to Morph Testnet"),(0,n.kt)("h2",{id:"instructions"},"Instructions:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open your MetaMask wallet and switch to the ",(0,n.kt)("strong",{parentName:"p"},"Sepolia")," network.\n",(0,n.kt)("img",{alt:"image1",src:a(85).Z,width:"1280",height:"896"}),"\n",(0,n.kt)("img",{alt:"image1",src:a(7740).Z,width:"1280",height:"612"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Within Morph\u2019s Bridge app, click ",(0,n.kt)("strong",{parentName:"p"},"Connect wallet"),", select MetaMask, and approve the connection if prompted."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image2",src:a(2410).Z,width:"1280",height:"706"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Make sure that ",(0,n.kt)("strong",{parentName:"li"},"Sepolia"),' is selected under \u2018From\u2019 and Morph L2 under \u2018To\u2019. If not, click the "\u2193" button to switch their positions.'),(0,n.kt)("li",{parentName:"ol"},"Select the token that you want to transfer. "),(0,n.kt)("li",{parentName:"ol"},"Click the Send button to initiate the deposit.\nNote: If this is your first time transferring an ERC20 token, you need to approve the ",(0,n.kt)("strong",{parentName:"li"},"Sepolia")," Bridge contract to access your ERC20 token.")),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"A window will pop up asking for confirmation of the transfer transaction, click ",(0,n.kt)("strong",{parentName:"li"},"Deposit"),".\n",(0,n.kt)("img",{alt:"image3",src:a(4841).Z,width:"1280",height:"1019"})),(0,n.kt)("li",{parentName:"ol"},"Click the Confirm button in MetaMask. Once the transfer transaction is finalized, the token will be deducted from your ",(0,n.kt)("strong",{parentName:"li"},"Sepolia")," wallet address.\n",(0,n.kt)("img",{alt:"image5",src:a(3732).Z,width:"1280",height:"693"})),(0,n.kt)("li",{parentName:"ol"},"While you wait, you can check status of your transactions by clicking on the transactions button.\n",(0,n.kt)("img",{alt:"image6",src:a(4234).Z,width:"1280",height:"655"}))),(0,n.kt)("h2",{id:"how-long-does-it-take-for-a-token-to-arrive-to-morph-testnet-"},"How long does it take for a token to arrive to Morph Testnet ?"),(0,n.kt)("p",null,"A token transfer from ",(0,n.kt)("strong",{parentName:"p"},"Sepolia")," to Morph Testnet may take 8 to 14 minutes (time for block to become Safe on ",(0,n.kt)("strong",{parentName:"p"},"Sepolia"),") before it appears in your Morph wallet. To check the progress of your deposit transactions, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click your wallet address at the top-right corner of the Bridge web app.\n",(0,n.kt)("img",{alt:"image6",src:a(1136).Z,width:"1280",height:"725"})),(0,n.kt)("li",{parentName:"ol"},"Click on Transactions. A pop-up panel will display your recent transactions.")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Note: For deposit transactions (L1 -> L2), once your transaction is confirmed as Safe on ",(0,n.kt)("strong",{parentName:"p"},"Sepolia")," (8 to 14 minutes), you will see a ",(0,n.kt)("strong",{parentName:"p"},"Success")," status. Your funds will then be relayed to L2.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image8",src:a(7418).Z,width:"1280",height:"848"}),"\n3. Click on the most recent ",(0,n.kt)("strong",{parentName:"p"},"Sepolia")," transaction hash.\n",(0,n.kt)("img",{alt:"image9",src:a(4571).Z,width:"1280",height:"702"}),"\n4. You will be taken to a Transaction Details page in the Explorer. Verify your transaction status (this transaction is confirmed on ",(0,n.kt)("strong",{parentName:"p"},"Sepolia"),").\n",(0,n.kt)("img",{alt:"image10",src:a(821).Z,width:"1280",height:"619"}),"\n5. Once your transaction status shows ",(0,n.kt)("em",{parentName:"p"},"success")," on L2, return to the Bridge app to see a transaction hash and funds in your Morph L2 wallet.\n",(0,n.kt)("img",{alt:"image11",src:a(7478).Z,width:"1280",height:"760"}),"\n",(0,n.kt)("img",{alt:"image12",src:a(9373).Z,width:"1280",height:"631"})),(0,n.kt)("h1",{id:"withdraw-from-morph-testnet-to-sepolia"},"Withdraw from Morph Testnet to Sepolia"),(0,n.kt)("p",null,"To withdraw funds from Morph Testnet, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Initiate the withdrawal on Morph Testnet."),(0,n.kt)("li",{parentName:"ol"},"Wait for the withdrawal root to be published on L1 (",(0,n.kt)("strong",{parentName:"li"},"Sepolia"),"). This usually takes a few minutes, but it may take longer during outages."),(0,n.kt)("li",{parentName:"ol"},"Prove withdrawal."),(0,n.kt)("li",{parentName:"ol"},"Wait for the verification challenge period, which lasts seven days from the time the withdrawal is proven on L1 (",(0,n.kt)("strong",{parentName:"li"},"Sepolia"),")."),(0,n.kt)("li",{parentName:"ol"},"Claim your withdrawal.")),(0,n.kt)("h2",{id:"initiate-withdrawal"},"Initiate withdrawal"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click Connect Wallet and select MetaMask. If prompted, approve the connection in your wallet."),(0,n.kt)("li",{parentName:"ol"},"Select Withdraw. Choose the asset and amount you wish to withdraw.\n",(0,n.kt)("img",{alt:"image13",src:a(1984).Z,width:"1280",height:"734"})),(0,n.kt)("li",{parentName:"ol"},"Click Send ETH to ",(0,n.kt)("strong",{parentName:"li"},"Sepolia"),".\n",(0,n.kt)("img",{alt:"image14",src:a(1907).Z,width:"1280",height:"697"})),(0,n.kt)("li",{parentName:"ol"},"Click Initiate withdrawal, Wait for a few minutes to confirm. After it is finished, you need to switch the network in your wallet and then prove the withdrawal on ",(0,n.kt)("strong",{parentName:"li"},"Sepolia"),".\n",(0,n.kt)("img",{alt:"image15",src:a(9738).Z,width:"1280",height:"867"}),(0,n.kt)("img",{alt:"image16",src:a(8366).Z,width:"1280",height:"597"})),(0,n.kt)("li",{parentName:"ol"},"Approve the withdrawal again in your wallet.\n",(0,n.kt)("img",{alt:"image17",src:a(1061).Z,width:"1280",height:"802"}),(0,n.kt)("img",{alt:"image18",src:a(6234).Z,width:"1280",height:"849"}))),(0,n.kt)("h2",{id:"waiting-for-the-verification-challenge-period"},"Waiting for the verification challenge period"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click your address in the top right corner. "),(0,n.kt)("li",{parentName:"ol"},"Click Transactions and then Withdrawals. This will display a list of your recent withdrawals and their status. Or you can find a notice in the top area, by clicking the button View Account ( see the pic below)\n",(0,n.kt)("img",{alt:"image19",src:a(2980).Z,width:"846",height:"650"}),(0,n.kt)("img",{alt:"image20",src:a(2622).Z,width:"1280",height:"768"}),(0,n.kt)("img",{alt:"image21",src:a(9375).Z,width:"1280",height:"653"}))),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You can search for the transaction hash on Morph Explorer.\n",(0,n.kt)("img",{alt:"image22",src:a(4307).Z,width:"1280",height:"680"}),"\n",(0,n.kt)("img",{alt:"image23",src:a(7845).Z,width:"1280",height:"730"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the L1 State Root Submission Tx to see when the transaction was written to L1 (",(0,n.kt)("strong",{parentName:"p"},"Sepolia"),").\n",(0,n.kt)("img",{alt:"image24",src:a(6360).Z,width:"1280",height:"746"}),"\n",(0,n.kt)("img",{alt:"image25",src:a(3088).Z,width:"1280",height:"615"})))),(0,n.kt)("h2",{id:"claim-the-withdrawal"},"Claim the Withdrawal"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Once the challenge period is over, the status will change to Claim."),(0,n.kt)("li",{parentName:"ol"},"Click Claim Withdrawal.\n",(0,n.kt)("img",{alt:"image26",src:a(2736).Z,width:"1280",height:"863"})),(0,n.kt)("li",{parentName:"ol"},"Confirm the withdrawal in the wallet.\n",(0,n.kt)("img",{alt:"image27",src:a(8034).Z,width:"1280",height:"671"})),(0,n.kt)("li",{parentName:"ol"},"Wait until the withdrawal is completed.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image28",src:a(7151).Z,width:"1280",height:"704"})))}h.isMDXComponent=!0},7740:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/01-9ed516c3c9395aa9e204284d274dfec0.png"},2410:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/02-c7db45542035a3a102b2619441b4feae.png"},85:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/03-cbf0455d8eb4e3d0d5b7969d8913e219.png"},4841:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/04-5513f29a8fd5e3db48114a267d35d178.png"},3732:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/05-20c4164541327ab23af03b4130fd1e9e.png"},4234:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/06-7426828bc31ec784fe5b10fd568f26b1.png"},1136:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/07-659ba830344e9dd673ed39fe8ead5b74.png"},7418:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/08-bb9db3833ec4d99af3edff3f08172ebb.png"},4571:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/09-2420761d8187df15eccd17fbb1a914b6.png"},821:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/10-12562061793470b59c95473f113e7e37.png"},7478:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/11-c8d5db4cf0f1eab7622a78bf568fec8b.png"},9373:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/12-02be6f2ce3438cd536215d5f7ae69d93.png"},1984:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/13-43f85bf90282874ea540a48dc4c87e72.png"},1907:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/14-520f5257f21069e2a3e8d6306f724c7a.png"},9738:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/15-953c599dc5c935ddda7b8efd1d57a163.png"},8366:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/16-6450d4aed398104c0984edf347814a3f.png"},1061:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/17-1ed9790dfd51e4b3409407878d67d21b.png"},6234:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/18-264f6f30a6581c58c84145940a97dec6.png"},2980:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/19-1148378414ff97db301bf9210cb8f3d5.png"},2622:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/20-4d67cf476753e3c73a5b37f42ca61fac.png"},9375:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/21-061b6ba842232cb84df95b0a22e35e38.png"},4307:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/22-2e320ef3b5dbe7ed94bd9ae00101ec72.png"},7845:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/23-4ad897c2cf9aa908ff228e1424924fad.png"},6360:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/24-43dedde0b237054c7e81b818af46be9a.png"},3088:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/25-3a4cb0fa10787551db9b6546816c41e4.png"},2736:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/26-60d9bbd20aba240e43a1f271c3e0642e.png"},8034:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/27-bd2e820d1f739231e7a0f828304b1e52.png"},7151:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/28-5b7c944a9fd26b01c727c5b60da317da.png"}}]);