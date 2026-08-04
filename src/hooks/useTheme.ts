import { useCallback, useEffect, useState } from 'react';
import type { Theme } from '../types';

const STORAGE_KEY = 'ij-portfolio-theme';
const DEFAULT_THEME: Theme = 'light';

const isTheme = (value: string | null): value is Theme => value === 'light' || value === 'dark';

const readStoredTheme = (): Theme => {
  if (typeof window === 'undefined') return DEFAULT_THEME;
  return isTheme(window.localStorage.getItem(STORAGE_KEY))
    ? (window.localStorage.getItem(STORAGE_KEY) as Theme)
    : DEFAULT_THEME;
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(readStoredTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggleTheme };
};
