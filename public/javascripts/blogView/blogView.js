/**
 * Created by PC on 2017/6/9.
 */
$(document).ready(function() {

})

//目录展开与收起
function expandList(v){
    $(v).parent().parent().find('ol').each(function(index,element){
        if($(element).is(':hidden')){
            $(element).css('display','block');
            $(v).html('[-]');
            $(v).attr('title','收起');
        }else{
            $(element).css('display','none');
            $(v).html('[+]');
            $(v).attr('title','展开');
        }



    })

}
//初始化博客
function selectSingleBlog(){

}