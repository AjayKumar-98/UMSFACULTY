import React, { useState } from 'react';
import { CalendarDays, Clock, MapPin } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Annual Science Symposium',
    date: 'October 15, 2023',
    time: '9:00 AM - 4:00 PM',
    location: 'Science Complex Auditorium',
    category: 'Academic',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 2,
    title: 'International Business Conference',
    date: 'November 5-7, 2023',
    time: 'All Day',
    location: 'Business School, Conference Hall',
    category: 'Conference',
    image: 'https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 3,
    title: 'Cultural Festival',
    date: 'October 28-29, 2023',
    time: '11:00 AM - 8:00 PM',
    location: 'University Grounds',
    category: 'Cultural',
    image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 4,
    title: 'Alumni Networking Night',
    date: 'November 15, 2023',
    time: '6:00 PM - 9:00 PM',
    location: 'Grand Hall, Student Center',
    category: 'Networking',
    image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
];

const categories = ['All', 'Academic', 'Conference', 'Cultural', 'Networking'];

const EventsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredEvents = activeCategory === 'All' 
    ? events 
    : events.filter(event => event.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Stay informed about the latest campus events, conferences, and activities.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === category
                  ? 'bg-blue-800 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } transition-colors`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredEvents.map((event) => (
            <div 
              key={event.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 mb-4">
                  {event.category}
                </div>
                <h3 className="font-bold text-xl mb-3">{event.title}</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <CalendarDays className="mr-2 h-4 w-4 text-blue-800" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-blue-800" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-blue-800" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/events"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 transition-colors"
          >
            View All Events
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;