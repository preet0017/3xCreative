import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MonitorSmartphone,
  Smartphone,
  ShoppingCart,
  Search,
  Server,
  Wrench
} from 'lucide-react';
import WorkPage from './Work';
import AboutPage from './About';
import ContactPage from './Contact';
import StackPage from './Stack';

function Home({ navigateTo }) {
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      title: 'Web Designing',
      icon: MonitorSmartphone,
      description: 'Modern, responsive and conversion-focused websites designed to reflect your brand and engage your audience.',
      tags: ['UI/UX', 'Figma']
    },
    {
      title: 'Responsive Design',
      icon: Smartphone,
      description: 'Mobile-first layouts that adapt perfectly across desktops, tablets and smartphones for the best user experience.',
      tags: ['Mobile First', 'Responsive']
    },
    {
      title: 'E-Commerce Websites',
      icon: ShoppingCart,
      description: 'Scalable online stores with secure payments, intuitive shopping experiences and complete store management.',
      tags: ['Shopify', 'WooCommerce']
    },
    {
      title: 'SEO Services',
      icon: Search,
      description: 'Improve search rankings, website performance and organic traffic using modern SEO best practices.',
      tags: ['SEO', 'Analytics']
    },
    {
      title: 'Web Hosting',
      icon: Server,
      description: 'Fast, secure and reliable cloud hosting with SSL, backups and continuous uptime monitoring.',
      tags: ['Hosting', 'SSL']
    },
    {
      title: 'Website Maintenance',
      icon: Wrench,
      description: 'Keep your website updated, secure and running smoothly with regular maintenance and technical support.',
      tags: ['Support', 'Updates']
    }
  ];

  const faqs = [
    {
      q: 'How fast are the websites you build?',
      a: 'Extremely fast. We optimize assets, write clean semantic HTML, minimize client-side javascript, and configure global edge caching to achieve sub-second load times.'
    },
    {
      q: 'Do you work with existing teams?',
      a: 'Yes. We can integrate directly into your workflows, take ownership of specific services, or collaborate to rebuild legacy infrastructure.'
    },
    {
      q: 'What is your pricing model?',
      a: 'We work on project-based pricing with clearly defined milestones and deliverables. No hidden hourly fees.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div>
      <motion.section
        id="hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-primary-container brutal-border-sm border-b-4 w-full relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(#1a1c1c 2px, transparent 2px), linear-gradient(90deg, #1a1c1c 2px, transparent 2px)", backgroundSize: "64px 64px" }}></div>
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-xl md:py-[120px] min-h-[calc(100vh-80px)] relative z-10 grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
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
      </motion.section>

      <motion.section
        id="services"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto"
      >
        <div className="flex items-center gap-md mb-xl">
          <div className="w-4 h-4 bg-primary-container brutal-border"></div>
          <h2 className="font-headline-lg text-headline-lg text-on-background uppercase m-0">Core Services</h2>
          <div className="h-1 flex-grow bg-on-background ml-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div key={i} className="bg-surface-container-lowest brutal-border brutal-shadow flex flex-col p-0 group hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform duration-150">
                <div className="p-md border-b-4 border-on-background bg-primary-container group-hover:bg-on-background transition-colors flex items-center justify-start">
                  <Icon size={32} className="text-on-background group-hover:text-primary-container" />
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
            );
          })}
        </div>
      </motion.section>

      <motion.section
        id="trusted-by"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-xl px-margin-mobile md:px-margin-desktop bg-surface-container border-y-4 border-on-background"
      >
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
      </motion.section>

      <motion.section id="work" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}>
        <WorkPage navigateTo={navigateTo} />
      </motion.section>

      {/* <motion.section id="stack" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}>
        <StackPage setActivePage={navigateTo} />
      </motion.section> */}

      <motion.section id="about" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}>
        <AboutPage />
      </motion.section>

      <motion.section id="contact" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}>
        <ContactPage navigateTo={navigateTo} />
      </motion.section>

      <motion.section id="faq" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} className="py-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="flex items-center gap-md mb-lg">
          <div className="w-4 h-4 bg-primary-container brutal-border"></div>
          <h2 className="font-headline-lg text-headline-lg text-on-background uppercase m-0">FAQs</h2>
          <div className="h-1 flex-grow bg-on-background ml-4"></div>
        </div>
        <div className="flex flex-col gap-md">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="brutal-border bg-surface overflow-hidden brutal-shadow-sm transition-all">
                <button
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className={`w-full flex justify-between items-center p-lg font-headline-md text-headline-md uppercase text-left cursor-pointer transition-colors border-none ${
                    isOpen ? 'bg-primary-fixed text-on-background border-b-2 border-on-background' : 'bg-transparent text-on-background hover:bg-surface-container'
                  }`}
                >
                  <span>{faq.q}</span>
                  <span className="material-symbols-outlined font-black">
                    {isOpen ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {isOpen && (
                  <div className="p-lg bg-surface-container-lowest font-body-md text-body-md text-on-background border-t-2 border-on-background">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
}

export default Home;
