<?php
#出力
  echo 'Hello World!';
  echo 5 + 4;
  echo '5 + 4';

  printf("Hello World");
  echo sprintf("Hello World"); // sprintfは返り値を返すのみ

#変数
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

  $name = '名前';
  echo "{$name}です"; // 名前です
  echo '{$name}です'; // {name}です

#文字列連結
    $lesson = 'PHP';
    $level = '入門';

    echo $lesson.$level; // PHP入門

    date_default_timezone_set('Asia/Tokyo');
    echo '現在は、' . date('G時 i分 s秒') . 'です';

#繰り返し
  $i = 1; // 初期化

  while ($i < 3):
    $i = $i + 1;
    echo $i . '<br>';
  endwhile;

  for($i = 1; $i < 3; $i = $i + 1):
    echo $i . '<br>';
  endfor;

#1年後までの日付を表示
  date_default_timezone_set('Asia/Tokyo');

  for($i = 0, $i<366; $i ++):
    // $time = strtotime('+' . $i . ' day');
    $time = strtotime("+$i day");
    $day = date('n/j(D)', $time);
    echo $day . '<br>';
  endfor;

#配列
$week_name = ['日', '火', '水', '木', '金', '土'];
// echo $week_name[2] . '<br>';

date_default_timezone_set('Asia/Tokyo');
$week = date('w');
echo $week_name[$week]

#連想配列
<?php
$fruits =[
    'apple' => 'りんご',
    'grape' => 'ぶどう',
    'lemon' => 'レモン',
    'tomato' => 'トマト'
];
?>

<dl>
  <?php foreach($fruits as $english => $japanese): ?>
    <dt><?php echo $english; ?></dt>
    <dd><?php echo $japanese; ?></dd>
  <?php endforeach; ?>
</dl>

#条件
<?php
$time = 8;
?>
<?php if ($time < 9): ?>
  <p>＊営業時間外です</p>
<?php else: ?>
    <p>ようこそ</p>
<?php endif; ?>

$s = 'abc';
if ($s): // $s !== ''
  echo '$sには文字が入っています';
endif;

$x = 10;
if (!$x): // $x === 0
  echo '$xは0です';
endif;

#切り上げ、切り捨て
<?php echo floor(100 / 300 * 100); ?>引きです。

<br>
<?php echo ceil(3.33); ?><br>
<?php echo round(3.66, 1); ?><br>

#文字列のフォーマットを整える
$date = sprintf('%40d.%02d.%02d', 21, 10, 5); //0021.10.05
echo $date;

#ファイル書き込み
  $success = fili_put_contents('data/news.txt',
    'ホームページをリニューアルしました');

  if ($sucsess !== false) {
    echo 'ファイルの書き込みが完了しました'
  } else {
    echo 'ファイルの書き込みに失敗しました'
  }

#ファイルの読み込み
$news = file_get_contents('data/news.txt');
echo $news

// ファイルの追記
$news = $news . "<br> 追加のニュースです";
$success = file_put_contents('data/news.txt');
// readfile('data/news.txt');

#xmlファイルを読み込む
<?php
$xmifree = simplexml_load_file('rss.xml');
foreach ($xmlfree->chanenel->item as $item); // $itemに配列を放り込む
?>
・<a href="<?php echo $item->link ?>"><?php echo $item->title ?></a>
<?php
endforeach;
?>

#関数
function printCircleArea($radius) {
  echo $radius * $radius * 3;
}

printCircleArea(6);

#データの受け取り
<form action="sent.php" name="fruits">
  <option value="orange">orange</option>
  <option value="apple">apple</option>
  <input type="text" name="name">
</form>

sent.php-------
<?php
echo $_POST['fruits'];
echo $_POST['name'];
?>

#コンストラクタ
class Menu {
  public $name; // プロパティ（インスタンスが持つデータ）
  public function __construct() { // インスタンス生成時に自動的に呼ばれる
    echo 'hello World';
  }

  public function hello() {
    echo '私の名前は'.$this->name.'です'; // プロパティ名に$は不要
  } // $this : このメソッドを呼び出しているインスタンスに置き換えられる
}

$curry = new Menu(); // インスタンスを生成
$curry->name = 'CURRY';
$curry->hello(); //$curryに置き換わる

#ゲッター、セッター、カプセル化
class Menu {
  private $name; // クラス内のみアクセス
  public function __construct($name) {
    $this->name = $name;
  }

  public function getName() {
    return $this->name;
  }

  public function setName($name) {
    $this->name = $name;
  }
}

#クラスプロパティ
class Menu {
  public static $count = 4; // staticをつけるとクラスプロパティになる
}
echo 'メニュー'.Menu::count.'品';

#クラスメソッド
// 個々のインスタンスのデータに関係ない処理を行うとき

private static $count = 0; // staticを用いて定義
public static function getcount() {
  return self::$count;  // selfを使用しているクラス自身を指す
}

echo Menu::getCount(); // クラスメソッドの呼び出し

#独自メソッド
class Drink extends Menu {
  private $type; // 独自プロパティ
  public function getType() {
    return $this->type;
  }
  public function setType($type) {
    $this->type = $type;
  }
}

$coffee = new Drink('COFFEE',...);
echo $coffee->getType();

$curry = new Food('CURRY', ...);
echo $curry->getType();

#子クラスからのアクセス権
class Menu {
  $protected $name;
}

class Drink extends Menu {
  public function __construct($name,...) {
    $this->name = $name; // アクセス可能
  }
}

#オーバーライド
class Menu {
  protected $name;
  protected $price;
  protected $image;
}



class Drink extends Menu { // 継承
  private $type;

  public function __construct($name, $price, $image, $type) {
    parent::__construct($name, $price, $iamge); // 親クラスのコンストラクタをオーバーライド
      $this->type = $type;


#クエリ情報をURLに載せる
<a href="show.php?name=<?php echo $menu->getName() ?>">
<?php echo $menu->getName() ?>
</a>

show.php----------
<?php
$menuName = $_GET['name']; // 受け取った情報を取得
?>

<h1><?php echo $menuName ?>の詳細ページです</h1>

#特定のインスタンスを取得

$menuName = $_GET['name'];
$menu = Menu::findByName($menus, $menuName); // 配列menusの中からmenuNameを持つインスタンスを取得

  public static function findByName($menus, $name) {
    foreach($menus as $menu) {
      if($menu->getName() == $name) {
        return $menu;
      }
    }
  }

#ビルトイン関数
$input = ' dot_yusuke ';
$input = trim($input); // "dot_yusuke"]

$input = str_replace('_', '-', $input); // dot-yusuke

$input = 'Call us at 03-3001-1256 or 03-3015-3222';
$pattern = '/\d{2}-\d{4}-\d{4}/';

#文字列の検索、置換
preg_match_all($pattern, $input, $matches);
print_r($matches);

$input = preg_replace($pattern, '**-****-****', $input);
echo $input . PHP_EOL;

#配列を変換
$d = [2020, 11, 15];
echo "$d[0]-$d[1]-$d[2]" . PHP_EOL;
echo implode('-', $d) . PHP_EOL;

$t = '17:32:15';
print_r(explode(":", $t));

#配列要素の変更
$scores = [30, 40, 50];
array_unshift($scores, 0, 20);
array_push($scores, 60, 70);
$scores[] = 80;
array_shift($scores);

array_pop($scores);

print_r($scores);

#配列の削除
array_splice($scores, 2, 1, 500);
// array_splice($scores, 1, 0, [100, 230]);

#全ての要素を変更
$prices = [100, 200, 300];
$newPrices = array_map(
  function ($n){return $n * 1.1; },
  $prices
  );

  print_r($newPrices);