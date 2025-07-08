import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Routes, Route, useLocation, Navigate } from 'react-router-dom';

// Icons imports
import { FaHome, FaUserGraduate, FaBook, FaClipboardList, FaCalendarAlt, FaChalkboardTeacher, FaBars, FaUmbrellaBeach } from 'react-icons/fa';
import { MdAssignment, MdGrade, MdSettings, MdNotifications } from 'react-icons/md';
import { BsFileEarmarkText, BsPeople, BsCalendar2Week } from 'react-icons/bs';
import { AiOutlineExperiment } from 'react-icons/ai';

// Import components
import Courses from '../faculty/Courses';
import Students from '../faculty/Students';
import Grades from '../faculty/Grades';
import Exams from '../faculty/Exams';
import Assignments from '../faculty/Assignments';
import Timetable from '../faculty/Timetable';
import Research from '../faculty/Research';
import Meetings from '../faculty/Meetings';
import Reports from '../faculty/Reports';
import Settings from '../faculty/Settings';
import Leave from '../faculty/Leave';
import MyAttendance from '../faculty/MyAttendance';
import StudentAttendance from '../faculty/StudentAttendance';
import FacultyHome from '../faculty/Home';

// Attendance summary dashboard for both faculty and students
const AttendanceSummary: React.FC = () => (
    <div className="p-8">
        <h2 className="text-3xl font-bold mb-6">Attendance Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded shadow p-6">
                <h3 className="text-xl font-semibold mb-4">Faculty Attendance Summary</h3>
                <div className="flex flex-col gap-2">
                    <div className="text-gray-500">Total Working Days: <span className="font-bold">180</span></div>
                    <div className="text-gray-500">Days Present: <span className="font-bold text-[#C71585]">172</span></div>
                    <div className="text-gray-500">Days Absent: <span className="font-bold text-red-600">8</span></div>
                    <div className="text-gray-500">Attendance %: <span className="font-bold text-[#8D38A8]">95.6%</span></div>
                </div>
            </div>
            <div className="bg-white rounded shadow p-6">
                <h3 className="text-xl font-semibold mb-4">Student Attendance Summary</h3>
                <div className="flex flex-col gap-2">
                    <div className="text-gray-500">Average Attendance: <span className="font-bold text-[#8D38A8]">82.3%</span></div>
                    <div className="text-gray-500">Students &lt; 75%: <span className="font-bold text-red-600">4</span></div>
                    <div className="text-gray-500">Best Performing Course: <span className="font-bold">CS101</span></div>
                </div>
            </div>
        </div>
    </div>
);

const FacultyProfile: React.FC = () => {
    const [profile, setProfile] = React.useState(() => {
        const stored = localStorage.getItem('facultyProfile');
        return stored ? JSON.parse(stored) : {
            name: 'Dr. Anil Kumar',
            email: 'anil.kumar@university.edu.in',
            contact: '+91 98765 43210',
            gender: 'Male',
            dob: '1970-01-15',
            group: 'A',
            fatherName: 'Shri Ram Kumar',
            nationality: 'Indian',
            religion: 'Hindu',
            caste: 'General',
            motherTongue: 'Hindi',
            otherMobile: '+91 98765 43211',
            aadhar: '1234-5678-9012',
            pan: 'ABCDE1234F',
            photo: 'https://randomuser.me/api/portraits/men/32.jpg'
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
        <div className="flex flex-col items-center mb-6">
            <img
                src={profile.photo}
                alt="Faculty Profile"
                className="w-28 h-28 rounded-full object-cover border-4 border-blue-200 mb-3"
            />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">{profile.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-800 dark:text-gray-100">{profile.email}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Phone Number</p>
                    <p className="font-medium text-gray-800 dark:text-gray-100">{profile.contact}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Gender</p>
                    <p className="font-medium text-gray-800 dark:text-gray-100">{profile.gender}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Date of Birth</p>
                    <p className="font-medium text-gray-800 dark:text-gray-100">{profile.dob}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Group</p>
                    <p className="font-medium text-gray-800 dark:text-gray-100">{profile.group}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Father's Name</p>
                    <p className="font-medium text-gray-800 dark:text-gray-100">{profile.fatherName}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Nationality</p>
                    <p className="font-medium text-gray-800 dark:text-gray-100">{profile.nationality}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Religion</p>
                    <p className="font-medium text-gray-800 dark:text-gray-100">{profile.religion}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Caste</p>
                    <p className="font-medium text-gray-800 dark:text-gray-100">{profile.caste}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Mother Tongue</p>
                    <p className="font-medium text-gray-800 dark:text-gray-100">{profile.motherTongue}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Other Mobile No</p>
                    <p className="font-medium text-gray-800 dark:text-gray-100">{profile.otherMobile}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Aadhar No</p>
                    <p className="font-medium text-gray-800 dark:text-gray-100">{profile.aadhar}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">PAN Card No</p>
                    <p className="font-medium text-gray-800 dark:text-gray-100">{profile.pan}</p>
                </div>
            </div>
        </div>
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

    // Sidebar items with Attendance dropdown
    const [attendanceDropdownOpen, setAttendanceDropdownOpen] = useState(false);
    const sidebarItems = [
        { icon: <FaHome className="w-5 h-5" />, text: 'Home', link: '/faculty-dashboard/home' },
        { icon: <FaChalkboardTeacher className="w-5 h-5" />, text: 'Dashboard', link: '/faculty-dashboard/dashboard' },
        { icon: <FaBook className="w-5 h-5" />, text: 'Courses', link: '/faculty-dashboard/courses' },
        { icon: <FaUserGraduate className="w-5 h-5" />, text: 'Students', link: '/faculty-dashboard/students' },
        {
            icon: <FaClipboardList className="w-5 h-5" />,
            text: 'Attendance',
            link: '/faculty-dashboard/attendance',
            dropdown: true,
            subfields: [
                { text: 'My Attendance', link: '/faculty-dashboard/attendance/my' },
                { text: 'Student Attendance', link: '/faculty-dashboard/attendance/student' }
            ]
        },
        { icon: <MdGrade className="w-5 h-5" />, text: 'Grades', link: '/faculty-dashboard/grades' },
        { icon: <BsFileEarmarkText className="w-5 h-5" />, text: 'Exams', link: '/faculty-dashboard/exams' },
        { icon: <MdAssignment className="w-5 h-5" />, text: 'Assignments', link: '/faculty-dashboard/assignments' },
        { icon: <BsCalendar2Week className="w-5 h-5" />, text: 'Timetable', link: '/faculty-dashboard/timetable' },
        { icon: <AiOutlineExperiment className="w-5 h-5" />, text: 'Research', link: '/faculty-dashboard/research' },
        { icon: <BsPeople className="w-5 h-5" />, text: 'Meetings', link: '/faculty-dashboard/meetings' },
        { icon: <BsFileEarmarkText className="w-5 h-5" />, text: 'Reports', link: '/faculty-dashboard/reports' },
        { icon: <FaUmbrellaBeach className="w-5 h-5" />, text: 'Leave', link: '/faculty-dashboard/leave' },
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

    useEffect(() => {
        function handleClickOutsideProfile(event: MouseEvent) {
            const profileButton = document.getElementById('profile-dropdown-btn');
            const dropdown = document.getElementById('profile-dropdown-menu');
            if (
                showProfileDropdown &&
                profileButton &&
                dropdown &&
                !profileButton.contains(event.target as Node) &&
                !dropdown.contains(event.target as Node)
            ) {
                setShowProfileDropdown(false);
            }
        }
        if (showProfileDropdown) {
            document.addEventListener('mousedown', handleClickOutsideProfile);
        } else {
            document.removeEventListener('mousedown', handleClickOutsideProfile);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideProfile);
        };
    }, [showProfileDropdown]);

    return (
        <div className="min-h-screen bg-[#ede9fe]">
            {/* Header */}
            <header className="bg-red-700 shadow-sm fixed top-0 right-0 left-0 z-50 h-12 text-[#F5F5F5]" style={{ left: sidebarMinimized ? '4rem' : '16rem' }}>
                <div className="flex justify-between items-center px-4 h-full">
                    <div className="flex items-center">
                        <img
                            src="https://camelq.in/wp-content/uploads/2024/12/Untitled-design-9.png"
                            alt="University Logo"
                            className="h-10 mr-4 rounded-full"
                        />
                        <h1 className="text-lg font-semibold text-[#C41E3A]" style={{ color: '#F5F5F5' }}>UNIVERSITY</h1>
                    </div>
                    <div className="flex items-center space-x-6 text-[#F5F5F5]">
                        {/* Quick Links */}
                        <div className="flex items-center relative" ref={notificationRef} style={{ zIndex: 10 }}>
                            <button className="text-[#F5F5F5] hover:text-[#F7C873] relative" style={{ zIndex: 11 }} onClick={() => setShowNotifications(v => !v)}>
                                <MdNotifications className="w-6 h-6" />
                                {notifications.length > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5" style={{ zIndex: 12 }}>{notifications.length}</span>
                                )}
                            </button>
                            {showNotifications && (
                                <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-md z-50 border border-gray-200 animate-fade-in" style={{ top: '2.5rem' }}>
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
                                                className="text-xs text-[#C71585] hover:underline focus:outline-none disabled:text-gray-400"
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
                                id="profile-dropdown-btn"
                                className="flex items-center space-x-2"
                                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                            >
                                <img
                                    src={userPhoto}
                                    alt="Faculty"
                                    className="w-8 h-8 rounded-full object-cover border-2 border-gray-200"
                                />
                                <span className="text-[#F5F5F5]">{userName}</span>
                            </button>
                            {showProfileDropdown && (
                                <div id="profile-dropdown-menu" className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                                    <button onClick={() => { navigate('/faculty-dashboard/settings'); setTimeout(() => { const tabBtn = document.querySelector('button[aria-label="Profile Tab"]'); if (tabBtn) (tabBtn as HTMLElement).click(); }, 100); setShowProfileDropdown(false); }} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
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
                <div className={`fixed left-0 top-0 bottom-0 z-50 ${sidebarMinimized ? 'w-16' : 'w-64'} bg-[#490548] text-[#F5F5F5] md:translate-x-0 transition-all duration-200 h-screen flex flex-col`} style={{ marginTop: 0, top: 0 }}>
                    {/* Sidebar Header: Faculty Portal name and toggle */}
                    <div className="flex items-center justify-between px-4 py-4 flex-shrink-0">
                        {!sidebarMinimized && <span className="font-bold text-lg">Faculty Portal</span>}
                        <button
                            className="flex items-center justify-center focus:outline-none hover:bg-red-400 rounded p-1"
                            onClick={() => setSidebarMinimized((prev) => !prev)}
                            aria-label="Toggle sidebar"
                        >
                            <FaBars className="w-6 h-6" />
                        </button>
                    </div>
                    {/* Sidebar nav is scrollable if content overflows, and does not overlap footer */}
                    <nav className="flex-1 overflow-y-auto pr-1 scrollbar-none min-h-0">
                        <div className="flex flex-col">
                            {sidebarItems.map((item, index) => (
                                item.dropdown ? (
                                    <div key={index}>
                                        <button
                                            onClick={() => setAttendanceDropdownOpen(v => !v)}
                                            className={`w-full flex items-center ${sidebarMinimized ? 'justify-center px-0' : 'px-4'} py-3 text-[#F5F5F5] hover:bg-[#FADA5E] hover:text-[#490548] transition-colors duration-200 ${location.pathname.startsWith('/faculty-dashboard/attendance') ? 'bg-[#FADA5E] text-[#490548]' : ''}`}
                                        >
                                            <span className="flex-shrink-0">{item.icon}</span>
                                            {!sidebarMinimized && <span className="ml-3 truncate">{item.text}</span>}
                                            {!sidebarMinimized && <span className="ml-auto">{attendanceDropdownOpen ? '▲' : '▼'}</span>}
                                        </button>
                                        {attendanceDropdownOpen && !sidebarMinimized && (
                                            <div className="ml-8 flex flex-col bg-[#E6A2FF] rounded">
                                                {item.subfields.map((sub, subIdx) => (
                                                    <button
                                                        key={subIdx}
                                                        onClick={() => navigate(sub.link)}
                                                        className={`w-full text-left px-4 py-2 text-[#F5F5F5] hover:bg-[#FADA5E] hover:text-[#490548] ${location.pathname === sub.link ? 'bg-[#FADA5E] text-[#490548]' : ''}`}
                                                    >
                                                        {sub.text}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <button
                                        key={index}
                                        onClick={() => navigate(item.link)}
                                        className={`w-full flex items-center ${sidebarMinimized ? 'justify-center px-0' : 'px-4'} py-3 text-[#F5F5F5] hover:bg-[#FADA5E] hover:text-[#490548] transition-colors duration-200 ${location.pathname === item.link ? 'bg-[#FADA5E] text-[#490548]' : ''}`}
                                    >
                                        <div className="flex items-center min-w-0">
                                            <span className="flex-shrink-0">{item.icon}</span>
                                            {!sidebarMinimized && <span className="ml-3 truncate">{item.text}</span>}
                                        </div>
                                    </button>
                                )
                            ))}
                        </div>
                    </nav>
                </div>

                {/* Main Content - margin left for sidebar, margin top for navbar */}
                <div className={`flex-1 ${sidebarMinimized ? 'ml-16' : 'ml-64'} pb-8 p-6`} style={{ minHeight: 'calc(100vh - 3rem)', background: '#ede9fe', width: '100vw', maxWidth: '100vw', marginTop: '3rem' }}>
                    <Routes>
                        <Route path="/" element={<Navigate to="dashboard" replace />} />
                        <Route path="home" element={<FacultyHome />} />
                        <Route path="dashboard" element={<DashboardContent />} />
                        <Route path="courses" element={<Courses />} />
                        <Route path="students" element={<Students />} />
                        <Route path="attendance" element={<AttendanceSummary />} />
                        <Route path="attendance/my" element={<MyAttendance />} />
                        <Route path="attendance/student" element={<StudentAttendance />} />
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
                        <Route path="leave" element={<Leave />} />
                        {/* Catch-all route */}
                        <Route path="*" element={<Navigate to="dashboard" replace />} />
                    </Routes>
                </div>
            </div>
            {/* Footer */}
            <footer
                className={`fixed bottom-0 right-0 z-50 bg-red-700 border-t border-gray-200 py-2 text-center text-sm text-[#F5F5F5] transition-all duration-300`
                    + (sidebarMinimized ? ' ml-16 w-[calc(100%-4rem)]' : ' ml-64 w-[calc(100%-16rem)]')
                    + ' md:' + (sidebarMinimized ? 'w-[calc(100%-4rem)]' : 'w-[calc(100%-16rem)]')}
            >
                <div>© {new Date().getFullYear()} UMS University. All rights reserved.</div>
            </footer>
        </div>
    );
};

export default FacultyDashboard;