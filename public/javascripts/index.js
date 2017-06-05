/**
 * Created by PC on 2017/5/27.
 */
/**
 * Created by PC on 2017/5/27.
 */
$(document).ready(function () {
    //导航
        $('.navbar-nav li ').each(function (n, v) {
            $(v).bind('click',function(){
                var url=$($(v ).children('a').get(0)).attr('menu-url');
                $('#mainPage').load(url);

                $('.navbar-nav li ').each(function (m, b) {
                    $(b).removeClass('active');
                })
                $(v).addClass('active');
            });
    })
//热门排行
    $('.main .box-right .hot-sort .hot-recommend-ul li').each(function (n, v) {
        $(v).bind('click',function(){
            $('.main .box-right .hot-sort .hot-recommend-ul li').each(function (n, b) {
                $(b).removeClass('active');
            })
            $(v).addClass('active');
            var number=$(v).attr('order');
            $('#active-line').animate({left:number*93+'px',opacity:'0.8'},"slow");
            $('#hort-sort-content').animate({left:number*(-277.5)+'px',opacity:'0.8'},"slow");
        })
    })


})



//@ sourceURL=index.js



































//@ sourceURL=index.js
