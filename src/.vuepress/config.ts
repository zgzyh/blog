import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  head: [
    ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://live2d.xiaofa520.cn/live2d-widget/waifu.css' }],
    ['script', { src: 'https://live2d.xiaofa520.cn/live2d-widget/jquery.min.js' }],
    ['script', { src: 'https://live2d.xiaofa520.cn/live2d-widget/jquery-ui.min.js' }],
    ['script', { src: 'https://live2d.xiaofa520.cn/live2d-widget/waifu-tips.js' }],
    ['script', { src: 'https://live2d.xiaofa520.cn/live2d-widget/live2d.js' }],
    [
      'script',
      {},
      `(function(){document.addEventListener('DOMContentLoaded',function(){if(!document.querySelector('.waifu')){var d=document.createElement('div');d.innerHTML='<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas></div>';document.body.appendChild(d.firstElementChild||d);}window.live2d_settings=window.live2d_settings||{};window.live2d_settings.modelAPI='https://live2d.xiaofa520.cn/live2d-widget/';if(typeof initModel==='function')initModel('https://live2d.xiaofa520.cn/live2d-widget/waifu-tips.json');});})();`
    ],
  ],

  base: "/",
  lang: "zh-CN",
  title: "我願一直向著陽光の博客",
  description: "我願一直向著陽光(ZGZYH)的博客",

  theme,
  // shouldPrefetch: false,
});






