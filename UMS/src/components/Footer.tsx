
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* University Info */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold text-orange-500 mb-4">UNIVERSITY</div>
            <p className="text-gray-300 mb-4">
              Leading the future of education with innovation, excellence, and global impact.
            </p>
            <div className="text-gray-300 text-sm">
              <p>University Campus</p>
              <p>Academic City, India</p>
              <p>Phone: 1800-102-4431</p>
              <p>Email: info@university.edu</p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors">
                <span className="text-sm">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors">
                <span className="text-sm">t</span>
              </a>
              <a href="#" className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors">
                <span className="text-sm">in</span>
              </a>
            </div>
          </div>
          
          {/* Admissions */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Admissions</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">How to Apply</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Entrance Exams</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Scholarships</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Fee Structure</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">International Students</a></li>
            </ul>
          </div>
          
          {/* Academics */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Academics</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Engineering</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Management</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Computer Applications</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Design</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Agriculture</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Library</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Research Centers</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Campus Facilities</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Student Portal</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Alumni Network</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 University. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
