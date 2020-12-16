import React, { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Go up!</button> <br />
      <button onClick={() => setCount(count - 1)}>Go down!</button>
    </div>
  );
};

export default Example;
