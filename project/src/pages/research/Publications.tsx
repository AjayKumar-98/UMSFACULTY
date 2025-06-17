import React from 'react';
import { Link } from 'react-router-dom';

const Publications = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Research Publications</h1>

            {/* Overview */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4">Academic Excellence</h2>
                <p className="text-gray-600 mb-4">
                    Our faculty and researchers consistently publish groundbreaking research in leading
                    academic journals and conferences. Browse our recent publications and discover the
                    impact of our research across various disciplines.
                </p>
            </div>

            {/* Featured Publications */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Featured Publications</h2>
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <span className="text-sm text-blue-600 font-medium">Artificial Intelligence</span>
                        <h3 className="text-xl font-semibold mt-2 mb-3">
                            "Deep Learning Approaches for Advanced Natural Language Understanding"
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Authors: Dr. Sarah Johnson, Dr. Michael Chen, et al.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Published in Nature Machine Intelligence, 2024
                        </p>
                        <button className="text-blue-600 hover:underline">Read Abstract →</button>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <span className="text-sm text-blue-600 font-medium">Biomedical Research</span>
                        <h3 className="text-xl font-semibold mt-2 mb-3">
                            "Novel Approaches in Cancer Immunotherapy: A Comprehensive Review"
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Authors: Dr. Emily Brown, Dr. David Wilson, et al.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Published in Cell Research, 2024
                        </p>
                        <button className="text-blue-600 hover:underline">Read Abstract →</button>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <span className="text-sm text-blue-600 font-medium">Environmental Science</span>
                        <h3 className="text-xl font-semibold mt-2 mb-3">
                            "Climate Change Impact on Biodiversity: A Global Perspective"
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Authors: Dr. Robert Taylor, Dr. Lisa Zhang, et al.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Published in Nature Climate Change, 2024
                        </p>
                        <button className="text-blue-600 hover:underline">Read Abstract →</button>
                    </div>
                </div>
            </div>

            {/* Publication Categories */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Browse by Category</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Technology</h3>
                        <ul className="space-y-2">
                            <li>• Artificial Intelligence (45)</li>
                            <li>• Computer Science (38)</li>
                            <li>• Data Science (27)</li>
                            <li>• Cybersecurity (19)</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Life Sciences</h3>
                        <ul className="space-y-2">
                            <li>• Biotechnology (32)</li>
                            <li>• Medicine (29)</li>
                            <li>• Genetics (24)</li>
                            <li>• Neuroscience (21)</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Environmental</h3>
                        <ul className="space-y-2">
                            <li>• Climate Science (28)</li>
                            <li>• Sustainability (25)</li>
                            <li>• Renewable Energy (22)</li>
                            <li>• Conservation (18)</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Publication Stats */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Publication Statistics</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">350+</div>
                        <div className="text-gray-600">Publications in 2023</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                        <div className="text-gray-600">Research Faculty</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">75+</div>
                        <div className="text-gray-600">Research Partners</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                        <div className="text-gray-600">Research Centers</div>
                    </div>
                </div>
            </div>

            {/* Resources */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Research Resources</h2>
                <p className="mb-4">Access our research resources and learn about collaboration opportunities.</p>
                <div className="flex gap-4">
                    <Link
                        to="/research/centers"
                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                    >
                        Research Centers
                    </Link>
                    <Link
                        to="/research/projects"
                        className="bg-white text-blue-600 px-6 py-2 rounded-md border border-blue-600 hover:bg-blue-50"
                    >
                        Current Projects
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Publications; 