import React, { useState } from 'react';
import { FaDownload, FaEye, FaChartBar, FaCalendarAlt, FaUserGraduate, FaBook, FaChalkboardTeacher, FaFlask, FaTrash } from 'react-icons/fa';

interface Report {
    id: string;
    title: string;
    description: string;
    type: 'Academic' | 'Performance' | 'Attendance' | 'Research' | 'Administrative';
    date: string;
    format: 'PDF' | 'Excel' | 'Word';
    size: string;
    status: 'Generated' | 'Processing' | 'Failed';
}

const Reports: React.FC = () => {
    const [reports, setReports] = useState<Report[]>([
        {
            id: '1',
            title: 'Student Performance Analysis',
            description: 'Detailed analysis of student performance across all courses for the current semester',
            type: 'Performance',
            date: '2024-04-15',
            format: 'PDF',
            size: '2.5 MB',
            status: 'Generated'
        },
        {
            id: '2',
            title: 'Course Attendance Report',
            description: 'Monthly attendance report for all assigned courses',
            type: 'Attendance',
            date: '2024-04-14',
            format: 'Excel',
            size: '1.8 MB',
            status: 'Generated'
        },
        {
            id: '3',
            title: 'Research Progress Summary',
            description: 'Quarterly research activities and publications report',
            type: 'Research',
            date: '2024-04-10',
            format: 'Word',
            size: '3.2 MB',
            status: 'Generated'
        },
        {
            id: '4',
            title: 'Academic Calendar Overview',
            description: 'Summary of academic activities and important dates',
            type: 'Academic',
            date: '2024-04-01',
            format: 'PDF',
            size: '1.5 MB',
            status: 'Generated'
        }
    ]);

    const [showModal, setShowModal] = useState(false);
    const [selectedReport, setSelectedReport] = useState<Report | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [formMode, setFormMode] = useState<'add' | 'edit'>('add');
    const [formReport, setFormReport] = useState<Partial<Report>>({});
    const [filters, setFilters] = useState({ type: '', format: '', status: '' });

    // Filtering logic
    const filteredReports = reports.filter(r =>
        (filters.type === '' || r.type === filters.type) &&
        (filters.format === '' || r.format === filters.format) &&
        (filters.status === '' || r.status === filters.status)
    );

    const handleViewReport = (report: Report) => {
        setSelectedReport(report);
        setShowModal(true);
    };

    const handleEditReport = (report: Report) => {
        setFormMode('edit');
        setFormReport(report);
        setShowForm(true);
    };

    const handleDeleteReport = (id: string) => {
        if (window.confirm('Are you sure you want to delete this report?')) {
            setReports(reports => reports.filter(r => r.id !== id));
        }
    };

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormReport(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formMode === 'add') {
            setReports(prev => [
                ...prev,
                {
                    ...formReport,
                    id: (Math.random() * 100000).toFixed(0),
                    status: formReport.status as Report['status'] || 'Generated',
                    type: formReport.type as Report['type'] || 'Academic',
                    format: formReport.format as Report['format'] || 'PDF',
                    size: formReport.size || '1.0 MB',
                    date: formReport.date || new Date().toISOString().split('T')[0],
                } as Report
            ]);
        } else if (formMode === 'edit' && formReport.id) {
            setReports(prev => prev.map(r => r.id === formReport.id ? { ...r, ...formReport } as Report : r));
        }
        setShowForm(false);
        setFormReport({});
    };

    // Category box click handler
    const handleCategoryClick = (type: string) => {
        setFilters(f => ({ ...f, type }));
    };

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'Academic':
                return <FaBook className="text-[#C71585]" />;
            case 'Performance':
                return <FaChartBar className="text-[#F7C873]" />;
            case 'Attendance':
                return <FaCalendarAlt className="text-[#E6A2FF]" />;
            case 'Research':
                return <FaFlask className="text-[#8D38A8]" />;
            case 'Administrative':
                return <FaChalkboardTeacher className="text-gray-500" />;
            default:
                return null;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Generated':
                return 'bg-[#F7C873] text-[#490548]'; // Gold bg, deep purple text
            case 'Processing':
                return 'bg-[#E6A2FF] text-[#490548]'; // Light purple bg, deep purple text
            case 'Failed':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getFormatColor = (format: string) => {
        switch (format) {
            case 'PDF':
                return 'bg-[#C71585] text-white'; // Magenta bg, white text
            case 'Excel':
                return 'bg-[#F7C873] text-[#490548]'; // Gold bg, deep purple text
            case 'Word':
                return 'bg-[#E6A2FF] text-[#490548]'; // Light purple bg, deep purple text
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Reports Management</h1>
                <div className="flex space-x-4">
                    <button className="bg-[#C71585] text-white px-4 py-2 rounded-lg hover:bg-[#8D38A8] flex items-center" onClick={() => { setShowForm(true); setFormMode('add'); setFormReport({}); }}>
                        <FaChartBar className="mr-2" />
                        Generate Report
                    </button>
                </div>
            </div>

            {/* Report Categories */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-3 cursor-pointer" onClick={() => handleCategoryClick('Academic')}>
                    <FaBook className="text-[#C71585] text-xl" />
                    <div>
                        <div className="text-sm font-medium">Academic</div>
                        <div className="text-xs text-gray-500">5 reports</div>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-3 cursor-pointer" onClick={() => handleCategoryClick('Performance')}>
                    <FaChartBar className="text-[#F7C873] text-xl" />
                    <div>
                        <div className="text-sm font-medium">Performance</div>
                        <div className="text-xs text-gray-500">3 reports</div>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-3 cursor-pointer" onClick={() => handleCategoryClick('Attendance')}>
                    <FaCalendarAlt className="text-[#E6A2FF] text-xl" />
                    <div>
                        <div className="text-sm font-medium">Attendance</div>
                        <div className="text-xs text-gray-500">2 reports</div>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-3 cursor-pointer" onClick={() => handleCategoryClick('Research')}>
                    <FaUserGraduate className="text-[#8D38A8] text-xl" />
                    <div>
                        <div className="text-sm font-medium">Research</div>
                        <div className="text-xs text-gray-500">4 reports</div>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-3 cursor-pointer" onClick={() => handleCategoryClick('Administrative')}>
                    <FaChalkboardTeacher className="text-gray-500 text-xl" />
                    <div>
                        <div className="text-sm font-medium">Administrative</div>
                        <div className="text-xs text-gray-500">3 reports</div>
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <select className="border rounded-lg px-4 py-2" value={filters.type} onChange={e => setFilters(f => ({ ...f, type: e.target.value }))}>
                    <option value="">Filter by Type</option>
                    <option value="Academic">Academic</option>
                    <option value="Performance">Performance</option>
                    <option value="Attendance">Attendance</option>
                    <option value="Research">Research</option>
                    <option value="Administrative">Administrative</option>
                </select>
                <select className="border rounded-lg px-4 py-2" value={filters.format} onChange={e => setFilters(f => ({ ...f, format: e.target.value }))}>
                    <option value="">Filter by Format</option>
                    <option value="PDF">PDF</option>
                    <option value="Excel">Excel</option>
                    <option value="Word">Word</option>
                </select>
                <select className="border rounded-lg px-4 py-2" value={filters.status} onChange={e => setFilters(f => ({ ...f, status: e.target.value }))}>
                    <option value="">Filter by Status</option>
                    <option value="Generated">Generated</option>
                    <option value="Processing">Processing</option>
                    <option value="Failed">Failed</option>
                </select>
            </div>

            {/* Reports Table */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Report Details
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Format
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
                        {filteredReports.map((report) => (
                            <tr key={report.id} className="hover:bg-gray-50">
                                <td className="px-2 py-4">
                                    <div className="text-sm font-medium text-gray-900">{report.title}</div>
                                    <div className="text-sm text-gray-500">{report.description}</div>
                                    <div className="text-xs text-gray-500 mt-1">Generated on {report.date}</div>
                                </td>
                                <td className="px-2 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        {getTypeIcon(report.type)}
                                        <span className="ml-2 text-sm text-gray-900">{report.type}</span>
                                    </div>
                                </td>
                                <td className="px-2 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getFormatColor(report.format)}`}>
                                        {report.format}
                                    </span>
                                    <div className="text-xs text-gray-500 mt-1">{report.size}</div>
                                </td>
                                <td className="px-2 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(report.status)}`}>
                                        {report.status}
                                    </span>
                                </td>
                                <td className="px-2 py-4 whitespace-nowrap text-sm font-medium">
                                    <div className="flex space-x-3">
                                        <button onClick={() => handleViewReport(report)} className="text-[#C71585] hover:text-[#8D38A8]">
                                            <FaEye className="w-5 h-5" />
                                        </button>
                                        <button onClick={() => handleEditReport(report)} className="text-[#F7C873] hover:text-[#C71585]">
                                            <FaChartBar className="w-5 h-5" />
                                        </button>
                                        <button onClick={() => handleDeleteReport(report.id)} className="text-red-600 hover:text-red-900">
                                            <FaTrash className="w-5 h-5" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Create/Edit Report Form Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50" style={{ paddingTop: '64px' }}>
                    <div className="relative mx-auto p-5 border w-full max-w-lg shadow-lg rounded-md bg-white mt-8 mb-8 max-h-[90vh] overflow-y-auto">
                        <h3 className="text-lg font-medium mb-4">{formMode === 'add' ? 'Generate Report' : 'Edit Report'}</h3>
                        <form onSubmit={handleFormSubmit} className="space-y-3">
                            <div className="grid grid-cols-2 gap-3">
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium">Title</label>
                                    <input name="title" value={formReport.title || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1" />
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium">Description</label>
                                    <textarea name="description" value={formReport.description || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Type</label>
                                    <select name="type" value={formReport.type || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1">
                                        <option value="">Select Type</option>
                                        <option value="Academic">Academic</option>
                                        <option value="Performance">Performance</option>
                                        <option value="Attendance">Attendance</option>
                                        <option value="Research">Research</option>
                                        <option value="Administrative">Administrative</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Format</label>
                                    <select name="format" value={formReport.format || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1">
                                        <option value="">Select Format</option>
                                        <option value="PDF">PDF</option>
                                        <option value="Excel">Excel</option>
                                        <option value="Word">Word</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Status</label>
                                    <select name="status" value={formReport.status || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1">
                                        <option value="Generated">Generated</option>
                                        <option value="Processing">Processing</option>
                                        <option value="Failed">Failed</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Size</label>
                                    <input name="size" value={formReport.size || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Date</label>
                                    <input type="date" name="date" value={formReport.date || ''} onChange={handleFormChange} required className="w-full border rounded px-2 py-1" />
                                </div>
                            </div>
                            <div className="flex justify-end space-x-2 mt-4">
                                <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-[#C71585] text-white rounded hover:bg-[#8D38A8]">{formMode === 'add' ? 'Generate' : 'Update'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* View Report Modal */}
            {showModal && selectedReport && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-medium">Report Details</h3>
                            <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-500">
                                ×
                            </button>
                        </div>
                        <div className="space-y-3">
                            <p><span className="font-medium">Title:</span> {selectedReport.title}</p>
                            <p><span className="font-medium">Description:</span> {selectedReport.description}</p>
                            <p><span className="font-medium">Type:</span> {selectedReport.type}</p>
                            <p><span className="font-medium">Format:</span> {selectedReport.format}</p>
                            <p><span className="font-medium">Size:</span> {selectedReport.size}</p>
                            <p><span className="font-medium">Generated on:</span> {selectedReport.date}</p>
                            <p><span className="font-medium">Status:</span> {selectedReport.status}</p>
                        </div>
                        <div className="mt-4 flex justify-end space-x-3">
                            <button
                                className="bg-[#C71585] text-white px-4 py-2 rounded-lg hover:bg-[#8D38A8] flex items-center"
                                onClick={() => {
                                    let mimeType = 'text/plain';
                                    let ext = 'txt';
                                    if (selectedReport.format === 'PDF') {
                                        mimeType = 'application/pdf';
                                        ext = 'pdf';
                                    } else if (selectedReport.format === 'Excel') {
                                        mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                                        ext = 'xlsx';
                                    } else if (selectedReport.format === 'Word') {
                                        mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
                                        ext = 'docx';
                                    }
                                    const content = `Report Title: ${selectedReport.title}\nDescription: ${selectedReport.description}\nType: ${selectedReport.type}\nFormat: ${selectedReport.format}\nSize: ${selectedReport.size}\nGenerated on: ${selectedReport.date}\nStatus: ${selectedReport.status}`;
                                    const blob = new Blob([content], { type: mimeType });
                                    const url = window.URL.createObjectURL(blob);
                                    const a = document.createElement('a');
                                    a.href = url;
                                    a.download = `${selectedReport.title.replace(/\s+/g, '_')}.${ext}`;
                                    document.body.appendChild(a);
                                    a.click();
                                    document.body.removeChild(a);
                                    window.URL.revokeObjectURL(url);
                                }}
                            >
                                <FaDownload className="mr-2" />
                                Download
                            </button>
                            <button onClick={() => setShowModal(false)} className="bg-[#C71585] text-white px-4 py-2 rounded-lg hover:bg-[#8D38A8]">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Reports;