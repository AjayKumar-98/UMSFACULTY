import React, { useState } from 'react';
import { FaCalendarAlt, FaEdit, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

interface ClassSession {
    id: string;
    courseCode: string;
    courseName: string;
    day: string;
    startTime: string;
    endTime: string;
    room: string;
    type: 'Lecture' | 'Lab' | 'Tutorial';
}

const Timetable: React.FC = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const timeSlots = [
        '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
        '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
    ];

    const [schedule, setSchedule] = useState<ClassSession[]>([
        {
            id: '1',
            courseCode: 'CS101',
            courseName: 'Introduction to Computer Science',
            day: 'Monday',
            startTime: '09:00 AM',
            endTime: '10:00 AM',
            room: 'Room 301',
            type: 'Lecture'
        },
        {
            id: '2',
            courseCode: 'CS202',
            courseName: 'Data Structures',
            day: 'Monday',
            startTime: '02:00 PM',
            endTime: '04:00 PM',
            room: 'Lab 2',
            type: 'Lab'
        },
        {
            id: '3',
            courseCode: 'CS303',
            courseName: 'Database Management',
            day: 'Wednesday',
            startTime: '11:00 AM',
            endTime: '12:00 PM',
            room: 'Room 201',
            type: 'Lecture'
        },
        {
            id: '4',
            courseCode: 'CS101',
            courseName: 'Introduction to Computer Science',
            day: 'Thursday',
            startTime: '09:00 AM',
            endTime: '10:00 AM',
            room: 'Room 301',
            type: 'Tutorial'
        }
    ]);
    const [editMode, setEditMode] = useState(false);
    const [showSessionForm, setShowSessionForm] = useState(false);
    const [formSession, setFormSession] = useState<Partial<ClassSession>>({});
    const [formType, setFormType] = useState<'add' | 'edit'>('add');

    const getClassForTimeSlot = (day: string, time: string) => {
        return schedule.find(
            session => session.day === day && session.startTime === time
        );
    };

    const getSessionDuration = (session: ClassSession) => {
        const startIndex = timeSlots.indexOf(session.startTime);
        const endIndex = timeSlots.indexOf(session.endTime);
        return endIndex - startIndex;
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'Lecture':
                return 'bg-blue-100 border-blue-200 text-blue-800';
            case 'Lab':
                return 'bg-green-100 border-green-200 text-green-800';
            case 'Tutorial':
                return 'bg-purple-100 border-purple-200 text-purple-800';
            default:
                return 'bg-gray-100 border-gray-200 text-gray-800';
        }
    };

    const handleExportSchedule = () => {
        const headers = ['Course Code', 'Course Name', 'Day', 'Start Time', 'End Time', 'Room', 'Type'];
        const csvContent = [
            headers.join(','),
            ...schedule.map(s => [s.courseCode, s.courseName, s.day, s.startTime, s.endTime, s.room, s.type].join(','))
        ].join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `weekly_timetable.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    };

    const handleEditSchedule = () => {
        setEditMode(true);
    };

    const handleSessionFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormSession(prev => ({ ...prev, [name]: value }));
    };
    const handleSessionFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formType === 'add') {
            setSchedule(prev => [
                ...prev,
                { ...formSession, id: (Math.random() * 100000).toFixed(0) } as ClassSession
            ]);
        } else if (formType === 'edit' && formSession.id) {
            setSchedule(prev => prev.map(s => s.id === formSession.id ? { ...s, ...formSession } as ClassSession : s));
        }
        setShowSessionForm(false);
        setFormSession({});
    };
    const handleEditSession = (session: ClassSession) => {
        setFormType('edit');
        setFormSession(session);
        setShowSessionForm(true);
    };
    const handleAddSession = () => {
        setFormType('add');
        setFormSession({});
        setShowSessionForm(true);
    };
    const handleDeleteSession = (id: string) => {
        if (window.confirm('Are you sure you want to delete this session?')) {
            setSchedule(prev => prev.filter(s => s.id !== id));
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Weekly Timetable</h1>
                <div className="flex space-x-4">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center" onClick={handleExportSchedule}>
                        <FaCalendarAlt className="mr-2" />
                        Export Schedule
                    </button>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center" onClick={handleEditSchedule}>
                        <FaEdit className="mr-2" />
                        Edit Schedule
                    </button>
                </div>
            </div>

            {/* Schedule Legend */}
            <div className="flex space-x-4 mb-6">
                <div className="flex items-center">
                    <div className="w-4 h-4 rounded bg-blue-100 border border-blue-200 mr-2"></div>
                    <span className="text-sm text-gray-600">Lecture</span>
                </div>
                <div className="flex items-center">
                    <div className="w-4 h-4 rounded bg-green-100 border border-green-200 mr-2"></div>
                    <span className="text-sm text-gray-600">Lab</span>
                </div>
                <div className="flex items-center">
                    <div className="w-4 h-4 rounded bg-purple-100 border border-purple-200 mr-2"></div>
                    <span className="text-sm text-gray-600">Tutorial</span>
                </div>
            </div>

            {/* Add/Edit Session Modal */}
            {showSessionForm && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg">
                        <h3 className="text-lg font-bold mb-4">{formType === 'add' ? 'Add Session' : 'Edit Session'}</h3>
                        <form onSubmit={handleSessionFormSubmit} className="space-y-3">
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-sm font-medium">Course Code</label>
                                    <input name="courseCode" value={formSession.courseCode || ''} onChange={handleSessionFormChange} required className="w-full border rounded px-2 py-1" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Course Name</label>
                                    <input name="courseName" value={formSession.courseName || ''} onChange={handleSessionFormChange} required className="w-full border rounded px-2 py-1" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Day</label>
                                    <select name="day" value={formSession.day || ''} onChange={handleSessionFormChange} required className="w-full border rounded px-2 py-1">
                                        <option value="">Select Day</option>
                                        {days.map(day => <option key={day} value={day}>{day}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Type</label>
                                    <select name="type" value={formSession.type || ''} onChange={handleSessionFormChange} required className="w-full border rounded px-2 py-1">
                                        <option value="">Select Type</option>
                                        <option value="Lecture">Lecture</option>
                                        <option value="Lab">Lab</option>
                                        <option value="Tutorial">Tutorial</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Start Time</label>
                                    <select name="startTime" value={formSession.startTime || ''} onChange={handleSessionFormChange} required className="w-full border rounded px-2 py-1">
                                        <option value="">Select Start Time</option>
                                        {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">End Time</label>
                                    <select name="endTime" value={formSession.endTime || ''} onChange={handleSessionFormChange} required className="w-full border rounded px-2 py-1">
                                        <option value="">Select End Time</option>
                                        {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium">Room</label>
                                    <input name="room" value={formSession.room || ''} onChange={handleSessionFormChange} required className="w-full border rounded px-2 py-1" />
                                </div>
                            </div>
                            <div className="flex justify-end space-x-2 mt-4">
                                <button type="button" onClick={() => setShowSessionForm(false)} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">{formType === 'add' ? 'Add' : 'Update'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Edit mode controls */}
            {editMode && (
                <div className="my-4 flex space-x-2">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleAddSession}>Add Session</button>
                    <button className="px-4 py-2 bg-gray-400 text-white rounded" onClick={() => setEditMode(false)}>Done Editing</button>
                </div>
            )}

            {/* Timetable Grid */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-20">
                                    Time
                                </th>
                                {days.map((day) => (
                                    <th key={day} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        {day}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {timeSlots.map((time) => (
                                <tr key={time}>
                                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {time}
                                    </td>
                                    {days.map((day) => {
                                        const session = getClassForTimeSlot(day, time);
                                        if (!session) {
                                            return (
                                                <td key={`${day}-${time}`} className="px-2 py-4 whitespace-nowrap">
                                                    {editMode && (
                                                        <button className="text-xs text-blue-600 underline" onClick={() => { setFormType('add'); setFormSession({ day, startTime: time }); setShowSessionForm(true); }}>+ Add</button>
                                                    )}
                                                </td>
                                            );
                                        }
                                        if (session.startTime === time) {
                                            const duration = getSessionDuration(session);
                                            return (
                                                <td
                                                    key={`${day}-${time}`}
                                                    rowSpan={duration}
                                                    className={`px-2 py-4 relative ${getTypeColor(session.type)} border rounded-lg m-1`}
                                                >
                                                    <div className="flex flex-col h-full">
                                                        <div className="font-medium text-sm">{session.courseCode}</div>
                                                        <div className="text-sm">{session.courseName}</div>
                                                        <div className="flex items-center text-sm mt-2">
                                                            <FaClock className="mr-1 h-3 w-3" />
                                                            {session.startTime} - {session.endTime}
                                                        </div>
                                                        <div className="flex items-center text-sm">
                                                            <FaMapMarkerAlt className="mr-1 h-3 w-3" />
                                                            {session.room}
                                                        </div>
                                                        <div className="text-xs mt-1 font-medium">{session.type}</div>
                                                        {editMode && (
                                                            <div className="flex space-x-2 mt-2">
                                                                <button className="text-xs text-green-700 underline" onClick={() => handleEditSession(session)}>Edit</button>
                                                                <button className="text-xs text-red-700 underline" onClick={() => handleDeleteSession(session.id)}>Delete</button>
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                            );
                                        }
                                        return null;
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Timetable;