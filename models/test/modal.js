
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    title:{type:String},
    content:{type:String},
    replys:[{type:Schema.Types.ObjectId,ref:'Reply'}]
});
var Comment = mongoose.model('Comment',CommentSchema);

var ReplySchema = new Schema({
    cid:{type:Schema.Types.ObjectId,ref:'Comment'},
    content:{type:String},
});
var Reply = mongoose.model('Reply',ReplySchema);

mongoose.connect('mongodb://localhost/popu-test', function (err){
    if (err) throw err;
    console.log('connect success')
    /*createData();*/
    findData();
});

function createData() {
    var cids = [mongoose.Types.ObjectId(),mongoose.Types.ObjectId()];
    var rids = [mongoose.Types.ObjectId(),mongoose.Types.ObjectId(),
        mongoose.Types.ObjectId(),mongoose.Types.ObjectId(),mongoose.Types.ObjectId()];

    var comments = [];
    var replys = [];

    comments.push({
        _id : cids[0],
        title:'无敌是多么寂寞',
        content:'这里是很多很多内容',
        replys:[rids[0],rids[3],rids[4]]
    });
    comments.push({
        _id : cids[1],
        title:'吾之荣耀离别已久',
        content:'这里是很多很多内容这里是很多很多内容这里是很多很多内容',
        replys:[rids[1],rids[2]]
    });
    replys.push({
        _id:rids[0],
        cid:cids[0],
        content:'回复1111111'
    });
    replys.push({
        _id:rids[1],
        cid:cids[1],
        content:'回复2222222'
    });
    replys.push({
        _id:rids[2],
        cid:cids[1],
        content:'回复3333333'
    });
    replys.push({
        _id:rids[3],
        cid:cids[0],
        content:'回复444444'
    });
    replys.push({
        _id:rids[4],
        cid:cids[0],
        content:'回复5555555'
    });

    Comment.create(comments,function (err,data) {
        if(err){
            console.error(err)
        } else{
            console.log('comment run')
            Reply.create(replys,function (err,data) {
                console.log('reply run')
            });
        }
    });

}

function findData() {
    Comment.find().populate('cid','content').exec(function (err,data) {
        if(err){
            console.error(err)
        }
        else{
            console.log(data)
        }
    });
}