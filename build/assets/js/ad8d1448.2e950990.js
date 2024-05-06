"use strict";(self.webpackChunkmorph_doc=self.webpackChunkmorph_doc||[]).push([[5991],{3042:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=i(3274),r=i(2333);const o={title:"Morph's Architecture",lang:"en-US",keywords:["morph","layer2","validity proof","optimstic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimstic zk-rollup solution. Try it now!"},s=void 0,a={id:"about-morph/morphs-architecture",title:"Morph's Architecture",description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimstic zk-rollup solution. Try it now!",source:"@site/docs/about-morph/4-morphs-architecture.md",sourceDirName:"about-morph",slug:"/about-morph/morphs-architecture",permalink:"/docs/about-morph/morphs-architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/morph-l2/morph-doc/tree/main/docs/about-morph/4-morphs-architecture.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Morph's Architecture",lang:"en-US",keywords:["morph","layer2","validity proof","optimstic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimstic zk-rollup solution. Try it now!"},sidebar:"AboutSidebar",previous:{title:"Where Should I Start?",permalink:"/docs/about-morph/where-should-i-start"},next:{title:"Morph's Vision and Mission",permalink:"/docs/about-morph/morphs-vision-and-mission"}},c={},l=[{value:"The Modular Approach in Layer 2",id:"the-modular-approach-in-layer-2",level:2},{value:"Independent yet Collaborative Functions",id:"independent-yet-collaborative-functions",level:2},{value:"Diverse Roles Underpinning the Architecture",id:"diverse-roles-underpinning-the-architecture",level:2}];function h(e){const t={a:"a",admonition:"admonition",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:'This overview offers a concise introduction to Morph\u2019s rollup technology stack. For an in-depth understanding, please refer to the "How Morph Works" section of our documentation.'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Archi",src:i(1822).A+"",width:"2880",height:"1664"})}),"\n",(0,n.jsx)(t.h2,{id:"the-modular-approach-in-layer-2",children:"The Modular Approach in Layer 2"}),"\n",(0,n.jsx)(t.p,{children:"Traditionally, the concept of modularity has been applied to Layer 1 blockchains, segmenting them into distinct layers. At Morph, we've extended this modular philosophy to Layer 2, building our platform around this innovative principle."}),"\n",(0,n.jsx)(t.p,{children:"In a typical Layer 1 blockchain, the architecture consists of four major layers:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Consensus: The mechanism through which network agreement is achieved."}),"\n",(0,n.jsx)(t.li,{children:"Execution: Where transaction processing and smart contract operations occur."}),"\n",(0,n.jsx)(t.li,{children:"Settlement: The process of finalizing transactions."}),"\n",(0,n.jsx)(t.li,{children:"Data Availability: Ensuring that necessary information is accessible for validation."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"In the context of Layer 2, Morph reinterprets these layers with unique functionalities:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Consensus and Execution via Decentralized Sequencer Network: At Morph, these functions are integrated and handled by our decentralized sequencer network. Sequencers orchestrate, process, and achieve consensus on Layer 2 transactions, forming the primary interface for user interactions."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Archi",src:i(9305).A+"",width:"2880",height:"1670"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Settlement with Optimistic zkEVM: Settlement in Morph refers to the finalization of Layer 2 transactions at the Ethereum level. It involves state verification, crucial for validating Layer 2 states. Morph employs the optimistic zkEVM for this purpose, a hybrid approach blending the best of optimistic rollups and zk-rollups. Layer 2 states will be eventually finalized by a  significantly shorter challenge period or if gets challenged, the corresponding zk-proof."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Archi",src:i(8459).A+"",width:"2880",height:"1704"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Data Availability through 'Rollup' Process: This entails transferring essential Layer 2 data to Ethereum. In Morph, this is achieved through the 'Rollup' process, where a batch submitter compiles blocks into batches and submits them as Layer 1 transactions on Ethereum."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Archi",src:i(8429).A+"",width:"1920",height:"1080"})}),"\n",(0,n.jsx)(t.h2,{id:"independent-yet-collaborative-functions",children:"Independent yet Collaborative Functions"}),"\n",(0,n.jsx)(t.p,{children:"Each of these major functions operates independently, facilitating asynchronous tasks and switchable implementations:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Sequencer Network: Executes Layer 2 transactions and updates local state."}),"\n",(0,n.jsx)(t.li,{children:"Rollup Module: Transforms Layer 2 blocks into batches for submission to Layer 1."}),"\n",(0,n.jsx)(t.li,{children:"State Verification: Utilizes Layer 1 security to verify Layer 2 states under the optimistic zkEVM rules.\nThis modular architecture enhances flexibility, adaptability, and composability within the Morph ecosystem."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"diverse-roles-underpinning-the-architecture",children:"Diverse Roles Underpinning the Architecture"}),"\n",(0,n.jsx)(t.p,{children:"Morph\u2019s architecture is further defined by five pivotal roles: Sequencers, Validators, Nodes, Provers, and Layer 1 (Ethereum). Each role carries specific responsibilities and utilizes distinct components to fulfill its function, contributing to the seamless operation of the network."}),"\n",(0,n.jsxs)(t.p,{children:["To delve deeper into the roles and mechanisms powering Morph, explore our detailed ",(0,n.jsx)(t.a,{href:"/docs/how-morph-works/intro",children:'"How Morph Works"'})," documentation."]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1822:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/archi-d8b8b914a067e8d5f45b4a69e718da83.png"},8429:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/rollup-ec0a8c4e6fd4f059adc10a764554bb2d.png"},8459:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/opzk-cc4624c8d5a8d928b3c8c24f4e116e1c.png"},9305:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/seq1-c64137e0436958fb5e55b9095d0be047.png"},2333:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var n=i(9474);const r={},o=n.createContext(r);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);