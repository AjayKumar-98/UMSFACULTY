import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
        type: null,
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: null, message: '' });

        try {
            // Email validation
            if (!email.trim()) {
                throw new Error('Email is required.');
            }

            if (!validateEmail(email)) {
                throw new Error('Please enter a valid email address.');
            }

            // In a real application, this would be an API call to your backend
            // For demonstration, we'll simulate the API call
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API delay

            // Mock check if email exists and domain validation
            const mockUsers = ['student@gmail.com', 'faculty@gmail.in', 'admin@gmail.info'];
            if (!mockUsers.includes(email)) {
                if (email.endsWith('@gmail.com') || email.endsWith('@gmail.in') || email.endsWith('@gmail.info')) {
                    throw new Error('Email not found in our records.');
                } else {
                    throw new Error('Invalid email domain. Use @gmail.com for students, @gmail.in for faculty, or @gmail.info for admin');
                }
            }

            // If email exists, show success message
            setStatus({
                type: 'success',
                message: 'Password reset link has been sent to your email address. Please check your inbox.'
            });

            // Clear the form
            setEmail('');

        } catch (error) {
            setStatus({
                type: 'error',
                message: error instanceof Error ? error.message : 'An error occurred. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 pt-28 pb-10">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">Reset Password</h2>
                <div className="mt-4 text-center text-sm text-gray-600">
                    <p>Enter your email address and we'll send you a link to reset your password.</p>
                </div>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        // Clear error message when user starts typing
                                        if (status.type === 'error') {
                                            setStatus({ type: null, message: '' });
                                        }
                                    }}
                                    className={`appearance-none block w-full px-3 py-2 border ${status.type === 'error' ? 'border-red-500' : 'border-gray-300'
                                        } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                                    placeholder="Enter your institutional email"
                                />
                            </div>
                            <p className="mt-2 text-xs text-gray-500">
                                Use @gmail.com (students), @gmail.in (faculty), or @gmail.info (admin)
                            </p>
                        </div>

                        {status.message && (
                            <div className={`text-sm ${status.type === 'success'
                                ? 'text-green-600 bg-green-50 border border-green-200'
                                : 'text-red-600 bg-red-50 border border-red-200'
                                } rounded-md p-3`}>
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
                                {isSubmitting ? 'Sending...' : 'Send Reset Link'}
                            </button>
                        </div>

                        <div className="text-sm text-center">
                            <Link
                                to="/login"
                                className="font-medium text-blue-600 hover:text-blue-500"
                            >
                                Back to Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword; 