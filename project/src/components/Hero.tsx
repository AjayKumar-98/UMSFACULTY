import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Shaping Tomorrow's Leaders",
    subtitle: "Join our prestigious university and embark on a journey of excellence",
    cta: "Apply Now",
    ctaLink: "/admissions/apply",
    image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 2,
    title: "Discover Research Excellence",
    subtitle: "Our university is at the forefront of groundbreaking research",
    cta: "Explore Research",
    ctaLink: "/research",
    image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 3,
    title: "Campus Life & Activities",
    subtitle: "Experience a vibrant campus with endless opportunities",
    cta: "Campus Tour",
    ctaLink: "/campus-life",
    image: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1600",
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-start z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                  style={{ 
                    opacity: 0, 
                    animation: index === currentSlide ? 'fadeInUp 1s ease forwards 0.5s' : 'none' 
                  }}
                >
                  {slide.title}
                </h1>
                <p 
                  className="text-xl md:text-2xl text-gray-200 mb-8"
                  style={{ 
                    opacity: 0, 
                    animation: index === currentSlide ? 'fadeInUp 1s ease forwards 0.7s' : 'none' 
                  }}
                >
                  {slide.subtitle}
                </p>
                <div
                  style={{ 
                    opacity: 0, 
                    animation: index === currentSlide ? 'fadeInUp 1s ease forwards 0.9s' : 'none' 
                  }}
                >
                  <Link
                    to={slide.ctaLink}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 transition-colors"
                  >
                    {slide.cta}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2.5 w-2.5 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;