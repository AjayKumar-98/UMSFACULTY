import React from 'react';
import { MapPin, Phone, Mail, Bus, Train, Plane } from 'lucide-react';

const Location: React.FC = () => {
    return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Location</h1>
                    <div className="w-20 h-1 bg-blue-800 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Strategically located in the heart of the city, UMS provides easy access to educational and cultural resources.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Map */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.9!3d40.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM0LCsDQyJzAwLjAiTiA3M8KwNTQnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="UMS Location Map"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <MapPin className="w-6 h-6 text-blue-800 mt-1 mr-4" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Address</h3>
                                    <p className="text-gray-600">123 University Avenue<br />City, State 12345<br />United States</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Phone className="w-6 h-6 text-blue-800 mt-1 mr-4" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Phone</h3>
                                    <p className="text-gray-600">(123) 456-7890</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Mail className="w-6 h-6 text-blue-800 mt-1 mr-4" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Email</h3>
                                    <p className="text-gray-600">info@ums.edu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Transportation */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Getting Here</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex items-start">
                            <Bus className="w-6 h-6 text-blue-800 mt-1 mr-4" />
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2">By Bus</h3>
                                <ul className="text-gray-600 space-y-2">
                                    <li>Bus routes: 101, 102, 103</li>
                                    <li>Campus shuttle service available</li>
                                    <li>Bus stop at main entrance</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Train className="w-6 h-6 text-blue-800 mt-1 mr-4" />
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2">By Train</h3>
                                <ul className="text-gray-600 space-y-2">
                                    <li>Central Station - 10 min walk</li>
                                    <li>Express lines: A, B, C</li>
                                    <li>Free shuttle service available</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Plane className="w-6 h-6 text-blue-800 mt-1 mr-4" />
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2">By Air</h3>
                                <ul className="text-gray-600 space-y-2">
                                    <li>International Airport - 30 min</li>
                                    <li>Regional Airport - 15 min</li>
                                    <li>Airport shuttle available</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location; 