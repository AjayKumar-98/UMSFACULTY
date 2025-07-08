import { useState } from 'react';
import { FaUserCheck, FaUserTimes } from 'react-icons/fa';

interface Student {
    name: string;
    roll: string;
    total: number;
    attended: number;
    courses: string[]; // course codes
}

const students: Student[] = [
    { name: 'Jagadeesh', roll: '2024CS001', total: 45, attended: 38, courses: ['CS101', 'CS201'] },
    { name: 'vinay', roll: '2024CS002', total: 45, attended: 35, courses: ['CS101', 'CS301'] },
    { name: 'charan', roll: '2024CS004', total: 45, attended: 30, courses: ['CS201', 'CS301', 'CS401'] },
];

const courses = [
    { code: 'CS101', name: 'Introduction to Computer Science' },
    { code: 'CS201', name: 'Data Structures' },
    { code: 'CS301', name: 'Database Management' },
    { code: 'CS401', name: 'Operating Systems' },
    { code: 'CS501', name: 'Computer Networks' },
    { code: 'CS601', name: 'Artificial Intelligence' },
];

const getPercentage = (attended: number, total: number): string => ((attended / total) * 100).toFixed(1);

const getPercentageColor = (percentage: number | string): string => {
    const pct = typeof percentage === 'string' ? parseFloat(percentage) : percentage;
    if (pct >= 80) return 'text-[#C71585]';
    if (pct >= 70) return 'text-[#F7C873]';
    return 'text-red-600';
};

type StatusType = 'Unmarked' | 'Present' | 'Absent';

const StudentAttendance = () => {
    const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().slice(0, 10));
    const [selectedCourse, setSelectedCourse] = useState<string>(courses[0].code);
    const [status, setStatus] = useState<Record<string, StatusType>>({});

    const handleMark = (roll: string, value: StatusType) => {
        setStatus((prev) => ({ ...prev, [roll]: value }));
    };

    const handleMarkAttendance = () => {
        // Implement mark attendance logic here
        alert('Attendance marked!');
    };

    const handleDownload = () => {
        // Implement download logic here
        alert('Report downloaded!');
    };

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Attendance Management</h2>
                <button
                    className="bg-[#C71585] hover:bg-[#8D38A8] text-white px-6 py-2 rounded font-semibold flex items-center"
                    onClick={handleDownload}
                >
                    <span className="mr-2">&#8681;</span> Download Report
                </button>
            </div>
            <div className="flex flex-wrap gap-6 mb-6">
                <div>
                    <label className="block font-semibold mb-1">Select Date</label>
                    <input
                        type="date"
                        className="border rounded px-4 py-2 w-56"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        max={new Date().toISOString().slice(0, 10)}
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-1">Select Course</label>
                    <select
                        className="border rounded px-4 py-2 w-96"
                        value={selectedCourse}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                    >
                        {courses.map((c) => (
                            <option key={c.code} value={c.code}>
                                {c.code} - {c.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex items-end">
                    <button
                        className="bg-[#C71585] hover:bg-[#8D38A8] text-white px-8 py-2 rounded font-semibold"
                        onClick={handleMarkAttendance}
                    >
                        Mark Attendance
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto bg-white rounded shadow">
                <table className="min-w-full text-left">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-6 py-3">STUDENT</th>
                            <th className="px-6 py-3">ROLL NO</th>
                            <th className="px-6 py-3">TOTAL CLASSES</th>
                            <th className="px-6 py-3">ATTENDED</th>
                            <th className="px-6 py-3">PERCENTAGE</th>
                            <th className="px-6 py-3">TODAY'S STATUS</th>
                            <th className="px-6 py-3">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students
                            .filter((s) => s.courses.includes(selectedCourse))
                            .map((s) => {
                                const percentage = getPercentage(s.attended, s.total);
                                const color = getPercentageColor(percentage);
                                const todayStatus = status[s.roll] || 'Unmarked';
                                return (
                                    <tr key={s.roll} className="border-b">
                                        <td className="px-6 py-3 font-semibold">{s.name}</td>
                                        <td className="px-6 py-3">{s.roll}</td>
                                        <td className="px-6 py-3">{s.total}</td>
                                        <td className="px-6 py-3">{s.attended}</td>
                                        <td className={`px-6 py-3 font-semibold ${color}`}>{percentage}%</td>
                                        <td className="px-6 py-3">
                                            <span
                                                className={
                                                    `px-3 py-1 rounded text-sm ` +
                                                    (todayStatus === 'Present'
                                                        ? 'bg-[#E6A2FF] text-[#490548]'
                                                        : todayStatus === 'Absent'
                                                            ? 'bg-red-100 text-red-700'
                                                            : 'bg-gray-100 text-gray-600')
                                                }
                                            >
                                                {todayStatus}
                                            </span>
                                        </td>
                                        <td className="px-6 py-3 flex gap-3">
                                            <button
                                                className="text-[#C71585] hover:text-[#8D38A8] text-xl"
                                                title="Mark Present"
                                                onClick={() => handleMark(s.roll, 'Present')}
                                            >
                                                <FaUserCheck />
                                            </button>
                                            <button
                                                className="text-red-600 hover:text-red-800 text-xl"
                                                title="Mark Absent"
                                                onClick={() => handleMark(s.roll, 'Absent')}
                                            >
                                                <FaUserTimes />
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentAttendance;
