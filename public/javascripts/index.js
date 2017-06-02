/**
 * Created by PC on 2017/5/27.
 */
/**
 * Created by PC on 2017/5/27.
 */
$(document).ready(function () {
        $('.navbar-nav li ').each(function (n, v) {
            $(v).bind('click',function(){
                console.log(1);
                $('.navbar-nav li ').each(function (m, b) {
                    $(b).removeClass('active');
                })
                $(v).addClass('active');
            });
    })

    $('.main .box-right .hot-sort .hot-recommend-ul li').each(function (n, v) {
        $(v).bind('click',function(){
            $('.main .box-right .hot-sort .hot-recommend-ul li').each(function (n, b) {
                $(b).removeClass('active');
            })
            $(v).addClass('active');
            var number=$(v).attr('order');
            $('#active-line').animate({left:number*93+'px',opacity:'0.8'},"slow");
        })
    })

})




































//@ sourceURL=index.js



































//@ sourceURL=index.js
