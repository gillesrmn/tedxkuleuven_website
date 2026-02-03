
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { eventInfo, addAttendee } = useApp();
  const [selectedTicket, setSelectedTicket] = useState({ id: 'early', name: 'Early Bird Student', price: 15 });
  const [formData, setFormData] = useState({ name: '', email: '', dietary: 'No specific requirements' });

  const tickets = [
    { id: 'student', name: 'Student Pass', price: 15 },
    { id: 'general', name: 'General Admission', price: 25 },
    { id: 'supporter', name: 'Supporter Tier', price: 50 }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addAttendee({
      id: Math.random().toString(36).substr(2, 9),
      name: formData.name,
      email: formData.email,
      type: selectedTicket.name,
      status: 'Paid',
      qrStatus: 'Scheduled',
      date: new Date().toISOString()
    });
    navigate('/confirmation');
  };

  const formattedDate = new Date(eventInfo.date).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  return (
    <div className="bg-background-dark text-zinc-100 min-h-screen py-12 px-6">
      <div className="layout-content-container flex flex-col max-w-[1100px] mx-auto flex-1">
        <nav className="flex flex-wrap gap-2 px-4 pb-6 items-center">
          <span className="text-zinc-500 text-base font-medium">TEDxKU Leuven Registration</span>
        </nav>
        
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3 text-left">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] uppercase">Checkout & Payment</h1>
            <p className="text-zinc-400 text-base font-normal leading-normal">Complete your registration for {eventInfo.title}.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 flex flex-col gap-6">
            <section className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-800 bg-zinc-800/50">
                <h2 className="text-white text-lg font-bold text-left uppercase">1. Select Ticket Tier</h2>
              </div>
              <div className="p-6 grid grid-cols-1 gap-4">
                {tickets.map(t => (
                  <label key={t.id} className={`flex items-center justify-between p-5 rounded-xl border transition-all cursor-pointer ${selectedTicket.id === t.id ? 'border-primary bg-primary/5' : 'border-zinc-800 bg-zinc-950 hover:border-zinc-700'}`}>
                    <div className="flex items-center gap-4">
                      <input 
                        type="radio" 
                        name="ticket" 
                        checked={selectedTicket.id === t.id}
                        onChange={() => setSelectedTicket(t)}
                        className="size-5 text-primary border-zinc-800 bg-zinc-950 focus:ring-primary" 
                      />
                      <div className="text-left">
                        <p className="text-white font-bold uppercase tracking-tight">{t.name}</p>
                        <p className="text-zinc-500 text-xs">Access to all talks & networking</p>
                      </div>
                    </div>
                    <p className="text-white font-black text-xl">€{t.price}</p>
                  </label>
                ))}
              </div>
            </section>

            <section className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-800 bg-zinc-800/50">
                <h2 className="text-white text-lg font-bold text-left uppercase">2. Attendee Information</h2>
              </div>
              <div className="p-6 flex flex-col gap-6 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Full Name</label>
                    <input 
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="John Doe" type="text" 
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Email Address</label>
                    <input 
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="john@student.kuleuven.be" type="email" 
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Dietary Requirements</label>
                  <select 
                    value={formData.dietary}
                    onChange={e => setFormData({ ...formData, dietary: e.target.value })}
                    className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  >
                    <option>No specific requirements</option>
                    <option>Vegetarian</option>
                    <option>Vegan</option>
                    <option>Gluten-Free</option>
                  </select>
                </div>
              </div>
            </section>

            <div className="flex justify-end pt-4">
              <button 
                type="submit"
                className="flex min-w-[240px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-primary text-white text-base font-black leading-normal tracking-[0.015em] hover:bg-red-700 transition-all shadow-lg shadow-black/50 uppercase"
              >
                Confirm & Pay €{(selectedTicket.price + 1.5).toFixed(2)}
              </button>
            </div>
          </div>

          <aside className="w-full lg:w-80 flex flex-col gap-6">
            <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 sticky top-24">
              <h3 className="text-white text-xl font-black mb-6 border-b border-zinc-800 pb-4 text-left uppercase tracking-tight">Order Summary</h3>
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500 font-bold uppercase tracking-widest text-[10px]">Tier</span>
                  <span className="text-white font-bold">{selectedTicket.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500 font-bold uppercase tracking-widest text-[10px]">Price</span>
                  <span className="text-white font-bold">€{selectedTicket.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500 font-bold uppercase tracking-widest text-[10px]">Fee</span>
                  <span className="text-white font-bold">€1.50</span>
                </div>
                <div className="border-t border-dashed border-zinc-800 pt-4 flex justify-between">
                  <span className="text-white font-black uppercase tracking-widest text-sm">Total</span>
                  <span className="text-primary text-2xl font-black">€{(selectedTicket.price + 1.5).toFixed(2)}</span>
                </div>
              </div>
              <div className="bg-zinc-950 p-4 rounded-lg">
                <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-3 text-left border-b border-zinc-900 pb-2">Event Info</p>
                <div className="flex flex-col gap-3 text-left">
                  <div className="flex items-center gap-2 text-xs text-zinc-300 font-bold">
                    <span className="material-symbols-outlined text-primary text-sm">calendar_today</span>
                    <span>{formattedDate}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-zinc-300 font-bold">
                    <span className="material-symbols-outlined text-primary text-sm">location_on</span>
                    <span>{eventInfo.venue}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
