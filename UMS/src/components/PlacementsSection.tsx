
import { Button } from "@/components/ui/button";

const PlacementsSection = () => {
  const companies = [
    { name: "Google", logo: "🔍" },
    { name: "Microsoft", logo: "🪟" },
    { name: "Amazon", logo: "📦" },
    { name: "Adobe", logo: "🎨" },
    { name: "Bosch", logo: "⚙️" },
    { name: "CISCO", logo: "🌐" },
    { name: "Cognizant", logo: "💡" },
    { name: "Autodesk", logo: "📐" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Placements & Careers</h2>
          <p className="text-lg text-gray-600 mb-8">
            Industry-leading placement records with top global companies
          </p>
          <Button className="bg-white text-orange-600 border-2 border-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all">
            View Placements
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-600">Recruiters</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-orange-600 mb-2">10,000+</div>
            <div className="text-gray-600">Offers</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-orange-600 mb-2">₹12 LPA</div>
            <div className="text-gray-600">Average Salary</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-orange-600 mb-2">₹2.5 Cr</div>
            <div className="text-gray-600">Highest Package</div>
          </div>
        </div>
        
        {/* Company Logos */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">Our Recruiting Partners</h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
            {companies.map((company, index) => (
              <div key={index} className="text-center hover:scale-110 transition-transform">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <span className="text-2xl">{company.logo}</span>
                </div>
                <div className="text-sm text-gray-600">{company.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementsSection;
