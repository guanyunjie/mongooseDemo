/**
 * Created by Guanyunjie on 2017/4/11.
 */
var ru = require('../models/pack');
var Comment = require('../models/Comment');
var Blog = require('../models/Blog');
/**
 * 给博客添加评论
 * @param data
 * @param callback
 * @private
 */
function _insert(data,callback) {
    Comment.create(data,function (err,comment) {
        if(err) console.error(err);
        else{
            Blog.findById(comment.blog,function (err,blog) {
                if(err) console.error(err);
                blog.comment.push(comment._id);
                blog.save(function (err) {
                    if(err) console.error(err);
                    else{
                        callback(comment);
                    }
                });
            });
        }
    });
}

exports.insert = _insert;