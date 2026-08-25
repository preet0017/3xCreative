import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project_type: 'web',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API request
    setTimeout(() => {
      setSubmitted(true);
    }, 400);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      project_type: 'web',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-xl grid grid-cols-1 md:grid-cols-12 gap-gutter relative">
      {/* Background Grid Lines (Decorative) */}
      <div className="absolute inset-0 pointer-events-none hidden md:grid grid-cols-12 gap-gutter px-margin-desktop opacity-5">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-l-2 border-on-background h-full last:border-r-2"></div>
        ))}
      </div>

      {/* Left Column: Title & Contact Info */}
      <div className="md:col-span-5 flex flex-col gap-xl relative z-10">
        <div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-background uppercase">
            Talk<br/>To Us
          </h1>
          <div className="w-24 h-4 bg-primary-fixed mt-sm brutal-border"></div>
        </div>
        <div className="flex flex-col gap-lg md:mt-auto">
          <div className="bg-surface p-lg brutal-border shadow-brutal transform -rotate-1 hover:rotate-0 transition-transform duration-150">
            <h3 className="font-label-bold text-label-bold uppercase text-surface-tint mb-xs">Email</h3>
            <a 
              className="font-headline-md text-headline-md text-on-background hover:bg-primary-container hover:text-on-primary-container transition-colors underline decoration-4 break-all" 
              href="mailto:hello@brutalist.dev"
            >
              3xcreative1008@gmail.com
            </a>
          </div>
          {/* <div className="bg-on-background p-lg brutal-border shadow-brutal transform rotate-1 hover:rotate-0 transition-transform duration-150">
            <h3 className="font-label-bold text-label-bold uppercase text-surface-variant mb-xs">Discord</h3>
            <a 
              className="font-headline-md text-headline-md text-primary-fixed hover:text-surface-container-low transition-colors underline decoration-4 break-all" 
              href="#"
            >
              brutalist_dev#0001
            </a>
          </div> */}
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="md:col-span-7 relative z-10 mt-xl md:mt-0">
        {submitted ? (
          <div className="bg-primary-container p-lg md:p-xl brutal-border-heavy shadow-brutal-lg flex flex-col gap-lg text-center items-center">
            <span className="material-symbols-outlined text-[64px] text-on-background" style={{ fontVariationSettings: "'FILL' 1" }}>
              check_circle
            </span>
            <h2 className="font-headline-lg text-headline-lg uppercase text-on-background">Message Sent!</h2>
            <p className="font-body-lg text-body-lg text-on-background max-w-md">
              We have received your specs. Our engineers are reviewing them and will get back to you within 12 hours.
            </p>
            <button 
              onClick={handleReset}
              className="bg-on-background text-primary-fixed font-label-bold text-label-bold uppercase px-lg py-md border-4 border-on-background brutalist-shadow-lg hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1a1c1c] transition-all active:translate-y-1 active:translate-x-1 active:shadow-none cursor-pointer"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-surface p-lg md:p-xl brutal-border-heavy shadow-brutal-lg flex flex-col gap-lg">
            <div className="flex flex-col gap-xs">
              <label className="font-label-bold text-label-bold uppercase text-on-background" htmlFor="name">Name_</label>
              <input 
                className="input-brutal bg-surface-container-lowest p-md font-code text-body-lg text-on-background brutal-border placeholder:text-secondary-fixed-dim" 
                id="name" 
                name="name" 
                placeholder="Jane Doe" 
                required 
                type="text"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-xs">
              <label className="font-label-bold text-label-bold uppercase text-on-background" htmlFor="email">Email_</label>
              <input 
                className="input-brutal bg-surface-container-lowest p-md font-code text-body-lg text-on-background brutal-border placeholder:text-secondary-fixed-dim" 
                id="email" 
                name="email" 
                placeholder="jane@example.com" 
                required 
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-xs">
              <label className="font-label-bold text-label-bold uppercase text-on-background" htmlFor="project_type">Project_Type_</label>
              <div className="relative">
                <select 
                  className="input-brutal w-full appearance-none bg-surface-container-lowest p-md font-code text-body-lg text-on-background brutal-border rounded-none focus:ring-0" 
                  id="project_type" 
                  name="project_type"
                  value={formData.project_type}
                  onChange={handleChange}
                >
                  <option value="web">Web Application</option>
                  <option value="mobile">Mobile App</option>
                  <option value="system">Systems Architecture</option>
                  <option value="other">Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-md text-on-background">
                  <span className="material-symbols-outlined font-black">arrow_drop_down</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-xs">
              <label className="font-label-bold text-label-bold uppercase text-on-background" htmlFor="message">Message_</label>
              <textarea 
                className="input-brutal bg-surface-container-lowest p-md font-code text-body-lg text-on-background brutal-border placeholder:text-secondary-fixed-dim resize-none" 
                id="message" 
                name="message" 
                placeholder="Describe your vision..." 
                required 
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button 
              className="mt-md w-full bg-primary-fixed text-on-background brutal-border-heavy shadow-brutal-lg py-lg font-headline-md text-headline-md uppercase btn-brutal flex items-center justify-center gap-sm cursor-pointer border-none" 
              type="submit"
            >
              Send Message
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
