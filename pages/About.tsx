
import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const About: React.FC = () => {
  const { team } = useApp();
  
  // Executive roles to show on About page
  const executives = team.filter(m => 
    ['President', 'Vice-President', 'Financial Responsible'].includes(m.role)
  );

  return (
    <div className="bg-background-dark min-h-screen text-white font-display text-left">
      <main className="flex-1 flex flex-col items-center">
        {/* HeroSection: Mission */}
        <div className="w-full max-w-[1200px] px-4 md:px-6 mt-8">
          <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 text-center shadow-2xl" 
               style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7) 0%, rgba(24, 17, 17, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC8Pjjo62lmrPqUTg5MBF6KcQNnQV9PCCNR2tbBKWbm-X7vjpMpiblUi9rmQ4dQBx-FSDAcfim2ygY21QApSSk6I2ReOOGj4q3ql2L5yrDmilQr92R2bR53TeUep1JgXjI52cS2mSgV3CkTi_zpYC6HXMo2HtytXOcqE2EHPZuK7-CpulH54_Cdoaj4qc2hYR2mbj3TakXE45FrAZu6t5M7pTsEGJkFW8eIks2erFqgWTaEm_QVySVHwbdnwXo9mbqsv2g8n-7f8eQ")`}}>
            <div className="flex flex-col gap-4">
              <h1 className="text-white text-4xl font-black leading-tight tracking-tighter md:text-7xl uppercase">
                Ideas Worth Spreading
              </h1>
              <h2 className="text-gray-300 text-base font-normal max-w-2xl mx-auto md:text-xl leading-relaxed font-medium text-center">
                TEDxKU Leuven is a student-led organization hosting inspiring events at the heart of Leuven. We bring together diverse perspectives to spark conversation and connection.
              </h2>
            </div>
          </div>
        </div>

        {/* SectionHeader: The Organization */}
        <div className="w-full max-w-[1200px] flex flex-col items-center mt-24 px-6">
          <div className="w-full">
            <h2 className="text-white text-4xl font-black leading-tight tracking-tighter border-l-4 border-primary pl-4 mb-8 uppercase">The Organization</h2>
          </div>
          <p className="text-zinc-400 text-xl font-medium leading-relaxed text-left w-full mb-12 max-w-4xl">
            We strive to create a platform where local ideas meet global inspiration, fostering a community of thinkers and doers within KU Leuven. Our team consists of passionate students from various backgrounds, united by the curiosity to explore "ideas worth spreading."
          </p>
        </div>

        {/* SectionHeader: Team Teaser */}
        {executives.length > 0 && (
          <div className="w-full max-w-[1200px] px-6 mt-16">
            <h2 className="text-white text-4xl font-black leading-tight tracking-tighter text-center mb-16 uppercase">Executive Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
              {executives.map((member) => (
                <div key={member.id} className="flex flex-col items-center bg-[#1a1a1a] p-10 rounded-2xl shadow-xl border border-zinc-800 group hover:border-primary/50 transition-all">
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-6 ring-4 ring-primary/20">
                    <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src={member.img} alt={member.name} />
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">{member.name}</h3>
                  <p className="text-primary font-black text-[10px] mb-4 uppercase tracking-[0.2em]">{member.role}</p>
                  <p className="text-center text-zinc-500 text-sm leading-relaxed font-medium italic">"Ideas are the seeds of change."</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Community Photo */}
        <div className="w-full">
          <div className="relative w-full h-[600px] group border-t border-zinc-800">
            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2Rodog1JEzfg3Vt6WUWdA4X3cTXLKhTbS3k0t0_gRWzzrcSiXj6ZGEBk5dtrAXaGoZXrdCPw_b7svwLnPWmzkx6bIfc72JcizUtAt8GnLmslqL5E9meoeF-T949qE5IT6yxm_JakGqfugP31-Yg1VDuv3hvIZMT20fafkT854y4evMSwU0IIDz9S88fEMUVD8mI_7rJxl3q8_R22UhtqteLe5-cy1DxjMiXJnSKBqQ8LH9O_ywtPrQFI-l6bn8sYkP6bWz1OUqX8" alt="Team Group" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col items-center justify-end pb-24 text-center px-6">
              <h2 className="text-white text-5xl font-black mb-4 uppercase tracking-tighter">Join Our Community</h2>
              <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-bold">Every year, dozens of volunteers help us make TEDxKU Leuven a reality. Be part of the next journey.</p>
              <div className="flex gap-4">
                <Link to="/join" className="bg-primary text-white px-10 py-5 rounded-lg font-black uppercase tracking-widest flex items-center gap-3 hover:bg-red-700 transition-all shadow-xl shadow-primary/20 text-xs">
                  <span className="material-symbols-outlined font-black">group_add</span>
                  Volunteer with us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
