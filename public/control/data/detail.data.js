/**
 * Created by Administrator on 2017/4/18 0017.
 */
define(['jquery','./common.data'],function ($,common) {
    /**
     * 根据id查询博客详情
     * @param data
     * @param callback
     */
    function blog_findById(data,callback) {
        common.request('blog_findById',data,function (result) {
            callback(result);
        });
    }

    /**
     * 查询评论和回复
     * @param data
     * @param callback
     */
    function blog_findCommentAndReply(data,callback) {
        common.request('blog_findCommentAndReply',data,function (result) {
            callback(result);
        });
    }
    /**
     * 新增评论
     * @param data
     * @param callback
     */
    function comment_insert(data,callback) {
        common.request('comment_insert',data,function (result) {
            callback(result);
        });
    }

    /**
     * 新增回复
     * @param data
     * @param callback
     */
    function reply_insert(data,callback) {
        common.request('reply_insert',data,function (result) {
            callback(result);
        });
    }
    return {
        blog_findById:blog_findById,
        comment_insert:comment_insert,
        blog_findCommentAndReply:blog_findCommentAndReply,
        reply_insert:reply_insert
    }
});