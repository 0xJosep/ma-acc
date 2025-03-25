// src/components/FAQ.tsx
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-5 px-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg text-left font-medium">{question}</span>
        <svg 
          className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="p-4 text-gray-600">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How can I contribute to the movement?",
      answer: "Join our network by sharing your expertise and insights on systemic barriers you've encountered in your field. You can contribute by documenting friction points, proposing solutions, and amplifying successful initiatives. Every voice and perspective adds value to understanding and addressing Morocco's challenges."
    },
    {
      question: "How do you plan to influence policy makers?",
      answer: "We focus on building evidence-based cases that demonstrate the economic impact of bureaucratic friction, while presenting concrete, actionable solutions. By forming coalitions with established business groups and industry leaders, we can effectively advocate for specific policy changes backed by data and success stories."
    },
    {
      question: "How can the diaspora effectively contribute?",
      answer: "The diaspora plays a crucial role by bringing international perspectives and connections. You can share best practices from your host country, mentor local entrepreneurs, and connect Moroccan talent with global opportunities. Your experience abroad can help bridge critical knowledge gaps and bring valuable resources to Morocco's development."
    },
    {
      question: "What sectors are you focusing on?",
      answer: "Our focus spans across all sectors where bureaucratic friction limits growth potential, with particular emphasis on digital technology, financial services, education, and public sector digitization. We believe that improvements in these foundational areas will catalyze progress across the entire economy."
    }
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-medium text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="bg-white rounded-lg divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;