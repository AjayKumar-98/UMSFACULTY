import React from 'react';
import { Mail, Phone, Award, BookOpen, Users, Star } from 'lucide-react';

const Faculty: React.FC = () => {
    const departments = [
        {
            name: 'Computer Science & Engineering',
            facultyMembers: [
                {
                    name: 'Dr. Anil Kumar',
                    position: 'Head of Department',
                    qualification: 'Ph.D. in Computer Science',
                    specialization: 'Artificial Intelligence & Machine Learning',
                    image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg',
                    email: 'anil.kumar@ums.edu.in'
                },
                {
                    name: 'Prof. Suresh Sharma',
                    position: 'Professor',
                    qualification: 'Ph.D. in Data Science',
                    specialization: 'Big Data Analytics',
                    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
                    email: 'suresh.sharma@ums.edu.in'
                }
            ]
        },
        {
            name: 'Electrical Engineering',
            facultyMembers: [
                {
                    name: 'Dr. Priya Verma',
                    position: 'Professor',
                    qualification: 'Ph.D. in Electrical Engineering',
                    specialization: 'Power Systems',
                    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
                    email: 'priya.verma@ums.edu.in'
                },
                {
                    name: 'Dr. Meena Iyer',
                    position: 'Associate Professor',
                    qualification: 'Ph.D. in Electronics',
                    specialization: 'VLSI Design',
                    image: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg',
                    email: 'meena.iyer@ums.edu.in'
                }
            ]
        },
        {
            name: 'Mechanical Engineering',
            facultyMembers: [
                {
                    name: 'Dr. Rajesh Singh',
                    position: 'Professor',
                    qualification: 'Ph.D. in Mechanical Engineering',
                    specialization: 'Robotics & Automation',
                    image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg',
                    email: 'rajesh.singh@ums.edu.in'
                },
                {
                    name: 'Prof. Kavita Joshi',
                    position: 'Associate Professor',
                    qualification: 'Ph.D. in Manufacturing Engineering',
                    specialization: 'Advanced Manufacturing',
                    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
                    email: 'kavita.joshi@ums.edu.in'
                }
            ]
        }
    ];

    const stats = [
        {
            icon: <Users className="w-8 h-8 text-blue-800" />,
            number: '200+',
            label: 'Faculty Members'
        },
        {
            icon: <BookOpen className="w-8 h-8 text-blue-800" />,
            number: '15+',
            label: 'Departments'
        },
        {
            icon: <Award className="w-8 h-8 text-blue-800" />,
            number: '95%',
            label: 'Ph.D. Holders'
        },
        {
            icon: <Star className="w-8 h-8 text-blue-800" />,
            number: '500+',
            label: 'Research Publications'
        }
    ];

    return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Faculty</h1>
                    <div className="w-20 h-1 bg-blue-800 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Meet our distinguished faculty members who are dedicated to academic excellence and innovative research.
                    </p>
                </div>

                {/* Faculty Stats */}
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

                {/* Departments and Faculty */}
                {departments.map((dept, index) => (
                    <div key={index} className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">{dept.name}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {dept.facultyMembers.map((faculty, idx) => (
                                <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                    <div className="md:flex">
                                        <div className="md:flex-shrink-0">
                                            <img
                                                className="h-48 w-full md:w-48 object-cover"
                                                src={faculty.image}
                                                alt={faculty.name}
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                {faculty.name}
                                            </h3>
                                            <p className="text-blue-800 font-semibold mb-2">
                                                {faculty.position}
                                            </p>
                                            <p className="text-gray-600 mb-1">
                                                {faculty.qualification}
                                            </p>
                                            <p className="text-gray-600 mb-4">
                                                Specialization: {faculty.specialization}
                                            </p>
                                            <div className="flex items-center text-gray-600">
                                                <Mail className="w-4 h-4 mr-2" />
                                                <a href={`mailto:${faculty.email}`} className="hover:text-blue-800">
                                                    {faculty.email}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Research and Publications */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Research & Publications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="border border-gray-200 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Research Areas</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Artificial Intelligence</li>
                                <li>• Renewable Energy</li>
                                <li>• Smart Manufacturing</li>
                                <li>• IoT and Cybersecurity</li>
                            </ul>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Publications</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>• International Journals</li>
                                <li>• Conference Papers</li>
                                <li>• Research Patents</li>
                                <li>• Book Publications</li>
                            </ul>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Collaborations</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Industry Partners</li>
                                <li>• Research Institutes</li>
                                <li>• Global Universities</li>
                                <li>• Government Projects</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faculty;