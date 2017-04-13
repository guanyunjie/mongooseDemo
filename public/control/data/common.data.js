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
    function request_mysql(service,data,callback) {
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
     * 通用新增
     * @param tabName
     * @param data
     * @param callback
     */
    function common_insert(tabName,data,callback) {
        request_mysql('common_insert',tabName,data,function (result) {
            callback(result);
        });
    }

    /**
     * 通用修改
     * @param tabName
     * @param data
     * @param callback
     */
    function common_update(tabName,data,callback) {
        if(!data.id){
            callback({msg:'必须以主键id修改数据',status:'error'});
            return;
        }
        request_mysql('common_update',tabName,{id:data.id},function (result) {
            callback(result);
        });
    }
    /**
     * 通用删除
     * @param tabName
     * @param data
     * @param callback
     */
    function common_delete(tabName,data,callback) {
        if(!data.id){
            callback({msg:'必须以主键id删除数据',status:'error'});
            return;
        }
        request_mysql('common_delete',tabName,{id:data.id},function (result) {
            callback(result);
        });
    }
    /**
     * 通用findById
     * @param tabName
     * @param data
     * @param callback
     */
    function common_find(tabName,data,callback) {
        if(!data.id){
            callback({msg:'必须以主键id查询数据',status:'error'});
            return;
        }
        request_mysql('common_find',tabName,{id:data.id},function (result) {
            callback(result);
        });
    }
    /**
     *
     * @param data
     * @param callback
     */
    function queryDirectory(data,callback) {
        request('queryDirectory',data,function (result) {
            callback(result);
        })
    }

    return {
        request : request,
        request_mysql:request_mysql,
        queryDirectory:queryDirectory,
        common_insert:common_insert,
        common_update:common_update,
        common_find:common_find,
        common_delete:common_delete
    }
});