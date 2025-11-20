import React from 'react';
import { BugIcon } from './Icons';

export default function ProblemSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              The Entropy of <br />Modern Software
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Technical debt isn't just annoying—it's a systemic risk. Engineering teams spend 
              <span className="text-black font-bold"> 42% of their time</span> debugging and maintaining legacy code instead of innovating.
            </p>
            <ul className="space-y-4">
              {[
                "Critical security vulnerabilities buried in dependency trees",
                "Silent logic failures that unit tests miss",
                "Knowledge silos lost when senior engineers depart"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 min-w-[20px]">
                    <div className="w-5 h-1 bg-black rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-transparent rounded-2xl transform rotate-3 animate-pulse-slow"></div>
            <div className="relative bg-white border border-gray-200 p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                <BugIcon className="w-6 h-6 text-red-500" />
                <span className="font-mono text-red-500 text-sm font-bold">CRITICAL_FAILURE_DETECTED</span>
              </div>
              <div className="space-y-3 font-mono text-sm text-gray-500">
                <p>Error: NullReferenceException at Service.ProcessOrder()</p>
                <p className="pl-4 text-gray-700">at DataLayer.Save() line 412</p>
                <p className="pl-4 text-gray-700">at Middleware.Auth() line 88</p>
                <p className="text-black mt-4 animate-pulse font-bold">Analyzing Root Cause...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}