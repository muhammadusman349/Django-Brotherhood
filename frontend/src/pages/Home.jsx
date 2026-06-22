import { Link } from 'react-router-dom';
import { ArrowRight, Award, TrendingUp, Truck, Shield, Zap, Mail, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import BannerSlideshow from '../components/BannerSlideshow';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/products/?feature=true');
        const data = await response.json();
        setFeaturedProducts(data);
      } catch (error) {
        console.error('Error fetching featured products:', error);
      }
    };

    const fetchBanners = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/banners/');
        const data = await response.json();
        setBanners(data);
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };

    fetchFeaturedProducts();
    fetchBanners();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero banners={banners} />

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              <Star size={16} />
              <span>Top Picks</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Premium equipment chosen by athletes worldwide for performance and durability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.length > 0 ? (
              featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              // Placeholder products when API is not available
              [1, 2, 3, 4].map((i) => (
                <ProductCard 
                  key={i} 
                  product={{
                    id: i,
                    name: `Premium Sports Equipment ${i}`,
                    price: (99 + i * 25).toFixed(2),
                    description: 'Professional-grade sports equipment designed for athletes who demand the best.',
                    category_name: 'Sports Gear',
                    stock: 10,
                    image: `https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&auto=format&fit=crop`
                  }}
                />
              ))
            )}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold text-lg uppercase tracking-wide hover:bg-gray-800 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              View All Products <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-gradient-to-r from-blue-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Award size={50} className="text-yellow-400" />
              </div>
              <div className="text-lg font-semibold text-gray-300">ISO Certified</div>
            </div>
            <div className="group">
              <div className="flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Shield size={50} className="text-green-400" />
              </div>
              <div className="text-lg font-semibold text-gray-300">SSL Secured</div>
            </div>
            <div className="group">
              <div className="flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Star size={50} className="text-blue-400" />
              </div>
              <div className="text-lg font-semibold text-gray-300">Verified Business</div>
            </div>
            <div className="group">
              <div className="flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Zap size={50} className="text-red-400" />
              </div>
              <div className="text-lg font-semibold text-gray-300">Quality Assured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              <Zap size={16} />
              <span>Why Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Why Choose Brother Sports?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best sports equipment and shopping experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-100">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-black mb-3 text-gray-900 uppercase">Premium Quality</h3>
              <p className="text-gray-600">
                Only the highest quality sports equipment from trusted manufacturers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-100">
              <div className="bg-gradient-to-br from-red-600 to-red-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                <TrendingUp size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-black mb-3 text-gray-900 uppercase">Wide Selection</h3>
              <p className="text-gray-600">
                Browse through our extensive collection of sports gear across multiple categories.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-100">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                <Truck size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-black mb-3 text-gray-900 uppercase">Fast Shipping</h3>
              <p className="text-gray-600">
                Quick and reliable delivery to get you back in the game faster.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-100">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                <Shield size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-black mb-3 text-gray-900 uppercase">Secure Shopping</h3>
              <p className="text-gray-600">
                Your payment information is protected with industry-standard security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-800 to-red-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">
            Ready to Dominate Your Game?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join Brotherhood Sports and trust premium gear built for peak performance. Start your journey to excellence today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-white text-gray-900 px-10 py-4 rounded-2xl font-black text-lg uppercase tracking-wide hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl inline-flex items-center justify-center gap-2"
            >
              Shop Now <Zap size={24} className="text-yellow-500" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-10 py-4 rounded-2xl font-black text-lg uppercase tracking-wide hover:bg-white hover:text-gray-900 transition-all inline-flex items-center justify-center gap-2"
            >
              Contact Us <Mail size={24} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
