/**
 * Created by Guanyunjie on 2017/4/11.
 */
var ru = require('../models/resultUtil');
var Reply = require('../models/Reply');
var Comment = require('../models/Comment');
/**
 * 评论下的回复
 * @param data
 * @param callback
 * @private
 */
function _insert(data,callback) {
   Reply.create(data,function (err,data) {
       var _replyid = data._id;
       Comment.findById(data.commentid,function (err,data) {
           data.replies.push(_replyid);
           data.save(function (err,data) {
               callback(ru.returnResult(err,data));
           });
       });
   });
}

exports.insert = _insert;