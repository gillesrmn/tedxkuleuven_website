
import React from 'react';
import { useApp } from '../context/AppContext';

const Partners: React.FC = () => {
  const { pastPartners } = useApp();
  
  const scrollToInquiry = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('inquiry');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Partnership inquiry received! Our external relations team at partners@tedxkuleuven.com has been notified and will contact you shortly to discuss potential collaboration.");
  };

  return (
    <div className="bg-background-dark font-display min-h-screen text-left">
      <main className="flex-1 max-w-[1200px] mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-zinc-900 rounded-xl overflow-hidden p-8 lg:p-12 border border-zinc-800">
            <div className="flex flex-col gap-6 text-left">
              <div className="flex flex-col gap-4">
                <h1 className="text-white text-4xl lg:text-6xl font-black leading-tight tracking-tighter uppercase">
                  Partner With <span className="text-primary">TEDx</span>KU Leuven
                </h1>
                <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                  Empower ideas that change the world. Join our community of innovators, visionaries, and academic leaders by becoming a corporate sponsor.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <p className="text-white font-bold uppercase tracking-widest text-sm">partners@tedxkuleuven.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <a onClick={scrollToInquiry} href="#inquiry" className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary text-white font-black uppercase tracking-widest text-xs hover:bg-red-700 transition-all shadow-lg shadow-primary/20">
                  Get Started
                </a>
              </div>
            </div>
            <div className="w-full h-80 lg:h-full bg-center bg-cover rounded-xl filter grayscale hover:grayscale-0 transition-all duration-700" 
                 style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmMymvvrcMqVuv0GwEzkWqEmKXe8B0bqFn2MqZ6yhF6iI0u6kG5kI7YXZAUx6ACkm4PPAzB9hCXOF3O4jLxJMiZYH0uNBCkf87r0LeRDHB7i0AVKjrLLZVxc4vU2kNZpVDUT4Ly4dSKxRuQTH2wxMdp5NWlBDHXRcGfOAWnUwJoySiI4jMwBcNOa1fkcGXbeyBaG-USfH79adVTcm2BtONWdNl4r7doHru_zxTvo3COA-Tb_XAzKgBt4n0mWod8arxGu5AgXp0Q2c")`}}>
            </div>
          </div>
        </section>

        <section className="mb-20 text-left">
          <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Opportunities</h2>
          <h1 className="text-white text-3xl md:text-4xl font-black leading-tight uppercase tracking-tighter">Partnership Benefits</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              { icon: 'rocket_launch', title: 'Brand Visibility', desc: 'Prominent placement on all marketing materials, digital assets, and physical presence during the flagship event.' },
              { icon: 'groups', title: 'Networking', desc: 'Exclusive access to international speakers, VIP networking dinners, and high-potential student leaders.' },
              { icon: 'favorite', title: 'Community Impact', desc: 'Align your brand with the mission of spreading ideas and supporting the intellectual growth of Leuven.' }
            ].map((benefit, i) => (
              <div key={i} className="flex flex-col gap-6 rounded-xl border border-zinc-800 bg-zinc-900/50 p-10 hover:border-primary/50 transition-all group">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary text-4xl">{benefit.icon}</span>
                  <h3 className="text-white text-xl font-black uppercase tracking-tight">{benefit.title}</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed font-medium text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {pastPartners.length > 0 && (
          <section className="mb-20 text-left">
            <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Heritage</h2>
            <h1 className="text-white text-3xl md:text-4xl font-black leading-tight uppercase tracking-tighter">Past Partners</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-10">
              {pastPartners.map((p, i) => (
                <div key={i} className="bg-zinc-900/40 p-6 rounded-xl border border-zinc-800 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                  <img src={p.logo} alt={p.name} className="max-h-12 w-auto object-contain opacity-60" />
                </div>
              ))}
            </div>
          </section>
        )}

        <section id="inquiry" className="mb-20 max-w-[800px] mx-auto text-left">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Connect</h2>
            <h2 className="text-white text-3xl font-black uppercase tracking-tight">Partnership Inquiry</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input required className="bg-background-dark border-zinc-700 border rounded-lg focus:ring-primary focus:border-primary p-4 text-white font-medium" placeholder="Contact Person Name" type="text" />
                <input required className="bg-background-dark border-zinc-700 border rounded-lg focus:ring-primary focus:border-primary p-4 text-white font-medium" placeholder="Email Address" type="email" />
              </div>
              <textarea required className="bg-background-dark border-zinc-700 border rounded-lg focus:ring-primary focus:border-primary p-4 text-white font-medium" placeholder="Tell us about your organization's goals" rows={4}></textarea>
              <button className="bg-primary text-white font-black py-4 rounded-lg hover:bg-red-700 transition-all shadow-lg flex items-center justify-center gap-2 uppercase tracking-widest text-xs" type="submit">
                Send Inquiry <span className="material-symbols-outlined !text-sm">send</span>
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Partners;
