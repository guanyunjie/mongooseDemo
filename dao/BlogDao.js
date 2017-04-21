/**
 * Created by Guanyunjie on 2017/4/10.
 */
var resultUtil = require('../models/pack');
var Comment = require('../models/Comment');
var Reply = require('../models/Reply');
var Blog = require('../models/Blog');
var User = require('../models/User');

/**
 * 暴露接口
 * @type {_publish}
 */
exports.publish = _publish;
exports.findById = _findById;
exports.findCommentAndReply = _findCommentAndReply;
exports.listBlog = _listBlog;
exports.findBlogByUserId = _findBlogByUserId;
exports.beVisited = _beVisited;

/**
 * 新增blog
 * @param data
 * @param callback
 * @private
 */
function _publish(data,callback) {
    Blog.create(data,function (err,data) {
        var _blogid = data._id;
        var _data = data;
        if(err) console.error(err);
        else{
            User.findById(data.user,function (err,data) {
                data.blog.push(_blogid);
                data.save(function (err,data) {
                    if(err) console.error(err);
                    else{
                        callback(_data);
                    }
                });
            });
        }
    });
}

/**
 * 由id查出博客
 * @param data
 * @param callback
 * @private
 */
function _findById(data,callback) {
    Blog.findById(data.id).populate('user').exec().then(
        function (blog) {
            blog.visitor += 1;
            blog.save().then(
                function () {
                    callback(blog);
                },
                function (err) {

                }
            );
        },
        function (err) {

        }
    );
}

/**
 *  查询留言、回复和点赞
 * @param data
 * @param callback
 * @private
 */
function _findCommentAndReply(data,callback) {
    /**
     *    select c.*,u.nickname cnickname,r.id rid,r.content rcontent,u1.nickname rnickname,u2.nickname bernickname
     *    from comment c
     *    LEFT JOIN user u on c.userid = u.id
     *    LEFT JOIN reply r on r.commentid = c.id
     *    LEFT JOIN user u1 on r.userid = u1.id
     *    LEFT JOIN user u2 on r.beuserid = u2.id
     */
    Comment.find({blog:data.blogid})
        .populate('user','nickname photo')
        .populate({
            path:'reply',
        })
        .populate('reply.user','nickname photo')
        .sort('-createtime')
        .exec(function (err,data) {
            if(err) console.error(err);
            else{
                callback(data);
            }
        });
}
/**
 * 分页查询
 * @param data
 * @param callback
 * @private
 */
function _listBlog(data,callback) {
    var size = data.size || 8;
    var num = size * (data.num - 1);
    var result = {};
    result.num = data.num;

    var promise = Blog.find({}).select('_id').exec();
    promise.then(
        function (data) {
           result.total = Math.ceil(data.length / size);
        },
        function (err) {
        });
    promise = Blog.find({})
        .populate('user','nickname photo')
        .skip(num).limit(size).exec();
    promise.then(
        function (data) {
            result.result = data;
            callback(result);
        },
        function (err) {

        });
}
/**
 * 根据用户id查询其发表的所有博客
 * @param data
 * @param callback
 * @private
 */
function _findBlogByUserId(data,callback) {
    var user_id = data.userid;
    var promise = Blog.find({user:user_id}).exec();
    promise.then(
        function (data) {
            callback(data);
        },
        function (err) {

        }
    );
}
/**
 * 博客被访问的时候阅读量加一
 * @param data
 * @param callback
 * @private
 */
function _beVisited(data,callback) {
    Blog.findById(data.id).then(
        function (blog) {
            blog.visitor += 1;
            blog.save().then(
                function (blog) {
                    callback(blog);
                },
                function (err) {

                }
            );
        },
        function (err) {

        }
    );
}
