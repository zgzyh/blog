import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
   // 网站看板娘
   head: [
    [
      "script",
      { src: "https://live2d.xiaofa520.cn/api/" }
    ]
  ],
  // 网站根路径
  
  base: "/",

  lang: "zh-CN",
  title: "我願一直向著陽光の博客",
  description: "我願一直向著陽光(ZGZYH)的博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});