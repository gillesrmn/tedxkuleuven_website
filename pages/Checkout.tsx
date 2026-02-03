
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-dark text-zinc-100 min-h-screen py-12 px-6">
      <div className="layout-content-container flex flex-col max-w-[1100px] mx-auto flex-1">
        <nav className="flex flex-wrap gap-2 px-4 pb-6 items-center">
          <span className="text-zinc-500 text-base font-medium">Ticket Selection</span>
          <span className="text-zinc-500 text-base font-medium">/</span>
          <span className="text-white text-base font-bold underline">Personal Info</span>
          <span className="text-zinc-500 text-base font-medium">/</span>
          <span className="text-zinc-700 text-base font-medium">Payment</span>
        </nav>
        
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3 text-left">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Personal Details</h1>
            <p className="text-zinc-400 text-base font-normal leading-normal">Please fill in your information to complete your registration for TEDxKU Leuven.</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 flex flex-col gap-6">
            <section className="bg-zinc-900/50 rounded-xl border border-zinc-800 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-800 flex justify-between items-center bg-zinc-900">
                <h2 className="text-white text-lg font-bold">1. Ticket Selection</h2>
                <button className="text-zinc-400 text-sm font-bold hover:underline">Edit</button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-zinc-400">confirmation_number</span>
                    <div className="text-left">
                      <p className="text-white font-medium">Early Bird Student</p>
                      <p className="text-zinc-500 text-sm">Valid student ID required at entry</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">1 x €15.00</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-800 bg-zinc-800/50">
                <h2 className="text-white text-lg font-bold text-left">2. Attendee Information</h2>
              </div>
              <div className="p-6 flex flex-col gap-6 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-zinc-400">Full Name</label>
                    <input className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none" placeholder="John Doe" type="text" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-zinc-400">Email Address</label>
                    <input className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none" placeholder="john@student.kuleuven.be" type="email" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-zinc-400">Dietary Requirements</label>
                  <select className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none">
                    <option>No specific requirements</option>
                    <option>Vegetarian</option>
                    <option>Vegan</option>
                    <option>Gluten-Free</option>
                    <option>Halal</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-zinc-400">Additional Notes (Optional)</label>
                  <textarea className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none" placeholder="Any other info we should know..." rows={3}></textarea>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <input className="mt-1 rounded border-zinc-800 text-zinc-900 focus:ring-zinc-500 bg-zinc-950" id="consent" type="checkbox" />
                  <label className="text-sm text-zinc-400" htmlFor="consent">I agree to the <span className="text-white underline font-medium">Terms of Service</span> and <span className="text-white underline font-medium">Privacy Policy</span>.</label>
                </div>
              </div>
            </section>

            <div className="flex justify-end pt-4">
              <button 
                onClick={() => navigate('/confirmation')}
                className="flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-red-700 transition-all shadow-lg shadow-black/50 uppercase"
              >
                Proceed to Payment
              </button>
            </div>
          </div>

          <aside className="w-full lg:w-80 flex flex-col gap-6">
            <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 sticky top-24">
              <h3 className="text-white text-xl font-bold mb-6 border-b border-zinc-800 pb-4 text-left">Order Summary</h3>
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">1x Early Bird Student</span>
                  <span className="text-white font-medium">€15.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">Service Fee</span>
                  <span className="text-white font-medium">€1.50</span>
                </div>
                <div className="border-t border-dashed border-zinc-800 pt-4 flex justify-between">
                  <span className="text-white font-bold">Total</span>
                  <span className="text-white text-xl font-black">€16.50</span>
                </div>
              </div>
              <div className="bg-zinc-950 p-4 rounded-lg mb-6">
                <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider mb-2 text-left">Event Info</p>
                <div className="flex flex-col gap-2 text-left">
                  <div className="flex items-center gap-2 text-sm text-zinc-300">
                    <span className="material-symbols-outlined text-xs">calendar_today</span>
                    <span>March 15, 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zinc-300">
                    <span className="material-symbols-outlined text-xs">location_on</span>
                    <span>Pieter De Somer Aula</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 px-3 py-2 bg-zinc-800 text-zinc-300 rounded-lg text-xs font-medium">
                  <span className="material-symbols-outlined text-sm">verified_user</span>
                  <span>Secure Checkout</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
