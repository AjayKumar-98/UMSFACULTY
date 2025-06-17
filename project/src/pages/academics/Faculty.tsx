import React from 'react';

const Faculty = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Our Faculty</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Department Heads */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Department Heads</h2>
                    <ul className="space-y-4">
                        <li>
                            <h3 className="font-semibold">Dr. Jagadeesh</h3>
                            <p className="text-gray-600">Computer Science Department</p>
                        </li>
                        <li>
                            <h3 className="font-semibold">Dr. Manoj Kumar</h3>
                            <p className="text-gray-600">Business Department</p>
                        </li>
                        <li>
                            <h3 className="font-semibold">Dr. Meena Iyer</h3>
                            <p className="text-gray-600">Arts & Humanities Department</p>
                        </li>
                    </ul>
                </div>

                {/* Professors */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Professors</h2>
                    <ul className="space-y-4">
                        <li>
                            <h3 className="font-semibold">Dr. Rajesh Singh</h3>
                            <p className="text-gray-600">Artificial Intelligence</p>
                        </li>
                        <li>
                            <h3 className="font-semibold">Dr. Kavita Joshi</h3>
                            <p className="text-gray-600">Data Science</p>
                        </li>
                        <li>
                            <h3 className="font-semibold">Dr. Suresh Sharma</h3>
                            <p className="text-gray-600">Software Engineering</p>
                        </li>
                    </ul>
                </div>

                {/* Associate Professors */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Associate Professors</h2>
                    <ul className="space-y-4">
                        <li>
                            <h3 className="font-semibold">Dr. Aarti Patel</h3>
                            <p className="text-gray-600">Web Development</p>
                        </li>
                        <li>
                            <h3 className="font-semibold">Dr. Nitin Deshmukh</h3>
                            <p className="text-gray-600">Cybersecurity</p>
                        </li>
                        <li>
                            <h3 className="font-semibold">Dr. Ritu Verma</h3>
                            <p className="text-gray-600">Machine Learning</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Faculty;