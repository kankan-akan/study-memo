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












