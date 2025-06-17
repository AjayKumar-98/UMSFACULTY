import React from 'react';
import { Award, Users, Globe2, Calendar } from 'lucide-react';

const Alumni: React.FC = () => {
    const notableAlumni = [
        {
            name: 'Dr. Rakesh Sharma',
            graduation: '1995',
            achievement: 'Shanti Swarup Bhatnagar Prize in Physics',
            image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg'
        },
        {
            name: 'Sunita Menon',
            graduation: '2002',
            achievement: 'CEO of Bharat Tech Innovations',
            image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg'
        },
        {
            name: 'Prof. Arvind Kumar',
            graduation: '1988',
            achievement: 'Leading Researcher in Climate Science',
            image: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg'
        },
        {
            name: 'Priya Desai',
            graduation: '2010',
            achievement: 'Award-winning Entrepreneur',
            image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'
        }
    ];

    const stats = [
        {
            icon: <Users className="w-8 h-8 text-blue-800" />,
            number: '50,000+',
            label: 'Global Alumni'
        },
        {
            icon: <Globe2 className="w-8 h-8 text-blue-800" />,
            number: '120+',
            label: 'Countries'
        },
        {
            icon: <Award className="w-8 h-8 text-blue-800" />,
            number: '1,000+',
            label: 'Award Winners'
        },
        {
            icon: <Calendar className="w-8 h-8 text-blue-800" />,
            number: '100+',
            label: 'Annual Events'
        }
    ];

    return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Alumni Network</h1>
                    <div className="w-20 h-1 bg-blue-800 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Our alumni are making significant contributions across the globe in various fields, from science and technology to business and arts.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                            <div className="flex justify-center mb-4">
                                {stat.icon}
                            </div>
                            <div className="text-2xl font-bold text-gray-900 mb-2">{stat.number}</div>
                            <div className="text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Notable Alumni */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Notable Alumni</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {notableAlumni.map((alumni, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img
                                    src={alumni.image}
                                    alt={alumni.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{alumni.name}</h3>
                                    <p className="text-gray-600 text-sm mb-2">Class of {alumni.graduation}</p>
                                    <p className="text-blue-800">{alumni.achievement}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Get Involved */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get Involved</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Alumni Events</h3>
                            <p className="text-gray-600">
                                Join our networking events, reunions, and professional development workshops.
                            </p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Mentorship Program</h3>
                            <p className="text-gray-600">
                                Share your experience and guide current students in their career journey.
                            </p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Give Back</h3>
                            <p className="text-gray-600">
                                Support scholarships and campus development through our alumni foundation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Alumni;