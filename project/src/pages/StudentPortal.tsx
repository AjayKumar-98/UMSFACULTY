import React, { useState } from 'react';
import { Mail, Lock, LogIn } from 'lucide-react';

const StudentPortal: React.FC = () => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: '', password: '' };

    if (!loginForm.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(loginForm.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!loginForm.password) {
      newErrors.password = 'Password is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real app, you would handle authentication here
      alert('Login successful! This is just a demo.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="md:flex">
              {/* Image Section */}
              <div className="hidden md:block md:w-1/2 bg-cover" style={{
                backgroundImage: `url('https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
                backgroundPosition: 'center'
              }}>
                <div className="h-full w-full bg-blue-900 bg-opacity-50 flex items-center justify-center p-12">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Welcome Back!</h2>
                    <p className="text-white">
                      Access your courses, grades, schedule, and more through the student portal.
                    </p>
                  </div>
                </div>
              </div>

              {/* Form Section */}
              <div className="md:w-1/2 p-8">
                <div className="mb-6 md:hidden text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Student Portal</h2>
                  <p className="text-gray-600">Sign in to access your account</p>
                </div>

                <div className="hidden md:block mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Student Portal</h2>
                  <p className="text-gray-600">Sign in to access your account</p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={loginForm.email}
                        onChange={handleChange}
                        className={`block w-full pl-10 pr-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'
                          } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="student@universa.edu"
                      />
                    </div>
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={loginForm.password}
                        onChange={handleChange}
                        className={`block w-full pl-10 pr-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'
                          } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="••••••••"
                      />
                    </div>
                    {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <input
                        id="remember"
                        name="remember"
                        type="checkbox"
                        checked={loginForm.remember}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>
                    <div className="text-sm">
                      <a href="#" className="font-medium text-blue-800 hover:text-blue-700">
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <LogIn className="mr-2 h-5 w-5" />
                    Sign in
                  </button>
                </form>

                <div className="mt-6 border-t border-gray-200 pt-6">
                  <p className="text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <a href="#" className="font-medium text-blue-800 hover:text-blue-700">
                      Contact your administrator
                    </a>
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Student Resources</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <a href="#" className="text-sm text-blue-800 hover:text-blue-700 hover:underline">
                      Academic Calendar
                    </a>
                    <a href="#" className="text-sm text-blue-800 hover:text-blue-700 hover:underline">
                      Course Catalog
                    </a>
                    <a href="#" className="text-sm text-blue-800 hover:text-blue-700 hover:underline">
                      Library Resources
                    </a>
                    <a href="#" className="text-sm text-blue-800 hover:text-blue-700 hover:underline">
                      Tech Support
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;