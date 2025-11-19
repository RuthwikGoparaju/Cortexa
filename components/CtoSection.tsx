import React from 'react';

export default function CtoSection({ onApplyClick }: { onApplyClick: () => void }) {
  return (
    <section className="py-24 bg-veda-surface/20 relative border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center border border-veda-accent/20 p-10 rounded-2xl bg-gradient-to-b from-veda-bg/80 to-veda-surface/50 hover:border-veda-accent/50 transition-all group relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-veda-accent to-transparent opacity-50"></div>
                 <h2 className="text-sm font-bold tracking-widest text-veda-accent uppercase mb-4">Co-Founder Opportunity</h2>
                 <h3 className="text-3xl font-serif font-bold text-white mb-4">Chief Technology Officer</h3>
                 <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
                    We are seeking a distributed systems architect to lead the engineering vision. 
                    This is a high-equity partner role for a technical leader capable of building the immune system for global software.
                </p>
                <button onClick={onApplyClick} className="inline-flex items-center px-8 py-3 bg-veda-accent text-veda-bg font-bold rounded-full hover:bg-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-[0_0_20px_rgba(255,192,77,0.4)]">
                    View Founder Details & Apply
                </button>
            </div>
        </div>
    </section>
  );
}