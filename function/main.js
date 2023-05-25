'use strict';

// {
//   function double(num) { //仮引数
//     return num * 2;
//   }

//   console.log(double(10)); //実引数
//   console.log(double(10 * 2));
// }

function sum(a, b) {
  console.log(a + b);
}

sum (3000, 7000);         //10000
console.log(sum(10, 6)); //undefined→返り値がない
