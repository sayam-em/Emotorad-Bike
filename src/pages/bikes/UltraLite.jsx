// src/pages/bikes/UltraLite.jsx
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import BikeSpecs from "../../components/bikes/BikeSpecs";
import BikeGallery from "../../components/bikes/BikeGallery";
import Button from "../../components/common/Button";

import {
  BoltIcon,
  Battery100Icon,
  ArrowPathIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";

const specs = {
  battery: {
    type: "Fixed Pack",
    capacity: "1.5 kWh × 2",
    technology: "Li-ion LFP (32140, Cylindrical)",
    cells: "32 cells per battery",
    lifecycle: "2500 cycles up to 70% DOD",
  },
  performance: {
    range: "125/100/70 kms (IDC/City/Highway)",
    topSpeed: "50 kmph (60 kmph in Turbo)",
    motor: "2.2/1.5 kW (Peak/Rated) BLDC Hub Motor",
    voltage: "48V",
  },
  charging: {
    time: "4-5 hours",
    type: "900W Smart Charger",
    rating: "20A (Peak Charging)",
  },
  features: {
    brakes: "Non CBS (DISC TYPE) - 220mm",
    suspension: {
      front: "Telescopic, 110mm stroke, Ø30 mm",
      rear: "Spring coil, 60mm stroke",
    },
    tires: {
      front: "2.75 x 17",
      rear: "3.0 x 17",
    },
  },
};

const gallery = [
  "/images/bikes/ultralite/side.jpg",
  "/images/bikes/ultralite/front.jpg",
  "/images/bikes/ultralite/rear.jpg",
  "/images/bikes/ultralite/display.jpg",
];

export default function UltraLite() {
  const [activeSection, setActiveSection] = useState("overview");
  const overviewRef = useRef(null);
  const specsRef = useRef(null);
  const featuresRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    {
      title: "High-Performance LFP",
      description:
        "Dual 1.5 kWh LFP battery system with 32140 cylindrical cells",
    },
    {
      title: "Enhanced Speed Mode",
      description: "50 kmph standard speed with 60 kmph turbo mode capability",
    },
    {
      title: "Advanced Motor System",
      description: "2.2kW peak power BLDC hub motor with optimized efficiency",
    },
    {
      title: "Multi-Terrain Tires",
      description: "17-inch wheels with 3.0 rear tire for better stability",
    },
    {
      title: "Intelligent Power Management",
      description: "UL version BMS with advanced thermal monitoring",
    },
    {
      title: "Superior Suspension",
      description: "Telescopic front fork with 110mm travel for smooth rides",
    },
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
            {["overview", "specifications", "features"].map((section) => (
              <button
                key={section}
                className={`py-4 px-2 border-b-2 ${
                  activeSection === section
                    ? "border-green-600 text-green-600"
                    : "border-transparent text-gray-600"
                }`}
                onClick={() => {
                  setActiveSection(section);
                  handleScroll(
                    section === "overview"
                      ? overviewRef
                      : section === "specifications"
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
                The UltraLite is designed for the urban commuter who demands
                reliability and performance. With its high-capacity 4.6 kWh
                fixed battery pack, you can enjoy extended range without
                compromise.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Advanced LFP battery technology ensures longevity and safety,
                while the intelligent power management system optimizes
                performance across different riding modes.
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
          <h2 className="text-4xl font-bold mb-12 text-center">
            Premium Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Sport Mode Performance",
                description:
                  "Enhanced speed capability with turbo mode up to 60 kmph",
                icon: <BoltIcon className="w-8 h-8 text-green-400" />,
              },
              {
                title: "Advanced LFP Technology",
                description: "High-performance LFP cells with 2500+ cycle life",
                icon: <Battery100Icon className="w-8 h-8 text-green-400" />,
              },
              {
                title: "Regenerative Braking",
                description: "Energy recovery system for extended range",
                icon: <ArrowPathIcon className="w-8 h-8 text-green-400" />,
              },
              {
                title: "Premium Suspension",
                description: "110mm telescopic fork for superior comfort",
                icon: <BeakerIcon className="w-8 h-8 text-green-400" />,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-green-600 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
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
