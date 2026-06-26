import { useState, useEffect } from 'react';
import { Truck, Package, Clock, DollarSign } from 'lucide-react';
import useDocumentTitle from '../hooks/useDocumentTitle';

const ShippingInfo = () => {
  useDocumentTitle('Shipping Information');
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchShipments();
  }, []);

  const fetchShipments = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:8000/api/shipments/');
      const data = await response.json();
      setShipments(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch shipping information');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-4">
            <div className="bg-primary-100 p-4 rounded-xl">
              <Truck size={32} className="text-primary-600" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-gray-900 tracking-tight">Shipping Information</h1>
              <p className="text-gray-600 mt-2">Choose the best shipping option for you</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {shipments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shipments.map((shipment) => (
              <div key={shipment.id} className="bg-white rounded-2xl shadow-card p-8 border border-gray-100 hover:shadow-card-hover transition-all duration-300">
                {/* Icon */}
                <div className="flex items-center justify-center mb-6">
                  {shipment.icon_url ? (
                    <img
                      src={shipment.icon_url}
                      alt={shipment.name}
                      className="w-48 h-48 object-contain"
                    />
                  ) : (
                    <div className="bg-primary-100 p-10 rounded-2xl">
                      <Package size={80} className="text-primary-600" />
                    </div>
                  )}
                </div>

                {/* Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{shipment.name}</h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">{shipment.description}</p>

                {/* Details */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Clock size={18} className="text-blue-600" />
                    </div>
                    <span className="font-semibold">{shipment.delivery_time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <DollarSign size={18} className="text-green-600" />
                    </div>
                    <span className="font-semibold">{shipment.cost}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-card p-8 border border-gray-100 text-center">
            <Package size={64} className="text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Shipping Options Available</h3>
            <p className="text-gray-600">Please check back later for shipping information.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShippingInfo;
