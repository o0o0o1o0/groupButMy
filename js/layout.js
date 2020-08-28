let winW = parseInt($(window).width()+17);//scrollbar 寬17px
      let winH = parseInt($(window).height());
      let winST = parseInt($(window).scrollTop())
      console.log(winH,winW,winST)
    //每次resize 就把漢堡下拉選單關掉
      $(window).resize(function(){
        winW = parseInt($(window).width()+17);  
        winST = parseInt($(window).scrollTop())
        if(winW>1200){
          $('.navmenu .wrap div').eq(2).find('ul').css('height','70px')
          $('.navmenu .wrap div').eq(2).find('ul').css({'display':'flex'});
        }else if(winW<=1200){
          $('.navmenu .wrap div').eq(2).find('ul').css('height','');
          $('.navmenu .wrap div').eq(2).find('ul').slideUp();
          $('.hamburger').removeClass('is-active')
        }
      })
      
      //導覽列加陰影
      $(document).scroll(function(){
        winST = parseInt($(window).scrollTop())
        if( winST > 0){                         //scroll > 80
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