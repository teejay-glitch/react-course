import React, { useState } from 'react';

export const ThemeContext = React.createContext();

export function ThemeProvider({ children }) {
  const [theme, settheme] = useState('Dark');

  const toggleTheme = () => {
    settheme((previousTheme) => (previousTheme === 'Dark' ? 'Light' : 'Dark'));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
