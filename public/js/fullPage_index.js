/**
 * Created by Administrator on 2017/5/3.
 */

/*
*    首页的js
* */
$(function(){
    /*
    * fullPage 启动函数
    * */
    $('#myCarousel').fullpage({
        sectionsColor : ['#1bbc9b', '#4BBFC3', '#7BAABE', '#fff','#333'],
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        menu: '#menu',
        scrollingSpeed: 400
    });

    /*
    * 图片轮播开始
    * */
    $('.myCarousel2').carousel({
        interval: 4000,
        pause: '',
        wrap: true
    });

    /*
    *   第五页：思想、关于的事件添加
    * */
    var $connect_button = $('#connect_button > div'),
        $connect_message = $('#connect_message .connect_content');

    $connect_button.mouseenter(function () {
        var index = $connect_button.index(this);
        $connect_button.css({'color':'#888','backgroundColor':'#333'});
        $(this).css({'color':'#fff','backgroundColor':'#000'});

        if($connect_message.eq(index).css('display') === 'none'){
            $connect_message.css('display','none');
            $connect_message.css('opacity',0);
            $connect_message.eq(index).css('display','block');
            $connect_message.eq(index).animate({
                opacity: 1
            },500);
        }
    });

    /*
        联系方式关闭按钮
    */
    var $close = $('#contact_us_close'),
        $contact_list = $('#contact_us_list');
    $close.on('click',function () {
        if($contact_list.css('display') === 'block'){
            $contact_list.fadeOut();
            $(this).css('background-position','-32px -640px')
        }else {
            $contact_list.fadeIn();
            $(this).css('background-position','0 -640px')
        }
    })
});