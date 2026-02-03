
import React from 'react';
import { useApp } from '../context/AppContext';

const PastEvents: React.FC = () => {
  const { pastEvents } = useApp();

  return (
    <div className="bg-background-dark min-h-screen text-white font-display text-left">
      <main className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="flex flex-col gap-6 mb-16">
          <h1 className="text-white text-5xl md:text-7xl font-black tracking-tighter uppercase">Past Events Archive</h1>
          <p className="text-zinc-400 text-xl font-normal max-w-2xl leading-relaxed">
            Diving into the collection of talks and moments that defined previous years of TEDxKU Leuven.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pastEvents.map((ev) => (
            <div key={ev.id} className="flex flex-col gap-6 group">
              <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-2xl overflow-hidden shadow-2xl relative border border-zinc-800">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{backgroundImage: `url("${ev.img}")`}}
                ></div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a 
                    href={ev.type === 'talk' ? ev.youtubeUrl : ev.flickrUrl} 
                    target="_blank" rel="noopener noreferrer"
                    className="bg-primary text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-xl"
                  >
                    {ev.type === 'talk' ? 'Watch Talk' : 'View Photos'}
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-white text-2xl font-black mb-1 group-hover:text-primary transition-colors uppercase tracking-tight">
                  {ev.type === 'talk' ? ev.title : ev.eventName}
                </h3>
                <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2">
                   {ev.type === 'talk' ? `${ev.speaker} @ ${ev.eventName}` : `Gallery • ${ev.eventName}`}
                </p>
                <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">{ev.date}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PastEvents;
