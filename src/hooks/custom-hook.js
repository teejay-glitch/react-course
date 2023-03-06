import React from 'react';
import useToggle from '../custom-hooks/useToggle';

export default function CustomHook() {
  const [value, setValue] = useToggle(false);

  return (
    <>
      {value ? <div style={{ background: 'green' }}>background</div> : <div style={{ background: 'red' }}>background</div>} <br />
      <button onClick={setValue}>Toggle theme</button>
    </>
  );
}
