import { useState } from 'react';

const Example = () => {
  const [ countA, setCountA ] = useState(10);

  return(
    <>
      <button onClick={() => {
        setCountA(countA + 1)
      }}>ボタンA</button>
      <p>ボタンが{countA}回押されました</p>
    </>
  )
};

export default Example;
