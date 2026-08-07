import React from 'react';

function Footer({ currentRoute, navigateTo }) {
  return (
    <footer className="w-full border-t-4 border-on-background bg-on-background mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full px-margin-mobile md:px-margin-desktop py-xl gap-lg max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-sm">
          <button 
            onClick={() => navigateTo('home')} 
            className="font-display-lg text-headline-lg font-black text-primary-fixed dark:text-primary-fixed uppercase tracking-tighter hover:scale-105 transition-transform cursor-pointer bg-transparent border-none text-left p-0"
          >
            3xcreative
          </button>
          <p className="font-body-md text-body-md text-surface-variant">
            © {new Date().getFullYear()} 3xcreative. Built for Speed.
          </p>
        </div>
        <nav className="flex flex-wrap gap-md md:gap-lg font-body-md text-body-md">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-surface-variant hover:text-primary-fixed transition-colors">
            Github
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-surface-variant hover:text-primary-fixed transition-colors">
            LinkedIn
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-surface-variant hover:text-primary-fixed transition-colors">
            Twitter
          </a>
          <button onClick={() => navigateTo('services')} className="text-left text-surface-variant hover:text-primary-fixed transition-colors cursor-pointer bg-transparent border-none p-0">
            Services
          </button>
          <button onClick={() => navigateTo('stack')} className="text-left text-surface-variant hover:text-primary-fixed transition-colors cursor-pointer bg-transparent border-none p-0">
            Stack
          </button>
          <button onClick={() => navigateTo('about')} className="text-left text-surface-variant hover:text-primary-fixed transition-colors cursor-pointer bg-transparent border-none p-0">
            About
          </button>
          <button onClick={() => navigateTo('contact')} className="text-left text-surface-variant hover:text-primary-fixed transition-colors cursor-pointer bg-transparent border-none p-0">
            Contact
          </button>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
