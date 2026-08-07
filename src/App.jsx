import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import Contact from './pages/Contact';
import About from './pages/About';
import Stack from './pages/Stack';

function App() {
  const [currentRoute, setCurrentRoute] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '') || 'home';
      setCurrentRoute(hash);
      window.scrollTo(0, 0);
    };

    // Initialize
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route) => {
    window.location.hash = `#/${route}`;
  };

  const renderPage = () => {
    switch (currentRoute) {
      case 'home':
        return <Home navigateTo={navigateTo} />;
      case 'services':
        return <Services navigateTo={navigateTo} />;
      case 'work':
        return <Work navigateTo={navigateTo} />;
      case 'contact':
        return <Contact navigateTo={navigateTo} />;
      case 'about':
        return <About />;
      case 'stack':
        return <Stack setActivePage={navigateTo} />;
      default:
        return <Home navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="bg-background min-h-screen flex flex-col font-body-md text-body-md antialiased selection:bg-primary-fixed selection:text-on-background">
      <Navbar currentRoute={currentRoute} navigateTo={navigateTo} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer currentRoute={currentRoute} navigateTo={navigateTo} />
    </div>
  );
}

export default App;
