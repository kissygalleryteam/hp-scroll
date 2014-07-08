/**
 * @fileoverview 
 * @author 承风<libiao.lb@tmall.com>
 * @module hp-scroll
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     * 
     * @class HpScroll
     * @constructor
     * @extends Base
     */
    function HpScroll(comConfig) {
        var self = this;
        //调用父类构造函数
        HpScroll.superclass.constructor.call(self, comConfig);
    }
    S.extend(HpScroll, Base, /** @lends HpScroll.prototype*/{

    }, {ATTRS : /** @lends HpScroll*/{

    }});
    return HpScroll;
}, {requires:['node', 'base']});



