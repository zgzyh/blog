import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "我願一直向著陽光の博客",
  description: "我願一直向著陽光(ZGZYH)的博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
