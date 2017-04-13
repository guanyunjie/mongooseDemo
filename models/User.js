/**
 * Created by Guanyunjie on 2017/4/10.
 * 用户类
 */
require('./db');
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    email:{type:String},
    password:{type:String},
    nickname:{type:String},
    photo:{type:String,default:'../style/img/001.jpg'}
},{
    versionKey:false
});

var userModel = mongoose.model('User',userSchema);
module.exports = userModel;