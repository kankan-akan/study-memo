'use strict';

/* {
  class User {
  }

  const user1 = new User();
  user1.name = 'Taro'; // name←プロパティ
  user1.score = 70;

  const user2 = new User();
  user2.name = 'Jiro';
  user2.score = 80;
} */



/* {
  class User {
    // constructor(nameFromNew, scoreFromNew) {
    //   this.name = nameFromNew;
    //   this.score = scoreFromNew;
    // }
    // ↓
    constructor(name, score) {
      this.name = name;
      this.score = score;
    }
  }

  const user1 = new User('Taro', 70);
  const user2 = new User('JIro', 90);

  console.log(user1.name);
  console.log(user1.score);
  console.log(user2.name);
  console.log(user2.score);
} */



/* {
  class Score {
    constructor(subject, result) {
      this.subject = subject;
      this.result = result;
    }

    getGrade() {
      // let grade;
      // if(this.result >= 80) {
      //   grade = 'A';
      // }else{
      //   grade = 'B';
      // }
      // return grade;
      return this.result >=80 ? 'A' : 'B';
    }

    getScoreString() {
      return `${this.subject} ${this.result} ${this.getGrade()}`;
    }
  }

  class EnglishScore extends Score { // クラスの継承
    constructor(result) {
      super('English', result); // super()でスーパークラス(親クラス)を実行
    }
  }

  class MathScore extends Score {
    constructor(result) {
      super('Math', result);
    }

    getGrade() { // メソッドのオーバーライド(親クラスのメソッドを上書き)
      return this.result >=50 ? 'A' : 'B';
    }
  }

  class User {
    constructor(name, score) {
      this.name = name;
      this.score = score;
    }

    getUserString() {
      return `${this.name} ${this.score.getScoreString()}`;
    }
  }

  const user1 = new User('Taro', new MathScore(70));
  const user2 = new User('Jiro', new EnglishScore(90));

  console.log(user1.getUserString());
  console.log(user2.getUserString());
} */



/* {
  class User {
    name; // フィールド：プロパティとなる変数の一覧。変数を初期化する
    score;
    static count = 0; // クラス全体で１つの値だけを管理する。通常の記述だとインスタンスごとにcountプロパティが作られる。

    constructor(name, score) {
      this.name = name;
      this.score = score;
      User.count++;
    }

    getUserString() {
      return `${this.name} ${this.score}`;
    }
  }

  // let count = 0;
  const user1 = new User('Taro', 70);
  // count++;
  const user2 = new User('Jiro', 80);
  // count++;
  // console.log(count);
  console.log(User.count);

  console.log(user1.getUserString());
  console.log(user2.getUserString());
} */


/* {
  class User {
    name;
    score;
    static count = 0;

    constructor(name, score) {
      this.name = name;
      this.score = score;
      User.count++;
    }

    getUserString() {
      return `${this.name} ${this.score}`;
    }

    static getUserCountString() {
      return `${User.count} instance(s) created.`;
    }
  }

  const user1 = new User('Taro', 70);
  const user2 = new User('Jiro', 80);
  // console.log(User.count);
  console.log(User.getUserCountString());

  console.log(user1.getUserString());
  console.log(user2.getUserString());
} */

/* {
  class User {
    name;
    _score;

    constructor(name, score) {
      this.name = name;
      this._score = score;
    }

    get score() {
      return this._score; // ゲッターのscoreをまた実行してしまうので_scoreとする
    }

    set score(newValue) {
      if(newValue < 0 || newValue > 100) {
        console.log('Invalid value!');
        return; // 処理がこれ以降処理されないようにする
      }
      this._score = newValue;
    }
  }

  const user = new User('Taro', 70);
  // user.score = 100;
  user.score = 100000;
  console.log(user.score);
} */



{
  class User {
    name;
    #score;

    constructor(name, score) {
      this.name = name;
      this.#score = score;
    }

    get score() {
      return this.#score;
    }

    #isValueValid(newValue) {
        return newValue < 0 || newValue > 100 ? false : true;
    }

    set score(newValue) {
      if(this.#isValueValid(newValue) === false) {
        console.log('Invalid value!');
        return; // 処理がこれ以降処理されないようにする
      }
      this.#score = newValue;
    }
  }

  const user = new User('Taro', 70);
  // user.score = 100;
  user.#score = 100000; // クラス外からアクセスできない
  console.log(user.score);
  console.log(user.#isValueValid(50));
}