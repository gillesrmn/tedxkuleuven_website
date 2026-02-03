
import React from 'react';

const SpeakerApplication: React.FC = () => {
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
            <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Submit your Concept</p>
            <p className="text-neutral-400 text-base font-normal leading-normal">Ready to step onto the red circle? Fill out the details below to nominate yourself or someone else.</p>
          </div>
        </div>

        <form className="space-y-8">
          <div>
            <h2 className="text-white text-[22px] font-bold leading-tight flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary">person</span>
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input className="bg-neutral-900 border-neutral-800 rounded-lg p-4 text-white focus:ring-primary focus:border-primary outline-none" placeholder="First Name" />
              <input className="bg-neutral-900 border-neutral-800 rounded-lg p-4 text-white focus:ring-primary focus:border-primary outline-none" placeholder="Last Name" />
              <input className="bg-neutral-900 border-neutral-800 rounded-lg p-4 text-white focus:ring-primary focus:border-primary outline-none" placeholder="Email Address" type="email" />
              <input className="bg-neutral-900 border-neutral-800 rounded-lg p-4 text-white focus:ring-primary focus:border-primary outline-none" placeholder="Organization/Department" />
            </div>
          </div>

          <div>
            <h2 className="text-white text-[22px] font-bold leading-tight flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary">lightbulb</span>
              Talk Idea & Title
            </h2>
            <div className="flex flex-col gap-6">
              <input className="bg-neutral-900 border-neutral-800 rounded-lg p-4 text-white focus:ring-primary focus:border-primary outline-none" placeholder="Final Title of your Talk" />
              <textarea className="bg-neutral-900 border-neutral-800 rounded-lg p-4 text-white focus:ring-primary focus:border-primary min-h-[160px] outline-none" placeholder="Briefly describe your idea and why it matters to the world..."></textarea>
            </div>
          </div>

          <div className="flex flex-col items-center pt-10">
            <button className="flex min-w-[240px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-primary text-white text-lg font-bold hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/10 uppercase tracking-widest">
              Submit Application
            </button>
            <p className="text-neutral-600 text-xs mt-4">By submitting, you agree to our terms and speaker guidelines.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SpeakerApplication;
