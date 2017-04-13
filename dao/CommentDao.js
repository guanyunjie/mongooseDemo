/**
 * Created by Guanyunjie on 2017/4/11.
 */
var ru = require('../models/resultUtil');
var Comment = require('../models/Comment');
/**
 * 给博客添加评论
 * @param data
 * @param callback
 * @private
 */
function _insert(data,callback) {
    Comment.create(data,function (err,data) {
        callback(ru.returnResult(err,data));
    });
}

exports.insert = _insert;