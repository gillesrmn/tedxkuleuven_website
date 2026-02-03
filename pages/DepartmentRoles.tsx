
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const DepartmentRoles: React.FC = () => {
  const { deptId } = useParams<{ deptId: string }>();
  
  // Department Data Mock (in a real app this would be in a store or from API)
  const deptMap: Record<string, any> = {
    marketing: {
      name: "Marketing",
      roles: [
        { title: "Social Media Manager", icon: "share", commit: "6-8 hrs/week", desc: "Shape our digital narrative. Lead the strategy for Instagram, LinkedIn, and Facebook.", tasks: ["Content scheduling", "Community engagement", "Analytics"], skills: ["Copywriting", "Design"] },
        { title: "Content Creator", icon: "photo_camera", commit: "5-7 hrs/week", desc: "Translate ideas into visual impact. Create high-quality multimedia assets.", tasks: ["Photography", "Graphic design", "Video editing"], skills: ["Adobe CC", "Visual Eye"] }
      ]
    },
    production: {
      name: "Production",
      roles: [
        { title: "Stage Designer", icon: "architecture", commit: "8-10 hrs/week", desc: "Design the physical environment where ideas come to life.", tasks: ["3D visualization", "Materials sourcing", "Setup management"], skills: ["AutoCAD/SketchUp", "Problem solving"] }
      ]
    },
    curation: {
      name: "Curation",
      roles: [
        { title: "Speaker Coach", icon: "record_voice_over", commit: "6-8 hrs/week", desc: "Work with speakers to refine their ideas worth spreading.", tasks: ["Speech structural analysis", "Performance coaching", "Script feedback"], skills: ["Public speaking", "Storytelling"] }
      ]
    },
    operations: {
      name: "Operations",
      roles: [
        { title: "Partnership Lead", icon: "handshake", commit: "5-7 hrs/week", desc: "Bridge the gap between TEDx and the corporate world.", tasks: ["Sponsor outreach", "Contract management", "Partner liaison"], skills: ["Negotiation", "Sales"] }
      ]
    }
  };

  const activeDept = deptMap[deptId || 'marketing'] || deptMap.marketing;

  return (
    <div className="bg-background-dark font-display min-h-screen text-white text-left">
      <main className="flex flex-1 justify-center py-10 bg-black">
        <div className="layout-content-container flex flex-col max-w-[1000px] flex-1 px-6">
          <div className="flex flex-wrap gap-2 mb-10">
            <Link className="text-zinc-500 text-sm font-medium hover:text-primary transition-colors" to="/">Home</Link>
            <span className="text-zinc-700 text-sm font-medium">/</span>
            <Link className="text-zinc-500 text-sm font-medium hover:text-primary transition-colors" to="/join">Recruitment</Link>
            <span className="text-zinc-700 text-sm font-medium">/</span>
            <span className="text-primary text-sm font-bold uppercase tracking-widest">{activeDept.name} Department</span>
          </div>

          <div className="mb-16">
            <div className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-3xl min-h-[400px] relative border border-zinc-800 p-12" 
                 style={{backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 60%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBY6I7SKXFdj96RP3vGI72NlvL6Ox7_DDWMHk0I7ZS-doPf_CPdz-MvvkBe_sHF-HEJ2ugTWVGdajJ2-om4D-dxJaI23U6JT_YgUQrGeLMMhsCPCWNkzC1nQ6kTxyTXSVXGJ_wKRTsuJ7jd9P5wrA-J50ZXGvkjceJtzr7jc-pAW2uMYzpC9fyK1btP-6BtqAQwhGwnbLEottoGgoDEH6t13AlpTtk-7sMz3FEFbC2XVHHjtwMkZmha0ix4YWjgP5XvzOxvZD3bh6U")`}}>
              <span className="bg-primary text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded w-fit mb-4">Department Spotlight</span>
              <h1 className="text-white tracking-tight text-6xl font-black leading-tight uppercase">{activeDept.name} Department</h1>
              <p className="text-zinc-300 text-xl max-w-2xl mt-4 leading-relaxed font-medium">
                Passionate about shaping the future of ideas at KU Leuven. Join our student-led movement and grow your skills in a professional, creative environment.
              </p>
            </div>
          </div>

          <h2 className="text-white text-4xl font-black leading-tight tracking-tight mb-10 uppercase">Available Roles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {activeDept.roles.map((role: any, i: number) => (
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
                <p className="text-zinc-400 mb-8 leading-relaxed font-bold">{role.desc}</p>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs font-black text-zinc-200 uppercase tracking-[0.2em] mb-4">Key Responsibilities</h4>
                    <ul className="text-sm text-zinc-400 space-y-3">
                      {role.tasks.map((t: string, ti: number) => (
                        <li key={ti} className="flex items-center gap-3 font-medium"><span className="w-2 h-2 bg-primary rounded-full"></span>{t}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-zinc-200 uppercase tracking-[0.2em] mb-4">Required Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((s: string, si: number) => (
                        <span key={si} className="px-4 py-2 bg-black text-[10px] font-black text-zinc-300 rounded-full border border-zinc-800 uppercase tracking-widest">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center p-20 text-center bg-zinc-950 border border-zinc-800 rounded-[3rem] mt-20 shadow-3xl">
            <h2 className="text-5xl font-black mb-6 text-white uppercase tracking-tighter">Ready to join the movement?</h2>
            <p className="text-zinc-400 mb-12 max-w-xl text-xl leading-relaxed font-bold">
              Applications for the upcoming cycle are now open. Don't miss your chance to step behind the stage.
            </p>
            <Link to="/apply" className="flex min-w-[280px] cursor-pointer items-center justify-center rounded-full h-20 px-12 bg-primary text-white text-xl font-black hover:scale-105 transition-all shadow-2xl shadow-primary/20 uppercase tracking-[0.2em]">
              Apply Now
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DepartmentRoles;
