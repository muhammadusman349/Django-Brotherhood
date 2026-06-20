import { Link } from 'react-router-dom';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = ({ banners }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [heroImages, setHeroImages] = useState([]);

  useEffect(() => {
    if (banners && banners.length > 0) {
      setHeroImages(banners.map(b => {
        // Construct full URL if image path is relative
        if (b.image && !b.image.startsWith('http')) {
          return `http://localhost:8000${b.image}`;
        }
        return b.image;
      }));
    } else {
      // Default hero images if no banners
      setHeroImages([
        'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop'
      ]);
    }
  }, [banners]);

  useEffect(() => {
    if (heroImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages]);
  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              <Sparkles size={16} />
              <span>Premium Sports Equipment</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight">
              Unleash Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                Athletic Potential
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Discover professional-grade sports equipment trusted by world-class athletes. Quality gear that helps you perform at your best.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-2xl font-bold text-lg uppercase tracking-wide hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Shop Now
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-black text-gray-900">50K+</div>
                <div className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Happy Athletes</div>
              </div>
              <div>
                <div className="text-3xl font-black text-gray-900">1000+</div>
                <div className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Products</div>
              </div>
              <div>
                <div className="text-3xl font-black text-gray-900">4.9★</div>
                <div className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-100 to-secondary-100 aspect-[4/3]">
                <img
                  src={heroImages[currentIndex]}
                  alt={banners?.[currentIndex]?.title || 'Athlete with sports equipment'}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                {/* Slideshow Indicators */}
                {heroImages.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {heroImages.map((_, index) => (
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
              </div>

              {/* Floating Card 1 */}
              <div className="absolute -left-8 top-8 bg-white rounded-2xl shadow-xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-xl">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Free Shipping</div>
                    <div className="text-sm text-gray-500">On orders $50+</div>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -right-8 bottom-8 bg-white rounded-2xl shadow-xl p-4 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="bg-primary-100 p-2 rounded-xl">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Quality Guaranteed</div>
                    <div className="text-sm text-gray-500">30-day returns</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
