/**
 * Created by Guanyunjie on 2017/4/10.
 * 评论表
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('./db');
var commentSchema = new Schema({
    blogid:{type:Schema.Types.ObjectId,ref:'Blog'},
    userid:{type:Schema.Types.ObjectId,ref:'User'},
    content:{type:String},
    replies:[{type:Schema.Types.ObjectId,ref:'Reply'}],
    createtime:{type:Date,default:Date.now}
},{
    versionKey:false
});

/**
 *
 * @param _id
 * @param replyid
 * @param callback
 */
commentSchema.statics.addReply = function (_id,replyid,callback) {
    this.model('Comment').update({_id:_id},{$addToSet:{replies:replyid}},callback);
}

var commentModel = mongoose.model('Comment',commentSchema);
module.exports = commentModel;
