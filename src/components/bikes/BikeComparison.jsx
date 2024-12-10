// src/components/bikes/BikeComparison.jsx
export default function BikeComparison({ bikes }) {
    const features = [
      'Battery',
      'Range',
      'Top Speed',
      'Charging Time',
      'Motor Power',
      'Weight',
    ];
  
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Feature
              </th>
              {bikes.map((bike) => (
                <th
                  key={bike.id}
                  className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {bike.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {features.map((feature) => (
              <tr key={feature}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {feature}
                </td>
                {bikes.map((bike) => (
                  <td
                    key={bike.id}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    {bike.specs[feature.toLowerCase().replace(' ', '_')]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  