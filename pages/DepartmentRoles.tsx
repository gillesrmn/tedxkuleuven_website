
import React from 'react';
import { Link } from 'react-router-dom';

const DepartmentRoles: React.FC = () => {
  return (
    <div className="bg-background-dark font-display min-h-screen text-white text-left">
      <main className="flex flex-1 justify-center py-10 bg-black">
        <div className="layout-content-container flex flex-col max-w-[1000px] flex-1">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap gap-2 px-6 mb-10">
            <Link className="text-zinc-500 text-sm font-medium hover:text-primary transition-colors" to="/">Home</Link>
            <span className="text-zinc-700 text-sm font-medium">/</span>
            <Link className="text-zinc-500 text-sm font-medium hover:text-primary transition-colors" to="/join">Recruitment</Link>
            <span className="text-zinc-700 text-sm font-medium">/</span>
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Marketing Department</span>
          </div>

          {/* Hero Banner */}
          <div className="px-6 mb-16">
            <div className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-3xl min-h-[400px] relative border border-zinc-800" 
                 style={{backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 60%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBY6I7SKXFdj96RP3vGI72NlvL6Ox7_DDWMHk0I7ZS-doPf_CPdz-MvvkBe_sHF-HEJ2ugTWVGdajJ2-om4D-dxJaI23U6JT_YgUQrGeLMMhsCPCWNkzC1nQ6kTxyTXSVXGJ_wKRTsuJ7jd9P5wrA-J50ZXGvkjceJtzr7jc-pAW2uMYzpC9fyK1btP-6BtqAQwhGwnbLEottoGgoDEH6t13AlpTtk-7sMz3FEFbC2XVHHjtwMkZmha0ix4YWjgP5XvzOxvZD3bh6U")`}}>
              <div className="flex p-12 flex-col gap-4">
                <span className="bg-primary text-white text-xs font-black uppercase tracking-[0.3em] px-4 py-2 rounded w-fit">Deep Dive</span>
                <h1 className="text-white tracking-tight text-6xl font-black leading-tight uppercase">Marketing Department</h1>
                <p className="text-zinc-300 text-xl max-w-2xl mt-4 leading-relaxed font-medium">
                  The voice of TEDxKU Leuven. We bridge the gap between "Ideas Worth Spreading" and our community through digital innovation and creative storytelling.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="px-6 py-12 mb-16">
            <h2 className="text-white text-4xl font-black leading-tight tracking-tight mb-10 flex items-center gap-4 uppercase">
              <span className="w-2 h-10 bg-primary"></span>
              Our Mission
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-zinc-300">
              <div className="flex flex-col gap-4 p-8 bg-zinc-900 border border-zinc-800 rounded-2xl">
                <span className="material-symbols-outlined text-primary text-5xl font-black">campaign</span>
                <h3 className="text-white font-black text-xl uppercase tracking-widest">Brand Identity</h3>
                <p className="text-sm leading-relaxed text-zinc-400">Defining and maintaining the visual and verbal language of TEDxKU Leuven across all platforms.</p>
              </div>
              <div className="flex flex-col gap-4 p-8 bg-zinc-900 border border-zinc-800 rounded-2xl">
                <span className="material-symbols-outlined text-primary text-5xl font-black">hub</span>
                <h3 className="text-white font-black text-xl uppercase tracking-widest">Engagement</h3>
                <p className="text-sm leading-relaxed text-zinc-400">Building a vibrant community of students, speakers, and partners through interactive digital strategy.</p>
              </div>
              <div className="flex flex-col gap-4 p-8 bg-zinc-900 border border-zinc-800 rounded-2xl">
                <span className="material-symbols-outlined text-primary text-5xl font-black">auto_graph</span>
                <h3 className="text-white font-black text-xl uppercase tracking-widest">Growth</h3>
                <p className="text-sm leading-relaxed text-zinc-400">Strategizing event promotion to ensure every seat is filled and every voice is heard.</p>
              </div>
            </div>
          </div>

          {/* Roles Grid */}
          <div className="px-6 py-6 mb-16">
            <h2 className="text-white text-4xl font-black leading-tight tracking-tight mb-10 uppercase">Available Roles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                { title: "Social Media Manager", icon: "share", commit: "6-8 hrs/week", desc: "Shape our digital narrative. Lead the strategy for Instagram, LinkedIn, and Facebook to foster a global community.", tasks: ["Content scheduling & strategy", "Community engagement & DMs", "Performance trend analysis"], skills: ["Copywriting", "Canva/PS", "Social Analytics"] },
                { title: "Content Creator", icon: "photo_camera", commit: "5-7 hrs/week", desc: "Translate ideas into visual impact. Create high-quality multimedia assets that resonate with our audience.", tasks: ["Photography & cinematic reels", "Graphic design for web/print", "Post-production & editing"], skills: ["Adobe CC", "Photography", "Visual Eye"] }
              ].map((role, i) => (
                <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-primary/50 transition-all group shadow-2xl">
                  <div className="flex items-start justify-between mb-8">
                    <div className="p-5 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-all">
                      <span className="material-symbols-outlined text-primary text-4xl font-black">{role.icon}</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-1">Commitment</span>
                      <span className="text-sm font-black text-primary uppercase">{role.commit}</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-black mb-4 text-white uppercase tracking-tight">{role.title}</h3>
                  <p className="text-zinc-400 mb-8 leading-relaxed font-medium">{role.desc}</p>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xs font-black text-zinc-300 uppercase tracking-[0.2em] mb-4">Key Responsibilities</h4>
                      <ul className="text-sm text-zinc-400 space-y-3">
                        {role.tasks.map((t, ti) => (
                          <li key={ti} className="flex items-center gap-3"><span className="w-2 h-2 bg-primary rounded-full"></span>{t}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-zinc-300 uppercase tracking-[0.2em] mb-4">Required Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((s, si) => (
                          <span key={si} className="px-4 py-2 bg-black text-[10px] font-black text-zinc-300 rounded-full border border-zinc-800 uppercase tracking-widest">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Commitment Note */}
          <div className="mx-6 p-10 bg-zinc-900 rounded-2xl border-l-8 border-primary mb-20 shadow-xl">
            <div className="flex gap-6 items-center">
              <span className="material-symbols-outlined text-primary text-5xl font-black">update</span>
              <div>
                <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">Standard Commitment</h3>
                <p className="text-lg text-zinc-400 leading-relaxed font-medium">
                  All roles require attendance at our weekly general assembly (Wednesdays at 19:00). During the peak event month (March), commitment may increase slightly as we finalize production.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="flex flex-col items-center justify-center p-20 text-center bg-zinc-950 border border-zinc-800 rounded-[3rem] mx-6 shadow-3xl">
            <h2 className="text-5xl font-black mb-6 text-white uppercase tracking-tighter">Ready to join the movement?</h2>
            <p className="text-zinc-400 mb-12 max-w-xl text-xl leading-relaxed font-medium">
              We are looking for students who are passionate about sharing world-changing ideas. Applications for the upcoming cycle are now open.
            </p>
            <Link to="/apply" className="flex min-w-[280px] cursor-pointer items-center justify-center rounded-full h-20 px-12 bg-primary text-white text-xl font-black hover:scale-105 transition-all shadow-2xl shadow-primary/20 uppercase tracking-[0.2em]">
              Apply for Marketing
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DepartmentRoles;
