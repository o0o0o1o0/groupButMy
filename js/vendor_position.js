        let map;          
        const image ="./vendor.png"; 
        

        function initMap() {
            const ChungliNightMarket = {lat: 24.96015215165077, lng: 121.2154904542284,};
            
            let latitude = parseFloat(document.getElementById("map").children[0].firstChild.nodeValue);
            let longitude = parseFloat(document.getElementById("map").children[1].firstChild.nodeValue);


            const vendor_position = {lat:latitude, lng: longitude};           
            

            map = new google.maps.Map(document.getElementById("map"), {
                zoom: 19,
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