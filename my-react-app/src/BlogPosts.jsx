import { useState } from 'react';
import PostCard from './PostCard';

const BlogPosts = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; 

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };


    const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const leftBound = Math.max(1, currentPage - 2);
      const rightBound = Math.min(totalPages, currentPage + 2);
      
      if (leftBound > 1) pages.push(1);
      if (leftBound > 2) pages.push('...');
      
      for (let i = leftBound; i <= rightBound; i++) {
        pages.push(i);
      }
      
      if (rightBound < totalPages - 1) pages.push('...');
      if (rightBound < totalPages) pages.push(totalPages);
    }
    
    return pages;
  };

  if (posts.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500 text-lg">
        No posts found matching your criteria.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            Showing {indexOfFirstPost + 1}-{Math.min(indexOfLastPost, posts.length)} of {posts.length} posts
          </div>
          
          <div className="flex items-center space-x-1">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md flex items-center ${
                currentPage === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Previous
            </button>
            
            <div className="flex space-x-1">
              {getPageNumbers().map((number, index) => (
                number === '...' ? (
                  <span key={index} className="px-4 py-2">...</span>
                ) : (
                  <button
                    key={index}
                    onClick={() => paginate(number)}
                    className={`w-10 h-10 rounded-md flex items-center justify-center ${
                      currentPage === number
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {number}
                  </button>
                )
              ))}
            </div>
            
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md flex items-center ${
                currentPage === totalPages
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPosts;