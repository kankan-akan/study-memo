const Example = () => {
  const ClickHandler = () => {
    alert('ボタンがクリックされました');
  }
  const ClickHandler2 = () => {
    console.log('clicked button.')
  }
  return (
    <>
      <button onClick={ClickHandler}>クリック</button>
      <button onClick={ClickHandler2}>クリック</button>
    </>
  );
};

export default Example;
