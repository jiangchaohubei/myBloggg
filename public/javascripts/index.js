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

})




































//@ sourceURL=index.js