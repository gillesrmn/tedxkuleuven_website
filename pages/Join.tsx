
import React from 'react';
import { Link } from 'react-router-dom';

const Join: React.FC = () => {
  return (
    <div className="bg-background-dark font-display min-h-screen text-left">
      <main className="flex-1">
        {/* Hero */}
        <div className="px-6 md:px-40 flex justify-center py-10">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            <div className="flex flex-col gap-6 py-10 md:gap-12 md:flex-row items-center">
              <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-2xl md:min-w-[400px] md:w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border border-zinc-800" 
                   style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCC9ndfdNdgG9JyiIxQ2Jf53KDXWtH036VOeUfhjHRdNsdFmzZrj7T6SpyMezVWTMOmxM_b_eT78o5ZcwtnONdmcZFcHhjsxSKHvzVpS0PEp0udk3Ou-fXaG00VVa2AqKL9O8SCGeS3V6VaC2MSBJbCexgiTgv7edqE9GrAcZ8PsM_Jm23S0-BynzLYScJuR3_m0Xx5dXSIGFHn5anGC-_vGT8zpiicORcuOZ6OlfjKNldk8nmpPx7t0ZMM8L0HZTxL0wdJKtYY-JI")`}}></div>
              <div className="flex flex-col gap-6 md:min-w-[400px] md:gap-8 justify-center">
                <div className="flex flex-col gap-3">
                  <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight uppercase">
                    Team Structure & Responsibilities
                  </h1>
                  <h2 className="text-gray-400 text-base md:text-xl font-normal leading-relaxed">
                    Building a platform for ideas requires a symphony of diverse skills. Discover how our departments collaborate to bring TEDxKU Leuven to life.
                  </h2>
                </div>
                <div className="flex gap-4">
                  <Link to="/apply" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-primary text-white text-base font-bold transition-transform hover:scale-105 uppercase tracking-widest shadow-xl shadow-primary/20">
                    Current Openings
                  </Link>
                  <Link to="/team" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-zinc-800 text-white text-base font-bold border border-zinc-700 hover:border-primary transition-all uppercase tracking-widest">
                    The Board
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="px-6 md:px-40 flex justify-center py-20 bg-[#111111]">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-primary text-7xl mb-6 font-black">groups</span>
              <h2 className="text-white text-5xl font-black leading-tight tracking-tight pb-6 uppercase">Our Team Mission</h2>
              <p className="text-gray-300 text-xl font-normal leading-relaxed max-w-3xl">
                To create a professional yet experimental platform that sparks deep discussion and connection, powered by the diverse talents and academic excellence of KU Leuven's global student body.
              </p>
            </div>
          </div>
        </div>

        {/* Hierarchy Diagram */}
        <div className="px-6 md:px-40 flex justify-center py-24">
          <div className="layout-content-container flex flex-col max-w-[1100px] flex-1">
            <h2 className="text-white text-4xl font-black leading-tight tracking-tight pb-16 text-center uppercase">Organizational Hierarchy</h2>
            <div className="flex flex-col items-center">
              <div className="bg-primary p-10 rounded-2xl text-white text-center w-full max-w-xl shadow-[0_0_50px_rgba(233,28,28,0.2)]">
                <h3 className="text-3xl font-black uppercase tracking-[0.3em] mb-2">Executive Board</h3>
                <p className="text-lg text-white/90 italic font-medium">Strategic Direction & Global Representation</p>
              </div>
              <div className="w-[2px] h-20 bg-gradient-to-b from-primary to-zinc-800"></div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
                {[
                  { title: "Production", icon: "theater_comedy", tasks: ["Venue Logistics", "Stage Design", "AV Management"] },
                  { title: "Curation", icon: "psychology_alt", tasks: ["Speaker Selection", "Speech Coaching", "Theme Concept"] },
                  { title: "Marketing", icon: "campaign", tasks: ["Social Media", "Brand Design", "Public Relations"], link: "/join/marketing" },
                  { title: "Operations", icon: "handshake", tasks: ["Partnerships", "Finances", "Human Resources"] }
                ].map((dept, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <Link to={dept.link || "#"} className="w-full bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-2xl hover:border-primary/50 transition-all group">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="material-symbols-outlined text-primary text-4xl">{dept.icon}</span>
                        <h4 className="font-black text-xl uppercase tracking-wider">{dept.title}</h4>
                      </div>
                      <ul className="text-sm space-y-4 text-gray-400">
                        {dept.tasks.map((task, ti) => (
                          <li key={ti} className="flex items-start gap-3">• <span className="group-hover:text-white transition-colors">{task}</span></li>
                        ))}
                      </ul>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Core Responsibilities Grid */}
        <div className="px-6 md:px-40 flex justify-center py-20 bg-[#111111]">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <h2 className="text-white text-4xl font-black leading-tight tracking-tight pb-12 uppercase">Core Responsibilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Speakers & Curation", icon: "mic", desc: "The Curation team is the heart of our intellectual content. They identify potential speakers, conduct auditions, and work closely with chosen speakers for months to refine their 'Idea Worth Spreading'." },
                { title: "Creative & Media", icon: "palette", desc: "Responsible for all visual touchpoints. This team manages our digital presence, photography, and high-quality video production to ensure our speakers' talks reach a global audience." },
                { title: "Event Experience", icon: "celebration", desc: "Focused on what happens off-stage. They design the attendee journey, from registration and catering to interactive workshops and networking sessions during event breaks." },
                { title: "External Relations", icon: "finance", desc: "The bridge between TEDxKU Leuven and the professional world. They secure sponsorships, manage institutional relationships with KU Leuven, and handle the organizational budget." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-5 p-10 bg-zinc-900 rounded-2xl border border-zinc-800 hover:bg-zinc-800/80 transition-all group">
                  <h3 className="font-black text-2xl flex items-center gap-4 uppercase tracking-wide">
                    <span className="material-symbols-outlined text-primary text-4xl">{item.icon}</span>
                    {item.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-400 group-hover:text-zinc-300 transition-colors">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="px-6 md:px-40 flex justify-center py-24">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="bg-primary rounded-[3rem] p-16 text-center shadow-2xl relative overflow-hidden">
              <h2 className="text-5xl font-black mb-8 uppercase tracking-tighter">Ready to Join the Movement?</h2>
              <p className="mb-12 text-white/90 text-xl max-w-2xl mx-auto leading-relaxed">
                We recruit new team members annually in October. Whether you're an engineer, artist, or business student, there's a place for you to grow.
              </p>
              <Link to="/apply" className="inline-block bg-white text-primary px-12 py-5 rounded-xl font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-xl uppercase tracking-widest">
                Check Active Recruitment
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Join;
