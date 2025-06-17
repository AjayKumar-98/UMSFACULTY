import React from 'react';

const Facilities = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Campus Facilities</h1>

            {/* Overview */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4">World-Class Facilities</h2>
                <p className="text-gray-600 mb-4">
                    Our campus features state-of-the-art facilities designed to enhance your learning experience
                    and support your academic success. From modern classrooms to cutting-edge research labs,
                    we provide everything you need to excel.
                </p>
            </div>

            {/* Academic Facilities */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Academic Facilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Libraries</h3>
                        <img
                            src="/images/library.jpg"
                            alt="Main Library"
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <ul className="space-y-2">
                            <li>• Main Library (24/7 access)</li>
                            <li>• Science Library</li>
                            <li>• Digital Media Center</li>
                            <li>• Special Collections</li>
                            <li>• Study Rooms</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Research Centers</h3>
                        <img
                            src="/images/research-lab.jpg"
                            alt="Research Lab"
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <ul className="space-y-2">
                            <li>• Science Labs</li>
                            <li>• Computer Labs</li>
                            <li>• Research Centers</li>
                            <li>• Innovation Hub</li>
                            <li>• Maker Space</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Learning Spaces</h3>
                        <img
                            src="/images/classroom.jpg"
                            alt="Modern Classroom"
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <ul className="space-y-2">
                            <li>• Smart Classrooms</li>
                            <li>• Lecture Halls</li>
                            <li>• Seminar Rooms</li>
                            <li>• Group Study Areas</li>
                            <li>• Quiet Study Zones</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Athletic Facilities */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Athletic & Recreation Facilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Recreation Center</h3>
                        <ul className="space-y-2">
                            <li>• Fitness Center</li>
                            <li>• Indoor Track</li>
                            <li>• Swimming Pool</li>
                            <li>• Basketball Courts</li>
                            <li>• Climbing Wall</li>
                            <li>• Group Fitness Studios</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Outdoor Facilities</h3>
                        <ul className="space-y-2">
                            <li>• Athletic Fields</li>
                            <li>• Tennis Courts</li>
                            <li>• Track & Field Stadium</li>
                            <li>• Baseball Diamond</li>
                            <li>• Soccer Fields</li>
                            <li>• Outdoor Basketball Courts</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Student Services */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Student Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Health & Wellness</h3>
                        <ul className="space-y-2">
                            <li>• Health Center</li>
                            <li>• Counseling Services</li>
                            <li>• Pharmacy</li>
                            <li>• Wellness Programs</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Dining Services</h3>
                        <ul className="space-y-2">
                            <li>• Main Dining Hall</li>
                            <li>• Cafes</li>
                            <li>• Food Courts</li>
                            <li>• Convenience Stores</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Support Centers</h3>
                        <ul className="space-y-2">
                            <li>• Career Center</li>
                            <li>• Writing Center</li>
                            <li>• Tutoring Services</li>
                            <li>• Technology Help Desk</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Hours & Access */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Hours & Access</h2>
                <p className="mb-4">Most facilities are accessible with your student ID card.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-semibold mb-2">Regular Hours</h3>
                        <ul className="space-y-2">
                            <li>• Libraries: 24/7</li>
                            <li>• Recreation Center: 6am - 11pm</li>
                            <li>• Computer Labs: 7am - 2am</li>
                            <li>• Dining Hall: 7am - 9pm</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Access Information</h3>
                        <ul className="space-y-2">
                            <li>• Student ID required</li>
                            <li>• Some areas require special access</li>
                            <li>• Guest passes available</li>
                            <li>• Holiday hours may vary</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facilities; 