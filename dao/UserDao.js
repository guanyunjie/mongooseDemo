/**
 * Created by Guanyunjie on 2017/4/11.
 */
var pack = require('../models/pack');
var User = require('../models/User');
/**
 * 登录方法
 * @param data
 * @param callback
 * @private
 */
function _login(data,callback) {
    User.findOne({email:data.email,password:data.password},function (err,data) {
        if(err) console.error(err);
        else{
            callback(data);
        }
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
        if(err) console.error(err);
        else{
            if(!result){
                data.nickname = data.email;
                User.create(data,function (err,result) {
                    if(err) console.error(err);
                    else{
                        callback(result);
                    }
                });
            }
            else{
                callback(result);
            }
        }
    });
}
/**
 * 有id查询用户信息
 * @param data
 * @param callback
 * @private
 */
function _findUserById(data,callback) {
    User.findById(data.id,function (err,data) {
        if(err) console.error(err);
        else{
            callback(data);
        }
    });
}
exports.login = _login;
exports.regist = _regist;
exports.findUserById = _findUserById;