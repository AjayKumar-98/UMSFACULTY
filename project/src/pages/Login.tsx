import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

interface LoginData {
    email: string;
    password: string;
}

interface ValidationErrors {
    email?: string;
    password?: string;
    general?: string;
}

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<LoginData>({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState<ValidationErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Hide footer when Login page is mounted
    useEffect(() => {
        const footer = document.querySelector('footer');
        if (footer) {
            footer.style.display = 'none';
        }
        // Show footer when component unmounts
        return () => {
            if (footer) {
                footer.style.display = 'block';
            }
        };
    }, []);

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const determineRole = (email: string): string | null => {
        if (email.endsWith('@gmail.com')) return 'student';
        if (email.endsWith('@gmail.in')) return 'faculty';
        if (email.endsWith('@gmail.info')) return 'admin';
        return null;
    };

    const validateForm = (): boolean => {
        const newErrors: ValidationErrors = {};
        let isValid = true;

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
            isValid = false;
        } else if (!determineRole(formData.email)) {
            newErrors.email = 'Invalid email domain. Use @gmail.com for students, @gmail.in for faculty, or @gmail.info for admin';
            isValid = false;
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrors({});

        if (!validateForm()) {
            setIsSubmitting(false);
            return;
        }

        try {
            // Mock login data for demonstration
            const mockUsers = {
                'student@gmail.com': { role: 'student', password: 'student123', name: 'John Doe' },
                'faculty@gmail.in': { role: 'faculty', password: 'faculty123', name: 'Dr. Sarah Wilson' },
                'admin@gmail.info': { role: 'admin', password: 'admin123', name: 'Admin Smith' }
            };

            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            const role = determineRole(formData.email);
            const user = mockUsers[formData.email as keyof typeof mockUsers];

            if (!user) {
                setErrors({ general: 'Invalid email address. User not found.' });
                return;
            }

            if (user.password !== formData.password) {
                setErrors({ general: 'Incorrect password. Please try again.' });
                return;
            }

            if (user.role !== role) {
                setErrors({ general: 'Invalid credentials. Please check your email and password.' });
                return;
            }

            // Store user info in localStorage
            localStorage.setItem('userRole', role);
            localStorage.setItem('userName', user.name);
            localStorage.setItem('userEmail', formData.email);

            // Redirect based on role
            if (role === 'student') {
                navigate('/dashboard/student');
            } else if (role === 'faculty') {
                navigate('/faculty-dashboard');
            } else {
                navigate('/dashboard/admin');
            }

        } catch (error) {
            setErrors({ general: 'An error occurred. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name as keyof ValidationErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 pt-28 pb-10">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">UMS Login</h2>
                <div className="mt-4 text-center text-sm text-gray-600">
                    <p>Welcome to the University Management System</p>
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
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={`appearance-none block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'
                                        } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                                    placeholder="Enter your institutional email"
                                />
                            </div>
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className={`appearance-none block w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'
                                        } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                                    placeholder="Enter your password"
                                />
                            </div>
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                            )}
                            <div className="mt-2 text-right">
                                <Link
                                    to="/forgot-password"
                                    className="text-sm font-medium text-blue-600 hover:text-blue-500"
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>

                        {errors.general && (
                            <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md p-3">
                                {errors.general}
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
                                {isSubmitting ? 'Signing in...' : 'Sign in'}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Demo Credentials</span>
                            </div>
                        </div>
                        <div className="mt-4 text-xs text-gray-500 space-y-1">
                            <p>Student: student@gmail.com / student123</p>
                            <p>Faculty: faculty@gmail.in / faculty123</p>
                            <p>Admin: admin@gmail.info / admin123</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login; 