import React, { useState } from 'react';
import { FaCalendarAlt, FaEdit, FaTrash, FaEye, FaFileAlt } from 'react-icons/fa';

interface Exam {
    id: string;
    courseCode: string;
    courseName: string;
    examType: 'Mid Term' | 'Final' | 'Quiz' | 'Assignment';
    date: string;
    time: string;
    duration: string;
    venue: string;
    totalMarks: number;
    status: 'Scheduled' | 'Completed' | 'Cancelled';
}

const Exams: React.FC = () => {
    const [exams, setExams] = useState<Exam[]>([
        {
            id: '1',
            courseCode: 'CS101',
            courseName: 'Introduction to Computer Science',
            examType: 'Mid Term',
            date: '2024-04-15',
            time: '09:00 AM',
            duration: '2 hours',
            venue: 'Room 301',
            totalMarks: 50,
            status: 'Scheduled'
        },
        {
            id: '2',
            courseCode: 'CS202',
            courseName: 'Data Structures',
            examType: 'Quiz',
            date: '2024-04-18',
            time: '11:00 AM',
            duration: '1 hour',
            venue: 'Lab 2',
            totalMarks: 20,
            status: 'Scheduled'
        },
        {
            id: '3',
            courseCode: 'CS303',
            courseName: 'Database Management',
            examType: 'Final',
            date: '2024-04-25',
            time: '02:00 PM',
            duration: '3 hours',
            venue: 'Main Hall',
            totalMarks: 100,
            status: 'Scheduled'
        }
    ]);
    const [showModal, setShowModal] = useState(false);
    const [selectedExam, setSelectedExam] = useState<Exam | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [formMode, setFormMode] = useState<'add' | 'edit'>('add');
    const [formExam, setFormExam] = useState<Partial<Exam>>({});
    const [filters, setFilters] = useState({ course: '', type: '', status: '' });

    // Filtering logic
    const filteredExams = exams.filter(exam =>
        (filters.course === '' || exam.courseCode === filters.course) &&
        (filters.type === '' || exam.examType === filters.type) &&
        (filters.status === '' || exam.status === filters.status)
    );

    const handleViewExam = (exam: Exam) => {
        setSelectedExam(exam);
        setShowModal(true);
    };

    const handleEditExam = (exam: Exam) => {
        setFormMode('edit');
        setFormExam(exam);
        setShowForm(true);
    };

    const handleDeleteExam = (id: string) => {
        if (window.confirm('Are you sure you want to delete this exam?')) {
            setExams(exams => exams.filter(e => e.id !== id));
        }
    };

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormExam(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formMode === 'add') {
            setExams(prev => [
                ...prev,
                {
                    ...formExam,
                    id: (Math.random() * 100000).toFixed(0),
                    status: formExam.status as Exam['status'] || 'Scheduled',
                    examType: formExam.examType as Exam['examType'] || 'Mid Term',
                    totalMarks: Number(formExam.totalMarks) || 0,
                } as Exam
            ]);
        } else if (formMode === 'edit' && formExam.id) {
            setExams(prev => prev.map(e => e.id === formExam.id ? { ...e, ...formExam, totalMarks: Number(formExam.totalMarks) } as Exam : e));
        }
        setShowForm(false);
        setFormExam({});
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Scheduled':
                return 'bg-green-100 text-green-800';
            case 'Completed':
                return 'bg-blue-100 text-blue-800';
            case 'Cancelled':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Exam Management</h1>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center" onClick={() => { setShowForm(true); setFormMode('add'); setFormExam({}); }}>
                    <FaCalendarAlt className="mr-2" />
                    Schedule New Exam
                </button>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <select className="border rounded-lg px-4 py-2" value={filters.course} onChange={e => setFilters(f => ({ ...f, course: e.target.value }))}>
                    <option value="">Filter by Course</option>
                    <option value="CS101">CS101 - Intro to CS</option>
                    <option value="CS202">CS202 - Data Structures</option>
                    <option value="CS303">CS303 - Database Management</option>
                </select>
                <select className="border rounded-lg px-4 py-2" value={filters.type} onChange={e => setFilters(f => ({ ...f, type: e.target.value }))}>
                    <option value="">Filter by Exam Type</option>
                    <option value="Mid Term">Mid Term</option>
                    <option value="Final">Final</option>
                    <option value="Quiz">Quiz</option>
                    <option value="Assignment">Assignment</option>
                </select>
                <select className="border rounded-lg px-4 py-2" value={filters.status} onChange={e => setFilters(f => ({ ...f, status: e.target.value }))}>
                    <option value="">Filter by Status</option>
                    <option value="Scheduled">Scheduled</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                </select>
            </div>

            {/* Exams Table */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Course
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Exam Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date & Time
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Venue
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
                        {filteredExams.map((exam) => (
                            <tr key={exam.id} className="hover:bg-gray-50">
                                <td className="px-2 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{exam.courseCode}</div>
                                    <div className="text-sm text-gray-500">{exam.courseName}</div>
                                </td>
                                <td className="px-2 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{exam.examType}</div>
                                    <div className="text-sm text-gray-500">{exam.totalMarks} marks</div>
                                </td>
                                <td className="px-2 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{exam.date}</div>
                                    <div className="text-sm text-gray-500">{exam.time} ({exam.duration})</div>
                                </td>
                                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {exam.venue}
                                </td>
                                <td className="px-2 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(exam.status)}`}>
                                        {exam.status}
                                    </span>
                                </td>
                                <td className="px-2 py-4 whitespace-nowrap text-sm font-medium">
                                    <div className="flex space-x-3">
                                        <button onClick={() => handleViewExam(exam)} className="text-blue-600 hover:text-blue-900">
                                            <FaEye className="w-5 h-5" />
                                        </button>
                                        <button onClick={() => handleEditExam(exam)} className="text-green-600 hover:text-green-900">
                                            <FaEdit className="w-5 h-5" />
                                        </button>
                                        <button onClick={() => handleDeleteExam(exam.id)} className="text-red-600 hover:text-red-900">
                                            <FaTrash className="w-5 h-5" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Schedule/Edit Exam Form Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
                    <div className="relative mx-auto p-5 border w-full max-w-lg shadow-lg rounded-md bg-white">
                        <h3 className="text-lg font-medium mb-4">{formMode === 'add' ? 'Schedule New Exam' : 'Edit Exam'}</h3>
                        <form onSubmit={handleFormSubmit} className="space-y-3">
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-sm font-medium">Course Code</label>
                                    <input name="courseCode" value={formExam.courseCode || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Course Name</label>
                                    <input name="courseName" value={formExam.courseName || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Exam Type</label>
                                    <select name="examType" value={formExam.examType || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1">
                                        <option value="">Select Type</option>
                                        <option value="Mid Term">Mid Term</option>
                                        <option value="Final">Final</option>
                                        <option value="Quiz">Quiz</option>
                                        <option value="Assignment">Assignment</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Date</label>
                                    <input type="date" name="date" value={formExam.date || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Time</label>
                                    <input name="time" value={formExam.time || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Duration</label>
                                    <input name="duration" value={formExam.duration || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Venue</label>
                                    <input name="venue" value={formExam.venue || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Total Marks</label>
                                    <input type="number" name="totalMarks" value={formExam.totalMarks || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Status</label>
                                    <select name="status" value={formExam.status || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1">
                                        <option value="Scheduled">Scheduled</option>
                                        <option value="Completed">Completed</option>
                                        <option value="Cancelled">Cancelled</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-end space-x-2 mt-4">
                                <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">{formMode === 'add' ? 'Schedule' : 'Update'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* View Exam Modal */}
            {showModal && selectedExam && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-medium">Exam Details</h3>
                            <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-500">
                                ×
                            </button>
                        </div>
                        <div className="space-y-3">
                            <p><span className="font-medium">Course:</span> {selectedExam.courseCode} - {selectedExam.courseName}</p>
                            <p><span className="font-medium">Type:</span> {selectedExam.examType}</p>
                            <p><span className="font-medium">Date:</span> {selectedExam.date}</p>
                            <p><span className="font-medium">Time:</span> {selectedExam.time}</p>
                            <p><span className="font-medium">Duration:</span> {selectedExam.duration}</p>
                            <p><span className="font-medium">Venue:</span> {selectedExam.venue}</p>
                            <p><span className="font-medium">Total Marks:</span> {selectedExam.totalMarks}</p>
                            <p><span className="font-medium">Status:</span> {selectedExam.status}</p>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button onClick={() => setShowModal(false)} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Exams;