import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "我願一直向著陽光の博客",
  description: "我願一直向著陽光(ZGZYH)的博客",

  module.exports = {
  themeConfig: {
    repo: 'zgzyh/blog', // GitHub 仓库的 URL
    docsDir: 'src/posts', // 文档所在目录，如果不是默认的 `docs` 目录，请更改此值
    editLinks: true, // 启用编辑链接
    editLinkText: '在 GitHub 上编辑此页', // 编辑链接的文本
  },
};

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
