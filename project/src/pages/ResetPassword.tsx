import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const ResetPassword: React.FC = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');

    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: ''
    });
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
        type: null,
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: null, message: '' });

        // Validate passwords
        if (formData.password.length < 8) {
            setStatus({
                type: 'error',
                message: 'Password must be at least 8 characters long.'
            });
            setIsSubmitting(false);
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setStatus({
                type: 'error',
                message: 'Passwords do not match.'
            });
            setIsSubmitting(false);
            return;
        }

        try {
            // In a real application, this would be an API call to your backend
            // For demonstration, we'll simulate the API call
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API delay

            // Validate token (in a real app, this would be done by the backend)
            if (!token) {
                throw new Error('Invalid or expired reset link.');
            }

            setStatus({
                type: 'success',
                message: 'Password has been successfully reset. Redirecting to login...'
            });

            // Redirect to login after 2 seconds
            setTimeout(() => {
                navigate('/login');
            }, 2000);

        } catch (error) {
            setStatus({
                type: 'error',
                message: error instanceof Error ? error.message : 'An error occurred. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!token) {
        return (
            <div className="min-h-screen bg-gray-100 pt-28 pb-10">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <div className="text-center text-red-600">
                            Invalid or expired reset link. Please request a new password reset.
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 pt-28 pb-10">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">Set New Password</h2>
                <div className="mt-4 text-center text-sm text-gray-600">
                    <p>Please enter your new password below.</p>
                </div>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                New Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter new password"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                Confirm New Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    required
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Confirm new password"
                                />
                            </div>
                        </div>

                        {status.message && (
                            <div className={`text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                                {status.message}
                            </div>
                        )}

                        <div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${isSubmitting
                                    ? 'bg-blue-400 cursor-not-allowed'
                                    : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                                    }`}
                            >
                                {isSubmitting ? 'Resetting...' : 'Reset Password'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword; 