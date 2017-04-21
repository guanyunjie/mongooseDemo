/**
 * Created by Administrator on 2017/4/2 0002.
 */
define(['jquery'],function ($) {
    /**
     *  请求mongoose接口
     * @param service
     * @param data
     * @param callback
     */
    function request(service,data,callback) {
        $.ajax({
            contentType	: "application/json",
            type: "post",
            url: '/mongoose/'+service,
            data: JSON.stringify(data),
            dataType: "json",
            success: function (data) {
                callback(data);
            }
        });
    }

    /**
     * 请求java服务端接口
     * @param service
     * @param data
     * @param callback
     */
    /*function request(service,data,callback) {
        var bean = {
            service:service,
            data:data
        };
        $.ajax({
            contentType	: "application/json",
            type: "post",
            url: '/mysql',
            data: JSON.stringify(bean),
            dataType: "json",
            success: function (data) {
                callback(data);
            }
        });
    }*/

    return {
        request : request
    }
});