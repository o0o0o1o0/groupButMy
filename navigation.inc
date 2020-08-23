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
    body{
      font-family: 微軟正黑體;
    }
  </style>

  <div class="navmenu">
    <div class="wrap">
      <div class="logo"><img src="https://picsum.photos/150/90"></div>
      <div>
        <ul class="navlist">
          <li><a href="#">食玩圖鑑</a></li>
          <li><a href="#">食玩指南</a></li>
          <li><a href="#">食尚玩家</a></li>
          <li><a href="#">夜市新鮮事</a></li>
          <li><a href="#">創建指南</a></li>
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
  <script src='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/js/all.js'></script>
<script>
  let winH = $(window).height();
  let winW = $(window).width();
  //resize事件
  $(window).resize(function(){
    winW = $(window).width();  //把resize 的值帶進去
    if(winW>1200){
      $('.navmenu .wrap div').eq(1).css('height','70px')
      $('.navmenu .wrap div').eq(1).find('ul').css({'display':'flex'});
    }else if(winW<=1200){
      $('.navmenu .wrap div').eq(1).css('height','0px');
      $('.navmenu .wrap div').eq(1).find('ul').slideUp();
      $('.hamburger').removeClass('is-active')
    }
  })
  // 導覽列漢堡切換
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
    if($('.hamburger').hasClass('is-active')){
      $('.navmenu .wrap div').eq(1).css('height','calc(100vh - 70px)')
      $('.navmenu .wrap div').eq(1).find('ul').slideDown();
    }else{
      $('.navmenu .wrap div').eq(1).css('height','')
      $('.navmenu .wrap div').eq(1).find('ul').slideUp();
    }
  });
</script>



</body>
</html>