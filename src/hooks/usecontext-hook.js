import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

function UsecontextHook() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div style={theme === 'Light' ? { color: 'brown' } : { color: 'blue' }}>UseContext Test</div>
      <button onClick={toggleTheme}>Change Theme</button>
    </>
  );
}

export default UsecontextHook;
