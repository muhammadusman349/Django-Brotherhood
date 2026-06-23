import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsAPI } from '../services/api';
import { ArrowLeft, Heart, MessageCircle, Check, ZoomIn, ZoomOut, X } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    fetchProduct();
  }, [id]);

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

  const currentImages = product?.images || [];
  const currentImage = currentImages[selectedImage] || currentImages[0];

  const handleWhatsAppOrder = () => {
    if (!phoneNumber) {
      alert('Please enter your phone number');
      return;
    }

    const whatsappMessage = `Hello! I would like to order: ${product.name}\n\nPrice: $${product.price}\n\nPlease contact me at: ${phoneNumber}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
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
                <div className="relative">
                  <img
                    src={currentImage.image_url}
                    alt={currentImage.alt_text || product.name}
                    className="w-full h-96 object-cover cursor-pointer transition-transform duration-300"
                    style={{ transform: isZoomed ? `scale(${zoomLevel})` : 'scale(1)' }}
                    onClick={handleImageClick}
                    onWheel={handleWheel}
                  />
                  
                  {/* Zoom Controls */}
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleZoomIn();
                      }}
                      className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                    >
                      <ZoomIn size={20} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleZoomOut();
                      }}
                      className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                    >
                      <ZoomOut size={20} />
                    </button>
                    {isZoomed && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsZoomed(false);
                          setZoomLevel(1);
                        }}
                        className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                      >
                        <X size={20} />
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="w-full h-96 flex items-center justify-center bg-gray-50">
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
              <div className="grid grid-cols-4 gap-2">
                {currentImages.map((img, index) => (
                  <button
                    key={img.id}
                    onClick={() => {
                      setSelectedImage(index);
                      setIsZoomed(false);
                      setZoomLevel(1);
                    }}
                    className={`rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-primary-500' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={img.image_url}
                      alt={img.alt_text || product.name}
                      className="w-full h-20 object-cover"
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

            {/* WhatsApp Order Section */}
            <div className="bg-white rounded-2xl shadow-card p-6 border border-gray-100">
              <button
                onClick={() => setShowWhatsApp(!showWhatsApp)}
                className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold uppercase tracking-wide transition-all shadow-lg"
              >
                <MessageCircle size={24} />
                Order via WhatsApp
              </button>

              {showWhatsApp && (
                <div className="mt-6 space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="+1 234 567 8900"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Any specific requirements or questions..."
                      rows={3}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <button
                    onClick={handleWhatsAppOrder}
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-xl font-bold uppercase tracking-wide transition-all shadow-lg"
                  >
                    <MessageCircle size={24} />
                    Send Order via WhatsApp
                  </button>
                </div>
              )}
            </div>

            {/* Wishlist Button */}
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className="flex items-center gap-2 text-gray-600 hover:text-red-500 font-semibold transition-colors"
            >
              <Heart
                size={24}
                className={isWishlisted ? 'fill-red-500 text-red-500' : ''}
              />
              {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
