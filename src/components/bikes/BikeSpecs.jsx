// src/components/bikes/BikeSpecs.jsx
const SpecValue = ({ value }) => {
  if (typeof value === 'object' && value !== null) {
    return (
      <div className="space-y-2">
        {Object.entries(value).map(([subKey, subValue]) => (
          <div key={subKey} className="ml-4">
            <span className="font-medium capitalize">{subKey}: </span>
            <span>{subValue}</span>
          </div>
        ))}
      </div>
    );
  }
  return <span>{value.toString()}</span>;
};

export default function BikeSpecs({ specs }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.entries(specs).map(([key, value]) => (
        <div key={key} className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-600 mb-2 capitalize">
            {key.replace(/_/g, ' ')}
          </h3>
          <SpecValue value={value} />
        </div>
      ))}
    </div>
  );
}