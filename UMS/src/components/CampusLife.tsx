
const CampusLife = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Experience holistic learning
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-6xl font-bold text-orange-600 mb-4">50,000+</div>
              <p className="text-lg text-gray-600 leading-relaxed">
                "Bollywood's melody queen dazzled the stage at our university! 
                Our students experienced an unforgettable evening of music and culture, 
                showcasing the vibrant campus life that makes learning truly extraordinary."
              </p>
              <div className="mt-6 flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-bold">🎭</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Cultural Events</div>
                  <div className="text-sm text-gray-600">Annual Celebrations</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div>
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop" 
              alt="Campus Concert" 
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLife;
