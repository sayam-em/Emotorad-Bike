// src/pages/bikes/BikeDetail.jsx
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';

const bikeData = {
  hyperlite: {
    name: 'HyperLite',
    tagline: 'Dual Battery System',
    description: 'Experience the future of electric mobility with dual removable batteries',
    specs: {
      battery: '1.5kwh x 2 (Removable)',
      range: 'Up to 120km',
      topSpeed: '25 kmph',
      chargingTime: '4-5 hours',
      motor: '250W BLDC Hub Motor',
      display: '5.5" LCD Display'
    },
    features: [
      {
        title: 'Dual Battery System',
        description: 'Hot-swappable batteries for extended range'
      },
      {
        title: 'Smart Connectivity',
        description: 'Bluetooth enabled with mobile app support'
      },
      {
        title: 'Premium Design',
        description: 'Ergonomic and stylish for urban commuting'
      }
    ],
    colors: ['Midnight Black', 'Electric Blue', 'Pristine White'],
    gallery: [
      '/images/bikes/hyperlite/angle1.png',
      '/images/bikes/hyperlite/angle2.png',
      '/images/bikes/hyperlite/angle3.png'
    ]
  },
  // Add similar data for ultralite and lite
};

export default function BikeDetail() {
  const { bikeId } = useParams();
  const bike = bikeData[bikeId];
  const [selectedColor, setSelectedColor] = useState(0);

  if (!bike) {
    return <div>Bike not found</div>;
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-r from-gray-900 to-gray-800 flex items-center">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <h1 className="text-5xl font-bold mb-4">{bike.name}</h1>
            <p className="text-2xl text-gray-300 mb-6">{bike.tagline}</p>
            <p className="text-lg text-gray-400 mb-8">{bike.description}</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
              Book Test Ride
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
// Continuing src/pages/bikes/BikeDetail.jsx
src={bike.gallery[0]}
alt={bike.name}
className="w-full h-auto"
/>
</motion.div>
</div>
</section>

{/* Specifications Section */}
<section className="py-20 bg-white">
<div className="container mx-auto px-4">
<h2 className="text-4xl font-bold text-center mb-16">Specifications</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{Object.entries(bike.specs).map(([key, value]) => (
<div key={key} className="p-6 bg-gray-50 rounded-lg">
  <h3 className="text-lg font-semibold text-gray-600 mb-2 capitalize">
    {key.replace(/([A-Z])/g, ' $1').trim()}
  </h3>
  <p className="text-2xl font-bold">{value}</p>
</div>
))}
</div>
</div>
</section>

{/* Features Section */}
<section className="py-20 bg-gray-100">
<div className="container mx-auto px-4">
<h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
{bike.features.map((feature, index) => (
<motion.div
  key={index}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  className="bg-white p-8 rounded-lg shadow-lg"
>
  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
  <p className="text-gray-600">{feature.description}</p>
</motion.div>
))}
</div>
</div>
</section>

{/* Color Selection */}
<section className="py-20 bg-white">
<div className="container mx-auto px-4">
<h2 className="text-4xl font-bold text-center mb-16">Available Colors</h2>
<div className="flex flex-col items-center">
<div className="flex space-x-4 mb-8">
{bike.colors.map((color, index) => (
  <button
    key={color}
    className={`w-12 h-12 rounded-full border-2 ${
      selectedColor === index ? 'border-blue-600' : 'border-gray-300'
    }`}
    style={{
      backgroundColor: color.toLowerCase().replace(' ', '')
    }}
    onClick={() => setSelectedColor(index)}
  >
    <span className="sr-only">{color}</span>
  </button>
))}
</div>
<p className="text-xl font-semibold">{bike.colors[selectedColor]}</p>
</div>
</div>
</section>

{/* Gallery */}
<section className="py-20 bg-gray-100">
<div className="container mx-auto px-4">
<h2 className="text-4xl font-bold text-center mb-16">Gallery</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{bike.gallery.map((image, index) => (
<motion.div
  key={index}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  className="aspect-w-16 aspect-h-9"
>
  <img
    src={image}
    alt={`${bike.name} - View ${index + 1}`}
    className="w-full h-full object-cover rounded-lg"
  />
</motion.div>
))}
</div>
</div>
</section>
</div>
);
}

