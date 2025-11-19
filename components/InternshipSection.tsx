import React from 'react';

export default function InternshipSection({ onApplyClick }: { onApplyClick: () => void }) {
  return (
    <section id="internship" className="py-20 bg-veda-bg border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-left">
                <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-3">Student Program</h2>
                <h3 className="text-3xl font-serif font-bold text-white mb-4">Deep Tech Research Internship</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                    Work directly with the founding team on AST parsing and causal inference models. 
                    This is a high-intensity learning environment designed for researchers who want to build the future of autonomous debugging.
                </p>
                <div className="bg-blue-900/20 border-l-2 border-blue-500 p-4 mb-8">
                    <p className="text-xs text-blue-200 italic">
                        <span className="font-bold">Note:</span> As an early-stage bootstrap startup, this is currently an unpaid position with no stipend. We offer equity-based incentives for exceptional performance and direct mentorship.
                    </p>
                </div>
                <button onClick={onApplyClick} className="px-6 py-3 bg-transparent border border-blue-400/30 text-blue-400 font-bold rounded-lg hover:bg-blue-400 hover:text-veda-bg transition-all duration-300 hover:scale-105 active:scale-95">
                    Apply for Internship &rarr;
                </button>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-32 h-32 bg-veda-surface rounded-full flex items-center justify-center border border-white/10 shadow-2xl relative">
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full animate-pulse"></div>
                    <svg className="w-12 h-12 text-blue-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                </div>
            </div>
        </div>
    </section>
  );
}