jQuery(document).ready(function ($) {
  //🟡第一屏(banner輪播)
    var slideCount1 = $('.slider1 .slides li').length;
    var slideWidth1 = $('.slider1 .slides li').width();
    var slideHeight1 = $('.slider1 .slides li').height();
    var sliderUlWidth1 = slideCount1 * slideWidth1;
    let slidePage1 = parseInt($('.slides li').attr('data-page'))
    let currentLi1 = parseInt($('.slider1 ul li:first-child').attr('data-page'));
    let currentDot1 = $('.steps1 li').eq(currentLi1-1);
    let ww = parseInt(window.innerHeight- 70+'px' )           //一個..視窗的高度..   然後減掉導覽列高度
    $('.slider1').css({ width:  window.innerWidth-25, height: parseInt(`${window.innerHeight}`) });
    $('.slider1 .slides').css({ width: sliderUlWidth1, marginLeft: - slideWidth1 });
   //resize
    $(window).resize(function(){
      slideWidth1 = window.innerWidth-25;
      slideHeight1 = parseInt(`${window.innerHeight}`);//-100
      sliderUlWidth1 = slideCount1 * slideWidth1;
      ww = parseInt(window.innerHeight- 70+'px' )
      // console.log(slideWidth1,window.innerWidth,'---',slideHeight1,window.innerHeight,sliderUlWidth1)
      $('.slider1').css({ width: slideWidth1, height: slideHeight1 });
      $('.slider1 .slides').css({ width: sliderUlWidth1, marginLeft: - slideWidth1 });
      
      winW = $(window).width();  //把resize 的值帶進去
      if(winW>1200){
      }else if(winW<=1200){
        
      }
     
    })
  //scroll down
  // $(window).on('wheel', function(e) {   
  //                      //當我滾動滑鼠的時候
  //   e.stopPropagation();
  //   let delta = e.originalEvent.deltaY;
  //   console.log(ww,$(window).scrollTop());
     
  //     if (delta > 0 && $(window).scrollTop() < 80) {          //滑鼠往下滑  而且  <80
  //         $('body,html').animate({scrollTop: ww },800 )
  //     } else if(delta < 0 && $(window).scrollTop() > 80 && $(window).scrollTop() <900) {          
  //       $('body,html').animate({scrollTop: 0 },800 )                   //滑鼠往上滑 
  //     }
  //   // return false; // this line is only added so the whole page won't scroll in the demo
  // });
  
  //scroll
  // let lastST = 0;
  // $(window).scroll(function(){
  //   let winST = $(this).scrollTop();
  //   console.log('ww'+ww,'lastST'+lastST,'winST'+winST,'windowScrollTop'+$(window).scrollTop());
  //   if(lastST<winST){   //往下滑
  //     if(winST <= 80){  　　　　　　　　　//scrollTop < 80
  //       $('body,html').animate({scrollTop: ww } )
  //     }
  //     winST = $(window).scrollTop();
  //   }else if(lastST>winST){//往上滑
  //     if(winST < ww-100  && winST>80){
  //       $('body,html').animate({scrollTop: 0 } ) 
  //     }
  //     // winST = $(window).scrollTop();
  //   }
  //   lastST = $(window).scrollTop();
  // });
  
  $('.scrollDownBtn').click(function() {
    $('html, body').animate({ scrollTop: ww }, 800);
  })
  
  
  
  //輪播
  $('.slider1 .slides li:last-child').prependTo('.slider1 .slides');
  //自動播放輪播
  var timeId1 = 0
  timeId1=setInterval( () => { moveRight1(); }, 3500);
  //hover   
  $('.steps1 li').hover(
    function(){                   //滑到的時候
    $(this).css("opacity", "0.7");
    currentDot1.css('opacity','1');//定點的不能被影響
    clearInterval(timeId1)         //停止輪播
  }, function(){                  //滑出的時候
    $(this).css("opacity", "0.5");
    currentDot1.css('opacity','1');//定點的不能被影響
    timeId1=setInterval( () => { moveRight1(); }, 3500);//繼續輪播
  });
  $('.go-order-btn').hover(function(){clearInterval(timeId1)}
                          ,function(){timeId1=setInterval( () => { moveRight1(); }, 3500)}
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
  for(let i=1;i<=slideCount1;i++){//1~5頁
     $('.steps1 li').eq(i-1).click(function(){//哪個newP被按了
       if(($(this).index()+1) > currentLi1){
         let mm = ($(this).index()+1) - currentLi1
          console.log(mm)
          for(let j=0;j<mm;j++){
            moveRight1();
          }
       }else if(($(this).index()+1) < currentLi1){
         let mm = currentLi1 - ($(this).index()+1)
          console.log(mm)
          for(let p=0;p<mm;p++){
            moveLeft1();
          }
       }
      });
  }
     
  //🟡三倍卡片triple(近期熱門店家、最新合作店家)
  function smoothRight(e,p){
    let leftPos = $(e).closest('.tripleImgWrap').find('.shop_card_list').scrollLeft();
    let imgsW = $(e).closest('.tripleImgWrap').find('.shop_card_list').width();
    $(e).closest('.tripleImgWrap').find(".shop_card_list").animate({scrollLeft: leftPos + imgsW}, 300);
  }
  function smoothLeft(e,p){
    let leftPos = $(e).closest('.tripleImgWrap').find('.shop_card_list').scrollLeft();
    let imgsW = $(e).closest('.tripleImgWrap').find('.shop_card_list').width();
    $(e).closest('.tripleImgWrap').find(".shop_card_list").animate({scrollLeft: leftPos - imgsW}, 300);
  }
  $(".tripleNextBtn").click(function () { 
    smoothRight(this,0);
  });
  $(".triplePrevBtn").click(function () { 
    smoothLeft(this,0)
  });
  //卡片低於某個寬度，多的要刪掉
  let ooxx = $('.hot_shop').find('.shop_card').length
  // for(let i=0;i<$('.hot_shop').find('.shop_card').length;i++){
  //   if($('.hot_shop').find('.shop_card').eq(i).has() == false){//沒有東西
  //     console.log('aaa',i)
  //   }
  // // }
  // if($(window).width() >= 1200){
  
  // }
  // else if($(window).width() <　992){
  
    
    
  // }
  // else if($(window).width() < 768){
  
    
    
  // }
  // else if($(window).width() < 576){
  
  
  
  // }
  
  
  
  //🟡不知道如何逛中壢夜市嗎？ 羅東臭薯條
    var slideCount2 = $('div.slider2 ul.slides li').length;
    var divWidth2 = $('div.slider2').width();
    var divHeight = $('div.slider2').height();
    $('.slider2 .slides li').css({'width':divWidth2,'height':divHeight});
    var sliderUlWidth2 = slideCount2 * divWidth2;
    $('.slider2 .slides').css({'width':sliderUlWidth2})
    var slideWidth2LT = $('.plan .littleText li span').width();
  
  //resize
  $(window).resize(function(){
    divWidth2 = $('.slider2').width()
    divHeight = $('div.slider2').height();
    $('.slider2 .slides li').css({'width':divWidth2,'height':divHeight});
    sliderUlWidth2 = slideCount2 * divWidth2;
    $('.slider2 .slides').css({'width':sliderUlWidth2})
    winW = $(window).width();  //把resize 的值帶進去
    // (winW>1200)?:;
  })
  
  function moveLeft2() {           //向左走
    $('.slider2 .slides').animate({
      left: + divWidth2
    }, 200, function () {
      $('.slider2 .slides li:last-child').prependTo('.slider2 .slides');
      $('.slider2 .slides').css('left', ''); 
      // currentLi2 = parseInt($('.slider2 ul li').eq(1).attr('data-page'));//目前slide在第幾頁(數值)
    });
    $('.plan .littleText ul').animate({
      left: + slideWidth2LT
    }, 0, function () {
      $('.plan .littleText li:last-child').prependTo('.plan .littleText ul');
      $('.plan .littleText ul').css('left', '');
    });
  };
  function moveRight2() {            //向右走
    $('.slider2 .slides').animate({
      left: - divWidth2
    }, 200, function () {
      $('.slider2 .slides li:first-child').appendTo('.slider2 .slides');
      $('.slider2 .slides').css('left', '');
      // currentLi2 = parseInt($('.slider2 ul li').eq(1).attr('data-page'));//目前slide在第幾頁(數值)
    });
    $('.plan .littleText ul').animate({
      left: - slideWidth2LT
    }, 0, function () {
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
let dragTarget = document.querySelector(".plan_route_list");
let startX = 0;
let startScroll = 0;
let startTime = 0;
let moved = false;
const startDrag = function(e) {
  console.log()
  dragTarget.classList.add("dragactive");
  startX = e.pageX;
  startScroll = dragTarget.scrollLeft;
  startTime = new Date().getTime();
  moved = false;
};
const dragHandler = function(e) {
  e.preventDefault();
  if (dragTarget.classList.contains("dragactive")) {
    moved = true;
    let move = e.pageX - startX;
    dragTarget.scrollLeft = startScroll - move * 5;
  }
};
const stopDrag = function(e) {
  dragTarget.classList.remove("dragactive");
};
$(dragTarget).mousedown(startDrag);//touchstart
$(dragTarget).mousemove(dragHandler);//touchmove
$(dragTarget).mouseup(stopDrag);//touchend
$(dragTarget).mouseleave(stopDrag);
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
  var timeId3 = 0
      timeId3=setInterval( () => { moveRight3(); }, 3500);
      
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
    timeId3=setInterval( () => { moveRight3(); }, 3500);
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
            moveRight3();
          }
       }else if(($(this).index()+1) < currentLi3){
         let mm = currentLi3 - ($(this).index()+1)
          console.log(mm)
          for(let p=0;p<mm;p++){
            moveLeft3();
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