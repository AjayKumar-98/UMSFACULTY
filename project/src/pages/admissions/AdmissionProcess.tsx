import React from 'react';
import { CheckCircle, Calendar, FileText, Users, BookOpen } from 'lucide-react';

const AdmissionProcess: React.FC = () => {
    const admissionPaths = [
        {
            title: 'EAMCET Counseling',
            description: 'Admission through state-level engineering entrance examination',
            steps: [
                'Register for EAMCET counseling with your rank card',
                'Choose UMS in web counseling',
                'Pay the processing fee',
                'Document verification at helpline center',
                'Seat allotment based on rank and preferences',
                'Report to college and complete admission'
            ],
            requirements: [
                'Valid EAMCET rank card',
                'Class 12 marks memo',
                'Transfer certificate',
                'Category certificates (if applicable)',
                'Aadhar card'
            ],
            icon: <Users className="w-12 h-12 text-blue-800" />
        },
        {
            title: 'University Entrance Exam',
            description: 'Direct admission through UMS entrance examination',
            steps: [
                'Apply for UMS entrance exam online',
                'Download hall ticket',
                'Appear for entrance examination',
                'Check results and merit list',
                'Attend counseling if selected',
                'Complete admission formalities'
            ],
            requirements: [
                'Entrance exam application',
                'Class 12 marks memo',
                'Valid ID proof',
                'Passport size photographs',
                'Category certificates (if applicable)'
            ],
            icon: <BookOpen className="w-12 h-12 text-blue-800" />
        },
        {
            title: 'Direct Admission',
            description: 'Limited seats through management quota',
            steps: [
                'Submit direct admission application',
                'Initial screening of application',
                'Interview with admission committee',
                'Merit list declaration',
                'Fee payment',
                'Document verification and admission'
            ],
            requirements: [
                'Direct admission application',
                'Class 12 marks memo',
                'Transfer certificate',
                'Character certificate',
                'Migration certificate (if applicable)'
            ],
            icon: <FileText className="w-12 h-12 text-blue-800" />
        }
    ];

    const importantDates = [
        {
            event: 'EAMCET Counseling Registration',
            date: 'June 15 - July 15, 2024'
        },
        {
            event: 'University Entrance Exam',
            date: 'May 20, 2024'
        },
        {
            event: 'Entrance Exam Results',
            date: 'June 5, 2024'
        },
        {
            event: 'Direct Admission Applications',
            date: 'April 1 - June 30, 2024'
        },
        {
            event: 'First Round Counseling',
            date: 'July 20 - July 25, 2024'
        },
        {
            event: 'Classes Commence',
            date: 'August 1, 2024'
        }
    ];

    return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Admission Process</h1>
                    <div className="w-20 h-1 bg-blue-800 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Multiple pathways to join UMS. Choose the admission process that best suits your qualifications and preferences.
                    </p>
                </div>

                {/* Admission Paths */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {admissionPaths.map((path, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="p-6">
                                <div className="flex items-center justify-center mb-6">
                                    {path.icon}
                                </div>
                                <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">{path.title}</h2>
                                <p className="text-gray-600 text-center mb-6">{path.description}</p>

                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Process Steps</h3>
                                    <ul className="space-y-2">
                                        {path.steps.map((step, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                                                <span className="text-gray-600">{step}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Required Documents</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                                        {path.requirements.map((req, idx) => (
                                            <li key={idx}>{req}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Important Dates */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="flex items-center mb-6">
                        <Calendar className="w-6 h-6 text-blue-800" />
                        <h2 className="ml-3 text-2xl font-bold text-gray-900">Important Dates</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {importantDates.map((item, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">{item.event}</h3>
                                <p className="text-blue-800 font-medium">{item.date}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Information */}
                <div className="mt-12 bg-blue-800 text-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
                    <p className="mb-4">
                        Our admission counselors are here to help you through every step of the process.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="font-semibold">Admission Office</p>
                            <p>Phone: (123) 456-7890</p>
                            <p>Email: admissions@ums.edu</p>
                        </div>
                        <div>
                            <p className="font-semibold">Working Hours</p>
                            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                            <p>Saturday: 9:00 AM - 1:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdmissionProcess; 