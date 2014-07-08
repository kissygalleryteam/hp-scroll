## hp-scroll

* 版本：1.0
* 教程：[http://gallery.kissyui.com/hp-scroll/1.0/guide/index.html](http://gallery.kissyui.com/hp-scroll/1.0/guide/index.html)
* demo：[http://gallery.kissyui.com/hp-scroll/1.0/demo/index.html](http://gallery.kissyui.com/hp-scroll/1.0/demo/index.html)

## 简介

* 本组件意在解决scroll时候出发鼠标事件，而鼠标事件导致reflow和repaint而让页面卡帧，详情可见ATA的帖子

## 实现介绍

* [高级浏览器支持CSS `pointer-events:none`](http://caniuse.com/#search=pointer-events)来禁掉元素触发鼠标事件和样式。直接在scroll开始时候赋值到`<body>`的行内样式上，整个页面不再触发鼠标事件。

* 其余浏览器，对KISSY的Event内的on方法进行了劫持，当scroll时候不处罚`mouseenter`,`mouseleave`响应。


## 使用方式

* **在注册事件之前**，先入本js，调用init方法。会自动管理scroll的效率。。。够简单了
* why？保障低端浏览器下，Event.on方法被正确重写。

## 缺陷

* 目前只对KISSY的Event内的on方法做了劫持。对于低端浏览器而言，只有使用Event.on来绑定的mouse事件会被劫持而提高效率。
* [高级浏览器](http://caniuse.com/#search=pointer-events)，当样式pointer-events绑定后，自然不会触发mouse事件，就不会有这个劫持逻辑了。
* 源代码超简单，欢迎吐槽，讨论，优化

## changelog

### V1.0
* 初始化



