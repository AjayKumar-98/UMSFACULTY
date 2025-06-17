import React from 'react';
import { Mail, Phone, MapPin, Clock, Globe } from 'lucide-react';

const ContactInfo: React.FC = () => {
    const contactDetails = [
        {
            icon: <Phone className="w-6 h-6 text-blue-800" />,
            title: 'Phone',
            details: [
                '+1 (555) 123-4567',
                '+1 (555) 987-6543'
            ]
        },
        {
            icon: <Mail className="w-6 h-6 text-blue-800" />,
            title: 'Email',
            details: [
                'admissions@ums.edu',
                'info@ums.edu'
            ]
        },
        {
            icon: <MapPin className="w-6 h-6 text-blue-800" />,
            title: 'Address',
            details: [
                '123 University Avenue',
                'City, State 12345',
                'Country'
            ]
        },
        {
            icon: <Clock className="w-6 h-6 text-blue-800" />,
            title: 'Office Hours',
            details: [
                'Monday - Friday: 9:00 AM - 5:00 PM',
                'Saturday: 9:00 AM - 1:00 PM',
                'Sunday: Closed'
            ]
        }
    ];

    const departments = [
        {
            name: 'Admissions Office',
            email: 'admissions@ums.edu',
            phone: '+1 (555) 123-4567'
        },
        {
            name: 'Student Affairs',
            email: 'student.affairs@ums.edu',
            phone: '+1 (555) 234-5678'
        },
        {
            name: 'Academic Affairs',
            email: 'academic.affairs@ums.edu',
            phone: '+1 (555) 345-6789'
        },
        {
            name: 'International Office',
            email: 'international@ums.edu',
            phone: '+1 (555) 456-7890'
        }
    ];

    return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Information</h1>
                    <div className="w-20 h-1 bg-blue-800 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Get in touch with us for any inquiries. We're here to help you with your questions and concerns.
                    </p>
                </div>

                {/* Contact Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {contactDetails.map((contact, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                            <div className="flex items-center mb-4">
                                {contact.icon}
                                <h3 className="text-xl font-semibold text-gray-900 ml-3">{contact.title}</h3>
                            </div>
                            <div className="space-y-2">
                                {contact.details.map((detail, idx) => (
                                    <p key={idx} className="text-gray-600">{detail}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Department Contacts */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Department Contacts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {departments.map((dept, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">{dept.name}</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center text-gray-600">
                                        <Mail className="w-4 h-4 mr-2" />
                                        <a href={`mailto:${dept.email}`} className="hover:text-blue-800">
                                            {dept.email}
                                        </a>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <Phone className="w-4 h-4 mr-2" />
                                        <a href={`tel:${dept.phone}`} className="hover:text-blue-800">
                                            {dept.phone}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full md:w-auto px-6 py-3 bg-blue-800 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo; 