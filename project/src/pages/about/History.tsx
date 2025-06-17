import React from 'react';
import { Milestone } from 'lucide-react';

const History: React.FC = () => {
  const milestones = [
    {
      year: '1985',
      title: 'Foundation',
      description: 'UniVersa University was established with a vision to provide quality education.'
    },
    {
      year: '1990',
      title: 'First Graduation',
      description: 'Celebrated our first batch of graduates across multiple disciplines.'
    },
    {
      year: '2000',
      title: 'Research Center',
      description: 'Established state-of-the-art research facilities and centers.'
    },
    {
      year: '2010',
      title: 'Global Recognition',
      description: 'Achieved top rankings in global university assessments.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Implemented cutting-edge digital learning platforms and technologies.'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our History</h1>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Since our founding in 1985, UniVersa has grown from a small college to a 
            leading institution of higher education, marked by significant milestones 
            and achievements.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <span className="text-2xl font-bold text-blue-800">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-800 border-4 border-white flex items-center justify-center">
                  <Milestone className="w-4 h-4 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Legacy of Excellence</h2>
          <p className="text-gray-600 mb-6">
            Over the decades, UniVersa has maintained its commitment to academic excellence 
            while adapting to the changing needs of society and industry. Our history is 
            marked by continuous innovation, research breakthroughs, and the success of 
            our alumni across the globe.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-800 mb-2">35,000+</div>
              <div className="text-gray-600">Alumni Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-800 mb-2">1,200+</div>
              <div className="text-gray-600">Research Publications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-800 mb-2">50+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;