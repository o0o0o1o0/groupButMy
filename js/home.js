jQuery(document).ready(function ($) {
  //🟡第一屏(banner輪播)
    var slideCount1 = $('.slider1 .slides li').length;
    var slideWidth1 = document.documentElement.clientWidth//$('.slider1').width();
    var slideHeight1 = window.innerHeight;
    var sliderUlWidth1 = slideCount1 * slideWidth1;
    let currentLi1 = parseInt($('.slider1 ul li:first-child').attr('data-page'));
    let currentDot1 = $('.steps1 li').eq(currentLi1-1);
    let ww = parseInt(window.innerHeight- 70+'px' )           //一個..視窗的高度..   然後減掉導覽列高度
    //, height: parseInt(`${window.innerHeight}`)
    $('.slider1,.slider1 .slides li').css({ width: slideWidth1 });
    $('.slider1 .slides').css({ width: sliderUlWidth1, marginLeft: - slideWidth1 });
   //resize
    $(window).resize(function(){
      slideWidth1 = document.documentElement.clientWidth ;
      slideHeight1 = parseInt(`${window.innerHeight}`);//-100
      sliderUlWidth1 = slideCount1 * slideWidth1;
      ww = parseInt(window.innerHeight- 70+'px' )
      $('.slider1,.slider1 .slides li').css({ width:  slideWidth1 });
      $('.slider1 .slides').css({ width: sliderUlWidth1, marginLeft: - slideWidth1 });
      
      winW = $(window).width();  //把resize 的值帶進去
      if(winW>1200){
      }else if(winW<=1200){
        
      }
     
    })
  //scroll down
  function wheelDown(e)  {
    $('body,html').stop().animate({scrollTop: ww },800 ,
      )
    }
    function wheelUp(e){ 
      $('body,html').stop().animate({scrollTop: '' },800, 
      )  
  }
  $(window).on('wheel  DOMMouseScroll', function(e) { //當我滾動滑鼠的時候
    // e.stopPropagation();
    // e.preventDefault();
    e.stopImmediatePropagation(); 
    let delta = e.originalEvent.deltaY;
      if (delta > 0 && $(window).scrollTop() < 80) { //滑鼠往下滑  而且  <80
        setTimeout(wheelDown(),800)
      } else if(delta < 0 && ($(window).scrollTop() > 80 && $(window).scrollTop() <=ww)) {          
        setTimeout(wheelUp(),800)                   //滑鼠往上滑 
      }
      //,{passive: false}
  });

  
  $('.scrollDownBtn').click(function() {
    $('html, body').stop().animate({ scrollTop: ww }, 800);
  })
  
  
  
  //輪播
  $('.slider1 .slides li:last-child').prependTo('.slider1 .slides');
  //自動播放輪播
  timeId1=timeId1=setInterval( moveRight1, 3500)
  //hover   
  $('.steps1 li').hover(
    function(){                   //滑到的時候
    $(this).css("opacity", "0.7");
    currentDot1.css('opacity','1');//定點的不能被影響
    clearInterval(timeId1)         //停止輪播
  }, function(){                  //滑出的時候
    $(this).css("opacity", "0.5");
    currentDot1.css('opacity','1');//定點的不能被影響
    timeId1=setInterval( moveRight1, 3500)//繼續輪播
  });
  $('.go-order-btn').hover(function(){clearInterval(timeId1)}
                          ,function(){timeId1=setInterval( moveRight1, 3500)}
  )
  
  
  function dotColorChange1(){      //點點的顏色切換
    $('.steps1 li').css('opacity','0.5')
    currentDot1.css('opacity','1')
  }
  dotColorChange1()                //load時就執行一次點點顏色(起始值)
  function moveLeft1() {           //向左走
    $('.slider1 .slides').animate({
      left: + slideWidth1
    }, 800, function () {
      $('.slider1 .slides li:last-child').prependTo('.slider1 .slides');
      $('.slider1 .slides').css('left', '');
      currentLi1 = parseInt($('.slider1 ul li').eq(1).attr('data-page'));//目前slide在第幾頁(數值)
      currentDot1 = $('.steps1 li').eq(currentLi1-1);           //目前的點點在第幾個(物件)
      dotColorChange1()
    });
  };
  function moveRight1() {            //向右走
    $('.slider1 .slides').animate({
      left: - slideWidth1
    }, 800, function () {
      $('.slider1 .slides li:first-child').appendTo('.slider1 .slides');
      $('.slider1 .slides').css('left', '');
      currentLi1 = parseInt($('.slider1 ul li').eq(1).attr('data-page'));//目前slide在第幾頁(數值)
      currentDot1 = $('.steps1 li').eq(currentLi1-1);           //目前的點點在第幾個(物件)
      dotColorChange1()
    });
  };
  
  
  $('a.control_prev1').click(function () {
    moveLeft1();
  });
  $('a.control_next1').click(function () {
    moveRight1();
  });
  for(let i=1;i<=slideCount1;i++){//1~3頁
     $('.steps1 li').eq(i-1).click(function(){//哪個newP被按了
       if(($(this).index()+1) > currentLi1){
         let mm = ($(this).index()+1) - currentLi1
          for(let j=0;j<mm;j++){
            setTimeout( moveRight1() );
          }
       }else if(($(this).index()+1) < currentLi1){
         let mm = currentLi1 - ($(this).index()+1)
          for(let p=0;p<mm;p++){
            setTimeout(  moveLeft1() );
          }
       }
      });
  }
     
  //🟡三倍卡片triple(近期熱門店家、最新合作店家)
  function smoothRight(e,p){
    let leftPos = $(e).closest('.tripleImgWrap').find('.shop_card_list').scrollLeft();
    let imgsW   = $(e).closest('.tripleImgWrap').find('.shop_card_list').width();
    $(e).closest('.tripleImgWrap').find(".shop_card_list").stop().animate({scrollLeft: leftPos + imgsW }, 300);
    console.log(leftPos,imgsW)
  }
  function smoothLeft(e,p){
    let leftPos = $(e).closest('.tripleImgWrap').find('.shop_card_list').scrollLeft();
    let imgsW   = $(e).closest('.tripleImgWrap').find('.shop_card_list').width();
    $(e).closest('.tripleImgWrap').find(".shop_card_list").stop().animate({scrollLeft: leftPos - imgsW }, 300);
    console.log(leftPos,imgsW)
  }
  $(".tripleNextBtn").click(function () { smoothRight(this,0); });
  $(".triplePrevBtn").click(function () {  smoothLeft(this,0) });
  $(window).resize(function(){$('.shop_card_list').stop().animate({scrollLeft:''}),10})
  //卡片低於某個寬度，多的要刪掉
  // for(let i=0;i<$('.hot_shop').find('.shop_card').length;i++){
  //   if($('.hot_shop').find('.shop_card').eq(i).has() == false){//沒有東西
  //     console.log('aaa',i)
  //   }
  // // }
  // if($(window).width() >= 1200){
  
  // }
  // else if($(window).width() <　992){
  
    
    
  // }

  // else if($(window).width() < 576){
  
  
  
  // }
  
  
  
  //🟡不知道如何逛中壢夜市嗎？ 羅東臭薯條
    var slideCount2 = $('div.slider2 ul.slides li').length;
    var divWidth2 = $('div.slider2').width();
    var divHeight = $('div.slider2').height();
    $('.slider2 .slides li').css({'width':divWidth2,'height':divHeight});
    var sliderUlWidth2 = slideCount2 * divWidth2;
    $('.slider2 .slides').css({'width':sliderUlWidth2,marginLeft:-divWidth2})
    //plan_route_list
    var slideWidth2LT = $('.plan .littleText li span').width();
    var currentLi2 =parseInt($('.slider2 ul li').eq(0).attr('data-page'));
    $('.slider2 .slides li:last-child').prependTo('.slider2 .slides');
  //resize
  $(window).resize(function(){
    divWidth2 = $('.slider2').width()
    divHeight = $('div.slider2').height();
    $('.slider2 .slides li').css({'width':divWidth2,'height':divHeight});
    sliderUlWidth2 = slideCount2 * divWidth2;
    $('.slider2 .slides').css({'width':sliderUlWidth2,marginLeft:-divWidth2})
    winW = $(window).width();  //把resize 的值帶進去
    // (winW>1200)?:;
  })
  
  function moveLeft2() {           //向左走
    $('.slider2 .slides').stop().animate({
      left: + divWidth2
    }, 500, function () {
      $('.slider2 .slides li:last-child').prependTo('.slider2 .slides');
      $('.slider2 .slides').css('left', ''); 
      // currentLi2 = parseInt($('.slider3 ul li:first-child').attr('data-page'));
      currentLi2 = parseInt($('.slider2 ul li').eq(1).attr('data-page'));//目前slide在第幾頁(數值)
    });
    $('.plan .littleText ul').stop().animate({
      left: + slideWidth2LT
    }, 500, function () {
      $('.plan .littleText li:last-child').prependTo('.plan .littleText ul');
      $('.plan .littleText ul').css('left', '');
    });
  };
  function moveRight2() {            //向右走
    $('.slider2 .slides').stop().animate({
      left: - divWidth2
    }, 500, function () {
      $('.slider2 .slides li:first-child').appendTo('.slider2 .slides');
      $('.slider2 .slides').css('left', '');
      currentLi2 = parseInt($('.slider2 ul li').eq(1).attr('data-page'));//目前slide在第幾頁(數值)
      // currentLi2 = parseInt($('.slider3 ul li:last-child').attr('data-page'));
    });
    $('.plan .littleText ul').stop().animate({
      left: - slideWidth2LT
    }, 500, function () {
      $('.plan .littleText li:first-child').appendTo('.plan .littleText ul');
      $('.plan .littleText ul').css('left', '');
    });
  
  };
  
  
  $('.plan_prev-btn').click(function () {
    moveLeft2();
  });
  $('.plan_next-btn').click(function () {
    moveRight2();
  });
//路線拖曳(小手手)
let dragTarget = document.querySelectorAll(".plan_route_list");
let startX = 0;
let startScroll = 0;
let startTime = 0;
let moved = false;
const startDrag = function(e) {
  dragTarget[(currentLi2)%3].classList.add("dragactive");
  startX = e.pageX;
  startScroll = dragTarget[(currentLi2)%3].scrollLeft;
  startTime = new Date().getTime();
  moved = false;
};
const dragHandler = function(e) {
  e.preventDefault();
  if (dragTarget[(currentLi2)%3].classList.contains("dragactive")) {
    moved = true;
    let move = e.pageX - startX;
    dragTarget[(currentLi2)%3].scrollLeft = startScroll - move * 5;
  }
};
const stopDrag = function(e) {
  dragTarget[(currentLi2)%3].classList.remove("dragactive");
};
for(let i=0;i<$(".plan_route_list").length;i++){
  // console.log(dragTarget[i])
  dragTarget[i].addEventListener("mousedown", startDrag);//touchstart
  dragTarget[i].addEventListener("mousemove", dragHandler);//touchmove
  dragTarget[i].addEventListener("mouseup",   stopDrag);//touchend
  dragTarget[i].addEventListener("mouseleave",stopDrag);
}
// $(dragTarget[currentLi2-1]).mousedown(startDrag);//touchstart
// $(dragTarget[currentLi2-1]).mousemove(dragHandler);//touchmove
// $(dragTarget[currentLi2-1]).mouseup(stopDrag);//touchend
// $(dragTarget[currentLi2-1]).mouseleave(stopDrag);
document.querySelectorAll(".plan_route_list a").forEach(dom => {
  dom.addEventListener("click", function(e) {
    if (moved) {e.preventDefault();}
  });
});


     
  
  //🟡第三個輪播(news)(夜市夯話題)
    var slideCount3 = $('.slider3 .slides li').length;
    var slideWidth3 = $('.slider3').width();
    var slideHeight3 =slideWidth3 / 2; //$('.slider3').height();
    $('.slider3 .slides li').css({'height':slideHeight3,'width':slideWidth3});
    var sliderUlWidth3 = slideCount3 * slideWidth3;
    let currentLi3 = parseInt($('.slider3 ul li:first-child').attr('data-page'));
    let currentDot3 = $('.steps3 li').eq(currentLi3-1);
    $('.slider3 .slides').css({ width: sliderUlWidth3, marginLeft: - slideWidth3 });
  $('.slider3 .slides li:last-child').prependTo('.slider3 .slides');
  //resize
  $(window).resize(function(){
    slideWidth3 = $('.slider3').width();
    slideHeight3 =slideWidth3 / 2;//$('.slider3').height();
    $('.slider3 .slides li').css({'height':slideHeight3,'width':slideWidth3});
    sliderUlWidth3 = slideCount3 * slideWidth3;
    $('.slider3 .slides').css({ width: sliderUlWidth3, marginLeft: - slideWidth3 });
  
  
   
  })
  //自動輪播
timeId3=setInterval(   moveRight3 , 3500);
      
  //hover
  $('.steps3 li').hover(
    function(){                   //滑到的時候
    $(this).css("opacity", "0.7");
    currentDot3.css('opacity','1');//定點的不能被影響
  }, function(){                  //滑出的時候
    $(this).css("opacity", "0.5");
    currentDot3.css('opacity','1');//定點的不能被影響
  });
  $('.news .section').hover(
    function(){                   //滑到的時候
    clearInterval(timeId3)
  }, function(){                  //滑出的時候
    timeId3=setInterval(   moveRight3 , 3500);
  });
  
  
  
  function dotColorChange3(){      //點點的顏色切換
    $('.steps3 li').css({'opacity':'0.5','width':'50px'})
    currentDot3.css({'opacity':'1','width':'40px'})
  }
  dotColorChange3()                //load時就執行一次點點顏色(起始值)
  function moveLeft3() {           //向左走
    $('.slider3 .slides').animate({
      left: + slideWidth3
    }, 300, function () {
      $('.slider3 .slides li:last-child').prependTo('.slider3 .slides');
      $('.slider3 .slides').css('left', '');
      currentLi3 = parseInt($('.slider3 ul li').eq(1).attr('data-page'));//目前slide在第幾頁(數值)
      currentDot3 = $('.steps3 li').eq(currentLi3-1);           //目前的點點在第幾個(物件)
      dotColorChange3()
    });
  };
  function moveRight3() {            //向右走
    $('.slider3 .slides').animate({
      left: - slideWidth3
    }, 300, function () {
      $('.slider3 .slides li:first-child').appendTo('.slider3 .slides');
      $('.slider3 .slides').css('left', '');
      currentLi3 = parseInt($('.slider3 ul li').eq(1).attr('data-page'));//目前slide在第幾頁(數值)
      currentDot3 = $('.steps3 li').eq(currentLi3-1);           //目前的點點在第幾個(物件)
      dotColorChange3()
    });
  };
  
  
  $('a.control_prev3').click(function () {
    moveLeft3();
  });
  $('a.control_next3').click(function () {
    moveRight3();
  });
  for(let i=1;i<=slideCount3;i++){//1~5頁
     $('.steps3 li').eq(i-1).click(function(){//哪個newP被按了
       if(($(this).index()+1) > currentLi3){
         let mm = ($(this).index()+1) - currentLi3
          console.log(mm)
          for(let j=0;j<mm;j++){
            setTimeout( moveRight3() );
          }
       }else if(($(this).index()+1) < currentLi3){
         let mm = currentLi3 - ($(this).index()+1)
          console.log(mm)
          for(let p=0;p<mm;p++){
            setTimeout(  moveLeft3() );
          }
       }
      });
  }
     
     
    //幫我做決定!!!!!!!!
    $('.select-btn').click(function(){
      
      $('.choose_shuffle_frame').show();
  
  
      $('.frame').addClass('show'); 
      
      $('#card01').addClass('show');
      $('#card02').addClass('show');
      $('#card03').addClass('show');
      $('#card04').addClass('show');
      $('#card05').addClass('show');
      $('#card06').addClass('show');
      $('#card07').addClass('show');
      $('#card08').addClass('show');
      $('#card09').addClass('show');
      $('#card10').addClass('show');
      $('#card11').addClass('show');
      $('#card12').addClass('show');
      $('#card13').addClass('show');
  
      $('#card_shuffle_close').addClass('show');
  });
  
  
  $('#card_shuffle_close').click(function(){
      
      $('.choose_shuffle_frame').hide();
  
  
      $('.frame').removeClass('show'); 
      
      $('#card01').removeClass('show');
      $('#card02').removeClass('show');
      $('#card03').removeClass('show');
      $('#card04').removeClass('show');
      $('#card05').removeClass('show');
      $('#card06').removeClass('show');
      $('#card07').removeClass('show');
      $('#card08').removeClass('show');
      $('#card09').removeClass('show');
      $('#card10').removeClass('show');
      $('#card11').removeClass('show');
      $('#card12').removeClass('show');
      $('#card13').removeClass('show');
  
      $('#card_shuffle_close').removeClass('show');
  });
     
  });    