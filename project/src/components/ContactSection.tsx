import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real app, you would submit the form data to your backend here
      alert('Your message has been sent! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Have questions or need more information? Reach out to us and our team will be happy to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="mt-1 mr-3 h-5 w-5 text-blue-800 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">123 University Avenue</p>
                    <p className="text-gray-600">City, State 12345</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="mt-1 mr-3 h-5 w-5 text-blue-800 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">Main: (123) 456-7890</p>
                    <p className="text-gray-600">Admissions: (123) 456-7891</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="mt-1 mr-3 h-5 w-5 text-blue-800 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@universa.edu</p>
                    <p className="text-gray-600">admissions@universa.edu</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="mt-1 mr-3 h-5 w-5 text-blue-800 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Office Hours</p>
                    <p className="text-gray-600">Monday - Friday: 8:30 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-800 text-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Visit Our Campus</h3>
              <p className="mb-4">
                We offer guided campus tours Monday through Friday. Experience UniVersa firsthand and see why it's the perfect place for your education.
              </p>
              <a href="/visit" className="inline-block px-4 py-2 bg-white text-blue-800 rounded-md font-medium hover:bg-blue-50 transition-colors">
                Schedule a Tour
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="Admissions">Admissions</option>
                    <option value="Academics">Academics</option>
                    <option value="Financial Aid">Financial Aid</option>
                    <option value="Campus Life">Campus Life</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-800 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;