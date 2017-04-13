/**
 * Created by Guanyunjie on 2017/4/2 0002.
 */
define(["avalon", "jquery","../data/index.data","./common.module",'boot'], function(avalon, $, $data,$com) {
	avalon.ready(function () {
        /**
		 * 登录注册vm
         */
		var vm_header = avalon.define({
			$id : 'blog_header',
			user:{},
			alert_login:function () {
				$("#loginModal").modal('show');
            },
			alert_regist:function () {
                $("#registModal").modal('show');
            }
		});
        /**
		 * 评论回复部分
         */
		var vm_cr = avalon.define({
			$id : 'blog_cr',
			user:{},
			blog:{},
            comments:[],
            submitComment:function () {
				var content = $("#comment_content").val().trim();
				if(content.length >= '5'){
					var blodid = vm_cr.blog._id;
					var userid = vm_cr.user._id;
					var data = {
						blogid:blodid,
						userid:userid,
						content:content
					}
					$data.comment_insert(data,function (result) {
						if(result.message == 'success'){
							console.log(result);
						}
                    });

				}
				else{
					alert('长度必须大于5')
				}
            },
            showTextArea : function (e) {
				if(vm_cr.user && vm_cr.user._id){
                    var $textArea = $(e.target).closest('.action').next();
                    if($textArea.is(':hidden')){
                        $textArea.show();
                    }
                    else{
                        $textArea.hide();
                    }
				}
				else{
                    $("#loginModal").modal('show');
				}
            },
            submitReply:function (e) {
				var $textArea = $(e.target).closest('.text-area-btn').prev();
				var content = $textArea.val().trim();
				if(content.length >= 5){
					var cid = $textArea.attr('cid');
					var buid = $textArea.attr('uid');

					var uid = vm_cr.user._id;
					if(buid == uid){
						alert('不可以回复自己');
						return;
					}
					var data = {
						commentid:cid,
						userid:uid,
						beuserid:buid,
						content:content
					}

					$data.reply_insert(data,function (result) {
						console.log(result);
                    });

				}
				else{
					alert('回复长度要大于5')
				}
            }
		});
        /**
		 * 测试数据，插入一条评论
         */
		/*$data.blog_insertBlog({title:'这里是标题',content:'这里是内容，很多内容。这里是内容，很多内容。'},function (result) {
			console.log(result);
        });*/
        /**
		 * 查询博客信息
         */
		$data.blog_findById({id:'58ef15b8e9d72e1e00f05566'},function (result) {
			if(result.message == 'success'){
                vm_cr.blog = result.result;
                updateCR({blogid:result.result._id});
			}
        });

        /**
		 * 登录注册模态框vm
         */
        var vm_modal = avalon.define({
			$id : 'blog_modal',
			login:function () {
				var email = $("#login_email").val().trim();
				var pwd = $("#login_pwd").val().trim();

				if(email && pwd){
					$data.user_login({email:email,password:pwd},function (result) {
						if(result.message == 'success' && result.result){
                            vm_header.user = vm_cr.user = result.result;
                            $("#loginModal").modal('hide');
                        }
                        else{
							alert('邮箱或者密码有误')
						}
                    });
				}
				else{
					alert('不能为空')
				}
            },
			regist:function () {
				var email = $("#regist_email").val().trim();
				var pwd = $("#regist_pwd").val().trim();
				var nickname = $("#regist_nickname").val().trim();

				if(email && pwd && nickname){
                    var data = {
                        email:email,
                        nickname : nickname,
                        password:pwd
                    }
					$data.user_regist(data,function (result) {
						if(result.message == 'success'){
							console.log(result);
						}
                    });
				}else{
					alert('tianwan')
				}
            }
		});
		avalon.scan($("#blog_header")[0]);
        avalon.scan($("#blog_modal")[0]);
        avalon.scan($("#blog_cr")[0]);

        /**
         * 更新评论回复列表
         * @param data
         */
        function updateCR(data) {
            $data.blog_findCommentsOfBlog(data,function (result) {
                if(result.message == 'success'){
                    $.each(result.result,function (index,item) {
                        item.createtime = $com.Format(item.createtime);
                        if(item.replys){
                            $.each(item.replys,function (index,item) {
                                item.createtime = $com.Format(item.createtime);
                            });
						}
                    });
                    vm_cr.comments = result.result;
                }
            });
        }
    });

	return {

	}
});