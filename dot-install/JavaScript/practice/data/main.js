'use strict';

{
  // let isDevMode = true;
  // const pElement = document.querySelector('p');
  // const buttonElement = document.querySelector('button');

  /* buttonElement.addEventListener(`click`, () => {
    if(isDevMode === true) {
      pElement.textContent = 'Dev mode is Off.';
      // isDevMode = false;
    } else {
      pElement.textContent = 'Dev mode is On.';
      // isDevMode = true;
    }
    isDevMode = !isDevMode;
  }); */

  /* buttonElement.addEventListener(`click`, () => {
    if (confirm('Are you sure?')) {
      if(isDevMode) {
        pElement.textContent = 'Dev mode is Off.';
      } else {
        pElement.textContent = 'Dev mode is On.';
      }
      isDevMode = !isDevMode;
    }
  }); */

  /* buttonElement.addEventListener(`click`, () => {
    if (!confirm('Are you sure?')) {
      return;
    }

    if(isDevMode) {
      pElement.textContent = 'Dev mode is Off.';
    } else {
      pElement.textContent = 'Dev mode is On.';
    }
    isDevMode = !isDevMode;
  }); */

  /* const name = prompt('Your name?');
  if (name !== '') {
    console.log(`Hi, ${name}`);
  }else {
    console.log('Hi, guest!');
  } */

  /* // undefined
  // let x;
  // console.log(x); // 定義されていない変数もundefined;

  // const scores = [70, 90, 80];
  // console.log(scores[100]);

  const score = {math: 80, english: 90};
  // console.log(score.history);
  if (score.history === undefined) {
    console.log('History score not defined!');
  } */

  /* // null
  const score = {
    math: 80,
    english: 90,
    physics: null,
  };
  if (score.physics === null) {
    console.log('Physics score is null!');
  } */

  // typeof
  console.log(typeof 5); // number
  console.log(typeof 'Hello'); // string
  console.log(typeof [5, 2]); // object
  console.log(typeof {math: 80, english: 90}); // object
  console.log(typeof true); // boolean
  console.log(typeof undefined); // undefined
  console.log(typeof null); // object
}