window.addEventListener('load',function(){

    // e.stoppropagation()


// ---當評價被檢舉時,抓取該評價的編號==>寫入檢舉表單中(打包送後台用)--------------------------------------------//
   
   var number = document.getElementsByClassName("judge_hint");
    
    for(let i=0;i<number.length;i++){ 
       number[i].addEventListener("click",function(e){           
           eva_no = e.target.parentNode.parentNode.parentNode.children[0].firstChild.nodeValue;
           document.getElementById("sto_eva_no").value = eva_no;            
       });
    }



// 評論按讚click ==> like icon變色 + 按讚數+1
    var like = document.getElementsByClassName("good-btn");
     
    
    for(let j=0;j<like.length;j++){ 
            let likeClick_count = 0;

           like[j].addEventListener("click",function(e){     
               
            likeClick_count += 1;
            let oldlove = e.target.parentNode.nextElementSibling;
                
            
            if(likeClick_count % 2 == 1){
                newlove = parseInt(oldlove.firstChild.nodeValue)+1;
                oldlove.innerText = newlove; 

                e.target.style.fontWeight="900";
                e.target.style.color="orange";     

            }else{

                backlove = parseInt(oldlove.firstChild.nodeValue)-1;
                oldlove.innerText = backlove;

                e.target.style.fontWeight="normal";
                e.target.style.color="grey";  
                
            }
                 
                                   
        });
             
     }







// 加入餐點至側邊購物車

  var additems = document.getElementsByClassName("fa-plus-square");
  var shop_name = document.getElementById("shop_name").firstChild.nodeValue;
  
  var total = 0;  // 購物車內預設結帳金額為0

      for(let i=0;i<additems.length;i++){
           let count = 0;  // 控制單一品項是否重複
        
           additems[i].addEventListener("click",function(e){        
        
                   
                    item_name = e.target.parentNode.parentNode.children[0].children[0].firstChild.nodeValue; //抓取商品名稱
                    item_price = e.target.parentNode.parentNode.children[0].children[1].firstElementChild.firstChild.nodeValue; //抓取商品價錢
                    list_frame = document.getElementsByClassName("shopping_list_frame")[0];
                    shop_items = document.getElementsByClassName("shopping_items");                    
                   
                             
                    plus = document.getElementsByClassName("fa-plus-circle");
                    minus = document.getElementsByClassName("minus");
                    cancel_one = document.getElementsByClassName("fa-times-circle"); 
                    
                    
                  

                     // 每次加入購物車的商品,自動加入數量=1 x 單價,寫入購物車結帳金額中

                    if(shop_items.length < 5 && count == 0){
                        total = total + parseInt(item_price);
                        document.getElementById("total_price_number").innerText = total; 
                     };   
                    

                    
                   
                        
                // 偵測當購物車全空 & 單一品項尚未被點擊 ==> 加入店名+該單品細項    
                    if(list_frame.children.length == 0 && count == 0){  

                        // 先偵測當開始加入品項時,側邊購物車自動滑入(提示使用者購物)
                        document.getElementsByClassName("cart_frame")[0].classList.add("slide");

                        document.getElementsByClassName("shopping_list_frame")[0].innerHTML = `
                                <div class="shopping_list">
                                <input type="hidden" name="vendor_id"> 
                                <input type="hidden" name="" value="">
                                <span class="shop_name">${shop_name}</span>
                                <div class="cancel_shop">
                                    <button type="button" class="cancel_shop_btn">刪除</button>
                                </div>
                                <div class="shopping_items">
                                <div class="shopping"> 
                                    <div class="item_name">${item_name}</div>
                                    <div class="item_price">NT$ <span>${item_price}</span></div>
                                </div>
                                <div class="count_quantity">
                                        <div class="minus">
                                            <i class="fas fa-minus-circle"></i>
                                        </div>
                                        <input type="hidden" class="buy_quantity" value="1" min="1">
                                        <span class="buy_quantity">1</span>
                                        <div class="plus">
                                            <i class="fas fa-plus-circle"></i>
                                        </div>
                                </div>
                                <div class="cancel_one_list">
                                    <i class="far fa-times-circle"></i> 
                                </div>
                                </div>
                                </div>`;      

                        

                        

                        // 建立第一個項目的數量加減功能
                        plus[0].addEventListener("click",function(e){                       
                            
                            var current_quantity = parseInt(e.target.parentNode.previousElementSibling.firstChild.nodeValue);
                            var new_quantity = current_quantity + 1;
                            e.target.parentNode.previousElementSibling.firstChild.nodeValue = new_quantity;

                            var thisItemPrice = e.target.parentNode.parentNode.parentNode.children[0].children[1].firstElementChild.firstChild.nodeValue;

                            total = total + parseInt(thisItemPrice);
                            document.getElementById("total_price_number").innerText = total;

                            });

                        minus[0].addEventListener("click",function(e){                            
                            
                            var current_quantity = parseInt(e.target.parentNode.nextElementSibling.nextElementSibling.firstChild.nodeValue);
                            var new_quantity = current_quantity - 1;
                            var thisItemPrice = e.target.parentNode.parentNode.parentNode.children[0].children[1].firstElementChild.firstChild.nodeValue;

                            if(new_quantity <= 0){
                                e.target.parentNode.nextElementSibling.nextElementSibling.firstChild.nodeValue = 1;

                                alert("訂購品項數量不能低於1個喔! 如要取消品項，請點擊後方的Ｘ圖樣 ");
                            }else{
                                e.target.parentNode.nextElementSibling.nextElementSibling.firstChild.nodeValue = new_quantity;
                                total = total - parseInt(thisItemPrice);
                                document.getElementById("total_price_number").innerText = total;
                            }

                        });                   
                        
                         

                // 當購物車內品項總數<5 & 單一品項尚未被點擊 ==> 加入該單品細項,並append在第一個細項之後

                    }else if(shop_items.length < 5 && count == 0){                  

                        new_order = document.createElement("div");
                        new_order.setAttribute('class', 'shopping_items');
                        new_order.innerHTML =`                
                                <div class="shopping"> 
                                    <div class="item_name">${item_name}</div>
                                    <div class="item_price">NT$ <span>${item_price}</span></div>
                                </div>
                                <div class="count_quantity">
                                        <div class="minus">
                                            <i class="fas fa-minus-circle"></i>
                                        </div>
                                        <input type="hidden" class="buy_quantity" value="1" min="1">
                                        <span class="buy_quantity">1</span>
                                        <div class="plus">
                                            <i class="fas fa-plus-circle"></i>
                                        </div>
                                </div>
                                <div class="cancel_one_list">
                                    <i class="far fa-times-circle"></i> 
                                </div>`;

                        document.getElementsByClassName("shopping_list")[0].appendChild(new_order);                      

                        



                        // 建立各項目的數量加減功能
                            plus[shop_items.length-1].addEventListener("click",function(e){                       
                                
                                var current_quantity = parseInt(e.target.parentNode.previousElementSibling.firstChild.nodeValue);
                                var new_quantity = current_quantity + 1;
                                e.target.parentNode.previousElementSibling.firstChild.nodeValue = new_quantity;

                                var thisItemPrice = e.target.parentNode.parentNode.parentNode.children[0].children[1].firstElementChild.firstChild.nodeValue;

                                total = total + parseInt(thisItemPrice);
                                document.getElementById("total_price_number").innerText = total;
                            });



                            minus[shop_items.length-1].addEventListener("click",function(e){
                                
                                var current_quantity = parseInt(e.target.parentNode.nextElementSibling.nextElementSibling.firstChild.nodeValue);
                                var new_quantity = current_quantity - 1;
                                var thisItemPrice = e.target.parentNode.parentNode.parentNode.children[0].children[1].firstElementChild.firstChild.nodeValue;

                                if(new_quantity <= 0){
                                    e.target.parentNode.nextElementSibling.nextElementSibling.firstChild.nodeValue = 1;

                                    alert("訂購品項數量不能低於1個喔! 如要取消品項，請點擊後方的Ｘ圖樣 ");
                                }else{
                                    e.target.parentNode.nextElementSibling.nextElementSibling.firstChild.nodeValue = new_quantity;
                                    total = total - parseInt(thisItemPrice);
                                    document.getElementById("total_price_number").innerText = total;
                                }

                                
                            });                  
                            
                        

                        

                // 當購物車內品項總數<5,但單一品項已被點擊過 ==> alert已選取過了

                    }else if(shop_items.length < 5 && count != 0 ){    
                        alert("該品項已經加入購物車了喔!");

                        

                        
                // 當購物車內品項總數>5  ==> alert是否需要大量訂購
                    }else{
                        alert("您需要大量訂購嗎? 請先來電與店家確認目前狀態，以免等待時間過長。");


                        
                    };
                    
                    count+=1;

        

                
                // 點擊單一品項後的叉叉,刪除該單一品項==>如果刪除後無任何單品,連同店名一同刪除 
                //(需包在加入購物車的addEventListener內,才能每次品項加入時,重新偵測到底有幾項,找到對應有幾個刪除鍵)                
                    

                    cancel_one[shop_items.length].addEventListener("click",function(event){  

                        
                        
                        if(document.getElementsByClassName("shopping_items").length > 1){          
                            event.target.parentNode.parentNode.remove();

                            var current_quantity2 = parseInt(event.target.parentNode.previousElementSibling.children[2].firstChild.nodeValue);
                            var thisItemPrice = event.target.parentNode.parentNode.children[0].children[1].firstElementChild.firstChild.nodeValue;
                            total = total - current_quantity2*parseInt(thisItemPrice);
                            document.getElementById("total_price_number").innerText = total;

                            count = 0;// 刪除後,偵測單一品項是否被點擊的計數值歸零
                        
                        }else{
                            event.target.parentNode.parentNode.parentNode.remove();                    
                            total = 0;
                            document.getElementById("total_price_number").innerText = total;

                            count = 0;// 刪除後,偵測單一品項是否被點擊的計數值歸零
                        };

                        
                    });

                
             


              // 點擊店名旁的刪除按鈕 ==>直接刪除該店家的所有訂單內容
                    var cancel_all = document.getElementsByClassName("cancel_shop_btn")[0];
                   
                        cancel_all.addEventListener("click",function(event){
                            
                            event.target.parentNode.parentNode.remove();

                            count = 0;//刪除後,偵測單一品項是否被點擊的計數值歸零
                            total = 0;//刪除後,購物車結帳金額歸零

                            document.getElementById("total_price_number").innerText = total;
                        });  
                   

             });
        
        }; 
      
      

});








$(document).ready(function(){


    // 看地圖 燈箱
    
    //--點擊"看地圖"按紐==>開啟"Google Map"燈箱
    $('#see_map').click(function(){
        $('.map_lightBox').fadeIn();
    });
    
    //--開啟"Google Map"燈箱後==>點擊"關閉地圖",Google Map燈箱關閉
    $('#close_map_btn').click(function(){
        $('.map_lightBox').fadeOut();
    });
    
    
    
    
    
    
    
    
    
    // 寫評價 燈箱 //
    
    //--點擊"我要評價"按紐==>開啟"撰寫您的評價"燈箱
    $('#write_comment_btn').click(function(){
        $('.write_comment_lightbox').fadeIn();
    
    });
    
    
    
    // --開啟"撰寫您的評價"燈箱後==>撰寫評價星星數:click ==> input寫入評分數值---------//
           $('#star01').click(function(){            
                $('#star02').css({color:'black',fontWeight:'normal',transition:'ease-out 0.3s',})
                $('#star03').css({color:'black',fontWeight:'normal',transition:'ease-out 0.3s',})
                $('#star04').css({color:'black',fontWeight:'normal',transition:'ease-out 0.3s',})
                $('#star05').css({color:'black',fontWeight:'normal',transition:'ease-out 0.3s',})
                $('#star01').css({color:'#FACC39',fontWeight:900});
                $('#comment_star').attr('value','1');
             });
           
           $('#star02').click(function(){        
               $('#star03').css({color:'black',fontWeight:'normal',transition:'ease-out 0.3s',})
               $('#star04').css({color:'black',fontWeight:'normal',transition:'ease-out 0.3s',})
               $('#star05').css({color:'black',fontWeight:'normal',transition:'ease-out 0.3s',})
               $('#star01').css({color:'#FACC39',fontWeight:900})
               $('#star02').css({color:'#FACC39',fontWeight:900})
               $('#comment_star').attr('value','2');
           });
    
           $('#star03').click(function(){       
                $('#star04').css({color:'black',fontWeight:'normal',transition:'ease-out 0.3s',})
                $('#star05').css({color:'black',fontWeight:'normal',transition:'ease-out 0.3s',})
                $('#star01').css({color:'#FACC39',fontWeight:900})
                $('#star02').css({color:'#FACC39',fontWeight:900})
                $('#star03').css({color:'#FACC39',fontWeight:900})
                $('#comment_star').attr('value','3');
             });
    
           $('#star04').click(function(){      
                $('#star05').css({color:'black',fontWeight:'normal',transition:'ease-out 0.3s',})
                $('#star01').css({color:'#FACC39',fontWeight:900})
                $('#star02').css({color:'#FACC39',fontWeight:900})
                $('#star03').css({color:'#FACC39',fontWeight:900})
                $('#star04').css({color:'#FACC39',fontWeight:900})
                $('#comment_star').attr('value','4');
           });
    
           $('#star05').click(function(){
                $('#star01').css({color:'#FACC39',fontWeight:900})
                $('#star02').css({color:'#FACC39',fontWeight:900})
                $('#star03').css({color:'#FACC39',fontWeight:900})
                $('#star04').css({color:'#FACC39',fontWeight:900})
                $('#star05').css({color:'#FACC39',fontWeight:900})
                $('#comment_star').attr('value','5');
             });
    
    // --開啟"撰寫您的評價"燈箱後==>檢查當送出評價時,評分是否有選取-------------------------
    
        $('#comment_submit').click(function(){
                if($('#comment_star').val() == ""){
                    alert("請選擇您的評分");
                    return false;
                }else if($('#textarea').replace(/(^s*)|(s*$)/g,"").length == 0){
                    alert("請撰寫您的評論");
                    return false;
                }else{
                    return true;
                }
        });
    
    //--開啟"撰寫您的評價"燈箱後==>點擊右上角叉叉,關閉燈箱
    $('#canel_comment').click(function(){
        $('.write_comment_lightbox').fadeOut();
    })
    
     
    
    
    
    
    
    
        
    
    // 檢舉評論 燈箱//
    
    
    //------ 點擊評價旁三個點點==>顯示"檢舉評論"按鈕
    $('.fa-ellipsis-v').click(function(){       
        $(this).next().toggleClass("showHint");
      
       });
    
    
    //----點擊"檢舉評論按鈕"==>開啟檢舉評論燈箱+原"檢舉評論"按鈕隱藏
    $('.judge_hint').click(function(){
      $('#judge_comment_lightbox').fadeIn();
      $(this).toggleClass("showHint");
    })
    
    
    //----開啟檢舉評論燈箱後 ==> 偵測使用者點擊哪個檢舉項目,寫入隱藏的input(準備打包送後台用)
         $('#judge_selection_01').click(function(){
            $(this).css({backgroundColor:'#384F95'});
            $('#judge_selection_02').css({backgroundColor:'#bbc3c6'});
            $('#judge_selection_03').css({backgroundColor:'#bbc3c6'});
            $('#judge_comment_code').attr('value','0');
            
         });
    
         $('#judge_selection_02').click(function(){
            $(this).css({backgroundColor:'#384F95'});
            $('#judge_selection_01').css({backgroundColor:'#bbc3c6'});
            $('#judge_selection_03').css({backgroundColor:'#bbc3c6'});
            $('#judge_comment_code').attr('value','1');
            
         });
    
         $('#judge_selection_03').click(function(){
            $(this).css({backgroundColor:'#384F95'});
            $('#judge_selection_01').css({backgroundColor:'#bbc3c6'});
            $('#judge_selection_02').css({backgroundColor:'#bbc3c6'});
            $('#judge_comment_code').attr('value','2');
            
         });
    
    
    
    // ----開啟檢舉評論燈箱後 ==>檢查當送出檢舉時,檢舉選項是否有選取-------------------------
    
    $('#judge_submit').click(function(){
        if($('#judge_comment_code').val() == ""){
            alert("請選擇檢舉事由");
            return false;
        }else{
            return true;
        }
    });
    
    // ----開啟檢舉評論燈箱後 ==> 點擊"取消",關閉檢舉評論燈箱+選取選項復原至初始未選取狀態
    $('.return-btn').click(function(){
         $('#judge_comment_lightbox').fadeOut();
         $('#judge_selection_01').css({backgroundColor:'#bbc3c6'});
         $('#judge_selection_02').css({backgroundColor:'#bbc3c6'});
         $('#judge_selection_03').css({backgroundColor:'#bbc3c6'});
    
    })
    
    
    
    
    
    
    
    
    
    //收藏攤商:狀態偵測
    
    $('#shop_collect_submit').click(function(){
        if($('#shop_collect_state').val()== "" || $('#shop_collect_state').val()== 1){
           $('#shop_collect_state').attr('value','0');
           $('#shop_love').css({color:'#F42A00',fontWeight:900});
    
        }else{
           $('#shop_collect_state').attr('value','1');
           $('#shop_love').css({color:'black',fontWeight:'normal'});
        }
    
    
    });
    
    
    
    
    
    //--Go top按鈕
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if (scrollVal > 800) {
            $('#go_top').css({opacity:'1',});
        }else{
            $('#go_top').css({opacity:'0',});
        }
    });
    
    $('#go_top').click(function () {
        $('html,body').animate({ scrollTop: 0 }, '5000');  
        
    });
    
    
    
    // --側邊購物車的滑入滑出
    
    $('.slide_cart').click(function(){
        $('.cart_frame').toggleClass("slide");
    })
    
   
    
});
    

