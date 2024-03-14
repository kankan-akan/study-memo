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

  /* document.querySelector('button').addEventListener('click', () => {
    console.log(document.querySelector('p').classList.contains('pink-bg'));  // false

    // if (document.querySelector('p').classList.contains('pink-bg') === false) {
    //   document.querySelector('p').classList.add('pink-bg');
    // } else {
    //   document.querySelector('p').classList.remove('pink-bg');
    // }
    // ↓↓
    document.querySelector('p').classList.toggle('pink-bg'); // pink-bgが付いてなかったらつける、付いていたらはずす
  }); */

  /* document.querySelector('button').addEventListener('click', () => {
    document.querySelector('li').textContent = 'Changed!'; // 最初の要素しか取得出来ない

    // document.querySelectorAll('li').forEach((li) => {
    //   li.textContent = 'Changed!';
    // }):

    // document.querySelectorAll('.target').forEach((li) => {
    //   li.textContent = 'Changed!';
    // });

    // document.querySelector('#second').textContent = 'Changed!';
  }); */

  /* document.querySelector('button').addEventListener('click', () => {
    const liElement = document.createElement('li');
    liElement.textContent = 'Hanako'; // constで宣言されてもオブジェクトのプロパティは変更可能
    document.querySelector('ul').insertBefore(
      liElement,
      document.querySelector('#second')
    ); // 取得した要素の前に追加

    if (confirm('Sure?') === true) {
      document.querySelector('#second').remove();
    }
  }); */

  /* document.querySelector('button').addEventListener('click', () => {
    // alert(document.querySelector('input').value);  // input, textareaの値にはvalueを使ってアクセスする
    alert(document.querySelector('textarea').value);
    document.querySelector('textarea').value = '';
  }); */

  /* document.querySelector('button').addEventListener('click', () => {
    alert(document.querySelector('select').value);
  }); */

  /* document.querySelector('button').addEventListener('click', () => {
    document.querySelectorAll('input').forEach((radio) => { //  querySelecrtorAllはforEachを使用できる。
      if(radio.checked === true) {
        alert(radio.value);
      }
    })
  }); */

  /* document.querySelector('button').addEventListener('click', () => {
    const colors = []
    document.querySelectorAll('input').forEach((checkbox) => {
      if(checkbox.checked === true) {
        colors.push(checkbox.value);
      }
    })
    alert(colors.join(','));
  }); */

  /* document.querySelector('input').addEventListener('input', () => {
    // inputイベント→text, textarea, select
    // changeイベント→radio, checkbox
    const pElement = document.querySelector('p');
    const inputElement = document.querySelector('input');
    pElement.textContent = inputElement.value;
    // pElement.textContent = inputElement.value.length;
  }) */

  /* const colors = [];
  const checkboxElement = document.querySelectorAll('input');
  const display = document.querySelector('p');

  checkboxElement.forEach((item) => {
    item.addEventListener('click', () => {
      if(item.checked === true) {
        colors.push(item.value);
      };
      console.log(colors);
      display.textContent = colors;
    });
  }); */

  /* document.querySelector('input').addEventListener('focus', () => {
    document.querySelector('p').textContent = 'English only!';
  });
  // focusで表示させる

  document.querySelector('input').addEventListener('blur', () => {
    document.querySelector('p').textContent = '';
  });
  // focusを外した時に表示を消す

  document.querySelector('input').focus(); // 最初からfocusを当てたい時 */

  /* document.addEventListener('keydown', (e) => { // 引数を設定し値を渡す
    document.querySelector('p').textContent = e.key;
  }); */

  /* document.addEventListener('mousemove', (e) => {
    document.querySelector('p').textContent = `X: ${e.clientX} Y: ${e.clientY}`;
  }); */

  /* document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();  // 規定の動作(ページのリロード)を防ぐ
    document.querySelector('p').textContent = document.querySelector('input').value;
  }); */

  // 属性の操作
  // 属性 → src="...", href="...", class="...", style="..."
  // document.querySelector('img').src = 'cat.png';

  document.querySelector('button').addEventListener('click', () => {
    // document.querySelector('p').style = 'font-size: 24px';
    document.querySelector('p').style.fontSize = '24px';
  });

}