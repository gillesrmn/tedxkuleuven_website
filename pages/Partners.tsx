
import React from 'react';

const Partners: React.FC = () => {
  const scrollToInquiry = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('inquiry');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-background-dark font-display min-h-screen text-left">
      <main className="flex-1 max-w-[1200px] mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-zinc-900 rounded-xl overflow-hidden p-8 lg:p-12 border border-zinc-800">
            <div className="flex flex-col gap-6 text-left">
              <div className="flex flex-col gap-4">
                <h1 className="text-white text-4xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
                  Partner With <span className="text-primary">TEDx</span>KU Leuven
                </h1>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Empower ideas that change the world. Join our community of innovators, visionaries, and academic leaders by becoming a corporate sponsor.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <p className="text-white font-bold">partners@tedxkuleuven.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <a 
                  onClick={scrollToInquiry}
                  href="#inquiry" 
                  className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary text-white font-bold hover:bg-red-700 transition-all shadow-lg shadow-primary/20"
                >
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
          <h1 className="text-white text-3xl md:text-4xl font-black leading-tight">Partnership Benefits</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              { icon: 'rocket_launch', title: 'Brand Visibility', desc: 'Prominent placement on all marketing materials, digital assets, and physical presence during the flagship event.' },
              { icon: 'groups', title: 'Networking', desc: 'Exclusive access to international speakers, VIP networking dinners, and high-potential student leaders.' },
              { icon: 'favorite', title: 'Community Impact', desc: 'Align your brand with the mission of spreading ideas and supporting the intellectual growth of Leuven.' }
            ].map((benefit, i) => (
              <div key={i} className="flex flex-col gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 hover:border-primary/50 transition-all group">
                <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform">{benefit.icon}</span>
                <h3 className="text-white text-xl font-bold">{benefit.title}</h3>
                <p className="text-zinc-400 leading-normal">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="inquiry" className="mb-20 max-w-[800px] mx-auto text-left">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Connect</h2>
            <h2 className="text-white text-3xl font-bold">Partnership Inquiry</h2>
            <form className="flex flex-col gap-6 mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input className="bg-background-dark border-zinc-700 border rounded-lg focus:ring-primary focus:border-primary p-4 text-white" placeholder="Contact Person Name" type="text" />
                <input className="bg-background-dark border-zinc-700 border rounded-lg focus:ring-primary focus:border-primary p-4 text-white" placeholder="Email Address" type="email" />
              </div>
              <textarea className="bg-background-dark border-zinc-700 border rounded-lg focus:ring-primary focus:border-primary p-4 text-white" placeholder="Tell us about your organization's goals" rows={4}></textarea>
              <button className="bg-primary text-white font-bold py-4 rounded-lg hover:bg-red-700 transition-all shadow-lg flex items-center justify-center gap-2 uppercase tracking-widest" type="submit">
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
