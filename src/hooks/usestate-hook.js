import React, { useState } from 'react';

export default function UsestateHook() {
  //setting a value like this makes the changes in the very first render of the component
  const [count, setCount] = useState(() => {
    console.log('aa');
    return 4;
  });

  function increaseCount() {
    //setCount(count + 1);

    //this method allows to access the previous count
    setCount((previousCount) => previousCount + 1);
  }

  function decreaseCount() {
    //setCount(count - 1);
    setCount((previousCount) => previousCount - 1);
  }

  return (
    <>
      <button onClick={decreaseCount}> - </button>
      <span>{count}</span>
      <button onClick={increaseCount}> + </button>
    </>
  );
}
