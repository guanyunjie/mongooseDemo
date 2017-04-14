/**
 * Created by Guanyunjie on 2017/4/14.
 */
define(['jquery','./common.module','../data/modal.data'],function ($,$com,$data) {

    /**
     * 切换到登录面板
     */
    function login_btn() {
        $("button[name='login']").addClass('active');
        $("button[name='regist']").removeClass('active');
        $("#form_regist").hide();
        $("#form_login").show();
        $("#to_regist").hide();
        $("#to_login").show();
    }

    /**
     * 切换到注册面板
     */
    function regist_btn() {
        $("button[name='login']").removeClass('active');
        $("button[name='regist']").addClass('active');
        $("#form_regist")
        $("#form_login").hide();
        $("#form_regist").show();
        $("#to_login").hide();
        $("#to_regist").show();
    }

    /**
     * 登录
     */
    var $time = null;
    function to_login() {
        var email = $("#login_email").val().trim();
        var pwd = $("#login_pwd").val().trim();
        if(email && pwd){
            $data.user_login({email:email,password:pwd},function (result) {
                console.log(result);
                // 注册即登录
                sessionStorage.setItem('user',result.result._id);
                $("#loginModal").modal('hide');
                location.href = location.href;
            });
        }
        else{
            if($time) clearTimeout($time);
            $("#err_info").html('请填写完整的邮箱和密码~').show();
            $time = setTimeout(function () {
                clearTimeout($time);
                $("#err_info").html('').hide();
            },2000);
        }
    }

    /**
     * 注册
     */
    function to_regist() {
        var email = $("#regist_email").val().trim();
        var pwd = $("#regist_pwd").val().trim();
        var repwd = $("#regist_repwd").val().trim();

        if(email && pwd && repwd){
            if(pwd === repwd){
                $data.user_regist({email:email,password:pwd},function (result) {
                    console.log(result);
                    // 注册即登录
                    sessionStorage.setItem('user',result.result._id);
                    $("#loginModal").modal('hide');
                    location.href = location.href;
                });
            }
            else{
                if($time) clearTimeout($time);
                $("#err_info").html('两次输入密码不一致~').show();
                $time = setTimeout(function () {
                    clearTimeout($time);
                    $("#err_info").html('').hide();
                },2000);
            }
        }
        else{
            if($time) clearTimeout($time);
            $("#err_info").html('请填写完整信息~').show();
            $time = setTimeout(function () {
                clearTimeout($time);
                $("#err_info").html('').hide();
            },2000);
        }
    }

    return{
        login_btn:login_btn,
        regist_btn:regist_btn,
        to_login:to_login,
        to_regist:to_regist
    }
});