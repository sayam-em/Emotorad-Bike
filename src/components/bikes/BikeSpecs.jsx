// src/components/bikes/BikeSpecs.jsx
export default function BikeSpecs({ specs }) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(specs).map(([key, value]) => (
          <div
            key={key}
            className="bg-gray-50 p-6 rounded-lg"
          >
            <h3 className="text-lg font-semibold text-gray-600 mb-2 capitalize">
              {key.replace(/_/g, ' ')}
            </h3>
            <p className="text-2xl font-bold">{value}</p>
          </div>
        ))}
      </div>
    );
  }
  