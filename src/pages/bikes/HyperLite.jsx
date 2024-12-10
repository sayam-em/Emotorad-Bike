// src/pages/bikes/HyperLite.jsx
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import BikeSpecs from '../../components/bikes/BikeSpecs';
import BikeGallery from '../../components/bikes/BikeGallery';
import FeatureList from '../../components/features/FeatureList';
import Button from '../../components/common/Button';

const specs = {
  battery: {
    type: "Dual Battery System",
    capacity: "1.5 kWh × 2",
    removable: true,
    technology: "Li-ion NMC"
  },
  performance: {
    range: "120 km",
    topSpeed: "25 kmph",
    acceleration: "0-15 kmph in 3.5s",
    motor: "250W BLDC Hub Motor"
  },
  charging: {
    time: "4-5 hours",
    type: "Smart Charger",
    swappable: true
  }
};

const gallery = [
  "/images/bikes/hyperlite/side.jpg",
  "/images/bikes/hyperlite/front.jpg",
  "/images/bikes/hyperlite/battery.jpg",
  "/images/bikes/hyperlite/display.jpg"
];

export default function HyperLite() {
  const [activeSection, setActiveSection] = useState('overview');
  const overviewRef = useRef(null);
  const specsRef = useRef(null);
  const featuresRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-blue-900 to-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src="/images/bikes/hyperlite/hero-bg.jpg"
            alt="HyperLite Background"
            className="w-full h-full object-cover opacity-50"
          />
        </motion.div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-6xl font-bold text-white mb-6"
              >
                HyperLite
              </motion.h1>
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-300 mb-8"
              >
                Revolutionary dual battery system with hot-swappable technology
              </motion.p>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-x-4"
              >
                <Button variant="primary" size="lg">
                  Book Test Ride
                </Button>
                <Button variant="outline" size="lg">
                  Download Brochure
                </Button>
              </motion.div>
            </div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:block"
            >
              <img
                src="/images/bikes/hyperlite/hero-bike.png"
                alt="HyperLite"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <nav className="sticky top-16 z-20 bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            {['overview', 'specifications', 'features'].map((section) => (
              <button
                key={section}
                className={`py-4 px-2 border-b-2 ${
                  activeSection === section
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600'
                }`}
                onClick={() => {
                  setActiveSection(section);
                  handleScroll(
                    section === 'overview'
                      ? overviewRef
                      : section === 'specifications'
                      ? specsRef
                      : featuresRef
                  );
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Overview Section */}
      <section ref={overviewRef} className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Overview</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                The HyperLite represents the pinnacle of electric bike innovation,
                featuring our groundbreaking dual battery system. With two removable
                1.5 kWh batteries, you can enjoy extended range and the convenience
                of hot-swappable power.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Each battery is engineered with advanced Li-ion NMC technology,
                providing reliable performance and longer lifespan. The smart BMS
                ensures optimal charging and battery health monitoring.
              </p>
            </div>
            <BikeGallery images={gallery} />
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section ref={specsRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Specifications</h2>
          {Object.entries(specs).map(([category, categorySpecs]) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 capitalize">
                {category}
              </h3>
              <BikeSpecs specs={categorySpecs} />
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Features</h2>
          <FeatureList bikeModel="hyperlite" />
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience the HyperLite</h2>
          <p className="text-xl mb-8">
            Book a test ride today and discover the future of electric mobility
          </p>
          <Button variant="primary" size="lg">
            Book Now
          </Button>
        </div>
      </section>
    </div>
  );
}
