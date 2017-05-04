/**
 * Created by Administrator on 2017/5/3.
 */
$(function(){
    /*
    * fullPage 启动函数
    * */
    $('#myCarousel').fullpage({
        sectionsColor : ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90','#333','#0f0'],
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        menu: '#menu',
        loopBottom: true
    });

    setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 3000);
/*
    $(window).resize(function(){
        autoScrolling();
    });
    function autoScrolling(){
        var $ww = $(window).width();/!*
        if($ww < 1024){
            $.fn.fullpage.setAutoScrolling(false);
        } else {*!/
            $.fn.fullpage.setAutoScrolling(true);
        /!*}*!/
    }
    autoScrolling();
*/
    /*
    * 图片轮播开始
    * */
    $('.myCarousel2').carousel({
        interval: 4000,
        pause: '',
        wrap: true
    })
});