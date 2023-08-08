#出力
<html>
  <?php
    echo 'Hello World!';
    echo 5 + 4;
    echo '5 + 4';
  ?>
</html>

#変数
<html>
  <?php
    $fruits = 'バナナ';
    echo $fruits;

    $length = 7;
    $area = $length * $length;
    echo $area;

    $num = 3;
    echo $num;
    $num =5; // 更新
    echo $num;

    $x = 1;
    $x = $x + 10; // 再代入
      $x += 10; // 省略形
      $x ++; // １を足す場合

    $x = 3;
    echo ++$x; // 4
    echo $x++; // 3
  ?>
</html>

#文字列連結
<html>
  <?php
    $lesson = 'PHP';
    $level = '入門';

    echo $lesson.$level; // PHP入門
  ?>
</html>

