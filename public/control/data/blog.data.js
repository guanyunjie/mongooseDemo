/**
 * Created by Guanyunjie on 2017/4/14.
 */
define(['jquery','./common.data'],function ($,common) {
    /**
     * 分页查询blog
     * @param data
     * @param callback
     */
    function blog_listBlog(data,callback) {
        common.request('blog_listBlog',data,function (result) {
            callback(result);
        });
    }

    return{
        blog_listBlog:blog_listBlog
    }
});