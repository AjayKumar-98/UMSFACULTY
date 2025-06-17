import React from 'react';
import { CreditCard, BookOpen, Home, Briefcase } from 'lucide-react';

const FeeStructure: React.FC = () => {
    const courses = [
        {
            category: 'Undergraduate Programs',
            programs: [
                {
                    name: 'B.Tech (4 Years)',
                    tuitionFee: '₹1,25,000',
                    otherFees: '₹25,000',
                    total: '₹1,50,000'
                },
                {
                    name: 'BBA (3 Years)',
                    tuitionFee: '₹80,000',
                    otherFees: '₹20,000',
                    total: '₹1,00,000'
                },
                {
                    name: 'B.Sc (3 Years)',
                    tuitionFee: '₹70,000',
                    otherFees: '₹20,000',
                    total: '₹90,000'
                }
            ]
        },
        {
            category: 'Postgraduate Programs',
            programs: [
                {
                    name: 'M.Tech (2 Years)',
                    tuitionFee: '₹1,50,000',
                    otherFees: '₹30,000',
                    total: '₹1,80,000'
                },
                {
                    name: 'MBA (2 Years)',
                    tuitionFee: '₹2,00,000',
                    otherFees: '₹40,000',
                    total: '₹2,40,000'
                },
                {
                    name: 'M.Sc (2 Years)',
                    tuitionFee: '₹90,000',
                    otherFees: '₹25,000',
                    total: '₹1,15,000'
                }
            ]
        }
    ];

    const additionalFees = [
        {
            icon: <Home className="w-6 h-6 text-blue-800" />,
            name: 'Hostel Fees',
            amount: '₹80,000 per year',
            description: 'Including accommodation and mess facilities'
        },
        {
            icon: <BookOpen className="w-6 h-6 text-blue-800" />,
            name: 'Library Fees',
            amount: '₹5,000 per year',
            description: 'Access to library resources and digital materials'
        },
        {
            icon: <Briefcase className="w-6 h-6 text-blue-800" />,
            name: 'Lab Fees',
            amount: '₹15,000 per year',
            description: 'For technical and practical courses'
        }
    ];

    return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Fee Structure</h1>
                    <div className="w-20 h-1 bg-blue-800 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Comprehensive breakdown of tuition and other fees for various programs offered at UMS.
                    </p>
                </div>

                {/* Course Fees */}
                {courses.map((category, index) => (
                    <div key={index} className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Program
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Tuition Fee (Per Year)
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Other Fees
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Total
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {category.programs.map((program, idx) => (
                                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {program.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {program.tuitionFee}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {program.otherFees}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-800">
                                                {program.total}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}

                {/* Additional Fees */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Fees</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {additionalFees.map((fee, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                                <div className="flex items-center mb-4">
                                    {fee.icon}
                                    <h3 className="ml-3 text-lg font-semibold text-gray-900">{fee.name}</h3>
                                </div>
                                <p className="text-2xl font-bold text-blue-800 mb-2">{fee.amount}</p>
                                <p className="text-gray-600">{fee.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Payment Information */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="flex items-center mb-6">
                        <CreditCard className="w-6 h-6 text-blue-800" />
                        <h2 className="ml-3 text-2xl font-bold text-gray-900">Payment Options</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Online Payment through Student Portal</li>
                                <li>• Net Banking</li>
                                <li>• Credit/Debit Cards</li>
                                <li>• Bank Transfer</li>
                                <li>• Demand Draft</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Schedule</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>• First Installment: At the time of admission</li>
                                <li>• Second Installment: Before semester exams</li>
                                <li>• Late payment fee applicable after due date</li>
                                <li>• EMI options available through partner banks</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeeStructure; 