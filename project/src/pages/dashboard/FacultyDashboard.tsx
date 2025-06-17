import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Routes, Route, useLocation, Navigate } from 'react-router-dom';

// Icons imports
import { FaHome, FaUserGraduate, FaBook, FaClipboardList, FaCalendarAlt, FaChalkboardTeacher, FaBars } from 'react-icons/fa';
import { MdAssignment, MdGrade, MdSettings, MdNotifications } from 'react-icons/md';
import { BsFileEarmarkText, BsClock, BsPeople, BsCalendar2Week } from 'react-icons/bs';
import { IoLogOutSharp } from 'react-icons/io5';
import { AiOutlineExperiment } from 'react-icons/ai';

// Import components
import Courses from '../faculty/Courses';
import Students from '../faculty/Students';
import Attendance from '../faculty/Attendance';
import Grades from '../faculty/Grades';
import Exams from '../faculty/Exams';
import Assignments from '../faculty/Assignments';
import Timetable from '../faculty/Timetable';
import Research from '../faculty/Research';
import Meetings from '../faculty/Meetings';
import Reports from '../faculty/Reports';
import Settings from '../faculty/Settings';

const FacultyProfile: React.FC = () => {
    const [profile, setProfile] = React.useState(() => {
        const stored = localStorage.getItem('facultyProfile');
        return stored ? JSON.parse(stored) : {
            name: 'Dr. Anil Kumar',
            email: 'anil.kumar@university.edu.in',
            department: 'Computer Science',
            office: 'Room 301, Building A',
            contact: '+91 98765 43210',
            photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
        };
    });
    React.useEffect(() => {
        const onStorage = () => {
            const stored = localStorage.getItem('facultyProfile');
            if (stored) setProfile(JSON.parse(stored));
        };
        window.addEventListener('storage', onStorage);
        return () => window.removeEventListener('storage', onStorage);
    }, []);
    return (
        <>
            <div className="flex flex-col items-center mb-6">
                <img
                    src={profile.photo}
                    alt="Faculty Profile"
                    className="w-28 h-28 rounded-full object-cover border-4 border-blue-200 mb-3"
                />
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{profile.name}</h2>
                <p className="text-gray-500 dark:text-gray-300">{profile.department}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-800 dark:text-gray-100">{profile.email}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Contact Number</p>
                    <p className="font-medium text-gray-800 dark:text-gray-100">{profile.contact}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Office Location</p>
                    <p className="font-medium text-gray-800 dark:text-gray-100">{profile.office}</p>
                </div>
            </div>
        </>
    );
};

const FacultyDashboard: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const [sidebarMinimized, setSidebarMinimized] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [notifications, setNotifications] = useState([
        'Faculty Meeting - Tomorrow at 3 PM',
        'New Research Grant Applications Open',
        'Semester End Examination Schedule Released'
    ]);
    const notificationRef = useRef<HTMLDivElement>(null);
    const [userName, setUserName] = useState(() => {
        const stored = localStorage.getItem('facultyProfile');
        if (stored) return JSON.parse(stored).name;
        return localStorage.getItem('userName') || 'Dr. Anil Kumar';
    });
    const [userPhoto, setUserPhoto] = useState(() => {
        const stored = localStorage.getItem('facultyProfile');
        if (stored) return JSON.parse(stored).photo;
        return 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
    });

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    const sidebarItems = [
        { icon: <FaHome className="w-5 h-5" />, text: 'Dashboard', link: '/faculty-dashboard/dashboard' },
        { icon: <FaBook className="w-5 h-5" />, text: 'Courses', link: '/faculty-dashboard/courses' },
        { icon: <FaUserGraduate className="w-5 h-5" />, text: 'Students', link: '/faculty-dashboard/students' },
        { icon: <FaClipboardList className="w-5 h-5" />, text: 'Attendance', link: '/faculty-dashboard/attendance' },
        { icon: <MdGrade className="w-5 h-5" />, text: 'Grades', link: '/faculty-dashboard/grades' },
        { icon: <BsFileEarmarkText className="w-5 h-5" />, text: 'Exams', link: '/faculty-dashboard/exams' },
        { icon: <MdAssignment className="w-5 h-5" />, text: 'Assignments', link: '/faculty-dashboard/assignments' },
        { icon: <BsCalendar2Week className="w-5 h-5" />, text: 'Timetable', link: '/faculty-dashboard/timetable' },
        { icon: <AiOutlineExperiment className="w-5 h-5" />, text: 'Research', link: '/faculty-dashboard/research' },
        { icon: <BsPeople className="w-5 h-5" />, text: 'Meetings', link: '/faculty-dashboard/meetings' },
        { icon: <BsFileEarmarkText className="w-5 h-5" />, text: 'Reports', link: '/faculty-dashboard/reports' },
        { icon: <MdSettings className="w-5 h-5" />, text: 'Settings', link: '/faculty-dashboard/settings' }
    ];

    const quickAccessData = {
        todayClasses: [
            { time: '09:00 AM', course: 'Computer Science 101', room: 'Room 301' },
            { time: '11:00 AM', course: 'Data Structures', room: 'Room 205' },
            { time: '02:00 PM', course: 'Algorithm Design', room: 'Room 401' }
        ],
        pendingTasks: [
            'Grade CS101 Assignments',
            'Submit Attendance Report',
            'Review Project Proposals'
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

    const DashboardContent = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Today's Classes */}
            <div className="bg-white rounded-lg shadow-sm p-6">
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

            {/* Pending Tasks */}


            {/* Upcoming Deadlines */}
            <div className="bg-white rounded-lg shadow-sm p-6">
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

            {/* Announcements */}
            <div className="bg-white rounded-lg shadow-sm p-6">
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
            <div className="bg-white rounded-lg shadow-sm p-6">
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

    // Add effect to close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
                setShowNotifications(false);
            }
        }
        if (showNotifications) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showNotifications]);

    useEffect(() => {
        const onStorage = () => {
            const stored = localStorage.getItem('facultyProfile');
            if (stored) {
                setUserName(JSON.parse(stored).name);
                setUserPhoto(JSON.parse(stored).photo);
            }
        };
        window.addEventListener('storage', onStorage);
        // Also update on mount
        onStorage();
        return () => window.removeEventListener('storage', onStorage);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm fixed top-0 right-0 left-0 z-50 h-16" style={{ left: sidebarMinimized ? '4rem' : '16rem' }}>
                <div className="flex justify-between items-center px-4 h-full">
                    <div className="flex items-center">
                        <img
                            src="https://camelq.in/wp-content/uploads/2024/07/logo-1-768x694.png"
                            alt="University Logo"
                            className="h-12 mr-4"
                        />
                        <h1 className="text-xl font-semibold text-[#C41E3A]">UMS</h1>
                    </div>
                    <div className="flex items-center space-x-6">
                        {/* Quick Links */}
                        <div className="flex items-center relative" ref={notificationRef}>
                            <button className="text-gray-600 hover:text-blue-600 relative" onClick={() => setShowNotifications(v => !v)}>
                                <MdNotifications className="w-6 h-6" />
                                {notifications.length > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">{notifications.length}</span>
                                )}
                            </button>
                            {showNotifications && (
                                <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-md z-50 border border-gray-200 animate-fade-in">
                                    <div className="p-4 border-b font-semibold text-gray-700">Notifications</div>
                                    <ul className="max-h-60 overflow-y-auto">
                                        {notifications.length === 0 ? (
                                            <li className="p-4 text-gray-500 text-sm">No new notifications</li>
                                        ) : notifications.map((note, idx) => (
                                            <li key={idx} className="px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm border-b last:border-b-0">{note}</li>
                                        ))}
                                    </ul>
                                    {notifications.length > 0 && (
                                        <div className="flex justify-center p-3 border-t">
                                            <button
                                                className="text-xs text-blue-600 hover:underline focus:outline-none disabled:text-gray-400"
                                                onClick={() => { setNotifications([]); setShowNotifications(false); }}
                                                disabled={notifications.length === 0}
                                                tabIndex={0}
                                            >
                                                Mark all as read
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        {/* Profile Section */}
                        <div className="relative">
                            <button
                                className="flex items-center space-x-2"
                                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                            >
                                <img
                                    src={userPhoto}
                                    alt="Faculty"
                                    className="w-8 h-8 rounded-full object-cover border-2 border-gray-200"
                                />
                                <span className="text-gray-700">{userName}</span>
                            </button>
                            {showProfileDropdown && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                                    <button onClick={() => navigate('/faculty-dashboard/profile')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Profile
                                    </button>
                                    <button onClick={() => navigate('/faculty-dashboard/settings')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Settings
                                    </button>
                                    <button
                                        onClick={handleLogout}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            <div className="flex">
                {/* Sidebar - now full height, starts at top */}
                <div className={`fixed left-0 top-0 bottom-0 z-50 ${sidebarMinimized ? 'w-16' : 'w-64'} bg-[#2C3E6E] text-white md:translate-x-0 transition-all duration-200 h-screen flex flex-col`}>
                    {/* Sidebar Header: Faculty Portal name and toggle */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-blue-900 flex-shrink-0">
                        {!sidebarMinimized && <span className="font-bold text-lg">Faculty Portal</span>}
                        <button
                            className="flex items-center justify-center focus:outline-none hover:bg-blue-900 rounded p-1"
                            onClick={() => setSidebarMinimized((prev) => !prev)}
                            aria-label="Toggle sidebar"
                        >
                            <FaBars className="w-6 h-6" />
                        </button>
                    </div>
                    {/* Theme Toggle */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-blue-900 flex-shrink-0">
                        <span className="flex items-center">
                            {/* {darkMode ? <FaMoon className="mr-2" /> : <FaSun className="mr-2" />} */}
                            <span className="font-semibold"></span>
                        </span>
                        {/* <button
                            onClick={handleToggleTheme}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${darkMode ? 'bg-blue-700' : 'bg-gray-300'}`}
                            aria-label="Toggle theme"
                        >
                            <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${darkMode ? 'translate-x-6' : 'translate-x-1'}`}
                            />
                        </button> */}
                    </div>
                    {/* Sidebar nav is scrollable if content overflows, and does not overlap footer */}
                    <nav className="flex-1 overflow-y-auto pr-1 scrollbar-none min-h-0">
                        <div className="flex flex-col">
                            {sidebarItems.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => navigate(item.link)}
                                    className={`w-full flex items-center ${sidebarMinimized ? 'justify-center px-0' : 'px-4'} py-3 text-gray-300 hover:bg-blue-800 transition-colors duration-200 ${location.pathname === item.link ? 'bg-blue-800' : ''}`}
                                >
                                    <div className="flex items-center min-w-0">
                                        <span className="flex-shrink-0">{item.icon}</span>
                                        {!sidebarMinimized && <span className="ml-3 truncate">{item.text}</span>}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </nav>
                </div>

                {/* Main Content - margin left for sidebar, margin top for navbar */}
                <div className={`flex-1 ${sidebarMinimized ? 'ml-16' : 'ml-64'} mt-16 p-6`}>
                    <Routes>
                        <Route path="/" element={<Navigate to="dashboard" replace />} />
                        <Route path="dashboard" element={<DashboardContent />} />
                        <Route path="courses" element={<Courses />} />
                        <Route path="students" element={<Students />} />
                        <Route path="attendance" element={<Attendance />} />
                        <Route path="grades" element={<Grades />} />
                        <Route path="exams" element={<Exams />} />
                        <Route path="assignments" element={<Assignments />} />
                        <Route path="timetable" element={<Timetable />} />
                        <Route path="research" element={<Research />} />
                        <Route path="meetings" element={<Meetings />} />
                        <Route path="reports" element={<Reports />} />
                        <Route path="settings" element={<Settings />} />
                        <Route path="profile" element={
                            <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow p-8 mt-8">
                                <FacultyProfile />
                            </div>
                        } />
                        {/* Catch-all route */}
                        <Route path="*" element={<Navigate to="dashboard" replace />} />
                    </Routes>
                </div>
            </div>
            {/* Footer */}
            <footer className={`fixed bottom-0 right-0 z-50 bg-white border-t border-gray-200 py-4 text-center text-sm text-gray-500 transition-all duration-300 ${sidebarMinimized ? 'ml-16' : 'ml-64'} w-[calc(100%-4rem)] md:w-[calc(100%-16rem)]`}>
                <div>© {new Date().getFullYear()} UMS University. All rights reserved.</div>
                <div className="mt-1">
                    <span>Contact: </span>
                    <a href="mailto:info@ums.edu.in" className="text-blue-600 hover:underline">info@ums.edu.in</a>
                    <span className="mx-2">|</span>
                    <span>Phone: +91 98765 43210</span>
                </div>
                <div className="mt-1">
                    <a href="/about/Leadership" className="text-blue-600 hover:underline mr-2">Leadership</a>
                    <a href="/about/Faculty" className="text-blue-600 hover:underline mr-2">Faculty</a>
                    <a href="/about/ContactInfo" className="text-blue-600 hover:underline">Contact Us</a>
                </div>
            </footer>
        </div>
    );
};

export default FacultyDashboard;