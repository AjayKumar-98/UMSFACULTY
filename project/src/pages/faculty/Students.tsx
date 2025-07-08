import React, { useState, useEffect } from 'react';
import { FaUserGraduate, FaEye, FaDownload, FaCheck, FaTimes, FaUserEdit, FaCalendarCheck } from 'react-icons/fa';

interface Student {
    id: string;
    rollNo: string;
    name: string;
    course: string;
    attendance: number;
    performance: number;
    grade: string;
    isPresent?: boolean;
    lastUpdated?: string;
    attendanceHistory?: {
        date: string;
        status: boolean;
    }[];
}

interface Course {
    id: string;
    code: string;
    name: string;
    schedule: string;
    totalClasses: number;
}

const Students: React.FC = () => {
    const [selectedCourse, setSelectedCourse] = useState<string>('');
    const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
    const [showStudentModal, setShowStudentModal] = useState(false);
    const [showAttendanceModal, setShowAttendanceModal] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
    const [attendanceSubmitting, setAttendanceSubmitting] = useState(false);
    const [downloadingReport, setDownloadingReport] = useState(false);

    const courses: Course[] = [
        {
            id: '1',
            code: 'CS101',
            name: 'Introduction to Computer Science',
            schedule: 'Mon, Wed, Fri - 10:00 AM',
            totalClasses: 45
        },
        {
            id: '2',
            code: 'CS201',
            name: 'Data Structures',
            schedule: 'Tue, Thu - 11:00 AM',
            totalClasses: 30
        },
        {
            id: '3',
            code: 'CS301',
            name: 'Database Management',
            schedule: 'Mon, Wed - 2:00 PM',
            totalClasses: 30
        },
    ];

    const [students, setStudents] = useState<Student[]>([
        {
            id: '1',
            rollNo: 'CS2023001',
            name: 'Jagadeesh',
            course: 'CS101',
            attendance: 85,
            performance: 78,
            grade: 'A',
            isPresent: false,
            lastUpdated: new Date().toISOString(),
            attendanceHistory: [
                { date: '2024-01-15', status: true },
                { date: '2024-01-16', status: true },
                { date: '2024-01-17', status: false }
            ]
        },
        {
            id: '2',
            rollNo: 'CS2023002',
            name: 'Vinay',
            course: 'CS101',
            attendance: 92,
            performance: 85,
            grade: 'A+',
            isPresent: false,
            lastUpdated: new Date().toISOString(),
            attendanceHistory: [
                { date: '2024-01-15', status: true },
                { date: '2024-01-16', status: true },
                { date: '2024-01-17', status: true }
            ]
        },
        {
            id: '3',
            rollNo: 'CS2023003',
            name: 'Pranay',
            course: 'CS201',
            attendance: 78,
            performance: 72,
            grade: 'B+',
            isPresent: false,
            lastUpdated: new Date().toISOString(),
            attendanceHistory: [
                { date: '2024-01-15', status: true },
                { date: '2024-01-16', status: false },
                { date: '2024-01-17', status: true }
            ]
        },

        {
            id: '4',
            rollNo: 'CS2023004',
            name: 'charan',
            course: 'CS201',
            attendance: 78,
            performance: 72,
            grade: 'B+',
            isPresent: false,
            lastUpdated: new Date().toISOString(),
            attendanceHistory: [
                { date: '2024-01-15', status: true },
                { date: '2024-01-16', status: false },
                { date: '2024-01-17', status: true }
            ]
        },
        {
            id: '5',
            rollNo: 'CS2023005',
            name: 'mallesh',
            course: 'CS201',
            attendance: 78,
            performance: 72,
            grade: 'B+',
            isPresent: false,
            lastUpdated: new Date().toISOString(),
            attendanceHistory: [
                { date: '2024-01-15', status: true },
                { date: '2024-01-16', status: false },
                { date: '2024-01-17', status: true }
            ]
        },
    ]);

    const filteredStudents = selectedCourse
        ? students.filter(student => student.course === selectedCourse)
        : students;

    const selectedCourseInfo = courses.find(course => course.code === selectedCourse);

    const handleStatusChange = (studentId: string, isPresent: boolean) => {
        setStudents(prevStudents =>
            prevStudents.map(student =>
                student.id === studentId
                    ? {
                        ...student,
                        isPresent,
                        lastUpdated: new Date().toISOString(),
                        attendance: calculateNewAttendance(student, isPresent),
                        attendanceHistory: [
                            ...(student.attendanceHistory || []),
                            { date: selectedDate, status: isPresent }
                        ]
                    }
                    : student
            )
        );
    };

    const calculateNewAttendance = (student: Student, isPresent: boolean) => {
        const history = student.attendanceHistory || [];
        const totalClasses = history.length + 1;
        const presentClasses = history.filter(h => h.status).length + (isPresent ? 1 : 0);
        return Math.round((presentClasses / totalClasses) * 100);
    };

    const handleBulkAttendanceSubmit = async () => {
        try {
            setAttendanceSubmitting(true);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Update attendance history
            const updatedStudents = students.map(student => {
                if (!selectedCourse || student.course === selectedCourse) {
                    return {
                        ...student,
                        lastUpdated: new Date().toISOString(),
                        attendanceHistory: [
                            ...(student.attendanceHistory || []),
                            { date: selectedDate, status: student.isPresent || false }
                        ]
                    };
                }
                return student;
            });

            setStudents(updatedStudents);
            setShowAttendanceModal(false);
            alert('Attendance has been submitted successfully!');
        } catch (error) {
            console.error('Error submitting attendance:', error);
            alert('Failed to submit attendance. Please try again.');
        } finally {
            setAttendanceSubmitting(false);
        }
    };

    const handleDownloadReport = async () => {
        try {
            setDownloadingReport(true);
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            const selectedStudents = selectedCourse
                ? students.filter(s => s.course === selectedCourse)
                : students;

            const headers = [
                'Roll No',
                'Name',
                'Course',
                'Total Classes',
                'Classes Attended',
                'Attendance %',
                'Last Updated'
            ];

            const csvContent = [
                headers.join(','),
                ...selectedStudents.map(student => {
                    const history = student.attendanceHistory || [];
                    const totalClasses = history.length;
                    const attendedClasses = history.filter(h => h.status).length;
                    return [
                        student.rollNo,
                        student.name,
                        student.course,
                        totalClasses,
                        attendedClasses,
                        student.attendance,
                        student.lastUpdated
                    ].join(',');
                })
            ].join('\\n');

            const blob = new Blob([csvContent], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `attendance_report_${selectedCourse || 'all'}_${new Date().toISOString().split('T')[0]}.csv`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading report:', error);
            alert('Failed to download report. Please try again.');
        } finally {
            setDownloadingReport(false);
        }
    };

    // Reset isPresent for all students when date or modal changes
    useEffect(() => {
        if (showAttendanceModal) {
            setStudents(prevStudents =>
                prevStudents.map(student => {
                    // Check if attendance for selectedDate exists
                    const record = student.attendanceHistory?.find(h => h.date === selectedDate);
                    return {
                        ...student,
                        isPresent: record ? record.status : false
                    };
                })
            );
        }
    }, [selectedDate, showAttendanceModal]);

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-4">
                    <h1 className="text-xl font-bold text-gray-800">Students</h1>
                    <select
                        value={selectedCourse}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                        className="px-3 py-1.5 text-sm rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    >
                        <option value="">All Courses</option>
                        {courses.map(course => (
                            <option key={course.id} value={course.code}>
                                {course.code} - {course.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex space-x-2">
                    <button
                        onClick={() => setShowAttendanceModal(true)}
                        className="flex items-center px-3 py-1.5 text-sm bg-[#C71585] text-white rounded-md hover:bg-[#8D38A8] disabled:opacity-50"
                        disabled={!selectedCourse}
                    >
                        <FaCalendarCheck className="mr-2" size={14} />
                        Mark Attendance
                    </button>
                    <button
                        onClick={handleDownloadReport}
                        className="flex items-center px-3 py-1.5 text-sm bg-[#C71585] text-white rounded-md hover:bg-[#8D38A8] disabled:opacity-50"
                        disabled={downloadingReport}
                    >
                        <FaDownload className="mr-2" size={14} />
                        {downloadingReport ? 'Downloading...' : 'Download Report'}
                    </button>
                </div>
            </div>

            {selectedCourseInfo && (
                <div className="mb-4 bg-[#E6A2FF] p-3 rounded-md">
                    <h2 className="text-lg font-semibold text-[#C71585] mb-2">Course Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <span className="text-[#C71585] font-medium">Schedule:</span>
                            <span className="ml-2">{selectedCourseInfo.schedule}</span>
                        </div>
                        <div>
                            <span className="text-[#C71585] font-medium">Total Classes:</span>
                            <span className="ml-2">{selectedCourseInfo.totalClasses}</span>
                        </div>
                        <div>
                            <span className="text-[#C71585] font-medium">Students:</span>
                            <span className="ml-2">{filteredStudents.length}</span>
                        </div>
                    </div>
                </div>
            )}

            <div className="bg-white rounded-lg shadow-sm">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-2 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Roll No
                                </th>
                                <th className="px-2 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-2 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Course
                                </th>
                                <th className="px-2 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Total Classes
                                </th>
                                <th className="px-2 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Attendance
                                </th>
                                <th className="px-2 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Last Updated
                                </th>
                                <th className="px-2 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredStudents.map((student) => (
                                <tr key={student.id} className="hover:bg-gray-50">
                                    <td className="px-2 py-4 whitespace-nowrap text-sm">
                                        {student.rollNo}
                                    </td>
                                    <td className="px-2 py-4 whitespace-nowrap text-sm">
                                        {student.name}
                                    </td>
                                    <td className="px-2 py-4 whitespace-nowrap text-sm">
                                        {student.course}
                                    </td>
                                    <td className="px-2 py-4 whitespace-nowrap text-sm">
                                        {student.attendanceHistory?.length || 0}
                                    </td>
                                    <td className="px-2 py-4 whitespace-nowrap text-sm">
                                        <span className={`px-2 py-0.5 text-xs rounded-full ${student.attendance >= 85
                                            ? 'bg-[#E6A2FF] text-[#490548]'
                                            : student.attendance >= 75
                                                ? 'bg-[#F7C873] text-[#490548]'
                                                : 'bg-red-100 text-red-800'
                                            }`}>
                                            {student.attendance}%
                                        </span>
                                    </td>
                                    <td className="px-2 py-4 whitespace-nowrap text-sm">
                                        {student.lastUpdated ? new Date(student.lastUpdated).toLocaleDateString() : '-'}
                                    </td>
                                    <td className="px-2 py-4 whitespace-nowrap">
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={() => {
                                                    setSelectedStudent(student);
                                                    setShowStudentModal(true);
                                                }}
                                                className="text-[#C71585] hover:text-[#8D38A8]"
                                                title="View Details"
                                            >
                                                <FaEye size={14} />
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setSelectedStudent(student);
                                                    setShowAttendanceModal(true);
                                                }}
                                                className="text-[#F7C873] hover:text-[#C71585]"
                                                title="Mark Attendance"
                                            >
                                                <FaUserEdit size={14} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Student Details Modal */}
            {showStudentModal && selectedStudent && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-lg shadow-xl w-full max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-bold">Student Attendance Details</h2>
                            <button
                                onClick={() => setShowStudentModal(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                ×
                            </button>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Roll No</label>
                                <p className="mt-1 text-sm text-gray-900">{selectedStudent.rollNo}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <p className="mt-1 text-sm text-gray-900">{selectedStudent.name}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Course</label>
                                <p className="mt-1 text-sm text-gray-900">{selectedStudent.course}</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Attendance History</label>
                                <div className="mt-2 max-h-48 overflow-y-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">Date</th>
                                                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {selectedStudent.attendanceHistory?.map((record, index) => (
                                                <tr key={index}>
                                                    <td className="px-3 py-2 text-sm">
                                                        {new Date(record.date).toLocaleDateString()}
                                                    </td>
                                                    <td className="px-3 py-2">
                                                        <span className={`px-2 py-0.5 text-xs rounded-full ${record.status
                                                            ? 'bg-[#E6A2FF] text-[#490548]'
                                                            : 'bg-red-100 text-red-800'
                                                            }`}>
                                                            {record.status ? 'Present' : 'Absent'}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <button
                                onClick={() => setShowStudentModal(false)}
                                className="w-full px-3 py-1.5 text-sm bg-[#C71585] text-white rounded-md hover:bg-[#8D38A8]"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Attendance Modal */}
            {showAttendanceModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-lg shadow-xl w-full max-w-2xl">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-bold">
                                Mark Attendance {selectedStudent ? `- ${selectedStudent.name}` : selectedCourse ? `- ${selectedCourse}` : ''}
                            </h2>
                            <button
                                onClick={() => setShowAttendanceModal(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                ×
                            </button>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Date
                            </label>
                            <input
                                type="date"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className="w-full px-3 py-1.5 text-sm rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                        <div className="space-y-4">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-2 py-4 text-left text-xs font-medium text-gray-500">Roll No</th>
                                            <th className="px-2 py-4 text-left text-xs font-medium text-gray-500">Name</th>
                                            <th className="px-2 py-4 text-left text-xs font-medium text-gray-500">Status</th>
                                            <th className="px-2 py-4 text-left text-xs font-medium text-gray-500">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {(selectedStudent ? [selectedStudent] : filteredStudents).map((student) => {
                                            const status = student.isPresent === true ? 'Present' : 'Absent';
                                            return (
                                                <tr key={student.id}>
                                                    <td className="px-2 py-4 whitespace-nowrap text-sm">{student.rollNo}</td>
                                                    <td className="px-2 py-4 whitespace-nowrap text-sm">{student.name}</td>
                                                    <td className="px-2 py-4 whitespace-nowrap text-sm">
                                                        <span className={`px-2 py-0.5 text-xs rounded-full ${student.isPresent ? 'bg-[#E6A2FF] text-[#490548]' : 'bg-red-100 text-red-800'}`}>{status}</span>
                                                    </td>
                                                    <td className="px-2 py-4 whitespace-nowrap text-sm">
                                                        <button
                                                            className="text-[#C71585] hover:text-[#8D38A8] mr-2"
                                                            title="Mark Present"
                                                            onClick={() => handleStatusChange(student.id, true)}
                                                        >
                                                            <FaCheck />
                                                        </button>
                                                        <button
                                                            className="text-red-600 hover:text-red-800"
                                                            title="Mark Absent"
                                                            onClick={() => handleStatusChange(student.id, false)}
                                                        >
                                                            <FaTimes />
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex justify-end space-x-2 mt-4">
                                <button
                                    onClick={() => setShowAttendanceModal(false)}
                                    className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                                    disabled={attendanceSubmitting}
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleBulkAttendanceSubmit}
                                    className="px-4 py-2 bg-[#C71585] text-white rounded hover:bg-[#8D38A8]"
                                    disabled={attendanceSubmitting}
                                >
                                    {attendanceSubmitting ? 'Submitting...' : 'Submit Attendance'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Students;