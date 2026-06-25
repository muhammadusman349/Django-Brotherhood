import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsAPI } from '../services/api';
import { ArrowLeft, Heart, Check, Mail } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (product?.category) {
      fetchRelatedProducts(product.category);
    }
  }, [product]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await productsAPI.getById(id);
      setProduct(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch product details');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedProducts = async (categoryId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/products/?category=${categoryId}&page_size=4`);
      const data = await response.json();
      const products = data.results || data;
      setRelatedProducts(products.filter(p => p.id !== parseInt(id)));
    } catch (err) {
      console.error('Failed to fetch related products:', err);
    }
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.5, 1));
  };

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
    setZoomLevel(1);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const currentImages = product?.images || [];
  const currentImage = currentImages[selectedImage] || currentImages[0];

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

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
          <Link to="/products" className="mt-4 inline-block text-primary-600 hover:text-primary-700 font-semibold">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 font-semibold transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="bg-white rounded-2xl shadow-card overflow-hidden relative">
              {currentImage?.image_url ? (
                <div className="relative overflow-hidden group">
                  <img
                    src={currentImage.image_url}
                    alt={currentImage.alt_text || product.name}
                    className={`w-full h-[500px] object-contain cursor-pointer transition-transform duration-300 ${isZoomed ? 'scale-150' : 'group-hover:scale-150'}`}
                    style={{
                      transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
                    }}
                    onClick={handleImageClick}
                    onWheel={handleWheel}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => setMousePosition({ x: 50, y: 50 })}
                  />
                </div>
              ) : (
                <div className="w-full h-[500px] flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <div className="bg-gray-200 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">📦</span>
                    </div>
                    <p className="text-gray-500">No image available</p>
                  </div>
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {currentImages.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {currentImages.map((img, index) => (
                  <button
                    key={img.id}
                    onClick={() => {
                      setSelectedImage(index);
                      setIsZoomed(false);
                      setZoomLevel(1);
                    }}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-primary-500' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={img.image_url}
                      alt={img.alt_text || product.name}
                      className="w-full h-full object-contain p-1"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Category */}
            {product.category_name && (
              <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
                {product.category_name}
              </p>
            )}

            {/* Product Name */}
            <h1 className="text-4xl font-black text-gray-900 tracking-tight">
              {product.name}
            </h1>


            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-gray-900">${product.price}</span>
              {product.original_price && (
                <span className="text-xl text-gray-400 line-through">${product.original_price}</span>
              )}
            </div>

            {/* Size */}
            {product.size && (
              <div className="flex items-center gap-2">
                <span className="px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide bg-blue-100 text-blue-700">
                  Size: {product.size}
                </span>
              </div>
            )}

            {/* Description */}
            {product.description && (
              <div className="prose prose-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
            )}

            {/* Features */}
            {product.features && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-600">
                      <Check size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contact Section */}
            <div className="bg-white rounded-2xl shadow-card p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Contact Us</h3>
              
              <div className="flex gap-3 justify-center">
                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/1234567890?text=${encodeURIComponent(`Hello! I'm interested in: ${product.name}\nPrice: $${product.price}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2.5 px-4 rounded-lg font-medium transition-all shadow-md hover:shadow-lg"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.M157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>

                {/* Email Button */}
                <a
                  href={`mailto:info@company.com?subject=Inquiry about ${product.name}&body=Hi, I'm interested in ${product.name} (Price: $${product.price}). Please provide more information.`}
                  className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2.5 px-4 rounded-lg font-medium transition-all shadow-md hover:shadow-lg"
                >
                  <Mail size={18} />
                  Email
                </a>
              </div>
            </div>

            {/* Wishlist Button */}
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className="w-full flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-red-300 text-gray-600 hover:text-red-500 py-3 px-4 rounded-lg font-semibold transition-all"
            >
              <Heart
                size={20}
                className={isWishlisted ? 'fill-red-500 text-red-500' : ''}
              />
              {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
