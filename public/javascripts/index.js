/**
 * Created by PC on 2017/5/27.
 */
/**
 * Created by PC on 2017/5/27.
 */
$(document).ready(function () {
    //导航
    //$('.navbar-nav li ').each(function (n, v) {
    //    $(v).bind('click', function () {
    //        var url = $($(v).children('a').get(0)).attr('menu-url');
    //        $('#mainPage').load(url);
    //
    //        $('.navbar-nav li ').each(function (m, b) {
    //            $(b).removeClass('active');
    //        })
    //        $(v).addClass('active');
    //    });
    //})
//热门排行
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

    initContent();
})
//首页内容初始化
function initContent() {
    $.ajax({
        url: "select/blogs",
        type: 'POST',
        //data: formData,
        dataType: "json",
        success: function (data) {
            if (data.resultCode == '0000') {
                var articles = data.articles;
                for (var i = 0; i < articles.length; i++) {
                    $('#articles').append(
                        '<div class="article" id="article_index_'+i+'">' +
                        '<div class="left" style="width:250px;height: 200px;margin:5px ">' +
                        ' <a><img src="../images/1d7c3211eba65ca6b328d7f28e10ecc6.jpg"' +
                        'alt="【匆匆那些年】总结个人博客经历的这四年…"></a>' +
                        '</div>' +
                        ' <div class="right" style="width:700px;height:200px">' +
                        ' <h3 style="white-space: nowrap;text-overflow:ellipsis;width: 650px;overflow:hidden;"><a href="/blogView?_id='+articles[i]._id+'">'+articles[i].title+'</a></h3>' +
                        ' <ul style="height: 110px;">' +
                        '<p class="noWrap" style="height:80px;width: 650px"></p>' +
                        ' <a title="【匆匆那些年】总结个人博客经历的这四年…" href="/blogView?_id='+articles[i]._id+'" target="_blank" class="readmore">阅读全文&gt;&gt;</a>' +
                        '</ul>' +
                        '<p class="dateview"><span>'+articles[i].creatTime.substring(0,10)+'</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>作者：'+articles[i].authorName+'</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>个人博客：[<a href="/jstt/bj/">'+articles[i].classify+'</a>]</span></p>' +
                        '</div>' +
                        '</div>'
                    )
                    $('#article_index_'+i+' div.right ul p').append(articles[i].content);
                }

            }
        },
        failure: function (data) {
            alert("错误");
            return;
        }
    })

}




//@ sourceURL=index.js
