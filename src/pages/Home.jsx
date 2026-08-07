import React from 'react';

function Home({ navigateTo }) {
  const services = [
    {
      title: 'Web Apps',
      icon: 'web',
      description: 'React, Vue, and vanilla JS experiences optimized for sub-second load times. Zero unnecessary dependencies.',
      tags: ['React', 'Next.js']
    },
    {
      title: 'Mobile Apps',
      icon: 'smartphone',
      description: 'Native and cross-platform applications that feel instantly responsive. We don\'t compromise on frame rates.',
      tags: ['React Native', 'Swift']
    },
    {
      title: 'Infrastructure',
      icon: 'dns',
      description: 'Cloud deployments, CI/CD pipelines, and database architecture built to scale infinitely without breaking a sweat.',
      tags: ['AWS', 'Docker']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-container brutal-border-sm border-b-4 w-full relative overflow-hidden">
        {/* Grid Background Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(#1a1c1c 2px, transparent 2px), linear-gradient(90deg, #1a1c1c 2px, transparent 2px)", backgroundSize: "64px 64px" }}></div>
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-xl md:py-[120px] relative z-10 grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-8 flex flex-col gap-lg items-start">
            <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-background uppercase m-0 p-0">
              WE BUILD FAST.
            </h1>
            <p className="font-body-lg text-body-lg text-on-background max-w-2xl bg-surface-container-lowest brutal-border p-md brutal-shadow-sm">
              High-performance code for people who hate slow websites. We don't do fluff. We build scalable, bulletproof digital infrastructure.
            </p>
            <div className="flex flex-wrap gap-md mt-sm">
              <button 
                onClick={() => navigateTo('contact')}
                className="font-label-bold text-label-bold uppercase bg-surface-container-lowest text-on-background brutal-border brutal-shadow px-xl py-md active:translate-x-[2px] active:translate-y-[2px] active:shadow-[6px_6px_0px_0px_#1a1c1c] transition-all cursor-pointer"
              >
                Hire Us
              </button>
              <button 
                onClick={() => navigateTo('services')}
                className="font-label-bold text-label-bold uppercase bg-on-background text-surface-container-lowest brutal-border brutal-shadow px-xl py-md hover:bg-surface-variant hover:text-on-background transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-[6px_6px_0px_0px_#1a1c1c] cursor-pointer"
              >
                See the Stack
              </button>
            </div>
          </div>
          <div className="md:col-span-4 hidden md:block">
            <div className="w-full aspect-square bg-surface-container-lowest brutal-border brutal-shadow relative overflow-hidden">
              <img 
                className="w-full h-full object-cover" 
                alt="Neo-brutalist 3D server architecture" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzkb2Emmt6OoWT_h2VCnFH3B7dOVaWMO5AGvvgquQOXVXIC7ProCvaPyAjc87hDXCdiiUtAJJBg8kG2WdsMMOZQ5ke3sMl6OW05ebzX7QOLWJk7WByzj3zPRXFNQhvDDhgMZrm9aShgpZQ3n1zCATe9wEPuAr6S2WUudETfJgUNq4jl2HWBI43aKPCL8IqbNcPEQqLvLhJtpceXTHahoID4U5VZ1jjd6hmile4dDfzE-xsGObehcdHcw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services / Features Section */}
      <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="flex items-center gap-md mb-xl">
          <div className="w-4 h-4 bg-primary-container brutal-border"></div>
          <h2 className="font-headline-lg text-headline-lg text-on-background uppercase m-0">Core Services</h2>
          <div className="h-1 flex-grow bg-on-background ml-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {services.map((svc, i) => (
            <div key={i} className="bg-surface-container-lowest brutal-border brutal-shadow flex flex-col p-0 group hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform duration-150">
              <div className="p-md border-b-4 border-on-background bg-primary-container group-hover:bg-on-background transition-colors flex items-center justify-start">
                <span className="material-symbols-outlined text-headline-md group-hover:text-primary-container">
                  {svc.icon}
                </span>
              </div>
              <div className="p-lg flex flex-col gap-sm flex-grow">
                <h3 className="font-headline-md text-headline-md text-on-background uppercase">{svc.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-md">
                  {svc.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-xs">
                  {svc.tags.map((tag) => (
                    <span key={tag} className="bg-on-background text-surface-container-lowest font-code text-code px-2 py-1 rounded-none">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-xl px-margin-mobile md:px-margin-desktop bg-surface-container border-y-4 border-on-background">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-xl">
          <h3 className="font-headline-md text-headline-md text-on-background uppercase whitespace-nowrap">Trusted By</h3>
          <div className="flex-grow w-full grid grid-cols-2 md:grid-cols-4 gap-md">
            {['ACME', 'GLOBEX', 'SOYUZ', 'INITECH'].map((logo) => (
              <div key={logo} className="h-16 brutal-border bg-surface-container-lowest flex items-center justify-center font-display-lg text-headline-md font-black grayscale opacity-70 hover:opacity-100 transition-opacity">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
