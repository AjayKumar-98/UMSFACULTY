import React from 'react';
import { FaHome, FaCalendarAlt, FaBook, FaClipboardList, FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';
import { MdAssignment, MdGrade } from 'react-icons/md';
import { BsFileEarmarkText, BsPeople } from 'react-icons/bs';

const FacultyHome: React.FC = () => (
    <div className="bg-white min-h-screen px-8 pt-6 pb-2">
        <div className="mb-2">
            <div className="flex items-center text-xs text-gray-500 mt-2">
                <span>HOME</span>
                {/* <span className="mx-2">&gt;</span> */}
                {/* <span className="text-[#6B46C1] font-semibold">QUICK ACCESS</span> */}
            </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8 mt-8">
            <div className="flex flex-col items-center cursor-pointer" onClick={() => window.location.href = '/faculty-dashboard/dashboard'}>
                <FaHome className="w-8 h-8 text-[#5B6B5B] mb-2" />
                <span className="font-semibold">Dashboard</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer" onClick={() => window.location.href = '/faculty-dashboard/timetable'}>
                <FaCalendarAlt className="w-8 h-8 text-[#8D7B6B] mb-2" />
                <span className="font-semibold">My Timetable</span>
            </div>
            {/* <div className="flex flex-col items-center">
                <BsPeople className="w-8 h-8 text-[#6B5B8D] mb-2" />
                <span className="font-semibold">Communities</span>
                <span className="text-xs text-gray-500 text-center mt-1">Faculty, Department, Research, Social</span>
            </div>
            <div className="flex flex-col items-center">
                <FaBook className="w-8 h-8 text-[#8D6B5B] mb-2" />
                <span className="font-semibold">Course Communities</span>
                <span className="text-xs text-gray-500 text-center mt-1">Subject, Batch, Project Groups</span>
            </div> */}
            <div className="flex flex-col items-center">
                <FaCalendarAlt className="w-8 h-8 text-[#5B6B8D] mb-2" />
                <span className="font-semibold">Academic Calendar</span>
            </div>
        </div>
        <h3 className="text-xl font-bold mb-2 mt-8">QUICK ACCESS</h3>
        <input type="text" placeholder="What are you looking for..." className="w-full border rounded px-3 py-2 mb-6" />
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            <div className="flex flex-col items-center cursor-pointer" onClick={() => window.location.href = '/faculty-dashboard/timetable'}>
                <FaCalendarAlt className="w-8 h-8 text-[#5B6B5B] mb-2" />
                <span className="font-semibold">Timetable</span>
            </div>
            
            <div className="flex flex-col items-center cursor-pointer" onClick={() => window.location.href = '/faculty-dashboard/attendance'}>
                <FaClipboardList className="w-8 h-8 text-[#6B5B8D] mb-2" />
                <span className="font-semibold">Attendance</span>
            </div>
           
            <div className="flex flex-col items-center cursor-pointer" onClick={() => window.location.href = '/faculty-dashboard/assignments'}>
                <MdGrade className="w-8 h-8 text-[#5B6B8D] mb-2" />
                <span className="font-semibold">Assignments</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer" onClick={() => window.location.href = '/faculty-dashboard/students'}>
                <BsFileEarmarkText className="w-8 h-8 text-[#8D7B6B] mb-2" />
                <span className="font-semibold">Internal Marks/CA Register</span>
            </div>
         
            <div className="flex flex-col items-center cursor-pointer" onClick={() => window.location.href = '/faculty-dashboard/exams'}>
                <BsFileEarmarkText className="w-8 h-8 text-[#8D7B6B] mb-2" />
                <span className="font-semibold">Activity Points</span>
            </div>
          
            <div className="flex flex-col items-center cursor-pointer" onClick={() => window.location.href = '/faculty-dashboard/students'}>
                <FaUserGraduate className="w-8 h-8 text-[#6B5B8D] mb-2" />
                <span className="font-semibold">Student</span>
            </div>
         
            <div className="flex flex-col items-center">
                <BsFileEarmarkText className="w-8 h-8 text-[#8D7B6B] mb-2" />
                <span className="font-semibold">Exam</span>
            </div>
        </div>
       
    </div>
);

export default FacultyHome;
