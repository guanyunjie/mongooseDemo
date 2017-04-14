/**
 * Created by Guanyunjie on 2017/4/14.
 */
define(['jquery','../data/navigation.data'],function ($,$data) {
    /**
     * 弹出登录注册面板
     */
    function alert_login() {
        $("#loginModal").modal('show');
    }

    /**
     * 根据登录状态
     */
    function loginregister() {
        var href = location.href;
        console.log(href);
        var user_id = sessionStorage.getItem('user');
        if(user_id){
            $data.user_findUserById({id:user_id},function (result) {
                if(result.message === 'success'){
                    console.log(result);
                    $("#user_li").prev().hide();
                    $("#user_li").show();
                    $("#user_li").find('span').html(result.result.nickname);
                }
            });
        }
        else{
            if(href !== 'http://127.0.0.1:3000/html/index.html'){
                location.href = 'index.html';
            }
        }
    }

    /**
     * 弹出/关闭  登录用户的操作面板
     */
    function show_board() {
        var pb = $("#person_board");
        if(pb.is(":hidden")){
            pb.show();
        }
        else{
            pb.hide();
        }
    }

    /**
     * 前往个人主页
     */
    function user_homepage() {
        var user_id = sessionStorage.getItem('user');
        location.href = 'user.html?userid='+user_id;
    }

    /**
     * 前往账号设置页面
     */
    function setting() {
        var user_id = sessionStorage.getItem('user');
        location.href = 'setting.html?userid='+user_id;
    }

    /**
     * 退出登录
     */
    function logout() {
        sessionStorage.removeItem('user');
        location.href = location.href;
    }

    /**
     * 发表博客！
     */
    function publish_blog() {
        var user_id = sessionStorage.getItem('user');
        if(user_id){
            location.href = 'edit.html';
        }
        else{
            alert_login();
        }
    }

    return{
        alert_login:alert_login,
        loginregister:loginregister,
        show_board:show_board,
        user_homepage:user_homepage,
        setting:setting,
        logout:logout,
        publish_blog:publish_blog
    }
});