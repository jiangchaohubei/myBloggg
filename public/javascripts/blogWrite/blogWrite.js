/**
 * Created by Administrator on 2017/6/4.
 */

$(document).ready(function() {
console.log(222);
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




//@ sourceURL=blogWrite.js