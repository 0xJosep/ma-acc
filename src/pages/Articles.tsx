import React from 'react';
import { Link } from 'react-router-dom';

// This interface will be used when we add actual articles
interface Article {
  id: string;
  title: string;
  date: string;
  summary?: string;
  category?: string;
}

const Articles: React.FC = () => {
  const articles = [
    {
      id: 3,
      title: "Morocco's Drought Management Framework: A Path to Water Resilience",
      description: "A strategic framework for addressing Morocco's water challenges through innovative solutions and sustainable practices.",
      link: "/articles/drought-management",
      date: "2025-03-04"
    },
    {
      id: 1,
      title: "Morocco Digital Skills Initiative: A Comprehensive National Digital Education Strategy",
      description: "A transformative approach to digital education in Morocco, aiming to train 50,000 tech professionals by 2028 and position Morocco as Africa's leading digital talent hub.",
      link: "/articles/mdsi",
      date: "2025-02-13"
    },
    {
      id: 2,
      title: "Building Morocco's Digital Infrastructure: A Foundation for Growth",
      description: "A comprehensive framework for developing Morocco's digital infrastructure, focusing on connectivity, data centers, and smart city initiatives.",
      link: "/articles/morocco-tech-hub",
      date: "2025-01-20"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <nav className="bg-black text-white py-4">
        <div className="container mx-auto px-4">
          <Link to="/" className="text-white hover:text-gray-300">← Back to Home</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-4xl py-20">
        <h1 className="text-6xl font-bold mb-16">Articles</h1>

        {/* Articles List */}
        <div className="space-y-12">
          {articles.map((article) => (
            <article key={article.id} className="border-b border-gray-200 pb-12">
              <h2 className="text-3xl font-semibold mb-4">
                <Link to={article.link} className="text-black hover:text-gray-600">
                  {article.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{article.date}</span>
                <Link to={article.link} className="text-black hover:text-gray-600">
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles; 