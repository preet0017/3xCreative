import React from 'react'

export default function About() {
  const values = [
    {
      title: 'SPEED FIRST',
      desc: "If it takes more than 100ms to load, it is broken. We optimize bytecode, payload sizes, and network hops. Speed is our religion."
    },
    {
      title: 'ZERO BLOAT',
      desc: "We do not ship client-side telemetry trackers, heavy animation frameworks, or nested layout libraries. Clean, raw markup and native execution."
    },
    {
      title: 'DIRECT PIPELINE',
      desc: "No account managers, Scrum ceremonies, or infinite alignment sessions. You talk directly with the engineers who write your codebase."
    }
  ]

  const team = [
    {
      name: 'Marcus Vance',
      role: 'Principal Architect',
      bio: 'Ex-kernel dev. Hates complex layers, loves bare metal and low latency systems.',
      avatar: '⚡'
    },
    {
      name: 'Elara Chen',
      role: 'Lead Performance Engineer',
      bio: 'DB tuning wizard. Can squeeze 10k TPS out of a potato database config.',
      avatar: '⚙️'
    }
  ]

  return (
    <div className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-xl flex flex-col gap-xl">
      {/* Page Header */}
      <header className="flex flex-col gap-md max-w-4xl border-b-4 border-on-background pb-lg">
        <h1 className="font-display text-5xl md:text-8xl font-black text-on-background uppercase border-l-8 border-primary-fixed pl-md leading-none tracking-tighter">
          WHO WE ARE
        </h1>
        <p className="font-body text-base md:text-lg text-secondary mt-md">
          A raw engineering cell that values code efficiency and architectural integrity above corporate polish.
        </p>
      </header>

      {/* Core Values Section */}
      <section className="flex flex-col gap-lg">
        <h2 className="font-display text-2xl md:text-4xl font-black text-on-background uppercase">
          OUR MANIFESTO
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {values.map((val, idx) => (
            <div 
              key={val.title}
              className="bg-surface p-lg brutal-border shadow-brutal flex flex-col gap-md hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_#1a1c1c] transition-all duration-100"
            >
              <span className="font-body text-xs font-bold text-primary">0{idx + 1} / PHILOSOPHY</span>
              <h3 className="font-display text-xl font-bold uppercase text-on-background border-b-2 border-on-background pb-sm">
                {val.title}
              </h3>
              <p className="font-body text-sm text-secondary leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="flex flex-col gap-lg mt-lg">
        <h2 className="font-display text-2xl md:text-4xl font-black text-on-background uppercase">
          THE ENGINE ROOM
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {team.map((member) => (
            <div 
              key={member.name}
              className="bg-surface-container-low brutal-border shadow-brutal flex flex-col md:flex-row gap-md p-lg hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_#1a1c1c] transition-all duration-100"
            >
              <div className="w-16 h-16 bg-primary-container brutal-border flex items-center justify-center text-4xl self-start md:self-center">
                {member.avatar}
              </div>
              <div className="flex flex-col gap-sm flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between border-b border-on-background/25 pb-xs">
                  <h3 className="font-display text-lg font-bold text-on-background uppercase">
                    {member.name}
                  </h3>
                  <span className="font-body text-xs font-bold bg-on-background text-primary-fixed border border-on-background px-xs py-1 mt-1 md:mt-0 max-w-fit">
                    {member.role}
                  </span>
                </div>
                <p className="font-body text-xs text-secondary leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
