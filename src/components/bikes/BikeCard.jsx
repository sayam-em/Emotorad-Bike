// src/components/bikes/BikeCard.jsx
import { Link } from 'react-router-dom';

export default function BikeCard({ bike }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={bike.image}
          alt={bike.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{bike.name}</h3>
        <p className="text-gray-600 mb-4">{bike.description}</p>
        <div className="space-y-2 mb-4">
          {bike.highlights.map((highlight, index) => (
            <div key={index} className="flex items-center text-sm">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
              {highlight}
            </div>
          ))}
        </div>
        <Link
          to={`/bikes/${bike.id}`}
          className="inline-block bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}