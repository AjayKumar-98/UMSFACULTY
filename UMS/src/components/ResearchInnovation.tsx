
const ResearchInnovation = () => {
  const stats = [
    { value: "8,500", label: "H-Index" },
    { value: "2,500", label: "Patents" },
    { value: "1,200", label: "Funded Projects" },
    { value: "15,000", label: "Publications" },
    { value: "500", label: "Industry Tie-ups" },
    { value: "50", label: "Research Centers" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🔬 Research Excellence
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                The next generation of innovators
              </h2>
              <p className="text-lg text-gray-600">
                Leading groundbreaking research across multiple disciplines, fostering innovation 
                that transforms industries and impacts society globally.
              </p>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop" 
              alt="Research Innovation" 
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>
          
          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-orange-600 mb-2">{stat.value}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchInnovation;
