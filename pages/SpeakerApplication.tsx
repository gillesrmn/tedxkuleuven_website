
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

const SpeakerApplication: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', org: '', talkTitle: '', idea: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted! Your concept has been forwarded to curation@tedxkuleuven.com for review.");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-background-dark min-h-screen flex items-center justify-center p-6">
        <div className="text-center max-w-xl bg-zinc-900 border border-zinc-800 p-12 rounded-[2rem] shadow-2xl">
          <span className="material-symbols-outlined text-primary text-8xl mb-8">celebration</span>
          <h1 className="text-white text-5xl font-black mb-4 uppercase tracking-tighter">Submission Received</h1>
          <p className="text-zinc-400 text-xl font-medium">Thank you for sharing your idea with TEDxKU Leuven. Our curation team at curation@tedxkuleuven.com will review your concept and reach out if there's a potential fit for our upcoming stage.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background-dark min-h-screen text-white font-display pt-12 pb-20 text-left">
      <div className="layout-content-container flex flex-col w-full max-w-[960px] mx-auto px-6">
        <div className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-neutral-900 rounded-xl min-h-[300px] border border-neutral-800 relative" 
             style={{backgroundImage: `linear-gradient(0deg, rgba(10, 10, 10, 0.95) 0%, rgba(10, 10, 10, 0.6) 50%, rgba(10, 10, 10, 0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDsuFu8hQ-xCOt1oojnKNmaxJekT9LCzDw-M5g-7CBH4-TJbkXE-DQGy8v6AfkT-vTkyZo_FYETnQJD6pmPmAWAVl92uR-e78gHzB8_KzSBVHhvBQDsM3yjfGJt2OEhnCMNJgNpeuHtF58L0njImGSkJJwGx7luLhAomZxMd0sH_rqADWXh8Kf8p5oQxo2HIYJOtA9VLlDdYuzqABzVAau46npz-VJ_JP2MDeC19O2BPoOvHYa-vYsowOX3V6gjC6zMgdiNNxVPJJI")`}}>
          <div className="flex p-8">
            <div className="flex flex-col gap-2">
              <span className="bg-primary px-3 py-1 rounded-full text-xs font-bold w-fit mb-2">OPEN CALL</span>
              <p className="text-white tracking-light text-4xl font-black leading-tight">Speaker Application</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 py-12">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em] uppercase">Submit your Concept</p>
            <p className="text-zinc-400 text-base font-normal leading-normal font-medium">Ready to step onto the red circle? Fill out the details below to nominate yourself or someone else.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          <div>
            <h2 className="text-white text-2xl font-black uppercase tracking-tight flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-primary">person</span>
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">First Name</label>
                <input required value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-white focus:ring-primary focus:border-primary outline-none" placeholder="e.g. Maria" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Last Name</label>
                <input required value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-white focus:ring-primary focus:border-primary outline-none" placeholder="e.g. Janssens" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Email Address</label>
                <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-white focus:ring-primary focus:border-primary outline-none" placeholder="maria@kuleuven.be" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Organization</label>
                <input value={formData.org} onChange={e => setFormData({...formData, org: e.target.value})} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-white focus:ring-primary focus:border-primary outline-none" placeholder="e.g. Faculty of Engineering" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-white text-2xl font-black uppercase tracking-tight flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-primary">lightbulb</span>
              Talk Idea & Title
            </h2>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Working Title</label>
                <input required value={formData.talkTitle} onChange={e => setFormData({...formData, talkTitle: e.target.value})} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-white focus:ring-primary focus:border-primary outline-none" placeholder="What would your talk be called?" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">The Idea (The 'What' and 'Why')</label>
                <textarea required value={formData.idea} onChange={e => setFormData({...formData, idea: e.target.value})} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-white focus:ring-primary focus:border-primary min-h-[200px] outline-none resize-none" placeholder="Briefly describe your idea and why it matters to the world..."></textarea>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center pt-10">
            <button type="submit" className="flex min-w-[280px] cursor-pointer items-center justify-center rounded-xl h-16 px-10 bg-primary text-white text-lg font-black hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/20 uppercase tracking-widest">
              Submit Application
            </button>
            <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest mt-6">By submitting, you agree to our terms and speaker guidelines.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SpeakerApplication;
