/**
 * Created by Administrator on 2017/4/17 0017.
 */
define(['jquery','./common.data'],function ($,common) {
    /**
     * 查询该用户所有的博客
     * @param data
     * @param callback
     */
    function blog_findBlogByUserId(data,callback) {
        common.request('blog_findBlogByUserId',data,function (result) {
            callback(result);
        });
    }

    /**
     * 查询该用户发表的所有评论
     * @param data
     * @param callback
     */
    function blog_findCommentByUserId(data,callback) {
        common.request('blog_findCommentByUserId',data,function (result) {
            callback(result);
        });
    }

    /**
     * 修改用户的简介
     * @param data
     * @param callback
     */
    function user_modifyIntroduction(data,callback) {
        common.request('user_modifyIntroduction',data,function (result) {
            callback(result);
        });
    }

    /**
     * 根据用户id查询用户信息
     * @param data
     * @param callback
     */
    function user_findUserById(data,callback) {
        common.request('user_findUserById',data,function (result) {
            callback(result);
        });
    }
    return {
        blog_findBlogByUserId:blog_findBlogByUserId,
        blog_findCommentByUserId:blog_findCommentByUserId,
        user_modifyIntroduction:user_modifyIntroduction,
        user_findUserById:user_findUserById
    }
});