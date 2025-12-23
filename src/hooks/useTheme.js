import { useEffect, useState } from 'react';

export default function useTheme() {
  const getInitialTheme = () => {
    const stored = localStorage.getItem('theme');
    return stored ? stored : 'dark';
  };
  useEffect(() => {
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

  document.documentElement.setAttribute('data-theme', systemTheme);
}, []);


  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
}
