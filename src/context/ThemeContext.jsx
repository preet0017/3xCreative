import React, { createContext, useContext, useState, useEffect } from 'react';

const THEMES = ['white-golden', 'dark-blue-golden'];

const THEME_LABELS = {
  'white-golden':     'White + Golden',
  'dark-blue-golden': 'Dark Blue + Golden',
};

const STORAGE_KEY = '3xcreative-theme';

const ThemeContext = createContext({
  theme: 'white-golden',
  setTheme: () => {},
  themes: THEMES,
  themeLabels: THEME_LABELS,
});

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && THEMES.includes(saved)) return saved;
    } catch { /* ignore */ }
    return 'white-golden';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(STORAGE_KEY, theme); } catch { /* ignore */ }
  }, [theme]);

  const setTheme = (t) => { if (THEMES.includes(t)) setThemeState(t); };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES, themeLabels: THEME_LABELS }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeContext;
