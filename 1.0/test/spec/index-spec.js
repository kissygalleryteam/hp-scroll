KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('hp-scroll', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','gallery/hp-scroll/1.0/']});