puts “1 + 3” #文字列
puts  1 + 3 #数字

四則演算
+：足し算
-：引き算
*：掛け算
/：割り算
%：あまり

かっこを使用
puts (100 + 30) * 2
# 260

変数を代入
greeting = 'Hello world'
puts greeting
// Hello world

文字列中に変数を式展開
name = 'paiza'
puts "#{name}さん、冒険にようこそ"
# paizaさん、冒険にようこそ

標準入出力
chompメソッド 文字列の末尾の改行コードを取り除きます。
name = gets.chomp  #文字列の場合（行ごと読み込む）
puts "Hello #{name}"
# paiza -> Hello paiza

number = gets.to_i  #整数の場合
puts number * 10
# 12 -> 120

Line  = gets #行を読み込む

Ifの基本形
name = gets.chomp

if name == 'ruby' then
  puts 'Welcome'
end

文字列・数値が一致しているか判定する比較演算子
==  等しい。代入と区別する  a == b
!=  等しくない  a != b

Elseの基本形
name = gets.chomp
puts "Hello #{name}"

if name == 'ruby' then
puts 'Welcome'
else
puts 'Goodbye'
end

数値に合わせて出力を切り替え
number = gets.to_i
puts number

if number == 10 then
  puts "#{number}は10に等しい"
elsif number > 10 then
  puts "#{number}は10より大きい"
else
  puts "#{number}は10未満"
end

繰り返し処理
greeting = 'Hello world'
3.times do
  puts greeting
end

繰り返し回数を受け取る
greeting = 'Hello world'
count = gets.to_i

count.times do
  puts greeting
end
＃３　→ ３回繰り返し

複数データを受け取る
count = gets.to_i

count.times do
  name = gets.chomp
  puts "Hello #{name}"
end

＃３
Paiza
Ruby
Python
↓
Hello paiza
Hello ruby
Hello python

複数の整数データを受け取る
count = gets.to_i

count.times do
  number = gets.to_i
  puts number
end

複数の整数データを受け取って分類する
count = gets.to_i

count.times do
  number = gets.to_i
  puts number

  if number == 10 then
    puts "#{number}は10に等しい"
  elsif number > 10 then
    puts "#{number}は10より大きい"
  else
    puts "#{number}は10未満"
  end
end

putsメソッド、printメソッド
puts “hello wold”

print “hello world”
print “goodbye”　
→ hello worldgoodbye

randメソッド
　　　　　　　　　↓引数
number = rand(1..100)
puts “#{number}"

## randメソッドで条件分岐
```
number = rand(1..2)

if number == 1
    puts "好き"
else 
    puts "嫌い"
end
```

## randメソッドで条件分岐（比較演算）
omikuji = rand(1..10)
puts omikuji

if omikuji == 1
    puts "大吉"
elsif omikuji == 2
    puts "中吉"
elsif omikuji <= 4
    puts "小吉"
elsif omikuji <= 7
    puts "凶"
else
    puts "大凶"
end

複数条件（AND）
number3 = rand(1..100)
puts number3
if number3 >= 30 && number3 <=60
    puts "当たり"
else
    puts "残念！"
end

複数条件（OR）
number3 = rand(1..100)
puts number3
if number3 <= 30 || number3 >=60
    puts "当たり"
else
    puts "残念！"
end

論理演算
rubyでは、「条件が成立したとき」と「成立しなかったとき」という状態を専用のデータで表します。条件が成立したときの状態を「真」または「true」(トゥルー)と呼びます。そして、条件が成立しなかったときの状態を「偽」または「false」(フォールス)と呼びます。

変数に代入できる
number = 1
flag = number == 1
if flag
	puts "スキ！"	#条件式が成立したときの処理
else
	puts "キライ"	#条件式が成立しなかったときの処理
end
p flag

＃スキ
　true

データ型
number = 3.14
p number 
p number.to_i #データ→整数に変換
p number.to_s #データ→文字列に変換

text = “3.14”
p text.to_f #データ→小数点付きに変換

＃3.14
　3
　“3.14”

　3.14

税込金額の計算
price = 1980
puts "定価：#{price}円"

discount_price = (price * 0.85).to_i
puts "割引価格は#{discount_price}円"

amount = (discount_price * 1.1).to_i
puts “税込価格は#{amount}円"

#定価：1980円
 割引価格は1683円
 税込価格は1851円

繰り返し
for i in 5..10
    puts "hello world #{i}"
end

繰り返し（while）
i = 1	# カウンタ変数を初期化
while i <= 10	 # 1 -> 2 -> 3 -> 4 ・・・ 10 -> 11
    puts i		# 繰り返し処理
    i = i + 1	# カウンタ変数を更新
end
puts "last #{i}"

代入演算子
# スライムを何度も攻撃
# ダメージは、1から10までランダム
# スライムのHPがゼロになるまで繰り返す

hp = 30
while hp > 0
    hit = rand(1..10)
    puts("スライムに、#{hit}のダメージを与えた！")
    hp -= hit
end

puts "スライムを倒した"

繰り返しでHTMLを作成
年齢入力のプルダウン作成

puts "<select name='age'>"
for age in 1..100
    puts "<option>#{age}歳</option>"
end
puts "</select>"

標準入力とループ処理
count = gets.to_i
puts("データ個数 #{count}")

for i in 1..count
    line = gets
    puts "hello #{line}"
end

配列への代入
team = ["勇者", "魔法使い", 100, player_1]←要素

配列の参照　要素の番号を指定する
puts team[0] 直接数値で指定する
puts team[num] 変数で指定する
puts team[num + 1] 計算式で指定する

lengthメソッド　要素の数
puts team.length

num = 0
team = ["勇者", "魔法使い"]
p team
puts team[num + 1]

pushメソッド　配列の末尾に要素を追加
team.push("戦士")

配列の要素を上書き
team[0] = "ドラゴン"

配列の要素を削除
team.delete_at(0)




ループで配列を扱う
team = ["勇者", "戦士", "魔法使い", "盗賊"]
for i in team
puts i
end

team = ["勇者", "戦士", "魔法使い", "盗賊"]
team.each do |i|
puts i
end

配列を分割
line = "勇者、戦士,魔法使い"
p line.split(“,")

Line = gets.chomp.split(“,”)
P = line

複数行データを配列に格納
array = []
while line = gets
  line.chomp
  array.push(line)
end

puts array

ハッシュ
enemy_hash = {"ザコ" => "スライム", "中ボス" => "ドラゴン", "ラスボス" => "魔王"}
p enemy_hash

要素にアクセス
puts enemy_hash["ザコ"]

ハッシュのキーを変数で取り出す
level ="ザコ"
puts enemy_hash[level]

ハッシュを追加
enemies = {"ザコ" => "スライム", "中ボス" => "ドラゴン", "ラスボス" => "魔王"}
enemies["ザコ2"] = "メタルモンスター"
p enemies

ハッシュを更新
enemies = {"ザコ" => "スライム", "中ボス" => "ドラゴン", "ラスボス" => "魔王"}
enemies["中ボス"] = "レッドドラゴン"

ハッシュを削除
enemies = {"ザコ" => "スライム", "中ボス" => "ドラゴン", "ラスボス" => "魔王"}
enemies.delete("ザコ")
p enemies

ハッシュをループで処理
enemies = {"ザコ" => "スライム", "中ボス" => "ドラゴン", "ラスボス" => "魔王"}
enemies.each_value do |enemy|
	puts "#{enemy}が、現れた！"
end

ハッシュのキーと値を取り出す
enemies = {"ザコ" => "スライム", "中ボス" => "ドラゴン", "ラスボス" => "魔王"}
enemies.each do |rank, enemy|
	puts "#{rank}の#{enemy}が、現れた！"
end

配列の整列
items = ["イージスシールド", "ウィンドスピア", "アースブレイカー", "イナズマハンマー"]
p items.sort　←五十音順

逆順
items = ["イージスシールド", "ウィンドスピア", "アースブレイカー", "イナズマハンマー"]
p items.sort.reverse

数字順
items = ["4.イージスシールド", "1.ウィンドスピア", "3.アースブレイカー", "2.イナズマハンマー"]
p items.sort

同じ数字がある場合は五十音順

ソートしたらハッシュに戻す
items = {"イージスシールド" => 40, "ウィンドスピア" =>12, "アースブレイカー" =>99}
p items.sort.to_h

値でソートする
items = {"イージスシールド" => 40, "ウィンドスピア" =>12, "アースブレイカー" =>99}
p items.sort_by {|k, v| v }
K（キー）、 v（値）を取り出し、vでソート
値でソートしてハッシュで取り出す
items = {"イージスシールド" => 40, "ウィンドスピア" =>12, "アースブレイカー" =>99}
p items.sort_by {|k, v| v }.to_h

取り出した値をキーにして、別ハッシュから値をとりだす
# 画像ファイル名を取り出し、アイテム名を表示する
items_order.each do |item_name|
    # 画像ファイル名を取り出す
    puts items_img[item_name]
    puts item_name
end

シンボルでハッシュをつくる
enemies = {:zako => "スライム", :boss => "ドラゴン", :king => "魔王"}
p enemie
p enemies[:zako]

シンボルによる簡易記述
enemies = {zako: "スライム", boss: "ドラゴン", king: "魔王"}
p enemies
p enemies[:boss]

２次元配列
team_c = ["勇者", "戦士", "魔法使い"]
team_d = ["盗賊", "忍者", "商人"]
team_e = ["スライム", "ドラゴン", "魔王"]
teams = [team_c, team_d, team_e]
p teams

２次元配列の呼び出し
p teams[0]
p teams[0][0]
p teams[0][1]
p teams[0][2]

要素の更新
teams[0][0] = “魔導士"

長さ
teams = [["勇者", "戦士", ], ["盗賊", "忍者", "商人"], ["スライム", "ドラゴン", "魔王"]]
p teams.length     # 3
p teams[0].length  # 2

要素を追加
teams.push([“メタルモンスター”, “シルバーモンスター”])
teams[0].push(“レッドドラゴン")

要素を削除
teams.delete_at(1)
teams[0].delete_at(1)

each_withindexでインデックスと一緒に表示
team = ["勇者", "戦士", "魔法使い"]
team.each_with_index do |person, i|
    puts "#{i}番目の#{person}が、スライムと戦った"
end



mapで新しい配列を作る
numbers = [3, 4, 5]
results２ = numbers.map do |item|
    item * 10
end
p results2

配列をnewで作成
numbers = Array.new(10)
p numbers

配列の初期値を指定
numbers = Array.new(10, 1)
p numbers
→[1, 1, 1, 1, 1, 1, 1, 1 ,1 1]

２次元配列をmapで作成
numbers3 = Array.new(4).map{Array.new(3, 1)}
p numbers3
→[[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]]

ドット絵を表示
enemy_img = [[0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
            　　　 [1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            　　　 [1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1],
            　　　 [1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1],
           　　　  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
           　　　  [0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0],
           　　　  [0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1]]

enemy_img.each do |line|
    # p line
    line.each do |dot|
        # print dot
        if dot == 1
            print "#"
        else
            print " "
        end
    end
    puts ""
end

３次元配列でドット絵を表示
enemy_img = [[[0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
              [1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
              [1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1],
              [1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1],
              [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
              [0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0],
              [0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1]],
             [[0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
              [1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
              [1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1],
              [1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1],
              [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
              [0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0],
              [0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0]],
             [[0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
              [1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
              [1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1],
              [1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1],
              [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
              [0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0],
              [1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0]]]

enemy_img.each do |img|
    img.each do |line|
        line.each do |dot|
            if dot == 1
                print "#"
            else
                print " "
            end
        end
        puts ""
    end
end

２次元配列で地図を表示
landmap = Array.new(10).map{Array.new(20,"森")}
landmap.each do |line|
    line.each do |area|
        print area
    end
    puts ""
end

行番号を表示
landmap = Array.new(10).map{Array.new(20,"森")}
landmap.each_with_index do |line, i|
    print "#{i}:"
    line.each do |area|
        print area
    end
    puts ""
end

道は、行が2で割り切れるか、列が3で割り切れる場合で、そこが「森」の時に配置する。
landmap = Array.new(10).map{Array.new(20,"森")}
landmap[0][0] = "城"
landmap[0][19] = "町"
landmap[9][19] = "町"
landmap.each_with_index do |line, i|
    print "#{i}:"
    line.each_with_index do |area, j|
        if (i % 2 == 0 || j % 3 == 0) && area == "森"
            print "＋"
        else
            print area
        end
    end
    puts ""
end

標準入力から読み込んだ２次元配列のドット絵を表示する
enemy_img = []
while line = gets
    line.chomp!
    enemy_img.push(line.split(","))
end

enemy_img.each do |line|
    line.each do |dot|
        if dot.to_i == 1
            print "#"
        else
            print " "
        end
    end
    puts ""
end

２次元配列で画像を配置
team = []
while line = gets
    line.chomp!
    team.push(line.split(","))
end

puts "<table>"
team.each do |line|
    puts "<tr>"
    line.each do |person|
        print "<td><img src='#{players_img[person.to_i]}'></td>"
    end
    puts "</tr>"
end
puts"</table>"
