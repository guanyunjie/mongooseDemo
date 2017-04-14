/**
 * Created by Guanyunjie on 2017/4/2 0002.
 */
require.config({
	baseUrl : '',
	paths: { 
		jquery : "../lib/jquery-1.11.1.min",
		avalon : "../lib/avalon.min",
        boot : "../lib/bootstrap.min",
	},
	shim: {
		boot : {deps:['jquery']}
	}
});
require.config({
});
//	调用module.js
require(['../control/viewModule/index.module','../control/viewModule/navigation.module'], function(index,navigation) {
    navigation.loginregister();
});
/**
 * 点击事件
 */
function fn() {}
var _path = '../control/viewModule/';
fn.prototype = {
	/**************  通用（导航栏和模态框）  ***************/
    alert_login : function () {
        require([_path + 'navigation.module'],function (proxy) {
            proxy.alert_login();
        });
    },
    login_btn : function () {
        require([_path + 'modal.module'],function (proxy) {
            proxy.login_btn();
        });
    },
    regist_btn : function () {
		require([_path + 'modal.module'],function (proxy) {
            proxy.regist_btn();
        });
    },
    to_login : function () {
        require([_path + 'modal.module'],function (proxy) {
            proxy.to_login();
        });
    },
    to_regist : function () {
        require([_path + 'modal.module'],function (proxy) {
            proxy.to_regist();
        });
    },
    show_board : function () {
        require([_path + 'navigation.module'],function (proxy) {
            proxy.show_board();
        });
    },
    user_homepage : function () {
        require([_path + 'navigation.module'],function (proxy) {
            proxy.user_homepage();
        });
    },
    setting : function () {
        require([_path + 'navigation.module'],function (proxy) {
            proxy.setting();
        });
    },
    logout : function () {
        require([_path + 'navigation.module'],function (proxy) {
            proxy.logout();
        });
    },
    publish_blog : function () {
        require([_path + 'navigation.module'],function (proxy) {
            proxy.publish_blog();
        });
    }
};
var $fn = new fn();