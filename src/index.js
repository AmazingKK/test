 // banner
$(function () {
   
    var bNum = 0;
    var bTimer = null;

    function bDong() {
        bNum++;
        if (bNum > 1) {
            bNum = 0;
        }
        $(".bannerImg i").fadeOut(300).eq(bNum).fadeIn(300);
    }
    $(".bannerBtnL").click(function () {
            bNum--;
            if (bNum < 0) {
                bNum = 1
            }
            $(".bannerImg i").fadeOut(300).eq(bNum).fadeIn(300);
        })
        $(".bannerBtnR").click(function () {
            dong();
        })
    bTimer = setInterval(bDong, 1000);
    $(".banner").hover(function () {
        clearInterval(bTimer);
        
    }, function () {
        bTimer = setInterval(bDong, 1000);
    })
})
//cont1
//lunbo
$(function(){
    var cNum = 0;
    var cTimer = null;
    var eNum = 0;
    var eTimer = null;
    function cDong() {
        cNum++;
        if (cNum > 4) {
            cNum = 0;
        }
        $(".cont1MidBotCont ul").eq(0).find("li").fadeOut(300).eq(cNum).fadeIn(300);
        $(".cont1MidBotBtn div").eq(0).find("a").removeClass("active").eq(cNum).addClass("active")
    }
    cTimer = setInterval(cDong, 1000);

    
    function eDong() {
        eNum++;
        if (eNum > 3) {
            eNum = 0;
        }
        $(".cont1MidBotCont ul").eq(1).find("li").fadeOut(300).eq(eNum).fadeIn(300);
        $(".cont1MidBotBtn div").eq(1).find("a").removeClass("active").eq(eNum).addClass("active")
    }
    eTimer = setInterval(eDong, 1000);
    $(".cont1MidBotR a").click(function(){
        $(this).addClass("active").siblings().removeClass("active")
        $(".cont1MidBotCont ul").hide().eq($(this).index()).show()
        $(".cont1MidBotBtn div").hide().eq($(this).index()).show()
    })
})

//tab
$(function(){
    $(".cont1 .cont1RightNav div a").click(function(){
        $(this).addClass("active").siblings().removeClass("active")
        $(".cont1 .cont1RightList ul").fadeOut(300).eq($(this).index()).fadeIn(300)
    })
})
//cont2 mid tab
$(function(){
    $(".cont2Mid .cont1RightNav div a").click(function(){
        $(this).addClass("active").siblings().removeClass("active")
        $(".cont2Mid .cont1RightList ul").fadeOut(300).eq($(this).index()).fadeIn(300)
    })
    var pSpeed = 2;
    var pspeed = 0;
    var pTimer = null;
    pTimer = setInterval(function(){
        pspeed= pspeed+pSpeed; 
        if(pspeed>316*2){
            pspeed=0
            $(".cont2Mid .price .priceBox ul").css("left",-pspeed)
        }else{
            $(".cont2Mid .price .priceBox ul").css("left",-pspeed)
        }
    },30)
})
//right tab
$(function(){
    $(".cont2Right .cont2RightBotTop a").click(function(){
        $(this).addClass("active").siblings().removeClass("active")
        $(".cont2Right .cont2RightBotBot .slide").hide().eq($(this).index()).show()
    })
    var dNum=0;
    $(".item1Max .item1Box").eq(0).clone(true).appendTo(".item1Max")
    $(".item1 .cal-prev").click(function(){
        dNum--;
        if (dNum<0) {
            dNum=6;
            $(".item1 .item1Max").css("left",-411*7).animate({"left":-411*6},300)
        }else{
            $(".item1 .item1Max").animate({"left":-411*dNum},300)
        }
    })
    $(".item1 .cal-next").click(function(){
        dNum++;
        if (dNum>7) {
            dNum=1;
            $(".item1 .item1Max").css("left",0).animate({"left":-411},300)
        }else{
            $(".item1 .item1Max").animate({"left":-411*dNum},300)
        }
    })
})