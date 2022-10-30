" ; "書き忘れ注意
文字列・日付の定数は" ' "で囲む
数値は囲まない

# 基本
## SQLキーワード
### DDL
データ定義言語(Data Definision Language)

```sql
CREATE  作成
DROP  削除
ALTER  テーブルなどの構成を変更する
```

### DML
データ操作言語(Data Manipulation Language)

```sql
SELECT  行を検索
INSERT  新規行を登録
UPDATE  行を更新
DELETE  行を削除
```

### DCL
データ制御言語(Data Control Language)

```sql
COMMIT  行なった変更を確定
ROLLBACK  行なった変更を取り消す
REVOKE  ユーザーから操作の権限を奪う
```

## データベース作成

```sql
CREATE DATABASE <database名>;
-- CREATE DATABASE shop;
```

## テーブルの作成
```sql
CREATE TABLE <table名>;
  or
CREATE TABLE <table名>
(<列名１>  <データ型>  <この列の制約>,
    :
    :
<列名１>  <データ型>  <この列の制約>,);
-- CREATE TABLE Shohin
-- (shohin_id       CHAR(4)            NOT NULL,
-- shohin_mei     VARCHAR(100)  NOT NULL,
-- hanbai_tanka  INTEGER            ,
-- shiire_tanka    INTEGER            ,
-- tourokubi       DATE                  ,
-- PRIMARY KEY  (shohin_id));
```

### データ型
```sql
INTEGER  数値（小文字以外）
CHAR  固定長文字列　＊CHAR(文字列の長さ)
VARCHAR  可変長文字列。文字列の長さが足りない場合に、半角で埋めない
DATE  日付
```

### 制約
NOT NULL制約

### 主キー制約

```sql
PRIMARY KEY (shohin_id)
```

## テーブル削除・変更

```sql
DROP TABLE <テーブル名>;
-- DROP TABLE Shohin;
```
## テーブル定義の変更
### 列の追加

```sql
ALTER TABLE <テーブル名> ADD COLUMN <列の定義>;
-- ALTER TABLE Shohin ADD COLUMN shohinmei_kana VARCHAR(100);
```

### 列の削除

```sql
ALTER TABLE <テーブル名> DROP COLUMN <列の名前>;
-- ALTER TABLE Shohin DROP COLUMN shohinmei_kana;
```

### データの登録

```sql
-- DML:データ登録
BEGIN(START) TRANSACTION;

INSERT INTO shohin VALUES ('0001', 'Tシャツ', '衣服', 1000, 50, '2019-09-21');
:
:
INSERT INTO shohin VALUES ('0008', 'ボールペン', '事務用品', 100, NULL, '2009-11-11');

COMMIT;
```

### テーブルの訂正

```sql
ALTER TABLE Sohin (RENAME TO)to Shohin;
```

# 検索
## 基本
### 列出力(SELECT)
SELECT分でデータを検索し、取り出す -> 問い合わせ、queryという

```sql
SESLECT <列名>, ...
  FROM <テーブル名>;
-- SELECT shohin_id, shohin_mei
--    FROM Shohin;
```

### 全ての列を出力

```sql
SELECT *
    FROM <テーブル名>;
-- SELECT *
--     FROM Shohin;
```
### 列に別名をつける

```sql
SELECT shohin_id AS id,
SELECT shohin_id AS "商品名",
  FROm Shohin;
```

日本語の別名は " で囲む

### 定数の出力

```sql
SELECT '商品' AS mojiretu(文字列定数), 38(数値定数) AS kazu, '2009-02-24'(日付定数) SA hizuke, shohin_id, shohin_mei
  FROM Shohin;
```

### 結果から重複を防ぐ

```sql
SELECT DISTINCT shohin_bunrui
  FROM Shohin;

  -- shohin_bunrui
  -- ----------
  -- キッチン
  -- 衣服
  -- 事務用品
```

nullも１種類のデータとして分類される

### 複数列の組み合わせ

```sql
SELECT DISTINCT shohin_bunrui, torokubi
  FROM Shohin;

  -- shohin_bunrui | torokubi
  ----------------------------------------
  -- 衣服                | 2009-09-20
  -- 衣服                | 2009-09-11
  -- :
  -- :
```

### WHEREによる行の選択

```sql
SELECT <>, <>...
FROM <>
WHERE <>;

-- WHERE shohin_bunrui = '衣服';
```

### コメントアウト
```sql
-- この行をコメントアウト
/* この２行を
コメントアウト */
```

## 算術・比較
### 算術演算子

hanbai_tankaの２倍を"hanbai_tanka_x2"として出力

```sql
SELECT shohin_mei, hanbai_tanka,
hanbai_tanka * 2 AS "hanbai_tanka_x2"
FROM Shohin;
```

- +：和
- -：減
- *：乗
- /：除
- 他：(1 + 2) * 3

NULLを含んだ計算は全てNULLとなる

### 比較演算子

hanbai_tankaが500ではない行

```sql
SELECT shohin_mei, hanbai_tanka,
FROM Shohin
WHERE hanbai_tanka < > 500;

-- 販売単価が1000円以上
-- WHERE hanbai_tanka >= 1000;

-- 登録日が2009-09-27より前
-- WHERE tourokubi < '2009-09-27';

-- 販売単価が仕入れ単価より500円以上高い
-- WHERE hanbai_tanka - siire_tanka >= 500
```

- =：等しい
- < >：等しくない
- >=：以上
- >：より大きい
- <=：以下
- <：より小さい

＊NULLは比較演算子で出力できない

```sql
SELECT shohin_mei, hanbai_tanka,
FROM Shohin
WHERE hanbai_tanka IS NULL;
-- 　x WHERE siire_tanka = NULL;

-- NULLでない行を選択する場合
-- WHERE hanbai_tanka IS NOT NULL; 
```

## 論理演算子
### NOT演算子

```sql
SELECT shohin_mei, shohin_bunrui, hanbai_tanka
  FROM Shohin
WHERE NOT hanbai_tanka >= 1000;
```

`hanbai_tanka >= 1000`という条件が否定され、1000円未満の行が選択される

### AND演算子・OR演算子

```sql
-- AND演算子
SELECT shohin_mei, shohin_bunrui, hanbai_tanka
  FROM Shohin
WHERE shohin_bunrui = 'キッチン用品'
AND hanbai_tanka >= 1000;

-- OR演算子
SELECT shohin_mei, shohin_bunrui, hanbai_tanka
  FROM Shohin
WHERE shohin_bunrui = 'キッチン用品'
OR hanbai_tanka >= 1000;
```

AND / OR両方同時に書くとAND演算子が優先される  
両方使用する場合、()内に`OR`を記述

```sql
SELECT shohin_mei, shohin_bunrui, hanbai_tanka
  FROM Shohin
WHERE shohin_bunrui = 'キッチン用品'
AND ( torokubi = '2009-09-21'
          OR tourokubi = '2009-09-11' );
```

### NULLを含む場合の心真理値

NULLは  
- 比較演算子（=, <, >）では検索できない
- `IS NULL` / `IS NOT NULL`演算子を使用する必要がある


`NULL`であった場合の心理値は`UNKNOWN`という第三の値となる  
→３値論理

# 集約と並べ替え
## テーブルを集約して検索する
### 集約関数・集合関数

SQLでデータに対して何らかの操作や計算をこなう際は関数を使用する  
- COUNT：テーブル全体の行数を合計する
- SUM：テーブルの数値列のデータを合計する
- AVG：        //       データを平均する
- MAX：任意の列のデータの最大値を求める
- MIN：       //      データの最小値を求める

### テーブルの行数を数える

```sql
SELECT COUNT (*)
  FROM Shohin;

  -- count
 -- -----------
  -- 8
  ```

＊`*`は全ての列


### NULLを除外して行数を数える

siire_tanka列にあるNULL行を除外して行数を数える

```sql
SELECT COUNT (siire_tanka)
  FROM Shohin;
```

`COUNT (*)`はNULLを含む行を、`COUNT (<列名>)`はNULLを除外した行を数える

### 合計

販売単価（hanbai_tanka）の合計

```sql
SELECT SUM(hanbai_tanka) 
FROM Shohin;
```

販売単価・仕入れ単価それぞれの合計

```sql
SELECT SUM(hanbai_tanka), SUM(shiire_tanka)
  FROM Shohin;
```

集約関数はNULLを除外する（０と同じ扱い）。ただし`COUNT(*)`はNULLを含む。

### 平均値

販売単価（hanbai_tanka）の平均値

```sql
SELECT AVG(hanbai_tanka) 
FROM Shohin;
```

### 最大値・最小値


