import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Choose Your Program',
    description: 'Browse our comprehensive list of undergraduate, graduate, and doctoral programs.',
    link: '/academics/programs',
  },
  {
    id: 2,
    title: 'Check Requirements',
    description: 'Review admission requirements and ensure you meet the criteria for your chosen program.',
    link: '/admissions/requirements',
  },
  {
    id: 3,
    title: 'Submit Application',
    description: 'Complete the online application form and submit all required documents.',
    link: '/admissions/apply',
  },
  {
    id: 4,
    title: 'Track Your Application',
    description: 'Monitor the status of your application through our secure portal.',
    link: '/admissions/status',
  },
];

const AdmissionsSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join Our University</h2>
            <div className="w-20 h-1 bg-blue-800 mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">
              Embarking on your educational journey is an important decision. At UniVersa, we're committed to making your 
              application process as smooth as possible. Our admissions team is ready to guide you every step of the way.
            </p>

            <div className="space-y-6 mb-8">
              {steps.map((step) => (
                <div key={step.id} className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800">
                      {step.id}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                    <p className="text-gray-600 mt-1">{step.description}</p>
                    <Link 
                      to={step.link}
                      className="inline-flex items-center mt-2 text-blue-800 hover:text-blue-700 text-sm"
                    >
                      Learn more <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/admissions/apply"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 transition-colors"
            >
              Start Your Application
            </Link>
          </div>

          <div className="md:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Students applying to university" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-8">
                  <h3 className="text-white text-2xl font-bold mb-2">Key Dates & Deadlines</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-white">
                      <CheckCircle className="mr-2 h-5 w-5 text-blue-400" />
                      <span>Early Decision: November 15</span>
                    </li>
                    <li className="flex items-center text-white">
                      <CheckCircle className="mr-2 h-5 w-5 text-blue-400" />
                      <span>Regular Decision: January 15</span>
                    </li>
                    <li className="flex items-center text-white">
                      <CheckCircle className="mr-2 h-5 w-5 text-blue-400" />
                      <span>Transfer Students: March 1</span>
                    </li>
                    <li className="flex items-center text-white">
                      <CheckCircle className="mr-2 h-5 w-5 text-blue-400" />
                      <span>Graduate Programs: Varies by department</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;