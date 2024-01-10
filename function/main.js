'use strict';

// {
//   function double(num) { //仮引数
//     return num * 2;
//   }

//   console.log(double(10)); //実引数
//   console.log(double(10 * 2));
// }

// function sum(a, b) {
//   console.log(a + b);
// }

// sum (3000, 7000);         //10000
// console.log(sum(10, 6)); //undefined→返り値がない

// {
//   function calculateTotal (price, amaount, rate = 1.1) {
//     return price * amaount * rate;
//   }

//   console.log(calculateTotal(100, 10));
// }

// {
//   // 関数宣言
//   function double(num) {
//     return num + 2;
//   }

//   // 関数式
//   const double = function(num) {
//     return num + 2;
//   }

//   console.log(double(10));
// }

{
  // const double = (num) => {
  //   return num * 2;
  // };

  const calc = (num, func) => {
    return func(num)
  }

  // console.log(calc(29, double));
  console.log(calc(20, (num) => {
    return num * 2;
  }));
}