import React, { useState, useEffect } from 'react';

export default function AdminDashboard({ onClose }: { onClose: () => void }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [submissions, setSubmissions] = useState<any[]>([]);

  useEffect(() => {
    const data = localStorage.getItem('cortexa_submissions');
    if (data) {
      setSubmissions(JSON.parse(data).reverse());
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '080905') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid Access Key');
    }
  };

  const clearData = () => {
    if(confirm('Delete all records?')) {
        localStorage.removeItem('cortexa_submissions');
        setSubmissions([]);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl h-[80vh] rounded-2xl border border-gray-200 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-gray-50">
            <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <h2 className="text-black font-mono font-bold tracking-wider">STAFF_PORTAL_V1</h2>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-black font-bold">✕ ESC</button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6 bg-gray-50">
          {!isAuthenticated ? (
            <div className="h-full flex flex-col items-center justify-center">
                <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
                    <label className="block text-xs font-mono text-gray-500 uppercase">Enter Access Key</label>
                    <input 
                        type="password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="w-full bg-white border border-gray-300 rounded p-3 text-black font-mono focus:border-black outline-none shadow-sm"
                        autoFocus
                    />
                    <button type="submit" className="w-full bg-black text-white font-bold py-3 rounded hover:bg-gray-800 transition-colors shadow-lg">
                        Authenticate
                    </button>
                </form>
            </div>
          ) : (
            <div>
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-gray-600 font-mono text-sm">Records Found: {submissions.length}</h3>
                    <button onClick={clearData} className="text-red-600 text-xs hover:text-red-800 underline font-bold">Clear Database</button>
                </div>

                {submissions.length === 0 ? (
                    <p className="text-center text-gray-400 py-20">No submissions yet.</p>
                ) : (
                    <div className="grid gap-4">
                        {submissions.map((sub, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 rounded p-4 text-sm font-mono shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-between text-black text-xs mb-2">
                                    <span className="font-bold">{sub.timestamp}</span>
                                    <span className="uppercase font-bold border border-black/10 px-2 rounded bg-gray-100">{sub.subject}</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <span className="block text-gray-400 text-[10px] uppercase">Name</span>
                                        <span className="text-gray-900 font-bold">{sub.name}</span>
                                    </div>
                                    <div>
                                        <span className="block text-gray-400 text-[10px] uppercase">Company</span>
                                        <span className="text-gray-900 font-bold">{sub.company}</span>
                                    </div>
                                    <div className="col-span-2">
                                        <span className="block text-gray-400 text-[10px] uppercase">Email</span>
                                        <span className="text-gray-600">{sub.email}</span>
                                    </div>
                                    <div className="col-span-2">
                                        <span className="block text-gray-400 text-[10px] uppercase">Mobile</span>
                                        <span className="text-gray-600">{sub.phone || 'N/A'}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}