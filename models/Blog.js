/**
 * Created by Guanyunjie on 2017/4/10.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('./db');
var blogSchema = new Schema({
    createtime  :   {type:Date,default:Date.now},
    user    :   {type:Schema.Types.ObjectId,ref:'User'},
    title   :   {type:String},
    content :   {type:String},
    comment :   [{type:Schema.Types.ObjectId,ref:'Comment'}],
    praise  :   [{type:Schema.Types.ObjectId,ref:'Praise'}]
},{
    versionKey:false
});

var blogModel = mongoose.model('Blog',blogSchema);
module.exports = blogModel;
