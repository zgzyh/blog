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
      `(function(){
  document.addEventListener('DOMContentLoaded', function () {
    if (!document.querySelector('.waifu')) {
      var container = document.createElement('div');
      container.innerHTML = '' +
        '<div class="waifu">' +
          '<div class="waifu-tips"></div>' +
          '<canvas id="live2d" class="live2d"></canvas>' +
          '<div class="waifu-tool">' +
            '<span class="fui-home"></span>' +
            '<span class="fui-chat"></span>' +
            '<span class="fui-eye"></span>' +
            '<span class="fui-user"></span>' +
            '<span class="fui-photo"></span>' +
            '<span class="fui-info-circle"></span>' +
            '<span class="fui-cross"></span>' +
          '</div>' +
        '</div>';
      document.body.appendChild(container.firstElementChild || container);
    }

    window.live2d_settings = window.live2d_settings || {};
    var s = window.live2d_settings;

    // 后端接口
    s.modelAPI = 'https://live2d.xiaofa520.cn/live2d-widget/';
    s.hitokotoAPI = 'hitokoto.cn';

    // 默认模型
    s.modelId = 1;
    s.modelTexturesId = 11;

    // 工具栏设置
    s.showToolMenu = true;
    s.canCloseLive2d = true;
    s.canSwitchModel = true;
    s.canSwitchTextures = true;
    s.canSwitchHitokoto = true;
    s.canTakeScreenshot = true;
    s.canTurnToHomePage = true;
    s.canTurnToAboutPage = false;

    // 模型切换模式
    s.modelStorage = true;
    s.modelRandMode = 'switch';
    s.modelTexturesRandMode = 'rand';

    // 提示消息选项
    s.showHitokoto = true;
    s.showF12Status = true;
    s.showF12Message = false;
    s.showF12OpenMsg = true;
    s.showCopyMessage = true;
    s.showWelcomeMessage = true;

    // 看板娘样式设置
    s.waifuSize = '280x250';
    s.waifuTipsSize = '250x70';
    s.waifuFontSize = '14px';
    s.waifuToolFont = '21px';
    s.waifuToolLine = '28px';
    s.waifuToolTop = '0px';
    s.waifuMinWidth = '768px';
    s.waifuEdgeSide = 'left:0';
    s.waifuDraggable = 'disable';
    s.waifuDraggableRevert = true;
    s.homePageUrl = 'javascript:history.go(-1)';
    s.screenshotCaptureName = 'live2d.png';

    /* 在 initModel 前添加 */
    if (typeof initModel === 'function') {
      initModel('https://live2d.xiaofa520.cn/live2d-widget/waifu-tips.json');
    } else {
      setTimeout(function () {
        if (typeof initModel === 'function') initModel('https://live2d.xiaofa520.cn/live2d-widget/waifu-tips.json');
      }, 1000);
    }
  });
})();`
    ],
  ],

  base: "/",
  lang: "zh-CN",
  title: "我願一直向著陽光の博客",
  description: "我願一直向著陽光(ZGZYH)的博客",

  theme,
  // shouldPrefetch: false,
});






