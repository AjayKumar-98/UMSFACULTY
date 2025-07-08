import React from 'react';
import { FaChalkboardTeacher, FaCalendarAlt, FaUserGraduate } from 'react-icons/fa';
import { MdNotifications } from 'react-icons/md';

const quickAccessData = {
    todayClasses: [
        { time: '09:00 AM', course: 'Computer Science 101', room: 'Room 301' },
        { time: '11:00 AM', course: 'Data Structures', room: 'Room 205' },
        { time: '02:00 PM', course: 'Algorithm Design', room: 'Room 401' }
    ],
    upcomingDeadlines: [
        'Mid-term Exam (CS101) - Next Week',
        'Grade Submission - 3 days left',
        'Course Plan Update - Tomorrow'
    ],
    announcements: [
        'Faculty Meeting - Tomorrow at 3 PM',
        'New Research Grant Applications Open',
        'Semester End Examination Schedule Released'
    ],
    studentAlerts: [
        'John Doe - 3 consecutive absences in CS101',
        'Jane Smith - Below average performance in DS',
        'Mike Ross - Missing multiple assignments'
    ]
};

const FacultyDashboardContent: React.FC = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Today's Classes */}
        <div className="bg-white rounded-lg shadow-sm p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
            <div className="flex items-center mb-4">
                <FaChalkboardTeacher className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-lg font-semibold">Today's Classes</h2>
            </div>
            <div className="space-y-3">
                {quickAccessData.todayClasses.map((cls, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">{cls.time}</span>
                        <span className="font-medium">{cls.course}</span>
                        <span className="text-gray-500">{cls.room}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Upcoming Deadlines */}
        <div className="bg-white rounded-lg shadow-sm p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
            <div className="flex items-center mb-4">
                <FaCalendarAlt className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-lg font-semibold">Upcoming Deadlines</h2>
            </div>
            <ul className="space-y-2">
                {quickAccessData.upcomingDeadlines.map((deadline, index) => (
                    <li key={index} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                        {deadline}
                    </li>
                ))}
            </ul>
        </div>

        {/* University Announcements */}
        <div className="bg-white rounded-lg shadow-sm p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
            <div className="flex items-center mb-4">
                <MdNotifications className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-lg font-semibold">University Announcements</h2>
            </div>
            <ul className="space-y-2">
                {quickAccessData.announcements.map((announcement, index) => (
                    <li key={index} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        {announcement}
                    </li>
                ))}
            </ul>
        </div>

        {/* Student Alerts */}
        <div className="bg-white rounded-lg shadow-sm p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
            <div className="flex items-center mb-4">
                <FaUserGraduate className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-lg font-semibold">Student Alerts</h2>
            </div>
            <ul className="space-y-2">
                {quickAccessData.studentAlerts.map((alert, index) => (
                    <li key={index} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                        {alert}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export default FacultyDashboardContent;
