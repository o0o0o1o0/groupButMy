<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- css -->
  <!-- <link rel="stylesheet" href="./css/style.css"> -->
  <link rel="stylesheet" href="./css/book.css">
  <!-- Font Awesome -->
  <script src="https://kit.fontawesome.com/08520791a5.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="./path/css/fontawesome.min.css">
  <!-- Vue.js -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.11/vue.js"></script>
  <!-- Axios -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.20.0/axios.min.js"></script>
  <!-- JQ -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  
  <title>美食圖鑑</title>
</head>
<body id="book">
  <!-- 🟡複製下方即可 -->
  <div class="navmenu">
    <div class="wrap">
      <div class="logo">
        <div class="img">
          <a href="./home.html"><img src="./img/layout/logo.png"></a>
        </div>
      </div>
      <div>
        <ul class="navlist">
          <li><a href="./book.html">食玩圖鑑</a></li>
          <li><a href="./guide.html">食玩指南</a></li>
          <li><a href="./game.html">食尚玩家</a></li>
          <li><a href="./ad.html">夜市新鮮事</a></li>
          <li><a href="./create.html">創建指南</a></li>
          </ul>
          <div class="rIcon">
            <button class="hamburger hamburger--squeeze" type="button">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
            <!--<a href=""class="hamburger"><i class="fas fa-bars bar-open"></i></a>-->
            <a href="./loginup.html"class="user"><i class="fas fa-user"></i></a>
            <a href="./cart.html"class="cart"><i class="fas fa-shopping-cart"></i></a>
          </div>
      </div>
    </div>
  </div>
  
  <div class="bannerad_img"><img src="./img/book/bannerad.jpg"></div>
  <div class="bannerad_img_2"><img src="./img/book/bannerad_2.jpg"></div>

  <div class="container">
    <div class="book_slide">
      <div id="bk_slide_link">
        <a href="#" class="slide_scrool-link" class="fas fa-angle-double-down">
          <img src="./img/book/slide-style.png">
        </a>
      </div>
      <div class="bk_slide_con" id="slide_con">
        <div><span>美食圖鑑</span></div>
        <div class="bk_search">
          <i class="fas fa-search"></i>
          <input class="search_input" type="text" placeholder="想吃點甚麼?">
        </div>
      </div>
    </div>
  
    <div class="search_book">
      <div class="search_filter_RWD">條件篩選</div>
      <div class="book_filter">
        <ul class="filter_list">
          <li class="filter_item"> 
            <div class="book_filter-title">小吃</div>
            <div class="book_filter-content">
              <ul>
                <li class="filter_select part_filter" data-content = "fried">全部</li>
                <li class="filter_select" data-content = "grill">炸物</li>
                <li class="filter_select" data-content = "braise">烤物</li>
                <li class="filter_select" data-content = "braise">滷味</li>
                <li class="filter_select" data-content = "other_food">其他</li>
              </ul>
            </div>
          </li>
          <li class="filter_item"> 
            <div class="book_filter-title">飲料</div>
            <div class="book_filter-content">
              <ul>
                <li class="filter_select" data-content = "grill">全部</li>
                <li class="filter_select" data-content = "fried">茶類</li>
                <li class="filter_select" data-content = "braise">果汁類</li>
                <li class="filter_select" data-content = "other_food">其他</li>
              </ul>
            </div>
          </li>
          <li class="filter_item"> 
            <div class="book_filter-title">遊戲</div>
            <div class="book_filter-content">
              <ul>
                <li class="filter_select" data-content = "fried">遊戲</li>
              </ul>
            </div>
          </li>
          <li class="filter_item"> 
            <div class="book_filter-title">類型</div>
            <div class="book_filter-content">
              <ul>
                <li class="filter_select" data-content = "fried">最熱門</li>
                <li  class="filter_select" data-content = "braise">最新</li>
              </ul>
            </div>
          </li>
          <li class="filter_item"> 
            <div class="book_filter-title">營業時間</div>
            <div class="book_filter-content">
              <ul class="filter_weak">
                <li class="filter_select" data-content = "fried">全部</li>
                <li class="filter_select" data-content = "braise">週一</li>
                <li class="filter_select" data-content = "grill">週二</li>
                <li class="filter_select" data-content = "other_food">週三</li>
                <li class="filter_select" data-content = "grill">週四</li>
                <li class="filter_select" data-content = "other_food">週五</li>
                <li class="filter_select" data-content = "fried">週六</li>
                <li class="filter_select" data-content = "braise">週日</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="book_contents" id="shop_card_list">
        <div class="book_list fried">
          <div class="shop_card" v-for="item in shop">
            <div class="card_img_2">
              <img :src="item.src">
            </div>
            <div class="card_content_2">
              <div class="card_title">{{ item.shopName }}</div>
              <div class="card_warp">
                <div class="card_score">
                  <div class="score_star">
                    <i class="fas fa-star"></i>
                  </div>
                  <div class="score_num"><span>{{ item.shopScore }}</span>/5</div>
                  <div class="score_comment">{{ item.shopComment }}</div>
                </div>
                <a href="./shop_menu.html"><button class="card_order-btn">去點餐</button></a>
              </div>
            </div>
          </div>
        </div>
        <div class="book_list grill">
          <div class="shop_card" v-for="item in shop">
            <div class="card_img_2">
              <img :src="item.src">
            </div>
            <div class="card_content_2">
              <div class="card_title">{{ item.shopName }}</div>
              <div class="card_warp">
                <div class="card_score">
                  <div class="score_star">
                    <i class="fas fa-star"></i>
                  </div>
                  <div class="score_num"><span>{{ item.shopScore }}</span>/5</div>
                  <div class="score_comment">{{ item.shopComment }}</div>
                </div>
                <a href="./shop_menu.html"><button class="card_order-btn">去點餐</button></a>
              </div>
            </div>
          </div>
        </div>
        <div class="book_list braise">
          <div class="shop_card" v-for="item in shop">
            <div class="card_img_2">
              <img :src="item.src">
            </div>
            <div class="card_content_2">
              <div class="card_title">{{ item.shopName }}</div>
              <div class="card_warp">
                <div class="card_score">
                  <div class="score_star">
                    <i class="fas fa-star"></i>
                  </div>
                  <div class="score_num"><span>{{ item.shopScore }}</span>/5</div>
                  <div class="score_comment">{{ item.shopComment }}</div>
                </div>
                <a href="./shop_menu.html"><button class="card_order-btn">去點餐</button></a>
              </div>
            </div>
          </div>
        </div>
        <div class="book_list other_food">
          <div class="shop_card" v-for="item in shop">
            <div class="card_img_2">
              <img :src="item.src">
            </div>
            <div class="card_content_2">
              <div class="card_title">{{ item.shopName }}</div>
              <div class="card_warp">
                <div class="card_score">
                  <div class="score_star">
                    <i class="fas fa-star"></i>
                  </div>
                  <div class="score_num"><span>{{ item.shopScore }}</span>/5</div>
                  <div class="score_comment">{{ item.shopComment }}</div>
                </div>
                <a href="./shop_menu.html"><button class="card_order-btn">去點餐</button></a>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </div>


    <div class="page">
      <ul class="page_list">
        <li><a href="#">«</a></li>
        <li><a href="#" class="page-current">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">»</a></li>
      </ul>
    </div>
  </div>
  
  <div class="footer">
    <div class="wrap">© YesMan 2020 . All rights reserved.</div>
  </div>

  <script>
    let data = {
    shop:[
      {src: './img/database/shop_big_pic/016.jpg', shopName:'惡魔雞排', shopScore: '4.8', shopComment: '(125)'},
      {src: './img/database/shop_big_pic/020.jpg', shopName:'雞老闆桶仔雞', shopScore: '4.8', shopComment: '(125)'},
      {src: './img/database/shop_big_pic/016.jpg', shopName:'惡魔雞排', shopScore: '4.8', shopComment: '(125)'},
      {src: './img/database/shop_big_pic/020.jpg', shopName:'串永吉', shopScore: '4.8', shopComment: '(125)'},
      {src: './img/database/shop_big_pic/016.jpg', shopName:'惡魔雞排', shopScore: '4.8', shopComment: '(125)'},
      {src: './img/database/shop_big_pic/020.jpg', shopName:'串永吉', shopScore: '4.8', shopComment: '(125)'},
      {src: './img/database/shop_big_pic/016.jpg', shopName:'惡魔雞排', shopScore: '4.8', shopComment: '(125)'},
      {src: './img/database/shop_big_pic/020.jpg', shopName:'串永吉', shopScore: '4.8', shopComment: '(125)'},
      {src: './img/database/shop_big_pic/016.jpg', shopName:'惡魔雞排', shopScore: '4.8', shopComment: '(125)'},
      {src: './img/database/shop_big_pic/020.jpg', shopName:'串永吉', shopScore: '4.8', shopComment: '(125)'}
  ]
}
    var vue = new Vue({
            el: '#shop_card_list',
            data: data
        });
  </script>
  <script src='./js/book.js'></script>
</body>
</html>