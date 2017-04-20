/**
 * Created by Guanyunjie on 2017/4/11.
 */
var Reply = require('../models/Reply');
var Comment = require('../models/Comment');
/**
 * 评论下的回复
 * @param data
 * @param callback
 * @private
 */
function _insert(data,callback) {
    Reply.create(data,function (err,reply) {
        if(err) console.log(err);
        else{
            Comment.findById(reply.comment,function (err,comment) {
                if(err) console.log(err);
                else{
                    comment.reply.push(reply._id);
                    comment.save(function (err) {
                        if(err) console.log(err);
                        else{
                            callback(reply);
                        }
                    });
                }
            });
        }
    });
}

exports.insert = _insert;