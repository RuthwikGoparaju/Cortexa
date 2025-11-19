import React from 'react';
import { BrainIcon, CheckIcon } from './Icons';

export default function SolutionSection() {
  return (
    <section id="solution" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">The Cortexa Engine</h2>
          <p className="text-veda-muted max-w-2xl mx-auto">
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
            <div key={idx} className="group p-8 bg-veda-surface rounded-xl border border-veda-accent/10 hover:border-veda-accent/40 transition-all hover:-translate-y-2">
              <div className="w-12 h-12 bg-veda-bg rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {idx === 0 && <BrainIcon className="w-6 h-6 text-veda-accent" />}
                {idx === 1 && <CheckIcon className="w-6 h-6 text-veda-accent" />}
                {idx === 2 && <div className="w-6 h-6 border-2 border-veda-accent rounded-full border-t-transparent animate-spin" />}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}