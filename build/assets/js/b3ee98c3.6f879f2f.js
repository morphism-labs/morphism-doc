"use strict";(self.webpackChunkmorph_doc=self.webpackChunkmorph_doc||[]).push([[3237],{4086:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=t(3274),r=t(2333);const i={title:"Morph's Staking System Design",lang:"en-US",keywords:["morph","ethereum","rollup","layer2","validity proof","optimistic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!"},o="What is Morph Staking System?",a={id:"how-morph-works/decentralized-sequencers/morph-staking-system-design",title:"Morph's Staking System Design",description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!",source:"@site/docs/how-morph-works/decentralized-sequencers/2-morph-staking-system-design.md",sourceDirName:"how-morph-works/decentralized-sequencers",slug:"/how-morph-works/decentralized-sequencers/morph-staking-system-design",permalink:"/docs/how-morph-works/decentralized-sequencers/morph-staking-system-design",draft:!1,unlisted:!1,editUrl:"https://github.com/morph-l2/morph-doc/tree/main/docs/how-morph-works/decentralized-sequencers/2-morph-staking-system-design.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Morph's Staking System Design",lang:"en-US",keywords:["morph","ethereum","rollup","layer2","validity proof","optimistic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!"},sidebar:"DeveloperSidebar",previous:{title:"Morph's Decentralized Sequencer Network",permalink:"/docs/how-morph-works/decentralized-sequencers/morph-decentralized-sequencer-network"},next:{title:"Rollup",permalink:"/docs/how-morph-works/general-protocol-design/rollup"}},l={},c=[{value:"Roles within the Staking System:",id:"roles-within-the-staking-system",level:2},{value:"Details of sequencer set election:",id:"details-of-sequencer-set-election",level:2},{value:"Rewards &amp; Slash",id:"rewards--slash",level:2},{value:"Rewards",id:"rewards",level:3},{value:"How to decide each sequencer\u2019s MorphToken rewards?",id:"how-to-decide-each-sequencers-morphtoken-rewards",level:4},{value:"Slash",id:"slash",level:3},{value:"Governance:",id:"governance",level:2},{value:"Major Process",id:"major-process",level:2},{value:"Staking &amp; Sequencer Selection",id:"staking--sequencer-selection",level:3},{value:"Sequencer network consensus &amp; Verification on Layer 1",id:"sequencer-network-consensus--verification-on-layer-1",level:3},{value:"Slash for Sequencers",id:"slash-for-sequencers",level:3},{value:"What happens if validators successfully challenge sequencers?",id:"what-happens-if-validators-successfully-challenge-sequencers",level:4},{value:"Delegation Stake",id:"delegation-stake",level:3},{value:"Staker/Sequencer exit",id:"stakersequencer-exit",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"what-is-morph-staking-system",children:"What is Morph Staking System?"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Currently the Staking System is in beta testing phase, the design described in this document will change as the testing process progresses, and does not represent the final experience on the Mainnet."})}),"\n",(0,s.jsx)(n.p,{children:"Morph Staking is a complete economic and engineering system built upon the decentralized sequencer network to ensure the operation and security of the network."}),"\n",(0,s.jsx)(n.p,{children:"It can be divided into 2 parts:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"ETH Staking"})}),"\n",(0,s.jsx)(n.p,{children:"On Ethereum, potential sequencers are required to stake ETH in the layer 1 staking contract to become a staker first."}),"\n",(0,s.jsx)(n.p,{children:"The ETH staking serves to increase the cost of malicious behavior by sequencers."}),"\n",(0,s.jsx)(n.p,{children:"In case of confirmed dishonesty or negligence by a sequencer, the staked ETH will be slashed. The required ETH staking amount is immutable."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Morph token Staking"})}),"\n",(0,s.jsx)(n.p,{children:"Morph token is the governance token of Morph (Gas token is ETH). In the staking system, it will play the following roles:"}),"\n",(0,s.jsx)(n.p,{children:"Staker is elected as the sequencer according to the amount of Morph tokens that token holders have delegated to them. So stakers need to attract Morph token holders to delegate their tokens to them. Only sequencers can receive network rewards.\nMorph token holders can delegate stake their tokens to any stakers, which will determine whether stakers can be selected as sequencer. Sequencers receive rewards from the inflation of the Morph token based on the sequencer\u2019s contribution, and delegators share a portion of the rewards based on their delegation amount."}),"\n",(0,s.jsx)(n.h2,{id:"roles-within-the-staking-system",children:"Roles within the Staking System:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Staker (Sequencer Candidate): Anyone (required in the whitelist in the early stage) can stake ETH to L1 staking contract and become a staker. Only stakers can join the sequencer election."}),"\n",(0,s.jsx)(n.li,{children:"Sequencer: Sequencers are able to perform the sequencer tasks and get reward from it. Sequencers are selected according to the delegation amount of  Morph tokens."}),"\n",(0,s.jsx)(n.li,{children:"Delegator: Morph token holders can delegate stake their tokens to any of the stakers. Delegators can share the rewards gained by delegated sequencer based on the delegation amounts."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"details-of-sequencer-set-election",children:"Details of sequencer set election:"}),"\n",(0,s.jsx)(n.p,{children:"The determination of the sequencer set will be based on two points:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Sequencers must have staked a fixed amount of ETH in Layer 1 staking contract."}),"\n",(0,s.jsx)(n.li,{children:"Assuming the maximum size of the sequencer set is X, based on the delegation amount of  Morph token, select up to X sequencers from all valid candidates as sequencer set."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The sequencer set will be updated in real-time based on the above principles."}),"\n",(0,s.jsx)(n.p,{children:"When there's a new MorphToken stake, the L2 staking contract will check if this would cause the sequencer set to change, and update the sequencer set if needed."}),"\n",(0,s.jsx)(n.p,{children:"Joining the sequencer set means that all sequencers will have the right to participate in the current network operations to earn rewards, while also bearing the responsibility of maintaining the network's efficient and normal operation."}),"\n",(0,s.jsx)(n.p,{children:"In practice, each sequencer, regardless of the delegation amount, has the same weight."}),"\n",(0,s.jsx)(n.p,{children:"Sequencers can exit at any time. They need to submit an exit request on Layer 1 staking contract, then enter a lock-up period. After Layer 2 contracts complete the exit process and reach the unlocking block height, they are unlocked and could claim the staked ETH."}),"\n",(0,s.jsx)(n.h2,{id:"rewards--slash",children:"Rewards & Slash"}),"\n",(0,s.jsx)(n.h3,{id:"rewards",children:"Rewards"}),"\n",(0,s.jsx)(n.p,{children:"There are 3 potential rewards for sequencers within the Morph ecosystem."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"L2 MorphToken staking rewards."})}),"\n",(0,s.jsx)(n.p,{children:"The Morph token is inflationary that increases 6% of the initial max total supply each year as the L2 Morph token staking rewards."}),"\n",(0,s.jsx)(n.p,{children:"These 6% will be distributed everyday (one day is an epoch) to all the current running sequencers."}),"\n",(0,s.jsx)(n.p,{children:"Sequencers will take commission first and distribute the rest to the delegators based on their delegation amount."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"L2 Gas Income:"})}),"\n",(0,s.jsx)(n.p,{children:"Sequencers take ETH from layer 2 users (Layer2 income) and spend ETH to submit batches to layer1 (Layer1 cost)."}),"\n",(0,s.jsx)(n.p,{children:"If the Layer1 cost is less than Layer2 income, the remaining value theoretically becomes the profit of Layer 2."}),"\n",(0,s.jsx)(n.p,{children:"At the very beginning, the network collects all the Layer2 incomes and pays ETH to sequencers to cover their Layer 1 cost. In the future, we\u2019ll have a more detailed plan about how this part of the funds will be utilized."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"ETH Re-staking yield:"})}),"\n",(0,s.jsx)(n.p,{children:"To improve capital efficiency, we plan to leverage staker\u2019s ETH deposit to generate yield in restaking products, and the yield will still be allocated to stakers."}),"\n",(0,s.jsx)(n.h4,{id:"how-to-decide-each-sequencers-morphtoken-rewards",children:"How to decide each sequencer\u2019s MorphToken rewards?"}),"\n",(0,s.jsx)(n.p,{children:"This is based on the block production records."}),"\n",(0,s.jsx)(n.p,{children:"In each epoch, the total reward received by each sequencer and their delegators is calculated as follows:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"sequencer_reward = (sequencer_produced_block / total_produced_blocks) * total_morph_token_inflation"})}),"\n",(0,s.jsx)(n.p,{children:"The sequencer rewards are eventually distributed to delegators (although sequencers can be their own delegators too). Sequencer can set a commission rate to take a share from it and the rate is adjustable."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"sequencer_commission = sequencer_reward * commission_rate"})}),"\n",(0,s.jsx)(n.p,{children:"The reward each delegator of this sequencer receives is the remaining portion multiplied by the percentage of their staked amount:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"delegator_reward = (sequencer_reward - sequencer_commission) * delegation_amount / total_delegation_amount"})}),"\n",(0,s.jsx)(n.p,{children:"The user\u2019s delegation rewards will be calculated starting from the next epoch after the user stakes."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.p,{children:"If today\u2019s (this epoch\u2019s) total Morph Inflation is 100, and there are 100 blocks produced in this epoch."}),"\n",(0,s.jsx)(n.p,{children:"Sequencer A produced 10 blocks within this epoch, so he will receive:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"sequencer_reward = (sequencer_produced_block / total_produced_blocks) * total_morph_token_inflation  = (10/100) * 100 = 10 MorphToken."})}),"\n",(0,s.jsx)(n.p,{children:"If sequencer\u2019s commission rate is 5%"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"sequencer_commission = sequencer_reward * commission_rate = 10 * 0.05 = 5 MorphToken"})}),"\n",(0,s.jsx)(n.p,{children:"If one delegator staked 100 MorphToken and then there are a total 1000 MorphToken delegated to the sequencer."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"delegator_reward = (sequencer_reward - sequencer_commission) * delegation_amount / total_delegation_amount = (100 - 5) * (100/1000) = 9.5 MorphToken"})}),"\n",(0,s.jsx)(n.p,{children:"Ideally, since the weights for each sequencer is the same, each sequencer will be able to produce the same amount of blocks within a certain epoch. Thus their rewards should be the same."}),"\n",(0,s.jsx)(n.p,{children:"However, if the sequencer failed to perform their duties, the block production will be much lower thus their rewards would be much lower too."}),"\n",(0,s.jsx)(n.h3,{id:"slash",children:"Slash"}),"\n",(0,s.jsx)(n.p,{children:"Based on the optimistic zkEVM design, there will be validators constantly verifying the batch submitted by sequencers, and if they think sequencers committed fraud, validators will start a challenge through the L1 rollup contract."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/how-morph-works/optimistic-zkevm",children:"Read more about the challenge here:"})}),"\n",(0,s.jsx)(n.p,{children:"To prevent fraudulent behavior by Sequencers from affecting network security, the following rules need are established:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Validators will challenge a fixed batch, and all sequencers who signed that batch will collectively be challenged."}),"\n",(0,s.jsx)(n.li,{children:"When a sequencer takes on the role of batch submitter, repeated instances of timeouts accumulating to a certain extent will result in a deduction of rewards or removal from the sequencer set (not fully implemented yet)."}),"\n",(0,s.jsx)(n.li,{children:"Sequencers with long periods that have not produced blocks will be removed from the sequencer set (not fully implemented yet)."}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["The submitter rotation and submission timeout is part of decentralized rollup design, you can read the details ",(0,s.jsx)(n.a,{href:"/docs/how-morph-works/general-protocol-design/rollup",children:"here"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:"For the reward and slash functionalities, we have 2 contracts:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"L2 Record Contract: The off-chain data affecting rewards and penalties will be collected and recorded in the L2 Record contract through an Oracle, primarily consisting of rollup data and Block data."}),"\n",(0,s.jsx)(n.li,{children:"L2 Distribute Contract: Sequencers and Delegator will manually claim rewards based on the Record."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"governance",children:"Governance:"}),"\n",(0,s.jsx)(n.p,{children:"We have a governance contract right now that decides some of the network parameters. Currently, only sequencers can create proposals and vote."}),"\n",(0,s.jsx)(n.p,{children:"In the next phase of the roadmap, we are planning to build a complete governance system that allows all Morph token holders to decide every aspect of the network."}),"\n",(0,s.jsx)(n.h2,{id:"major-process",children:"Major Process"}),"\n",(0,s.jsx)(n.h3,{id:"staking--sequencer-selection",children:"Staking & Sequencer Selection"}),"\n",(0,s.jsx)(n.p,{children:"Morph token staking will be divided into 2 stages based on the network status:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Phase 1: Morph token inflation and staking rewards not started yet.\nSequencer elections will be FCFS at the beginning, but delegate stake is allowed. No morph token rewards since there is no new token generation yet."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Phase 2: Morph token inflation and staking rewards is started.\nThe sequencer election will officially start and based on the delegation amount of Morph token, the rewards will start to be distributed too."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"How is the sequencer set generated?"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"L1"})," Staking Contract: Add potential sequencers to the whitelist."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"L1"})," Staking Contract: Potential sequencer will be able to register and stake eth on Ethereum to become eligible for sequencer election (become staker)."]}),"\n",(0,s.jsxs)(n.li,{children:["An ",(0,s.jsx)(n.code,{children:"add staker"})," message will be sent as a cross-layer message from L1 staking contract to L2 staking contract."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"L2"})," Staking Contract: Will update stakers with the message synced."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"L2"})," Staking Contract: Users will be able to delegate/undelegate stake MorphToken to a staker."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"L2"})," Sequencer Contract: L2 staking contract will update the sequencer set by calling L2 sequencer contact based on the ranking of the Morph token delegation amount, the top staker will be elected as sequencer."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"sequencer-network-consensus--verification-on-layer-1",children:"Sequencer network consensus & Verification on Layer 1"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Every submitted batch requires the BLS signature of more than 2/3 of the sequencers within the sequencer set to be accepted  by the L1 rollup contract."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Notice: Currently, the BLS 12-381 signature pre-compiled contract has not been implemented on Ethereum. Therefore, the L1 rollup contract cannot verify whether the batch is signed by the L2 sequencer set.\nUntil this functionality is available, the rollup contracts only allow batch submission from stakers included in the whitelist. This measure is in place to enable us to slash the ETH deposit in case of fraudulent submissions. After signature verification is implemented, the submitter will be permissionless and the sequencers which signed the fraudulent batch will be slashed instead of the submitter."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"L1"})," Rollup Contract: Batch submitter commits the batch to rollup contract."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"L1"})," Rollup Contract: Rollup contract verifies the batch\u2019s BLS signature and compares it with the sequencer set sync from L1 staking contract. It will only accept the batch if the verification passed."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"slash-for-sequencers",children:"Slash for Sequencers"}),"\n",(0,s.jsx)(n.h4,{id:"what-happens-if-validators-successfully-challenge-sequencers",children:"What happens if validators successfully challenge sequencers?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Sequencer will be slashed all staked ETH and removed from sequencer set if challenger succeeds."}),"\n",(0,s.jsx)(n.li,{children:"Even if get proven fraud by multiple challenges, each sequencer will only be slashed once."}),"\n",(0,s.jsx)(n.li,{children:"The challenger reward for a successful challenge is a fixed proportion of the staking amount."}),"\n",(0,s.jsx)(n.li,{children:"If the slash makes all the sequencers go down, then the L2 will stop running. We can restart by upgrading the L1 staking contract, reset stakers and sequencer sets. This does not affect the Layer 2 state as no transactions will be processed because of this."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Process:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"L1"})," Staking Contract: Slash staked ETH of sequencers who signed the fraud batch and remove them from sequencer set."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"L1"})," Staking Contract: Distribute validator rewards."]}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.code,{children:"remove staker"})," message will be sent as a cross-layer message from L1 staking contract to L2 staking contract."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"L2"}),"Staking Contract: Update sequencer set."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"delegation-stake",children:"Delegation Stake"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"L2"})," Staking Contract: Staker set delegation commission rate by their own will."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"L2"})," Oracle: Upload sequencers work records (block production records, submitter work records, expect work records) on the epoch basis (an epoch is a day)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"L2"})," MorphToken Contract: Mint MorphToken (inflation) as delegation reward and sent to L2 distributor contract."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"L2"})," Staking Contract: Users claim delegation reward, sequencers claim commission."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"stakersequencer-exit",children:"Staker/Sequencer exit"}),"\n",(0,s.jsx)(n.p,{children:"The exit lock period should be long enough to ensure that stakers and sequencers in L2 have been updated and greater than the challenge period of sequencer\u2019s last produced block (if staker is also sequencer)."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"L1"})," Staking Contract: Stakers apply to exit, the stake ETH is locked to enter the lock period."]}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.code,{children:"remove staker"})," message will be sent as a cross-layer message from L1 staking contract to L2 staking contract."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"L2"})," Staking Contract: Received the message, remove staker, and sequencers (if the staker is also sequencer)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"L1"})," Staking Contract: Withdraw allowed until reach unlock block height\uff0cremove staker info after claiming."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},2333:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(9474);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);