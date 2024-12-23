import React from 'react';
import NewsCard from './NewsCard';

const news = [
  {
    title: "National Science Competition Winners",
    date: "March 15, 2024",
    summary: "Our students secured top positions in the National Science Competition",
    imageUrl: "https://images.unsplash.com/photo-1567306301408-9b74779a11af?auto=format&fit=crop&q=80"
  },
  {
    title: "New Computer Lab Inauguration",
    date: "March 10, 2024",
    summary: "State-of-the-art computer lab with latest technology",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80"
  }
];

export default function NewsSection() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
          <p className="mt-4 text-lg text-gray-600">Stay updated with school activities</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}