import React, { useState, useEffect } from 'react';
import { FaUser, FaBell, FaLock } from 'react-icons/fa';
import { MdNotifications, MdPrivacyTip } from 'react-icons/md';

interface NotificationSetting {
    type: string;
    email: boolean;
    push: boolean;
    sms: boolean;
}

const Settings: React.FC = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [notificationSettings, setNotificationSettings] = useState<NotificationSetting[]>([
        { type: 'Student Submissions', email: true, push: true, sms: false },
        { type: 'Course Updates', email: true, push: false, sms: false },
        { type: 'Meeting Reminders', email: true, push: true, sms: true },
        { type: 'Grade Publishing', email: true, push: true, sms: false },
        { type: 'System Announcements', email: true, push: false, sms: false }
    ]);

    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('english');
    const [timeZone, setTimeZone] = useState('UTC+5:30');

    const [passwords, setPasswords] = useState({ current: '', new: '', confirm: '' });
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
    const [saveMessage, setSaveMessage] = useState('');

    const [profile, setProfile] = useState({
        name: 'Dr. Anil Kumar',
        email: 'anil.kumar@university.edu.in',
        department: 'Computer Science',
        office: 'Room 301, Building A',
        contact: '+91 98765 43210',
        photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    });

    const handleNotificationChange = (index: number, channel: 'email' | 'push' | 'sms') => {
        const newSettings = [...notificationSettings];
        newSettings[index] = {
            ...newSettings[index],
            [channel]: !newSettings[index][channel]
        };
        setNotificationSettings(newSettings);
    };

    const handleSave = () => {
        localStorage.setItem('facultyProfile', JSON.stringify(profile));
        setSaveMessage('Settings saved successfully!');
        setTimeout(() => setSaveMessage(''), 2000);
    };

    const handleEnable2FA = () => {
        setTwoFactorEnabled(true);
        setSaveMessage('Two-Factor Authentication enabled!');
        setTimeout(() => setSaveMessage(''), 2000);
    };

    const tabs = [
        { id: 'profile', label: 'Profile Settings', icon: <FaUser /> },
        { id: 'notifications', label: 'Notifications', icon: <FaBell /> },
        { id: 'security', label: 'Security', icon: <FaLock /> },
        { id: 'privacy', label: 'Privacy', icon: <MdPrivacyTip /> }
    ];

    // Theme effect
    React.useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else if (theme === 'light') {
            document.documentElement.classList.remove('dark');
        } else if (theme === 'system') {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    }, [theme]);

    useEffect(() => {
        const stored = localStorage.getItem('facultyProfile');
        if (stored) setProfile(JSON.parse(stored));
    }, []);

    return (
        <div className="container mx-auto px-4 py-8 bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Settings</h1>

            <div className="flex flex-col md:flex-row gap-6">
                {/* Settings Navigation */}
                <div className="w-full md:w-64">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center px-4 py-3 text-left ${activeTab === tab.id
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-gray-700 hover:bg-gray-50'
                                    }`}
                            >
                                <span className="mr-3">{tab.icon}</span>
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Settings Content */}
                <div className="flex-1">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                        {/* Profile Settings */}
                        {activeTab === 'profile' && (
                            <div>
                                <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Display Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={profile.name}
                                            onChange={e => setProfile(p => ({ ...p, name: e.target.value }))}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={profile.email}
                                            onChange={e => setProfile(p => ({ ...p, email: e.target.value }))}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Department
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={profile.department}
                                            onChange={e => setProfile(p => ({ ...p, department: e.target.value }))}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Office Location
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={profile.office}
                                            onChange={e => setProfile(p => ({ ...p, office: e.target.value }))}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Contact Number
                                        </label>
                                        <input
                                            type="tel"
                                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={profile.contact}
                                            onChange={e => setProfile(p => ({ ...p, contact: e.target.value }))}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Profile Photo URL
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={profile.photo}
                                            onChange={e => setProfile(p => ({ ...p, photo: e.target.value }))}
                                        />
                                        <img src={profile.photo} alt="Profile Preview" className="w-20 h-20 rounded-full mt-2 border" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Notification Settings */}
                        {activeTab === 'notifications' && (
                            <div>
                                <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Notification Type
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Email
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    SMS
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {notificationSettings.map((setting, index) => (
                                                <tr key={setting.type}>
                                                    <td className="px-2 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{setting.type}</div>
                                                    </td>
                                                    <td className="px-2 py-4 whitespace-nowrap">
                                                        <label className="inline-flex items-center">
                                                            <input
                                                                type="checkbox"
                                                                checked={setting.email}
                                                                onChange={() => handleNotificationChange(index, 'email')}
                                                                className="form-checkbox h-5 w-5 text-blue-600"
                                                            />
                                                        </label>
                                                    </td>
                                                    <td className="px-2 py-4 whitespace-nowrap">
                                                        <label className="inline-flex items-center">
                                                            <input
                                                                type="checkbox"
                                                                checked={setting.sms}
                                                                onChange={() => handleNotificationChange(index, 'sms')}
                                                                className="form-checkbox h-5 w-5 text-blue-600"
                                                            />
                                                        </label>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {/* Security Settings */}
                        {activeTab === 'security' && (
                            <div>
                                <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-medium mb-2">Change Password</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Current Password
                                                </label>
                                                <input
                                                    type="password"
                                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    value={passwords.current}
                                                    onChange={e => setPasswords(p => ({ ...p, current: e.target.value }))}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    New Password
                                                </label>
                                                <input
                                                    type="password"
                                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    value={passwords.new}
                                                    onChange={e => setPasswords(p => ({ ...p, new: e.target.value }))}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Confirm New Password
                                                </label>
                                                <input
                                                    type="password"
                                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    value={passwords.confirm}
                                                    onChange={e => setPasswords(p => ({ ...p, confirm: e.target.value }))}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium mb-2">Two-Factor Authentication</h3>
                                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                            <div>
                                                <p className="text-sm text-gray-700">Enhance your account security</p>
                                                <p className="text-xs text-gray-500">
                                                    Add an extra layer of security to your account
                                                </p>
                                            </div>
                                            <button
                                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                                onClick={handleEnable2FA}
                                                disabled={twoFactorEnabled}
                                            >
                                                {twoFactorEnabled ? 'Enabled' : 'Enable'}
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium mb-2">Login History</h3>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                                <div>
                                                    <p className="text-sm font-medium">Windows PC - Chrome</p>
                                                    <p className="text-xs text-gray-500">Last accessed: 2 hours ago</p>
                                                </div>
                                                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                                                    Current
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                                <div>
                                                    <p className="text-sm font-medium">iPhone - Safari</p>
                                                    <p className="text-xs text-gray-500">Last accessed: Yesterday</p>
                                                </div>
                                                <button className="text-red-600 text-sm hover:text-red-700">
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Privacy Settings */}
                        {activeTab === 'privacy' && (
                            <div>
                                <h2 className="text-xl font-semibold mb-4">Privacy Settings</h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-medium mb-2">Profile Visibility</h3>
                                        <div className="space-y-3">
                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="form-checkbox h-5 w-5 text-blue-600"
                                                    defaultChecked
                                                />
                                                <span className="ml-2 text-sm text-gray-700">
                                                    Show my profile to other faculty members
                                                </span>
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="form-checkbox h-5 w-5 text-blue-600"
                                                    defaultChecked
                                                />
                                                <span className="ml-2 text-sm text-gray-700">
                                                    Show my profile to students
                                                </span>
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="form-checkbox h-5 w-5 text-blue-600"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">
                                                    Show my email address publicly
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium mb-2">Activity Status</h3>
                                        <div className="space-y-3">
                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="form-checkbox h-5 w-5 text-blue-600"
                                                    defaultChecked
                                                />
                                                <span className="ml-2 text-sm text-gray-700">
                                                    Show when I'm online
                                                </span>
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="form-checkbox h-5 w-5 text-blue-600"
                                                    defaultChecked
                                                />
                                                <span className="ml-2 text-sm text-gray-700">
                                                    Show my last active status
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium mb-2">Data Usage</h3>
                                        <div className="space-y-3">
                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="form-checkbox h-5 w-5 text-blue-600"
                                                    defaultChecked
                                                />
                                                <span className="ml-2 text-sm text-gray-700">
                                                    Allow usage data collection for system improvement
                                                </span>
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="form-checkbox h-5 w-5 text-blue-600"
                                                    defaultChecked
                                                />
                                                <span className="ml-2 text-sm text-gray-700">
                                                    Receive personalized recommendations
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Save Button */}
                        <div className="mt-6 flex justify-end">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" onClick={handleSave}>
                                Save Changes
                            </button>
                            {saveMessage && <span className="ml-4 text-green-600 font-medium">{saveMessage}</span>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;