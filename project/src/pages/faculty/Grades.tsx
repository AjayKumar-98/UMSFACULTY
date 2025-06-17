import React, { useState } from 'react';
import { FaEdit, FaDownload, FaSave, FaTimes } from 'react-icons/fa';

interface Grade {
    id: string;
    studentName: string;
    rollNo: string;
    course: string;
    assignment: number;
    midterm: number;
    final: number;
    total: number;
    grade: string;
    enrolledCourses: string[];
}

interface EditingGrade {
    id: string;
    assignment: number;
    midterm: number;
    final: number;
}

const Grades: React.FC = () => {
    const [selectedCourse, setSelectedCourse] = useState<string>('CS101');
    const [editingGrade, setEditingGrade] = useState<EditingGrade | null>(null);
    const [grades, setGrades] = useState<Grade[]>([
        {
            id: '1',
            studentName: 'John Doe',
            rollNo: '2024CS001',
            course: 'CS101',
            assignment: 85,
            midterm: 78,
            final: 88,
            total: 84,
            grade: 'A',
            enrolledCourses: ['CS101', 'CS201']
        },
        {
            id: '2',
            studentName: 'Jane Smith',
            rollNo: '2024CS002',
            course: 'CS101',
            assignment: 92,
            midterm: 85,
            final: 90,
            total: 89,
            grade: 'A+',
            enrolledCourses: ['CS101', 'CS301']
        },
        {
            id: '3',
            studentName: 'Mike Johnson',
            rollNo: '2024CS003',
            course: 'CS101',
            assignment: 75,
            midterm: 68,
            final: 72,
            total: 72,
            grade: 'B',
            enrolledCourses: ['CS201', 'CS301']
        }
    ]);

    const courses = [
        { id: '1', code: 'CS101', name: 'Introduction to Computer Science' },
        { id: '2', code: 'CS201', name: 'Data Structures' },
        { id: '3', code: 'CS301', name: 'Database Management' }
    ];

    // Filter grades based on selected course
    const enrolledGrades = grades.filter(grade =>
        grade.enrolledCourses.includes(selectedCourse)
    );

    const calculateGrade = (assignment: number, midterm: number, final: number): string => {
        const total = (assignment * 0.3) + (midterm * 0.3) + (final * 0.4);
        if (total >= 90) return 'A+';
        if (total >= 80) return 'A';
        if (total >= 70) return 'B';
        if (total >= 60) return 'C';
        if (total >= 50) return 'D';
        return 'F';
    };

    const handleEdit = (grade: Grade) => {
        setEditingGrade({
            id: grade.id,
            assignment: grade.assignment,
            midterm: grade.midterm,
            final: grade.final
        });
    };

    const handleSave = () => {
        if (editingGrade) {
            setGrades(grades.map(grade => {
                if (grade.id === editingGrade.id) {
                    const total = Math.round(
                        (editingGrade.assignment * 0.3) +
                        (editingGrade.midterm * 0.3) +
                        (editingGrade.final * 0.4)
                    );
                    return {
                        ...grade,
                        assignment: editingGrade.assignment,
                        midterm: editingGrade.midterm,
                        final: editingGrade.final,
                        total,
                        grade: calculateGrade(
                            editingGrade.assignment,
                            editingGrade.midterm,
                            editingGrade.final
                        )
                    };
                }
                return grade;
            }));
            setEditingGrade(null);
        }
    };

    const handleCancel = () => {
        setEditingGrade(null);
    };

    const handleExport = () => {
        const headers = ['Student Name', 'Roll No', 'Assignment', 'Midterm', 'Final', 'Total', 'Grade'];
        const csvContent = [
            headers.join(','),
            ...enrolledGrades.map(grade => [
                grade.studentName,
                grade.rollNo,
                grade.assignment,
                grade.midterm,
                grade.final,
                grade.total,
                grade.grade
            ].join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `grades_${selectedCourse}_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const getGradeColor = (grade: string) => {
        switch (grade) {
            case 'A+':
                return 'bg-green-100 text-green-800';
            case 'A':
                return 'bg-green-100 text-green-800';
            case 'B':
                return 'bg-blue-100 text-blue-800';
            case 'C':
                return 'bg-yellow-100 text-yellow-800';
            default:
                return 'bg-red-100 text-red-800';
        }
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Grade Management</h1>
                <div className="flex space-x-4">
                    <select
                        value={selectedCourse}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                        className="border rounded-lg px-4 py-2"
                    >
                        {courses.map(course => (
                            <option key={course.id} value={course.code}>
                                {course.code} - {course.name}
                            </option>
                        ))}
                    </select>
                    <button
                        onClick={handleExport}
                        className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                        <FaDownload className="mr-2" />
                        Export Grades
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm">
                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Student
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Roll No
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Assignments (30%)
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Midterm (30%)
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Final (40%)
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Total
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Grade
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {enrolledGrades.map((grade) => (
                                <tr key={grade.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="font-medium">{grade.studentName}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {grade.rollNo}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {editingGrade?.id === grade.id ? (
                                            <input
                                                type="number"
                                                min="0"
                                                max="100"
                                                value={editingGrade.assignment}
                                                onChange={(e) => setEditingGrade({
                                                    ...editingGrade,
                                                    assignment: parseInt(e.target.value) || 0
                                                })}
                                                className="w-20 border rounded px-2 py-1"
                                            />
                                        ) : (
                                            `${grade.assignment}%`
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {editingGrade?.id === grade.id ? (
                                            <input
                                                type="number"
                                                min="0"
                                                max="100"
                                                value={editingGrade.midterm}
                                                onChange={(e) => setEditingGrade({
                                                    ...editingGrade,
                                                    midterm: parseInt(e.target.value) || 0
                                                })}
                                                className="w-20 border rounded px-2 py-1"
                                            />
                                        ) : (
                                            `${grade.midterm}%`
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {editingGrade?.id === grade.id ? (
                                            <input
                                                type="number"
                                                min="0"
                                                max="100"
                                                value={editingGrade.final}
                                                onChange={(e) => setEditingGrade({
                                                    ...editingGrade,
                                                    final: parseInt(e.target.value) || 0
                                                })}
                                                className="w-20 border rounded px-2 py-1"
                                            />
                                        ) : (
                                            `${grade.final}%`
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium">
                                        {grade.total}%
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 py-1 text-xs rounded-full ${getGradeColor(grade.grade)}`}>
                                            {grade.grade}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {editingGrade?.id === grade.id ? (
                                            <div className="flex space-x-2">
                                                <button
                                                    onClick={handleSave}
                                                    className="text-green-600 hover:text-green-900"
                                                >
                                                    <FaSave />
                                                </button>
                                                <button
                                                    onClick={handleCancel}
                                                    className="text-red-600 hover:text-red-900"
                                                >
                                                    <FaTimes />
                                                </button>
                                            </div>
                                        ) : (
                                            <button
                                                onClick={() => handleEdit(grade)}
                                                className="text-blue-600 hover:text-blue-900"
                                            >
                                                <FaEdit />
                                            </button>
                                        )}
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

export default Grades; 