
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-solid border-zinc-800 bg-black backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:py-5">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-8 md:h-10 transition-transform group-hover:scale-105">
            {/* The logo file path can be updated here. Using a common white TEDx logo placeholder for black background */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/TEDx_logo.svg/1024px-TEDx_logo.svg.png" 
              alt="TEDxKU Leuven Logo" 
              className="h-full w-auto brightness-0 invert" 
            />
          </div>
        </Link>
        <div className="flex items-center gap-6 lg:gap-10">
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className={`text-sm font-bold uppercase tracking-widest transition-colors ${isActive('/') ? 'text-primary' : 'text-zinc-300 hover:text-primary'}`}>Home</Link>
            <Link to="/events" className={`text-sm font-bold uppercase tracking-widest transition-colors ${isActive('/events') ? 'text-primary' : 'text-zinc-300 hover:text-primary'}`}>Events</Link>
            <Link to="/team" className={`text-sm font-bold uppercase tracking-widest transition-colors ${isActive('/team') ? 'text-primary' : 'text-zinc-300 hover:text-primary'}`}>Team</Link>
            <Link to="/about" className={`text-sm font-bold uppercase tracking-widest transition-colors ${isActive('/about') ? 'text-primary' : 'text-zinc-300 hover:text-primary'}`}>About</Link>
            <Link to="/partners" className={`text-sm font-bold uppercase tracking-widest transition-colors ${isActive('/partners') ? 'text-primary' : 'text-zinc-300 hover:text-primary'}`}>Partners</Link>
            <Link to="/contact" className={`text-sm font-bold uppercase tracking-widest transition-colors ${isActive('/contact') ? 'text-primary' : 'text-zinc-300 hover:text-primary'}`}>Contact</Link>
          </nav>
          <Link to="/join" className="flex items-center justify-center rounded-none h-11 px-8 bg-primary text-white text-sm font-black uppercase tracking-[0.15em] hover:bg-red-700 transition-all shadow-lg shadow-primary/20">
            JOIN US
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
