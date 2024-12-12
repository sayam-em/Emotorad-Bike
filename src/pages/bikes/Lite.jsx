// src/pages/bikes/Lite.jsx
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import BikeSpecs from "../../components/bikes/BikeSpecs";
import BikeGallery from "../../components/bikes/BikeGallery";
import Button from "../../components/common/Button";

import {
  BoltIcon,
  MapIcon,
  ShieldCheckIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

const specs = {
  battery: {
    type: "Fixed Pack",
    capacity: "6.10 kWh",
    technology: "Li-ion LFP (32140, Cylindrical)",
    cells: "128 cells",
    lifecycle: "2500 cycles up to 70% DOD",
  },
  performance: {
    range: "240/200/120 kms (IDC/City/Highway)",
    topSpeed: "80 kmph (90 kmph in Turbo)",
    motor: "5.0/3.5 kW (Peak/Rated) BLDC Hub Motor",
    voltage: "48V",
  },
  charging: {
    time: "DC Fast Charging Supported",
    type: "900W Smart Charger",
    rating: "120A (Peak Charging)",
  },
  features: {
    brakes: "CBS (DISC TYPE) - 300mm front, 220mm rear",
    suspension: {
      front: "Telescopic, 100mm stroke, Ø41 mm",
      rear: "Spring coil, 30mm stroke",
    },
    tires: {
      front: "80/90 x 17",
      rear: "100/80 x 17",
    },
  },
};

const gallery = [
  "/images/bikes/lite/Screenshot 2024-11-19 142801.png",
  "/images/bikes/lite/Screenshot 2024-11-19 142835.png",
  "/images/bikes/lite/Screenshot 2024-11-19 142820.png",
  "/images/bikes/lite/Screenshot 2024-11-19 142851.png",
];

export default function Lite() {
  const [activeSection, setActiveSection] = useState("overview");
  const overviewRef = useRef(null);
  const specsRef = useRef(null);
  const featuresRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    {
      title: "Massive Battery Capacity",
      description: "6.10 kWh LFP battery pack with 128-cell configuration",
    },
    {
      title: "DC Fast Charging",
      description: "Supports rapid charging with 120A peak charging capability",
    },
    {
      title: "Premium Braking System",
      description: "CBS equipped with 300mm front and 220mm rear disc brakes",
    },
    {
      title: "High-Performance Motor",
      description: "5.0kW peak power motor with 80-90 kmph speed capability",
    },
    {
      title: "Advanced Suspension",
      description:
        "Ø41mm telescopic fork with premium spring coil rear suspension",
    },
    {
      title: "Extended Range",
      description: "Up to 240km IDC range with optimized power delivery",
    },
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
            src="/images/bikes/lite/Screenshot 2024-11-19 142801.png"
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
                The ultimate electric bike with premium features and maximum
                range
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
                src="/images/bikes/lite/hero-bike.png"
                alt="Lite"
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
                    ? "border-purple-600 text-purple-600"
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
                The Lite represents our flagship model, featuring the most
                advanced technology and premium features. With its powerful 5.1
                kWh NMC battery, you'll enjoy the longest range in our lineup,
                perfect for both daily commutes and weekend adventures.
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
          <h2 className="text-4xl font-bold mb-12 text-center">
            Premium Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "DC Fast Charging",
                description:
                  "Rapid charging with 120A peak charging capability",
                icon: <BoltIcon className="w-8 h-8 text-purple-400" />,
              },
              {
                title: "Premium Braking",
                description: "CBS with 300mm front and 220mm rear disc brakes",
                icon: <ShieldCheckIcon className="w-8 h-8 text-purple-400" />,
              },
              {
                title: "Superior Range",
                description: "Up to 240km IDC range with 6.10 kWh battery",
                icon: <MapIcon className="w-8 h-8 text-purple-400" />,
              },
              {
                title: "Advanced Motor",
                description: "5.0kW peak power with optimized performance",
                icon: <CogIcon className="w-8 h-8 text-purple-400" />,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-purple-600 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
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
