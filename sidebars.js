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
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  Sidebar: [
    {
      type: 'doc',
      id: 'index',
      label: '文档首页',
    },
    {
      type: 'doc',
      id: 'v1-old/start',
      label: 'V1 旧版文档',
    },
    {
      type: 'doc',
      id: 'v1/start',
      label: 'V1 新版文档',
    },
    {
      type: 'doc',
      id: 'v2/start',
      label: 'V2 文档',
    },
  ],
  v1oldSidebar: [
    {
      type: 'doc',
      id: 'v1-old/start',
      label: 'McPatch 介绍',
    },
    {
      type: 'category',
      label: '安装教程',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: '安装教程',
        description: '安装 McPatch 需要做的事情',
        slug: '/v1-old/guide',
        keywords: ['v1-old/guides'],
        image: '/img/docusaurus.png',
      },
      items: [
          'v1-old/guide/preparations',
          'v1-old/guide/manager',
          'v1-old/guide/server',
          'v1-old/guide/client',
          'v1-old/guide/caution',
          'v1-old/guide/auto-start',
      ],
    },
    {
      type: 'category',
      label: '常见问题解答',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: '常见问题解答',
        description: 'McPatch 常见问题解答',
        slug: '/v1-old/faq',
        keywords: ['v1-old/faq'],
        image: '/img/docusaurus.png',
      },
      items: [
          'v1-old/faq/client',
          'v1-old/faq/manage',
      ],
    },
    {
      type: 'category',
      label: '高级教程',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: '高级教程',
        description: 'McPatch 高级教程',
        slug: '/v1-old/advance',
        keywords: ['v1-old/advance'],
        image: '/img/docusaurus.png',
      },
      items: [
          'v1-old/advance/custom-deploy',
          'v1-old/advance/spell-start',
          'v1-old/advance/modclient-self-update',
          'v1-old/advance/dynamic-loader',
          'v1-old/advance/combine',
          'v1-old/advance/cli-interface',
          'v1-old/advance/ignores',
          'v1-old/advance/overwrites',
          'v1-old/advance/run-as-exe',
      ],
    },
  ],
  v1Sidebar: [
    {
      type: 'doc',
      id: 'v1/start',
      label: 'McPatch 介绍',
    },
    {
      type: 'category',
      label: '部署',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: '部署',
        description: '部署 McPatch 需要做的事情',
        slug: '/v1/installation',
        keywords: ['v1/installation'],
        image: '/img/docusaurus.png',
      },
      items: [
          'v1/installation/prepare',
          'v1/installation/deploy',
          'v1/installation/server',
          'v1/installation/client',
      ],
    },
    {
      type: 'category',
      label: '进阶内容',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: '进阶内容',
        description: 'McPatch 进阶内容',
        slug: '/v1/advanced',
        keywords: ['v1/advanced'],
        image: '/img/docusaurus.png',
      },
      items: [
          'v1/advanced/client',
      ],
    },
    {
      type: 'category',
      label: '常见问题',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: '常见问题',
        description: 'McPatch 常见问题',
        slug: '/v1/faq',
        keywords: ['v1/faq'],
        image: '/img/docusaurus.png',
      },
      items: [
          'v1/faq/client',
      ],
    },
  ],
  v2Sidebar: [
    {
      type: 'doc',
      id: 'v2/start',
      label: 'McPatch 介绍',
    },
    {
      type: 'category',
      label: '首次安装',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: '首次安装',
        description: '首次安装 McPatch 需要做的事情',
        slug: '/v2/installation',
        keywords: ['v2/installation'],
        image: '/img/docusaurus.png',
      },
      items: [
          'v2/installation/guide',
          'v2/installation/upload',
      ],
    },
    {
      type: 'category',
      label: '日常维护',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: '日常维护',
        description: '日常维护 McPath 要做的事',
        slug: '/v2/maintain',
        keywords: ['v2/maintain'],
        image: '/img/docusaurus.png',
      },
      items: [
          'v2/maintain/combine-versions',
      ],
    },
    {
      type: 'doc',
      id: 'v2/faq',
      label: '常见问题',
    },
  ],
};

export default sidebars;
