import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  const toggle = () => setTheme(isDark ? 'light' : 'dark');

  return (
    <button
      id="theme-toggle"
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      onClick={toggle}
      className="flex items-center gap-sm font-label-bold text-label-bold uppercase text-on-background brutal-border-sm px-sm py-1 bg-background hover:bg-primary-container hover:text-on-primary transition-colors cursor-pointer"
      style={{ lineHeight: '1' }}
    >
      {/* Toggle pill track */}
      <span
        aria-hidden="true"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          width: '36px',
          height: '18px',
          borderRadius: '9999px',
          backgroundColor: isDark ? 'var(--color-primary)' : 'var(--color-surface-variant)',
          border: '2px solid var(--color-border)',
          position: 'relative',
          flexShrink: 0,
          transition: 'background-color 0.2s ease',
        }}
      >
        <span
          style={{
            position: 'absolute',
            width: '12px',
            height: '12px',
            borderRadius: '9999px',
            backgroundColor: 'var(--color-surface-lowest)',
            left: isDark ? '18px' : '2px',
            transition: 'left 0.2s ease',
          }}
        />
      </span>

      {/* Icon */}
      {isDark ? (
        <Moon size={14} strokeWidth={2.5} />
      ) : (
        <Sun size={14} strokeWidth={2.5} />
      )}

      {/* Label — hidden on very small screens */}
      <span className="hidden sm:inline">
        {isDark ? 'Dark Mode' : 'Light Mode'}
      </span>
    </button>
  );
}

export default ThemeToggle;
