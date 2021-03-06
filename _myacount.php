<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>一般會員－我的帳戶－消費紀錄+儲值紀錄</title>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js'></script>

  <style>
    @import url(./css/style.css);
    @import url(./css/myacount.css);
  </style>
</head>
<body>
  <?php
  require_once('store_money.inc');
  // require_once('navigation.inc');
  ?>
  <div class="utnmcontanier">
    <div class="utnmpagetitle">
      <div>我的帳戶</div>
      <div>
        <img src="https://picsum.photos/19/19">
        <span>$125200</span>
        <button class="btn-cir_pk1 storeMoneyOpenBtn">儲值</button>
        <?php
            
        ?>
      </div>
    </div>
    <div class="utnmtabbtns">
      <button data-target="utnmtab1" class="btn-rect_pk2 utnmtab utnmtab1 active">消費紀錄</button>
      <button data-target="utnmtab2" class="btn-rect_pk2 utnmtab utnmtab2">儲值紀錄</button>
    </div>
    <div class="utnmtabctrl">
      <div class="utnmtab utnmtab1 active">
        <table>
          <tr><th>訂單日期</th><th>訂單編號</th><th>消費金額</th></tr>
        </table>
        <table>
          <tr><td>2020/08/04</td><td>1524535</td><td>$500</td></tr>
          <tr><td>2020/08/04</td><td>1524535</td><td>$500</td></tr>
          <tr><td>2020/08/04</td><td>1524535</td><td>$500</td></tr>
          <tr><td>2020/08/04</td><td>1524535</td><td>$500</td></tr>
        </table>
      </div>
      <div class="utnmtab utnmtab2">
        <table>
          <tr><th>儲值日期</th><th>訂單編號</th><th>消費金額</th></tr>
        </table>
        <table>
          <tr><td>2020/08/04</td><td>125525</td><td>+$200</td></tr>
          <tr><td>2020/08/04</td><td>125525</td><td>+$200</td></tr>
          <tr><td>2020/08/04</td><td>125525</td><td>+$200</td></tr>
          <tr><td>2020/08/04</td><td>125525</td><td>+$200</td></tr>
        </table>
      </div>
    </div>
  </div>
  <?php
  require_once('footer.inc')
  ?>
  <script>
    $(function(){
    $("button.utnmtab").on("click", function(e){
      e.preventDefault();
      $(this).closest("div").find("button.utnmtab").removeClass("active");
      $(this).addClass("active");

      $("div.utnmtab").removeClass("active");
      $("div.utnmtab." + $(this).attr("data-target")).addClass("active");
    });
  });
  </script>
</body>
</html>