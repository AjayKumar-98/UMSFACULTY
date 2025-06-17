import React, { useState } from 'react';
import { FaBook, FaFileUpload } from 'react-icons/fa';

interface Course {
    id: string;
    code: string;
    name: string;
    semester: string;
    year: string;
    students: number;
    syllabus: string;
}

const Courses: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([
        {
            id: '1',
            code: 'CS101',
            name: 'Introduction to Computer Science',
            semester: '1',
            year: '1',
            students: 45,
            syllabus: 'Not Uploaded'
        },
        {
            id: '2',
            code: 'CS201',
            name: 'Data Structures',
            semester: '3',
            year: '2',
            students: 38,
            syllabus: 'Uploaded'
        },
        {
            id: '3',
            code: 'CS301',
            name: 'Database Management',
            semester: '5',
            year: '3',
            students: 42,
            syllabus: 'Uploaded'
        }
    ]);

    const handleSyllabusUpload = (courseId: string) => {
        const updatedCourses = courses.map(course =>
            course.id === courseId
                ? { ...course, syllabus: 'Uploaded' }
                : course
        );
        setCourses(updatedCourses);
    };

    return (
        <div className="p-3">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold text-gray-800">My Courses</h1>
            </div>

            <div className="bg-white rounded-lg shadow-sm">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Course Code
                                </th>
                                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Course Name
                                </th>
                                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Year
                                </th>
                                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Semester
                                </th>
                                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Students
                                </th>
                                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Syllabus
                                </th>
                                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {courses.map((course) => (
                                <tr key={course.id} className="hover:bg-gray-50">
                                    <td className="px-3 py-2 whitespace-nowrap text-sm">
                                        <div className="flex items-center">
                                            <FaBook className="text-blue-500 mr-1.5 h-4 w-4" />
                                            <span>{course.code}</span>
                                        </div>
                                    </td>
                                    <td className="px-3 py-2 whitespace-nowrap text-sm">{course.name}</td>
                                    <td className="px-3 py-2 whitespace-nowrap text-sm">{course.year}st Year</td>
                                    <td className="px-3 py-2 whitespace-nowrap text-sm">Semester {course.semester}</td>
                                    <td className="px-3 py-2 whitespace-nowrap text-sm">{course.students}</td>
                                    <td className="px-3 py-2 whitespace-nowrap">
                                        <span className={`px-2 py-0.5 text-xs rounded-full ${course.syllabus === 'Uploaded'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {course.syllabus}
                                        </span>
                                    </td>
                                    <td className="px-3 py-2 whitespace-nowrap">
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={() => handleSyllabusUpload(course.id)}
                                                className="text-green-600 hover:text-green-900"
                                                title="Upload Syllabus"
                                            >
                                                <FaFileUpload size={14} />
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

export default Courses;