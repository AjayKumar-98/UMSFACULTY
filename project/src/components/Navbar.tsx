import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    {
      title: 'About',
      path: '/about',
      submenu: [
        { title: 'Overview', path: '/about/overview' },
        { title: 'History', path: '/about/history' },
        { title: 'Leadership', path: '/about/leadership' },
        { title: 'Infrastructure', path: '/about/infrastructure' },
        { title: 'Location', path: '/about/location' },
        { title: 'Alumni', path: '/about/alumni' },
        { title: 'Faculty', path: '/about/faculty' },
        { title: 'Contact', path: '/about/contact' },
      ],
    },
    {
      title: 'Academics',
      path: '/academics',
      submenu: [
        { title: 'Programs', path: '/academics/programs' },
        { title: 'Departments', path: '/academics/departments' },
        { title: 'Faculty', path: '/academics/faculty' },
        { title: 'Calendar', path: '/academics/calendar' },
      ],
    },
    {
      title: 'Admissions',
      path: '/admissions',
      submenu: [
        { title: 'Apply', path: '/admissions/apply' },
        { title: 'Admission Process', path: '/admissions/process' },
        { title: 'Fee Structure', path: '/admissions/fees' },
        { title: 'Requirements', path: '/admissions/requirements' },
        { title: 'Financial Aid', path: '/admissions/financial-aid' },
        { title: 'International', path: '/admissions/international' },
      ],
    },
    {
      title: 'Campus Life',
      path: '/campus-life',
      submenu: [
        { title: 'Housing', path: '/campus-life/housing' },
        { title: 'Activities', path: '/campus-life/activities' },
        { title: 'Facilities', path: '/campus-life/facilities' },
      ],
    },
    {
      title: 'Research',
      path: '/research',
      submenu: [
        { title: 'Centers', path: '/research/centers' },
        { title: 'Publications', path: '/research/publications' },
        { title: 'Projects', path: '/research/projects' },
      ],
    },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-[#2C3E6E]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjffrAVYz-srzPlJy-3bSRETlnvVSOdAUpXd6ejWjrTtNrotN-40IQuoHltJ7nc-yE7R0&usqp=CAU"
                // alt="UMS University Logo"
                className="h-10 w-auto mr-2 rounded-full shadow"
                style={{ objectFit: 'cover' }}
              />
              <span className={`text-2xl font-bold sr-only`}>UMS</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setActiveSubmenu(index)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <button
                    className={`px-3 py-2 rounded-md text-sm font-medium ${isScrolled ? 'text-gray-800 hover:text-blue-800' : 'text-white hover:text-gray-200'
                      } flex items-center group`}
                  >
                    {item.title}
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeSubmenu === index ? 'rotate-180' : ''
                      }`} />
                  </button>
                  {activeSubmenu === index && (
                    <div className="absolute left-0 mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 transition-all duration-200 opacity-100">
                      <div className="py-1">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-800"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Search Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className={`p-2 rounded-full ${isScrolled ? 'text-gray-800 hover:text-blue-800' : 'text-white hover:text-gray-200'}`}>
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/login"
              className={`px-4 py-2 rounded-md text-sm font-medium ${isScrolled
                ? 'bg-blue-800 text-white hover:bg-blue-700'
                : 'bg-white text-blue-800 hover:bg-gray-100'
                } transition-colors duration-200`}
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md ${isScrolled ? 'text-gray-800' : 'text-white'
                } hover:bg-blue-700 hover:text-white focus:outline-none`}
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => setActiveSubmenu(activeSubmenu === index ? null : index)}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-blue-700 hover:text-white flex items-center justify-between"
                >
                  <span>{item.title}</span>
                  <ChevronDown className={`h-4 w-4 transform transition-transform duration-200 ${activeSubmenu === index ? 'rotate-180' : ''}`} />
                </button>
                {activeSubmenu === index && (
                  <div className="pl-4 space-y-1">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/login"
              className="block w-full text-center px-3 py-2 mt-4 rounded-md text-base font-medium text-white bg-blue-800 hover:bg-blue-700"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;