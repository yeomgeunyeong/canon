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


    // $(".gnb_p").hover(function(){
    //     $(".d_wrap").stop().slideDown().animate({height:"350px", padding: "15px 15px 30px"}, "fast");
    // }, function(){
    //     $(".d_wrap").stop().slideUp().animate({height:"0", padding:"0"}, "fast");
    // })

    $(".gnb_p").hover(function(){
        $(".d_wrap").stop().slideDown();
    }, function(){
        $(".d_wrap").stop().slideUp();
    })//


    //main_visual영역
    $(".move").slick({
        autoplay:true,
        autoplaySpeed:3000,
        dots:true,
        arrows:false
    })//

    $(".main_visual .stop").click(function(){
        
        if($(this).hasClass("on")==true){
            $(this).removeClass("on");
            $(".move").slick("slickPlay");
        }else{
            $(this).addClass("on");
            $(".move").slick("slickPause");
        }

    })//


    // main_1 photo 영역
    $(".photo").slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        arrows:false
    })

    $(".banner").slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        arrows:false 
    })


    //banner 영역
    $(".b_stop").click(function(){
        
        if($(this).hasClass("on")==true){
            $(this).removeClass("on");
            $(".banner").slick("slickPlay");
        }else{
            $(this).addClass("on");
            $(".banner").slick("slickPause");
        }

    })//


    //viewer 영역
    $(".viewer").slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        arrows:false
    })

    $(".v_stop").click(function(){
        
        if($(this).hasClass("on")==true){
            $(this).removeClass("on");
            $(".viewer").slick("slickPlay");
        }else{
            $(this).addClass("on");
            $(".viewer").slick("slickPause");
        }

    })//


    // e_store 영역
    $(".store").slick({
        autoplay:false,
        slidesToShow:2,
        slidesToScroll:2,
        dots:true,
        arrows:false
    })//

    $(".e_store .e_play").click(function(){
        
        if($(this).hasClass("on")==true){
            $(this).removeClass("on");
            $(".store").slick("slickPause");
        }else{
            $(this).addClass("on");
            $(".store").slick("slickPlay");
        }

    })//



    //main_4, notice 영역
    $(".notice").slick({
        autoplay:true,
        vertical:true,
        dots:false,
        arrows:true
    })//

    $(".n_stop").click(function(){
        
        if($(this).hasClass("on")==true){
            $(this).removeClass("on");
            $(".notice").slick("slickPlay");
        }else{
            $(this).addClass("on");
            $(".notice").slick("slickPause");
        }

    })//
})//