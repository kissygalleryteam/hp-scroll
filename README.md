## hp-scroll

* 版本：1.0
* 教程：[http://gallery.kissyui.com/hp-scroll/1.0/guide/index.html](http://gallery.kissyui.com/hp-scroll/1.0/guide/index.html)
* demo：[http://gallery.kissyui.com/hp-scroll/1.0/demo/index.html](http://gallery.kissyui.com/hp-scroll/1.0/demo/index.html)

## 简介

* 本组件意在解决scroll时候出发鼠标事件，而鼠标事件导致reflow和repaint而让页面卡帧，详情可见ATA的帖子

## 实现介绍

* [高级浏览器支持CSS `pointer-events:none`](http://caniuse.com/#search=pointer-events)来禁掉元素触发鼠标事件和样式。直接在scroll开始时候赋值到`<body>`的行内样式上，整个页面不再触发鼠标事件。

* 其余浏览器，对KISSY的DOM内的on方法进行了劫持，当scroll时候不处罚`mouseenter`,`mouseleave`响应。


## 使用方式

* 在注册事件之前，引入本js，调用init方法。会自动管理scroll的效率。。。够简单了


## changelog

### V1.0
* 初始化



