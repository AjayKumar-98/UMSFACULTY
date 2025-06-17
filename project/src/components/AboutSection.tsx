import React from 'react';
import { Trophy, BookOpen, Users, GraduationCap } from 'lucide-react';
import CountUp from 'react-countup';

interface StatProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

const Stat: React.FC<StatProps> = ({ icon, value, label, prefix, suffix }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md transform transition-transform hover:scale-105">
    <div className="text-blue-800 mb-3">{icon}</div>
    <div className="flex items-baseline mb-1">
      {prefix && <span className="text-2xl font-bold text-gray-800 mr-1">{prefix}</span>}
      <CountUp
        end={value}
        duration={2.5}
        separator=","
        className="text-4xl font-bold text-gray-800"
      />
      {suffix && <span className="text-2xl font-bold text-gray-800 ml-1">{suffix}</span>}
    </div>
    <div className="text-sm text-gray-600 uppercase tracking-wider">{label}</div>
  </div>
);

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About UniVersa</h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            A premier institution committed to academic excellence, innovation, and preparing students
            for global leadership roles since 1985.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative rounded-lg overflow-hidden h-[400px]">
            <img
              src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="University Campus"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Excellence in Education</h3>
            <p className="text-gray-600 mb-6">
              UniVersa University stands as a beacon of academic excellence and innovation. 
              With a rich history spanning over three decades, we have consistently ranked 
              among the top educational institutions globally.
            </p>
            <p className="text-gray-600 mb-6">
              Our commitment to providing a holistic education extends beyond classroom learning. 
              We foster an environment where students can explore their interests, develop critical 
              thinking skills, and prepare for leadership roles in a rapidly changing world.
            </p>
            <p className="text-gray-600">
              With state-of-the-art facilities, a diverse community of scholars, and strong 
              industry partnerships, UniVersa offers an unparalleled educational experience 
              focused on academic rigor and practical application.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Stat 
            icon={<GraduationCap size={32} />} 
            value={35000} 
            label="Students" 
          />
          <Stat 
            icon={<Users size={32} />} 
            value={1200} 
            label="Faculty Members" 
          />
          <Stat 
            icon={<BookOpen size={32} />} 
            value={150} 
            label="Programs Offered" 
          />
          <Stat 
            icon={<Trophy size={32} />} 
            value={50} 
            label="Years of Excellence" 
            prefix="+" 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;