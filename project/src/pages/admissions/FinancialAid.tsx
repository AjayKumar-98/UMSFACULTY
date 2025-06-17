import React from 'react';
import { Link } from 'react-router-dom';

const FinancialAid = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Financial Aid</h1>

            {/* Overview */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4">Financial Aid Overview</h2>
                <p className="text-gray-600 mb-4">
                    We are committed to making education accessible to all qualified students. Our financial aid
                    programs include scholarships, grants, loans, and work-study opportunities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-blue-50 p-4 rounded-md">
                        <h3 className="font-semibold mb-2">2023-2024 Academic Year</h3>
                        <ul className="space-y-2">
                            <li>• Average Financial Aid Package: $32,000</li>
                            <li>• Students Receiving Aid: 75%</li>
                            <li>• Merit Scholarships Available: Yes</li>
                        </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-md">
                        <h3 className="font-semibold mb-2">Important Dates</h3>
                        <ul className="space-y-2">
                            <li>• FAFSA Priority Deadline: March 1</li>
                            <li>• Scholarship Deadline: February 1</li>
                            <li>• Aid Notification: April 1</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Types of Aid */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Types of Financial Aid</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Scholarships</h3>
                        <ul className="space-y-2">
                            <li>• Merit-based awards</li>
                            <li>• Need-based scholarships</li>
                            <li>• Departmental scholarships</li>
                            <li>• Athletic scholarships</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Grants</h3>
                        <ul className="space-y-2">
                            <li>• Federal Pell Grant</li>
                            <li>• State grants</li>
                            <li>• Institutional grants</li>
                            <li>• Need-based grants</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Work-Study</h3>
                        <ul className="space-y-2">
                            <li>• On-campus jobs</li>
                            <li>• Federal work-study</li>
                            <li>• Research assistantships</li>
                            <li>• Teaching assistantships</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* How to Apply */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4">How to Apply</h2>
                <ol className="space-y-4">
                    <li className="flex items-start">
                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">1</span>
                        <div>
                            <h3 className="font-semibold">Complete the FAFSA</h3>
                            <p className="text-gray-600">Submit your Free Application for Federal Student Aid (FAFSA) using our school code.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">2</span>
                        <div>
                            <h3 className="font-semibold">Apply for Scholarships</h3>
                            <p className="text-gray-600">Complete our institutional scholarship application for consideration.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">3</span>
                        <div>
                            <h3 className="font-semibold">Submit Required Documents</h3>
                            <p className="text-gray-600">Provide any additional documentation requested by our financial aid office.</p>
                        </div>
                    </li>
                </ol>
            </div>

            {/* Contact Information */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
                <p className="mb-4">Our financial aid advisors are here to help you navigate the process.</p>
                <div className="flex gap-4">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                        Contact Financial Aid Office
                    </button>
                    <Link
                        to="/admissions/apply"
                        className="bg-white text-blue-600 px-6 py-2 rounded-md border border-blue-600 hover:bg-blue-50"
                    >
                        Start Application
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FinancialAid; 