
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Events: React.FC = () => {
  const { eventInfo, speakers } = useApp();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date(eventInfo.date).getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [eventInfo.date]);

  const formattedDate = new Date(eventInfo.date).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  const formattedTime = new Date(eventInfo.date).toLocaleTimeString('en-GB', {
    hour: '2-digit', minute: '2-digit'
  });

  const heroStyle = eventInfo.coverImg 
    ? { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%), url("${eventInfo.coverImg}")` }
    : { backgroundImage: `linear-gradient(rgba(230, 43, 30, 0.4) 0%, rgba(10, 10, 10, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAi0FrdnJxt0MGs98wFUfbVviCot74_-asR-C121W9HL8I6vT-JM3NTCixi-8cz6ZfMep8ShqiXABYrTPGc48aWuZdZve0vVpwSBdzpfr83FrvCxQBbKjNYcXXoRcAMrxiAdDt6Xig1ZUINH9pDB7MghvHSuwzPyiAoX6jYg8_NMPbeXdtkSirM6ufdiz_s51r5G9cYeDUeybX-mhMdMS-WNHO39IrO824bANgc5kija9Hx2lv0Y-VImwodzQtW9ublr3h8fj2XFWU")` };

  return (
    <div className="bg-background-dark min-h-screen text-left">
      <div className="flex justify-center pt-10 px-6">
        <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
          <div className="relative min-h-[450px] flex flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-2xl items-center justify-center p-8 border border-white/5 shadow-2xl overflow-hidden" 
               style={heroStyle}>
            <div className="flex flex-col gap-4 text-center max-w-2xl relative z-10">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Next Flagship Event</span>
              <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight uppercase">{eventInfo.title}</h1>
              <p className="text-gray-400 text-lg md:text-xl font-medium">{eventInfo.description}</p>
            </div>
            
            <div className="flex gap-4 py-6 px-4 w-full max-w-lg relative z-10">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex grow basis-0 flex-col items-stretch gap-2">
                  <div className="flex h-16 md:h-20 grow items-center justify-center rounded-xl px-3 bg-white/5 backdrop-blur-md border border-white/10">
                    <p className="text-white text-2xl md:text-3xl font-black">{String(value).padStart(2, '0')}</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="text-white/40 text-xs font-bold uppercase tracking-wider capitalize">{unit}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/tickets" className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-primary text-white text-lg font-extrabold leading-normal tracking-[0.015em] hover:bg-red-700 hover:scale-105 transition-all uppercase tracking-widest relative z-10">
              <span className="truncate">Get Your Tickets</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-white text-3xl font-black mb-8 border-l-4 border-primary pl-4 uppercase tracking-tighter">Practical Information</h2>
            <div className="space-y-8 text-white">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary">schedule</span>
                <div>
                  <h4 className="font-bold uppercase tracking-tighter text-sm">Time</h4>
                  <p className="text-zinc-400 font-medium">{formattedDate} • Starts at {formattedTime}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <div>
                  <h4 className="font-bold uppercase tracking-tighter text-sm">Venue</h4>
                  <p className="text-zinc-400 font-medium">{eventInfo.venue}</p>
                </div>
              </div>
              
              {/* CONDITIONAL RED REMARKS BOX */}
              {eventInfo.remarks && (
                <div className="flex gap-4 bg-primary/10 p-6 rounded-2xl border border-primary/20 animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <span className="material-symbols-outlined text-primary">info</span>
                  <div>
                    <h4 className="font-bold uppercase tracking-tighter text-sm text-primary mb-1">Important Remarks</h4>
                    <p className="text-zinc-300 text-sm font-medium leading-relaxed">
                      {eventInfo.remarks}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <h2 className="text-white text-3xl font-black mb-8 border-l-4 border-primary pl-4 uppercase tracking-tighter">Event Timeline</h2>
            <div className="space-y-4">
              {eventInfo.timeline.map((item) => (
                <div key={item.id} className="flex gap-6 items-center p-4 bg-zinc-900 border border-zinc-800 rounded-xl group hover:border-primary/30 transition-all">
                  <span className="text-primary font-black text-lg w-16">{item.time}</span>
                  <p className="text-white font-black uppercase tracking-tighter text-sm">{item.activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-white text-3xl font-black mb-12 border-l-4 border-primary pl-4 uppercase tracking-tighter">Current Speaker Lineup</h2>
          {speakers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {speakers.map((speaker) => (
                <a key={speaker.id} href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="group block bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-primary/50 transition-all">
                  <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src={speaker.img} alt={speaker.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-white text-2xl font-black mb-1 uppercase tracking-tighter group-hover:text-primary transition-colors">{speaker.name}</h3>
                    <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-4">"{speaker.talkTitle}"</p>
                    <p className="text-zinc-400 text-sm leading-relaxed font-medium">{speaker.bio}</p>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="bg-zinc-900/50 rounded-3xl border border-dashed border-zinc-800 p-20 text-center">
              <span className="material-symbols-outlined text-primary text-6xl mb-6">campaign</span>
              <p className="text-white text-2xl font-black uppercase tracking-tighter">Speakers will be announced shortly</p>
              <p className="text-zinc-500 mt-2 font-medium">Follow us on social media for the latest reveal.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
