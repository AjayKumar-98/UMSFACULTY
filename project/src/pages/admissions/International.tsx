import React from 'react';
import { Link } from 'react-router-dom';

const International = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">International Students</h1>

            {/* Welcome Message */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4">Welcome to Our Global Community</h2>
                <p className="text-gray-600 mb-4">
                    We are proud to welcome students from around the world. Our diverse campus community
                    enriches the educational experience for all students through the exchange of ideas,
                    perspectives, and cultures.
                </p>
            </div>

            {/* Application Requirements */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Application Requirements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Required Documents</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <span>Completed international student application</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <span>Official academic records with certified English translations</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <span>Proof of English proficiency (TOEFL/IELTS)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <span>Financial documentation</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <span>Copy of passport</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">English Proficiency</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <span>TOEFL iBT: Minimum score of 80</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <span>IELTS: Minimum score of 6.5</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <span>Duolingo English Test: Minimum score of 105</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Visa Information */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4">Visa Information</h2>
                <p className="text-gray-600 mb-4">
                    After acceptance, our International Student Office will assist you with the F-1 student
                    visa process and provide necessary documentation.
                </p>
                <div className="bg-blue-50 p-4 rounded-md">
                    <h3 className="font-semibold mb-2">Important Visa Documents</h3>
                    <ul className="space-y-2">
                        <li>• Form I-20 (provided after acceptance)</li>
                        <li>• Valid passport</li>
                        <li>• Financial documentation</li>
                        <li>• Visa application forms</li>
                    </ul>
                </div>
            </div>

            {/* Support Services */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">International Student Support</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Academic Support</h3>
                        <ul className="space-y-2">
                            <li>• Academic advising</li>
                            <li>• Writing center</li>
                            <li>• Tutoring services</li>
                            <li>• Language support</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Cultural Programs</h3>
                        <ul className="space-y-2">
                            <li>• International student orientation</li>
                            <li>• Cultural events</li>
                            <li>• Student organizations</li>
                            <li>• Peer mentoring</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Housing & Living</h3>
                        <ul className="space-y-2">
                            <li>• On-campus housing</li>
                            <li>• Meal plans</li>
                            <li>• Health services</li>
                            <li>• Airport pickup service</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Contact and Apply */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Ready to Join Us?</h2>
                <p className="mb-4">Take the first step towards your international education journey.</p>
                <div className="flex gap-4">
                    <Link
                        to="/admissions/apply"
                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                    >
                        Apply Now
                    </Link>
                    <button className="bg-white text-blue-600 px-6 py-2 rounded-md border border-blue-600 hover:bg-blue-50">
                        Contact International Office
                    </button>
                </div>
            </div>
        </div>
    );
};

export default International; 