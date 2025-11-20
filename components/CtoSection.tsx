import React from 'react';

export default function CtoSection({ onApplyClick }: { onApplyClick: () => void }) {
  return (
    <section className="py-24 bg-gray-50 relative border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center border border-gray-200 p-10 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all group relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-black to-transparent opacity-20"></div>
                 <h2 className="text-sm font-bold tracking-widest text-black uppercase mb-4">Co-Founder Opportunity</h2>
                 <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Chief Technology Officer</h3>
                 <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
                    We are seeking a distributed systems architect to lead the engineering vision. 
                    This is a high-equity partner role for a technical leader capable of building the immune system for global software.
                </p>
                <button onClick={onApplyClick} className="inline-flex items-center px-8 py-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
                    View Founder Details & Apply
                </button>
            </div>
        </div>
    </section>
  );
}