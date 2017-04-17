/**
 * Created by Guanyunjie on 2017/4/14.
 */
define(['./common.data'],function (common) {
    /**
     * 发表博客
     * @param data
     * @param callback
     */
    function blog_publish(data,callback) {
        common.request('blog_publish',data,function (result) {
            callback(result);
        });
    }

    return {
        blog_publish:blog_publish
    }
});