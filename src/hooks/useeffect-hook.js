import React, { useEffect, useState } from 'react';

export default function UseeffectHook() {
  //example 1
  //   const [count, setCount] = useState(1);

  //   useEffect(() => {
  //     console.log('Only run on mount');
  //   });

  //   const handleClick = () => {
  //     setCount((previousCount) => previousCount + 1);
  //   };

  //   return (
  //     <div>
  //       <button onClick={handleClick}>+</button>
  //       {count}
  //     </div>
  //   );

  //example 2
  const [width, setwidth] = useState(window.innerWidth);

  const handleScreenChange = () => {
    setwidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleScreenChange);

    return () => {
      window.removeEventListener('resize', handleScreenChange);
    };
  }, []);

  return <div>{width}</div>;
}
