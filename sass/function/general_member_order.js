$(document).ready(function(){
  //收和功能
  $(document).on('click', '.order .icon', function(){
      if ($(this).parents('.order').hasClass('scale')) {
          $(this).parents('.order').removeClass('scale').find('.orderTitle').slideUp();
        } else {
          $(this).parents('.order').addClass('scale').find('.orderTitle').slideDown();
        }
  })
  //取消訂單
  // $(document).on("click",".btn-cir_gr2",function(){
  //   stopPropagation();
  //   $('#order1').css('display','none');
  // })
  // $(document).on("click",".btn-cir_gr2",function(){
  //   $('#order2').css('display','none');
  // })
  // $(document).on("click",".btn-cir_gr2",function(){
  //   $('#order3').css('display','none');
  // })
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
  
  //互濱tab
  // $(".tab").on("click", function(){
  //   // e.preventDefault();
  //   $(this).closest("ul").find(".tab").removeClass("-on");
  //   $(this).addClass("-on");
  //   $("div.tab").removeClass("-on");
  //   $("div.tab." + $(this).attr("data-target")).addClass("-on");
  // });
})




