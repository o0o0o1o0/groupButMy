let winH = $(window).height();
  let winW = $(window).width();
  //resize事件
  $(window).resize(function(){
    winW = $(window).width();  //把resize 的值帶進去
    if(winW>1200){
      $('.navmenu .wrap div').eq(1).find('ul').css('height','70px')
      $('.navmenu .wrap div').eq(1).find('ul').css({'display':'flex'});
    }else if(winW<=1200){
      $('.navmenu .wrap div').eq(1).find('ul').css('height','0px');
      $('.navmenu .wrap div').eq(1).find('ul').slideUp();
      $('.hamburger').removeClass('is-active')
    }
  })
  //導覽列變白變透明
  $(document).scroll(function(){
    let wt = parseInt($(window).scrollTop())
    if( wt > 80){                         //scroll > 80
      $('.navmenu').addClass('letmeout')     //白底黑字
    }else{                               //scroll <= 80 
      $('.navmenu').removeClass('letmeout') //透明底底白字
    }
  })


  // 導覽列漢堡切換
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
    if($('.hamburger').hasClass('is-active')){
      $('.navmenu .wrap div').eq(1).find('ul').css('height','calc(100vh - 70px)')
      $('.navmenu .wrap div').eq(1).find('ul').slideDown();
    }else{
      $('.navmenu .wrap div').eq(1).find('ul').css('height','')
      $('.navmenu .wrap div').eq(1).find('ul').slideUp();
    }
  });