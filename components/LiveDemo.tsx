import React, { useState, useRef } from 'react';
import { BugIcon } from './Icons';

const files = {
  'payment_processor.py': `def process_payment(user_id, amount):
    # Fetch user object from DB
    user = get_user(user_id)
    
    # CRITICAL BUG: 
    # User might be None if ID is invalid.
    # Accessing .account_balance will crash.
    balance = user.account_balance 
    
    if balance >= amount:
        deduct(user_id, amount)
        return True
    return False`,
  'database_utils.py': `def get_user(user_id):
    try:
        return db.query("SELECT * FROM users WHERE id = ?", user_id)
    except RecordNotFound:
        return None  # Returns None explicitly`,
  'config.yaml': `environment: production
retry_attempts: 3
timeout_ms: 5000`
};

export default function LiveDemo() {
  const [activeFile, setActiveFile] = useState('payment_processor.py');
  const [isRunning, setIsRunning] = useState(false);
  const [steps, setSteps] = useState<any[]>([]);
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  const runSimulation = () => {
    setIsRunning(true);
    setSteps([]);
    
    const newSteps = [
      { title: 'DIAGNOSIS COMPLETE', text: 'Detected `NoneType` vulnerability in `user.account_balance`. Path trace confirms `get_user()` returns None on invalid ID.', color: 'text-red-400' },
      { title: 'ROOT CAUSE IDENTIFIED', text: 'Caller `process_payment` does not handle null propagation from Data Layer.', color: 'text-yellow-400' },
      { title: 'FIX GENERATED & VERIFIED', text: 'Applied guard clause: `if not user: return False`. Sandbox test suite passed (14/14 assertions).', color: 'text-green-400' }
    ];

    let delay = 1500;
    newSteps.forEach((step, index) => {
      setTimeout(() => {
        setSteps(prev => [...prev, step]);
        if (stepsContainerRef.current) {
            stepsContainerRef.current.scrollTop = stepsContainerRef.current.scrollHeight;
        }
        if (index === newSteps.length - 1) setIsRunning(false);
      }, delay);
      delay += 1500;
    });
  };

  return (
    <section id="demo" className="py-24 bg-veda-surface/30 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">See Cortexa in Action</h2>
          <p className="text-veda-muted">Paste a snippet or use our sample. Watch the engine diagnose and repair in real-time.</p>
        </div>

        <div className="bg-veda-bg border border-white/10 rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/5 flex flex-col md:flex-row h-[500px]">
          {/* Editor Pane */}
          <div className="flex-1 flex flex-col border-r border-white/10">
            {/* Tabs */}
            <div className="flex bg-[#020812] border-b border-white/10 overflow-x-auto">
              {Object.keys(files).map(filename => (
                <button
                  key={filename}
                  onClick={() => setActiveFile(filename)}
                  className={`px-4 py-3 text-xs font-mono border-r border-white/5 whitespace-nowrap ${activeFile === filename ? 'bg-[#0B1624] text-veda-accent' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  {filename}
                </button>
              ))}
            </div>
            {/* Code Area */}
            <div className="flex-1 bg-[#0B1624] relative p-4 overflow-auto">
               <textarea 
                 value={files[activeFile as keyof typeof files]} 
                 readOnly 
                 className="w-full h-full bg-transparent text-gray-300 font-mono text-sm outline-none resize-none"
                 spellCheck={false}
               />
            </div>
            {/* Action Bar */}
            <div className="p-4 bg-[#020812] border-t border-white/10">
              <button 
                onClick={runSimulation}
                disabled={isRunning}
                className="w-full py-3 bg-veda-surface border border-veda-accent text-veda-accent font-bold rounded-lg hover:bg-veda-accent hover:text-veda-bg transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isRunning ? (
                    <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        <span>Analyzing Context...</span>
                    </>
                ) : (
                    <>
                        <BugIcon className="w-5 h-5" />
                        <span>Run Cortexa Diagnostics</span>
                    </>
                )}
              </button>
            </div>
          </div>

          {/* Output Pane */}
          <div className="flex-1 bg-[#050C14] flex flex-col p-4">
            <label className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-4">Cortexa Engine Analysis</label>
            <div ref={stepsContainerRef} className="flex-1 overflow-y-auto space-y-4 custom-scrollbar">
              {steps.length === 0 && !isRunning && (
                 <div className="h-full flex flex-col items-center justify-center text-gray-700 opacity-30">
                    <svg className="w-16 h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                    <span className="text-xs font-bold tracking-widest uppercase">Ready to Analyze</span>
                 </div>
              )}
              
              {isRunning && steps.length === 0 && (
                <div className="text-veda-accent font-mono text-xs animate-pulse">
                    &gt; Establishing Secure Handshake...<br/>
                    &gt; Parsing AST for {activeFile}...
                </div>
              )}

              {steps.map((step, i) => (
                <div key={i} className="p-3 bg-white/5 rounded border border-white/10 animate-slide-up">
                  <h4 className={`${step.color} text-xs font-bold uppercase tracking-wide mb-1`}>{step.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed font-mono">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}