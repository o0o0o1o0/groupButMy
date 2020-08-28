<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>結帳完成 | 夜市客</title>
    <!-- <link rel="stylesheet" href="./css/style.css"> -->
    <style>
        @import url(./css/style.css);
        /* @import url(./scss/base/_font.scss); */     
    </style>
</head>
<body id="cart_final">
<!-- navigation inc -->
<?php    
    require_once('navigation.inc');
?>
<!-- navigation inc -->

<div class="container">
    <div class="text">
        <div>
            <img src="./img/store_money/tick.png">
            <span>感謝消費</span>
        </div>
        <div>
            <span>已完成交易</span>
        </div>
    </div>
    <hr>
    <div class="bom">
        <div class="txt">
            <img src="./img/store_money/money.png">
            <span>剩餘夜市幣 
                <!-- <??> -->
            </span>

        </div>
        <div class="ctrlBtns">
            <button type="button" class="btn-rect_pk2"><a>會員中心</a></button>
            <button type="button" class="btn-rect_gr2"><a>查看訂單</a></button>
        </div>
    </div>
</div>

<!-- <div class="footer">
    <div class="wrap">© YesMan 2020 . All rights reserved.</div>
</div> -->
<!-- footer inc -->
<?php    
    require_once('footer.inc');
?>
<!-- footer inc -->
</body>
</html>