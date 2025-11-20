import React, { useState } from 'react';
import { LockIcon } from './Icons';

interface FooterProps {
  onScrollTo: (id: string) => void;
  onContactClick: () => void;
  onOpenAdmin: () => void;
}

export default function Footer({ onScrollTo, onContactClick, onOpenAdmin }: FooterProps) {
  const [modalContent, setModalContent] = useState<{title: string, content: React.ReactNode} | null>(null);

  const privacyContent = (
    <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
        <p><strong className="text-gray-900">1. Information Collection:</strong> We collect information you provide directly to us, such as your name, email address, company name, and phone number when you apply for the Pilot Program or Internship.</p>
        <p><strong className="text-gray-900">2. Use of Information:</strong> We use this information to communicate with you about our services, evaluate your application, and improve the Cortexa Engine.</p>
        <p><strong className="text-gray-900">3. Data Security:</strong> We implement enterprise-grade security measures. Code snippets entered in the Live Demo are processed in ephemeral sandboxes and are not persistently stored or used to train our models.</p>
        <p><strong className="text-gray-900">4. Contact Us:</strong> If you have questions about this policy, please contact us at solutions.cortexa@gmail.com.</p>
    </div>
  );

  const termsContent = (
    <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
        <p><strong className="text-gray-900">1. Acceptance of Terms:</strong> By accessing or using the Cortexa website, you agree to be bound by these Terms of Service.</p>
        <p><strong className="text-gray-900">2. Intellectual Property:</strong> The Cortexa Engine, the website design, and all associated content are the exclusive property of Cortexa AI Inc.</p>
        <p><strong className="text-gray-900">3. Disclaimer:</strong> The Live Demo is a simulation intended for illustrative purposes. Actual performance may vary based on integration depth and codebase complexity.</p>
        <p><strong className="text-gray-900">4. Limitation of Liability:</strong> Cortexa AI Inc. shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website.</p>
    </div>
  );

  return (
    <footer className="bg-white border-t border-gray-200 py-16 mt-auto relative z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          
          {/* Brand & Contact */}
          <div className="flex flex-col gap-6">
             <button onClick={() => onScrollTo('engine')} className="text-2xl font-bold font-serif text-black tracking-tight hover:opacity-80 transition-opacity text-left">Cortexa</button>
             <div className="flex flex-col gap-2">
                <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">Direct Inquiry</span>
                <a href="mailto:solutions.cortexa@gmail.com" className="text-2xl md:text-3xl font-extrabold text-black hover:text-blue-700 transition-all duration-300 underline decoration-2 underline-offset-4 hover:decoration-blue-700">
                    solutions.cortexa@gmail.com
                </a>
             </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-8 text-sm font-bold text-gray-900">
            <button onClick={() => setModalContent({title: "Privacy Policy", content: privacyContent})} className="hover:text-blue-600 transition-colors underline decoration-transparent hover:decoration-blue-600 underline-offset-4">
                Privacy Policy
            </button>
            <button onClick={() => setModalContent({title: "Terms of Service", content: termsContent})} className="hover:text-blue-600 transition-colors underline decoration-transparent hover:decoration-blue-600 underline-offset-4">
                Terms of Service
            </button>
            <button onClick={onContactClick} className="hover:text-blue-600 transition-colors underline decoration-transparent hover:decoration-blue-600 underline-offset-4">
                Contact Support
            </button>
            {/* Lock Icon for Staff Login */}
            <button onClick={onOpenAdmin} className="text-gray-400 hover:text-black transition-colors" title="Staff Portal">
                <LockIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright & Status */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500 font-medium">
                &copy; 2024 Cortexa AI Inc. All rights reserved.
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-mono text-gray-600 uppercase tracking-wider">System Operational</span>
            </div>
        </div>
      </div>

      {/* Legal Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setModalContent(null)}>
            <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-8 relative border border-gray-100" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-serif font-bold text-gray-900">{modalContent.title}</h2>
                    <button onClick={() => setModalContent(null)} className="text-gray-400 hover:text-black transition-colors">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                    {modalContent.content}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100">
                    <button onClick={() => setModalContent(null)} className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition-all active:scale-95">
                        Acknowledge & Close
                    </button>
                </div>
            </div>
        </div>
      )}
    </footer>
  );
}