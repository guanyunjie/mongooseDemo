/**
 * Created by Administrator on 2017/4/17 0017.
 */
define(['jquery','../data/pager.data'],function ($,$data) {
    var c,t;
    /**
     * 分页样式控制函数
     * @param c {当前页}
     * @param t {总页数}
     */
    function pagation(currentNum,totalNum) {
        c = parseInt(currentNum);
        t = parseInt(totalNum);
        var $num = $(".page-num"),
            $dot_prev = $(".dot-prev"),
            $dot_next = $(".dot-next");
        $num.removeClass('page-on');
        if(t < 5){
            $dot_prev.hide();
            $dot_next.hide();
            $.each($num,function (index,item) {
                if(index < t){
                    if(index + 1 === c){
                        $(item).addClass('page-on');
                    }
                    $(item).html(index+1).show();
                }
                else{
                    $(item).html('').hide();
                }
            });
        }
        else if(t > 9){
            $dot_prev.show();
            $dot_next.show();
            if(c < 5){
                $dot_prev.hide();
                $.each($num,function (index,item) {
                    if(index <= c){
                        $(item).html(index + 1).show();
                        if(index === c -1){
                            $(item).addClass('page-on');
                        }
                    }
                    else if(index >= 5){
                        $(item).html(t - 6 + index).show();
                    }
                    else{
                        $(item).html('').hide();
                    }
                });
            }
            else if(c > t - 4){
                $dot_next.hide();
                var currentIndex = t - c;
                $.each($num,function (index,item) {
                    if(index >= 6 - currentIndex - 1){
                        $(item).html(t - (6 - index)).show();
                        if(6 - index === currentIndex){
                            $(item).addClass('page-on');
                        }
                    }
                    else if(index <= 1){
                        $(item).html(index + 1).show();
                    }
                    else{
                        $(item).html('').hide();
                    }
                });
            }
            else{
                $.each($num,function (index,item) {
                    if(index <= 1){
                        $(item).html(index + 1).show();
                    }
                    else if(index >= 5){
                        $(item).html(t - (6 - index)).show();
                    }
                    else{
                        $(item).html(c - 3 + index).show();
                        if(index === 3){
                            $(item).addClass('page-on');
                        }
                    }
                });
            }
        }
        else{
            if(c >= 5){
                $dot_prev.show();
                $dot_next.hide();
                $.each($num,function (index,item) {
                    if(index <= 1){
                        $(item).html(index + 1).show();
                    }
                    else if(index + 1 >= 6 - (t - c)){
                        if(index === 6 - (t - c)){
                            $(item).addClass('page-on');
                        }
                        $(item).html(t - (6 - index)).show();
                    }
                    else{
                        $(item).html('').hide();
                    }
                });
            }
            else if(c <= t - 4){
                $dot_prev.hide();
                $dot_next.show();
                $.each($num,function (index,item) {
                    if(index <= c){
                        if(index+1 === c){
                            $(item).addClass('page-on');
                        }
                        $(item).html(index+1).show();
                    }
                    else if(index >= 5){
                        $(item).html(t - (6 - index)).show();
                    }
                    else{
                        $(item).html('').hide();
                    }
                });
            }
            else{
                $dot_prev.hide();
                $dot_next.hide();
                $.each($num,function (index,item) {
                    if(index + 1 === c){
                        $(item).addClass('page-on');
                    }
                    if(index < t){
                        $(item).html(index+1).show();
                    }
                    else{
                        $(item).html('').hide();
                    }
                });
            }
        }
    }
    return {
        pagation:pagation,
    }
});