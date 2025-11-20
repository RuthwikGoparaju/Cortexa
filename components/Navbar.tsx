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
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-white/90 backdrop-blur-md border-gray-200 py-3 shadow-sm' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="flex items-center gap-2 group">
            <img 
              src="https://res.cloudinary.com/dns0nlupj/image/upload/v1759343341/cortexabgt_wablp5.png" 
              alt="Cortexa Logo" 
              className="h-16 md:h-24 w-auto object-contain transition-transform group-hover:scale-105 filter invert" 
            />
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button 
                key={link.id}
                onClick={() => onScrollTo(link.id)}
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={onContactClick}
              className="px-5 py-2 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 active:scale-95 shadow-md hover:shadow-xl"
            >
              Contact
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-900 hover:text-black p-2"
          >
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-2xl">
          <div className="flex flex-col p-4 space-y-2">
            {navLinks.map(link => (
              <button 
                key={link.id}
                onClick={() => { onScrollTo(link.id); setMobileMenuOpen(false); }}
                className="block w-full text-left px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => { onContactClick(); setMobileMenuOpen(false); }}
              className="block w-full text-left px-4 py-3 text-base font-bold text-white bg-black rounded-lg mt-2 shadow-lg"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}