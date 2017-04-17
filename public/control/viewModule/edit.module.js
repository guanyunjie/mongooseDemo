/**
 * Created by Guanyunjie on 2017/4/14.
 */
define(['avalon','jquery','../data/edit.data'],function (avalon,$,$data) {
    avalon.ready(function () {
        var vm_edit = avalon.define({
            $id     :   'editControl',
            title   :   '',
            content :   '',
            length  :   0,
            submit_blog :   function () {
                if(!vm_edit.title){
                    alert('blog标题不可以为空');
                    return;
                }
                if(vm_edit.length < 5){
                    alert('blog内容长度不小于5');
                    return;
                }
                var data = {
                    user    :   sessionStorage.getItem('user'),
                    title   :   vm_edit.title,
                    content :   vm_edit.content,
                }

                $data.blog_publish(data,function (result) {
                    if(result && result.result){
                        console.log(result);
                        vm_edit.title = '';
                        vm_edit.content = '';
                    }
                });
            }
        });
        /**
         * 监听blog内容长度
         */
        vm_edit.$watch('content',function (n) {
            vm_edit.length = n.replace(/\s/g,'').length;
            if(vm_edit.length >= 5){
                $("#length_span").addClass('color-ok');
            }
            else{
                $("#length_span").removeClass('color-ok');
            }
        });

        avalon.scan($("#main")[0]);
    });

    return {
        
    }
});