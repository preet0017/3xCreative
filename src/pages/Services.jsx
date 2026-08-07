import React, { useState } from 'react';

function Services({ navigateTo }) {
  const [openFaq, setOpenFaq] = useState(null);

  const stackCards = [
    {
      title: 'Frontend',
      icon: 'desktop_windows',
      description: 'Performant, responsive, and accessible user interfaces built for speed and impact.',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript']
    },
    {
      title: 'Backend',
      icon: 'dns',
      description: 'Robust APIs and scalable architectures that can handle serious traffic.',
      tags: ['Node.js', 'PostgreSQL', 'GraphQL', 'Redis']
    },
    {
      title: 'DevOps',
      icon: 'cloud_done',
      description: 'Automated pipelines, unbreakable infrastructure, and zero-downtime deployments.',
      tags: ['AWS', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      title: 'Design',
      icon: 'design_services',
      description: 'High-impact, conversion-focused interfaces that don\'t compromise on aesthetics.',
      tags: ['Figma', 'Framer', 'UI/UX', 'Design Systems']
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
    <div className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-xl md:py-[120px] flex flex-col gap-xl">
      {/* Header Section */}
      <header className="flex flex-col gap-md max-w-4xl">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg font-black text-on-background uppercase border-l-8 border-primary-fixed pl-md leading-none">
          OUR STACK
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-md border-b-2 border-on-background pb-md">
          We don't mess around. We use the tools that get the job done fast, secure, and scalable. No fluff, just raw technical power.
        </p>
      </header>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter relative">
        {stackCards.map((card, idx) => (
          <article 
            key={idx} 
            className="bg-surface border-4 border-on-background brutal-shadow-sm brutal-border p-lg flex flex-col gap-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform duration-150"
          >
            <div className="flex justify-between items-start border-b-2 border-on-background pb-sm">
              <h2 className="font-headline-lg text-headline-lg text-on-background uppercase">{card.title}</h2>
              <span className="material-symbols-outlined text-[40px] text-on-background" style={{ fontVariationSettings: "'FILL' 1" }}>
                {card.icon}
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">{card.description}</p>
            <div className="flex flex-wrap gap-sm mt-auto pt-md">
              {card.tags.map((tag, tIdx) => {
                const isHighlight = tIdx < 2;
                return (
                  <span 
                    key={tag} 
                    className={`border-2 border-on-background px-sm py-xs font-code text-code brutal-shadow-sm ${
                      isHighlight ? 'bg-primary-fixed text-on-background' : 'bg-surface-container-high text-on-background'
                    }`}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </article>
        ))}
      </div>

      {/* FAQ Section */}
      <section className="mt-xl">
        <div className="flex items-center gap-md mb-lg">
          <div className="w-4 h-4 bg-primary-container brutal-border"></div>
          <h2 className="font-headline-lg text-headline-lg text-on-background uppercase m-0">FAQ</h2>
          <div className="h-1 flex-grow bg-on-background ml-4"></div>
        </div>
        <div className="flex flex-col gap-md">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div 
                key={index} 
                className="brutal-border bg-surface overflow-hidden brutal-shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
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
      </section>

      {/* CTA Section */}
      <section className="mt-xl bg-primary-fixed border-4 border-on-background brutalist-shadow-lg p-xl flex flex-col md:flex-row items-center justify-between gap-lg">
        <div className="flex flex-col gap-sm">
          <h3 className="font-headline-lg text-headline-lg font-black text-on-background uppercase">Ready to build?</h3>
          <p className="font-body-lg text-body-lg text-on-background max-w-lg">Let's turn your specs into shipped reality. No excuses.</p>
        </div>
        <button 
          onClick={() => navigateTo('contact')}
          className="inline-block bg-on-background text-primary-fixed font-label-bold text-label-bold uppercase px-lg py-md border-4 border-on-background brutalist-shadow-lg hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1a1c1c] transition-all active:translate-y-1 active:translate-x-1 active:shadow-none cursor-pointer"
        >
          Start Project
        </button>
      </section>
    </div>
  );
}

export default Services;
