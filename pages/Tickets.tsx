
import React from 'react';
import { Link } from 'react-router-dom';

const Tickets: React.FC = () => {
  return (
    <div className="bg-background-dark text-white min-h-screen pt-16">
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full max-w-[960px] px-4 pt-16 pb-8 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4 font-display uppercase">Get Your Tickets</h1>
          <p className="text-neutral-400 text-lg font-normal leading-relaxed max-w-2xl mx-auto">
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
              <div key={i} className={`flex flex-col gap-6 rounded-xl border border-solid ${tier.popular ? 'border-primary/30 bg-[#222222] scale-105 relative z-10' : 'border-border-dark bg-surface-dark'} p-8 shadow-2xl hover:border-neutral-700 transition-all group`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <div className="flex flex-col gap-2">
                  <h3 className={`${tier.popular ? 'text-primary' : 'text-neutral-500'} text-sm font-bold uppercase tracking-widest`}>{tier.type}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-white text-5xl font-black leading-tight tracking-tighter">€{tier.price}</span>
                    <span className="text-neutral-500 text-base font-medium">/ event</span>
                  </div>
                </div>
                <hr className={tier.popular ? 'border-neutral-700' : 'border-border-dark'} />
                <ul className="flex flex-col gap-4 flex-1">
                  {tier.perks.map((perk, pi) => (
                    <li key={pi} className="text-sm font-normal leading-normal flex items-center gap-3 text-neutral-300">
                      <span className={`material-symbols-outlined ${tier.popular ? 'text-primary' : 'text-neutral-500'} text-[20px]`}>check_circle</span>
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
          <div className="bg-surface-dark rounded-2xl p-8 md:p-12 border border-border-dark">
            <h2 className="text-2xl font-bold mb-4 text-white">Have questions about ticket types?</h2>
            <p className="text-neutral-400 mb-6">Group discounts available for 10+ tickets. Contact our team for special corporate packages.</p>
            <Link className="inline-flex items-center gap-2 text-primary font-bold hover:underline" to="/contact">
              Visit our FAQ
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Tickets;
