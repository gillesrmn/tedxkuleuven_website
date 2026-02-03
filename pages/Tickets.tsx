
import React from 'react';
import { Link } from 'react-router-dom';

const Tickets: React.FC = () => {
  return (
    <div className="bg-background-dark text-white min-h-screen pt-16">
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full max-w-[960px] px-4 pt-16 pb-8 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4 font-display uppercase">Get Your Tickets</h1>
          <p className="text-zinc-400 text-lg font-normal leading-relaxed max-w-2xl mx-auto">
            Join us for an inspiring day of ideas worth spreading at <span className="text-white font-bold">TEDxKU Leuven</span>. Experience live talks, interactive sessions, and networking with change-makers.
          </p>
        </section>

        <section className="w-full max-w-[1200px] px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { type: 'Student', price: 15, perks: ['Valid student ID required', 'Full access to all talks', 'Coffee and snack breaks', 'Standard event goodie bag'] },
              { type: 'General Admission', price: 25, perks: ['Full access to all talks', 'Coffee and snack breaks', 'Official TEDxKU Leuven gift bag', 'Networking lunch session'], popular: true },
              { type: 'Supporter', price: 50, perks: ['Priority seating in front rows', 'Exclusive speaker meet-and-greet', 'Premium curated goodie bag', 'Name listed in digital program'] }
            ].map((tier, i) => (
              <div key={i} className={`flex flex-col gap-6 rounded-xl border border-solid ${tier.popular ? 'border-primary/30 bg-[#222222] scale-105 relative z-10' : 'border-border-dark bg-surface-dark'} p-8 shadow-2xl hover:border-zinc-700 transition-all group`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <div className="flex flex-col gap-2">
                  <h3 className={`${tier.popular ? 'text-primary' : 'text-zinc-500'} text-sm font-black uppercase tracking-widest`}>{tier.type}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-white text-5xl font-black leading-tight tracking-tighter">€{tier.price}</span>
                    <span className="text-zinc-500 text-base font-medium">/ event</span>
                  </div>
                </div>
                <hr className={tier.popular ? 'border-zinc-700' : 'border-border-dark'} />
                <ul className="flex flex-col gap-4 flex-1">
                  {tier.perks.map((perk, pi) => (
                    <li key={pi} className="text-sm font-normal leading-normal flex items-center gap-3 text-zinc-300">
                      <span className={`material-symbols-outlined ${tier.popular ? 'text-primary' : 'text-zinc-500'} text-[20px]`}>check_circle</span>
                      {perk}
                    </li>
                  ))}
                </ul>
                <Link to="/checkout" className="w-full cursor-pointer flex items-center justify-center rounded-lg h-12 bg-primary text-white text-base font-bold hover:brightness-110 transition-all shadow-md">
                  <span>Buy Tickets</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full max-w-[960px] px-4 py-16 text-center">
          <div className="bg-zinc-900 border-2 border-primary/20 rounded-3xl p-10 flex flex-col items-center gap-6 shadow-2xl">
            <span className="material-symbols-outlined text-primary text-6xl font-black">qr_code_2</span>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">QR Code Entry System</h2>
            <p className="text-zinc-400 text-lg max-w-xl font-medium leading-relaxed">
              To ensure a smooth entry, all attendees will receive their personal <span className="text-white font-black">Digital QR Ticket</span> via email exactly <span className="text-primary font-black">4 days before the event</span>. 
            </p>
            <div className="flex items-center gap-4 text-zinc-500 text-sm font-bold uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">info</span>
              Mark your calendar for ticket delivery
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Tickets;
