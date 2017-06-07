/**
 * Created by PC on 2017/6/6.
 */
$(document).ready(function () {
    initContent('blogs/select/blogs?page=1');
})
//初始化文章列表
function initContent(url) {
    $('#articles').html('');
    $('#articles_pageTool').html('');
    $.ajax({
        url: url,
        type: 'GET',
        //data: formData,
        dataType: "json",
        success: function (data) {
            if (data.resultCode == '0000') {
                var articles = data.articles;
                for (var i = 0; i < articles.length; i++) {
                    $('#articles').append(
                        '<div class="article" id="article_index_' + i + '">' +
                        '<div class="left" style="width:250px;height: 200px;margin:5px ">' +
                        ' <a><img src="../images/1d7c3211eba65ca6b328d7f28e10ecc6.jpg"' +
                        'alt="【匆匆那些年】总结个人博客经历的这四年…"></a>' +
                        '</div>' +
                        ' <div class="right" style="width:400px;height:200px">' +
                        ' <h3><a href="/jstt/bj/2015-01-09/740.html">' + articles[i].title + '</a></h3>' +
                        ' <ul style="height: 110px;">' +
                        '<p></p>' +
                        ' <a title="【匆匆那些年】总结个人博客经历的这四年…" href="/jstt/bj/2015-01-09/740.html" target="_blank" class="readmore">阅读全文&gt;&gt;</a>' +
                        '</ul>' +
                        '<p class="dateview"><span>2015-01-09</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>作者：' + articles[i].authorName + '</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>个人博客：[<a href="/jstt/bj/">' + articles[i].classify + '</a>]</span></p>' +
                        '</div>' +
                        '</div>'
                    )
                    $('#article_index_' + i + ' div.right ul p').append(articles[i].content);
                }
                var page = data.page;

                var start = (Math.ceil(page / 5)-1) * 5 + 1;
                var end = Math.min(data.totalPages, (start + 4));
                var prev = Math.max(1, (page - 1));
                var next = Math.min(data.totalPages, (page + 1));
                var str = "";
                str += '<span>' + data.count + '条&nbsp;&nbsp;共' + data.totalPages + '页</span>' +
                    '<a page-url="blogs/select/blogs?page=1">首页</a>' +
                    '<a page-url="blogs/select/blogs?page=' + prev + '">上一页</a>'
                if (start > 5) {
                    str += '<a page-url="blogs/select/blogs?page=' + (start - 5) + '">...</a>'
                }
                for (var i = start; i <= end; i++) {
                    if (page == i) {
                        str += '<Strong>' + i + '</Strong>'
                    } else {
                        str += '<a page-url="blogs/select/blogs?page=' + i + '">' + i + '</a>'
                    }
                }
                if (end < data.totalPages) {
                    str += '<a page-url="blogs/select/blogs?page=' + (start + 5) + '">...</a>'
                }
                str += '<a page-url="blogs/select/blogs?page=' + next + '">下一页</a>' +
                    '<a page-url="blogs/select/blogs?page=' + data.totalPages + '">尾页</a>' +
                    '<input id="goToPage" type="text" style="width: 40px" id="" name="" value="'+page+'">' +
                    '<input type="button" onclick="goToPage()" value="跳转">'
                $('#articles_pageTool').append(str);
                $('#articles_pageTool a').each(function (n, v) {
                    var pageUrl = $(v).attr('page-url');
                    if (pageUrl) {
                        $(v).unbind("click").click(function (e) {
                            initContent(pageUrl);
                        })
                    }
                })
            }
        },
        failure: function (data) {
            alert("错误");
            return;
        }
    })

}
function goToPage(){
    var page=$('#goToPage').val();
    initContent('blogs/select/blogs?page='+page);
}
