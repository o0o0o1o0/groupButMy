jQuery(document).ready(function ($) {
  //scroll down
  let ww = parseInt(window.innerHeight- 70+'px' )           //一個..視窗的高度..   然後減掉導覽列高度              
  $(window).on('wheel', function(e) {                       //當我滾動滑鼠的時候
    let delta = e.originalEvent.deltaY;
      if (delta > 0 && $(window).scrollTop() < 80) {          //滑鼠往下滑  而且  <80
        $('body,html').animate({scrollTop: ww }, 1200 )
      } else if(delta < 0 ) {                               //滑鼠往上滑 

      }
    // return false; // this line is only added so the whole page won't scroll in the demo
  });
$('.scrollDownBtn').click(function() {
  $('html, body').animate({ scrollTop: ww }, 800);
})
  


  var slideCount1 = $('.slider1 .slides li').length;
  var slideWidth1 = $('.slider1 .slides li').width();
  var slideHeight1 = $('.slider1 .slides li').height();
  var sliderUlWidth1 = slideCount1 * slideWidth1;
  let slidePage1 = parseInt($('.slides li').attr('data-page'))
  let currentLi1 = parseInt($('.slider1 ul li:first-child').attr('data-page'));
  let currentDot1 = $('.steps1 li').eq(currentLi1-1);
  
  $('.slider1').css({ width:  window.innerWidth-25, height: parseInt(`${window.innerHeight}`) });
  $('.slider1 .slides').css({ width: sliderUlWidth1, marginLeft: - slideWidth1 });
 //resize
  $(window).resize(function(){
    slideWidth1 = window.innerWidth-25;
    slideHeight1 = parseInt(`${window.innerHeight}`);//-100
    sliderUlWidth1 = slideCount1 * slideWidth1;
    console.log(slideWidth1,window.innerWidth,'---',slideHeight1,window.innerHeight,sliderUlWidth1)
    $('.slider1').css({ width: slideWidth1, height: slideHeight1 });
    $('.slider1 .slides').css({ width: sliderUlWidth1, marginLeft: - slideWidth1 });
    
    winW = $(window).width();  //把resize 的值帶進去
    if(winW>1200){
    }else if(winW<=1200){
      
    }
   
  })
$('.slider1 .slides li:last-child').prependTo('.slider1 .slides');
//hover   
$('.steps1 li').hover(
  function(){                   //滑到的時候
  $(this).css("opacity", "0.7");
  currentDot1.css('opacity','1');//定點的不能被影響
}, function(){                  //滑出的時候
  $(this).css("opacity", "0.5");
  currentDot1.css('opacity','1');//定點的不能被影響
});
function dotColorChange1(){      //點點的顏色切換
  $('.steps1 li').css('opacity','0.5')
  currentDot1.css('opacity','1')
}
dotColorChange1()                //load時就執行一次點點顏色(起始值)
function moveLeft1() {           //向左走
  $('.slider1 .slides').animate({
    left: + slideWidth1
  }, 200, function () {
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
  }, 200, function () {
    $('.slider1 .slides li:first-child').appendTo('.slider1 .slides');
    $('.slider1 .slides').css('left', '');
    currentLi1 = parseInt($('.slider1 ul li').eq(1).attr('data-page'));//目前slide在第幾頁(數值)
    currentDot1 = $('.steps1 li').eq(currentLi1-1);           //目前的點點在第幾個(物件)
    dotColorChange1()
  });
};

//自動播放輪播
var timeId1 = 0
timeId1=setInterval( () => { moveRight1(); }, 3000);
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
   
  var slideCount2 = $('.slider2 .slides li').length;
  var slideWidth2 = $('.slider2 .slides li').width();
  var slideHeight2 = $('.slider2 .slides li').height();
  var sliderUlWidth2 = slideCount2 * slideWidth2;
  let slidePage2 = parseInt($('.slides li').attr('data-page'))
  let currentLi2 = parseInt($('.slider2 ul li:first-child').attr('data-page'));
  let currentDot2 = $('.steps2 li').eq(currentLi2-1);
  $('.slider2').css({ width: slideWidth2, height: slideHeight2 });
  $('.slider2 .slides').css({ width: sliderUlWidth2, marginLeft: - slideWidth2 });
$('.slider2 .slides li:last-child').prependTo('.slider2 .slides');
//hover
$('.steps2 li').hover(
  function(){                   //滑到的時候
  $(this).css("opacity", "0.7");
  currentDot2.css('opacity','1');//定點的不能被影響
}, function(){                  //滑出的時候
  $(this).css("opacity", "0.5");
  currentDot2.css('opacity','1');//定點的不能被影響
});
function dotColorChange2(){      //點點的顏色切換
  $('.steps2 li').css('opacity','0.5')
  currentDot2.css('opacity','1')
}
dotColorChange2()                //load時就執行一次點點顏色(起始值)
function moveLeft2() {           //向左走
  $('.slider2 .slides').animate({
    left: + slideWidth2
  }, 200, function () {
    $('.slider2 .slides li:last-child').prependTo('.slider2 .slides');
    $('.slider2 .slides').css('left', '');
    currentLi2 = parseInt($('.slider2 ul li').eq(1).attr('data-page'));//目前slide在第幾頁(數值)
    currentDot2 = $('.steps2 li').eq(currentLi2-1);           //目前的點點在第幾個(物件)
    dotColorChange2()
  });
};
function moveRight2() {            //向右走
  $('.slider2 .slides').animate({
    left: - slideWidth2
  }, 200, function () {
    $('.slider2 .slides li:first-child').appendTo('.slider2 .slides');
    $('.slider2 .slides').css('left', '');
    currentLi2 = parseInt($('.slider2 ul li').eq(1).attr('data-page'));//目前slide在第幾頁(數值)
    currentDot2 = $('.steps2 li').eq(currentLi2-1);           //目前的點點在第幾個(物件)
    dotColorChange2()
  });
};

var timeId2 = 0
$('#checkbox').change(function(e){                      //自動播放
  if($(this).prop('checked')==true){
    timeId2=setInterval( () => { moveRight2(); }, 300);
  }else{
    clearInterval(timeId2)                               //停止播放
  }
});
$('a.control_prev2').click(function () {
  moveLeft2();
});
$('a.control_next2').click(function () {
  moveRight2();
});
for(let i=1;i<=slideCount2;i++){//1~5頁
   $('.steps2 li').eq(i-1).click(function(){//哪個newP被按了
     if(($(this).index()+1) > currentLi2){
       let mm = ($(this).index()+1) - currentLi2
        console.log(mm)
        for(let j=0;j<mm;j++){
          moveRight2();
        }
     }else if(($(this).index()+1) < currentLi2){
       let mm = currentLi2 - ($(this).index()+1)
        console.log(mm)
        for(let p=0;p<mm;p++){
          moveLeft2();
        }
     }
    });
}  
   
   
    var slideCount3 = $('.slider3 .slides li').length;
  var slideWidth3 = $('.slider3 .slides li').width();
  var slideHeight3 = $('.slider3 .slides li').height();
  var sliderUlWidth3 = slideCount3 * slideWidth3;
  let slidePage3 = parseInt($('.slides li').attr('data-page'))
  let currentLi3 = parseInt($('.slider3 ul li:first-child').attr('data-page'));
  let currentDot3 = $('.steps3 li').eq(currentLi3-1);
  $('.slider3').css({ width: slideWidth3, height: slideHeight3 });
  $('.slider3 .slides').css({ width: sliderUlWidth3, marginLeft: - slideWidth3 });
$('.slider3 .slides li:last-child').prependTo('.slider3 .slides');
//hover
$('.steps3 li').hover(
  function(){                   //滑到的時候
  $(this).css("opacity", "0.7");
  currentDot3.css('opacity','1');//定點的不能被影響
}, function(){                  //滑出的時候
  $(this).css("opacity", "0.5");
  currentDot3.css('opacity','1');//定點的不能被影響
});
function dotColorChange3(){      //點點的顏色切換
  $('.steps3 li').css('opacity','0.5')
  currentDot3.css('opacity','1')
}
dotColorChange3()                //load時就執行一次點點顏色(起始值)
function moveLeft3() {           //向左走
  $('.slider3 .slides').animate({
    left: + slideWidth3
  }, 200, function () {
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
  }, 200, function () {
    $('.slider3 .slides li:first-child').appendTo('.slider3 .slides');
    $('.slider3 .slides').css('left', '');
    currentLi3 = parseInt($('.slider3 ul li').eq(1).attr('data-page'));//目前slide在第幾頁(數值)
    currentDot3 = $('.steps3 li').eq(currentLi3-1);           //目前的點點在第幾個(物件)
    dotColorChange3()
  });
};

var timeId3 = 0
$('#checkbox').change(function(e){                      //自動播放
  if($(this).prop('checked')==true){
    timeId3=setInterval( () => { moveRight3(); }, 300);
  }else{
    clearInterval(timeId3)                               //停止播放
  }
});
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
   
   
   
   
});    