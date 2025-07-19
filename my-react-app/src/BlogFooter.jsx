import { FaTwitter, FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const BlogFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">About This Blog</h3>
            <p className="text-gray-300">
              Sharing insights on technology, travel experiences, and culinary adventures. 
              Join me on this journey of discovery and learning.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FaGithub size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">About Me</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Popular Posts</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Categories</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-gray-300" />
                <a href="mailto:contact@example.com" className="text-gray-300 hover:text-white transition">
                  contact@example.com
                </a>
              </li>
              <li className="text-gray-300">Based in San Francisco, CA</li>
            </ul>
            <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition">
              Contact Me
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} My Personal Blog. All rights reserved.</p>
          <div className="mt-2 text-sm">
            <a href="#" className="hover:text-white transition">Privacy Policy</a> | 
            <a href="#" className="hover:text-white transition ml-2">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;