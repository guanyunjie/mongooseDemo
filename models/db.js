/**
 * Created by Guanyunjie on 2017/4/10.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog_test');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',function (callback) {
    console.error('mongodb connect success!');
});

module.exports = db;