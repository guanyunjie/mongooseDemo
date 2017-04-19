/**
 * Created by Administrator on 2017/4/17 0017.
 */
define(['avalon','jquery','../data/user.data','./common.module'],function (avalon,$,$data,$com) {
    avalon.ready(function () {
        var url_userid = $com.urlParam('userid');
        var user = JSON.parse(sessionStorage.getItem('user'));
        if(!user) location.href = 'index.html';

        var vm_user = avalon.define({
            $id     :   'userControl',
            blogs   :   [],
            user    :   {},
            sameUser:   false,
            showIntro   :   function () {
                $("#editIcon").hide();
                $("#editIcon").prev().hide();
                $("#introduction").show();
            },
            submitIntro :   function () {
                var intro = $("#introduction>textarea").val().trim();
                if(intro.length >= 5){
                    if(intro === user.introduction){
                        alert('简介未发生改变');
                    }
                    else{
                        $data.user_modifyIntroduction({id:user._id,introduction:intro},function (result) {
                            console.log(result);
                            if(result.result){
                                user = result.result;
                                sessionStorage.setItem('user',JSON.stringify(user));
                                vm_user.user = user;
                                $("#introduction").hide();
                                $("#editIcon").show();
                                $("#editIcon").prev().show();
                            }
                        });
                    }
                }
                else{
                    alert('必须大于五个字');
                }
            }
        });
        avalon.scan($("#main")[0]);
        /**
         * 判断此用户是否为登录用户
         */
        if(url_userid !== user._id){
            $data.user_findUserById({id:url_userid},function (result) {
                if(result.result){
                    console.log(result);
                    vm_user.user = result.result;
                    findBlog(result.result._id);
                }
                else{

                }
            });
        }
        else{
            vm_user.user = user;
            vm_user.sameUser = true;
            findBlog(user._id);
        }

        /**
         * 查询用户发表的博客
         * @param user_id
         */
        function findBlog(user_id) {
            $data.blog_findBlogByUserId({userid:user_id},function (result) {
                if(result.result){
                    vm_user.blogs = result.result;
                }
            });
        }

    });

    return {

    }
});