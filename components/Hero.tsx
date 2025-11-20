import React from 'react';

interface HeroProps {
  onContactClick: () => void;
  onDemoClick: () => void;
}

export default function Hero({ onContactClick, onDemoClick }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 z-0 bg-tech-grid bg-[length:40px_40px]"></div>
      
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>

      {/* Floating Abstract Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-50 animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-slide-up">
          <button onClick={onContactClick} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-8 hover:border-black hover:shadow-md transition-all cursor-pointer group hover:scale-105 active:scale-95">
            <span className="flex w-2 h-2 rounded-full bg-black animate-pulse"></span>
            <span className="text-xs font-bold tracking-wide uppercase text-gray-900 group-hover:underline decoration-black/30 underline-offset-4">
              Enterprise Pilot: Q4 Enrollment Open
            </span>
          </button>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 leading-tight mb-6 animate-slide-up" style={{animationDelay: '100ms'}}>
          Stop Debating Errors.<br />
          <span className="relative inline-block">
            <span className="relative z-10 text-black">Get the Instant Fix.</span>
            <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-200/50 -z-0 -rotate-1"></span>
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10 leading-relaxed animate-slide-up" style={{animationDelay: '200ms'}}>
          Autonomous debugging anchored in first principles. The Cortexa Engine doesn't just patch syntax—it understands architectural intent and heals logic at the root.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up" style={{animationDelay: '300ms'}}>
          <button 
            onClick={onContactClick} 
            className="px-8 py-4 bg-black text-white text-lg font-bold rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl"
          >
            Enroll in Pilot Program
          </button>
          <button 
            onClick={onDemoClick}
            className="px-8 py-4 bg-white border border-gray-200 text-gray-900 text-lg font-medium rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md"
          >
            Try Live Simulation
          </button>
        </div>

        {/* Trusted By */}
        <div className="mt-24 pt-10 border-t border-gray-100 animate-fade-in" style={{animationDelay: '500ms'}}>
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-8">Optimizing codebases for teams in</p>
          <div className="flex flex-wrap justify-center gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
             <div className="flex items-center gap-2 text-gray-700 font-bold text-lg"><div className="w-6 h-6 bg-gray-300 rounded-sm"></div>Enterprise SaaS</div>
             <div className="flex items-center gap-2 text-gray-700 font-bold text-lg"><div className="w-6 h-6 bg-gray-300 rounded-full"></div>Global Fintech</div>
             <div className="flex items-center gap-2 text-gray-700 font-bold text-lg"><div className="w-6 h-6 border-2 border-gray-300 rounded rotate-45"></div>Cloud Infra</div>
             <div className="flex items-center gap-2 text-gray-700 font-bold text-lg"><div className="w-6 h-6 bg-gray-300 rounded-tr-xl"></div>Healthcare AI</div>
          </div>
        </div>
      </div>
    </section>
  );
}