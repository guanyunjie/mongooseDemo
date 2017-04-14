/**
 * Created by Guanyunjie on 2017/4/14.
 */
define(['./common.data'],function (common) {
    /**
     * 登录方法
     * @param data
     * @param callback
     */
    function user_login(data,callback) {
        common.request('user_login',data,function (result) {
            callback(result);
        });
    }

    /**
     * 注册方法
     * @param data
     * @param callback
     */
    function user_regist(data,callback) {
        common.request('user_regist',data,function (result) {
            callback(result);
        });
    }
    return {
        user_login:user_login,
        user_regist:user_regist
    }
});