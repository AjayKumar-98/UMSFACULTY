import React from 'react';
import { useNavigate } from 'react-router-dom';

// Icons imports
import { FaHome, FaUserCheck, FaBook, FaUserFriends } from 'react-icons/fa';
import { BsFillJournalBookmarkFill, BsTrophy, BsPersonWorkspace, BsGearFill } from 'react-icons/bs';
import { MdPayments, MdSupportAgent, MdOutlineAccessTimeFilled } from 'react-icons/md';
import { GiNotebook } from 'react-icons/gi';
import { IoLogOutSharp } from 'react-icons/io5';

const StudentDashboard: React.FC = () => {
    const navigate = useNavigate();
    const userName = localStorage.getItem('userName') || 'User';

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    const sidebarItems = [
        { icon: <FaHome className="w-5 h-5" />, text: 'Home' },
        { icon: <FaUserCheck className="w-5 h-5" />, text: 'Attendance register' },
        { icon: <FaBook className="w-5 h-5" />, text: 'Courses' },
        { icon: <GiNotebook className="w-5 h-5" />, text: 'Counselling Diary' },
        { icon: <FaBook className="w-5 h-5" />, text: 'Exam Section' },
        { icon: <MdPayments className="w-5 h-5" />, text: 'Fee Payments' },
        { icon: <FaUserFriends className="w-5 h-5" />, text: 'Hostel Management' },
        { icon: <FaBook className="w-5 h-5" />, text: 'Library' },
        { icon: <FaBook className="w-5 h-5" />, text: 'My CGPA' },
        { icon: <FaBook className="w-5 h-5" />, text: 'Program Exist Survey Feedback' },
        { icon: <FaUserFriends className="w-5 h-5" />, text: 'Profile' },
        { icon: <MdSupportAgent className="w-5 h-5" />, text: 'Ticketing Support' },
        { icon: <MdOutlineAccessTimeFilled className="w-5 h-5" />, text: 'Time Tables' },
    ];

    const dashboardCards = [
        {
            icon: <BsFillJournalBookmarkFill className="w-12 h-12 text-blue-500" />,
            title: 'Journals & Conferences',
            count: 0
        },
        {
            icon: <BsTrophy className="w-12 h-12 text-blue-500" />,
            title: 'Awards & Recognitions',
            count: 0
        },
        {
            icon: <BsPersonWorkspace className="w-12 h-12 text-blue-500" />,
            title: 'Workshops,Seminars & Guest Lectures',
            count: 0
        },
        {
            icon: <BsGearFill className="w-12 h-12 text-blue-500" />,
            title: 'Projects & Consultancy',
            count: 0
        }
    ];

    return (
        <div className="min-h-screen relative z-50">
            <div className="flex h-screen">
                {/* Sidebar */}
                <div className="w-64 bg-[#2C3E6E] text-white h-screen fixed left-0">
                    <nav className="mt-4">
                        {sidebarItems.map((item, index) => (
                            <a
                                key={index}
                                href="#"
                                className="flex items-center px-4 py-3 text-gray-300 hover:bg-blue-800"
                            >
                                {item.icon}
                                <span className="ml-3">{item.text}</span>
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1 ml-64">
                    {/* Header */}
                    <header className="bg-white shadow-sm fixed top-0 right-0 left-64 z-10">
                        <div className="flex justify-between items-center px-4 py-3">
                            <h1 className="text-xl font-semibold text-[#C41E3A]">Student Portal</h1>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center">
                                    <img
                                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                                        alt="Student"
                                        className="w-8 h-8 rounded-full mr-2 object-cover border-2 border-gray-200"
                                    />
                                    <span>Welcome {userName}</span>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center text-gray-700 hover:text-red-600"
                                >
                                    <IoLogOutSharp className="w-5 h-5 mr-1" />
                                    Logout
                                </button>
                            </div>
                        </div>
                    </header>

                    {/* Dashboard Content */}
                    <div className="p-6 mt-14">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {dashboardCards.map((card, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center">
                                    <div className="mb-4">
                                        {card.icon}
                                    </div>
                                    <div className="text-center">
                                        <div className="text-blue-500 text-2xl font-bold mb-2">{card.count}</div>
                                        <h3 className="text-gray-700 text-sm">{card.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard; 