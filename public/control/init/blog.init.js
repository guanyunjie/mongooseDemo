/**
 * Created by Guanyunjie on 2017/4/14.
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
require(['../control/viewModule/blog.module','../control/viewModule/navigation.module'], function(blog,navigation) {
    navigation.loginregister();
});