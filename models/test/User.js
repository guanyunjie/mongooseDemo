/**
 * Created by Guanyunjie on 2017/4/13.
 */
var mongoose = require('mongoose');
var db = require('../db');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name:{type:String}
},{versionKey:false});

var UserModel = db.model('User',UserSchema);

module.exports = UserModel;
