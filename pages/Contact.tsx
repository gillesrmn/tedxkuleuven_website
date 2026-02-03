
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-background-dark min-h-screen relative overflow-hidden font-display pt-12">
      <div className="absolute bottom-[-5%] right-[-5%] text-[20rem] font-black text-white/[0.02] pointer-events-none select-none z-0">TEDx</div>
      
      <div className="mx-auto max-w-[1200px] px-6 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 py-12">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h1 className="text-white text-6xl md:text-7xl font-black leading-tight tracking-tighter">Get in<br/>touch</h1>
              <p className="text-white/50 text-xl font-normal max-w-md leading-relaxed">Have a question or want to collaborate? Reach out to our team of student organizers.</p>
            </div>
            
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <p className="text-primary text-xs font-black uppercase tracking-[0.2em]">Email us</p>
                <p className="text-white text-2xl font-medium hover:text-primary transition-colors cursor-pointer">hello@tedxkuleuven.com</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-primary text-xs font-black uppercase tracking-[0.2em]">Visit us</p>
                <p className="text-white text-2xl font-medium">Naamsestraat 22, 3000 Leuven</p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-white/30 text-xs font-bold uppercase tracking-widest">Connect with us</p>
              <div className="flex flex-wrap gap-4">
                {['share', 'groups', 'public'].map(icon => (
                  <a key={icon} className="flex items-center justify-center size-12 bg-white/5 hover:bg-white/10 border border-white/10 transition-all rounded-full group" href="#">
                    <span className="material-symbols-outlined text-white/60 group-hover:text-primary transition-colors">{icon}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-3xl overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-700 h-56 w-full bg-zinc-900 relative">
              <img alt="Map of Leuven" className="w-full h-full object-cover opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkK-DbrFUe-OQ5xtkTYwJ2HdL5eVrpiXXc6UOss9k3uWp0DLvtNdtzjs9raiLBx66-DDdctvCO9VJLxwcTNTvRlbmo37G5ADZx5cz6xsdrS4YC8bzlB368doFCTKdsXJXAo3r7CMG_RoxeskSYFU-cfhSbZTzlUeWW5ersNctX43RaKOSDcfonR7FbCsTY3levMQqWne3EYi5Y6iwN1sUKxlRKXKANyaiZKCsz5zAw8_D0Z3JUfkPum6duWdXcg6QvOUowvQlUlbA" />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent opacity-60"></div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-white/5 rounded-[2.5rem] blur-xl"></div>
            <div className="relative bg-zinc-900 border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl">
              <h2 className="text-white text-3xl font-bold mb-10 text-left">Send us a message</h2>
              <form className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-white/40 text-xs font-bold uppercase tracking-widest ml-1 text-left">Full Name</label>
                    <input className="bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-white/20" placeholder="e.g. Jane Doe" type="text" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-white/40 text-xs font-bold uppercase tracking-widest ml-1 text-left">Email Address</label>
                    <input className="bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-white/20" placeholder="jane@example.com" type="email" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-white/40 text-xs font-bold uppercase tracking-widest ml-1 text-left">Subject</label>
                  <div className="relative">
                    <select className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all appearance-none cursor-pointer">
                      <option className="bg-zinc-900">General Inquiry</option>
                      <option className="bg-zinc-900">Partnership</option>
                      <option className="bg-zinc-900">Speaker Application</option>
                      <option className="bg-zinc-900">Press</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">expand_more</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3 text-left">
                  <label className="text-white/40 text-xs font-bold uppercase tracking-widest ml-1">Message</label>
                  <textarea className="bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none placeholder:text-white/20" placeholder="Tell us more about your ideas..." rows={6}></textarea>
                </div>
                <button className="w-full bg-primary hover:bg-[#ff2e21] text-white font-black py-5 rounded-2xl transition-all flex items-center justify-center gap-3 group shadow-lg shadow-primary/10" type="submit">
                  <span className="tracking-widest text-sm uppercase">Submit Message</span>
                  <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <p className="text-white/20 text-center text-[10px] uppercase tracking-widest">Responds in 24-48 hours</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
