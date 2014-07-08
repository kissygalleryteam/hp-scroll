/*
combined files : 

gallery/hp-scroll/1.0/index

*/
/**
 * @fileoverview 60fps目标的scroll辅助插件
 * @author 承风<libiao.lb@tmall.com>
 * @module hp-scroll
 **/

KISSY.add('gallery/hp-scroll/1.0/index', function(S, DOM, Event) {
    var cssSupport = true;
    var inScroll = false;
    var addedCls = false;
    var HpScroll = {
        init : function() {
            //检测下CSS属性是否支持，支持范围见链接：http://caniuse.com/#search=pointer-events
            cssSupport = checkCssSupport();

            //劫持和修改默认的event.on方法
            if(!cssSupport) {
                this.delegateScroll();
            }
            var self = this;

            S.ready(function() {
                self.start();
            });
        },
        /**
         * 劫持整合页面的event
         */
        delegateScroll : function() {
            var defaultOnFn = Event.on;
            //管理mouseenter，mouseleave两个个响应
            Event.on = function(targets, type, fn, context) {
                var customFun = fn;
                if (/[mouseenter | mouseleave]/.test(type)) {
                    fn = function(e) {
                        //如果在scroll进行中就啥都不干， 否则就触发其定义的内容
                        if (inScroll) {
                            return;
                        } else {
                            customFun(e);
                        }
                    }
                }
                defaultOnFn(targets, type, fn, context);
            };
        },
        /**
         * 开始运行
         */
        start : function() {
            var timer;
            Event.on(window, 'scroll touchmove', function() {
                if(!inScroll) {
                    inScroll = true;
                    //如果支持禁掉，就禁掉it！
                    if(!addedCls && cssSupport) {
                        DOM.css('body', {
                            'pointerEvents' : 'none'
                        });
                        addedCls = true;
                    }
                }

                clearTimeout(timer);

                timer = setTimeout(function(){
                    inScroll = false;

                    //清除css
                    if(cssSupport) {
                        DOM.css('body', {
                            'pointerEvents' : ''
                        });
                        addedCls = false;
                    }
                }, 300);
            });
            //禁掉状态的click和tap都失效的哦~~so要自己代理下
            Event.on('body', 'click tap', function(e) {
                //scroll中的点击，清除计时
                if(!e.synthetic && inScroll) {
                    clearTimeout(timer);
                    inScroll = false;

                    if(cssSupport) {
                        //清除css
                        DOM.css('body', {
                            'pointerEvents' : ''
                        });
                        addedCls = false;

                        var pos = {
                            x : event.clientX,
                            y : event.clientY
                        };
                        //scroll中的
                        dispatchEvt(pos, e.type);
                    }
                }
            });
        }
    };

    /**
     * 检测下是否支持，不支持就拉倒
     */
    function checkCssSupport() {
        var el = DOM.create('<div></div>');
        DOM.css(el, {
            'pointerEvents' : 'auto'
        });
        return DOM.css(el, 'pointerEvents') === 'auto';
    }

    /**
     * 代理click和tap
     */
    function dispatchEvt(pos, type) {
        var el = document.elementFromPoint(pos.x, pos.y);

        Event.fire(el, type, {
            synthetic : true
        });
    }

    return HpScroll;
}, {
    requires : ['dom', 'event']
});




