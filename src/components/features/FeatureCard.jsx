// src/components/features/FeatureCard.jsx
export default function FeatureCard({ icon, title, description }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }
  