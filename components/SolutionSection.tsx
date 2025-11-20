import React from 'react';
import { BrainIcon, CheckIcon } from './Icons';

export default function SolutionSection() {
  return (
    <section id="solution" className="py-24 relative overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">The Cortexa Engine</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Beyond LLM auto-complete. A deterministic repair system that verifies correctness before suggesting a fix.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Context-Aware Analysis",
              desc: "Cortexa ingests your entire repository graph, understanding variable flow and architectural intent, not just local syntax."
            },
            {
              title: "Deterministic Verification",
              desc: "We don't hallucinate patches. The engine runs a sandbox simulation to prove the fix resolves the bug without regression."
            },
            {
              title: "Self-Healing Pipelines",
              desc: "Integrates directly into CI/CD. Cortexa detects failed builds, generates the fix, and opens a PR automatically."
            }
          ].map((feature, idx) => (
            <div key={idx} className="group relative p-8 bg-white rounded-xl border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden">
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/50 to-transparent z-0 pointer-events-none"></div>
              
              <div className="relative z-10">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {idx === 0 && <BrainIcon className="w-6 h-6 text-black" />}
                    {idx === 1 && <CheckIcon className="w-6 h-6 text-black" />}
                    {idx === 2 && <div className="w-6 h-6 border-2 border-black rounded-full border-t-transparent animate-spin" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}