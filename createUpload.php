<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <?php
    switch($_FILES["表格欄位名稱"]["error"]){
      case UPLOAD_ERR_OK://上傳成功
          //============檢查資料夾是否存在
          $dir = "images";//路徑名
              //沒有這個資料夾，創建一個資料夾
              mkdir($dir);//make directory
          }
          $from = $_FILES["表格欄位名稱"]["tmp_name"];
          $to = "$dir/".$_FILES["表格欄位名稱"]["name"]; //images/smile.gif
          copy($from, $to);
          echo '<script language="javascript">alert("上傳成功")</script>';
      break;
      case UPLOAD_ERR_INI_SIZE: //php.ini系統上限設定為2M
          echo "上傳檔案太大，不得超過",ini_get("upload_max_filesize")," Bytes<br>";
      break;
      case UPLOAD_ERR_FORM_SIZE: //fileUpload指定上限(小於等於ini系統上限)為123456 Bytes
          echo "上傳檔案太大","不得超過",$_POST["MAX_FILE_SIZE"]," Bytes<br>";
      break;
      case UPLOAD_ERR_PARTIAL:
          echo "檔案損毀或丟失<br>";
      break;
      case UPLOAD_ERR_NO_FILE:
          echo "檔案未選取<br>";
      break;
      default:
          echo "系統錯誤，請通知維護人員<br>";
  }
  ?>
</body>
</html>