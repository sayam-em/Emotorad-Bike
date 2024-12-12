// src/pages/bikes/HyperLite.jsx
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import BikeSpecs from "../../components/bikes/BikeSpecs";
import BikeGallery from "../../components/bikes/BikeGallery";
import Button from "../../components/common/Button";

import {
  BoltIcon,
  CpuChipIcon,
  MapIcon,
  SignalIcon,
} from "@heroicons/react/24/outline";

const specs = {
  battery: {
    type: "Dual Battery System (Side sheet metal panel)",
    capacity: "1.5 kWh × 2",
    technology: "Li-ion LFP (32140, Cylindrical)",
    removable: true,
    cells: "32 cells per battery",
    lifecycle: "2500 cycles up to 70% DOD",
  },
  performance: {
    range: "140/110/80 kms (IDC/City/Highway)",
    topSpeed: "45 kmph",
    motor: "1.75/1.25 kW (Peak/Rated) BLDC Hub Motor",
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
      rear: "2.75 x 17",
    },
  },
};

const features = [
  {
    title: "Dual LFP Battery System",
    description:
      "Two removable 1.5 kWh LFP batteries with side sheet metal panel design for easy access",
  },
  {
    title: "Advanced 32140 Cells",
    description:
      "High-performance 15Ah, 3.2V cylindrical cells with 2500+ cycle life",
  },
  {
    title: "Smart BMS",
    description:
      "UL version BMS with dual thermistor monitoring for optimal battery health",
  },
  {
    title: "Hub Motor Technology",
    description: "1.75kW peak power BLDC hub motor with 270mm shaft length",
  },
  {
    title: "Range Excellence",
    description:
      "Up to 140km IDC range with dual batteries for extended journeys",
  },
  {
    title: "Performance Braking",
    description:
      "220mm disc brakes with 2-piston system for reliable stopping power",
  },
];

const gallery = [
  "/images/bikes/hyperlite/Side L.png",
  "/images/bikes/hyperlite/front.png",
  "/images/bikes/hyperlite/Front left.png",
  "/images/bikes/hyperlite/rear left.png",
];

export default function HyperLite() {
  const [activeSection, setActiveSection] = useState("overview");
  const overviewRef = useRef(null);
  const specsRef = useRef(null);
  const featuresRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
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
            src="/images/bikes/hyperlite/Side L.png"
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
                <Button variant="outline" className="text-white" size="lg">
                  Download Brochure
                </Button>
              </motion.div>
            </div>
            {/* <motion.div
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
            </motion.div> */}
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
                    ? "border-blue-600 text-blue-600"
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
                The HyperLite represents the pinnacle of electric bike
                innovation, featuring our groundbreaking dual battery system.
                With two removable 1.5 kWh batteries, you can enjoy extended
                range and the convenience of hot-swappable power.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Each battery is engineered with advanced Li-ion NMC technology,
                providing reliable performance and longer lifespan. The smart
                BMS ensures optimal charging and battery health monitoring.
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
                title: "Hot-Swappable Design",
                description:
                  "Quick battery swap capability with side sheet metal panel design",
                icon: <BoltIcon className="w-8 h-8 text-blue-400" />,
              },
              {
                title: "Dual BMS System",
                description:
                  "Independent battery management with UL version thermistor monitoring",
                icon: <CpuChipIcon className="w-8 h-8 text-blue-400" />,
              },
              {
                title: "Extended Range",
                description: "140km IDC range with dual battery configuration",
                icon: <MapIcon className="w-8 h-8 text-blue-400" />,
              },
              {
                title: "Smart Integration",
                description:
                  "Advanced connectivity with real-time performance monitoring",
                icon: <SignalIcon className="w-8 h-8 text-blue-400" />,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-600 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
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
