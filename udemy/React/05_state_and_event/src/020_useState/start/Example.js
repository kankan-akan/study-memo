import { useState } from "react";

const Example = () => {
  let valArry = useState("hello");
  return (
    <>
      <input
        type="text"
        onChange ={(e) => {
        const setFn = valArry[1];
          setFn(e.target.value)
        }} /> = {valArry[0]}
    </>
  );
};

export default Example;
