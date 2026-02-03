
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

const RecruitmentForm: React.FC = () => {
  const { addSubmission } = useApp();
  const [step, setStep] = useState(2);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', dept: '', motivation: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addSubmission({
      ...formData,
      id: Date.now().toString(),
      date: new Date().toISOString()
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-background-dark min-h-screen flex items-center justify-center p-6">
        <div className="text-center max-w-xl bg-zinc-900 border border-zinc-800 p-12 rounded-[2rem] shadow-2xl">
          <span className="material-symbols-outlined text-primary text-8xl mb-8">handshake</span>
          <h1 className="text-white text-5xl font-black mb-4 uppercase tracking-tighter">Application Sent</h1>
          <p className="text-zinc-400 text-xl font-medium">We've received your application to join the team. Our HR team will review it and get in touch shortly via your university email.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background-dark min-h-screen text-white font-display py-20 px-6 text-left">
      <div className="mx-auto max-w-[800px]">
        <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase">Team Recruitment Form</h1>
        <p className="text-zinc-400 font-medium mb-12">Shape the next big ideas. Join the student-led organizing team for TEDxKU Leuven.</p>

        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white font-black text-[10px] uppercase tracking-widest">Application Progress</span>
            <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Step {step} of 4</span>
          </div>
          <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-primary transition-all duration-500" style={{ width: `${(step / 4) * 100}%` }}></div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] overflow-hidden shadow-2xl">
          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-12">
            <section>
              <h2 className="text-2xl font-black mb-8 uppercase tracking-tight">Personal Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">First Name</label>
                  <input required value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none" placeholder="e.g. Marie" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Last Name</label>
                  <input required value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none" placeholder="e.g. Janssen" />
                </div>
              </div>
              <div className="mt-8 space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">University Email</label>
                <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none" placeholder="name@student.kuleuven.be" />
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-8 border-t border-zinc-800 pt-12 uppercase tracking-tight">Role Preferences</h2>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-6">Which department are you interested in?</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Marketing", "Logistics", "Curation", "Finance"].map((dept) => (
                  <label key={dept} className="flex items-center gap-4 bg-zinc-950 border border-zinc-800 rounded-xl p-5 cursor-pointer hover:border-primary/50 transition-all group">
                    <input required type="radio" name="dept" value={dept} onChange={e => setFormData({...formData, dept: e.target.value})} className="size-5 border-zinc-700 bg-zinc-800 text-primary focus:ring-primary" />
                    <span className="text-zinc-300 font-bold uppercase tracking-widest text-xs group-hover:text-white">{dept}</span>
                  </label>
                ))}
              </div>
            </section>

            <section>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Motivation</label>
                <textarea required value={formData.motivation} onChange={e => setFormData({...formData, motivation: e.target.value})} className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-6 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none min-h-[160px] resize-none" placeholder="Share your story and your vision for the event..."></textarea>
              </div>
            </section>

            <div className="flex justify-between items-center pt-8 border-t border-zinc-800">
              <button type="button" className="px-10 py-4 bg-zinc-800 text-white font-black uppercase tracking-widest text-xs rounded-xl hover:bg-zinc-700 transition-all">Back</button>
              <button type="submit" className="px-12 py-4 bg-primary text-white font-black uppercase tracking-widest text-xs rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-primary/20">Submit Application</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentForm;
