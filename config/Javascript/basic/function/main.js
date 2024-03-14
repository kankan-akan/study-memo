'use strict';

/*{
  function double(num) { //仮引数
    return num * 2;
  }

  console.log(double(10)); //実引数
  console.log(double(10 * 2));
} */

/* function sum(a, b) {
  console.log(a + b);
} */

/* sum (3000, 7000);         //10000
console.log(sum(10, 6)); //undefined→返り値がない

function sum(a, b) {
  console.log(a + b);
  return undefined; // returnがない場合もundefinedを返す

  // 関数を使って演算をする場合returnで値を返す必要がある
} */

/*{
  function calculateTotal(price, amaount, rate = 1.1) {
    return price * amaount * rate;  // 引数にデフォルト値を設定
  }

  console.log(calculateTotal(100, 10));
  console.log(calculateTotal(100, 10));
} */

/* {
  function calculateTotal(price, amount, rate = 1.1) {  // 引数にデフォルト値を設定
    // if (amount >= 100) {
    //   return price * amount;  // returnの時点で処理が終了する
    // } else {
    //   return price * amount * rate;
    // }
    // よって以下↓（早期リターン）
    if (amount >= 100) {
      return price * amount;
    }
    return price * amount * rate;
  }

  console.log(calculateTotal(100, 10));
  console.log(calculateTotal(100, 10));
} */

/* {
  // 関数宣言
  function double(num) {
    return num + 2;
  }

  // 関数宣言は実はコードのどこに書いても実行時にはコードの先頭に書いたことになるという仕様

  // 関数式
  const double = function (num) {
    return num + 2;
  }

  console.log(double(10));
} */

/* {
// console.log("---------");
// console.log("SALE! 50% OFF!");
// console.log("---------");
// console.log("BREAKING NEWS!");
// console.log("Two baby pandas born at our Zoo!");
// console.log("---------");
// console.log("SALE! 50% OFF!");
// console.log("---------");

// ↓関数でまとめる

function showAd() {
  console.log("---------");
  console.log("SALE! 50% OFF!");
  console.log("---------");
}

function showContent() {
  console.log("BREAKING NEWS!");
  console.log("Two baby pandas born at our Zoo!");
}

showAd();
showContent();
showAd();
} */

/* {
  // アロー関数式
  // const double = (num) => {
  //   return num * 2;
  // };

  // const double = num => {
  //   return num * 2;
  // }

  // const double = num => num * 2;
} */

{
  const double = (num) => {
      return num * 2;
    };

  const calc = (num, func) => {
    return func(num)
  }

  // console.log(calc(29, double));
  console.log(calc(20, (num) => {
    return num * 2;
  }));
}