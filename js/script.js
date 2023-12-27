$(function(){
    //마이캐논 영역
    $(".util_myca ").hover(function(){
        $(".my").stop().slideDown();
    }, function(){
        $(".my").stop().slideUp();
    }) //hover


    //서브메뉴 영역
    // $(".gnb_p").hover(function(){
    //     $(".d_wrap").stop().slideDown(1000).css({display:"flex"});
    // }, function(){
    //     $(".d_wrap").stop().slideUp().css({display:"none"});
    // })

    // $(".gnb_p").hover(function(){
    //     $(".d_wrap").stop().addClass("on");
    // }, function(){
    //     $(".d_wrap").stop().removeClass("on");
    // })

    // $(".gnb_p").mouseover(function(){
    //     $(".d_wrap").stop().toggleClass("on");
    // })


    $(".gnb_p").hover(function(){
        $(".d_wrap").stop().animate({height:"350px", padding: "15px 15px 30px"}, "fast");
    }, function(){
        $(".d_wrap").stop().animate({height:"0", padding:"0"}, "fast");
    })
})//