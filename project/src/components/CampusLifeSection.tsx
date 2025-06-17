import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const campusImages = [
  {
    src: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'University Library',
    caption: 'Our modern library houses over 500,000 volumes and provides digital access to millions more.'
  },
  {
    src: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Student Center',
    caption: 'The Student Center serves as a hub for social activities, club meetings, and student services.'
  },
  {
    src: 'https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Research Laboratories',
    caption: 'State-of-the-art research facilities equipped with cutting-edge technology.'
  },
  {
    src: 'https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Sports Complex',
    caption: 'Our sports complex includes Olympic-sized swimming pools, tennis courts, and a modern gymnasium.'
  },
  {
    src: 'https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Cultural Center',
    caption: 'The Cultural Center hosts performances, exhibitions, and cultural events throughout the year.'
  }
];

const CampusLifeSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxVisibleSlides = 3;
  const slideContainerRef = useRef<HTMLDivElement>(null);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? campusImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === campusImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (slideContainerRef.current) {
      const scrollAmount = slideContainerRef.current.scrollWidth / campusImages.length * currentIndex;
      slideContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  // Calculate which images to show in the carousel
  const getVisibleImages = () => {
    const result = [];
    for (let i = 0; i < maxVisibleSlides; i++) {
      const index = (currentIndex + i) % campusImages.length;
      result.push(campusImages[index]);
    }
    return result;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Campus Life</h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Experience a vibrant campus life with modern facilities, student activities, and a supportive community.
          </p>
        </div>

        {/* Image Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden">
            <div 
              ref={slideContainerRef}
              className="flex transition-transform duration-500 gap-4"
              style={{ scrollSnapType: 'x mandatory', overflowX: 'auto', scrollbarWidth: 'none' }}
            >
              {getVisibleImages().map((image, index) => (
                <div 
                  key={index} 
                  className="flex-none w-full sm:w-1/2 lg:w-1/3 px-2 scroll-snap-align-start"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-60 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2">{image.alt}</h3>
                      <p className="text-gray-600">{image.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
        </div>

        {/* Campus Life Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Student Activities</h3>
            <p className="text-gray-600 mb-6">
              At UniVersa, we believe that learning extends beyond the classroom. We offer a wide range of extracurricular 
              activities, clubs, and organizations that allow students to pursue their interests, develop leadership skills, 
              and build lasting friendships.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800">•</span>
                </div>
                <p className="ml-3">Over 150+ student clubs and organizations</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800">•</span>
                </div>
                <p className="ml-3">Student government and leadership opportunities</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800">•</span>
                </div>
                <p className="ml-3">Annual cultural festivals and events</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800">•</span>
                </div>
                <p className="ml-3">Community service and volunteer programs</p>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Campus Facilities</h3>
            <p className="text-gray-600 mb-6">
              Our campus is designed to provide students with a comfortable and stimulating environment. From modern 
              classrooms and laboratories to recreational facilities and dining options, we have everything you need 
              for a rewarding university experience.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800">•</span>
                </div>
                <p className="ml-3">Comfortable student housing with modern amenities</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800">•</span>
                </div>
                <p className="ml-3">Multiple dining options with diverse food choices</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800">•</span>
                </div>
                <p className="ml-3">Comprehensive health and wellness center</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800">•</span>
                </div>
                <p className="ml-3">Transportation services throughout campus</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLifeSection;