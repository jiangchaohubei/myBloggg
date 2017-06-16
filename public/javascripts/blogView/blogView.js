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
function blogViewPoint(str,_id,dom){
    var postData={};
    postData.pointType=str;
    postData._id=_id;

        $.ajax({
            url: "blogView/point",
            type: 'POST',
            data: postData,
            dataType: "json",
            success: function (data) {
                if(data.resultCode=='success'){

                    $(dom).css('color','black');
                    console.log(data.pointNumber);
                    if(str=='up'){
                        var n1= $(dom).parent('div').next('div').children("span").get(0).innerHTML;
                        $(dom).parent('div').next('div').children("span").get(0).innerHTML=parseInt(n1)+1;
                    }else {
                        var n1= $(dom).parent('div').next('div').children("span").get(1).innerHTML;
                        $(dom).parent('div').next('div').children("span").get(1).innerHTML=parseInt(n1)+1;
                    }


                }
                if(data.resultCode=='failed'){
                    alert("已经点过了！");
                }
                if(data.resultCode=='0001'){
                    alert(data.resultDesc);
                    return;
                }

            },
            failure: function (data) {
                alert("错误");
                return;
            }
        })

}