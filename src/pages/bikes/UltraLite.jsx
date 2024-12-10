// src/pages/bikes/UltraLite.jsx
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import BikeSpecs from '../../components/bikes/BikeSpecs';
import BikeGallery from '../../components/bikes/BikeGallery';
import FeatureList from '../../components/features/FeatureList';
import Button from '../../components/common/Button';

const specs = {
  battery: {
    type: "Fixed Pack",
    capacity: "4.6 kWh",
    technology: "Li-ion LFP",
    lifecycle: "2000+ cycles",
    chargingTime: "5-6 hours",
    estimation: "Up to 140km per charge"
  },
  performance: {
    range: "140 km",
    topSpeed: "25 kmph",
    acceleration: "0-15 kmph in 3.2s",
    motor: "250W BLDC Hub Motor",
    torque: "16 Nm",
    modes: "Eco, City, Sport"
  },
  features: {
    display: "7-inch TFT Display",
    connectivity: "Bluetooth 5.0",
    app: "Smart Connect App",
    lights: "LED with DRL",
    brakes: "Disc Brakes with Regeneration",
    suspension: "Adjustable Front Fork"
  }
};

const gallery = [
  "/images/bikes/ultralite/side.jpg",
  "/images/bikes/ultralite/front.jpg",
  "/images/bikes/ultralite/rear.jpg",
  "/images/bikes/ultralite/display.jpg"
];

export default function UltraLite() {
  const [activeSection, setActiveSection] = useState('overview');
  const overviewRef = useRef(null);
  const specsRef = useRef(null);
  const featuresRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      title: "Advanced LFP Battery",
      description: "Long-life lithium iron phosphate battery with 2000+ cycles"
    },
    {
      title: "Smart Connect",
      description: "Bluetooth connectivity with dedicated mobile app"
    },
    {
      title: "Regenerative Braking",
      description: "Energy recovery system for extended range"
    },
    {
      title: "Multi-Mode Riding",
      description: "Choose between Eco, City, and Sport modes"
    },
    {
      title: "Premium Display",
      description: "7-inch TFT display with navigation"
    },
    {
      title: "Advanced Safety",
      description: "Disc brakes with ABS and LED lighting"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-green-900 to-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src="/images/bikes/ultralite/hero-bg.jpg"
            alt="UltraLite Background"
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
                UltraLite
              </motion.h1>
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-300 mb-8"
              >
                Premium electric bike with high-capacity fixed battery pack
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
                src="/images/bikes/ultralite/hero-bike.png"
                alt="UltraLite"
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
                    ? 'border-green-600 text-green-600'
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
                The UltraLite is designed for the urban commuter who demands reliability
                and performance. With its high-capacity 4.6 kWh fixed battery pack,
                you can enjoy extended range without compromise.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Advanced LFP battery technology ensures longevity and safety, while
                the intelligent power management system optimizes performance across
                different riding modes.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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

      {/* Booking Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience the UltraLite</h2>
          <p className="text-xl mb-8">
            Book a test ride today and discover the perfect urban commuter
          </p>
          <Button variant="primary" size="lg">
            Book Now
          </Button>
        </div>
      </section>
    </div>
  );
}
