import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaEye, FaDownload } from 'react-icons/fa';

interface Assignment {
    id: string;
    courseCode: string;
    courseName: string;
    title: string;
    description: string;
    dueDate: string;
    totalMarks: number;
    status: 'Active' | 'Past Due' | 'Graded';
    submissionCount: number;
    type: 'Individual' | 'Group';
}

const Assignments: React.FC = () => {
    const [assignments, setAssignments] = useState<Assignment[]>([
        {
            id: '1',
            courseCode: 'CS101',
            courseName: 'Introduction to Computer Science',
            title: 'Programming Basics',
            description: 'Create a simple calculator using Python',
            dueDate: '2024-04-20',
            totalMarks: 20,
            status: 'Active',
            submissionCount: 15,
            type: 'Individual'
        },
        {
            id: '2',
            courseCode: 'CS202',
            courseName: 'Data Structures',
            title: 'Binary Search Tree Implementation',
            description: 'Implement a BST with insertion, deletion, and traversal',
            dueDate: '2024-04-25',
            totalMarks: 30,
            status: 'Active',
            submissionCount: 12,
            type: 'Individual'
        },
        {
            id: '3',
            courseCode: 'CS303',
            courseName: 'Database Management',
            title: 'Database Design Project',
            description: 'Design and implement a database for a library management system',
            dueDate: '2024-04-15',
            totalMarks: 50,
            status: 'Past Due',
            submissionCount: 18,
            type: 'Group'
        }
    ]);
    const [showModal, setShowModal] = useState(false);
    const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [formMode, setFormMode] = useState<'add' | 'edit'>('add');
    const [formAssignment, setFormAssignment] = useState<Partial<Assignment>>({});
    const [filters, setFilters] = useState({ course: '', type: '', status: '' });

    // Filtering logic
    const filteredAssignments = assignments.filter(a =>
        (filters.course === '' || a.courseCode === filters.course) &&
        (filters.type === '' || a.type === filters.type) &&
        (filters.status === '' || a.status === filters.status)
    );

    const handleViewAssignment = (assignment: Assignment) => {
        setSelectedAssignment(assignment);
        setShowModal(true);
    };

    const handleEditAssignment = (assignment: Assignment) => {
        setFormMode('edit');
        setFormAssignment(assignment);
        setShowForm(true);
    };

    const handleDeleteAssignment = (id: string) => {
        if (window.confirm('Are you sure you want to delete this assignment?')) {
            setAssignments(assignments => assignments.filter(a => a.id !== id));
        }
    };

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormAssignment(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formMode === 'add') {
            setAssignments(prev => [
                ...prev,
                {
                    ...formAssignment,
                    id: (Math.random() * 100000).toFixed(0),
                    status: formAssignment.status as Assignment['status'] || 'Active',
                    type: formAssignment.type as Assignment['type'] || 'Individual',
                    totalMarks: Number(formAssignment.totalMarks) || 0,
                    submissionCount: 0,
                } as Assignment
            ]);
        } else if (formMode === 'edit' && formAssignment.id) {
            setAssignments(prev => prev.map(a => a.id === formAssignment.id ? { ...a, ...formAssignment, totalMarks: Number(formAssignment.totalMarks) } as Assignment : a));
        }
        setShowForm(false);
        setFormAssignment({});
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Active':
                return 'bg-green-100 text-green-800';
            case 'Past Due':
                return 'bg-red-100 text-red-800';
            case 'Graded':
                return 'bg-blue-100 text-blue-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Assignment Management</h1>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center" onClick={() => { setShowForm(true); setFormMode('add'); setFormAssignment({}); }}>
                    <FaPlus className="mr-2" />
                    Create Assignment
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
                    <option value="">Filter by Type</option>
                    <option value="Individual">Individual</option>
                    <option value="Group">Group</option>
                </select>
                <select className="border rounded-lg px-4 py-2" value={filters.status} onChange={e => setFilters(f => ({ ...f, status: e.target.value }))}>
                    <option value="">Filter by Status</option>
                    <option value="Active">Active</option>
                    <option value="Past Due">Past Due</option>
                    <option value="Graded">Graded</option>
                </select>
            </div>

            {/* Assignments Table */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Assignment Details
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Course
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Due Date
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Submissions
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredAssignments.map((assignment) => (
                            <tr key={assignment.id} className="hover:bg-gray-50">
                                <td className="px-2 py-4">
                                    <div className="text-sm font-medium text-gray-900">{assignment.title}</div>
                                    <div className="text-sm text-gray-500">{assignment.type} Assignment</div>
                                </td>
                                <td className="px-2 py-4">
                                    <div className="text-sm text-gray-900">{assignment.courseCode}</div>
                                    <div className="text-sm text-gray-500">{assignment.courseName}</div>
                                </td>
                                <td className="px-2 py-4">
                                    <div className="text-sm text-gray-900">{assignment.dueDate}</div>
                                    <div className="text-sm text-gray-500">{assignment.totalMarks} marks</div>
                                </td>
                                <td className="px-2 py-4">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(assignment.status)}`}>
                                        {assignment.status}
                                    </span>
                                </td>
                                <td className="px-2 py-4">
                                    <div className="text-sm text-gray-900">{assignment.submissionCount} submissions</div>
                                </td>
                                <td className="px-2 py-4 whitespace-nowrap text-sm font-medium">
                                    <div className="flex space-x-3">
                                        <button onClick={() => handleViewAssignment(assignment)} className="text-blue-600 hover:text-blue-900">
                                            <FaEye className="w-5 h-5" />
                                        </button>
                                        <button onClick={() => handleEditAssignment(assignment)} className="text-green-600 hover:text-green-900">
                                            <FaEdit className="w-5 h-5" />
                                        </button>
                                        <button onClick={() => handleDeleteAssignment(assignment.id)} className="text-red-600 hover:text-red-900">
                                            <FaTrash className="w-5 h-5" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Create/Edit Assignment Form Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
                    <div className="relative mx-auto p-5 border w-full max-w-lg shadow-lg rounded-md bg-white">
                        <h3 className="text-lg font-medium mb-4">{formMode === 'add' ? 'Create Assignment' : 'Edit Assignment'}</h3>
                        <form onSubmit={handleFormSubmit} className="space-y-3">
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-sm font-medium">Course Code</label>
                                    <input name="courseCode" value={formAssignment.courseCode || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Course Name</label>
                                    <input name="courseName" value={formAssignment.courseName || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Title</label>
                                    <input name="title" value={formAssignment.title || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Type</label>
                                    <select name="type" value={formAssignment.type || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1">
                                        <option value="">Select Type</option>
                                        <option value="Individual">Individual</option>
                                        <option value="Group">Group</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Due Date</label>
                                    <input type="date" name="dueDate" value={formAssignment.dueDate || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Total Marks</label>
                                    <input type="number" name="totalMarks" value={formAssignment.totalMarks || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1" />
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium">Description</label>
                                    <textarea name="description" value={formAssignment.description || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Status</label>
                                    <select name="status" value={formAssignment.status || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1">
                                        <option value="Active">Active</option>
                                        <option value="Past Due">Past Due</option>
                                        <option value="Graded">Graded</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-end space-x-2 mt-4">
                                <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">{formMode === 'add' ? 'Create' : 'Update'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* View Assignment Modal */}
            {showModal && selectedAssignment && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-medium">Assignment Details</h3>
                            <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-500">
                                ×
                            </button>
                        </div>
                        <div className="space-y-3">
                            <p><span className="font-medium">Title:</span> {selectedAssignment.title}</p>
                            <p><span className="font-medium">Course:</span> {selectedAssignment.courseCode} - {selectedAssignment.courseName}</p>
                            <p><span className="font-medium">Type:</span> {selectedAssignment.type}</p>
                            <p><span className="font-medium">Description:</span> {selectedAssignment.description}</p>
                            <p><span className="font-medium">Due Date:</span> {selectedAssignment.dueDate}</p>
                            <p><span className="font-medium">Total Marks:</span> {selectedAssignment.totalMarks}</p>
                            <p><span className="font-medium">Status:</span> {selectedAssignment.status}</p>
                            <p><span className="font-medium">Submissions:</span> {selectedAssignment.submissionCount}</p>
                        </div>
                        <div className="mt-4 flex justify-end space-x-3">
                            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center">
                                <FaDownload className="mr-2" />
                                Download Submissions
                            </button>
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

export default Assignments;