import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const a='/index';
const config: IConfig =  {
  treeShaking: true,
  routes: [
    {
      path: '/',
      //component: '../layouts/index',
      routes: [
        {
          path: '/welcome',
          component: '../layouts/box',
          routes:[
            { path: '/welcome', redirect: '/welcome/hello' },
            { path: '/welcome/hello', component: './hello' },
            { path: '/welcome/list', component: './list' },
          ]
        },
        { path: '/puzzlecards', component: './puzzlecard' },
        { path: '/list', component: './list' },
        { path: '/',redirect: '/e' },
        { path: '/e', component: `../pages${a}` },
        //{ path: '/welcome', component: '../pages/index' },
      ]
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'test-project',
      dll: true,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  proxy: {
    '/random_joke': {
      target: 'https://official-joke-api.appspot.com',
      changeOrigin: true
    },
    '/dev': {
      changeOrigin:true
    }
  },
}

export default config;
