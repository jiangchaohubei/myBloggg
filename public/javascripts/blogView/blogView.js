/**
 * Created by PC on 2017/6/9.
 */
$(document).ready(function() {
    $('.main .box-right .hot-sort .hot-recommend-ul li').each(function (n, v) {
        $(v).bind('click', function () {
            $('.main .box-right .hot-sort .hot-recommend-ul li').each(function (n, b) {
                $(b).removeClass('active');
            })
            $(v).addClass('active');
            var number = $(v).attr('order');
            $('#active-line').animate({left: number * 120 + 'px', opacity: '0.8'}, "slow");
            $('#hort-sort-content').animate({left: number * (-360) + 'px', opacity: '0.8'}, "slow");
        })
    })
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