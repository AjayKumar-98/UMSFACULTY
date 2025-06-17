import React from 'react';

const Departments = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Academic Departments</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Science & Technology */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Science & Technology</h2>
                    <ul className="space-y-2">
                        <li>Computer Science</li>
                        <li>Mathematics</li>
                        <li>Physics</li>
                        <li>Chemistry</li>
                    </ul>
                </div>

                {/* Business & Economics */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Business & Economics</h2>
                    <ul className="space-y-2">
                        <li>Business Administration</li>
                        <li>Economics</li>
                        <li>Finance</li>
                        <li>Marketing</li>
                    </ul>
                </div>

                {/* Arts & Humanities */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Arts & Humanities</h2>
                    <ul className="space-y-2">
                        <li>English</li>
                        <li>History</li>
                        <li>Philosophy</li>
                        <li>Fine Arts</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Departments; 