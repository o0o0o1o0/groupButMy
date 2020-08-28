    let map; 
    // let map2;      
    let markers=[]; 
    // let markers2=[]; 
    let cart_items=[];  
              
        //----------------以button的class去取得所有新增/刪除地圖資訊------------------------------//
        //----------------只要button的class命名正確,不受搜尋店家數量影響------------------------------//

        function initMap() {
            const ChungliNightMarket = {lat: 24.96015215165077, lng: 121.2154904542284,};
                     

            map = new google.maps.Map(document.getElementById("map"), {
                zoom: 17,
                center: ChungliNightMarket,
                
                mapTypeId: "roadmap",                
            }); 


            // map2 = new google.maps.Map(document.getElementById("map2"), {
            //     zoom: 17,
            //     center: ChungliNightMarket,
                
            //     mapTypeId: "roadmap",                
            // });
               

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

            //    map2.setOptions({
            //     styles: styles["hide"]
            //    });
              
            
            let item = document.getElementsByClassName('card_plan-btn');           
               
        
            
            for(let i=0;i<item.length;i++){ 
                let count = 0;





                // add_cart(item) {
                //     if (this.cart_items.length == 0) {
                //         this.cart_items.push(item);
                //     } else {
                //         let check = true;
                //         for (i = 0; i < this.cart_items.length; i++) {
                //             if (this.cart_items[i].id == item.id) {
                //                 check = false;
                //             };
                //         }

                //         if (check) {
                //             this.cart_items.push(item);
                //         }
                //     }
                // },
                // remove_item(index) {
                //     this.cart_items.splice(index, 1);
                // }



                item[i].addEventListener('click',function(e){
                    

                        let   lat = e.target.parentNode.children[0];                      
                        let   lon = e.target.parentNode.children[1];

                        let  latitude = parseFloat(lat.firstChild.nodeValue);
                        let  longitude = parseFloat(lon.firstChild.nodeValue);
                        let  shopCartFrame = document.getElementsByClassName("shop_card_frame")[0];
                        
                        
                        
                        var marker = new google.maps.Marker({
                            // map:map,
                            draggable: false,
                            animation: google.maps.Animation.DROP,
                            position: {lat: latitude, lng: longitude,}, 
                            
                             });


                        var marker2 = new google.maps.Marker({
                            // map:map,
                            draggable: false,
                            animation: google.maps.Animation.DROP,
                            position: {lat: latitude, lng: longitude,}, 
                            
                            });

                         
                        
                        if(count == 0 && shopCartFrame.children.length < 5){

                            if(shopCartFrame.children.length == 0){
                                document.getElementsByClassName("slide_map")[0].classList.add("slide");
                            }

                            
                            
                            img_src = e.target.parentNode.parentNode.previousElementSibling.children[0].getAttribute("src");
                            shopName = e.target.parentNode.previousElementSibling.firstChild.nodeValue;
                            shopStar = e.target.previousElementSibling.children[1].children[0].firstChild.nodeValue;
                            shopComment = e.target.previousElementSibling.children[2].firstChild.nodeValue;

                            
                            marker.setMap(map); 
                            marker.setAnimation(google.maps.Animation.BOUNCE); 
                            

                            // marker2.setMap(map2); 
                            // marker2.setAnimation(google.maps.Animation.BOUNCE); 
                            
                            
                            var contentString =
                                `<div id="content">
                                    <div id="siteNotice"></div>
                                    <h1>${shopName}</h1>
                                    <div id="bodyContent">
                                    <p>攤商說明文字攤商說明文字</p>"
                                    </div>
                                 </div>`;

                                const infowindow = new google.maps.InfoWindow({
                                content: contentString
                                });


                                marker.addListener("click", () => {
                                infowindow.open(map, marker);
                                });
                        
                            markers.push(marker);


                            //     marker2.addListener("click", () => {
                            //     infowindow.open(map, marker2);
                            //     });
                        
                            // markers2.push(marker2);

                 


                            shopList = document.createElement("div");
                            shopList.setAttribute('class', 'shop_card_content');
                            shopList.innerHTML=`
                                    <div class="card_img_2">
                                    <img src="${img_src}">
                                    <div class="cancel_one_list">
                                    <i class="far fa-times-circle"></i>
                                    </div>
                                </div>
                                
                                <div class="card_content_2">          
                                    <div class="card_title">${shopName}</div>
                                    <div class="card_warp">                    
                                    <div class="card_score">
                                        <div class="score_star">
                                            <i class="fas fa-star"></i>
                                        </div>
                                        <div class="score_num"><span>${shopStar}</span>/5</div>
                                        <div class="score_comment">${shopComment}</div>
                                    </div>              
                                    </div>
                                </div>
                            `;

                            shopCartFrame.appendChild(shopList);



                            
                            cart_items_length = document.getElementsByClassName("shop_card_content").length ;     
                            var clear = document.getElementsByClassName('cancel_one_list');

                            clear[cart_items_length-1].addEventListener('click',function(e){
                                marker.setMap(null);  
                                e.target.parentNode.parentNode.parentNode.remove();
                                

                                count = 0;   
                              });

                        }else if(count != 0 && shopCartFrame.children.length < 5){ 
                            alert('該攤商已經加入規劃了喔!');                            
                           
                        }else{ 
                            alert('一次規劃最多只能加入5個攤商喔!');                            
                           
                        };      

                        count = count + 1;                  
                       
                       
                    });

                   
           
                    
         
                      
            };


        };












$(document).ready(function(){

//--側邊規劃菜單滑入滑出
    $("#slide_map_icon").click(function(){
      $(".slide_map").toggleClass("slide");

    });


});




