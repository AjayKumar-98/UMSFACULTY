import React from 'react';
import { BookOpen, Award, MapPin, Globe, Library, Briefcase } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transform transition hover:scale-105">
    <div className="inline-flex items-center justify-center w-16 h-16 text-blue-800 bg-blue-100 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <BookOpen size={32} />,
      title: 'World-Class Education',
      description: 'Learn from distinguished faculty members who are leaders in their fields.',
    },
    {
      icon: <Award size={32} />,
      title: 'Accredited Programs',
      description: 'All our programs are internationally recognized and accredited by leading agencies.',
    },
    {
      icon: <MapPin size={32} />,
      title: 'Modern Campus',
      description: 'State-of-the-art facilities designed to enhance your learning experience.',
    },
    {
      icon: <Globe size={32} />,
      title: 'Global Network',
      description: 'Connect with students and faculty from over 50 countries around the world.',
    },
    {
      icon: <Library size={32} />,
      title: 'Research Opportunities',
      description: 'Engage in groundbreaking research with real-world applications.',
    },
    {
      icon: <Briefcase size={32} />,
      title: 'Career Services',
      description: 'Comprehensive career guidance and placement assistance for all students.',
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose UniVersa</h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Discover the unique advantages that set our university apart and make it the ideal choice for your educational journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;