'use strict';

{
  /* const stirng = prompt('Any message?');
  console.log(string.length);
  console.log(string[0]);

  string[0] = 'w'; // 特定の文字にアクセス出来るが、読み取り専用の記法:[]なので書き換えはできない。
  // forEach()やpush()も使えない */

  /* const string = prompt('Name?');
  if(string.toLowerCase().trim() === 'taro') {
  // if(string.toUpperCase() === 'taro') {
    console.log('Correct!');
  } else {
    console.log('Wrong!');
  } */

  const emails = [
    'taro@example.com',
    'kintaro@example.com',
    'kojiro@example.com',
  ];

  /* emails.forEach((email) => {
    // if(email.includes('taro') === true) {
    //   console.log(email);
    // }

    if(email.indexOf('taro') === 0) { // 文字列が最初に出現する文字列の位置のインデックスを出力
      console.log(email);
    }

    if (email.startsWith('taro') === true) { // 特定の文字列で始まるかどうか
      console.log(email);
    }
  }) */

  /* emails.forEach((email) => {
    const loc = email.indexOf('@');
    console.log(email.slice(0, loc));
    // console.log(email.substring(0, loc));
  }) */

  /* emails.forEach((email) => {
    console.log(email.replace('@example.com', ''));

    // const items = email.split('@');
    // console.log(items[0]);
  }) */

  const counts = [6, 12, 8, 15];

  /* counts.forEach((count) => {
    // let bar = '';
    // for(let i = 0; i < count; i++) {
    //   // bar = bar + '*';
    //   bar += '*';
    // }
    // ↓
    const bar = '*'.repeat(count);
    console.log(bar);
  }); */

  counts.forEach((count) => {
    const bar = '*'.repeat(count);
    // const label = String(count).padStart(2, ' ');
    const label = String(count).padEnd(2, ' ');
    console.log(`${label}:${bar}`);
  })

  
}