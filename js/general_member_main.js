//========================================tab頁籤功能========================================//
function openClass(evt, className) {
    var i, x, tablinks;
    x = document.getElementsByClassName("class");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.querySelectorAll(".tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(className).style.display = "grid";
    evt.currentTarget.classList.add("active");
}
var mybtn = document.getElementsByClassName("testbtn")[0];
mybtn.click();

//========================================動態消息勾選刪除功能========================================//
var input = document.querySelectorAll('.delete');
var len = input.length;
var btn = document.getElementById('del');
var allbtn = document.getElementById('check_all');
    allbtn.onclick = function(){
        input.forEach((e)=>{
            if(e.checked ==true){
                e.checked = false
            }
            else{
                e.checked = true
            }
        })
    }
    btn.onclick = function(){
        var result = confirm('你確定嗎?');
        if(result){
            input.forEach((e,index)=>{
                if(e.checked){
                    e.parentNode.remove();
                }
            });
            
        }
    }
//========================================我的帳戶頁籤切換功能========================================//
$(function(){
    $("button.utnmtab").on("click", function(e){
        e.preventDefault();
        $(this).closest("div").find("button.utnmtab").removeClass("active");
        $(this).addClass("active");

        $("div.utnmtab").removeClass("active");
        $("div.utnmtab." + $(this).attr("data-target")).addClass("active");
    });
});
//========================================一般會員訂單收合功能========================================//
$(document).ready(function(){
    //收和功能
    $(document).on('click', '.order .icon', function(){
        if ($(this).parents('.order').hasClass('scale')) {
            $(this).parents('.order').removeClass('scale').find('.orderTitle').slideUp();
        } else {
            $(this).parents('.order').addClass('scale').find('.orderTitle').slideDown();
        }
    })
    
    $(document).on("click",".btn-cir_gr2",function(){
        $('#order4').remove();
    })
    
    //訂單tab
    $(document).on("click",".btn-rect_pk2",function(){
        $("#order1").show();
        $("#order2").show();
        $("#order3").show();
        $("#order4").show();
    })
    $(document).on("click",".btn-rect_gr2",function(){
        $("#order1").hide();
        $("#order2").hide();
        $("#order3").hide();
        $("#order4").show();
    })
})