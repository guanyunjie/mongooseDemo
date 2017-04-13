define(["../data/common.data", "jquery"], function(common, $) {
    /**
	 *
     * @param data
     * @param callback
     */
    function blog_findCommentsOfBlog(data,callback) {
        common.request('blog_findCommentsOfBlog',data,function (result) {
            callback(result);
        });
    }

    /**
     *
     * @param data
     * @param callback
     */
    function blog_insertBlog(data,callback) {
        common.request('blog_insertBlog',data,function (result) {
            callback(result);
        });
    }

    /**
     * 用户登录方法
     * @param data
     * @param callback
     */
    function user_login(data,callback) {
        common.request('user_login',data,function (result) {
            callback(result);
        });
    }

    /**
     * 用户注册方法
     * @param data
     * @param callback
     */
    function user_regist(data,callback) {
        common.request('user_regist',data,function (result) {
            callback(result);
        });
    }

    /**
     * 根据Id查询博客
     * @param data
     * @param callback
     */
    function blog_findById(data,callback) {
        common.request('blog_findById',data,function (result) {
            callback(result);
        });
    }

    /**
     * 发表评论
     * @param data
     * @param callback
     */
    function comment_insert(data,callback) {
        common.request('comment_insert',data,function (result) {
            callback(result);
        });
    }

    /**
     * 发表回复
     * @param data
     * @param callback
     */
    function reply_insert(data,callback) {
        common.request('reply_insert',data,function (result) {
            callback(result);
        });
    }


	return {
        blog_findCommentsOfBlog:blog_findCommentsOfBlog,
        blog_insertBlog:blog_insertBlog,
        user_login:user_login,
        user_regist:user_regist,
        blog_findById:blog_findById,
        comment_insert:comment_insert,
        reply_insert:reply_insert
	}
});