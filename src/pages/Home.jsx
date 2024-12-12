// src/pages/Home.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const bikes = [
  {
    id: 'hyperlite',
    name: 'HyperLite',
    description: 'Dual Battery System (1.5kwh x 2, removable)',
    image: '/images/bikes/hyperlite/Side L.png',
    features: [
      'Dual Removable Batteries',
      'Extended Range',
      'Quick Swap Technology'
    ]
  },
  {
    id: 'ultralite',
    name: 'UltraLite',
    description: 'Fixed Pack 4.6kwh',
    image: '/images/bikes/ultralite/image (3).png',
    features: [
      'High Capacity Battery',
      'Enhanced Performance',
      'Urban Commuter'
    ]
  },
  {
    id: 'lite',
    name: 'Lite',
    description: 'Fixed Pack 5.1kwh',
    image: '/images/bikes/lite/Screenshot 2024-11-19 142801.png',
    features: [
      'Maximum Range',
      'Premium Features',
      'Superior Comfort'
    ]
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('hyperlite');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        >
          <source src="/videos/Untitled design.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl text-white font-bold mb-6">
            The Future of Electric Mobility
          </h1>
          <p className="text-xl mb-8 text-white">
            Experience the power of sustainable transportation
          </p>
          <Link
            to="/bikes/hyperlite"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Explore Our Bikes
          </Link>
        </div>
      </section>

      {/* Bike Showcase Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Electric Bikes
          </h2>
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg border border-gray-200">
              {bikes.map((bike) => (
                <button
                  key={bike.id}
                  className={`px-6 py-3 ${
                    activeTab === bike.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600'
                  }`}
                  onClick={() => setActiveTab(bike.id)}
                >
                  {bike.name}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {bikes.map((bike) => (
              bike.id === activeTab && (
                <motion.div
                  key={bike.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <img
                    src={bike.image}
                    alt={bike.name}
                    className="w-full h-auto"
                  />
                  <div>
                    <h3 className="text-3xl font-bold mb-4">{bike.name}</h3>
                    <p className="text-xl text-gray-600 mb-6">
                      {bike.description}
                    </p>
                    <ul className="space-y-4">
                      {bike.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center text-lg text-gray-700"
                        >
                          <svg
                            className="w-6 h-6 mr-3 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/bikes/${bike.id}`}
                      className="inline-block mt-8 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose Emotorad?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: 'Advanced Technology',
                description: 'Cutting-edge electric mobility solutions'
              },
              {
                title: 'Sustainable Future',
                description: 'Zero emissions for a cleaner environment'
              },
              {
                title: 'Superior Performance',
                description: 'Powerful motors and long-lasting batteries'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-lg bg-gray-50"
              >
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}