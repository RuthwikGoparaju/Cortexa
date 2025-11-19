import React from 'react';
import { LockIcon } from './Icons';

interface FooterProps {
  onScrollTo: (id: string) => void;
  onContactClick: () => void;
  onOpenAdmin: () => void;
}

export default function Footer({ onScrollTo, onContactClick, onOpenAdmin }: FooterProps) {
  return (
    <footer className="bg-veda-bg border-t border-white/5 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="flex items-center gap-2">
             <div className="text-lg font-bold font-serif text-gray-500">Cortexa</div>
          </div>
          <div className="flex gap-8 text-sm text-gray-600">
            <a href="#" className="hover:text-veda-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-veda-accent transition-colors">Terms of Service</a>
            <button onClick={onContactClick} className="hover:text-veda-accent transition-colors">Contact</button>
            {/* Lock Icon for Staff Login */}
            <button onClick={onOpenAdmin} className="text-gray-700 hover:text-veda-accent transition-colors" title="Staff Portal">
                <LockIcon className="w-4 h-4" />
            </button>
          </div>
          <div className="text-sm text-gray-700">
            &copy; 2024 Cortexa AI Inc.
          </div>
        </div>
        <div className="flex justify-center md:justify-end items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-mono text-gray-600 uppercase tracking-wider">System Operational</span>
        </div>
      </div>
    </footer>
  );
}