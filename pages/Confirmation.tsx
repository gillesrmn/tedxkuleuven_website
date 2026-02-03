
import React from 'react';
import { Link } from 'react-router-dom';

const Confirmation: React.FC = () => {
  return (
    <div className="bg-background-dark min-h-screen text-white font-display">
      <main className="px-4 md:px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="py-10">
            <div className="flex flex-col items-center">
              <div className="bg-primary/20 text-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl font-bold">check_circle</span>
              </div>
              <h1 className="text-white tracking-light text-4xl md:text-5xl font-extrabold leading-tight px-4 text-center pb-3">Thank You!</h1>
              <p className="text-white/70 text-lg font-normal leading-normal pb-8 px-4 text-center max-w-2xl">
                Your order for the TEDxKU Leuven annual conference has been confirmed. Get ready for a day of ideas worth spreading.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <div className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-zinc-900 rounded-xl min-h-[400px] shadow-2xl relative group" 
                 style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwHJqf6MTZMILlVFwoMR6RoKlqqhZHiRbHSRZrFKq9fORaeeHlwRrlz3SZPbnJYDX4JNY88A-15L9U_lbDWvNpZXEtDiojc5JvT2xOcPwtrBt5WI1l7ECRL21TJ5cwggGUk0lM3RP6XX6hte80kgUaQD84KmDvEBD8uAfk_5eIRgc28ccBijDHicqmmNJtXD0sfKA3XKID02tRnWy2UnkChZofFrJltpGiod3rv9dcFsGjWFdYn0cDXNFlBP2tFMwT-JcdQZQN7Mo")`}}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="relative p-8 text-left">
                <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-3 text-white">Event Featured</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white max-w-lg">Igniting Potential: The 2024 TEDx Experience</h3>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="flex flex-col items-stretch justify-start rounded-xl md:flex-row md:items-start shadow-2xl bg-zinc-900/50 overflow-hidden border border-white/10 backdrop-blur-sm">
              <div className="w-full md:w-64 bg-white p-6 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-40 h-40 bg-center bg-no-repeat bg-contain" style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCHd9PP-BCpotkAXQ0--Hu-FiChO9F5VooHdaHtxfT1xYTY0jBbwOYKYsOaEqHtYyTmDh4bLCNVSeRl2v8oHn62Kjx2sUHgOQjpQpqmrhiCyb1yluRKLTOfRRzgrH4xd03lpPZARyq6rEi8JvHnff-anzsTDvnHR2gHE5pLkjdECwron1TLaT2gjy40rHTBEbJ7Pz7YnzsFhGXMP4zwXNtnZy6wIpL5wMSiqzJxljda_MaVShg_jzMOMpT6IBkj0Om9xBnbJOjrb3c")`}}></div>
                  <p className="text-black text-xs font-mono font-bold tracking-widest mt-2">ID: T-8721-X99</p>
                </div>
              </div>
              <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-4 py-8 px-8 text-left">
                <div>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-1">Confirmation Ticket</p>
                  <h3 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em]">Main Stage: Student Pass</h3>
                  <div className="flex items-center gap-2 text-white/60 text-sm mt-1">
                    <span className="material-symbols-outlined text-sm">calendar_month</span>
                    <span>October 24, 2024 • 09:00 AM</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span>University Auditorium, Leuven</span>
                  </div>
                </div>
                <div className="h-px bg-white/10 w-full"></div>
                <div className="flex flex-wrap items-center gap-4 justify-between">
                  <p className="text-white/40 text-sm font-normal leading-normal italic">Scan this digital ticket at the entrance for quick entry.</p>
                  <div className="flex gap-2 w-full md:w-auto">
                    <button className="flex-1 md:flex-none flex min-w-[120px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal hover:bg-red-700 transition-all shadow-lg shadow-primary/20">
                      <span className="material-symbols-outlined text-sm">event</span>
                      <span className="truncate uppercase">Add to Calendar</span>
                    </button>
                    <button className="flex-1 md:flex-none flex min-w-[100px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-white/10 text-white text-sm font-medium leading-normal hover:bg-white/20 transition-all uppercase">
                      <span className="material-symbols-outlined text-sm">download</span>
                      <span className="truncate">PDF</span>
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
