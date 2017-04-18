/**
 * Created by Guanyunjie on 2017/4/14.
 */
define(['avalon','jquery','../data/blog.data','./common.module','./pager.module'],function (avalon,$,$data,$com,$pager) {
    avalon.ready(function () {
        var vm_blog = avalon.define({
            $id        :  'blogControl',
            blogs   :  [],
        });
        avalon.scan($("#main")[0]);

        var pagenum = 1,total;
        listBlog();
        /**
         *
         * @param pagenum
         */
        function listBlog() {
            $data.blog_listBlog({num:pagenum},function (result) {
                if(result && result.result){
                    console.log(result);
                    pagenum = result.result.num;
                    total = result.result.total;
                    $pager.pagation(pagenum,total);
                    vm_blog.blogs = result.result.result;
                }
            });
        }

        /**
         * 页码点击事件
         */
        $(".page-num").click(function () {
            var num = parseInt($(this).text());
            if(num !== pagenum){
                pagenum = num;
                listBlog();
            }
        });
        /**
         * 上一页点击事件
         */
        $(".page-prev").click(function () {
            if(pagenum === 1){
                alert("已经是第一页了~")
            }
            else{
                --pagenum;
                listBlog();
            }
        });
        /**
         * 下一页点击事件
         */
        $(".page-next").click(function () {
            if(pagenum === total){
                alert("已经是第一页了~")
            }
            else{
                ++pagenum;
                listBlog();
            }
        });
    });

    return {
    }
});