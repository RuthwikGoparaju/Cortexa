import React, { useState } from 'react';

interface ContactFormProps {
    context: { subject: string; title: string };
}

export default function ContactForm({ context }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
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

    const existing = JSON.parse(localStorage.getItem('cortexa_submissions') || '[]');
    localStorage.setItem('cortexa_submissions', JSON.stringify([...existing, data]));

    setTimeout(() => {
        setIsSubmitting(false);
        setSubmittedData(data);
        form.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-200 shadow-xl shadow-gray-100">
            <div className="text-center mb-8">
                <h2 className={`text-3xl font-serif font-bold mb-2 transition-colors duration-300 ${context.title.includes('Intern') ? 'text-blue-600' : 'text-black'}`}>
                    {context.title}
                </h2>
                <p className="text-gray-500 mb-6">Secure your place in the future of autonomous debugging.</p>
            </div>

            {submittedData && (
                <div className="mb-8 bg-green-50 border border-green-200 rounded-lg p-6 animate-fade-in relative overflow-hidden shadow-sm">
                    <div className="flex items-center gap-3 mb-6 border-b border-green-200 pb-4 relative z-10">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <div>
                            <h3 className="text-green-800 font-bold text-lg">Submission Successful</h3>
                            <p className="text-green-600 text-xs">Our team will review your application shortly.</p>
                        </div>
                    </div>

                    <div className="relative z-10 bg-white rounded-md p-4 border border-green-100 shadow-sm">
                        <div className="grid grid-cols-[min-content_1fr] gap-x-6 gap-y-3 text-sm">
                            <span className="text-gray-400 font-mono uppercase tracking-wider text-xs pt-1">Ticket:</span>
                            <span className="text-black font-mono tracking-widest font-bold">{submittedData.id}</span>
                            
                            <span className="text-gray-400 font-mono uppercase tracking-wider text-xs pt-1">Subject:</span>
                            <span className="text-black font-bold">{submittedData.subject}</span>

                            <span className="col-span-2 h-px bg-gray-100 my-1"></span>

                            <span className="text-gray-400 font-mono uppercase tracking-wider text-xs pt-1">Name:</span>
                            <span className="text-gray-700">{submittedData.name}</span>

                            <span className="text-gray-400 font-mono uppercase tracking-wider text-xs pt-1">Company:</span>
                            <span className="text-gray-700">{submittedData.company}</span>

                            <span className="text-gray-400 font-mono uppercase tracking-wider text-xs pt-1">Email:</span>
                            <span className="text-gray-700">{submittedData.email}</span>

                            <span className="text-gray-400 font-mono uppercase tracking-wider text-xs pt-1">Phone:</span>
                            <span className="text-gray-700">{submittedData.phone || 'Not Provided'}</span>
                        </div>
                    </div>
                    
                    <div className="mt-6 text-center relative z-10">
                        <button onClick={() => setSubmittedData(null)} className="text-sm text-green-700 hover:text-green-900 font-semibold hover:underline transition-colors">
                            Submit Another Response
                        </button>
                    </div>
                </div>
            )}

            {!submittedData && (
                <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">Full Name</label>
                        <input type="text" name="name" required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors placeholder-gray-400" placeholder="John Doe" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">Work Email</label>
                            <input type="email" name="email" required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors placeholder-gray-400" placeholder="name@company.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">Mobile Number</label>
                            <input type="tel" name="phone" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors placeholder-gray-400" placeholder="+1 (555) 000-0000" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">Company / Institution</label>
                        <input type="text" name="company" required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors placeholder-gray-400" placeholder="Acme Corp or University" />
                    </div>
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-black text-white font-bold text-lg py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
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