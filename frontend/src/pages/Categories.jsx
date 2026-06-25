import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { categoriesAPI } from '../services/api';
import { Package } from 'lucide-react';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await categoriesAPI.getAll();
      setCategories(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch categories');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">Categories</h1>
          <p className="text-gray-600 mt-2">Browse our sports equipment categories</p>
        </div>
      </div>

      {error && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl">
            {error}
          </div>
        </div>
      )}

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/products?category_slug=${category.slug}`}
              className="group bg-white rounded-2xl shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Category Image */}
              <div className="relative h-48 overflow-hidden bg-gray-50">
                {category.image_url ? (
                  <img
                    src={category.image_url}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Package size={64} className="text-gray-300" />
                  </div>
                )}
              </div>

              {/* Category Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {category.name}
                </h3>
                {category.description && (
                  <p className="text-gray-600 line-clamp-2">{category.description}</p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {categories.length === 0 && !loading && (
          <div className="text-center py-20">
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Package size={48} className="text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No categories found</h3>
            <p className="text-gray-600">Check back later for new categories</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
