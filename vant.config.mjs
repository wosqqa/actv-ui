export default {
  name: 'actv-ui',
  build: {
    css: {
      preprocessor: 'sass',
    },
    site: {
      publicPath: '/actv-ui/',
    },
  },
  site: {
    title: 'actv-ui',
    logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础UI组件',
        items: [
          {
            path: 'button',
            title: '卡片类',
          },
          {
            path: 'button',
            title: '列表类',
          },
          {
            path: 'button',
            title: '进度类',
          },
          {
            path: 'button',
            title: '列表类',
          },
          {
            path: 'button',
            title: '按钮类',
          },
          {
            path: 'header',
            title: '导航类',
          },
          {
            path: 'header',
            title: '输入类',
          },
        ],
      },
      {
        title: '布局UI',
        items: [
          {
            path: 'button',
            title: 'Button 按钮',
          },
          {
            path: 'switch',
            title: 'Switch 开关',
          },
        ],
      },
      {
        title: '功能组件',
        items: [
          // {
          //   path: 'button',
          //   title: 'Button 按钮',
          // },
          // {
          //   path: 'switch',
          //   title: 'Switch 开关',
          // },
        ],
      },
    ],
  },
};
