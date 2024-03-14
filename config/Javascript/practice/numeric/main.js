'use strict';
 {
  /* const n = Number(prompt('Number?'));
  console.log(`Hours : ${Math.floor(n / 60)}`);
  console.log(`Minutes : ${n % 60}`); */

  // Math.ceil() // 切り上げ
  // Math.floor() // 切り捨て
  // Math.round() // 中間点の数値以上で切り上げ、以下で切り捨て

  /* const n = Number(prompt('Yen?'));
  const amount = (n / 150.4).toFixed(2); // toFixedで文字列になっている(数値のみ使用可能)
  console.log(`USD : ${Number(amount).toLocaleString()}`); // tolocaleStringで3桁ごとにカンマ(数値のみ使用可能) */

  /* const n = Number(prompt('Count?'));
  for (let i = 0; i < n; i++) {
    if (i % 3 === 0) {
      console.log(`--- item ${i} ---`);
    } else {
      console.log(`=== item ${i} ===`);
    }
  } */

  /* for (let i = 0; i < 10; i++) {
    const n = Math.floor(Math.random() * 3);
    console.log(`${i}: ${n}`);
  } */

  /* function getRandomInteger(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  for (let i = 0; i < 10; i++) {
    const n = getRandomInteger(5) + 1;
    console.log(`${i}: ${n}`);
  } */

  const scores = [70, 90, 80, 75];
  let max = 0;

  scores.forEach((score) => {
    if(max < score) {
      max = score;
    };
  });
  // console.log(max);

  console.log(Math.max(...scores));
  console.log(Math.min(...scores));

  }