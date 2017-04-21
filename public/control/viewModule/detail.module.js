/**
 * Created by Administrator on 2017/4/18 0017.
 */
define(['avalon','jquery','../data/detail.data','./common.module'],function (avalon,$,$data,$com) {
    avalon.ready(function () {
        var blog_id = $com.urlParam('id');
        var user = $com.session_user();


        var vm_detail = avalon.define({
            $id     :   'detailControl',
            user    :   user,
            blog    :   {},
            comment_length: 0,
            comment :   '',
            comments:   [],
            submit_comment  :   function () {
                console.log('submit_comment');
                var data = {
                    blog    :   blog_id,
                    user    :   user._id,
                    content :   vm_detail.comment.replace(/\s/g,'')
                };
                $data.comment_insert(data,function (result) {
                     if(result.result){
                         console.log(result);
                         vm_detail.comment = '';
                         refreshComment();
                     }
                });
            },
            show_reply_area   :   function (e) {
                console.log('show_reply_area');
                var $reply_area = $(e.target).closest('.action').next();
                $reply_area.toggle();
            },
            submit_reply    :   function (e) {
                console.log('submit_reply');
                var $reply_area = $(e.target).closest('.reply-area');
                var $text = $reply_area.find('textarea').val().replace(/\s/g,'');
                if($text.length >=5){
                    var data = {
                        comment :   $reply_area.attr('comment'),
                        beuser  :   $reply_area.attr('beuser'),
                        user    :   vm_detail.user._id,
                        content :   $text
                    };
                    $data.reply_insert(data,function (result) {
                        if(result.result){
                            $reply_area.find('textarea').val('');
                            $reply_area.hide();
                            refreshComment();
                        }
                    });
                }
                else{
                    alert('评论必须大于五个字');
                }
            }
        });
        /**
         * 监听评论长度
         */
        vm_detail.$watch('comment',function (n) {
            n = n.replace(/\s/g,'');
            vm_detail.comment_length = n.length;
            if(vm_detail.comment_length >= 5){
                $("#length_span").removeClass('err');
            }
            else{
                $("#length_span").addClass('err');
            }
        });

        $data.blog_findById({id:blog_id},function (result) {
            if(result.result){
                vm_detail.blog = result.result;
                refreshComment();
            }
        });
        /**
         * 刷新评论回复列表
         */
        function refreshComment() {
            $data.blog_findCommentAndReply({blogid:blog_id},function (result) {
                console.log(result);
                if(result.result){
                    vm_detail.comments = result.result;
                }
            });
        }
        avalon.scan($("#main")[0]);
    });
    return {

    }
});