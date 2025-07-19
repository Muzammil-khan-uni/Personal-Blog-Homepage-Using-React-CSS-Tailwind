import { FaCalendarAlt, FaClock, FaShareAlt } from 'react-icons/fa';
import { useState } from 'react';


const PostCard = ({ post }) => {
  const [imgError, setImgError] = useState(false);
  const fallbackImage = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500';

  const readTime = Math.max(3, Math.floor(post.description.length / 100));

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl h-full flex flex-col">
      <div className="relative h-48 bg-gray-100">
        {imgError ? (
          <img
            src={fallbackImage}
            alt="Fallback content"
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        )}
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
            post.category === 'Tech'
              ? 'bg-blue-100 text-blue-800'
              : post.category === 'Travel'
                ? 'bg-emerald-100 text-emerald-800'
                : 'bg-amber-100 text-amber-800'
          }`}>
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <FaCalendarAlt className="mr-1" />
          <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
          <FaClock className="mr-1" />
          <span>{readTime} min read</span>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{post.description}</p>
        
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <button className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
            Read More <span className="ml-1">→</span>
          </button>
          <button className="text-gray-400 hover:text-gray-600">
            <FaShareAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;