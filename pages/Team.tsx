
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

const Team: React.FC = () => {
  const { team, alumni } = useApp();
  const [activeTab, setActiveTab] = useState<'current' | 'alumni'>('current');
  const [activeFilter, setActiveFilter] = useState('All Members');

  const filteredMembers = team.filter(m => 
    (activeFilter === 'All Members' || m.dept === activeFilter)
  );

  return (
    <div className="bg-background-dark py-20 px-6 font-display min-h-screen text-left">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16">
          <h1 className="text-white text-5xl lg:text-7xl font-extrabold leading-tight tracking-tighter mb-6 uppercase">Meet the Team</h1>
          <p className="text-zinc-400 text-xl font-normal max-w-2xl leading-relaxed font-medium">The dedicated individuals shaping the conversation at KU Leuven. From current visionaries to the alumni who built our foundation.</p>
        </div>

        <div className="flex gap-12 border-b border-zinc-800 mb-16 relative">
          <button 
            onClick={() => setActiveTab('current')}
            className={`pb-4 text-xl font-black uppercase tracking-widest transition-all relative z-10 ${activeTab === 'current' ? 'text-white' : 'text-zinc-500 hover:text-white'}`}
          >
            Current Team
            {activeTab === 'current' && <div className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full"></div>}
          </button>
          <button 
            onClick={() => setActiveTab('alumni')}
            className={`pb-4 text-xl font-black uppercase tracking-widest transition-all relative z-10 ${activeTab === 'alumni' ? 'text-white' : 'text-zinc-500 hover:text-white'}`}
          >
            Alumni
            {activeTab === 'alumni' && <div className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full"></div>}
          </button>
        </div>

        {activeTab === 'current' ? (
          <>
            <div className="flex flex-wrap gap-4 mb-16">
              {['All Members', 'Executive', 'Curation', 'Marketing', 'Finance', 'Production', 'Operations'].map(filter => (
                <button 
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest transition-all border ${
                    activeFilter === filter 
                      ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20' 
                      : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredMembers.map((member) => (
                <div key={member.id} className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden group shadow-xl">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="block aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 relative">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-5xl">link</span>
                    </div>
                  </a>
                  <div className="p-8">
                    <p className="text-primary font-black text-[10px] uppercase tracking-[0.2em] mb-2">{member.role}</p>
                    <h3 className="text-white text-2xl font-black uppercase tracking-tight">{member.name}</h3>
                    <p className="text-zinc-500 text-sm mt-4 leading-relaxed italic">"Ideas are the seeds of change."</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {alumni.map((alum) => (
              <div key={alum.id} className="bg-zinc-900/50 p-10 rounded-2xl border border-zinc-800 flex flex-col gap-2 hover:border-primary/40 transition-all group">
                <a href={alum.linkedin} target="_blank" rel="noopener noreferrer" className="text-3xl font-black text-white hover:text-primary transition-colors uppercase tracking-tighter">
                  {alum.name}
                </a>
                <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest mt-2">
                  {alum.role} <span className="text-primary mx-2">—</span> {alum.year}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
