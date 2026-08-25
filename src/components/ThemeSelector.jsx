import React, { useState, useRef, useEffect } from 'react';
import { Palette, Sun, Droplets, Flame, Zap, Leaf, Check, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const THEME_OPTIONS = [
  { key: 'original', label: 'Original Yellow', Icon: Palette  },
  { key: 'light',    label: 'Light Mode',       Icon: Sun      },
  { key: 'aqua',     label: 'Aqua Theme',       Icon: Droplets },
  { key: 'fire',     label: 'Fire Theme',        Icon: Flame    },
  { key: 'cyber',    label: 'Cyber Theme',       Icon: Zap      },
  { key: 'nature',   label: 'Nature Theme',      Icon: Leaf     },
];

function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onEscape = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('keydown', onEscape);
    return () => { document.removeEventListener('mousedown', onClickOutside); document.removeEventListener('keydown', onEscape); };
  }, []);

  const current = THEME_OPTIONS.find((o) => o.key === theme) || THEME_OPTIONS[0];
  const CurrentIcon = current.Icon;

  return (
    <div ref={ref} className="relative" style={{ zIndex: 60 }}>
      {/* Trigger */}
      <button
        id="theme-selector-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Switch theme"
        onClick={() => setOpen((p) => !p)}
        className="flex items-center gap-1 font-label-bold text-label-bold uppercase text-on-background brutal-border-sm px-sm py-1 bg-background hover:bg-primary-container hover:text-on-background transition-colors cursor-pointer"
        style={{ lineHeight: '1' }}
      >
        <CurrentIcon size={14} strokeWidth={2.5} />
        <span className="hidden sm:inline">Theme</span>
        <ChevronDown
          size={12}
          strokeWidth={3}
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.15s ease' }}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          role="listbox"
          aria-label="Select theme"
          className="absolute right-0 top-[calc(100%+6px)] bg-background brutal-border brutal-shadow-sm min-w-[192px] flex flex-col"
          style={{ zIndex: 60 }}
        >
          {/* Header */}
          <div
            className="px-md py-xs border-b-2 border-on-background font-label-bold text-label-bold uppercase text-on-background tracking-widest"
            style={{ fontSize: '10px', opacity: 0.55 }}
          >
            Theme
          </div>

          {THEME_OPTIONS.map(({ key, label, Icon }) => {
            const isActive = theme === key;
            return (
              <button
                key={key}
                role="option"
                aria-selected={isActive}
                onClick={() => { setTheme(key); setOpen(false); }}
                className={`flex items-center gap-sm px-md py-sm font-label-bold uppercase text-left cursor-pointer border-none transition-colors w-full ${
                  isActive
                    ? 'text-on-primary-container'
                    : 'bg-background text-on-background hover:bg-surface-container'
                }`}
                style={{
                  fontSize: '12px',
                  backgroundColor: isActive ? 'var(--color-primary-container)' : undefined,
                  color: isActive ? 'var(--color-on-primary-container)' : undefined,
                }}
              >
                {/* Radio dot */}
                <span
                  className="w-3 h-3 rounded-full flex-shrink-0 brutal-border-sm"
                  style={{
                    backgroundColor: isActive ? 'var(--color-on-primary-container)' : 'transparent',
                    borderColor: isActive ? 'var(--color-primary-container)' : 'var(--color-border)',
                  }}
                />
                <Icon size={13} strokeWidth={2.5} className="flex-shrink-0" />
                <span className="flex-grow">{label}</span>
                {isActive && <Check size={13} strokeWidth={3} className="flex-shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ThemeSelector;
