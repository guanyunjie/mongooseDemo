/**
 * Created by Guanyunjie on 2017/4/14.
 */
define(['./common.data'],function (common) {
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
        user_findUserById:user_findUserById
    }
});