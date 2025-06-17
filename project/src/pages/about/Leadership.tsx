import React from 'react';

const Leadership: React.FC = () => {
  const leaders = [
    {
      name: 'Dr. Anjali Sharma',
      title: 'President',
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1600',
      bio: 'Dr. Sharma brings over 25 years of experience in higher education leadership and a commitment to academic excellence.'
    },
    {
      name: 'Dr. Manoj Kumar',
      title: 'Vice President of Academic Affairs',
      image: 'https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg?auto=compress&cs=tinysrgb&w=1600',
      bio: 'With expertise in curriculum development and academic innovation, Dr. Kumar leads our educational initiatives.'
    },
    {
      name: 'Prof. Ritu Verma',
      title: 'Dean of Research',
      image: 'https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg?auto=compress&cs=tinysrgb&w=1600',
      bio: 'Prof. Verma oversees our research programs and promotes innovation across disciplines.'
    },
    {
      name: 'Dr. Sandeep Singh',
      title: 'Dean of Student Affairs',
      image: 'https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&w=1600',
      bio: 'Dr. Singh ensures a supportive and enriching environment for all students at UMS.'
    }
  ];

  const boardMembers = [
    {
      name: 'Rajiv Menon',
      title: 'Board Chair',
      affiliation: 'CEO, Bharat Technologies'
    },
    {
      name: 'Dr. Neha Gupta',
      title: 'Board Member',
      affiliation: 'Research Director, Innovation India Institute'
    },
    {
      name: 'Amitabh Desai',
      title: 'Board Member',
      affiliation: 'Partner, Education Ventures India'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">University Leadership</h1>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated leaders who guide our institution's mission and shape its future.
          </p>
        </div>

        {/* Executive Leadership */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Executive Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-blue-800 font-medium mb-4">{leader.title}</p>
                  <p className="text-gray-600">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Board of Trustees */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Board of Trustees</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-800 font-medium mb-2">{member.title}</p>
                <p className="text-gray-600">{member.affiliation}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Values */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Leadership Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vision</h3>
              <p className="text-gray-600">
                Guiding UniVersa towards excellence in education, research, and community impact.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Embracing new ideas and approaches to advance education and research.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                Maintaining the highest standards of ethics and transparency in all operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;