import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

/* Palette swatches shown in the dropdown */
const THEME_OPTIONS = [
  {
    key: 'white-golden',
    label: 'White + Golden',
    bgSwatch: '#F7F7F5',
    accentSwatch: '#B09225',
  },
  {
    key: 'dark-blue-golden',
    label: 'Dark Blue + Golden',
    bgSwatch: '#0B141B',
    accentSwatch: '#D7B23E',
  },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  /* Close on outside click or Escape */
  useEffect(() => {
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onEscape = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('keydown', onEscape);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('keydown', onEscape);
    };
  }, []);

  const current = THEME_OPTIONS.find((o) => o.key === theme) || THEME_OPTIONS[0];

  return (
    <div ref={ref} className="relative" style={{ zIndex: 60 }}>
      {/* Trigger button */}
      <button
        id="theme-toggle"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Current theme: ${current.label}. Click to switch theme.`}
        onClick={() => setOpen((p) => !p)}
        className="flex items-center gap-sm font-label-bold text-label-bold uppercase text-on-background brutal-border-sm px-sm py-1 bg-background hover:bg-surface-container transition-colors cursor-pointer"
        style={{ lineHeight: '1' }}
      >
        {/* Dual-swatch indicator */}
        <span
          aria-hidden="true"
          style={{
            display: 'inline-flex',
            width: '22px',
            height: '14px',
            border: '2px solid var(--color-border)',
            flexShrink: 0,
            overflow: 'hidden',
          }}
        >
          <span style={{ flex: 1, backgroundColor: current.bgSwatch }} />
          <span style={{ flex: 1, backgroundColor: current.accentSwatch }} />
        </span>

        <span className="hidden sm:inline" style={{ fontSize: '11px' }}>
          {current.label}
        </span>

        <ChevronDown
          size={12}
          strokeWidth={3}
          style={{
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.15s ease',
            flexShrink: 0,
          }}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          role="listbox"
          aria-label="Select theme"
          className="theme-dropdown"
        >
          {/* Header label */}
          <div
            className="px-md py-xs border-on-background font-label-bold uppercase text-on-background tracking-widest"
            style={{
              fontSize: '10px',
              opacity: 0.45,
              borderBottom: '2px solid var(--color-border)',
            }}
          >
            Theme
          </div>

          {THEME_OPTIONS.map(({ key, label, bgSwatch, accentSwatch }) => {
            const isActive = theme === key;
            return (
              <button
                key={key}
                role="option"
                aria-selected={isActive}
                onClick={() => { setTheme(key); setOpen(false); }}
                className="theme-option"
                style={
                  isActive
                    ? {
                        backgroundColor: 'var(--color-primary-container)',
                        color: 'var(--color-on-primary-container)',
                      }
                    : {}
                }
              >
                {/* Dual swatch */}
                <span
                  aria-hidden="true"
                  style={{
                    display: 'inline-flex',
                    width: '22px',
                    height: '14px',
                    border: isActive
                      ? '2px solid var(--color-on-primary-container)'
                      : '2px solid var(--color-border)',
                    flexShrink: 0,
                    overflow: 'hidden',
                  }}
                >
                  <span style={{ flex: 1, backgroundColor: bgSwatch }} />
                  <span style={{ flex: 1, backgroundColor: accentSwatch }} />
                </span>

                <span style={{ flex: 1 }}>{label}</span>

                {isActive && (
                  <Check size={12} strokeWidth={3} style={{ flexShrink: 0 }} />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ThemeToggle;
