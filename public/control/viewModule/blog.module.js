/**
 * Created by Guanyunjie on 2017/4/14.
 */
define(['avalon','jquery','../data/blog.data','./common.module','./pager.module'],function (avalon,$,$data,$com,$pager) {
    avalon.ready(function () {
        var vm_blog = avalon.define({
            $id        :  'blogControl',
            blogs   :  [],
        });
        $data.blog_listBlog({num:1},function (result) {
            if(result && result.result){
                console.log(result);
                vm_blog.blogs = result.result;
            }
        });
        avalon.scan($("#main")[0]);
    });

    $pager.pagation(1,8);



    return {

    }
});