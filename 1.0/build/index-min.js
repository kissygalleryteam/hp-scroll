/*!build time : 2014-07-08 3:56:27 PM*/
KISSY.add("gallery/hp-scroll/1.0/index",function(a,b,c){function d(){var a=b.create("<div></div>");return b.css(a,{pointerEvents:"auto"}),"auto"===b.css(a,"pointerEvents")}function e(a,b){var d=document.elementFromPoint(a.x,a.y);c.fire(d,b,{synthetic:!0})}var f=!0,g=!1,h=!1,i={init:function(){f=d(),f||this.delegateScroll();var b=this;a.ready(function(){b.start()})},delegateScroll:function(){var a=c.on;c.on=function(b,c,d,e){var f=d;/[mouseenter | mouseleave]/.test(c)&&(d=function(a){g||f(a)}),a(b,c,d,e)}},start:function(){var a;c.on(window,"scroll touchmove",function(){g||(g=!0,!h&&f&&(b.css("body",{pointerEvents:"none"}),h=!0)),clearTimeout(a),a=setTimeout(function(){g=!1,f&&(b.css("body",{pointerEvents:""}),h=!1)},300)}),c.on("body","click tap",function(c){if(!c.synthetic&&g&&(clearTimeout(a),g=!1,f)){b.css("body",{pointerEvents:""}),h=!1;var d={x:event.clientX,y:event.clientY};e(d,c.type)}})}};return i},{requires:["dom","event"]});