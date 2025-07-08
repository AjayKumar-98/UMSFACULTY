
const Recognitions = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* UGC Category 1 */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl font-bold">A+</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Category 1</h3>
            <p className="text-lg">UGC Recognition</p>
            <p className="text-sm opacity-90 mt-2">Highest Grade Accredited University</p>
          </div>
          
          {/* Prime Minister Event */}
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-8 text-black text-center hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=200&fit=crop" 
                alt="Prime Minister Event" 
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">PM's Vision</h3>
            <p className="text-sm">Recognized by the Prime Minister for contribution to education excellence</p>
          </div>
          
          {/* MAKA Trophy */}
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-8 text-black text-center hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <div className="w-16 h-16 bg-black/10 rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">MAKA Award</h3>
            <p className="text-lg">Excellence Trophy</p>
            <p className="text-sm opacity-90 mt-2">Outstanding Achievement in Higher Education</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognitions;
