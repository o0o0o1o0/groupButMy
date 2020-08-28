//氣球綁定事件
let warpOne = document.querySelector('.warpOne');

let ballOne = document.querySelector('.ballOne');
let ballTwo = document.querySelector('.ballTwo');
let ballThree = document.querySelector('.ballThree');
let ballFour = document.querySelector('.ballFour');
let ballfive = document.querySelector('.ballfive'); 
let ballsix = document.querySelector('.ballsix');
let ballseven = document.querySelector('.ballseven');
let ballEight = document.querySelector('.ballEight');
//計分功能
let Score = document.querySelector('.mydiv');
let status = document.querySelector('.status');
//剩餘次數
let numberOftimes = document.querySelector('.numerOftimes');
let numberOftimesList = document.querySelector('.numberOftimesList');
//屁孩出現
let bossPhoto = document.querySelector('.bossPhoto');
//遊戲畫面結束綁定
let gameOver = document.querySelector('.gameOverbutton');


let over = 0;
let num = 7;

//建立氣球監聽事件
ballOne.addEventListener('click',function(e){
    e.stopPropagation();
    e.target.style.display ='none';
    over += 1;
    status.textContent = `總分: ${over}`;
    num -= 1;
    numberOftimesList.textContent = `剩餘次數: ${num}`;
    if(num == 0){
        // alert('遊戲結束');
        document.querySelector('.gameOver').style.display ='block';
    }
},false);
ballTwo.addEventListener('click',function(e){
    e.stopPropagation();
    e.target.style.display ='none';
    over += 1;
    status.textContent = `總分: ${over}`;
    num -= 1;
    numberOftimesList.textContent = `剩餘次數: ${num}`;
    if(num == 0){
        // alert('遊戲結束');
        document.querySelector('.gameOver').style.display ='block';
    }
},false);
ballThree.addEventListener('click',function(e){
    e.stopPropagation();
    e.target.style.display ='none';
    over += 1;
    status.textContent = `總分: ${over}`;
    num -= 1;
    numberOftimesList.textContent = `剩餘次數: ${num}`;
    if(num == 0){
        // alert('遊戲結束');
        document.querySelector('.gameOver').style.display ='block';
    }
},false);
ballFour.addEventListener('click',function(e){
    e.stopPropagation();
    e.target.style.display ='none';
    over += 1;
    status.textContent = `總分: ${over}`;
    num -= 1;
    numberOftimesList.textContent = `剩餘次數: ${num}`;
    if(num == 0){
        // alert('遊戲結束');
        document.querySelector('.gameOver').style.display ='block';
    }
},false);
ballfive.addEventListener('click',function(e){
    e.stopPropagation();
    e.target.style.display ='none';
    over += 1;
    status.textContent = `總分: ${over}`;
    num -= 1;
    numberOftimesList.textContent = `剩餘次數: ${num}`;
    if(num == 0){
        // alert('遊戲結束');
        document.querySelector('.gameOver').style.display ='block';
    }
},false);
ballsix.addEventListener('click',function(e){
    e.stopPropagation();
    e.target.style.display ='none';
    over += 1;
    status.textContent = `總分: ${over}`;
    num -= 1;
    numberOftimesList.textContent = `剩餘次數: ${num}`;
    if(num == 0){
        // alert('遊戲結束');
        document.querySelector('.gameOver').style.display ='block';
    }
},false);
ballseven.addEventListener('click',function(e){
    e.stopPropagation();
    e.target.style.display ='none';
    over += 1;
    status.textContent = `總分: ${over}`;
    num -= 1;
    numberOftimesList.textContent = `剩餘次數: ${num}`;
    if(num == 0){
        // alert('遊戲結束');
        document.querySelector('.gameOver').style.display ='block';
    }
},false);
ballEight.addEventListener('click',function(e){
    e.stopPropagation();
    e.target.style.display ='none';
    over += 1;
    status.textContent = `總分: ${over}`;
    num -= 1;
    numberOftimesList.textContent = `剩餘次數: ${num}`;
    if(num == 0){
        // alert('遊戲結束');
        document.querySelector('.gameOver').style.display ='block';
    }
    // }
},false);
//屁孩隨機事件
bossPhoto.addEventListener('click',function(e){
    e.target.style.display ='none';
    over -= 2;
    status.textContent = `總分: ${over}`;
    if(num == 0){
        // alert('遊戲結束');
        document.querySelector('.gameOver').style.display ='block';
    }
});

warpOne.addEventListener('click',function(e){
    if(document.querySelector('.overlay').style.display!='none'){
        num = num;
    }else{
        num -= 1;
    numberOftimesList.textContent = `剩餘次數: ${num}`;
    }
    if(num == 0){
        document.querySelector('.gameOver').style.display ='block';
    }

},false)
//遊戲開始畫面
let gameStart = document.querySelector('.btn_modal_close');
gameStart.addEventListener('click',function(e){
    e.stopPropagation();
    document.querySelector('.overlay').style.display='none';
},false);

//遊戲畫面結束
gameOver.addEventListener('click',function(){
    document.querySelector('.gameOver').style.display='none';
    location.reload();
},false);