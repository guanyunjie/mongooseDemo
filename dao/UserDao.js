/**
 * Created by Guanyunjie on 2017/4/11.
 */
var resultUtil = require('../models/resultUtil');
var User = require('../models/User');
/**
 * 登录方法
 * @param data
 * @param callback
 * @private
 */
function _login(data,callback) {
    User.findOne({email:data.email,password:data.password},function (err,data) {
        callback(resultUtil.returnResult(err,data));
    });
}
/**
 * 注册方法
 * @param data
 * @param callback
 * @private
 */
function _regist(data,callback) {
    User.findOne({'email':data.email},'_id',function (err,result) {
        if(err) return handleError(err);
        if(!result){
            User.create(data,function (err,result) {
                callback(resultUtil.returnResult(err,result));
            });
        }
        else{
            console.log('已经注册');
        }
    });
}

exports.login = _login;
exports.regist = _regist;