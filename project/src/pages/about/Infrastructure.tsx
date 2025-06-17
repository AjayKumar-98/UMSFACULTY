import React from 'react';

const Infrastructure: React.FC = () => {
    const facilities = [
        {
            title: 'Academic Buildings',
            description: 'Modern classrooms and lecture halls equipped with state-of-the-art technology.',
            image: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg'
        },
        {
            title: 'Research Centers',
            description: 'Advanced laboratories and research facilities supporting cutting-edge innovation.',
            image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg'
        },
        {
            title: 'Library',
            description: 'Extensive collection of books, digital resources, and study spaces.',
            image: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg'
        },
        {
            title: 'Sports Complex',
            description: 'Indoor and outdoor sports facilities including gymnasium, swimming pool, and courts.',
            image: 'https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg'
        }
    ];

    return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Campus Infrastructure</h1>
                    <div className="w-20 h-1 bg-blue-800 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Our world-class infrastructure provides students with the perfect environment for learning, research, and personal growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {facilities.map((facility, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={facility.image}
                                alt={facility.title}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.title}</h3>
                                <p className="text-gray-600">{facility.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Facilities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Student Centers</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>Student Union Building</li>
                                <li>Career Development Center</li>
                                <li>Counseling Services</li>
                                <li>Health Center</li>
                            </ul>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Technology</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>High-speed Wi-Fi Network</li>
                                <li>Computer Labs</li>
                                <li>Innovation Hub</li>
                                <li>Digital Learning Centers</li>
                            </ul>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Support Services</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>24/7 Security</li>
                                <li>Maintenance Department</li>
                                <li>IT Support</li>
                                <li>Transportation Services</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Infrastructure; 