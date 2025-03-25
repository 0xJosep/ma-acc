import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-6xl font-bold mb-8">Welcome to Morocco Articles</h1>
          <p className="text-xl mb-8">Explore our collection of articles about Morocco's development and innovation.</p>
          <Link to="/articles" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
            View Articles
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home; 