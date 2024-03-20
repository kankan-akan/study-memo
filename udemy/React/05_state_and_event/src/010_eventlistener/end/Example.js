const Example = () => {
  const clickHandler = () => {
    alert('ボタンがクリックされました。');
  }
  
  const clickHandler2 = () => {
    console.log('ボタンがクリックされました。');
  }

  // const hello = () => { return 'hello react'};
  
  return (
    <>
    {/* POINT イベントハンドラの末尾に()は付けない 関数が自動で実行されてしまう*/}
    {/* POINT onClickのCは大文字 */}
      <button onClick={clickHandler}>クリックしてね</button>
      <button onClick={clickHandler2}>クリックしてね</button>
      {/* {hello} */}
    </>
  );
};

export default Example;
