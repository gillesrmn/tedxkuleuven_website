
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen py-20 px-6 font-display text-left">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-black dark:text-white text-5xl font-black mb-4">Privacy Policy</h1>
        <p className="text-zinc-500 mb-12">Last updated: October 24, 2023</p>
        
        <div className="space-y-10 text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <p className="text-lg">TEDxKU Leuven is committed to protecting your privacy. This policy explains how we handle your information.</p>
          
          <section>
            <h2 className="text-primary text-2xl font-bold uppercase mb-4 tracking-wide">1. Data Collection</h2>
            <p>We collect information you provide directly (name, email, etc.) when you register for events or contact us.</p>
          </section>

          <section>
            <h2 className="text-primary text-2xl font-bold uppercase mb-4 tracking-wide">2. Data Usage</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Manage registrations and provide support.</li>
              <li>Send newsletters about upcoming activities.</li>
              <li>Improve website content for our audience.</li>
            </ul>
          </section>

          <div className="bg-zinc-100 dark:bg-zinc-900 p-8 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-black dark:text-white text-xl font-bold mb-4">Contact Our Privacy Team</h3>
            <p className="text-primary font-bold">privacy@tedxkuleuven.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
