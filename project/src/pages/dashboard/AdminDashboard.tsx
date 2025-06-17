import React, { useEffect } from 'react';
import { Users, Building, ChartBar, Settings, Bell, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
    const navigate = useNavigate();
    const userName = localStorage.getItem('userName') || 'Administrator';
    const userRole = localStorage.getItem('userRole');

    useEffect(() => {
        // Protect the route - only allow admin
        if (!userRole || userRole !== 'admin') {
            navigate('/login');
        }
    }, [navigate, userRole]);

    return (
        <div className="min-h-screen bg-gray-100 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                    <p className="mt-2 text-gray-600">Welcome back, {userName}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* User Statistics */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center mb-4">
                            <Users className="h-6 w-6 text-blue-600 mr-2" />
                            <h2 className="text-xl font-semibold text-gray-900">User Statistics</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span>Total Students</span>
                                <span className="text-lg font-semibold text-blue-600">5,234</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Total Faculty</span>
                                <span className="text-lg font-semibold text-blue-600">312</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Active Users</span>
                                <span className="text-lg font-semibold text-green-600">4,890</span>
                            </div>
                        </div>
                    </div>

                    {/* Department Overview */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center mb-4">
                            <Building className="h-6 w-6 text-blue-600 mr-2" />
                            <h2 className="text-xl font-semibold text-gray-900">Departments</h2>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span>Engineering</span>
                                <span className="text-sm text-blue-600">1,245 Students</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Science</span>
                                <span className="text-sm text-blue-600">890 Students</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Business</span>
                                <span className="text-sm text-blue-600">780 Students</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Arts</span>
                                <span className="text-sm text-blue-600">650 Students</span>
                            </div>
                        </div>
                    </div>

                    {/* System Performance */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center mb-4">
                            <ChartBar className="h-6 w-6 text-blue-600 mr-2" />
                            <h2 className="text-xl font-semibold text-gray-900">System Performance</h2>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span>Server Load</span>
                                    <span>45%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span>Database Usage</span>
                                    <span>72%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '72%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span>Storage</span>
                                    <span>30%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Security Alerts */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center mb-4">
                            <Shield className="h-6 w-6 text-blue-600 mr-2" />
                            <h2 className="text-xl font-semibold text-gray-900">Security Alerts</h2>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-center text-sm text-red-600">
                                <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                                Multiple failed login attempts - IP: 192.168.1.105
                            </li>
                            <li className="flex items-center text-sm text-yellow-600">
                                <span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
                                System update required - Security patch available
                            </li>
                            <li className="flex items-center text-sm text-green-600">
                                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                                Firewall rules updated successfully
                            </li>
                        </ul>
                    </div>

                    {/* Recent Activities */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center mb-4">
                            <Settings className="h-6 w-6 text-blue-600 mr-2" />
                            <h2 className="text-xl font-semibold text-gray-900">Recent Activities</h2>
                        </div>
                        <ul className="space-y-3">
                            <li className="text-sm">
                                <span className="text-gray-500">2 min ago:</span> New faculty account created
                            </li>
                            <li className="text-sm">
                                <span className="text-gray-500">15 min ago:</span> Course schedule updated
                            </li>
                            <li className="text-sm">
                                <span className="text-gray-500">1 hour ago:</span> System backup completed
                            </li>
                            <li className="text-sm">
                                <span className="text-gray-500">2 hours ago:</span> Database optimization performed
                            </li>
                        </ul>
                    </div>

                    {/* Notifications */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center mb-4">
                            <Bell className="h-6 w-6 text-blue-600 mr-2" />
                            <h2 className="text-xl font-semibold text-gray-900">System Notifications</h2>
                        </div>
                        <ul className="space-y-3">
                            <li className="text-sm">
                                <span className="text-red-600">Critical:</span> Server maintenance scheduled for tonight
                            </li>
                            <li className="text-sm">
                                <span className="text-yellow-600">Warning:</span> High traffic detected on registration portal
                            </li>
                            <li className="text-sm">
                                <span className="text-green-600">Info:</span> New academic calendar published
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard; 