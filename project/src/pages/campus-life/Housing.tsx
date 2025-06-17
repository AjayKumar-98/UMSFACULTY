import React from 'react';

const Housing = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Campus Housing</h1>

            {/* Overview */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4">Living on Campus</h2>
                <p className="text-gray-600 mb-4">
                    Experience the heart of campus life by living in one of our comfortable and convenient
                    residential communities. Our housing options cater to different preferences and needs,
                    ensuring you find your perfect home away from home.
                </p>
            </div>

            {/* Residence Halls */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Residence Halls</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Freshman Hall</h3>
                        <img
                            src="/images/freshman-hall.jpg"
                            alt="Freshman Hall"
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <ul className="space-y-2">
                            <li>• Double and triple rooms</li>
                            <li>• Community bathrooms</li>
                            <li>• Study lounges</li>
                            <li>• Laundry facilities</li>
                            <li>• 24/7 security</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Upperclassmen Suites</h3>
                        <img
                            src="/images/suites.jpg"
                            alt="Upperclassmen Suites"
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <ul className="space-y-2">
                            <li>• Suite-style rooms</li>
                            <li>• Private bathrooms</li>
                            <li>• Kitchenette</li>
                            <li>• Common area</li>
                            <li>• Study rooms</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Graduate Apartments</h3>
                        <img
                            src="/images/grad-apts.jpg"
                            alt="Graduate Apartments"
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <ul className="space-y-2">
                            <li>• Single and double rooms</li>
                            <li>• Full kitchen</li>
                            <li>• Living room</li>
                            <li>• Private bathroom</li>
                            <li>• Optional meal plan</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Amenities */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Housing Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Included Amenities</h3>
                        <ul className="space-y-2">
                            <li>• High-speed internet</li>
                            <li>• Cable TV</li>
                            <li>• Air conditioning</li>
                            <li>• Heating</li>
                            <li>• Basic furniture</li>
                            <li>• Maintenance services</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Common Areas</h3>
                        <ul className="space-y-2">
                            <li>• Study lounges</li>
                            <li>• TV rooms</li>
                            <li>• Kitchen facilities</li>
                            <li>• Laundry rooms</li>
                            <li>• Bike storage</li>
                            <li>• Vending machines</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Application Process */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Apply for Housing</h2>
                <p className="mb-4">Ready to make campus your home? Follow these steps to apply for housing:</p>
                <ol className="space-y-4">
                    <li className="flex items-start">
                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">1</span>
                        <div>
                            <h3 className="font-semibold">Submit Housing Application</h3>
                            <p className="text-gray-600">Complete the online housing application form.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">2</span>
                        <div>
                            <h3 className="font-semibold">Pay Housing Deposit</h3>
                            <p className="text-gray-600">Submit the required housing deposit to secure your spot.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">3</span>
                        <div>
                            <h3 className="font-semibold">Select Room Preferences</h3>
                            <p className="text-gray-600">Choose your preferred residence hall and room type.</p>
                        </div>
                    </li>
                </ol>
                <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                    Apply for Housing
                </button>
            </div>
        </div>
    );
};

export default Housing; 