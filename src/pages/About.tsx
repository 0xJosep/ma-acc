import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-6xl font-bold mb-8">About Us</h1>
          <p className="text-xl mb-8">
            We are dedicated to sharing insights and analysis about Morocco's development,
            innovation, and progress in various sectors.
          </p>
          <Link to="/articles" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
            View Articles
          </Link>
        </div>
      </main>
    </div>
  );
};

export default About; 