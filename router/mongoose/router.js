/**
 * Created by Guanyunjie on 2017/4/10.
 */
var BlogDao = require('../../dao/BlogDao');
var UserDao = require('../../dao/UserDao');
var CommentDao = require('../../dao/CommentDao');
var ReplyDao = require('../../dao/ReplyDao');

function proxy(service,data,callback) {
    var str = service.split('_');
    if(str.length != 2) throw new Error('接口名格式有误！');
    var modelName = str[0];
    var serviceName = str[1];
    try{
        switch (modelName){
            case 'blog' :
                BlogDao[serviceName](data,function (result) {
                    callback(result);
                });
                break;
            case 'user':
                UserDao[serviceName](data,function (result) {
                    callback(result);
                });
                break;
            case 'comment':
                CommentDao[serviceName](data,function (result) {
                    callback(result);
                });
                break;
            case 'reply':
                ReplyDao[serviceName](data,function (result) {
                    callback(result);
                });
                break;
            default:
                console.warn('该集合未定义：'+modelName);
                callback({message:'error',result:{}});
                break;
        }
    }
    catch(TypeError) {
        console.info('该接口未定义：'+service);
        callback({message:'error',result:{}});
    }
}
exports.proxy = proxy;