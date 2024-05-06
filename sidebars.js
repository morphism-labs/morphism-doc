/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
/* const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
  
}
*/

//module.exports = sidebars;
/*
{
  type: 'autogenerated',
  dirName: 'how-morph-works', // Generate sidebar slice from docs/How Morph Works
}
*/
module.exports = {
  AboutSidebar: [
    {
      type: 'doc',
      id:'about-morph/overview-of-morph'
    },
    {
      type: 'doc',
      id:'about-morph/what-makes-morph-different'
    },
    {
      type: 'doc',
      id:'about-morph/where-should-i-start'
    },
    {
      type: 'doc',
      id:'about-morph/morphs-architecture'
    },
    {
      type: 'doc',
      id:'about-morph/morphs-vision-and-mission'
    },
    {
      type: 'doc',
      id:'about-morph/key-concepts'
    },
    {
      type: 'doc',
      id:'about-morph/roadmap'
    },
    {
      type: 'doc',
      id:'about-morph/faqs'
    },
  ],
  StartSidebar: [
    {
      type: 'doc',
      id:'quick-start/welcome-to-morph'
    },
    {
      type: 'doc',
      id:'quick-start/wallet-setup'
    },
    {
      type: 'doc',
      id:'quick-start/faucet'
    },
    {
      type: 'doc',
      id:'quick-start/bridge'
    },
    {
      type: 'link',
      href: "https://bridge-holesky.morphl2.io/",
      label: 'Morph Holesky Official Bridge'
    },
    {
      type: 'link',
      href: "https://explorer-holesky.morphl2.io/",
      label: 'Morph Holesky Explorer'
    },
    {
      type: 'link',
      href: "https://holesky.etherscan.io/",
      label: 'Ethereum Holesky Explorer'
    },
  ],
  DevSidebar: [
    {
      type: 'doc',
      id:'build-on-morph/intro'
    },
    {
      type: 'category',
      label: 'Build on Morph',
      items: [
        {
          type: 'autogenerated',
          dirName: 'build-on-morph/build-on-morph'
        },
      ],
    },
    {
      type: 'category',
      label: 'Developer Resources',
      items: [
        {
          type: 'doc',
          id:'build-on-morph/developer-resources/contracts'
        },
        {
          type: 'doc',
          id:'build-on-morph/developer-resources/how-to-run-a-morph-node'
        },
        {
          type: 'doc',
          id:'build-on-morph/developer-resources/morph-json-rpc-api-methods'
        },
        {
          type: 'link',
          href: "https://explorer-holesky.morphl2.io/",
          label: 'Morph Holesky Explorer'
        },
        {
          type: 'link',
          href: "https://holesky.etherscan.io/",
          label: 'Ethereum Holesky Explorer'
        },
      ],
    },
    {
      type:'category',
      label:'Practical Examples',
      items: [
        {
          type: 'doc',
          id:'build-on-morph/practical-examples/deploy-contract-on-morph'
        },
        /*
        {
          type: 'doc',
          id:'build-on-morph/practical-examples/bridge-between-morph-and-ethereum'
        },
        */
      ]
    },
    /*
    {
      type: 'category',
      label: 'SDK',
      items: [
        {
          type: 'autogenerated',
          dirName: 'build-on-morph/sdk'
        },
      ],
    },
    */
  ],
  HowSidebar: [
    {
      type: 'doc',
      id:'how-morph-works/intro'
    },
    {
      type: 'doc',
      id:'how-morph-works/morph-modular-design'
    },
    {
      type: 'category',
      label: 'Decentralized Sequencers',
      items: [
        {
          type: 'autogenerated',
          dirName: 'how-morph-works/decentralized-sequencers'
        },
      ],
    },
    {
      type: 'category',
      label: 'Responsive Validity Proof',
      items: [
        {
          type: 'autogenerated',
          dirName: 'how-morph-works/responsive-validity-proof'
        },
      ],
    },
    {
      type: 'category',
      label: 'General Protocol Design',
      items: [
        {
          type: 'autogenerated',
          dirName: 'how-morph-works/general-protocol-design'
        },
        {
          type: 'link',
          href: "http://docs.morphl2.io/docs/build-on-morph/build-on-morph/understand-transaction-cost-on-morph",
          label: 'Transaction Cost on Morph'
        },
      ],
    },
  ],
};
