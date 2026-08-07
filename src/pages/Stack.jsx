import React from 'react'

export default function Stack({ setActivePage }) {
  const stackCategories = [
    {
      title: 'Frontend',
      icon: 'terminal',
      items: [
        { name: 'React', level: 'Core', desc: 'Component-driven UI architecture for dynamic and responsive interfaces.' },
        { name: 'Next.js', level: 'Expert', desc: 'Server-side rendering and static site generation for optimized speed.' },
        { name: 'Tailwind CSS', level: 'Core', desc: 'Utility-first CSS framework for rapid and modern layout development.' },
        { name: 'TypeScript', level: 'Active', desc: 'Static typing to ensure robust, bug-free components at scale.' }
      ]
    },
    {
      title: 'Backend',
      icon: 'database',
      items: [
        { name: 'Node.js', level: 'Core', desc: 'Event-driven, non-blocking asynchronous APIs for high performance.' },
        { name: 'PostgreSQL', level: 'Expert', desc: 'Relational database systems to store mission-critical data securely.' },
        { name: 'GraphQL', level: 'Active', desc: 'Flexible API querying to reduce payload sizes and improve latency.' },
        { name: 'Redis', level: 'Active', desc: 'In-memory data stores for caching and lightning-fast session states.' }
      ]
    },
    {
      title: 'DevOps & Design',
      icon: 'cloud',
      items: [
        { name: 'AWS', level: 'Expert', desc: 'Cloud infrastructure configuration for global availability.' },
        { name: 'Docker', level: 'Active', desc: 'Containerization to maintain environment consistency across builds.' },
        { name: 'Kubernetes', level: 'Active', desc: 'Automated scaling, deployment, and management of service containers.' },
        { name: 'Figma', level: 'Core', desc: 'High-fidelity wireframing and interactive prototypes for design specs.' }
      ]
    }
  ]

  return (
    <div className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-xl flex flex-col gap-xl">
      {/* Header Section */}
      <header className="flex flex-col gap-lg border-b-4 border-on-background pb-lg">
        <h1 className="font-display text-5xl md:text-8xl font-black uppercase text-on-background leading-none tracking-tighter">
          OUR STACK
        </h1>
        <p className="font-body text-base md:text-lg max-w-3xl text-secondary">
          The raw materials we use to build high-performance, unbreakable digital infrastructure. No fluff. Just power.
        </p>
      </header>

      {/* Stack Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        {stackCategories.map((category) => (
          <section key={category.title} className="flex flex-col gap-md">
            <div className="bg-on-background text-background p-md brutal-border-sm flex justify-between items-center">
              <h2 className="font-display text-xl font-bold uppercase">{category.title}</h2>
              <span className="material-symbols-outlined text-primary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>
                {category.icon}
              </span>
            </div>
            
            {category.items.map((item) => (
              <div 
                key={item.name} 
                className="bg-surface-container-lowest p-md brutal-border-sm brutal-shadow-sm flex flex-col gap-sm hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[6px_6px_0px_0px_#1a1c1c] transition-all duration-100"
              >
                <div className="flex justify-between items-start border-b-2 border-on-background pb-sm">
                  <h3 className="font-body font-bold uppercase">{item.name}</h3>
                  <span className="bg-primary-fixed text-on-primary-fixed font-body text-xs px-xs border-2 border-on-background font-bold">
                    {item.level}
                  </span>
                </div>
                <p className="font-body text-xs text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <section className="mt-xl bg-primary-fixed brutal-border p-xl flex flex-col md:flex-row justify-between items-center gap-lg brutal-shadow-sm">
        <div className="flex flex-col gap-sm">
          <h2 className="font-display text-3xl font-black uppercase text-on-background">Ready to Build?</h2>
          <p className="font-body text-base text-on-primary-fixed-variant">Let's deploy your next big idea.</p>
        </div>
        <button 
          onClick={() => { setActivePage('contact'); window.scrollTo(0, 0); }}
          className="brutal-border bg-on-background text-primary-fixed font-body font-bold uppercase px-xl py-lg brutal-shadow hover:bg-surface-variant hover:text-on-background transition-colors w-full md:w-auto brutal-btn-hover"
        >
          Start Project
        </button>
      </section>
    </div>
  )
}
