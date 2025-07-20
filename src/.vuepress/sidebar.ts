import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "VuePress教程",
      icon: "laptop-code",
      prefix: "posts/VuePress教程/",
      link: "posts/VuePress教程/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/Windows",
      children: "structure",
    },
    //"intro",
  ],
});
