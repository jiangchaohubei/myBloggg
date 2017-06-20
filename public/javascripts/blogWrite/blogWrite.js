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
//发布
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
//增加标签
function addTags(v){
    var n=$("input[name='tag']").length;
    if(n==5){
        return;
    }
    if(n==4){

        $("[data-toggle='popover']").popover();
    }
    $(v).before( '&nbsp;<input type="text" class="" style="width:100px;height:25px;top: 30%;position: relative" id="" name="tag" placeholder="标签">');


}

//@ sourceURL=blogWrite.js
