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
require(['../control/viewModule/index.module'], function(model) {});