/**
 * Created by Guanyunjie on 2017/4/2 0002.
 */
define(['avalon','jquery','../data/common.data'],function (avalon,$,$data) {
    /**
     *
     * @returns {string}
     */
    function uuid(){
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
        s[8] = s[13] = s[18] = s[23] = "-";

        var uuid = s.join("");
        return uuid.replace(/-/g,'');
    }

    /**
     *  获取当前时间
     */
    function getCurrentTime() {
        if(!('Format' in new Date())){
            _prototypeDate()
        }
        return new Date().Format("yyyy-MM-dd hh:mm:ss");
    }

    var $time = null;
    /**
     *
     * @param message  {提示信息}
     * @param state {1:'勾',2:'叉叉',3:'问号',4:'感叹号'}
     */
    function msg(message,state){
        if($time) return;
        var icon = ' glyphicon-ok-sign';
        icon = state ? state == '1' ? ' glyphicon-ok-sign' : state == '2' ? ' glyphicon-remove-sign' : state == '3' ? ' glyphicon-question-sign' : state == '4' ? ' glyphicon-info-sign' : 'error' : ' glyphicon-ok-sign';
        var html = '<div class="msg" style="z-index: 99999">'+
            '<span class="glyphicon '+icon+' "></span>'+
            '<p>'+message+'</p>'+
            '</div>';
        $('body').append(html);
        $time = setTimeout(function(){
            $('.msg').remove();
            clearTimeout($time);
            $time = null;
        },2000);
    }

    /**
     * 添加原型方法
     * @private
     */
    function _prototypeDate() {
        Date.prototype.Format = function (fmt) {
            var o = {
                "y+": this.getFullYear(),   // 年
                "M+": this.getMonth() + 1, //月份
                "d+": this.getDate(), //日
                "h+": this.getHours(), //小时
                "m+": this.getMinutes(), //分
                "s+": this.getSeconds(), //秒
                "q+": Math.floor((this.getMonth() + 3) / 3), //季度
                "S": this.getMilliseconds() //毫秒
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        }
    }

    /**
     * 格式化时间
     * @param date
     * @param format
     * @constructor
     */
    function Format(date,fmt) {
        if(!('Format' in new Date())){
            _prototypeDate()
        }
        var _fmt = fmt ? fmt : "yyyy-MM-dd hh:mm:ss";
        return new Date(date).Format(_fmt);
    }

    return {
        getCurrentTime:getCurrentTime,
        uuid:uuid,
        Format:Format,
        msg:msg
    }
});