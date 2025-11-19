import React, { useState } from 'react';

interface ContactFormProps {
    context: { subject: string; title: string };
}

export default function ContactForm({ context }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget; // Capture form reference synchronously
    setIsSubmitting(true);
    
    const formData = new FormData(form);
    const data = {
        id: Math.random().toString(36).substr(2, 9).toUpperCase(),
        timestamp: new Date().toLocaleString(),
        subject: context.subject,
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        company: formData.get('company')
    };

    // Save to Local Storage for Admin Panel
    const existing = JSON.parse(localStorage.getItem('cortexa_submissions') || '[]');
    localStorage.setItem('cortexa_submissions', JSON.stringify([...existing, data]));

    setTimeout(() => {
        setIsSubmitting(false);
        setSubmittedData(data);
        form.reset(); // Use captured reference
    }, 1500);
  };

  return (
    <section id="contact" className="py-12 pb-24 bg-veda-bg border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-veda-surface p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl">
            <div className="text-center mb-8">
                <h2 className={`text-3xl font-serif font-bold mb-2 transition-colors duration-300 ${context.title.includes('Intern') ? 'text-blue-400' : context.title.includes('CTO') ? 'text-veda-accent' : 'text-white'}`}>
                    {context.title}
                </h2>
                <p className="text-gray-400 mb-6">Secure your place in the future of autonomous debugging.</p>
            </div>

            {submittedData && (
                <div className="mb-8 bg-green-900/20 border border-green-500/30 rounded-lg p-6 animate-fade-in relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <svg className="w-24 h-24 text-green-400" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                    
                    <div className="flex items-center gap-3 mb-6 border-b border-green-500/20 pb-4 relative z-10">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/50">
                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <div>
                            <h3 className="text-green-400 font-bold text-lg">Submission Successful</h3>
                            <p className="text-green-500/60 text-xs">Our team will review your application shortly.</p>
                        </div>
                    </div>

                    <div className="relative z-10 bg-black/20 rounded-md p-4 border border-white/5">
                        <div className="grid grid-cols-[min-content_1fr] gap-x-6 gap-y-3 text-sm">
                            <span className="text-green-500/60 font-mono uppercase tracking-wider text-xs pt-1">Ticket:</span>
                            <span className="text-white font-mono tracking-widest">{submittedData.id}</span>
                            
                            <span className="text-green-500/60 font-mono uppercase tracking-wider text-xs pt-1">Subject:</span>
                            <span className="text-white font-bold">{submittedData.subject}</span>

                            <span className="col-span-2 h-px bg-white/10 my-1"></span>

                            <span className="text-green-500/60 font-mono uppercase tracking-wider text-xs pt-1">Name:</span>
                            <span className="text-gray-300">{submittedData.name}</span>

                            <span className="text-green-500/60 font-mono uppercase tracking-wider text-xs pt-1">Company:</span>
                            <span className="text-gray-300">{submittedData.company}</span>

                            <span className="text-green-500/60 font-mono uppercase tracking-wider text-xs pt-1">Email:</span>
                            <span className="text-gray-300">{submittedData.email}</span>

                            <span className="text-green-500/60 font-mono uppercase tracking-wider text-xs pt-1">Phone:</span>
                            <span className="text-gray-300">{submittedData.phone || 'Not Provided'}</span>
                        </div>
                    </div>
                    
                    <div className="mt-6 text-center relative z-10">
                        <button onClick={() => setSubmittedData(null)} className="text-sm text-green-400 hover:text-white hover:underline transition-colors flex items-center justify-center gap-2 mx-auto">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                            Submit Another Response
                        </button>
                    </div>
                </div>
            )}

            {!submittedData && (
                <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                        <input type="text" name="name" required className="w-full bg-veda-bg border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-veda-accent focus:ring-1 focus:ring-veda-accent outline-none transition-colors placeholder-gray-600" placeholder="John Doe" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Work Email</label>
                            <input type="email" name="email" required className="w-full bg-veda-bg border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-veda-accent focus:ring-1 focus:ring-veda-accent outline-none transition-colors placeholder-gray-600" placeholder="name@company.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Mobile Number</label>
                            <input type="tel" name="phone" className="w-full bg-veda-bg border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-veda-accent focus:ring-1 focus:ring-veda-accent outline-none transition-colors placeholder-gray-600" placeholder="+1 (555) 000-0000" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Company / Institution</label>
                        <input type="text" name="company" required className="w-full bg-veda-bg border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-veda-accent focus:ring-1 focus:ring-veda-accent outline-none transition-colors placeholder-gray-600" placeholder="Acme Corp or University" />
                    </div>
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-veda-accent text-veda-bg font-bold text-lg py-4 rounded-lg hover:bg-white transition-all duration-300 shadow-lg shadow-veda-accent/20 hover:shadow-[0_0_30px_rgba(255,192,77,0.4)] transform hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Securely Transmitting...' : 'Submit Application'}
                    </button>
                </form>
            )}
        </div>
      </div>
    </section>
  );
}