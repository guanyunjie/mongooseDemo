/**
 * Created by Guanyunjie on 2017/4/17 0002.
 */
define(["avalon", "jquery","../data/setting.data","./common.module",'boot'], function(avalon, $, $data,$com) {
	avalon.ready(function () {
		var user = $com.session_user();
		if(!user) location.href = "index.html";

		var vm_setting = avalon.define({
			$id		:	'settingControl',
			user	:	user,
            nickname:	user.nickname,
            pwd		:	'',
            nick_length:	user.nickname.length,
            showNick:	function () {
				$("#nick_old").hide();
				$("#nick_new").show();
            },
			showPwd	:	function () {
				$("#pwd_old").hide();
				$("#pwd_new").show();
            },
			setNick	:	function () {
				if(vm_setting.nick_length >= 5){
					var nickname = vm_setting.nickname.replace(/\s/g,'');
					$data.user_modifyNickname({id:user._id,nickname:nickname},function (result) {
						user = result.result;
                        sessionStorage.setItem('user',JSON.stringify(user));
                        vm_setting.user = user;
                        $("#nick_new").hide();
                        $("#nick_old").show();
                    });
				}
				else{
					alert('字数不够');
				}
            },
			setPwd	:	function () {
				var pwd = vm_setting.pwd.replace(/\s/g,'');
				if(pwd.length > 0 && pwd.length <= 12){
					$data.user_modifyPassword({id:user._id,password:pwd},function (result) {
						if(result.result){
							user = result.result;
							sessionStorage.setItem('user',JSON.stringify(user));
							vm_setting.user = result.result;
                            $("#pwd_new").hide();
                            $("#pwd_old").show();
						}
                    });
				}
				else{
					alert('密码长度有误');
				}
            }
		});
        /**
		 * 监听昵称长度
         */
		vm_setting.$watch('nickname',function (n) {
			n = n.replace(/\s/g,'');
			vm_setting.nick_length = n.length;
			if(vm_setting.nick_length < 5){
				$("#nick_length").addClass("err");
			}
			else{
                $("#nick_length").removeClass("err");
			}
        });
        /**
		 * 过滤器，将密码变为星号
         * @param str
         * @returns {string}
         */
		avalon.filters.pwd = function (str) {
			var _pwd = '';
			for(var i = 0;i < str.length;i++){
                _pwd += '*';
			}
			return _pwd;
        };
		avalon.scan($("#main")[0]);
    });
	return {

	}
});