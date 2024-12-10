// src/components/features/FeatureList.jsx
import FeatureCard from './FeatureCard';
import { 
  BoltIcon,
  SparklesIcon,
  Battery100Icon,
  SignalIcon,
  ShieldCheckIcon,
  HeartIcon,
  ArrowTrendingUpIcon,
  CogIcon
} from '@heroicons/react/24/outline';

export default function FeatureList({ bikeModel }) {
  const features = [
    {
      icon: <Battery100Icon className="w-6 h-6 text-primary-600" />,
      title: "Advanced Battery Technology",
      description: "High-capacity lithium-ion batteries with smart BMS for optimal performance"
    },
    {
      icon: <SparklesIcon className="w-6 h-6 text-primary-600" />,
      title: "Superior Performance",
      description: "Powerful motor delivering instant torque and smooth acceleration"
    },
    {
      icon: <BoltIcon className="w-6 h-6 text-primary-600" />,
      title: "Fast Charging",
      description: "Quick charge capability getting you back on the road faster"
    },
    {
      icon: <SignalIcon className="w-6 h-6 text-primary-600" />,
      title: "Smart Connectivity",
      description: "Integrated app connectivity for vehicle monitoring and updates"
    },
    {
      icon: <ShieldCheckIcon className="w-6 h-6 text-primary-600" />,
      title: "Enhanced Safety",
      description: "Advanced safety features including ABS and intelligent lighting"
    },
    {
      icon: <HeartIcon className="w-6 h-6 text-primary-600" />,
      title: "Ergonomic Design",
      description: "Thoughtfully designed for maximum comfort during daily commutes"
    }
  ];

  // Add model-specific features
  const modelFeatures = {
    hyperlite: [
      {
        icon: <CogIcon className="w-6 h-6 text-primary-600" />,
        title: "Dual Battery System",
        description: "Hot-swappable dual batteries for extended range"
      }
    ],
    ultralite: [
      {
        icon: <ArrowTrendingUpIcon className="w-6 h-6 text-primary-600" />,
        title: "Lightweight Design",
        description: "Optimized frame for urban agility"
      }
    ],
    lite: [
      {
        icon: <SparklesIcon className="w-6 h-6 text-primary-600" />,
        title: "Premium Comfort",
        description: "Enhanced suspension for the smoothest ride"
      }
    ]
  };

  const combinedFeatures = bikeModel 
    ? [...(modelFeatures[bikeModel] || []), ...features]
    : features;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {combinedFeatures.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
}