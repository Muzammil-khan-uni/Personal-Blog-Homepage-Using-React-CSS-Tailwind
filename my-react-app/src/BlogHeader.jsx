import { FaSearch, FaUser, FaEnvelope } from 'react-icons/fa';

const BlogHeader = ({ title, onCategoryChange, onSearch }) => {
  const categories = ['All', 'Tech', 'Travel', 'Food'];

  return (
    <header className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white shadow-lg">
      {/* Top Bar */}
      <div className="bg-black bg-opacity-20 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-blue-200 transition">
              <FaEnvelope className="inline mr-1" /> Subscribe
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-blue-200 transition">
              <FaUser className="inline mr-1" /> Login
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Sharing my journey through technology, travel, and culinary adventures
          </p>
        </div>

        {/* Search and Categories */}
        <div className="mt-10 flex flex-col items-center space-y-6">
          <div className="relative w-full max-w-md">
  <FaSearch
    size={16}
    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
  />
            <input
              type="text"
              placeholder="Search posts..."
              onChange={(e) => onSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white bg-opacity-10 border-white border-opacity-20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category === 'All' 
                    ? 'bg-white text-blue-800 hover:bg-blue-100'
                    : category === 'Tech'
                      ? 'bg-blue-500 hover:bg-blue-600'
                      : category === 'Travel'
                        ? 'bg-emerald-500 hover:bg-emerald-600'
                        : 'bg-amber-500 hover:bg-amber-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;