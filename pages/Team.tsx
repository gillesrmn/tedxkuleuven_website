
import React, { useState } from 'react';

const Team: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'current' | 'alumni'>('current');
  const [activeFilter, setActiveFilter] = useState('All Members');

  const members = [
    { name: "Anna Smith", role: "President", dept: "Executive", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmevElDtfRkdEvqAk1rTd_cqR0I-3KUkS13Oylh6akRq_hLU6aI4xyJUaDjfjDi_KTspfI-LOFayCVUKYK7vBlzb058_68Ub3_O9Qvb3phCxQUPJUrT4mUW-EL8JsOa-_gXiVoiz_8BULVzYY5CSP3D7dJhl2R1WGf9U-CwRdhAGpL0vyKReefNH3g74rG8TIYuySPxDycMuw_0PLmvWYEm-Lh_FmOCVCDEtsUi35KgfplB2B6sTlh-xJgy3G9pbmjeyAoJLep9oE", status: 'current' },
    { name: "John Doe", role: "Head of Curation", dept: "Curation", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoTKg4OvtdngZzGX1fffzmQHeDXUQ9vFUQvkF06dP6pr6HbywxHHnB0nAOpGrm3h64Pr5DLHz6BGP3o18nvLAuF-LTsXz2Z5LUCo-L_2Tg3BI0FffE9zfCBIsrO9pDD39Y9ZLbw7srfU_LaYOu64SGyw8n4vC_Y8-s_bg5KBNfLbuDnX6BHAU3fmfPZRkRK4KeB4V7JJweQuowTy7-BZRnphFPKMYM-k-I-3HXWhIb1PpqDHt8sXVJI2hnwwEq_52q2jmYQP0O-0w", status: 'current' },
    { name: "Sarah Lee", role: "Marketing Lead", dept: "Marketing", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwskkTp6UjxNd4t6EEqfINhxdIFn_UnU6MSbweQNrbEMhpP9DmakfcCokjqoDYKBWk6yJxbRCV22q4nGDIl93IN9s2jGkgpgqowgn1hYymdcuoqnWWpZ1mlI1HUvsrZn8KHf5NiuD6-0d-xi0oFT3GQlsWFQiY6To1PDBZNeWOvdUEo1LadLDR5mjRBw1ADMFWF2-6W9WJIMYkfAjGZjTL2bYmekLdAjczRznSba5-bE3jlrXDg8TjfSMpPXXR5DXWxom2nOIrhOY", status: 'current' },
    { name: "Mike Chen", role: "Finance Lead", dept: "Finance", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQOV6ANko8JKPeHEBpJ-_Gf_4P-nZ73nxKbjKv5hQ7PNJuBwURzb30d5tSW4F1Ck4ui_GiT6-vqIigPWchgPXOVDN46g-Z5lLASHzV2JMLAgaRfrunkEo5rPFIdPS6LQSd7o9v-Jp3qk1ROy3VwCFXbND545qOzsQwAAv_q7d5DnJnXmjK5hsxXeN93yj_hmZeo4C-2ov7kKwmMzc2FoT56iUxXOsn_YkM3uZQHjNJvjviOndqUyHYzcw6Omlihih9nqDQDqfSnh8", status: 'current' }
  ];

  const alumni = [
    { name: "David Kim", role: "Ex-President", year: "2022-2023" },
    { name: "Lucie Vervaet", role: "Head of Marketing", year: "2021-2022" },
    { name: "Sven De Clercq", role: "Logistics Lead", year: "2020-2021" },
    { name: "Marta Rossi", role: "Curation Lead", year: "2022-2023" }
  ];

  const filteredMembers = members.filter(m => 
    (activeFilter === 'All Members' || m.dept === activeFilter)
  );

  return (
    <div className="bg-background-dark py-20 px-6 font-display min-h-screen text-left">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16">
          <h1 className="text-white text-5xl lg:text-7xl font-extrabold leading-tight tracking-tighter mb-6 uppercase">Meet the Team</h1>
          <p className="text-zinc-500 text-xl font-normal max-w-2xl">The dedicated individuals shaping the conversation at KU Leuven. From current visionaries to the alumni who built our foundation.</p>
        </div>

        {/* Tab Selection */}
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
            {/* Filter Selection */}
            <div className="flex flex-wrap gap-4 mb-16">
              {['All Members', 'Executive', 'Curation', 'Marketing', 'Finance'].map(filter => (
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

            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredMembers.map((member, i) => (
                <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden group shadow-xl">
                  <div className="aspect-[4/5] grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-8">
                    <p className="text-primary font-black text-[10px] uppercase tracking-[0.2em] mb-2">{member.role}</p>
                    <h3 className="text-white text-2xl font-black">{member.name}</h3>
                    <p className="text-zinc-500 text-sm mt-4 leading-relaxed italic">"Ideas are the seeds of change."</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumni.map((alum, i) => (
              <div key={i} className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex flex-col gap-1">
                <h3 className="text-xl font-bold text-white">{alum.name}</h3>
                <p className="text-primary text-xs font-black uppercase tracking-widest">{alum.role}</p>
                <p className="text-zinc-500 text-sm font-medium mt-1">Active: {alum.year}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
