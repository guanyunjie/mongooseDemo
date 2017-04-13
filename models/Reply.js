/**
 * Created by Guanyunjie on 2017/4/10.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('./db');
var replySchema = new Schema({
    commentid:{type:Schema.Types.ObjectId,ref:'Comment'},
    userid:{type:Schema.Types.ObjectId,ref:'User'},
    beuserid:{type:Schema.Types.ObjectId,ref:'User'},
    content:{type:String},
    createtime:{type:Date,default:Date.now}
},{
    versionKey:false
});

var replyModel = mongoose.model('Reply',replySchema);
module.exports = replyModel;