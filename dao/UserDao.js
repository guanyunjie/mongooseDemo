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
    User.findById(data.id,function (err,user) {
        if(err) console.error(err);
        else{
            callback(user);
        }
    });
}
/**
 * 修改用户的简介
 * @param data
 * @param callback
 * @private
 */
function _modifyIntroduction(data,callback) {
    User.findById(data.id,function (err,user) {
        user.introduction = data.introduction;
        user.save(function (err) {
            if(err) console.error(err);
            else{
                callback(user);
            }
        });
    });
}
/**
 * 修改密码
 * @param data
 * @param callback
 * @private
 */
function _modifyPassword(data,callback) {
    User.findById(data.id,function (err,user) {
        if(err) console.error(err);
        else{
            user.password = data.password;
            user.save(function (err) {
                if(err) console.error(err);
                else{
                    callback(user);
                }
            });
        }
    });
}
/**
 * 修改昵称
 * @param data
 * @param callback
 * @private
 */
function _modifyNickname(data,callback) {
    User.findById(data.id,function (err,user) {
        if(err) console.error(err);
        else{
            user.nickname = data.nickname;
            user.save(function (err) {
                if(err) console.error(err);
                else{
                    callback(user);
                }
            });
        }
    });
}

exports.login = _login;
exports.regist = _regist;
exports.findUserById = _findUserById;
exports.modifyIntroduction = _modifyIntroduction;
exports.modifyNickname = _modifyNickname;
exports.modifyPassword = _modifyPassword;