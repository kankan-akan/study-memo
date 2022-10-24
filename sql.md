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
## 列出力(SELECT)
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
## 列に別名をつける

```sql
SELECT shohin_id AS id,
SELECT shohin_id AS "商品名",
  FROm Shohin;
```

日本語の別名は " で囲む

## 定数の出力

```sql
SELECT '商品' AS mojiretu(文字列定数), 38(数値定数) AS kazu, '2009-02-24'(日付定数) SA hizuke, shohin_id, shohin_mei
  FROM Shohin;
```

## 結果から重複を防ぐ

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

## WHEREによる行の選択

```sql
SELECT <>, <>...
FROM <>
WHERE <>;

-- WHERE shohin_bunrui = '衣服';
```

## コメントアウト
```sql
-- この行をコメントアウト
/* この２行を
コメントアウト */
```