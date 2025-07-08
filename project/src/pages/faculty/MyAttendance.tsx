import React from 'react';

const MyAttendance: React.FC = () => {
    // Placeholder summary and details for faculty attendance
    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-6">My Attendance</h2>
            <div className="bg-white rounded shadow p-6 mb-6">
                <div className="flex flex-col md:flex-row gap-8">
                    <div>
                        <div className="text-gray-500">Total Working Days</div>
                        <div className="text-2xl font-bold">180</div>
                    </div>
                    <div>
                        <div className="text-gray-500">Days Present</div>
                        <div className="text-2xl font-bold text-[#C71585]">172</div>
                    </div>
                    <div>
                        <div className="text-gray-500">Days Absent</div>
                        <div className="text-2xl font-bold text-red-600">8</div>
                    </div>
                    <div>
                        <div className="text-gray-500">Attendance %</div>
                        <div className="text-2xl font-bold text-[#F7C873]">95.6%</div>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded shadow p-6">
                <h3 className="text-xl font-semibold mb-4">Attendance Details</h3>
                <table className="min-w-full text-left">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-6 py-3">Date</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3">Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-6 py-3">2025-06-18</td>
                            <td className="px-6 py-3 text-[#C71585] font-semibold">Present</td>
                            <td className="px-6 py-3">-</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-3">2025-06-17</td>
                            <td className="px-6 py-3 text-[#C71585] font-semibold">Present</td>
                            <td className="px-6 py-3">-</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-3">2025-06-16</td>
                            <td className="px-6 py-3 text-red-600 font-semibold">Absent</td>
                            <td className="px-6 py-3">Medical Leave</td>
                        </tr>
                        {/* More rows as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAttendance;
