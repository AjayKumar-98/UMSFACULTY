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
        contact: '+91 98765 43210',
        gender: 'Male',
        dob: '1975-08-15',
        group: 'A',
        fatherName: 'Shri Ram Kumar',
        nationality: 'Indian',
        religion: 'Hindu',
        caste: 'General',
        motherTongue: 'Telugu',
        otherMobile: '+91 98765 43211',
        aadhar: '1234-5678-9012',
        pan: 'ABCDE1234F',
        photo: 'https://randomuser.me/api/portraits/men/32.jpg'
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
        window.dispatchEvent(new Event('storage'));
        setSaveMessage('Settings saved successfully!');
        setTimeout(() => setSaveMessage(''), 2000);
    };

    const handleEnable2FA = () => {
        setTwoFactorEnabled(true);
        setSaveMessage('Two-Factor Authentication enabled!');
        setTimeout(() => setSaveMessage(''), 2000);
    };

    const tabs = [
        { id: 'profile', label: 'Profile', icon: <FaUser /> },
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

    useEffect(() => {
        localStorage.setItem('facultyProfile', JSON.stringify(profile));
    }, [profile]);

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
                                    ? 'bg-[#E6A2FF] text-[#490548]'
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
                                                                className="form-checkbox h-5 w-5 text-[#C71585]"
                                                            />
                                                        </label>
                                                    </td>
                                                    <td className="px-2 py-4 whitespace-nowrap">
                                                        <label className="inline-flex items-center">
                                                            <input
                                                                type="checkbox"
                                                                checked={setting.sms}
                                                                onChange={() => handleNotificationChange(index, 'sms')}
                                                                className="form-checkbox h-5 w-5 text-[#C71585]"
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
                                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C71585]"
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
                                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C71585]"
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
                                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C71585]"
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
                                                className="px-4 py-2 bg-[#C71585] text-white rounded-lg hover:bg-[#8D38A8]"
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
                                                    className="form-checkbox h-5 w-5 text-[#C71585]"
                                                    defaultChecked
                                                />
                                                <span className="ml-2 text-sm text-gray-700">
                                                    Show my profile to other faculty members
                                                </span>
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="form-checkbox h-5 w-5 text-[#C71585]"
                                                    defaultChecked
                                                />
                                                <span className="ml-2 text-sm text-gray-700">
                                                    Show my profile to students
                                                </span>
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="form-checkbox h-5 w-5 text-[#C71585]"
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
                                                    className="form-checkbox h-5 w-5 text-[#C71585]"
                                                    defaultChecked
                                                />
                                                <span className="ml-2 text-sm text-gray-700">
                                                    Show when I'm online
                                                </span>
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="form-checkbox h-5 w-5 text-[#C71585]"
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
                                                    className="form-checkbox h-5 w-5 text-[#C71585]"
                                                    defaultChecked
                                                />
                                                <span className="ml-2 text-sm text-gray-700">
                                                    Allow usage data collection for system improvement
                                                </span>
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="form-checkbox h-5 w-5 text-[#C71585]"
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

                        {/* Profile Settings */}
                        {activeTab === 'profile' && (
                            <div className="flex flex-col items-center justify-center">
                                <div className="w-full max-w-xl bg-white rounded-xl shadow-lg px-8 py-6 flex flex-col items-center">
                                    <div className="relative mb-4">
                                        <img
                                            src={profile.photo}
                                            alt="Profile"
                                            className="w-32 h-32 rounded-full object-cover border-4 border-blue-200 bg-gray-100"
                                        />
                                        <label htmlFor="profile-pic-upload" className="absolute bottom-2 right-2 bg-[#C71585] text-white rounded-full p-2 cursor-pointer shadow-lg hover:bg-[#8D38A8]" title="Edit Profile Picture">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487a2.25 2.25 0 1 1 3.182 3.182l-9.193 9.193a4.5 4.5 0 0 1-1.897 1.13l-3.06.918a.75.75 0 0 1-.927-.927l.918-3.06a4.5 4.5 0 0 1 1.13-1.897l9.193-9.193z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 6.75l-1.5-1.5" />
                                            </svg>
                                            <input
                                                id="profile-pic-upload"
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={e => {
                                                    const file = e.target.files && e.target.files[0];
                                                    if (file) {
                                                        const reader = new FileReader();
                                                        reader.onload = ev => {
                                                            setProfile(prev => {
                                                                const updated = { ...prev, photo: ev.target?.result as string };
                                                                localStorage.setItem('facultyProfile', JSON.stringify(updated));
                                                                return updated;
                                                            });
                                                        };
                                                        reader.readAsDataURL(file);
                                                    }
                                                }}
                                            />
                                        </label>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-6">{profile.name}</h2>
                                    <div className="w-full">
                                        <div className="grid grid-cols-2 gap-y-3 gap-x-8">
                                            <div className="text-gray-600">Email</div>
                                            <div className="font-semibold text-gray-900">{profile.email}</div>
                                            <div className="text-gray-600">Phone Number</div>
                                            <div className="font-semibold text-gray-900">{profile.contact}</div>
                                            <div className="text-gray-600">Gender</div>
                                            <div>{profile.gender}</div>
                                            <div className="text-gray-600">Date of Birth</div>
                                            <div>{profile.dob}</div>
                                            <div className="text-gray-600">Blood Group</div>
                                            <div>{profile.group}</div>
                                            <div className="text-gray-600">Father's Name</div>
                                            <div>{profile.fatherName}</div>
                                            <div className="text-gray-600">Nationality</div>
                                            <div>{profile.nationality}</div>
                                            <div className="text-gray-600">Religion</div>
                                            <div>{profile.religion}</div>
                                            <div className="text-gray-600">Caste</div>
                                            <div>{profile.caste}</div>
                                            <div className="text-gray-600">Mother Tongue</div>
                                            <div>{profile.motherTongue}</div>
                                            <div className="text-gray-600">Other Mobile No</div>
                                            <div>{profile.otherMobile}</div>
                                            <div className="text-gray-600">Aadhar No</div>
                                            <div>{profile.aadhar}</div>
                                            <div className="text-gray-600">PAN Card No</div>
                                            <div>{profile.pan}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Save Button */}
                        <div className="mt-6 flex justify-end">
                            <button className="px-4 py-2 bg-[#C71585] text-white rounded-lg hover:bg-[#8D38A8]" onClick={handleSave}>
                                Save Changes
                            </button>
                            {saveMessage && <span className="ml-4 text-[#C71585] font-medium">{saveMessage}</span>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;