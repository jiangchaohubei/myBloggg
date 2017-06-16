/**
 * Created by Administrator on 2017/6/4.
 */

$(document).ready(function() {

    //var ue = UE.getEditor('container');
    //实例化编辑器
    //建议使用工厂方法getEditor创建和引用编辑器实例，如果在某个闭包下引用该编辑器，直接调用UE.getEditor('editor')就能拿到相关的实例
    var ue = UE.getEditor('editor', {
        autoHeightEnabled: true,
        autoFloatEnabled: true,
       // initialFrameWidth: 690,
        initialFrameHeight:483
    });



});

function mySubmit(m){
    if(m=='publish'){
        var formData = new FormData($("#writeArticleForm")[0]);
        formData.append('status',0);
        console.log(formData);
        $.ajax({
            url: "blogWrite/create",
            type: 'POST',
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            dataType: "json",
            success: function (data) {
                alert("提交成功");
            },
            failure: function (data) {
                alert("错误");
                return ;
            }
        })

        //$('#writeArticleForm').submit();
    }else{
        $('#writeArticleForm').submit();
    }
}


//@ sourceURL=blogWrite.js
