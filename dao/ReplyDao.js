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
    Reply.create(data)
        .then(
            function(reply){
                Comment.findById(reply.comment).then(
                    function (comment) {
                        comment.reply.push(reply._id);
                        comment.save().then(
                            function (data) {
                                callback(reply);
                            },
                            function (err) {
                                
                            }
                        );
                    },
                    function (err) {

                    }
                );
            },
            function (err) {

            }
        );

}

exports.insert = _insert;