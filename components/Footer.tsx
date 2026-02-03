
import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Footer: React.FC = () => {
  const { socialLinks, logo } = useApp();

  return (
    <footer className="bg-black py-20 border-t border-zinc-800">
      <div className="mx-auto max-w-[1400px] px-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5 flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="h-8 md:h-10">
                <img src={logo} alt="TEDxKU Leuven Logo" className="h-full w-auto brightness-0 invert" />
              </div>
            </div>
            <p className="text-zinc-400 text-base leading-relaxed max-sm">This TEDx event is operated under license from TED. It is an independently organized event by the students and faculty of KU Leuven.</p>
          </div>
          <div className="md:col-span-3">
            <h3 className="font-black uppercase tracking-widest text-sm mb-8 text-white">Navigation</h3>
            <ul className="space-y-4 text-sm font-bold text-zinc-400">
              <li><Link className="hover:text-primary transition-colors uppercase tracking-widest" to="/past-events">Past Events</Link></li>
              <li><Link className="hover:text-primary transition-colors uppercase tracking-widest" to="/partners">Partnership</Link></li>
              <li><Link className="hover:text-primary transition-colors uppercase tracking-widest" to="/contact">Contact</Link></li>
              <li><Link className="hover:text-primary transition-colors uppercase tracking-widest" to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <h3 className="font-black uppercase tracking-widest text-sm mb-8 text-white">Stay Connected</h3>
            <div className="flex flex-col gap-6">
              <p className="text-zinc-400 text-sm">Follow us for updates.</p>
              <div className="flex gap-6 mt-4 items-center">
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-primary transition-colors" title="Facebook">
                  <svg className="size-6 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-primary transition-colors" title="Instagram">
                  <svg className="size-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.607 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.607-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.308 3.607-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.127.051-1.9.191-2.583.483a6.708 6.708 0 00-2.423 1.577 6.708 6.708 0 00-1.577 2.423c-.292.683-.432 1.456-.483 2.583C.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.051 1.127.191 1.9.483 2.583a6.708 6.708 0 001.577 2.423 6.708 6.708 0 002.423 1.577c.683.292 1.456.432 2.583.483 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.127-.051 1.9-.191 2.583-.483a6.708 6.708 0 002.423-1.577 6.708 6.708 0 001.577-2.423c.292-.683.432-1.456.483-2.583.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.051-1.127-.191-1.9-.483-2.583a6.708 6.708 0 00-1.577-2.423 6.708 6.708 0 00-2.423-1.577c-.683-.292-1.456-.432-2.583-.483-1.28-.058-1.688-.072-4.947-.072zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-primary transition-colors" title="LinkedIn">
                  <svg className="size-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href={socialLinks.flickr} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-primary transition-colors" title="Flickr">
                  <svg className="size-6 fill-current" viewBox="0 0 24 24">
                    <circle cx="7" cy="12" r="5" />
                    <circle cx="17" cy="12" r="5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6 text-white">
          <div className="text-[10px] text-zinc-500 uppercase tracking-[0.3em]">© 2025 TEDxKU Leuven.</div>
          <div className="flex gap-8 items-center">
            <Link className="text-zinc-500 hover:text-primary transition-colors text-[10px] uppercase tracking-[0.2em]" to="/privacy">Privacy Policy</Link>
            <Link className="text-zinc-500 hover:text-primary transition-colors text-[10px] uppercase tracking-[0.2em]" to="/terms">Terms of Service</Link>
            <Link className="text-zinc-500 hover:text-primary transition-colors text-[10px] uppercase tracking-[0.2em]" to="/admin">Admin Access</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
