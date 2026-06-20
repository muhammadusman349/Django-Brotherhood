import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BannerSlideshow = ({ banners, customBannerImage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (customBannerImage) {
      setImages([customBannerImage]);
    } else if (banners && banners.length > 0) {
      setImages(banners.map(b => b.image));
    }
  }, [banners, customBannerImage]);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images]);

  if (images.length === 0) return null;

  const currentBanner = banners?.[currentIndex];
  const currentImage = images[currentIndex];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
          <img
            src={currentImage}
            alt={currentBanner?.title || 'Banner'}
            className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          
          {/* Slideshow Indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h3 className="text-3xl font-bold text-white mb-2">
              {currentBanner?.title || 'Welcome to Brother Sports'}
            </h3>
            {currentBanner?.description && (
              <p className="text-white/90 mb-4 text-lg line-clamp-2">{currentBanner.description}</p>
            )}
            {!currentBanner && (
              <p className="text-white/90 mb-4 text-lg">Your ultimate destination for premium sports equipment</p>
            )}
            <Link
              to={currentBanner?.link || '/products'}
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {currentBanner?.link ? 'Learn More' : 'Shop Now'} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSlideshow;
