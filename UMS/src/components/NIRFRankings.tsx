
import { ChevronLeft, ChevronRight } from "lucide-react";

const NIRFRankings = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Together we have achieved excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Recognized by NIRF (National Institutional Ranking Framework) for our commitment to 
            academic excellence, research innovation, and industry partnerships.
          </p>
          
          {/* Navigation Arrows */}
          <div className="flex justify-center space-x-4 mb-8">
            <button className="p-3 rounded-full bg-orange-100 hover:bg-orange-200 transition-colors">
              <ChevronLeft className="w-6 h-6 text-orange-600" />
            </button>
            <button className="p-3 rounded-full bg-orange-100 hover:bg-orange-200 transition-colors">
              <ChevronRight className="w-6 h-6 text-orange-600" />
            </button>
          </div>
        </div>
        
        {/* Main NIRF Ranking */}
        <div className="relative mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-2xl mx-auto">
            <div className="mb-6">
              <img 
                src="https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=200&fit=crop" 
                alt="NIRF Ranking" 
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-6xl font-bold text-orange-600">27th</h3>
              <p className="text-2xl font-semibold text-gray-800">Amongst Universities</p>
              <p className="text-lg text-gray-600">NIRF Ranking 2024</p>
            </div>
          </div>
        </div>
        
        {/* Ranking Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-orange-600 mb-2">15th</div>
            <div className="text-sm text-gray-600">Engineering</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-orange-600 mb-2">22nd</div>
            <div className="text-sm text-gray-600">Management</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-orange-600 mb-2">18th</div>
            <div className="text-sm text-gray-600">Innovation</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-orange-600 mb-2">12th</div>
            <div className="text-sm text-gray-600">Research</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NIRFRankings;
