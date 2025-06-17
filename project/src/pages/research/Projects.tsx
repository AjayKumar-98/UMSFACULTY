import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Research Projects</h1>

            {/* Overview */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4">Current Research Projects</h2>
                <p className="text-gray-600 mb-4">
                    Explore our ongoing research projects across various disciplines. Our researchers
                    are working on cutting-edge solutions to address global challenges and advance
                    scientific knowledge.
                </p>
            </div>

            {/* Featured Projects */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <span className="text-sm text-blue-600 font-medium">Artificial Intelligence</span>
                        <h3 className="text-xl font-semibold mt-2 mb-3">
                            Advanced AI for Healthcare Diagnostics
                        </h3>
                        <img
                            src="/images/ai-healthcare.jpg"
                            alt="AI Healthcare Project"
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <p className="text-gray-600 mb-4">
                            Developing AI-powered diagnostic tools to improve early disease detection
                            and treatment planning in healthcare settings.
                        </p>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">Duration: 2023-2025</span>
                            <button className="text-blue-600 hover:underline">Learn More →</button>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <span className="text-sm text-blue-600 font-medium">Environmental Science</span>
                        <h3 className="text-xl font-semibold mt-2 mb-3">
                            Sustainable Urban Development
                        </h3>
                        <img
                            src="/images/urban-sustainability.jpg"
                            alt="Urban Sustainability Project"
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <p className="text-gray-600 mb-4">
                            Researching innovative approaches to create environmentally sustainable
                            and socially inclusive urban environments.
                        </p>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">Duration: 2024-2026</span>
                            <button className="text-blue-600 hover:underline">Learn More →</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Categories */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Research Areas</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Technology Innovation</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <div>
                                    <span className="font-medium">Quantum Computing Research</span>
                                    <p className="text-sm text-gray-600">Advancing quantum algorithms and applications</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <div>
                                    <span className="font-medium">Cybersecurity Solutions</span>
                                    <p className="text-sm text-gray-600">Developing next-gen security protocols</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <div>
                                    <span className="font-medium">5G Networks</span>
                                    <p className="text-sm text-gray-600">Improving wireless communication</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Healthcare & Medicine</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <div>
                                    <span className="font-medium">Cancer Research</span>
                                    <p className="text-sm text-gray-600">Novel treatment approaches</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <div>
                                    <span className="font-medium">Genomic Medicine</span>
                                    <p className="text-sm text-gray-600">Personalized treatment solutions</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <div>
                                    <span className="font-medium">Mental Health</span>
                                    <p className="text-sm text-gray-600">Understanding and treatment</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <div>
                                    <span className="font-medium">Renewable Energy</span>
                                    <p className="text-sm text-gray-600">Clean energy solutions</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <div>
                                    <span className="font-medium">Climate Change</span>
                                    <p className="text-sm text-gray-600">Impact and mitigation strategies</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <div>
                                    <span className="font-medium">Conservation</span>
                                    <p className="text-sm text-gray-600">Biodiversity preservation</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Get Involved */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
                <p className="mb-4">
                    Interested in participating in our research projects? Explore opportunities
                    for collaboration and funding.
                </p>
                <div className="flex gap-4">
                    <Link
                        to="/research/centers"
                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                    >
                        Research Centers
                    </Link>
                    <Link
                        to="/research/publications"
                        className="bg-white text-blue-600 px-6 py-2 rounded-md border border-blue-600 hover:bg-blue-50"
                    >
                        View Publications
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Projects; 