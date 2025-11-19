import React from 'react';
import { BugIcon } from './Icons';

export default function ProblemSection() {
  return (
    <section className="py-20 bg-veda-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              The Entropy of <br />Modern Software
            </h2>
            <p className="text-veda-muted text-lg mb-6 leading-relaxed">
              Technical debt isn't just annoying—it's a systemic risk. Engineering teams spend 
              <span className="text-veda-accent font-semibold"> 42% of their time</span> debugging and maintaining legacy code instead of innovating.
            </p>
            <ul className="space-y-4">
              {[
                "Critical security vulnerabilities buried in dependency trees",
                "Silent logic failures that unit tests miss",
                "Knowledge silos lost when senior engineers depart"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 min-w-[20px]">
                    <div className="w-5 h-1 bg-veda-accent rounded-full"></div>
                  </div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-veda-accent/10 to-transparent rounded-2xl transform rotate-3"></div>
            <div className="relative bg-veda-bg border border-veda-surface p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-4 mb-6 border-b border-veda-surface pb-4">
                <BugIcon className="w-6 h-6 text-red-400" />
                <span className="font-mono text-red-400 text-sm">CRITICAL_FAILURE_DETECTED</span>
              </div>
              <div className="space-y-3 font-mono text-sm text-gray-400">
                <p>Error: NullReferenceException at Service.ProcessOrder()</p>
                <p className="pl-4 text-gray-600">at DataLayer.Save() line 412</p>
                <p className="pl-4 text-gray-600">at Middleware.Auth() line 88</p>
                <p className="text-veda-accent mt-4 animate-pulse">Analyzing Root Cause...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}