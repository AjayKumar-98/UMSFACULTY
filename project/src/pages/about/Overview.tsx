import React from 'react';

const Overview: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About UMS</h1>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At UMS, our mission is to foster academic excellence, promote research and innovation,
              and develop well-rounded individuals who can contribute meaningfully to society. We strive
              to create an inclusive learning environment that encourages critical thinking, creativity,
              and personal growth.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-gray-600 mb-6">
              To be a leading global institution of higher education, recognized for our academic excellence,
              innovative research, and commitment to producing leaders who can address the challenges of
              tomorrow's world.
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg"
              alt="University Campus"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We pursue the highest standards in teaching, research, and service to society.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We encourage creative thinking and pioneering approaches to learning and research.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest ethical standards in all our endeavors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;