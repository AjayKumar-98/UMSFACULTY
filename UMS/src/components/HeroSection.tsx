
const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 transform rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/15 rounded-full"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Final Year Students Secure
              <span className="block text-yellow-300">₹2.5 Crore</span>
              Package
            </h1>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Highest Package: ₹2.5 Crore</h2>
              <h3 className="text-xl">Average Package: ₹1.03 Crore</h3>
              <p className="text-lg opacity-90">
                Join India's leading university where dreams become reality. 
                Our students consistently achieve exceptional placement records.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
                Explore Programs
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all">
                View Placements
              </button>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=400&fit=crop" 
                alt="Students" 
                className="w-full h-80 object-cover rounded-lg mb-6"
              />
              
              {/* Alumni Highlights */}
              <div className="space-y-4">
                <h3 className="text-white text-xl font-semibold">Notable Alumni Packages</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-yellow-300 text-2xl font-bold">₹2.5 Cr</div>
                    <div className="text-white text-sm">Rajesh Kumar</div>
                    <div className="text-white/80 text-xs">Software Engineer</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-yellow-300 text-2xl font-bold">₹1.8 Cr</div>
                    <div className="text-white text-sm">Priya Sharma</div>
                    <div className="text-white/80 text-xs">Data Scientist</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
