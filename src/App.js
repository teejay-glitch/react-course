import React from 'react';
import { ThemeProvider } from './context/themeContext';
import UsecontextHook from './hooks/usecontext-hook';
//import UseeffectHook from './hooks/useeffect-hook';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        {/* useState */}
        {/* <UsestateHook /> */}

        {/* useEffect */}
        {/* <UseeffectHook /> */}

        {/* useContext */}
        <UsecontextHook />
      </ThemeProvider>
    </div>
  );
}

export default App;
