
import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Confirmation: React.FC = () => {
  const { eventInfo } = useApp();
  
  const formattedDate = new Date(eventInfo.date).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'
  });

  return (
    <div className="bg-background-dark min-h-screen text-white font-display">
      <main className="px-4 md:px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="py-10">
            <div className="flex flex-col items-center">
              <div className="bg-primary/20 text-primary w-20 h-20 rounded-full flex items-center justify-center mb-6 border border-primary/30">
                <span className="material-symbols-outlined text-5xl font-black">check_circle</span>
              </div>
              <h1 className="text-white tracking-tighter text-5xl md:text-6xl font-black px-4 text-center pb-3 uppercase">Order Confirmed!</h1>
              <p className="text-zinc-400 text-xl font-medium leading-normal pb-8 px-4 text-center max-w-2xl">
                You're all set for <span className="text-white font-bold">{eventInfo.title}</span>. Your digital pass will be delivered 4 days before the event.
              </p>
            </div>
          </div>

          <div className="p-4">
            <div className="flex flex-col items-stretch justify-start rounded-[2rem] md:flex-row md:items-start shadow-2xl bg-zinc-900 border border-white/10 overflow-hidden">
              <div className="w-full md:w-64 bg-white p-10 flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1024px-QR_code_for_mobile_English_Wikipedia.svg.png" className="w-40 h-40 opacity-80" alt="Ticket QR" />
                  <p className="text-black text-[10px] font-mono font-black tracking-[0.2em] mt-2 uppercase">ID: TX-KUL-{Math.floor(1000 + Math.random() * 9000)}</p>
                </div>
              </div>
              <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-6 py-12 px-10 text-left">
                <div>
                  <p className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-2">Event Registration</p>
                  <h3 className="text-white text-3xl font-black leading-tight tracking-tighter uppercase">{eventInfo.title}</h3>
                  <div className="flex flex-col gap-2 mt-4">
                    <div className="flex items-center gap-3 text-zinc-400 text-sm font-bold uppercase tracking-widest">
                      <span className="material-symbols-outlined text-primary text-lg">calendar_month</span>
                      <span>{formattedDate}</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-400 text-sm font-bold uppercase tracking-widest">
                      <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                      <span>{eventInfo.venue}</span>
                    </div>
                  </div>
                </div>
                <div className="h-px bg-white/5 w-full"></div>
                <div className="flex flex-wrap items-center gap-6 justify-between">
                  <div className="flex gap-4">
                    <button className="bg-primary text-white text-xs font-black uppercase tracking-widest px-8 py-4 rounded-xl hover:scale-105 transition-all shadow-lg shadow-primary/20">
                      Add to Wallet
                    </button>
                    <button className="bg-zinc-800 text-zinc-400 text-xs font-black uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-zinc-700 transition-all">
                      Print PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Confirmation;
