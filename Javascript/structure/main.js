'use-strict';

{
// const scores = [
//   70,
//   90,
//   85
// ];

/*  console.log(scores[2]);
  console.log(scores.length);
  scores[2] = 95;
  console.log(scores);

  // 変更されるのはscoresの配列の中身であって、値が再代入されるわけではない
  // （定数に値を再代入するとエラー）
 */

  /* scores.unshift(75); // 先頭に要素を追加
  console.log(scores);

  for(let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
  }

  scores.forEach((score, index) => {
    console.log(score); // 要素数を指定できない。全要素を抜き出す場合に使用
    console.log(`${index}:${score}`);
  });

  scores.shift(); // 先頭から削除

  scores.push(75); // 末尾に追加
  scores.pop(); // 末尾から削除 */

  /* sum = 0;

  scores.forEach((score) => {
    sum += score;
  })

  console.log(`Sum: ${sum}`);
  console.log(`Average: ${sum / scores.length}`); */
}

/* {
  const scores = {
    math : 80,
    english : 90
  };

  // console.log(scores['math']);
  // console.log(scores.math);
  // scores.math = 88;
  // console.log(scores);

  // scores.physics = 70;
  // delete scores.english;
  // console.log(scores);

  let sum = 0;

  scores.physics = 70;

  const entries = Object.entries(scores);  //オブジェクトから、それぞれのプロパティを配列にする
  console.log(entries);

  entries.forEach((prop) =>  {
    // console.log(prop);
    sum += prop[1];
    console.log(`${prop[0]} : ${prop[1]}`);
  })

  console.log(`sum : ${sum}`);
  console.log(`average : ${sum / entries.length}`);

} */

/* {
  const scores = [70, 90, 80, 85];

  scores.splice(2, 0, 77, 88);

  const deleted = scores.splice(3, 1);
  // 削除した要素は１つでも配列になる

  scores.splice(2, 2, 30);

  console.log(scores);
  console.log(deleted);
  console.log(scores);

} */

/* {
  // const names = ['Taro', 'Jiro', 'Saburo'];

  // console.log(names.join('|')); // Taro|Jiro|Saburo
  // console.log(names.join()); // Taro, ...
  // console.log(names.join('')); // TaroJiro ...

  const names = 'Taro|Jiro|Saburo'; //配列に変換
  console.log(names.split('|'));

} */

/* {
  const prices =[100, 150, 200];

  // const pricesWithTax = [];
  // prices.forEach((price) => {
  //   pricesWithTax.push(price * 1.1);
  // })
  // ↓↓
  // const priceWithTax = prices.map((price) => {
  //   return price * 1.1;
  // });

  // console.log(priceWithTax);

  // const priceOver150 = [];
  // prices.forEach((price) => {
  //   if(price >= 150) {
  //     priceOver150.push(price);
  //   }
  // })
  // ↓↓
  // const priceOver150 = prices.filter((price) => {
  //   return price >= 150;
  // })

  // console.log(priceOver150);

} */

/* {
  const scores = [70, 90, 80, 85];
  const [first, second, third, fourth] = scores; //　分割代入
  // ↑↑ 配列ではない

  console.log(first);
  console.log(second);
  console.log(third);
  console.log(fourth);
} */

/* {
  let start = 'Tokyo';
  let goal = 'Osaka';

  // let temp = '';
  // temp = start;
  // start = goal;
  // goal = temp;
  // ↓↓
  [goal, start] = [start, goal]; // 分割代入で入れ替え

  console.log(start);
  console.log(goal);
} */

/* {
  const scores = [70, 90, 80, 85];
  const [first, ...others] = scores; // レスト構文

  console.log(first);
  console.log(others);
} */

/* {
  const moreScores = [77, 88];
  const scores = [70, 90, 80, 85, ...moreScores]; // スプレッド構文

  const [first, ...others] = scores; // レスト構文

  console.log(first);
  console.log(others);
} */

/* {
  const moreScores = {
    shiro: 77,
    goro: 88
  }
  const scores = {
    taro: 80,
    jiro: 70,
    saburo: 90,
    ...moreScores
  }
  // const {taro, jiro, saburo} = scores;
  const {taro, ...others} = scores;

  console.log(taro);
  console.log(others);
} */

{
  // let num = 10;
  // const numBackup = num;
  // num = 99;

  // console.log(num);
  // console.log(numBackup);

  // const nums = [10, 20, 30];
  // const numsBackup = nums;
  // nums[0] = 99;

  // console.log(nums);
  // console.log(numsBackup);  //配列の場合は値そのものを指し示す
  // ↓↓
  const nums = [10, 20, 30];
  const numsBackup = [...nums];
  nums[0] = 99;

  console.log(nums);
  console.log(numsBackup);

}