// 分頁tab標籤
$(function(){
  $('a.tab').on('click', function(e){
    e.preventDefault(); 
    
    $(this).closest('ul').find('a.tab').removeClass("-on");

    $(this).addClass('-on');
    
    $('div.tab').removeClass('-on');
    
    $('div.tab.' + $(this).attr('data-target')).addClass('-on');
  });
});

//篩選
$(function(){
  $(".guide_contents > div").hide();
  $(".guide_contents > .fried").show();
  $(".filter_select").on("click", function(){
    $(this).addClass("part_filter").siblings().removeClass("part_filter");
    $(".guide_contents > div").hide();
    $("." + $(this).data("content")).fadeIn(500);
  });
})