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
$(function(){
    $('#gogp').click(function(){
      $('.up-group').animate({scrollTop:130}, 800);
        }); 
      $('#gogpa').click(function(){
    $('.up-group').animate({scrollTop:220}, 800);
      });  
      $('#gogpb').click(function(){
      $('.up-group').animate({scrollTop:130}, 800);
        }); 
      $('#gogpc').click(function(){
    $('.up-group').animate({scrollTop:285}, 800);
      }); 
      $('#gogpd').click(function(){
    $('.up-group').animate({scrollTop:265}, 800);
      }); 
      $('#gogpe').click(function(){
    $('.up-group').animate({scrollTop:340}, 800);
      });  
  })

   
