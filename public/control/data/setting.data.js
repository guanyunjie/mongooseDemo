/**
 * Created by Guanyunjie on 2017/4/18.
 */
define(["../data/common.data", "jquery"], function(common, $) {
    /**
     * 修改昵称
     * @param data
     * @param callback
     */
    function user_modifyNickname(data,callback) {
        common.request('user_modifyNickname',data,function (result) {
            callback(result);
        });
    }

    /**
     * 修改密码
     * @param data
     * @param callback
     */
    function user_modifyPassword(data,callback) {
        common.request('user_modifyPassword',data,function (result) {
            callback(result);
        });
    }

	return {
        user_modifyNickname:user_modifyNickname,
        user_modifyPassword:user_modifyPassword
	}
});