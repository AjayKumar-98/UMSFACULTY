
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full">
      {/* Announcement Bar */}
      <div className="bg-black text-white py-2 px-4">
        <div className="max-w-7xl mx-auto text-center text-sm">
          <span className="inline-block mr-6">🎓 Admissions Open 2024-25 | Scholarship up to 100%</span>
          <span>📞 Contact: 1800-102-4431</span>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-orange-600">
                UNIVERSITY
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <a href="#" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="#" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">Admissions</a>
                <a href="#" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">Academics</a>
                <a href="#" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">Campus Life</a>
                <a href="#" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">Placements</a>
                <a href="#" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">Research</a>
              </div>
            </div>
            
            {/* Apply Now Button */}
            <div className="flex items-center">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-semibold transition-colors">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
