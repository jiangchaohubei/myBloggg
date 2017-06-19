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
    //初始化目录
    initList();

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
//初始化目录
function initList(){
    var tags=[];
        $('#mainContent').find(':header').each(function(n,v){
            var head={};
            var tagName=$(v).get(0).tagName;
            var n;
            switch (tagName){
                case 'H1':n=1; return ;
                case 'H2':n=2; return ;
                case 'H3':n=3; return ;
                case 'H4':n=4; return ;
                case 'H5':n=5; return ;
                case 'H6':n=6; return ;
            }
            head.number=n;
            head.title=$(v).html();
            tags.push(head);
        });
    console.log(tags);
    var olArr=[];
    var str='<ol style="margin-left: 14px; padding-left: 14px; line-height: 160%; display: none;">';
    createList(tags,str,olArr);
    str+='</ol>'
$('#blogList').append(str);
    //var list=new Array();
    //for(var i=0;i<tags.length;i++){
    //    list[i]=new Array();
    //
    //}
    //for(var i=0;i<tags.length;i++){
    //    if(i==0){
    //        list.push(tags[i].title);
    //    }else{
    //        if(tags[i].number<tags[i-1].number){
    //
    //        }
    //    }
    //
    //}
}
function createList(tags,str,olArr){

    for(var i=0;i<tags.length;i++){
        if(i==0){
            str+= '<li><a href="#t'+i+'" style="color: #ff0000;">'+tags[i].title+'</a></li>';


        }else{
            if(tags[i].number>tags[i-1].number){
                str+= '<ol>'+
                    '<li><a href="#t'+i+'" style="color: #ff0000;">'+tags[i].title+'</a></li>';
                olArr.push(i);
            }else if(tags[i].number==tags[i-1].number){
                str+='<li><a href="#t'+i+'" style="color: #ff0000;">'+tags[i].title+'</a></li>';
            }else{

                for(var j=olArr.length-1;j>=0;j--){
                    str+='</ol>';
                    if(olArr[j]==0){
                        var newArr=tags.slice(i);
                        if(newArr.length==0){
                            return ;
                        }
                        createList(newArr,str,olArr);

                    }else{
                        if(tags[i].number>=tags[olArr[j]].number){
                            str+='<li><a href="#t'+i+'" style="color: #ff0000;">'+tags[i].title+'</a></li>';
                            break;
                        }
                    }
                }
            }
        }
    }
}
//文章点赞or狂踩
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