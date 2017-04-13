/**
 * Created by Guanyunjie on 2017/4/10.
 */
var resultUtil = require('../models/resultUtil');
var Comment = require('../models/Comment');
var Reply = require('../models/Reply');
var Blog = require('../models/Blog');
var mpromise = require('mpromise');

/**
 * 新增blog
 * @param data
 * @param callback
 * @private
 */
function _insertBlog(data,callback) {
    Blog.create(data,function (err,data) {
        callback(resultUtil.returnResult(err,data));
    });
}

/**
 * 由id查出博客
 * @param data
 * @param callback
 * @private
 */
function _findById(data,callback) {
    Blog.findById(data.id,function (err,data) {
        callback(resultUtil.returnResult(err,data));
    });
}

/**
 *  查询留言、回复和点赞
 * @param data
 * @param callback
 * @private
 */
function _findCommentsOfBlog(data,callback) {
    /**
     *    select c.*,u.nickname cnickname,r.id rid,r.content rcontent,u1.nickname rnickname,u2.nickname bernickname
     *    from comment c
     *    LEFT JOIN user u on c.userid = u.id
     *    LEFT JOIN reply r on r.commentid = c.id
     *    LEFT JOIN user u1 on r.userid = u1.id
     *    LEFT JOIN user u2 on r.beuserid = u2.id
     */
    var promise = Comment.find({blogid:data.blogid})
        .populate('userid','nickname')
        .populate({
            path:'replies'
        })
        .exec();
    promise.then(
        function (data) {
            console.log(data);
            callback(resultUtil.returnResult(null,data));
        },
        function (err) {

        }
    );

}

exports.insertBlog = _insertBlog;
exports.findById = _findById;
exports.findCommentsOfBlog = _findCommentsOfBlog;
