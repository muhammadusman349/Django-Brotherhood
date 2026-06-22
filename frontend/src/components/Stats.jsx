import { useState, useEffect } from 'react';
import { Package, Layers, ShieldCheck } from 'lucide-react';

const Stats = () => {
  const [productsCount, setProductsCount] = useState(0);
  const [categoriesCount, setCategoriesCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/stats/');
        const data = await response.json();

        setProductsCount(data.products_count);
        setCategoriesCount(data.categories_count);
      } catch (error) {
        console.error('Error fetching stats:', error);
        // Fallback to 0 if API fails
        setProductsCount(0);
        setCategoriesCount(0);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="flex gap-6 pt-8 border-t border-gray-200">
      {/* Products Count */}
      <div className="flex items-center gap-3">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-xl shadow-lg">
          <Package size={24} className="text-white" />
        </div>
        <div>
          <div className="text-3xl font-black text-gray-900">
            {loading ? '...' : productsCount}
          </div>
          <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Products</div>
        </div>
      </div>

      {/* Categories Count */}
      <div className="flex items-center gap-3">
        <div className="bg-gradient-to-br from-red-600 to-red-700 p-3 rounded-xl shadow-lg">
          <Layers size={24} className="text-white" />
        </div>
        <div>
          <div className="text-3xl font-black text-gray-900">
            {loading ? '...' : categoriesCount}
          </div>
          <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Categories</div>
        </div>
      </div>

      {/* Quality Tested Badge - Static */}
      <div className="flex items-center gap-3">
        <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl shadow-lg">
          <ShieldCheck size={24} className="text-white" />
        </div>
        <div>
          <div className="text-3xl font-black text-green-600">100%</div>
          <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Quality Tested</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
