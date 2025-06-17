import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight } from 'lucide-react';

const news = [
  {
    id: 1,
    title: 'UniVersa Researchers Develop Breakthrough Technology',
    excerpt: 'The research team led by Dr. Jane Smith has developed a new technology with applications in renewable energy.',
    date: 'October 12, 2023',
    category: 'Research',
    image: 'https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '/news/breakthrough-technology',
  },
  {
    id: 2,
    title: 'University Partners with Leading Tech Companies',
    excerpt: 'New partnership will provide students with internship opportunities and cutting-edge resources.',
    date: 'October 5, 2023',
    category: 'Partnerships',
    image: 'https://images.pexels.com/photos/2977547/pexels-photo-2977547.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '/news/tech-partnership',
  },
  {
    id: 3,
    title: 'UniVersa Ranks in Top 50 Universities Globally',
    excerpt: 'Our university has climbed in global rankings, now among the top 50 institutions worldwide.',
    date: 'September 28, 2023',
    category: 'Achievement',
    image: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '/news/global-ranking',
  },
];

const NewsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
            <div className="w-20 h-1 bg-blue-800"></div>
          </div>
          <Link
            to="/news"
            className="inline-flex items-center mt-4 md:mt-0 text-blue-800 hover:text-blue-700 font-medium"
          >
            View all news <ChevronRight className="ml-1 w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <Link 
              key={item.id}
              to={item.link}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="mr-1 h-4 w-4" />
                  <time dateTime={item.date}>{item.date}</time>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <span className="inline-flex items-center text-blue-800 font-medium">
                  Read more <ChevronRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;