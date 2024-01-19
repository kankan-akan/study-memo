'use-strict';

{
// const scores = [
//   70,
//   90,
//   85
// ];

/*   console.log(scores[2]);
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

{
  const scores = [70, 90, 80, 85];

  scores.splice(2, 0, 77, 88);

  const deleted = scores.splice(3, 1);
  // 削除した要素は１つでも配列になる

  scores.splice(2, 2, 30);

  console.log(scores);
  console.log(deleted);
  console.log(scores);

}
