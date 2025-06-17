import React from 'react';
import { Link } from 'react-router-dom';

const Requirements = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Admission Requirements</h1>

            {/* General Requirements */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">General Requirements</h2>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>Completed application form</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>Official high school transcripts or equivalent</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>SAT or ACT scores (optional for 2024-2025)</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>Two letters of recommendation</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>Personal statement or essay</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>Application fee or fee waiver</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Program-Specific Requirements */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Program-Specific Requirements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Computer Science</h3>
                        <ul className="space-y-2">
                            <li>• Strong mathematics background</li>
                            <li>• Programming experience (preferred)</li>
                            <li>• Minimum GPA: 3.0</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Business Administration</h3>
                        <ul className="space-y-2">
                            <li>• Economics coursework</li>
                            <li>• Leadership experience</li>
                            <li>• Minimum GPA: 3.0</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Engineering</h3>
                        <ul className="space-y-2">
                            <li>• Advanced mathematics</li>
                            <li>• Physics coursework</li>
                            <li>• Minimum GPA: 3.2</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Next Steps */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Ready to Apply?</h2>
                <p className="mb-4">Now that you've reviewed the requirements, take the next step in your academic journey.</p>
                <div className="flex gap-4">
                    <Link
                        to="/admissions/apply"
                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                    >
                        Start Application
                    </Link>
                    <Link
                        to="/admissions/financial-aid"
                        className="bg-white text-blue-600 px-6 py-2 rounded-md border border-blue-600 hover:bg-blue-50"
                    >
                        View Financial Aid
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Requirements; 