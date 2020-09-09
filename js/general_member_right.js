//========================================動態消息勾選刪除功能1========================================//
var aaa = new Vue({
    el: "#mnDiv",
    data:{
        aList: [
            {
                id: '123',
                user: "下港明鵬臭豆腐",
                comment: "感謝遊客001給我們的評價，下次我們也會繼續努力",
                completed: false,
            },
            // {
            //     user: "下港明鵬臭豆腐2",
            //     comment: "感謝遊客2給我們的評價，下次我們也會繼續努力",
            // },
            // {
            //     user: "下港明鵬臭豆腐3",
            //     comment: "感謝遊客3給我們的評價，下次我們也會繼續努力",
            // },
            // {
            //     user: "下港明鵬臭豆腐4",
            //     comment: "感謝遊客4給我們的評價，下次我們也會繼續努力",
            // },
            // {
            //     user: "下港明鵬臭豆腐5",
            //     comment: "感謝遊客5給我們的評價，下次我們也會繼續努力",
            // },
        ]
    },
    methods: {
        deleter(index){
            this.aList.splice(index,1)
        },
    } 
    
})
//========================================動態消息勾選刪除功能========================================//
let input = document.querySelectorAll('.chk_read');
let btn = document.getElementById('del');
// var btn_sel = document.querySelector('.del_button');
let allbtn = document.getElementById('check_all');
allbtn.onclick = () => { //全選
    input.forEach((e)=>{
        if(e.checked == true){
            e.checked = false
        }
        else{
            e.checked = true
        }
    })
}
btn.onclick = () => { //勾選刪除
    let result = confirm('你不要後悔就好');
    if(result){
        input.forEach((e,index) => {
            if(e.checked){
                e.parentNode.remove();
            }
        });
    }
}
// btn_sel.onclick = () => {
//     input.forEach((e,index) => {
//         e.parentNode.remove();
//     })
// }
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