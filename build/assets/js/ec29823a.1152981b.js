"use strict";(self.webpackChunkmorph_doc=self.webpackChunkmorph_doc||[]).push([[3838],{4921:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=o(3274),t=o(2333);const a={title:"How to Run a Morph Validator Node",lang:"en-US"},d=void 0,i={id:"build-on-morph/developer-resources/node-operation/how-to-run-a-validator-node",title:"How to Run a Morph Validator Node",description:"Run a Morph Node",source:"@site/docs/build-on-morph/developer-resources/node-operation/3-how-to-run-a-validator-node.md",sourceDirName:"build-on-morph/developer-resources/node-operation",slug:"/build-on-morph/developer-resources/node-operation/how-to-run-a-validator-node",permalink:"/docs/build-on-morph/developer-resources/node-operation/how-to-run-a-validator-node",draft:!1,unlisted:!1,editUrl:"https://github.com/morph-l2/morph-doc/tree/main/docs/build-on-morph/developer-resources/node-operation/3-how-to-run-a-validator-node.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"How to Run a Morph Validator Node",lang:"en-US"},sidebar:"DeveloperSidebar",previous:{title:"Run a Morph Full Node from Source",permalink:"/docs/build-on-morph/developer-resources/node-operation/how-to-run-a-morph-node"},next:{title:"Upgrade node running from docker",permalink:"/docs/build-on-morph/developer-resources/node-operation/upgrade-node/upgrade-node-docker"}},s={},l=[{value:"Run a Morph Node",id:"run-a-morph-node",level:2},{value:"Build executable binary",id:"build-executable-binary",level:2},{value:"Clone Morph",id:"clone-morph",level:3},{value:"Build Geth",id:"build-geth",level:3},{value:"Build Node",id:"build-node",level:3},{value:"Sync from the genesis block",id:"sync-from-the-genesis-block",level:2},{value:"Config Preparation",id:"config-preparation",level:3},{value:"Script to start the process",id:"script-to-start-the-process",level:2},{value:"Geth",id:"geth",level:3},{value:"Node",id:"node",level:3},{value:"Check Status",id:"check-status",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"run-a-morph-node",children:"Run a Morph Node"}),"\n",(0,r.jsxs)(n.p,{children:["This guide describes the approach to running a Morph validator node. If you are unfamiliar with the validator duties, please refer to our ",(0,r.jsx)(n.a,{href:"/docs/how-morph-works/optimistic-zkevm",children:"optimistic zkEVM"})," design."]}),"\n",(0,r.jsxs)(n.p,{children:["Create the folder ",(0,r.jsx)(n.code,{children:"~/.morph"})," as our home directory for this example."]}),"\n",(0,r.jsx)(n.h2,{id:"build-executable-binary",children:"Build executable binary"}),"\n",(0,r.jsx)(n.h3,{id:"clone-morph",children:"Clone Morph"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir -p ~/.morph \ncd ~/.morph\ngit clone https://github.com/morph-l2/morph.git\n"})}),"\n",(0,r.jsx)(n.p,{children:"Currently, we use tag v0.2.0-beta as our beta version geth."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd morph\ngit checkout v0.2.0-beta\n"})}),"\n",(0,r.jsx)(n.h3,{id:"build-geth",children:"Build Geth"}),"\n",(0,r.jsx)(n.p,{children:"Notice: You need C compiler to build geth"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"make nccc_geth\n"})}),"\n",(0,r.jsx)(n.h3,{id:"build-node",children:"Build Node"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ~/.morph/morph/node \nmake build\n"})}),"\n",(0,r.jsx)(n.h2,{id:"sync-from-the-genesis-block",children:"Sync from the genesis block"}),"\n",(0,r.jsx)(n.h3,{id:"config-preparation",children:"Config Preparation"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Download the config files and make data dir"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ~/.morph\nwget https://raw.githubusercontent.com/morph-l2/config-template/main/holesky/data.zip\nunzip data.zip\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Create a shared secret with node"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ~/.morph\nopenssl rand -hex 32 > jwt-secret.txt\n"})}),"\n",(0,r.jsx)(n.h2,{id:"script-to-start-the-process",children:"Script to start the process"}),"\n",(0,r.jsx)(n.h3,{id:"geth",children:"Geth"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'\nNETWORK_ID=2810\n\nnohup ./morph/go-ethereum/build/bin/geth \\\n--datadir=./geth-data \\\n--verbosity=3 \\\n--http \\\n--http.corsdomain="*" \\\n--http.vhosts="*" \\\n--http.addr=0.0.0.0 \\\n--http.port=8545 \\\n--http.api=web3,eth,txpool,net,engine \\\n--ws \\\n--ws.addr=0.0.0.0 \\\n--ws.port=8546 \\\n--ws.origins="*" \\\n--ws.api=web3,eth,txpool,net,engine \\\n--networkid=$NETWORK_ID \\\n--authrpc.addr="0.0.0.0" \\\n--authrpc.port="8551" \\\n--authrpc.vhosts="*" \\\n--authrpc.jwtsecret=$JWT_SECRET_PATH \\\n--gcmode=archive \\\n--metrics \\\n--metrics.addr=0.0.0.0 \\\n--metrics.port=6060 \\\n--miner.gasprice="100000000"\n'})}),"\n",(0,r.jsx)(n.p,{children:"tail -f geth.log to check if the Geth is running properly, or you can also execute the below curl command to check if you are connected to the peer."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl --location --request POST \'localhost:8545/\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n   "jsonrpc":"2.0",\n   "method":"eth_blockNumber",\n   "id":1\n}\'\n\n{"jsonrpc":"2.0","id":1,"result":"0x148e39"}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"node",children:"Node"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ~/.morph\nexport L1MessageQueueWithGasPriceOracle=0x778d1d9a4d8b6b9ade36d967a9ac19455ec3fd0b\nexport START_HEIGHT=1434640\nexport Rollup=0xd8c5c541d56f59d65cf775de928ccf4a47d4985c\n./morph/node/build/bin/morphnode --validator --home ./node-data \\\n     --l2.jwt-secret ./jwt-secret.txt \\\n     --l2.eth http://localhost:8545 \\\n     --l2.engine http://localhost:8551 \\\n     --l1.rpc $(Ethereum Holesky RPC)  \\\n     --l1.beaconrpc $(Ethereum Holesky beacon chain RPC)  \\\n     --l1.chain-id  17000   \\\n     --validator.privateKey $(Your Validator Key)  \\\n     --sync.depositContractAddr $(L1MessageQueueWithGasPriceOracle) \\\n     --sync.startHeight  $(START_HEIGHT) \\\n     --derivation.rollupAddress $(Rollup) \\\n     --derivation.startHeight  $(START_HEIGHT) \\\n     --derivation.fetchBlockRange 200 \\\n     --log.filename ./node.log\n"})}),"\n",(0,r.jsx)(n.h2,{id:"check-status",children:"Check Status"}),"\n",(0,r.jsx)(n.p,{children:"If your node is successfully started, you will see the following response:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'I[2024-06-06|15:57:35.216] metrics server enabled                       module=derivation host=0.0.0.0 port=26660\nderivation node starting\nID> 24-06-06|15:57:35.216] initial sync start                           module=syncer msg="Running initial sync of L1 messages before starting sequencer, this might take a while..."\nI[2024-06-06|15:57:35.242] initial sync completed                       module=syncer latestSyncedBlock=1681622\nI[2024-06-06|15:57:35.242] derivation start pull rollupData form l1     module=derivation startBlock=1681599 end=1681622\nI[2024-06-06|15:57:35.244] fetched rollup tx                            module=derivation txNum=8 latestBatchIndex=59201\nI[2024-06-06|15:57:35.315] fetch rollup transaction success             module=derivation txNonce=8764 txHash=0x5fb8a98472d1be73be2bc6be0807b9e0c68b7ba14a648c8a17bdaff7b26eb923 l1BlockNumber=1681599 firstL2BlockNumber=1347115 lastL2BlockNumber=1347129\nI[2024-06-06|15:57:35.669] new l2 block success                         module=derivation blockNumber=1347115\n'})}),"\n",(0,r.jsx)(n.p,{children:"You can use the following command to check the newest block height to make sure you are aligned."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl --location --request POST \'localhost:8545/\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n   "jsonrpc":"2.0",\n   "method":"eth_blockNumber",\n   "id":1\n}\'\n{"jsonrpc":"2.0","id":1,"result":"0x148e39"}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Make sure you check the validator status constantly, if you find response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"[2024-06-14|16:43:50.904] root hash or withdrawal hash is not equal    originStateRootHash=0x13f91d1c272e48e2d864ce7bfb421506d5b2a04def64d45c75391cdcdd69cd78 deriveStateRootHash=0x27e10420c0e34676a7d75c4189d7ccd1c3407cc8fd0b3eafb01c15e250a1215f batchWithdrawalRoot=0xa3e4a7cf45c7591a6bd9868f1fa7485ae345f10067acaade5f5b07d418b2e172 deriveWithdrawalRoot=0xa3e4a7cf45c7591a6bd9868f1fa7485ae345f10067acaade5f5b07d418b2e172\n"})}),"\n",(0,r.jsx)(n.p,{children:"This means your validators find inconsistent between sequencer submission and your own observation."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},2333:(e,n,o)=>{o.d(n,{R:()=>d,x:()=>i});var r=o(9474);const t={},a=r.createContext(t);function d(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);