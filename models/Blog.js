/**
 * Created by Guanyunjie on 2017/4/10.
 */
var mongoose = require('mongoose');
require('./db');
var blogSchema = new mongoose.Schema({
    title:{type:String},
    content:{type:String}
},{
    versionKey:false
});

var blogModel = mongoose.model('Blog',blogSchema);
module.exports = blogModel;
