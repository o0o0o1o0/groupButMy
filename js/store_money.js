function doFirst(){
    //整個彈跳視窗的顯示
    $('.storeMoneyOpenBtn').click(function(){
        $('form#storeMoneyForm').css('display','block');
        $('.container').css('background','rgba(0,0,0,.5)')
        // $('form#storeMoneyForm .pagewrap').css('max-width','500px');
    })
    //關閉按鈕
    $('.closeBtn').click(function(){
        $('form#storeMoneyForm').css('display','none');
        $('.container').css('background','')
        currentPage=1;
        $('.pagewrap .page').css('transform','');
        nextBtn.text("儲值夜市幣");
        // $('form#storeMoneyForm .pagewrap').css('max-width','0');
    })

    //顯示轉換夜市幣
    $('#ntcoin').keyup(function(){
        let ntdollor =  parseInt($('#ntcoin').val());
        $('.ntcoin').text('$'+ntdollor.toLocaleString('en-US'));
        if(ntdollor<0 || ntdollor==0){
            $('.yescoin1').text("");
            $('.yescoin').text("");
        }else if(ntdollor<100){
            $('.yescoin1').text(ntdollor.toLocaleString('en-US'));
            $('.yescoin').text('$'+ntdollor.toLocaleString('en-US'));
        }else if(ntdollor>=100){
            ntdollor+=20;
            $('.yescoin1').text(ntdollor.toLocaleString('en-US'));
            $('.yescoin').text('$'+ntdollor.toLocaleString('en-US'));
        }
    })

    //確認儲值(到下一頁)
    const mainElm = $('form');
    const totalPage = $('.page').length;
    let currentPage = parseInt(mainElm.attr('data-page'));
    let allElm = $('.page').eq(currentPage-1).find('input')
    const nextBtn =  $('#yesNextBtn')
    currentPage = 1;
    function checkPage(){
        // currentPage = parseInt(mainElm.attr('data-page'));
        if(currentPage==totalPage){
            nextBtn.text("確認儲值");
        }else if(currentPage==1){
            nextBtn.text("儲值夜市幣");
        }
    }
    function checkNull(){
        let nullElm = 0;
        for(let i=0;i<allElm.length;i++){               //迴圈計算，未填完欄位有多少
            allElm = $('.page').eq(currentPage-1).find('input')
            valElm = $(allElm).eq(i).val();
            if(valElm == ""){nullElm+=1};
        }

        if(nullElm==0 && currentPage<totalPage){        //未在最後一頁前，填完表格
            currentPage+=1;
            $('.pagewrap .page').css('transform','translateX(-100%)');
            // mainElm.attr('data-page',currentPage);       //這是版本一的非燈箱下一頁
        }
        else if(nullElm==0 && currentPage==totalPage){  //在最後一頁，填完表格
            $('.popbox').css('display','flex');             //🔰這是演示彈跳視窗，正常情況下，此頁面不會有彈跳視窗。
            $('form').css('display','none');                //🔰這是演示彈跳視窗，正常情況下，此頁面不會有彈跳視窗。
            // nextBtn.prop("type", "submit");                 //button改為submit
            // nextBtn.click($('form').submit())              //表單submit送出資料
            // $('.container').css('background','')           //🔰如果你不要演示彈跳視窗，這個要加上去
        }
        else if(nullElm<=allElm.length){                //未填完表格
            alert('請填寫欄位。');
        }
        console.log(`總共${allElm.length}個元素,有${nullElm}個空白`)
    }
    nextBtn.click(()=>{                                 //觸發上方checkNull事件
        console.log('現在在第'+currentPage+'頁')
        if(currentPage < totalPage ){
            checkNull();
            checkPage()
        }
        else if(currentPage == totalPage){
            checkNull();
        }
    })

    //🔰完成儲值後的彈跳視窗(演示用)
    $("#okIKnow").click(function(){
        $('.popbox').css('display','none');
        $('.container').css('background','');
        currentPage=1;
        $('.pagewrap .page').css('transform','');
        nextBtn.text("儲值夜市幣");
    })
}//doFirst
window.addEventListener('load',doFirst);