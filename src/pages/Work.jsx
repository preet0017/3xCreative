import React from 'react';

function Work({ navigateTo }) {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-xl">
      {/* Page Header */}
      <header className="mb-xl border-b-4 border-on-background pb-lg">
        <h1 className="font-display-lg text-display-lg font-black uppercase tracking-tighter">THE WORK</h1>
        <p className="font-body-lg text-body-lg mt-md max-w-2xl bg-on-background text-primary-fixed p-sm inline-block brutal-shadow-sm">
          High-performance engineering for ambitious brands.
        </p>
      </header>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Project 1: FinTech App (Full Width) */}
        <article className="col-span-1 md:col-span-12 brutal-border bg-surface-container-low mb-xl brutal-shadow flex flex-col md:flex-row relative">
          <div className="w-full md:w-2/3 border-b-4 md:border-b-0 md:border-r-4 border-on-background overflow-hidden">
            <img 
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 min-h-[400px]" 
              alt="FinTech dashboard" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIpXtjk58K3jfwLEfuS9iePj1y4i3d93jJiiXyguBuJbxDYE0VFyvwCTD3D92VHaDu37zbmkro9M95UY_JfGY0EZy7WwAiTau-TeKZHZlTI__p8wbUJHHCaHvg5qdfdEooBfAnQTVUYMH417VeVf_j-DNTXFxnJHb6_PXiSG23bXdzKZpAcbsevQL2zLMXduw5B4lobZSX-drcSKruGZ2RAWvrq3LERuo6GztzOyP_K2kcSDHoooCf5Q"
            />
          </div>
          <div className="w-full md:w-1/3 p-lg flex flex-col justify-between">
            <div>
              <div className="inline-block bg-primary-fixed text-on-background font-label-bold text-label-bold px-sm py-xs border-2 border-on-background mb-md brutal-shadow-sm uppercase">
                FinTech
              </div>
              <h2 className="font-headline-lg text-headline-lg font-black uppercase mb-sm leading-tight">
                Lightning Ledger
              </h2>
              <p className="font-body-md text-body-md mb-lg border-l-4 border-primary-fixed pl-sm">
                High-frequency trading interface stripped to the bare metal. Zero fluff, maximum throughput.
              </p>
              <div className="bg-on-background text-surface-bright p-sm brutal-shadow-sm mb-lg border-2 border-on-background">
                <h3 className="font-code text-code text-primary-fixed uppercase mb-xs">Result</h3>
                <p className="font-body-lg text-body-lg font-bold">150% faster execution loads.</p>
              </div>
            </div>
            <button 
              onClick={() => navigateTo('contact')}
              className="brutal-border bg-surface-bright text-on-background font-label-bold text-label-bold uppercase px-lg py-md brutal-shadow btn-brutal transition-all self-start flex items-center gap-sm cursor-pointer"
            >
              Read the Docs
              <span className="material-symbols-outlined font-bold">arrow_forward</span>
            </button>
          </div>
        </article>

        {/* Project 2: Logistics Platform (Half Width) */}
        <article className="col-span-1 md:col-span-6 brutal-border bg-surface-container-highest brutal-shadow flex flex-col mb-xl md:mb-0">
          <div className="w-full border-b-4 border-on-background overflow-hidden h-[300px]">
            <img 
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" 
              alt="Logistics Routing" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyPbyFPC3p0jRnL17gBrI6m7K_zmpfPmLtGTdLU0TlAWs3UITjwBWXm2uOFusvCbPmgxiocLyj2gDhdFf_NV2j4JoySv1uwzWOTA_8bfkP0EQvCu1pCekCBI-uRDbLQseClWWFeMFX5h4kI_CVMaEvwzmmKhi1_RJIfpfrrK7kuzKP0Q0D3x4clMAn_JC57XfvZwNZfjYYeBw18j6iS7OvfzpZ-9W6cF1DotQ9sIZvAwxcWcCVi8jQEg"
            />
          </div>
          <div className="p-lg flex flex-col flex-grow justify-between bg-surface-bright">
            <div>
              <div className="inline-block bg-on-background text-primary-fixed font-label-bold text-label-bold px-sm py-xs border-2 border-on-background mb-md uppercase">
                Logistics
              </div>
              <h2 className="font-headline-md text-headline-md font-black uppercase mb-sm">
                GridLock Nav
              </h2>
              <p className="font-body-md text-body-md mb-lg">
                Global supply chain routing engine built for resilience and raw data processing.
              </p>
              <div className="border-l-4 border-on-background pl-md mb-lg py-xs">
                <h3 className="font-code text-code text-secondary font-bold uppercase mb-xs">Result</h3>
                <p className="font-body-lg text-body-lg font-bold">Latency reduced by 40ms.</p>
              </div>
            </div>
            <button 
              onClick={() => navigateTo('contact')}
              className="brutal-border bg-primary-fixed text-on-background font-label-bold text-label-bold uppercase px-lg py-md brutal-shadow btn-brutal transition-all w-full text-center cursor-pointer"
            >
              Read the Docs
            </button>
          </div>
        </article>

        {/* Project 3: Social Media UI (Half Width) */}
        <article className="col-span-1 md:col-span-6 brutal-border bg-surface-container-highest brutal-shadow flex flex-col">
          <div className="w-full border-b-4 border-on-background overflow-hidden h-[300px]">
            <img 
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" 
              alt="Brutalist Social Media" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5m6ddPZQ2JPTWIUUDd-dfviZqDO3z0oQ5qdukuTVRNWR9aqS5IeDqFO0vHVjw6LLBM8S-EVll8Uuiwn6Dk0Dn0vpkC2usK2FCzZM9QmLUROrSqvyZuT9-1HX3ZjKldLkg2knrn4d_ZVqw1PCbzAIE_wgaF4CEg_MCsmPFqqibhWuRAtGMFHfnHInNRozJJ2udjgI3iVHrOAzdE4Hr8W1TD8GB9AYp27mfEf2-hWPLqYg6uhdHh7LZ9w"
            />
          </div>
          <div className="p-lg flex flex-col flex-grow justify-between bg-surface-bright">
            <div>
              <div className="inline-block bg-on-background text-surface-bright font-label-bold text-label-bold px-sm py-xs border-2 border-on-background mb-md uppercase">
                Social
              </div>
              <h2 className="font-headline-md text-headline-md font-black uppercase mb-sm">
                Anti-Social
              </h2>
              <p className="font-body-md text-body-md mb-lg">
                A text-heavy, brutally honest social platform focusing on content over chrome.
              </p>
              <div className="border-l-4 border-on-background pl-md mb-lg py-xs">
                <h3 className="font-code text-code text-secondary font-bold uppercase mb-xs">Result</h3>
                <p className="font-body-lg text-body-lg font-bold">99.99% Uptime under load.</p>
              </div>
            </div>
            <button 
              onClick={() => navigateTo('contact')}
              className="brutal-border bg-background text-on-background font-label-bold text-label-bold uppercase px-lg py-md brutal-shadow btn-brutal transition-all w-full text-center cursor-pointer"
            >
              Read the Docs
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Work;
