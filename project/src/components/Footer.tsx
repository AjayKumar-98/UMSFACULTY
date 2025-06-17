import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* University Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">UMS University</h3>
            <p className="text-gray-300 mb-4">
              Empowering minds, inspiring futures. Founded in 1985, we're committed to excellence in education and research.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/academics/programs" className="text-gray-300 hover:text-white transition-colors">Programs</Link>
              </li>
              <li>
                <Link to="/admissions/apply" className="text-gray-300 hover:text-white transition-colors">Apply Now</Link>
              </li>
              <li>
                <Link to="/campus-life" className="text-gray-300 hover:text-white transition-colors">Campus Life</Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-300 hover:text-white transition-colors">Research</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-white transition-colors">UMS Login</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/library" className="text-gray-300 hover:text-white transition-colors">Library</Link>
              </li>
              <li>
                <Link to="/portal/student" className="text-gray-300 hover:text-white transition-colors">Student Portal</Link>
              </li>
              <li>
                <Link to="/portal/faculty" className="text-gray-300 hover:text-white transition-colors">Faculty Portal</Link>
              </li>
              <li>
                <Link to="/alumni" className="text-gray-300 hover:text-white transition-colors">Alumni</Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-white transition-colors">News & Events</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Media Gallery</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="mr-2 h-5 w-5 text-gray-300" />
                <span className="text-gray-300">123 University Avenue, City, State 12345</span>
              </li>
              <li className="flex">
                <Phone className="mr-2 h-5 w-5 text-gray-300" />
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex">
                <Mail className="mr-2 h-5 w-5 text-gray-300" />
                <span className="text-gray-300">info@ums.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300">&copy; {new Date().getFullYear()} UMS University. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">Terms of Service</Link>
              <Link to="/sitemap" className="text-gray-300 hover:text-white transition-colors text-sm">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;