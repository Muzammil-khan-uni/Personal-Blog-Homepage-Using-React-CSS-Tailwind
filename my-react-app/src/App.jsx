import { useState } from 'react';
import BlogHeader from './BlogHeader';
import BlogPosts from './BlogPosts';
import BlogFooter from './BlogFooter';


const App = () => {
  const allPosts = [
    {
      id: 1,
      title: 'Getting Started with React Hooks',
      category: 'Tech',
      date: '2023-05-15',
      description: 'Learn how to use React Hooks to simplify your functional components.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500'
    },
    {
      id: 2,
      title: 'My Trip to Japan',
      category: 'Travel',
      date: '2023-04-22',
      description: 'Exploring Tokyo, Kyoto, and Osaka in two amazing weeks.',
      image: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=500'
    },
    {
      id: 3,
      title: 'The Best Pizza in Naples',
      category: 'Food',
      date: '2023-03-10',
      description: 'A foodie guide to authentic Neapolitan pizza.',
      image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=500'
    },
    {
      id: 4,
      title: 'Understanding TypeScript Generics',
      category: 'Tech',
      date: '2023-06-05',
      description: 'A deep dive into TypeScript generics and how to use them effectively.',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500'
    },
    {
      id: 5,
      title: 'Hiking the Swiss Alps',
      category: 'Travel',
      date: '2023-07-18',
      description: 'Breathtaking views and challenging trails in the Swiss mountains.',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500'
    },
    {
      id: 6,
      title: 'Homemade Sourdough Bread',
      category: 'Food',
      date: '2023-02-28',
      description: 'My journey to perfecting sourdough bread at home.',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500'
    },
    {
      id: 7,
      title: 'CSS Grid vs Flexbox',
      category: 'Tech',
      date: '2023-01-15',
      description: 'When to use CSS Grid and when to stick with Flexbox.',
      image: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=500'
    },
    {
      id: 8,
      title: 'Street Food in Bangkok',
      category: 'Food',
      date: '2023-06-30',
      description: 'The most delicious and affordable street food options in Bangkok.',
      image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=500'
    },
    {
      id: 9,
      title: 'Building REST APIs with Node.js',
      category: 'Tech',
      date: '2023-08-12',
      description: 'A comprehensive guide to creating efficient REST APIs using Node.js.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500'
    },
    {
      id: 10,
      title: 'Safari Adventure in Kenya',
      category: 'Travel',
      date: '2023-09-05',
      description: 'An unforgettable wildlife experience in Maasai Mara.',
      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=500'
    },
    {
      id: 11,
      title: 'Vegan Cooking Basics',
      category: 'Food',
      date: '2023-07-22',
      description: 'Essential techniques and recipes for plant-based cooking.',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500'
    },
    {
      id: 12,
      title: 'React Performance Optimization',
      category: 'Tech',
      date: '2023-10-15',
      description: 'Proven techniques to make your React applications faster.',
      image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=500'
    },
    {
      id: 13,
      title: 'Exploring the Greek Islands',
      category: 'Travel',
      date: '2023-08-30',
      description: 'Island hopping through Santorini, Mykonos, and Crete.',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=500'
    },
    {
      id: 14,
      title: 'Artisan Coffee Brewing',
      category: 'Food',
      date: '2023-09-18',
      description: 'Master the craft of brewing specialty coffee at home.',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500'
    },
    {
      id: 15,
      title: 'Docker for Developers',
      category: 'Tech',
      date: '2023-11-02',
      description: 'Containerize your applications with Docker basics.',
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500'
    },
    {
      id: 16,
      title: 'Road Trip Across America',
      category: 'Travel',
      date: '2023-10-10',
      description: 'Coast-to-coast adventure through America\'s scenic routes.',
      image: 'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?w=500'
    },
    {
      id: 17,
      title: 'French Pastry Techniques',
      category: 'Food',
      date: '2023-11-20',
      description: 'Learn the secrets behind perfect croissants and macarons.',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500'
    },
    {
      id: 18,
      title: 'GraphQL Fundamentals',
      category: 'Tech',
      date: '2023-12-05',
      description: 'Introduction to GraphQL and its advantages over REST.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500'
    },
    {
      id: 19,
      title: 'Northern Lights in Iceland',
      category: 'Travel',
      date: '2023-11-15',
      description: 'Chasing the aurora borealis in Iceland\'s winter landscape.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500'
    },
    {
      id: 20,
      title: 'Fermentation at Home',
      category: 'Food',
      date: '2023-12-10',
      description: 'Making kombucha, kimchi, and sourdough in your kitchen.',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=500'
    },
    {
      id: 21,
      title: 'Web Accessibility Guidelines',
      category: 'Tech',
      date: '2023-12-18',
      description: 'Making your websites accessible to all users.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500'
    },
    {
      id: 22,
      title: 'Backpacking Southeast Asia',
      category: 'Travel',
      date: '2024-01-05',
      description: 'Budget travel tips for Vietnam, Cambodia, and Thailand.',
      image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=500'
    }
  ];

  const [currentCategory, setCurrentCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = currentCategory === 'All' || post.category === currentCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return (
      <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <BlogHeader 
          title="My Personal Blog" 
          onCategoryChange={setCurrentCategory} 
          onSearch={setSearchQuery}
        />

         <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <BlogPosts posts={filteredPosts} />
        </div>
      </main>
       <BlogFooter />
      </div>
    </div>
  );
};

export default App;