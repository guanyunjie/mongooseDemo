/**
 * Created by Guanyunjie on 2017/4/10.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('./db');
var replySchema = new Schema({
    comment:{type:Schema.Types.ObjectId,ref:'Comment'},
    user:{type:Schema.Types.ObjectId,ref:'User'},
    beuser:{type:Schema.Types.ObjectId,ref:'User'},
    content:{type:String},
    createtime:{type:Date,default:Date.now}
},{
    versionKey:false
});

replySchema.statics.findRef = function (id) {
    return this.model('Reply').find({comment:id})
        .populate('user','nickname photo')
        .populate('beuser','nickname photo')
        .exec();
};

var replyModel = mongoose.model('Reply',replySchema);
module.exports = replyModel;