import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "博文",
    icon: "pen-to-square",
    link: "/posts/",
  },
  {
    text: "个人界面",
    icon: "user",
    link: "https://blog.wyyzxzyg.cn",
  },
]);
