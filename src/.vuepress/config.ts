import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  // 网站看板娘：把样式与外部脚本放到 head 数组
  head: [
    ["link", { rel: "stylesheet", type: "text/css", href: "https://live2d.xiaofa520.cn/live2d-widget/waifu.css" }],
    ["script", { src: "https://live2d.xiaofa520.cn/live2d-widget/jquery.min.js" }],
    ["script", { src: "https://live2d.xiaofa520.cn/live2d-widget/jquery-ui.min.js" }],
    ["script", { src: "https://live2d.xiaofa520.cn/live2d-widget/waifu-tips.js", defer: true }],
    ["script", { src: "https://live2d.xiaofa520.cn/live2d-widget/live2d.js", defer: true }],
    // 本地初始化脚本（放在 public/assets）
    ["script", { src: "/assets/waifu-init.js", defer: true }]
  ],

  base: "/",
  lang: "zh-CN",
  title: "我願一直向著陽光の博客",
  description: "我願一直向著陽光(ZGZYH)的博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

(function () {
  window.live2d_settings = window.live2d_settings || {};

  // 基础配置（按需修改）
  live2d_settings.modelAPI = "";
  live2d_settings.hitokotoAPI = "hitokoto.cn";
  live2d_settings.modelId = 0;
  live2d_settings.modelTexturesId = 53;
  live2d_settings.showToolMenu = true;
  live2d_settings.canCloseLive2d = true;
  live2d_settings.canSwitchModel = true;
  live2d_settings.canSwitchTextures = true;
  live2d_settings.canSwitchHitokoto = true;
  live2d_settings.canTakeScreenshot = true;
  live2d_settings.canTurnToHomePage = true;
  live2d_settings.canTurnToAboutPage = false;
  live2d_settings.modelStorage = true;
  live2d_settings.modelRandMode = "switch";
  live2d_settings.modelTexturesRandMode = "rand";
  live2d_settings.showHitokoto = true;
  live2d_settings.showF12Status = true;
  live2d_settings.showF12Message = false;
  live2d_settings.showF12OpenMsg = true;
  live2d_settings.showCopyMessage = true;
  live2d_settings.showWelcomeMessage = true;
  live2d_settings.waifuSize = "280x250";
  live2d_settings.waifuTipsSize = "250x70";
  live2d_settings.waifuFontSize = "14px";
  live2d_settings.waifuToolFont = "21px";
  live2d_settings.waifuToolLine = "28px";
  live2d_settings.waifuToolTop = "0px";
  live2d_settings.waifuMinWidth = "768px";
  live2d_settings.waifuEdgeSide = "left:0";
  live2d_settings.waifuDraggable = "disable";
  live2d_settings.waifuDraggableRevert = true;
  live2d_settings.homePageUrl = "javascript:history.go(-1)";
  live2d_settings.screenshotCaptureName = "live2d.png";

  function tryInit() {
    if (typeof initModel === "function") {
      initModel("https://live2d.xiaofa520.cn/live2d-widget/waifu-tips.json");
    } else {
      setTimeout(tryInit, 500);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    // 确保 DOM 已插入再初始化
    tryInit();
  });
})();
