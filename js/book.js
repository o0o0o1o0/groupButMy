//篩選
$(function(){
  $(".book_contents > div").hide();
  $(".book_contents > .fried").show();
  $(".filter_select").on("click", function(){
    $(this).addClass("part_filter").siblings().removeClass("part_filter");
    $(".book_contents > div").hide();
    $("." + $(this).data("content")).fadeIn(500);
  });
})