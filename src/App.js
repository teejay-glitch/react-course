import React from 'react';
import { ThemeProvider } from './context/themeContext';
// import UsecontextHook from './hooks/usecontext-hook';
import UserefHook from './hooks/useref-hook';
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
        {/* <UsecontextHook /> */}

        {/* useRef */}
        <UserefHook />
      </ThemeProvider>
    </div>
  );
}

export default App;
