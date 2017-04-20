/**
 * Created by Guanyunjie on 2017/4/10.
 * 评论表
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('./db');
var commentSchema = new Schema({
    blog:{type:Schema.Types.ObjectId,ref:'Blog'},
    user:{type:Schema.Types.ObjectId,ref:'User'},
    content:{type:String},
    reply:[{type:Schema.Types.ObjectId,ref:'Reply'}],
    createtime:{type:Date,default:Date.now}
},{
    versionKey:false
});

var commentModel = mongoose.model('Comment',commentSchema);
module.exports = commentModel;
