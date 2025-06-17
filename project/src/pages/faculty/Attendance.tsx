import React, { useState } from 'react';
import { FaUserCheck, FaUserTimes, FaDownload } from 'react-icons/fa';

interface Student {
    id: string;
    rollNo: string;
    name: string;
    totalClasses: number;
    attended: number;
    percentage: number;
    status: 'present' | 'absent' | 'unmarked';
    enrolledCourses: string[];
}

interface Course {
    id: string;
    code: string;
    name: string;
}

const Attendance: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<string>(
        new Date().toISOString().split('T')[0]
    );
    const [selectedCourse, setSelectedCourse] = useState<string>('CS101');
    const [isMarkingAttendance, setIsMarkingAttendance] = useState<boolean>(false);

    const courses: Course[] = [
        { id: '1', code: 'CS101', name: 'Introduction to Computer Science' },
        { id: '2', code: 'CS201', name: 'Data Structures' },
        { id: '3', code: 'CS301', name: 'Database Management' }
    ];

    const [students, setStudents] = useState<Student[]>([
        {
            id: '1',
            rollNo: '2024CS001',
            name: 'Jagadeesh',
            totalClasses: 45,
            attended: 38,
            percentage: 84.4,
            status: 'unmarked',
            enrolledCourses: ['CS101', 'CS201']
        },
        {
            id: '2',
            rollNo: '2024CS002',
            name: 'vinay',
            totalClasses: 45,
            attended: 35,
            percentage: 77.7,
            status: 'unmarked',
            enrolledCourses: ['CS101', 'CS301']
        },
        {
            id: '3',
            rollNo: '2024CS003',
            name: 'pranay',
            totalClasses: 45,
            attended: 30,
            percentage: 66.6,
            status: 'unmarked',
            enrolledCourses: ['CS201', 'CS301']
        },
        {
            id: '4',
            rollNo: '2024CS004',
            name: 'charan',
            totalClasses: 45,
            attended: 30,
            percentage: 66.6,
            status: 'unmarked',
            enrolledCourses: ['CS101', 'CS201', 'CS301']
        }
    ]);

    const enrolledStudents = students.filter(student =>
        student.enrolledCourses.includes(selectedCourse)
    );

    const getAttendanceColor = (percentage: number) => {
        if (percentage >= 75) return 'text-green-600';
        if (percentage >= 60) return 'text-yellow-600';
        return 'text-red-600';
    };

    const getStatusBadgeColor = (status: string) => {
        switch (status) {
            case 'present':
                return 'bg-green-100 text-green-800';
            case 'absent':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const handleMarkAttendance = () => {
        setIsMarkingAttendance(true);
        // Here you would typically make an API call to save attendance
        setTimeout(() => {
            setIsMarkingAttendance(false);
            alert('Attendance marked successfully!');
        }, 1000);
    };

    const handleMarkStudentAttendance = (studentId: string, status: 'present' | 'absent') => {
        setStudents(students.map(student => {
            if (student.id === studentId) {
                return {
                    ...student,
                    status,
                    attended: status === 'present' ? student.attended + 1 : student.attended,
                    totalClasses: student.totalClasses + 1,
                    percentage: ((status === 'present' ? student.attended + 1 : student.attended) / (student.totalClasses + 1)) * 100
                };
            }
            return student;
        }));
    };

    const handleDownloadReport = () => {
        // Create CSV content
        const headers = ['Roll No', 'Name', 'Total Classes', 'Attended', 'Percentage', 'Status'];
        const csvContent = [
            headers.join(','),
            ...enrolledStudents.map(student => [
                student.rollNo,
                student.name,
                student.totalClasses,
                student.attended,
                student.percentage.toFixed(1),
                student.status
            ].join(','))
        ].join('\n');

        // Create and download file
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `attendance_report_${selectedDate}_${selectedCourse}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Attendance Management</h1>
                <button
                    onClick={handleDownloadReport}
                    className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                    <FaDownload className="mr-2" />
                    Download Report
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Date
                    </label>
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full border rounded-lg px-4 py-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Course
                    </label>
                    <select
                        value={selectedCourse}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                        className="w-full border rounded-lg px-4 py-2"
                    >
                        {courses.map(course => (
                            <option key={course.id} value={course.code}>
                                {course.code} - {course.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex items-end">
                    <button
                        onClick={handleMarkAttendance}
                        disabled={isMarkingAttendance}
                        className={`bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 ${isMarkingAttendance ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        {isMarkingAttendance ? 'Marking...' : 'Mark Attendance'}
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm">
                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Student
                                </th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Roll No
                                </th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Total Classes
                                </th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Attended
                                </th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Percentage
                                </th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Today's Status
                                </th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {enrolledStudents.map((student) => (
                                <tr key={student.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="font-medium">{student.name}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {student.rollNo}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {student.totalClasses}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {student.attended}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={getAttendanceColor(student.percentage)}>
                                            {student.percentage.toFixed(1)}%
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadgeColor(student.status)}`}>
                                            {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex space-x-3">
                                            <button
                                                onClick={() => handleMarkStudentAttendance(student.id, 'present')}
                                                className="text-green-600 hover:text-green-900"
                                            >
                                                <FaUserCheck />
                                            </button>
                                            <button
                                                onClick={() => handleMarkStudentAttendance(student.id, 'absent')}
                                                className="text-red-600 hover:text-red-900"
                                            >
                                                <FaUserTimes />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Attendance; 