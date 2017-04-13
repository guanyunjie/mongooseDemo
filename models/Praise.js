/**
 * Created by Guanyunjie on 2017/4/10.
 */
var mongoose = require('mongoose');
var db = require('./db');

var praiseSchema = new mongoose.Schema({
    userid:{type:String},
    bezanid:{type:String}
},{
    versionKey:false
});

var praiseModel = db.model('Praise',praiseSchema);
module.exports = praiseModel;