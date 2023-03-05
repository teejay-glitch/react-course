import React, { useState, useEffect, useRef } from 'react';

export default function UserefHook() {
  const [name, setName] = useState('');

  //--THIS IS REFERENCING A DOM ELEMENT
  //const inputRef = useRef();

  //   function focus() {
  //     inputRef.current.focus();
  //   }

  //   return (
  //     <>
  //       {/* THIS IS USED TO REFERENCE THE DOM ELEMENTS */}
  //       <input ref={inputRef} type={'text'} value={name} onChange={(e) => setName(e.target.value)} />
  //       <div>
  //         My name is {name} and it used to be {inputRef.current}
  //       </div>
  //       <button onClick={focus}>Focus</button>
  //     </>
  //   );

  //--THIS IS SOTRING PREVIOUS VALUE OF STATE
  const previousName = useRef('');

  useEffect(() => {
    previousName.current = name;
  }, [name]);

  return (
    <>
      <input type={'text'} value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        My name is {name} and it used to be {previousName.current}
      </div>
    </>
  );
}
