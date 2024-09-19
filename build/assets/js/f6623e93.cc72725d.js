"use strict";(self.webpackChunkmorph_doc=self.webpackChunkmorph_doc||[]).push([[9200],{935:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=i(3274),t=i(2333);const r={title:"Morph Modular Design",lang:"en-US",keywords:["morph","ethereum","rollup","layer2","validity proof","optimistic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!"},s=void 0,a={id:"how-morph-works/morph-modular-design",title:"Morph Modular Design",description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!",source:"@site/docs/how-morph-works/2-morph-modular-design.md",sourceDirName:"how-morph-works",slug:"/how-morph-works/morph-modular-design",permalink:"/docs/how-morph-works/morph-modular-design",draft:!1,unlisted:!1,editUrl:"https://github.com/morph-l2/morph-doc/tree/main/docs/how-morph-works/2-morph-modular-design.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Morph Modular Design",lang:"en-US",keywords:["morph","ethereum","rollup","layer2","validity proof","optimistic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!"},sidebar:"DeveloperSidebar",previous:{title:"Developer Docs",permalink:"/docs/build-on-morph/developer-navigation-page"},next:{title:"Optimistic zkEVM",permalink:"/docs/how-morph-works/optimistic-zkevm"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"3 Major Morph Modules",id:"3-major-morph-modules",level:3},{value:"Sequencer Network - Consensus &amp; Execution",id:"sequencer-network---consensus--execution",level:4},{value:"Optimistic zkEVM - Settlement",id:"optimistic-zkevm---settlement",level:4},{value:"Rollup - Data Availability",id:"rollup---data-availability",level:4},{value:"5 Morph Roles",id:"5-morph-roles",level:3},{value:"Sequencers",id:"sequencers",level:4},{value:"Prover",id:"prover",level:4},{value:"Validator",id:"validator",level:4},{value:"Nodes",id:"nodes",level:4},{value:"Layer 1",id:"layer-1",level:4},{value:"6 Morph Components",id:"6-morph-components",level:3},{value:"L2 Node\u200b",id:"l2-node",level:4},{value:"Batch Submitter\u200b",id:"batch-submitter",level:4},{value:"Consensus Client\u200b",id:"consensus-client",level:4},{value:"zkEVM\u200b",id:"zkevm",level:4},{value:"Aggregators\u200b",id:"aggregators",level:4},{value:"Layer 1 Contract\u200b",id:"layer-1-contract",level:4},{value:"Integration of Components, Roles, and Modules",id:"integration-of-components-roles-and-modules",level:3}];function d(e){const n={a:"a",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"The modular design of blockchain technology, known for its improved composability, has become a prevalent trend. Morph leverages this design principle to enhance its architecture and functionality."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"arichitecture",src:i(5234).A+"",width:"3840",height:"2160"})}),"\n",(0,o.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(n.p,{children:"A modular design typically divides a Layer 1 blockchain into four core functions:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Consensus"}),"\n",(0,o.jsx)(n.li,{children:"Execution"}),"\n",(0,o.jsx)(n.li,{children:"Data Availability"}),"\n",(0,o.jsx)(n.li,{children:"Settlements"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Morph applies this modular approach to its Layer 2 solution by dividing it into three primary modules, each responsible for specific functionalities."}),"\n",(0,o.jsx)(n.h3,{id:"3-major-morph-modules",children:"3 Major Morph Modules"}),"\n",(0,o.jsx)(n.h4,{id:"sequencer-network---consensus--execution",children:"Sequencer Network - Consensus & Execution"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Sequencer Network",src:i(5469).A+"",width:"3840",height:"2160"})}),"\n",(0,o.jsxs)(n.p,{children:["Sequencer network responsible for the execution & consensus of the Layer 2 transactions, for more details please refer to Morph's ",(0,o.jsx)(n.a,{href:"../how-morph-works/decentralized-sequencers/morph-decentralized-sequencer-network",children:"decentralized sequencers"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"optimistic-zkevm---settlement",children:"Optimistic zkEVM - Settlement"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Optimistic zkEVM",src:i(9806).A+"",width:"1920",height:"1080"})}),"\n",(0,o.jsxs)(n.p,{children:["State verification ensures that state changes on Layer 2 are valid on Layer 1. Morph introduces Optimistic zkEVM, a hybrid solution combining zk-rollups and optimistic rollups for state verification. The process involves a Morph innovation known as Responsive Validity Proof (RVP). This innovative approach finalizes and settles Layer 2 transactions and states efficiently. For more details, refer to the documentation on ",(0,o.jsx)(n.a,{href:"../how-morph-works/optimistic-zkevm",children:"Responsive Validity Proof"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"rollup---data-availability",children:"Rollup - Data Availability"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Rollup",src:i(7133).A+"",width:"1920",height:"1080"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"/docs/how-morph-works/general-protocol-design/rollup",children:"Rollup"})," process involves submitting Layer 2 transactions and states to Layer 1, ensuring data availability. Morph's rollup strategy maximizes efficiency by compressing block content using zk-proofs, which helps manage the cost of Layer 1 data availability."]}),"\n",(0,o.jsx)(n.h3,{id:"5-morph-roles",children:"5 Morph Roles"}),"\n",(0,o.jsx)(n.h4,{id:"sequencers",children:"Sequencers"}),"\n",(0,o.jsx)(n.p,{children:"Sequencers play a crucial role in the network by:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Receiving Layer 2 user transactions and forming blocks."}),"\n",(0,o.jsx)(n.li,{children:"Reaching consensus with other sequencers."}),"\n",(0,o.jsx)(n.li,{children:"Executing blocks and applying state transitions."}),"\n",(0,o.jsx)(n.li,{children:"Batching blocks and submitting them to Layer 1."}),"\n",(0,o.jsx)(n.li,{children:"Synchronizing blocks with full nodes."}),"\n",(0,o.jsx)(n.li,{children:"Generating validity proofs when challenged."}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"prover",children:"Prover"}),"\n",(0,o.jsx)(n.p,{children:"Provers are essential for generating zk proofs when a sequencer is challenged. They synchronize Layer 2 transaction information and produce the necessary zk proofs to validate state changes."}),"\n",(0,o.jsx)(n.h4,{id:"validator",children:"Validator"}),"\n",(0,o.jsx)(n.p,{children:"Validators can be any user and play a key role in ensuring the correctness of states submitted by sequencers to Layer 1. They maintain an L2 node to synchronize transactions and state changes, triggering challenges when incorrect states are identified."}),"\n",(0,o.jsx)(n.h4,{id:"nodes",children:"Nodes"}),"\n",(0,o.jsx)(n.p,{children:"Nodes facilitate easier access to Layer 2 transactions and states without actively participating in network operations. Running an L2 node is open to anyone and does not require permission."}),"\n",(0,o.jsx)(n.h4,{id:"layer-1",children:"Layer 1"}),"\n",(0,o.jsx)(n.p,{children:"Every Layer 2 solution relies on a Layer 1 blockchain for final settlements and data availability. For Morph, this role is fulfilled by Ethereum. Key contracts on Layer 1 ensure the security and finality of Layer 2 transactions and states."}),"\n",(0,o.jsx)(n.h3,{id:"6-morph-components",children:"6 Morph Components"}),"\n",(0,o.jsx)(n.h4,{id:"l2-node",children:"L2 Node\u200b"}),"\n",(0,o.jsx)(n.p,{children:"The L2 node is central to Morph's architecture, interacting with various modules and roles. It includes sub-components such as:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Transactions Manager (Mempool): Manages all Layer 2 transactions, accepting and storing user-initiated transactions."}),"\n",(0,o.jsx)(n.li,{children:"Executor: Applies state transitions and maintains the real-time status of Layer 2."}),"\n",(0,o.jsx)(n.li,{children:"Synchronizer: Synchronizes data between L2 nodes to restore network status."}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"batch-submitter",children:"Batch Submitter\u200b"}),"\n",(0,o.jsx)(n.p,{children:"The Batch Submitter is part of the sequencer, responsible for continuously obtaining L2 blocks, packaging them into batches, and assembling the batches into Layer 1 transactions, which are then submitted to the Layer 1 contract."}),"\n",(0,o.jsx)(n.h4,{id:"consensus-client",children:"Consensus Client\u200b"}),"\n",(0,o.jsx)(n.p,{children:"Each sequencer runs a consensus client to reach consensus with other sequencers. The current design uses the Tendermint client to ensure seamless integration and developer friendliness."}),"\n",(0,o.jsx)(n.h4,{id:"zkevm",children:"zkEVM\u200b"}),"\n",(0,o.jsx)(n.p,{children:"zkEVM is part of the Prover and is a zk-friendly virtual machine used to generate zk proofs for Ethereum blocks and state changes. These zk proofs are ultimately used to prove the validity of L2 transactions and states."}),"\n",(0,o.jsx)(n.h4,{id:"aggregators",children:"Aggregators\u200b"}),"\n",(0,o.jsx)(n.p,{children:"Aggregators work with zkEVM to reduce the cost of verifying zk proofs by aggregating them for block production."}),"\n",(0,o.jsx)(n.h4,{id:"layer-1-contract",children:"Layer 1 Contract\u200b"}),"\n",(0,o.jsx)(n.p,{children:"These contracts on Ethereum store Layer 2 transactions, execute global state changes, and bridge assets and information between Layer 2 and Layer 1. They also manage the election and governance of the sequencer set, inheriting the security of Ethereum."}),"\n",(0,o.jsx)(n.h3,{id:"integration-of-components-roles-and-modules",children:"Integration of Components, Roles, and Modules"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"modular",src:i(1267).A+"",width:"1920",height:"1080"})}),"\n",(0,o.jsx)(n.p,{children:"The components form the foundation of the various roles in Morph. For instance, running an L2 node allows one to become a Node, while adding batch submitter and consensus client functionalities enables the role of Sequencer. These roles collaborate to perform the core functions of Morph, creating a complete and efficient rollup solution."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1267:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/modu-01191e93311b938abebd1189bfb69b21.png"},5234:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/archi-d41d5b2f09000115cef0dfea3705b7aa.png"},5469:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/seq1-e90d0e983252714740968a8aaaca0dd8.png"},7133:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/rollup-768caf2d310d19ce9909d718badd44e5.png"},9806:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/opzk-9ae9b91f62e5e1b9e4771ee2e441c2ba.png"},2333:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var o=i(9474);const t={},r=o.createContext(t);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);