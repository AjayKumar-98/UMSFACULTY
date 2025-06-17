import React from 'react';
import { Link } from 'react-router-dom';

const Centers = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Research Centers</h1>

            {/* Overview */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4">Research Excellence</h2>
                <p className="text-gray-600 mb-4">
                    Our research centers are at the forefront of innovation and discovery. Through
                    interdisciplinary collaboration and cutting-edge facilities, we're addressing
                    today's most pressing challenges and shaping tomorrow's solutions.
                </p>
            </div>

            {/* Featured Centers */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Featured Research Centers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Center for AI & Machine Learning</h3>
                        <img
                            src="/images/ai-center.jpg"
                            alt="AI Research Center"
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <p className="text-gray-600 mb-4">
                            Advancing artificial intelligence and machine learning technologies through
                            innovative research and industry partnerships.
                        </p>
                        <ul className="space-y-2 mb-4">
                            <li>• Deep Learning Research</li>
                            <li>• Natural Language Processing</li>
                            <li>• Computer Vision</li>
                            <li>• Robotics Integration</li>
                        </ul>
                        <button className="text-blue-600 hover:underline">Learn More →</button>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Biomedical Research Institute</h3>
                        <img
                            src="/images/biomedical.jpg"
                            alt="Biomedical Research"
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <p className="text-gray-600 mb-4">
                            Conducting groundbreaking research in medical sciences and biotechnology
                            to improve human health and wellbeing.
                        </p>
                        <ul className="space-y-2 mb-4">
                            <li>• Drug Discovery</li>
                            <li>• Gene Therapy</li>
                            <li>• Cancer Research</li>
                            <li>• Regenerative Medicine</li>
                        </ul>
                        <button className="text-blue-600 hover:underline">Learn More →</button>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Environmental Science Center</h3>
                        <img
                            src="/images/environmental.jpg"
                            alt="Environmental Research"
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <p className="text-gray-600 mb-4">
                            Researching environmental challenges and developing sustainable solutions
                            for a better future.
                        </p>
                        <ul className="space-y-2 mb-4">
                            <li>• Climate Change Studies</li>
                            <li>• Renewable Energy</li>
                            <li>• Conservation Biology</li>
                            <li>• Sustainable Technologies</li>
                        </ul>
                        <button className="text-blue-600 hover:underline">Learn More →</button>
                    </div>
                </div>
            </div>

            {/* Research Areas */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Research Areas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Technology & Innovation</h3>
                        <ul className="space-y-2">
                            <li>• Artificial Intelligence</li>
                            <li>• Cybersecurity</li>
                            <li>• Data Science</li>
                            <li>• Quantum Computing</li>
                            <li>• Internet of Things</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Life Sciences</h3>
                        <ul className="space-y-2">
                            <li>• Biotechnology</li>
                            <li>• Neuroscience</li>
                            <li>• Genomics</li>
                            <li>• Molecular Biology</li>
                            <li>• Medical Research</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Collaboration Opportunities */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Research Collaboration</h2>
                <p className="mb-4">
                    We welcome collaboration opportunities with industry partners, academic institutions,
                    and research organizations.
                </p>
                <div className="flex gap-4">
                    <Link
                        to="/research/projects"
                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                    >
                        View Projects
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

export default Centers; 