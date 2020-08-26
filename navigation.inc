<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <style>
    @import url(./css/style.css);
    /* @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/fontawesome.css); */
  </style>





<!-- 🟡複製下方即可 -->
  <div class="navmenu">
    <div class="wrap">
      <div class="logo">
        <div class="img">
          <a href="./index.html"><img src="./img/layout/logo.png"></a>
        </div>
      </div>
      <div>
        <ul class="navlist">
          <li><a href="./book.html">食玩圖鑑</a></li>
          <li><a href="./guide.html">食玩指南</a></li>
          <li><a href="./game.html">食尚玩家</a></li>
          <li><a href="./ad.html">夜市新鮮事</a></li>
          <li><a href="./create.html">創建指南</a></li>
          </ul>
          <div class="rIcon">
            <button class="hamburger hamburger--squeeze" type="button">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
            <!--<a href=""class="hamburger"><i class="fas fa-bars bar-open"></i></a>-->
            <a href="#"class="user"><i class="fas fa-user"></i></a>
            <a href="#"class="cart"><i class="fas fa-shopping-cart"></i></a>
          </div>
      </div>
    </div>
  </div>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js'></script>
<script>
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
</script>
<!-- 🟡複製上方即可 -->






</body>
</html>
