import React, { useState } from 'react';
import { LockIcon, ChevronDownIcon } from './Icons';

interface SecurityItem {
  id: number;
  title: string;
  content: string;
}

const items: SecurityItem[] = [
  {
    id: 1,
    title: "Zero-Retention Data Policy",
    content: "Your code is ephemeral to our system. We process the AST (Abstract Syntax Tree) in memory for analysis and discard the raw data immediately after the session. We never train our public models on client codebases."
  },
  {
    id: 2,
    title: "VPC Peering & On-Premise",
    content: "For enterprise clients, Cortexa can be deployed entirely within your Virtual Private Cloud (AWS, Azure, GCP) or on-premise air-gapped servers. Data never leaves your perimeter."
  },
  {
    id: 3,
    title: "SOC2 & ISO 27001 Compliance",
    content: "Our infrastructure is built on audit-ready architecture. All data in transit is encrypted via TLS 1.3, and data at rest uses AES-256 encryption. Comprehensive audit logs are available for all automated actions."
  }
];

export default function SecuritySection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="security" className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 mb-12">
          <LockIcon className="w-8 h-8 text-black" />
          <h2 className="text-3xl font-serif font-bold text-gray-900">Enterprise-Grade Security</h2>
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 transition-all hover:border-gray-300">
              <button
                onClick={() => toggle(item.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors focus:outline-none"
              >
                <span className={`font-semibold text-lg ${openId === item.id ? 'text-black' : 'text-gray-700'}`}>
                  {item.title}
                </span>
                <ChevronDownIcon 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openId === item.id ? 'rotate-180 text-black' : ''}`} 
                />
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openId === item.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}