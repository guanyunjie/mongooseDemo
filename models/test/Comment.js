/**
 * Created by Guanyunjie on 2017/4/13.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = require('../db');

var CommentSchema = new Schema({
    comments:[{
        content:String,
        create_by:{type:mongoose.Schema.Types.ObjectId,ref:'User'}
    }]
},{versionKey:false});

var CommentModel = db.model('Comment',CommentSchema);

module.exports = CommentModel;