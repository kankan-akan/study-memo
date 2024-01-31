'use strict';

{
  /* document.querySelector('button').addEventListener('click', () => {
    console.log('clicked');
    // document.querySelector('p').textContent = ('こんにちは');

    // ボタン要素の代入
    document.querySelector('p').textContent = document.querySelector('button').textContent

    document.querySelector('p').classList.add('pink-bg', 'red-border');

    document.querySelector('p').classList.remove('pink-bg');

  }); */

  document.querySelector('button').addEventListener('click', () => {
    console.log(document.querySelector('p').classList.contains('pink-bg'));  // false

    /* if (document.querySelector('p').classList.contains('pink-bg') === false) {
      document.querySelector('p').classList.add('pink-bg');
    } else {
      document.querySelector('p').classList.remove('pink-bg');
    } */
    // ↓↓
    document.querySelector('p').classList.toggle('pink-bg'); // pink-bgが付いてなかったらつける、付いていたらはずす
  });

  
}