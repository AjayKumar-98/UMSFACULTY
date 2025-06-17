import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const programs = [
  {
    id: 1,
    title: 'Engineering & Technology',
    description: 'Cutting-edge programs in various engineering disciplines, including Computer Science, Mechanical, and Electrical Engineering.',
    image: 'https://images.pexels.com/photos/159844/cellular-network-computer-cyber-information-technology-159844.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '/academics/engineering',
  },
  {
    id: 2,
    title: 'Business & Management',
    description: 'Comprehensive business education with specializations in Finance, Marketing, Human Resources, and International Business.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '/academics/business',
  },
  {
    id: 3,
    title: 'Arts & Humanities',
    description: 'Explore literature, history, philosophy, fine arts, and cultural studies with our expert faculty.',
    image: 'https://images.pexels.com/photos/159862/art-school-of-athens-raphael-italian-painter-fresco-159862.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '/academics/arts',
  },
  {
    id: 4,
    title: 'Science & Research',
    description: 'Rigorous programs in Physics, Chemistry, Biology, and Mathematics with state-of-the-art laboratory facilities.',
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '/academics/science',
  },
];

const AcademicsSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Academic Excellence</h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Explore our diverse range of undergraduate and graduate programs designed to prepare you for success in your chosen field.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {programs.map((program) => (
            <div 
              key={program.id} 
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
              <img 
                src={program.image} 
                alt={program.title} 
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                <p className="text-gray-200 mb-4 line-clamp-2">{program.description}</p>
                <Link 
                  to={program.link}
                  className="inline-flex items-center text-white hover:text-blue-200 transition-colors"
                >
                  Learn more <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold text-center mb-6">Explore All Academic Programs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
            <Link 
              to="/academics/undergraduate"
              className="text-center py-3 px-6 rounded-lg bg-blue-800 text-white hover:bg-blue-700 transition-colors"
            >
              Undergraduate
            </Link>
            <Link 
              to="/academics/graduate"
              className="text-center py-3 px-6 rounded-lg bg-blue-800 text-white hover:bg-blue-700 transition-colors"
            >
              Graduate
            </Link>
            <Link 
              to="/academics/phd"
              className="text-center py-3 px-6 rounded-lg bg-blue-800 text-white hover:bg-blue-700 transition-colors"
            >
              Doctoral
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;