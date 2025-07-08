import React, { useState } from 'react';
import { FaUmbrellaBeach } from 'react-icons/fa';

const Leave: React.FC = () => {
    const [type, setType] = useState('Casual');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [reason, setReason] = useState('');
    const [recipient, setRecipient] = useState('Principal');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!from || !to || !reason) {
            setError('Please fill all fields.');
            return;
        }
        setError('');
        setSubmitted(true);
        // Here you would send the request to backend
    };
    return (
        <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow p-8 mt-8">
            <h2 className="text-2xl font-bold mb-4 text-[#C71585] flex items-center"><FaUmbrellaBeach className="mr-2 text-[#F7C873]" />Apply for Leave</h2>
            {submitted ? (
                <div className="text-[#C71585] font-semibold text-center">Leave request sent to {recipient}!</div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Leave Type</label>
                        <select value={type} onChange={e => setType(e.target.value)} className="w-full border rounded-lg px-3 py-2">
                            <option value="Casual">Casual Leave</option>
                            <option value="Sick">Sick Leave</option>
                            <option value="Earned">Earned Leave</option>
                            <option value="Maternity">Maternity Leave</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">From</label>
                            <input type="date" value={from} onChange={e => setFrom(e.target.value)} className="w-full border rounded-lg px-3 py-2" />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">To</label>
                            <input type="date" value={to} onChange={e => setTo(e.target.value)} className="w-full border rounded-lg px-3 py-2" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Reason</label>
                        <textarea value={reason} onChange={e => setReason(e.target.value)} className="w-full border rounded-lg px-3 py-2" rows={3} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Send Request To</label>
                        <select value={recipient} onChange={e => setRecipient(e.target.value)} className="w-full border rounded-lg px-3 py-2">
                            <option value="Principal">Principal</option>
                            <option value="HOD">Head of Department (HOD)</option>
                        </select>
                    </div>
                    {error && <div className="text-red-600 text-sm">{error}</div>}
                    <button type="submit" className="w-full bg-[#C71585] text-white py-2 rounded-lg hover:bg-[#8D38A8]">Apply Leave</button>
                </form>
            )}
        </div>
    );
};

export default Leave;
