/**
 * Created by Guanyunjie on 2017/4/13.
 */
var mongoose = require('mongoose');
var User = require('./User');
var Comment = require('./Comment');

/**
 * 往users中添加测试数据
 */
/*User.create({name:'李四'},function (err,data) {
    if(err) console.error(err);
    else console.log(data);
});*/

/**
 * 往comments中添加测试数据
 */
/*var data = [{
    content:'abcde',
    create_by:'58ef0d004f96ba1ffcff67c0'
},{
    content:'22222的评论',
    create_by:'58ef0d004f96ba1ffcff67c0'
},{
    content:'33333的评论',
    create_by:'58ef0d09e6443e05c84ab7f8'
}]*/

/*Comment.create({comments:data},function (err,data) {
    if(err) console.error(err);
    else console.log(data);
});*/

/**
 * 测试关联查询
 */
Comment.find({}).populate('comments.create_by')
    .exec(function (err,data) {
        if(err) console.error(err);
        else console.log(JSON.stringify(data));
    });

