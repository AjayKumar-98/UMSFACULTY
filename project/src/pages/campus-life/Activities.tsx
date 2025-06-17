import React from 'react';

const Activities = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Campus Activities</h1>

            {/* Overview */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
                <p className="text-gray-600 mb-4">
                    Discover the vibrant campus life at our university. With over 100 student organizations,
                    numerous events, and exciting activities throughout the year, there's something for everyone
                    to enjoy and explore.
                </p>
            </div>

            {/* Student Organizations */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Student Organizations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Academic & Professional</h3>
                        <ul className="space-y-2">
                            <li>• Computer Science Club</li>
                            <li>• Business Leaders Association</li>
                            <li>• Engineering Society</li>
                            <li>• Pre-Med Association</li>
                            <li>• Psychology Club</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Cultural & Identity</h3>
                        <ul className="space-y-2">
                            <li>• International Student Association</li>
                            <li>• Black Student Union</li>
                            <li>• Asian Cultural Society</li>
                            <li>• Hispanic Student Association</li>
                            <li>• LGBTQ+ Alliance</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Arts & Media</h3>
                        <ul className="space-y-2">
                            <li>• Student Newspaper</li>
                            <li>• Drama Club</li>
                            <li>• Photography Society</li>
                            <li>• Music Ensemble</li>
                            <li>• Dance Team</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Events Calendar */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">This Month</h3>
                        <ul className="space-y-4">
                            <li className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-semibold">Spring Festival</h4>
                                    <p className="text-gray-600">Annual celebration with food, music, and games</p>
                                </div>
                                <span className="text-blue-600">Apr 15</span>
                            </li>
                            <li className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-semibold">Career Fair</h4>
                                    <p className="text-gray-600">Meet with potential employers</p>
                                </div>
                                <span className="text-blue-600">Apr 20</span>
                            </li>
                            <li className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-semibold">Cultural Night</h4>
                                    <p className="text-gray-600">Celebrate diversity through performances</p>
                                </div>
                                <span className="text-blue-600">Apr 25</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Next Month</h3>
                        <ul className="space-y-4">
                            <li className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-semibold">Finals Study Break</h4>
                                    <p className="text-gray-600">De-stress with games and snacks</p>
                                </div>
                                <span className="text-blue-600">May 5</span>
                            </li>
                            <li className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-semibold">Graduation Ceremony</h4>
                                    <p className="text-gray-600">Celebrate our graduating class</p>
                                </div>
                                <span className="text-blue-600">May 15</span>
                            </li>
                            <li className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-semibold">Alumni Reunion</h4>
                                    <p className="text-gray-600">Welcome back our alumni</p>
                                </div>
                                <span className="text-blue-600">May 20</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Sports & Recreation */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Sports & Recreation</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Intramural Sports</h3>
                        <ul className="space-y-2">
                            <li>• Basketball</li>
                            <li>• Soccer</li>
                            <li>• Volleyball</li>
                            <li>• Flag Football</li>
                            <li>• Ultimate Frisbee</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Fitness Classes</h3>
                        <ul className="space-y-2">
                            <li>• Yoga</li>
                            <li>• Zumba</li>
                            <li>• Spin Class</li>
                            <li>• HIIT Training</li>
                            <li>• Pilates</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Club Sports</h3>
                        <ul className="space-y-2">
                            <li>• Swimming</li>
                            <li>• Tennis</li>
                            <li>• Rugby</li>
                            <li>• Rock Climbing</li>
                            <li>• Martial Arts</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Get Started */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Ready to Get Involved?</h2>
                <p className="mb-4">Join a club, attend an event, or start your own organization!</p>
                <div className="flex gap-4">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                        Browse Organizations
                    </button>
                    <button className="bg-white text-blue-600 px-6 py-2 rounded-md border border-blue-600 hover:bg-blue-50">
                        View Full Calendar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Activities; 