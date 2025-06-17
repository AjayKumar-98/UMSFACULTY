import React from 'react';

const Programs = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Academic Programs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Undergraduate Programs */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Undergraduate Programs</h2>
                    <ul className="space-y-2">
                        <li>Bachelor of Science in Computer Science</li>
                        <li>Bachelor of Arts in Business Administration</li>
                        <li>Bachelor of Engineering</li>
                        <li>Bachelor of Arts in Psychology</li>
                    </ul>
                </div>

                {/* Graduate Programs */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Graduate Programs</h2>
                    <ul className="space-y-2">
                        <li>Master of Business Administration</li>
                        <li>Master of Science in Data Science</li>
                        <li>Master of Arts in Education</li>
                        <li>Ph.D. in Computer Science</li>
                    </ul>
                </div>

                {/* Professional Certificates */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Professional Certificates</h2>
                    <ul className="space-y-2">
                        <li>Project Management</li>
                        <li>Digital Marketing</li>
                        <li>Data Analytics</li>
                        <li>Cybersecurity</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Programs; 