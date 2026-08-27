import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sectionIds = ['hero', 'services', 'trusted-by', 'stack', 'faq', 'about', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.2, 0.4, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navigateTo = (route) => {
    const sectionMap = {
      home: 'hero',
      services: 'services',
      'trusted-by': 'trusted-by',
      //work: 'work',
      stack: 'stack',
      faq: 'faq',
      about: 'about',
      contact: 'contact'
    };

    const targetId = sectionMap[route] || 'hero';
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `#${targetId}`);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.replaceState(null, '', '#hero');
    }

    setActiveSection(targetId);
  };

  return (
    <ThemeProvider>
      <div className="bg-background min-h-screen flex flex-col font-body-md text-body-md antialiased selection:bg-primary-fixed selection:text-on-background">
        <Navbar currentRoute={activeSection} navigateTo={navigateTo} />
        <main className="flex-grow">
          <Home navigateTo={navigateTo} />
        </main>
        <Footer currentRoute={activeSection} navigateTo={navigateTo} />
      </div>
    </ThemeProvider>
  );
}

export default App;
