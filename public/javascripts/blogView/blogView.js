/**
 * Created by PC on 2017/6/9.
 */
$(document).ready(function () {
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
function expandList(v) {
    $(v).parent().parent().find('ol:eq(0)').each(function (index, element) {
        if ($(element).is(':hidden')) {
            $(element).css('display', 'block');
            $(v).html('[-]');
            $(v).attr('title', '收起');

        } else {
            $(element).css('display', 'none');
            $(v).html('[+]');
            $(v).attr('title', '展开');

        }


    })

}
//初始化目录
function initList() {
    var tags = [];
    $('#mainContent').find(':header').each(function (n, v) {//mainContent文章区
        var head = {};
        var tagName = $(v).get(0).tagName;
        var m;
        switch (tagName) {
            case 'H1':
                m = 1;
                break;
            case 'H2':
                m = 2;
                break;
            case 'H3':
                m = 3;
                break;
            case 'H4':
                m = 4;
                break;
            case 'H5':
                m = 5;
                break;
            case 'H6':
                m = 6;
                break;
        }
        head.number = m;
        head.title = $(v).html();
        tags.push(head);
        $(v).append('<a name="t' + n + '" target="_blank"></a>');//定位符
    });
    var olArr = [];
    var str = '<ol style="margin-left: 14px; padding-left: 14px; line-height: 160%; display: none;">';
    createList(tags, str, olArr, 0);
    str += '</ol>'
    $('#blogList').append(str);//目录区
    function createList(taggs, sttr, olArrr, n) {
        str = sttr;
        olArrr = [];
        for (var i = 0; i < taggs.length; i++) {
            if (i == 0) {
                str += '<li><a href="#t' + n + '" style="color: #ff0000;">' + taggs[i].title + '</a></li>';
                n++;
            } else {
                if (taggs[i].number > taggs[i - 1].number) {
                    str += '<ol style="display: block;">' +
                        '<li><a href="#t' + n + '" style="color: #ff0000;">' + taggs[i].title + '</a></li>';
                    olArrr.push(i);
                    n++;
                } else if (taggs[i].number == taggs[i - 1].number) {
                    str += '<li><a href="#t' + n + '" style="color: #ff0000;">' + taggs[i].title + '</a></li>';
                    n++;
                } else {
                    for (var j = olArrr.length - 1; j >= 0; j--) {
                        str += '</ol>';
                        if (j == 0) {
                            var newArr = taggs.slice(i);
                            if (newArr.length <= 0) {
                                return;
                            } else {
                                createList(newArr, str, olArrr, n);
                                return;
                            }
                        } else {
                            if (taggs[i].number >= taggs[olArrr[j]].number) {
                                str += '<li><a href="#t' + n + '" style="color: #ff0000;">' + taggs[i].title + '</a></li>';
                                n++;
                                break;
                            }
                        }
                    }
                }
            }
        }
        //  return sttr;
    }
}

//文章点赞or狂踩
function blogViewPoint(str, _id, dom) {
    var postData = {};
    postData.pointType = str;
    postData._id = _id;

    $.ajax({
        url: "blogView/point",
        type: 'POST',
        data: postData,
        dataType: "json",
        success: function (data) {
            if (data.resultCode == 'success') {

                $(dom).css('color', 'black');
                console.log(data.pointNumber);
                if (str == 'up') {
                    var n1 = $(dom).parent('div').next('div').children("span").get(0).innerHTML;
                    $(dom).parent('div').next('div').children("span").get(0).innerHTML = parseInt(n1) + 1;
                } else {
                    var n1 = $(dom).parent('div').next('div').children("span").get(1).innerHTML;
                    $(dom).parent('div').next('div').children("span").get(1).innerHTML = parseInt(n1) + 1;
                }


            }
            if (data.resultCode == 'failed') {
                alert("已经点过了！");
            }
            if (data.resultCode == '0001') {
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