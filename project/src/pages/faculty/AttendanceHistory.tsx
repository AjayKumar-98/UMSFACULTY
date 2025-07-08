import React, { useState } from 'react';
import MyAttendance from './MyAttendance';
import StudentAttendance from './StudentAttendance';

const FacultyHistory: React.FC = () => (
    <div className="bg-white rounded shadow p-6">
        <h3 className="text-xl font-semibold mb-4">Faculty Attendance History</h3>
        {/* You can add a table or list of faculty attendance history here */}
        <div className="text-gray-600">Faculty attendance history details go here.</div>
    </div>
);

const StudentHistory: React.FC = () => (
    <div className="bg-white rounded shadow p-6">
        <h3 className="text-xl font-semibold mb-4">Student Attendance History</h3>
        {/* You can add a table or list of student attendance history here */}
        <div className="text-gray-600">Student attendance history details go here.</div>
    </div>
);

const AttendanceHistory: React.FC = () => {
    const [selectedType, setSelectedType] = useState<'faculty' | 'student'>('faculty');

    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-6">Attendance History</h2>
            <div className="mb-6">
                <label className="font-semibold mr-4">Select Type:</label>
                <select
                    className="border rounded px-4 py-2"
                    value={selectedType}
                    onChange={e => setSelectedType(e.target.value as 'faculty' | 'student')}
                >
                    <option value="faculty">Faculty</option>
                    <option value="student">Student</option>
                </select>
            </div>
            {selectedType === 'faculty' ? <FacultyHistory /> : <StudentHistory />}
        </div>
    );
};

export default AttendanceHistory;
