
import React, { useState } from 'react';

const RecruitmentForm: React.FC = () => {
  const [step, setStep] = useState(2); // Start at step 2 to match screenshot

  return (
    <div className="bg-background-dark min-h-screen text-white font-display py-20 px-6 text-left">
      <div className="mx-auto max-w-[800px]">
        <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">Team Recruitment Form</h1>
        <p className="text-zinc-500 mb-12">Shape the next big ideas. Join the student-led organizing team for TEDxKU Leuven 2024.</p>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white font-bold text-sm uppercase tracking-widest">Application Progress</span>
            <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Step {step} of 4</span>
          </div>
          <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-primary transition-all duration-500" style={{ width: `${(step / 4) * 100}%` }}></div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] overflow-hidden shadow-2xl">
          <div className="p-8 md:p-12 space-y-12">
            
            {/* Personal Details Section */}
            <section>
              <h2 className="text-2xl font-black mb-8">Personal Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-400">First Name</label>
                  <input className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none" placeholder="e.g. Marie" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-400">Last Name</label>
                  <input className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none" placeholder="e.g. Janssen" />
                </div>
              </div>
              <div className="mt-8 space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-zinc-400">University Email</label>
                <input className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none" placeholder="name@student.kuleuven.be" type="email" />
              </div>
            </section>

            {/* Role Preferences Section */}
            <section>
              <h2 className="text-2xl font-black mb-8 border-t border-zinc-800 pt-12">Role Preferences</h2>
              <p className="text-zinc-400 text-sm mb-6">Which department are you interested in?</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Marketing & Communication", 
                  "Logistics & Event Planning", 
                  "Speaker Selection", 
                  "Sponsorship & Finance"
                ].map((role) => (
                  <label key={role} className="flex items-center gap-4 bg-zinc-950 border border-zinc-800 rounded-xl p-5 cursor-pointer hover:border-primary/50 transition-all group">
                    <input type="radio" name="dept" className="size-5 border-zinc-700 bg-zinc-800 text-primary focus:ring-primary" />
                    <span className="text-zinc-300 font-bold group-hover:text-white">{role}</span>
                  </label>
                ))}
              </div>
            </section>

            {/* Motivation Section */}
            <section>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-zinc-400">Motivation (Why do you want to join TEDxKU Leuven?)</label>
                <textarea className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-6 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none min-h-[160px] resize-none" placeholder="Share your story and your vision for the event..."></textarea>
              </div>
            </section>

            {/* File Upload Section */}
            <section>
              <label className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-4 block">Upload CV / Portfolio</label>
              <div className="w-full bg-zinc-950 border-2 border-dashed border-zinc-800 rounded-2xl p-10 flex flex-col items-center justify-center gap-4 group cursor-pointer hover:border-primary/30 transition-all">
                <span className="material-symbols-outlined text-zinc-500 text-4xl group-hover:scale-110 transition-transform">upload_file</span>
                <div className="text-center">
                  <p className="text-white font-bold"><span className="text-primary">Click to upload</span> or drag and drop</p>
                  <p className="text-zinc-600 text-[10px] uppercase tracking-widest mt-1">PDF, DOCX (Max. 10MB)</p>
                </div>
              </div>
            </section>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-8 border-t border-zinc-800">
              <button className="px-10 py-4 bg-zinc-800 text-white font-black uppercase tracking-widest text-xs rounded-xl hover:bg-zinc-700 transition-all">
                Back
              </button>
              <button className="px-12 py-4 bg-primary text-white font-black uppercase tracking-widest text-xs rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-primary/20">
                Continue
              </button>
            </div>
          </div>
        </div>

        <p className="mt-12 text-center text-zinc-600 text-[10px] uppercase tracking-widest">© 2024 TEDxKU Leuven. This event is independently organized.</p>
      </div>
    </div>
  );
};

export default RecruitmentForm;
