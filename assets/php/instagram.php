<?php
//POSTリクエストの場合のみ受付
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    //アクセストークン
    $access_token = "8238832911.cd5b154.4b64d7d4deeb488eb6098f3ec8cd7b58";
    //JSONデータを取得して出力
    echo @file_get_contents("https://api.instagram.com/v1/users/self/media/recent/?access_token={$access_token}");
    //終了
    exit;
}
?>
