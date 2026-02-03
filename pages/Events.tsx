
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Events: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 24, hours: 12, minutes: 45, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-background-dark min-h-screen text-left">
      {/* Hero Countdown */}
      <div className="flex justify-center pt-10 px-6">
        <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
          <div className="relative min-h-[450px] flex flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-2xl items-center justify-center p-8 border border-white/5 shadow-2xl overflow-hidden" 
               style={{backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.85) 0%, rgba(10, 10, 10, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAi0FrdnJxt0MGs98wFUfbVviCot74_-asR-C121W9HL8I6vT-JM3NTCixi-8cz6ZfMep8ShqiXABYrTPGc48aWuZdZve0vVpwSBdzpfr83FrvCxQBbKjNYcXXoRcAMrxiAdDt6Xig1ZUINH9pDB7MghvHSuwzPyiAoX6jYg8_NMPbeXdtkSirM6ufdiz_s51r5G9cYeDUeybX-mhMdMS-WNHO39IrO824bANgc5kija9Hx2lv0Y-VImwodzQtW9ublr3h8fj2XFWU")`}}>
            <div className="flex flex-col gap-4 text-center max-w-2xl">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Next Flagship Event</span>
              <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight">Beyond Boundaries</h1>
              <p className="text-gray-400 text-lg md:text-xl font-medium">Join us for a day of transformative ideas and groundbreaking talks at KU Leuven.</p>
            </div>
            
            <div className="flex gap-4 py-6 px-4 w-full max-w-lg">
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

            <Link to="/tickets" className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-primary text-white text-lg font-extrabold leading-normal tracking-[0.015em] hover:bg-red-700 hover:scale-105 transition-all">
              <span className="truncate">Get Your Tickets</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Practical Info & Timeline */}
      <div className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-white text-3xl font-black mb-8 border-l-4 border-primary pl-4">Practical Information</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <div>
                  <h4 className="text-white font-bold">Venue</h4>
                  <p className="text-zinc-400">Pieter De Somer Aula, Naamsestraat 22, 3000 Leuven</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary">schedule</span>
                <div>
                  <h4 className="text-white font-bold">Time</h4>
                  <p className="text-zinc-400">Doors open: 09:30 AM | Event ends: 06:30 PM</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary">info</span>
                <div>
                  <h4 className="text-white font-bold">Entry Requirements</h4>
                  <p className="text-zinc-400">Please have your digital ticket and a valid ID (Student ID for student tickets) ready for scanning.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-white text-3xl font-black mb-8 border-l-4 border-primary pl-4">Day Timeline</h2>
            <div className="space-y-4">
              {[
                { time: "09:30", event: "Registration & Coffee" },
                { time: "10:30", event: "Opening Ceremony & Session 1" },
                { time: "12:30", event: "Lunch & Networking Lab" },
                { time: "14:00", event: "Session 2: The Future of Ethics" },
                { time: "15:30", event: "Interactive Workshops" },
                { time: "17:00", event: "Grand Finale: Session 3" },
                { time: "18:30", event: "Closing Reception" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-center p-4 bg-zinc-900 border border-zinc-800 rounded-xl">
                  <span className="text-primary font-black text-lg w-16">{item.time}</span>
                  <p className="text-white font-medium">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Speakers */}
      <div className="bg-black py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-white text-3xl font-black mb-12 border-l-4 border-primary pl-4 text-center lg:text-left">2024 Speaker Lineup</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { name: "Prof. Elena Rossi", bio: "Leading quantum physicist exploring the boundaries of matter and consciousness.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" },
              { name: "Marcus Thorne", bio: "Urban designer reimagining cities through the lens of radical inclusivity and green tech.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" },
              { name: "Sara Al-Fayed", bio: "Award-winning investigative journalist focusing on the impact of AI on democracy.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800" }
            ].map((speaker, i) => (
              <div key={i} className="group bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-primary/50 transition-all">
                <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={speaker.img} alt={speaker.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-8">
                  <h3 className="text-white text-2xl font-black mb-2">{speaker.name}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{speaker.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Past Events List */}
      <div className="flex justify-center pb-20 px-6">
        <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
          <div className="flex items-center justify-between pt-16 pb-12">
            <h2 className="text-white text-3xl font-black leading-tight tracking-tight">Past Events</h2>
            <div className="h-px grow mx-8 bg-white/10 hidden md:block"></div>
            <p className="text-gray-400 font-bold">Relive the moments</p>
          </div>

          <div className="flex flex-col gap-12">
            {[
              { 
                edition: '2023 Edition', 
                date: 'May 15, 2023', 
                title: 'The Future of Us', 
                desc: 'Exploring the intersection of humanity and technology, this event brought together 10 speakers to discuss how we can shape a better tomorrow together.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtFvUXJc8zqIi5jyrLK_jkWv16QEKSee02vpFIuFF8Eh_meGm7lVF_4F_gaWDb3rBtMYcleIGYMzGCTEbCt9xiWIRxy67gW9-eMnA7AofBG7ZyiAmMTfWgUbQD8ysUhWLhD0CgVtub9RGOkW0pOBYpbdph7tDch_W0NfaMDktZxEub8kR8-5eEWUtzuXf0jJksoACIbrWXRlr_jlMSQYR7elz3AVVaIjOtCh_hhwnMZyiyF6kcPMM46XcmDsgSAeBTzBVRRlKQ4sY'
              },
              { 
                edition: '2022 Edition', 
                date: 'November 20, 2022', 
                title: 'Connections', 
                desc: 'A deep dive into the invisible threads that bind us. From neurobiology to urban planning, we discovered how connectivity defines our existence.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFmM9DqvBUS0iATnA_XqJFnyqiGfuYjOCsbi9i32wyzOWsPDn0ZqXX4NsIsFnLKsxKQeNw2daJ9d1NHtGrK9tvOl9lRFW7yxrGB-7049itmmfjxHuViJVqj8t_Wv5iLB5ns51ZsTV0DiGZjFZo9ohWlkjAH0Cp3MNKKSGv1KE8YR6MR1oUUthNszUZvVP46oyKEfBdXPdJpfXRLahixHS0846GWBaQ0Q2Omyj_6956RNzc6Oadq8KckA1iu1CkSFnF06kspo9gTA0',
                reverse: true
              }
            ].map((ev, i) => (
              <div key={i} className={`group flex flex-col ${ev.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 bg-surface-dark rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 shadow-xl`}>
                <div className="w-full md:w-1/2 aspect-video overflow-hidden">
                  <div className="h-full w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" style={{backgroundImage: `url("${ev.img}")`}}></div>
                </div>
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center gap-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-primary text-[10px] font-black uppercase rounded-full tracking-widest text-white">{ev.edition}</span>
                    <span className="text-white/40 text-sm font-medium">{ev.date}</span>
                  </div>
                  <h3 className="text-3xl font-extrabold text-white group-hover:text-primary transition-colors">{ev.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-base">{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
