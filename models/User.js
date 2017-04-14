/**
 * Created by Guanyunjie on 2017/4/10.
 * 用户类
 */
require('./db');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    email:{type:String},
    password:{type:String},
    nickname:{type:String},
    blog:[{type:Schema.Types.ObjectId,ref:'Blog'}],
    comment:[{type:Schema.Types.ObjectId,ref:'Comment'}],
    introduction:{type:String,default:'这个人很懒，什么都没留下~'},
    photo:{type:String,default:'../style/img/001.jpg'}
},{
    versionKey:false
});

var userModel = mongoose.model('User',userSchema);
module.exports = userModel;