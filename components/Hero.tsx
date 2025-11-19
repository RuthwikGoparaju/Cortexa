import React from 'react';

interface HeroProps {
  onContactClick: () => void;
  onDemoClick: () => void;
}

export default function Hero({ onContactClick, onDemoClick }: HeroProps) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden bg-veda-bg">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://res.cloudinary.com/dns0nlupj/image/upload/v1759223095/e39d02c9-cbe4-4f60-a80d-37232d6e11c0_mzzyt1.jpg" 
          alt="Neural Network Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark blue overlay to tint the image and ensure text contrast */}
        <div className="absolute inset-0 bg-[#051124]/85 mix-blend-multiply"></div>
        {/* Gradient to fade into the next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#051124]/80 via-[#051124]/60 to-[#051124]"></div>
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-veda-accent/5 rounded-full blur-3xl z-0 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-slide-up">
          <button onClick={onContactClick} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-veda-surface/80 backdrop-blur-sm border border-veda-accent/20 mb-8 hover:border-veda-accent/40 hover:bg-veda-surface transition-all cursor-pointer group hover:scale-105 active:scale-95 hover:shadow-[0_0_15px_rgba(255,192,77,0.2)]">
            <span className="flex w-2 h-2 rounded-full bg-veda-accent animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wide uppercase text-veda-accent group-hover:underline decoration-veda-accent/50 underline-offset-4">
              Enterprise Pilot: Q4 Enrollment Open
            </span>
          </button>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6 animate-slide-up drop-shadow-lg" style={{animationDelay: '100ms'}}>
          Stop Debating Errors.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-veda-accent to-yellow-200">
            Get the Instant Fix.
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10 leading-relaxed animate-slide-up drop-shadow-md" style={{animationDelay: '200ms'}}>
          Autonomous debugging anchored in first principles. The Cortexa Engine doesn't just patch syntax - it understands architectural intent and heals logic at the root.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up" style={{animationDelay: '300ms'}}>
          <button 
            onClick={onContactClick} 
            className="px-8 py-4 bg-veda-accent text-veda-bg text-lg font-bold rounded-lg hover:bg-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-veda-accent/20 hover:shadow-[0_0_30px_rgba(255,192,77,0.4)]"
          >
            Enroll in Pilot Program
          </button>
          <button 
            onClick={onDemoClick}
            className="px-8 py-4 bg-black/30 backdrop-blur-sm border border-veda-accent/30 text-white text-lg font-medium rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Try Live Simulation
          </button>
        </div>

        {/* Trusted By */}
        <div className="mt-20 pt-10 border-t border-white/10 animate-fade-in" style={{animationDelay: '500ms'}}>
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-6">Trusted by engineering teams at</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
             {/* Simple CSS Logos for Demo */}
             <div className="flex items-center gap-2 text-white font-bold text-xl cursor-default drop-shadow-md"><div className="w-6 h-6 bg-white rounded-sm"></div>TechFlow</div>
             <div className="flex items-center gap-2 text-white font-bold text-xl cursor-default drop-shadow-md"><div className="w-6 h-6 bg-white rounded-full"></div>DataCore</div>
             <div className="flex items-center gap-2 text-white font-bold text-xl cursor-default drop-shadow-md"><div className="w-6 h-6 border-2 border-white rounded rotate-45"></div>NetScale</div>
             <div className="flex items-center gap-2 text-white font-bold text-xl cursor-default drop-shadow-md"><div className="w-6 h-6 bg-white rounded-tr-xl"></div>Vortex</div>
          </div>
        </div>
      </div>
    </section>
  );
}