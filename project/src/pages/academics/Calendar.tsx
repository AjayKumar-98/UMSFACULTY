import React from 'react';

const Calendar = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Academic Calendar</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Fall Semester */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Fall Semester 2024</h2>
                    <ul className="space-y-3">
                        <li className="flex justify-between">
                            <span className="font-medium">Classes Begin</span>
                            <span>August 26, 2024</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="font-medium">Labor Day Holiday</span>
                            <span>September 2, 2024</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="font-medium">Fall Break</span>
                            <span>October 14-15, 2024</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="font-medium">Thanksgiving Break</span>
                            <span>November 27-29, 2024</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="font-medium">Last Day of Classes</span>
                            <span>December 6, 2024</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="font-medium">Final Exams</span>
                            <span>December 9-13, 2024</span>
                        </li>
                    </ul>
                </div>

                {/* Spring Semester */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Spring Semester 2025</h2>
                    <ul className="space-y-3">
                        <li className="flex justify-between">
                            <span className="font-medium">Classes Begin</span>
                            <span>January 13, 2025</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="font-medium">MLK Jr. Holiday</span>
                            <span>January 20, 2025</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="font-medium">Spring Break</span>
                            <span>March 10-14, 2025</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="font-medium">Last Day of Classes</span>
                            <span>April 25, 2025</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="font-medium">Final Exams</span>
                            <span>April 28 - May 2, 2025</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="font-medium">Commencement</span>
                            <span>May 10, 2025</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Calendar; 