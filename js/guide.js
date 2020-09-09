// 分頁tab標籤
$(function(){
  $('a.tab').on('click', function(e){
    e.preventDefault(); 
    
    $(this).closest('ul').find('a.tab').removeClass("-on");

    $(this).addClass('-on');
    
    $('div.tab').removeClass('-on');
    
    $('div.tab.' + $(this).attr('data-target')).addClass('-on');
  });
});

//篩選
$(function(){
  $(".guide_contents > div").hide();
  $(".guide_contents > .fried").show();
  $(".filter_select").on("click", function(){
    $(this).addClass("part_filter").siblings().removeClass("part_filter");
    $(".guide_contents > div").hide();
    $("." + $(this).data("content")).fadeIn(500);
  });
})


//漢堡 jQuery
let winH = $(window).height();
    let winW = $(window).width();
  //每次resize 就把漢堡下拉選單關掉
    $(window).resize(function(){
      winW = $(window).width();  //把resize 的值帶進去
      if(winW>1200){
        $('.navmenu .wrap div').eq(2).find('ul').css('height','70px')
        $('.navmenu .wrap div').eq(2).find('ul').css({'display':'flex'});
      }else if(winW<=1200){
        $('.navmenu .wrap div').eq(2).find('ul').css('height','0px');
        $('.navmenu .wrap div').eq(2).find('ul').slideUp();
        $('.hamburger').removeClass('is-active')
      }
    })
    
    //導覽列加陰影
    $(document).scroll(function(){
      let wt = parseInt($(window).scrollTop())
      if( wt > 80){                         //scroll > 80
        $('.navmenu').addClass('letmeout')     //陰影
      }else{                               //scroll <= 80 
        $('.navmenu').removeClass('letmeout') //去除陰影
      }
    })

    // 導覽列漢堡、下拉選單切換
    $(".hamburger").click(function(){
      
      $(this).toggleClass("is-active");
      if($('.hamburger').hasClass('is-active')){
        $('.navmenu .wrap div').eq(2).find('ul').css('height','calc(100vh - 70px)')
        $('.navmenu .wrap div').eq(2).find('ul').slideDown();
      }else{
        $('.navmenu .wrap div').eq(2).find('ul').css('height','')
        $('.navmenu .wrap div').eq(2).find('ul').slideUp();
      }
    });