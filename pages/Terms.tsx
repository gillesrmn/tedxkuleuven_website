
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen py-20 px-6 font-display text-left">
      <div className="max-w-[960px] mx-auto">
        <h1 className="text-black dark:text-white text-5xl font-black mb-4">Terms of Service</h1>
        <p className="text-zinc-500 mb-12">Last Updated: October 2023</p>

        <div className="bg-zinc-100 dark:bg-zinc-900/50 p-8 rounded-xl border border-zinc-200 dark:border-zinc-800 mb-12">
          <p className="text-zinc-700 dark:text-zinc-300">Welcome to TEDxKU Leuven. By using our platform, you agree to these terms.</p>
        </div>

        <div className="space-y-6">
          {[
            { title: "1. Acceptance of Terms", content: "By accessing this site, you agree to comply with all applicable laws and regulations." },
            { title: "2. Intellectual Property", content: "TEDx is a trademark of TED Conferences, LLC, used under license by TEDxKU Leuven." },
            { title: "3. User Conduct", content: "Users are expected to interact with our platform with respect and integrity." }
          ].map((item, i) => (
            <details key={i} className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-6 py-4 group cursor-pointer shadow-sm">
              <summary className="flex items-center justify-between font-bold text-lg text-black dark:text-white">
                {item.title}
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400">
                {item.content}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Terms;
