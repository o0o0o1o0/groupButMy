let map;          
const image ="./vendor.png"; 
function initMap() {
    const ChungliNightMarket = {lat: 24.96015215165077, lng: 121.2154904542284,};
    const vendor_position = {lat: 24.961860, lng: 121.216674,}
    

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        // center: ChungliNightMarket,
        center:vendor_position,
        mapTypeId: "roadmap",                
    }); 
      // 關閉原本地圖上的預設店家及其他指標
        const styles = {
            hide: [
                {
                featureType: "poi.business",
                stylers: [{ visibility: "off" }]
                },
                {
                featureType: "transit",
                elementType: "labels.icon",
                stylers: [{ visibility: "off" }]
                }
            ],
        }
        map.setOptions({
        styles: styles["hide"]
       });
  var marker = new google.maps.Marker({
  map:map,
  draggable: false,
  animation: google.maps.Animation.DROP,
  position: vendor_position,
  });
  marker.setAnimation(google.maps.Animation.BOUNCE);
};


//漢堡jQuery
let winH = $(window).height();
let winW = $(window).width();
//每次resize 就把漢堡下拉選單關掉
$(window).resize(function(){
  winW = $(window).width();  //把resize 的值帶進去
  if(winW>1200){
    $('.navmenu .wrap div').eq(2).find('ul').css('height','70px')
    $('.navmenu .wrap div').eq(2).find('ul').css({'display':'flex'});
  }else if(winW<=1200){
    $('.navmenu .wrap div').eq(2).find('ul').css('height','0px');
    $('.navmenu .wrap div').eq(2).find('ul').slideUp();
    $('.hamburger').removeClass('is-active')
  }
})

//導覽列加陰影
$(document).scroll(function(){
  let wt = parseInt($(window).scrollTop())
  if( wt > 80){                         //scroll > 80
    $('.navmenu').addClass('letmeout')     //陰影
  }else{                               //scroll <= 80 
    $('.navmenu').removeClass('letmeout') //去除陰影
  }
})

// 導覽列漢堡、下拉選單切換
$(".hamburger").click(function(){
  $(this).toggleClass("is-active");
  if($('.hamburger').hasClass('is-active')){
    $('.navmenu .wrap div').eq(2).find('ul').css('height','calc(100vh - 70px)')
    $('.navmenu .wrap div').eq(2).find('ul').slideDown();
  }else{
    $('.navmenu .wrap div').eq(2).find('ul').css('height','')
    $('.navmenu .wrap div').eq(2).find('ul').slideUp();
  }
});