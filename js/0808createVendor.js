function doFirst(){
    //🟣第二步新增菜色
    mealCount=0;//🔰
    seleWeekCtrlText = "選擇星期";
    seleMealCtrlText = "商品類型";
    for(let i=0;i<3;i++){addMeal();}
   
     //🟡下拉選單控制(page1的)
    $('.page1 .selectcontrol').click(plsdown);
    //🟡下拉選單全選
    //🟡項目全選，[全選]應自動被選取；反之，選項未全選，[全選]應自動被取消
    $('.selectAll').checked = false;        //載入初始值would be false
    $(':checkbox').click(function(){
        checTextHandler(this)
        if($(this).prop('class') == 'selectAll'){
            letSelectAll(this);
        }else if($(this).prop('class') != 'selectAll'){
            countSelect(this);
        }
    });
    

    //🟡第一步串接頭像
    $('#myHead').change(function(e){
        let headFile = e.target.files[0];           //取得file檔案
        let reader = new FileReader();              //建立一個
        reader.onload = function(){                //file內容讀取完時
            $('.showMyHead').attr('src',reader.result);
        }
        reader.readAsDataURL(headFile);             //利用reader物件讀取file物件
        $('.putheadhere label').css('background','transparent');//讓BGC透明
        $('.putheadhere label span').css('display','none')//讓'上傳'消失
    })

    //🟡上一頁下一頁按鈕
    const totalPage = $('.page').length+1;
    const prevBtn = $('#prevBtn');
    const nextBtn = $('#nextBtn');
    const mainElm = $('#createVendor');
    let currentPage = parseInt(mainElm.attr('data-page'));
    prevBtn.attr('disabled',true);
    const checkPage = function (){
        currentPage = parseInt($('#createVendor').attr('data-page'))
        prevBtn.attr('disabled',false);       //初始化
        if(currentPage == 1 || currentPage == 4){
            prevBtn.attr('disabled',true);
            nextBtn.html('下一步');}
        else if(currentPage === totalPage){
            nextBtn.html('完成');}    
        else{
            prevBtn.attr('disabled',false);
            nextBtn.html('下一步');           //初始化
            nextBtn.prop("type","button");      //初始化
        }
    }
    nextBtn.click(()=>{
        if(currentPage < totalPage ){
            mainElm.attr('data-page',currentPage + 1);
            checkPage();
        }
        else if(currentPage == totalPage){
            checkPage();
            nextBtn.prop("type", "submit");
            nextBtn.click($('form').submit());
        }
    })
    prevBtn.click(()=>{
        mainElm.attr('data-page',currentPage - 1);
        checkPage();
    })

}//doFirst

//🟡第二步新增菜色
    //🔰測試的記號，我ID要累加「mealimg$」
function addMeal(){
    let myMenu = document.querySelector('.page2 .pageItem');
    let addBtn = document.querySelector('.addBtn');
    meal= document.querySelector('.meal');
    let newMeal = meal.cloneNode(true);
    newMeal.style.display = "";
    myMenu.insertBefore(newMeal,addBtn);
    newMeal.querySelectorAll("button")[0].onclick = removeMeal;
    newMeal.querySelectorAll(".selectcontrol")[0].onclick = plsdown;
    mealCount+=1;//🔰
    $('.addBtn').prev('.meal').find(':file').attr('id',`mealimg${mealCount}`);//🔰
    $('.addBtn').prev('.meal').find('.putmealhere label').attr('for',`mealimg${mealCount}`);//🔰
    //🟡第二步選取框的ID
    let myMealClass = newMeal.querySelectorAll("input[type='radio']")
    for(let i=0;i<myMealClass.length;i++){
        let mealValue = myMealClass[i].getAttribute('value')
        //console.log(mealValue)
        // $('.addBtn').prev('.meal').find(':radio').eq(i).attr('id',`mealimg${mealValue}${mealCount}${i}`);
        newMeal.querySelectorAll("input[type='radio']")[i].setAttribute('id',`mealimg${mealValue}${mealCount}${i}`)//🔰
        // $('.addBtn').prev('.meal').find('.selectnav label').attr('for',`mealimg${mealValue}${mealCount}${i}`);
        newMeal.querySelectorAll(".selectnav>label")[i].setAttribute('for',`mealimg${mealValue}${mealCount}${i}`);//🔰
        newMeal.querySelectorAll(".selectnav input")[i].setAttribute('name',`meal${mealCount}`);
        // console.log(newMeal.querySelectorAll(".selectnav input")[i].getAttribute('name'))
    }
    //🟡第二步串接頭像
    for(let i=0;i<mealCount;i++){
        $(`#mealimg${i+1}`).change(function(e){
            let headFile = e.target.files[0];           //取得file檔案
            let reader = new FileReader();              //建立一個
            reader.onload = function(){                //file內容讀取完時
                $(`#mealimg${i+1}`).siblings('.showMyMeal').attr('src',reader.result);
            }
            reader.readAsDataURL(headFile);             //利用reader物件讀取file物件
            $(`#mealimg${i+1}`).next('.putmealhere label').css('background','transparent');//讓BGC透明
            $(`#mealimg${i+1}`).next('.putmealhere label').find('span').css('display','none')//讓'上傳'消失
        })
    }
    //🟡下拉選單radio
    $(':radio').click(function(){
        radTextHandler(this);
    })
}
//🟡打開下拉選單
function  plsdown(){
    $(this).siblings('.selectnav').slideToggle();
}
//🟡【checkbox】下拉選單，全選
function letSelectAll(e){
    let chnText = $(e).closest('.selectwrap').find('span')[0];
    if(e.checked) {
        $(e).closest('.selectnav').find(':checkbox').each(function(){
            this.checked = true;
            checTextHandler(e)
        });
    } else {
        $(e).closest('.selectnav').find(':checkbox').each(function(){
            this.checked = false;  
            chnText.firstChild.nodeValue=seleWeekCtrlText;//初始化字樣「選擇星期」
        });
    }
}
//🟡【checkbox】下拉選單，計數選取項目數(點擊任一子項checkbox觸發)
function countSelect(g){
    let totalSelNum = $(g).closest('.selectnav').find(':checkbox').not('.selectAll').length;
    let currentSelNum = $(g).closest('.selectnav').find(':checkbox:checked').not('.selectAll').length;
    let myFSA = $(g).closest('.selectnav').find('.selectAll')[0];
    let chnText = $(g).closest('.selectwrap').find('span')[0];
    if(currentSelNum == totalSelNum){
        myFSA.checked = true;
        letSelectAll(myFSA);
        checTextHandler(g);}
    else if(currentSelNum==0){
        chnText.nodeValue=seleWeekCtrlText;}
    else if(currentSelNum < totalSelNum){
        myFSA.checked = false;}
    
}
//🟡【checkbox】下拉選單，顯示選取文字，若未選取應回覆預設字樣(點擊任一子項checkbox觸發)
function checTextHandler(e){
    let weekarr = [];
    let parentElm = e.parentNode.parentNode;
    let totalNum = $(e).closest('.selectnav').find(':checkbox').length;
    for(let i=1;i<totalNum;i++){            //【非】全選時的狀況。
        let checkElm = parentElm.childNodes[(2*i+3)-2].firstChild;
        if(checkElm.checked){               //有打勾就加進array
            weekarr.splice(i,0,checkElm.dataset.text);
        }else if(checkElm.checked == false){//沒打勾就從array刪掉
            weekarr.splice(i,1);
        }
    }
    // let chnText = e.parentNode.parentNode.previousSibling.previousSibling.firstChild.firstChild;
    let chnText = $(e).closest('.selectwrap').find('span')[0];
    chnText.firstChild.nodeValue=weekarr;
}
//🟡【radio】下拉選單，顯示選取文字，若未選取應回復預設文字(點擊任一子項radio觸發)
function radTextHandler(e){
    let myMealText = e.dataset.text;
    let chnText = $(e).closest('.selectwrap').find('span')[0];
    chnText.firstChild.nodeValue=myMealText;

}
//🟡第二步刪除鈕
function removeMeal(e){
    let myMenu = document.querySelector('.page2 .pageItem');
    myMenu.removeChild(e.target.parentNode);
};


  window.addEventListener('load',doFirst);
  