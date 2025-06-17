import React from 'react';

const Test: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-gray-900">Test Page</h1>
                <p className="mt-4 text-gray-600">If you can see this, routing is working correctly!</p>
            </div>
        </div>
    );
};

export default Test; 