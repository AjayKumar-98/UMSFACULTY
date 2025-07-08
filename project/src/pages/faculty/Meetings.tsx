import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaEye, FaVideo, FaUsers, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

interface Meeting {
    id: string;
    title: string;
    description: string;
    date: string;
    startTime: string;
    endTime: string;
    type: 'Department' | 'Student' | 'Research' | 'Committee';
    mode: 'Online' | 'In-Person' | 'Hybrid';
    location: string;
    participants: string[];
    status: 'Scheduled' | 'Completed' | 'Cancelled';
    meetingLink?: string;
}

const Meetings: React.FC = () => {
    const [meetings, setMeetings] = useState<Meeting[]>([
        {
            id: '1',
            title: 'Department Faculty Meeting',
            description: 'Monthly department meeting to discuss academic matters and upcoming events',
            date: '2024-04-15',
            startTime: '10:00 AM',
            endTime: '11:30 AM',
            type: 'Department',
            mode: 'Hybrid',
            location: 'Conference Room 101 / Zoom',
            participants: ['Dr. Sarah Wilson', 'Dr. John Doe', 'Dr. Jane Smith', 'Dr. Mike Johnson'],
            status: 'Scheduled',
            meetingLink: 'https://zoom.us/j/123456789'
        },
        {
            id: '2',
            title: 'Student Project Review',
            description: 'Review meeting with final year project students',
            date: '2024-04-16',
            startTime: '02:00 PM',
            endTime: '03:00 PM',
            type: 'Student',
            mode: 'In-Person',
            location: 'Lab 2',
            participants: ['Dr. Sarah Wilson', 'John Student', 'Jane Student'],
            status: 'Scheduled'
        },
        {
            id: '3',
            title: 'Research Collaboration Meeting',
            description: 'Discussion on AI in Education project progress',
            date: '2024-04-14',
            startTime: '09:00 AM',
            endTime: '10:00 AM',
            type: 'Research',
            mode: 'Online',
            location: 'Google Meet',
            participants: ['Dr. Sarah Wilson', 'Dr. John Doe', 'Dr. Lisa Brown'],
            status: 'Completed',
            meetingLink: 'https://meet.google.com/abc-defg-hij'
        }
    ]);
    const [showModal, setShowModal] = useState(false);
    const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [formMode, setFormMode] = useState<'add' | 'edit'>('add');
    const [formMeeting, setFormMeeting] = useState<Partial<Meeting>>({});
    const [filters, setFilters] = useState({ type: '', mode: '', status: '' });
    const [deleteTarget, setDeleteTarget] = useState<string | null>(null);

    // Filtering logic
    const filteredMeetings = meetings.filter(m =>
        (filters.type === '' || m.type === filters.type) &&
        (filters.mode === '' || m.mode === filters.mode) &&
        (filters.status === '' || m.status === filters.status)
    );

    const handleViewMeeting = (meeting: Meeting) => {
        setSelectedMeeting(meeting);
        setShowModal(true);
    };

    const handleEditMeeting = (meeting: Meeting) => {
        setFormMode('edit');
        setFormMeeting(meeting);
        setShowForm(true);
    };

    const handleDeleteMeeting = (id: string) => {
        setDeleteTarget(id);
    };

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormMeeting(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formMode === 'add') {
            setMeetings(prev => [
                ...prev,
                {
                    ...formMeeting,
                    id: (Math.random() * 100000).toFixed(0),
                    status: formMeeting.status as Meeting['status'] || 'Scheduled',
                    type: formMeeting.type as Meeting['type'] || 'Department',
                    mode: formMeeting.mode as Meeting['mode'] || 'Online',
                    participants: formMeeting.participants || [],
                } as Meeting
            ]);
        } else if (formMode === 'edit' && formMeeting.id) {
            setMeetings(prev => prev.map(m => m.id === formMeeting.id ? { ...m, ...formMeeting, participants: formMeeting.participants || [] } as Meeting : m));
        }
        setShowForm(false);
        setFormMeeting({});
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Scheduled':
                return 'bg-[#F7C873] text-[#490548]'; // Gold bg, deep purple text
            case 'Completed':
                return 'bg-[#E6A2FF] text-[#490548]'; // Light purple bg, deep purple text
            case 'Cancelled':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getModeIcon = (mode: string) => {
        switch (mode) {
            case 'Online':
                return <FaVideo className="text-[#C71585]" />;
            case 'In-Person':
                return <FaUsers className="text-[#F7C873]" />;
            case 'Hybrid':
                return (
                    <div className="flex space-x-1">
                        <FaVideo className="text-[#C71585]" />
                        <FaUsers className="text-[#F7C873]" />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Meeting Management</h1>
                <button className="bg-[#C71585] text-white px-4 py-2 rounded-lg hover:bg-[#8D38A8] flex items-center" onClick={() => { setShowForm(true); setFormMode('add'); setFormMeeting({}); }}>
                    <FaPlus className="mr-2" />
                    Schedule Meeting
                </button>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <select className="border rounded-lg px-4 py-2" value={filters.type} onChange={e => setFilters(f => ({ ...f, type: e.target.value }))}>
                    <option value="">Filter by Type</option>
                    <option value="Department">Department</option>
                    <option value="Student">Student</option>
                    <option value="Research">Research</option>
                    <option value="Committee">Committee</option>
                </select>
                <select className="border rounded-lg px-4 py-2" value={filters.mode} onChange={e => setFilters(f => ({ ...f, mode: e.target.value }))}>
                    <option value="">Filter by Mode</option>
                    <option value="Online">Online</option>
                    <option value="In-Person">In-Person</option>
                    <option value="Hybrid">Hybrid</option>
                </select>
                <select className="border rounded-lg px-4 py-2" value={filters.status} onChange={e => setFilters(f => ({ ...f, status: e.target.value }))}>
                    <option value="">Filter by Status</option>
                    <option value="Scheduled">Scheduled</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                </select>
            </div>

            {/* Meetings Table */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Meeting Details
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date & Time
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Type & Mode
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredMeetings.map((meeting) => (
                            <tr key={meeting.id} className="hover:bg-gray-50">
                                <td className="px-2 py-4">
                                    <div className="text-sm font-medium text-gray-900">{meeting.title}</div>
                                    <div className="text-sm text-gray-500 mt-1">{meeting.description}</div>
                                    <div className="text-sm text-gray-500 mt-1">
                                        <FaUsers className="inline mr-1" />
                                        {meeting.participants.length} participants
                                    </div>
                                </td>
                                <td className="px-2 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{meeting.date}</div>
                                    <div className="text-sm text-gray-500">
                                        {meeting.startTime} - {meeting.endTime}
                                    </div>
                                </td>
                                <td className="px-2 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{meeting.type}</div>
                                    <div className="flex items-center text-sm text-gray-500">
                                        {getModeIcon(meeting.mode)}
                                        <span className="ml-1">{meeting.mode}</span>
                                    </div>
                                </td>
                                <td className="px-2 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(meeting.status)}`}>
                                        {meeting.status}
                                    </span>
                                </td>
                                <td className="px-2 py-4 whitespace-nowrap text-sm font-medium">
                                    <div className="flex space-x-3">
                                        <button onClick={() => handleViewMeeting(meeting)} className="text-[#C71585] hover:text-[#8D38A8]">
                                            <FaEye className="w-5 h-5" />
                                        </button>
                                        <button onClick={() => handleEditMeeting(meeting)} className="text-[#F7C873] hover:text-[#C71585]">
                                            <FaEdit className="w-5 h-5" />
                                        </button>
                                        <button onClick={() => handleDeleteMeeting(meeting.id)} className="text-red-600 hover:text-red-900">
                                            <FaTrash className="w-5 h-5" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Create/Edit Meeting Form Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50" style={{ paddingTop: '64px' }}>
                    <div className="relative mx-auto p-5 border w-full max-w-lg shadow-lg rounded-md bg-white mt-8 mb-8 max-h-[90vh] overflow-y-auto">
                        <h3 className="text-lg font-medium mb-4">{formMode === 'add' ? 'Schedule Meeting' : 'Edit Meeting'}</h3>
                        <form onSubmit={handleFormSubmit} className="space-y-3">
                            <div className="grid grid-cols-2 gap-3">
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium">Title</label>
                                    <input name="title" value={formMeeting.title || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1" />
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium">Description</label>
                                    <textarea name="description" value={formMeeting.description || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Date</label>
                                    <input type="date" name="date" value={formMeeting.date || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Start Time</label>
                                    <input name="startTime" value={formMeeting.startTime || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">End Time</label>
                                    <input name="endTime" value={formMeeting.endTime || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Type</label>
                                    <select name="type" value={formMeeting.type || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1">
                                        <option value="">Select Type</option>
                                        <option value="Department">Department</option>
                                        <option value="Student">Student</option>
                                        <option value="Research">Research</option>
                                        <option value="Committee">Committee</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Mode</label>
                                    <select name="mode" value={formMeeting.mode || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1">
                                        <option value="">Select Mode</option>
                                        <option value="Online">Online</option>
                                        <option value="In-Person">In-Person</option>
                                        <option value="Hybrid">Hybrid</option>
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium">Location</label>
                                    <input name="location" value={formMeeting.location || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1" />
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium">Participants (comma separated)</label>
                                    <input name="participants" value={formMeeting.participants ? formMeeting.participants.join(', ') : ''} onChange={e => setFormMeeting(prev => ({ ...prev, participants: e.target.value.split(',').map(p => p.trim()).filter(Boolean) }))} className="w-full border rounded px-2 py-1" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Status</label>
                                    <select name="status" value={formMeeting.status || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1">
                                        <option value="Scheduled">Scheduled</option>
                                        <option value="Completed">Completed</option>
                                        <option value="Cancelled">Cancelled</option>
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium">Meeting Link (optional)</label>
                                    <input name="meetingLink" value={formMeeting.meetingLink || ''} onChange={handleFormChange} className="w-full border rounded px-2 py-1" />
                                </div>
                            </div>
                            <div className="flex justify-end space-x-2 mt-4">
                                <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-[#C71585] text-white rounded hover:bg-[#8D38A8]">{formMode === 'add' ? 'Schedule' : 'Update'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* View Meeting Modal */}
            {showModal && selectedMeeting && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-medium">Meeting Details</h3>
                            <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-500">
                                ×
                            </button>
                        </div>
                        <div className="space-y-3">
                            <p><span className="font-medium">Title:</span> {selectedMeeting.title}</p>
                            <p><span className="font-medium">Description:</span> {selectedMeeting.description}</p>
                            <p className="flex items-center">
                                <FaClock className="mr-2" />
                                <span className="font-medium">Date & Time:</span>
                                {' '}{selectedMeeting.date}, {selectedMeeting.startTime} - {selectedMeeting.endTime}
                            </p>
                            <p><span className="font-medium">Type:</span> {selectedMeeting.type}</p>
                            <p className="flex items-center">
                                {getModeIcon(selectedMeeting.mode)}
                                <span className="font-medium ml-2">Mode:</span>
                                {' '}{selectedMeeting.mode}
                            </p>
                            <p className="flex items-center">
                                <FaMapMarkerAlt className="mr-2" />
                                <span className="font-medium">Location:</span>
                                {' '}{selectedMeeting.location}
                            </p>
                            {selectedMeeting.meetingLink && (
                                <p className="text-[#C71585]">
                                    <a href={selectedMeeting.meetingLink} target="_blank" rel="noopener noreferrer">
                                        Join Meeting
                                    </a>
                                </p>
                            )}
                            <p><span className="font-medium">Status:</span> {selectedMeeting.status}</p>
                            <div>
                                <p className="font-medium">Participants:</p>
                                <ul className="list-disc pl-5 mt-1">
                                    {selectedMeeting.participants.map((participant, index) => (
                                        <li key={index} className="text-sm">{participant}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button onClick={() => setShowModal(false)} className="bg-[#C71585] text-white px-4 py-2 rounded-lg hover:bg-[#8D38A8]">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {deleteTarget && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm">
                        <h2 className="text-lg font-bold mb-2">Are you sure you want to delete this meeting?</h2>
                        <div className="flex justify-end space-x-2 mt-4">
                            <button
                                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                                onClick={() => setDeleteTarget(null)}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                                onClick={() => {
                                    setMeetings(meetings => meetings.filter(m => m.id !== deleteTarget));
                                    setDeleteTarget(null);
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Meetings;