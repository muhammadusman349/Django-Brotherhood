import { Link } from 'react-router-dom';
import { Package, Star, Heart } from 'lucide-react';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="group bg-white rounded-2xl shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-50">
        {product.primary_image?.image_url ? (
          <img
            src={product.primary_image.image_url}
            alt={product.primary_image.alt_text || product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Package size={64} className="text-gray-300" />
          </div>
        )}
        
        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300"
        >
          <Heart
            size={20}
            className={isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}
          />
        </button>

        {/* Stock Badge */}
        {product.stock !== undefined && (
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
              product.stock > 0 
                ? 'bg-green-500 text-white' 
                : 'bg-red-500 text-white'
            }`}>
              {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        {product.category_name && (
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            {product.category_name}
          </p>
        )}
        
        {/* Product Name */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-1">(4.0)</span>
        </div>

        {/* Description */}
        {product.description && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {product.description}
          </p>
        )}

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black text-gray-900">${product.price}</span>
            {product.original_price && (
              <span className="text-sm text-gray-400 line-through">${product.original_price}</span>
            )}
          </div>
          <Link
            to={`/products/${product.id}`}
            className="text-sm font-bold text-primary-600 hover:text-primary-700 uppercase tracking-wide transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
