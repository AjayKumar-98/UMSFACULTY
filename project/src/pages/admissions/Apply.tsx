import React from 'react';
import { Link } from 'react-router-dom';

const Apply = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Apply for Admission</h1>

            {/* Application Steps */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Application Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-xl font-semibold mb-2">Step 1</div>
                        <h3 className="text-lg font-medium mb-2">Create Account</h3>
                        <p className="text-gray-600">Create your applicant account to begin the application process.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-xl font-semibold mb-2">Step 2</div>
                        <h3 className="text-lg font-medium mb-2">Complete Application</h3>
                        <p className="text-gray-600">Fill out all required information and upload necessary documents.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-xl font-semibold mb-2">Step 3</div>
                        <h3 className="text-lg font-medium mb-2">Submit & Pay</h3>
                        <p className="text-gray-600">Submit your application and pay the application fee.</p>
                    </div>
                </div>
            </div>

            {/* Quick Links */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                        to="/admissions/requirements"
                        className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                        <h3 className="text-lg font-medium mb-2">Admission Requirements</h3>
                        <p className="text-gray-600">View all requirements and documents needed.</p>
                    </Link>
                    <Link
                        to="/admissions/financial-aid"
                        className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                        <h3 className="text-lg font-medium mb-2">Financial Aid</h3>
                        <p className="text-gray-600">Learn about available financial aid options.</p>
                    </Link>
                </div>
            </div>

            {/* Application Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Start Your Application</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Full Name</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded-md"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 border rounded-md"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Program of Interest</label>
                        <select className="w-full p-2 border rounded-md">
                            <option value="">Select a program</option>
                            <option value="cs">Computer Science</option>
                            <option value="business">Business Administration</option>
                            <option value="engineering">Engineering</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                    >
                        Start Application
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Apply; 