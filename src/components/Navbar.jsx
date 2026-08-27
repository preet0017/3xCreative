import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

function Navbar({ currentRoute, navigateTo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Services', route: 'services' },
    // { label: 'Work', route: 'work' },
    // { label: 'Tech Stack', route: 'stack' },
    { label: 'About', route: 'about' },
    { label: 'Contact', route: 'contact' }
  ];

  const handleNav = (route) => {
    navigateTo(route);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full top-0 sticky z-50 border-b-4 border-on-background bg-background">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-md max-w-[1440px] mx-auto">
        <button
          onClick={() => handleNav('home')}
          className="font-display-lg text-headline-md font-black text-on-background uppercase tracking-tighter hover:scale-105 transition-transform cursor-pointer bg-transparent border-none p-0"
        >
          3xcreative
        </button>

        <nav className="hidden md:flex items-center gap-lg">
          {navItems.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.route}
                onClick={() => handleNav(item.route)}
                className={`font-label-bold text-label-bold uppercase transition-colors cursor-pointer bg-transparent border-none p-0 ${
                  isActive
                    ? 'text-primary border-b-4 border-primary pb-1'
                    : 'text-on-background hover:text-primary hover:underline decoration-4'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop right section: ThemeToggle + Hire Us */}
        <div className="hidden md:flex items-center gap-md">
          <ThemeToggle />
          <button
            onClick={() => handleNav('contact')}
            className="font-label-bold text-label-bold uppercase bg-primary-container text-on-primary brutal-border brutal-shadow px-lg py-sm active:translate-x-[2px] active:translate-y-[2px] transition-all cursor-pointer"
          >
            Hire Us
          </button>
        </div>

        {/* Mobile: ThemeToggle + Hamburger */}
        <div className="md:hidden flex items-center gap-sm">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white brutal-border-sm p-1 bg-primary-container brutal-shadow-sm active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-b-4 border-on-background bg-background w-full flex flex-col items-stretch p-lg gap-md absolute left-0 top-[calc(100%)] brutal-shadow z-40">
          {navItems.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.route}
                onClick={() => handleNav(item.route)}
                className={`font-headline-md text-headline-md uppercase text-left py-2 border-b-2 border-on-background/10 cursor-pointer bg-transparent ${
                  isActive ? 'text-primary pl-2 border-l-4 border-l-primary' : 'text-on-background'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <button
            onClick={() => handleNav('contact')}
            className="w-full bg-primary-container text-on-primary font-headline-md text-headline-md uppercase py-md brutal-border brutal-shadow active:translate-x-[2px] active:translate-y-[2px] transition-all cursor-pointer"
          >
            Hire Us
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
