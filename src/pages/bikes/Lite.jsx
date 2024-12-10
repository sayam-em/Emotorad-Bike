// src/pages/bikes/Lite.jsx
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import BikeSpecs from '../../components/bikes/BikeSpecs';
import BikeGallery from '../../components/bikes/BikeGallery';
import FeatureList from '../../components/features/FeatureList';
import Button from '../../components/common/Button';

const specs = {
  battery: {
    type: "Fixed Pack",
    capacity: "5.1 kWh",
    technology: "Li-ion NMC",
    lifecycle: "2000+ cycles",
    chargingTime: "6-7 hours",
    estimation: "Up to 160km per charge"
  },
  performance: {
    range: "160 km",
    topSpeed: "25 kmph",
    acceleration: "0-15 kmph in 3s",
    motor: "250W BLDC Hub Motor",
    torque: "18 Nm",
    modes: "Eco, City, Sport, Turbo"
  },
  features: {
    display: "7.5-inch TFT Display",
    connectivity: "Bluetooth 5.0",
    app: "Smart Connect App",
    lights: "Advanced LED with DRL",
    brakes: "Dual Disc Brakes with ABS",
    suspension: "Adjustable Front & Rear"
  }
};

const gallery = [
  "/images/bikes/lite/side.jpg",
  "/images/bikes/lite/front.jpg",
  "/images/bikes/lite/rear.jpg",
  "/images/bikes/lite/display.jpg"
];

export default function Lite() {
  const [activeSection, setActiveSection] = useState('overview');
  const overviewRef = useRef(null);
  const specsRef = useRef(null);
  const featuresRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      title: "High Capacity Battery",
      description: "5.1 kWh NMC battery for maximum range and performance"
    },
    {
      title: "Enhanced Connectivity",
      description: "Advanced app features with real-time diagnostics"
    },
    {
      title: "Superior Comfort",
      description: "Dual suspension system for smooth rides"
    },
    {
      title: "Four Riding Modes",
      description: "Including Turbo mode for maximum performance"
    },
    {
      title: "Advanced Safety",
      description: "Dual disc brakes with ABS and enhanced lighting"
    },
    {
      title: "Premium Display",
      description: "Large 7.5-inch TFT display with advanced UI"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-purple-900 to-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src="/images/bikes/lite/hero-bg.jpg"
            alt="Lite Background"
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
                Lite
              </motion.h1>
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-300 mb-8"
              >
                The ultimate electric bike with premium features and maximum range
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
                src="/images/bikes/lite/hero-bike.png"
                alt="Lite"
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
                    ? 'border-purple-600 text-purple-600'
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
                The Lite represents our flagship model, featuring the most advanced
                technology and premium features. With its powerful 5.1 kWh NMC battery,
                you'll enjoy the longest range in our lineup, perfect for both daily
                commutes and weekend adventures.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Experience unmatched comfort with our dual suspension system,
                enhanced safety features including ABS, and the convenience of
                our most advanced smart connectivity options.
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

      {/* Premium Features Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Premium Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Turbo Mode",
                description: "Experience maximum performance when you need it"
              },
              {
                title: "Dual Suspension",
                description: "Premium comfort on any terrain"
              },
              {
                title: "Advanced Safety",
                description: "ABS and enhanced visibility features"
              },
              {
                title: "Smart Integration",
                description: "Full smartphone integration with advanced telemetrics"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-purple-600 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                  {/* Icon placeholder */}
                  <span className="text-2xl">✦</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience the Lite</h2>
          <p className="text-xl mb-8">
            Book a test ride today and discover our most premium electric bike
          </p>
          <Button variant="primary" size="lg">
            Book Now
          </Button>
        </div>
      </section>
    </div>
  );
}
