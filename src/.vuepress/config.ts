import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  // 网站看板娘
  head: [
    [
      "link",
      { rel: "stylesheet", type: "text/css", href: "https://live2d.xiaofa520.cn/live2d-widget/waifu.css" }
    ],
    [
      "script",
      { src: "https://live2d.xiaofa520.cn/live2d-widget/jquery.min.js" }
    ],
    [
      "script",
      { src: "https://live2d.xiaofa520.cn/live2d-widget/jquery-ui.min.js" }
    ],
    [
      "script",
      {
        src: "https://live2d.xiaofa520.cn/live2d-widget/waifu-tips.js"
      }
    ],
    [
      "script",
      {
        src: "https://live2d.xiaofa520.cn/live2d-widget/live2d.js"
      }
    ],
    [
      "script",
      {},
      `
      /* 可直接修改部分参数 */
      live2d_settings['modelAPI'] = '不需要啦（x';                 // 自建 API 修改这里
      live2d_settings['hitokotoAPI'] = 'hitokoto.cn';                  // 一言 API，可选 'lwl12.com', 'hitokoto.cn', 'jinrishici.com'(古诗词)
      live2d_settings['modelId']= 0;            // 默认模型 ID，可在 F12 控制台找到
      live2d_settings['modelTexturesId']= 53;           // 默认材质 ID，可在 F12 控制台找到
      live2d_settings['showToolMenu']         = true;         // 显示 工具栏          ，可选 true(真), false(假)
      live2d_settings['canCloseLive2d']       = true;         // 显示 关闭看板娘  按钮，可选 true(真), false(假)
      live2d_settings['canSwitchModel']       = true;         // 显示 模型切换    按钮，可选 true(真), false(假)
      live2d_settings['canSwitchTextures']    = true;         // 显示 材质切换    按钮，可选 true(真), false(假)
      live2d_settings['canSwitchHitokoto']    = true;         // 显示 一言切换    按钮，可选 true(真), false(假)
      live2d_settings['canTakeScreenshot']    = true;         // 显示 看板娘截图  按钮，可选 true(真), false(假)
      live2d_settings['canTurnToHomePage']    = true;         // 显示 返回首页    按钮，可选 true(真), false(假)
      live2d_settings['canTurnToAboutPage']   = false;         // 显示 跳转关于页  按钮，可选 true(真), false(假)
      live2d_settings['modelStorage']         = true;         // 记录 ID (刷新后恢复)，可选 true(真), false(假)
      live2d_settings['modelRandMode']        = 'switch';     // 模型切换，可选 'rand'(随机), 'switch'(顺序)
      live2d_settings['modelTexturesRandMode']= 'rand';       // 材质切换，可选 'rand'(随机), 'switch'(顺序)
      live2d_settings['showHitokoto']         = true;         // 显示一言
      live2d_settings['showF12Status']        = true;         // 显示加载状态
      live2d_settings['showF12Message']       = false;        // 显示看板娘消息
      live2d_settings['showF12OpenMsg']       = true;         // 显示控制台打开提示
      live2d_settings['showCopyMessage']      = true;         // 显示 复制内容 提示
      live2d_settings['showWelcomeMessage']   = true;         // 显示进入面页欢迎词
      live2d_settings['waifuSize']= '280x250';    // 看板娘大小，例如 '280x250', '600x535'
      live2d_settings['waifuTipsSize']= '250x70'; // 提示框大小，例如 '250x70', '570x150'
      live2d_settings['waifuFontSize']= '14px'; // 提示框字体，例如 '12px', '30px'
      live2d_settings['waifuToolFont']= '21px';  // 工具栏字体，例如 '14px', '36px'
      live2d_settings['waifuToolLine']= '28px'; // 工具栏行高，例如 '20px', '36px'
      live2d_settings['waifuToolTop']= '0px'  // 工具栏顶部边距，例如 '0px', '-60px'
      live2d_settings['waifuMinWidth']= '768px';// 面页小于 指定宽度 隐藏看板娘，例如 'disable'(禁用), '768px'
      live2d_settings['waifuEdgeSide']= 'left:0';// 看板娘贴边方向，例如 'left:0'(靠左 0px), 'right:30'(靠右 30px)
      live2d_settings['waifuDraggable']= 'disable';// 拖拽样式，例如 'disable'(禁用), 'axis-x'(只能水平拖拽), 'unlimited'(自由拖拽)
      live2d_settings['waifuDraggableRevert'] = true;// 松开鼠标还原拖拽位置，可选 true(真), false(假)
      live2d_settings['homePageUrl']='javascript:history.go(-1)'; // 主页地址，可选 'auto'(自动), '{URL 网址}'
      live2d_settings['screenshotCaptureName']= 'live2d.png'; // 看板娘截图文件名，例如 'live2d.png'
      /* 在 initModel 前添加 */
      initModel("https://live2d.xiaofa520.cn/live2d-widget/waifu-tips.json");
      `
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