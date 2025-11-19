import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onScrollTo: (id: string) => void;
  onContactClick: () => void;
}

export default function Navbar({ onScrollTo, onContactClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'engine', label: 'Cortexa Engine' },
    { id: 'demo', label: 'Live Demo' },
    { id: 'security', label: 'Security' },
    { id: 'internship', label: 'Careers' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-white/5 ${isScrolled ? 'bg-veda-bg/95 backdrop-blur-md py-2' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="flex items-center gap-2 group">
            <img 
              src="https://res.cloudinary.com/dns0nlupj/image/upload/v1759343341/cortexabgt_wablp5.png" 
              alt="Cortexa Logo" 
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105" 
            />
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button 
                key={link.id}
                onClick={() => onScrollTo(link.id)}
                className="text-sm font-medium text-gray-300 hover:text-veda-accent transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={onContactClick}
              className="px-5 py-2 bg-veda-accent text-veda-bg font-bold rounded-full hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(255,192,77,0.3)] hover:shadow-[0_0_25px_rgba(255,192,77,0.6)]"
            >
              Contact
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white p-2"
          >
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-veda-bg border-b border-white/10 shadow-2xl">
          <div className="flex flex-col p-4 space-y-2">
            {navLinks.map(link => (
              <button 
                key={link.id}
                onClick={() => { onScrollTo(link.id); setMobileMenuOpen(false); }}
                className="block w-full text-left px-4 py-3 text-base font-medium text-gray-300 hover:text-veda-accent hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => { onContactClick(); setMobileMenuOpen(false); }}
              className="block w-full text-left px-4 py-3 text-base font-bold text-veda-bg bg-veda-accent hover:bg-white rounded-lg mt-2 shadow-lg"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}