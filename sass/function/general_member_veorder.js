$(document).ready(function(){
    $(document).on('click', '.veorder .veicon', function(){
        if ($(this).parents('.veorder').hasClass('scale')) {
            $(this).parents('.veorder').removeClass('scale').find('.veorderTitle').slideUp();
          } else {
            $(this).parents('.veorder').addClass('scale').find('.veorderTitle').slideDown();
          }
    })
})

//訂單tab
$(document).on("click",".btn-rect_pk2",function(){
  $("#order1").show();
  $("#order2").show();
  $("#order3").show();
 
})
$(document).on("click",".btn-rect_gr2",function(){
  $("#order1").hide();
  $("#order2").hide();
  $("#order3").show();
})