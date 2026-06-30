import { Link } from 'react-router-dom';
import { ArrowRight, Award, TrendingUp, Truck, Shield, Zap, Mail, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  useDocumentTitle('Home');
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/products/?feature=true&page_size=6');
        const data = await response.json();
        setFeaturedProducts(data.results || data);
      } catch (error) {
        console.error('Error fetching featured products:', error);
      }
    };

    fetchFeaturedProducts();
  }, []);

  // Only show featured products section if there are actual featured products
  const showFeaturedSection = featuredProducts.length > 0;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Products Section - Only show if feature=true products exist */}
      {showFeaturedSection && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                <Star size={16} />
                <span>{t('home.featuredBadge')}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                {t('home.featuredTitle')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t('home.featuredSubtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/products"
                className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold text-lg uppercase tracking-wide hover:bg-gray-800 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                {t('home.viewAllProducts')} <ArrowRight size={24} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Stats Banner */}
      <section className="bg-gradient-to-r from-blue-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Award size={50} className="text-yellow-400" />
              </div>
              <div className="text-lg font-semibold text-gray-300">{t('home.stats.isoCertified')}</div>
            </div>
            <div className="group">
              <div className="flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Shield size={50} className="text-green-400" />
              </div>
              <div className="text-lg font-semibold text-gray-300">{t('home.stats.sslSecured')}</div>
            </div>
            <div className="group">
              <div className="flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Star size={50} className="text-blue-400" />
              </div>
              <div className="text-lg font-semibold text-gray-300">{t('home.stats.verifiedBusiness')}</div>
            </div>
            <div className="group">
              <div className="flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Zap size={50} className="text-red-400" />
              </div>
              <div className="text-lg font-semibold text-gray-300">{t('home.stats.qualityAssured')}</div>
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
              <span>{t('home.whyUsBadge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              {t('home.whyUsTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('home.whyUsSubtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-100">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-black mb-3 text-gray-900 uppercase">{t('home.features.premiumQuality.title')}</h3>
              <p className="text-gray-600">
                {t('home.features.premiumQuality.description')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-100">
              <div className="bg-gradient-to-br from-red-600 to-red-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                <TrendingUp size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-black mb-3 text-gray-900 uppercase">{t('home.features.wideSelection.title')}</h3>
              <p className="text-gray-600">
                {t('home.features.wideSelection.description')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-100">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                <Truck size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-black mb-3 text-gray-900 uppercase">{t('home.features.fastShipping.title')}</h3>
              <p className="text-gray-600">
                {t('home.features.fastShipping.description')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-100">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                <Shield size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-black mb-3 text-gray-900 uppercase">{t('home.features.secureShopping.title')}</h3>
              <p className="text-gray-600">
                {t('home.features.secureShopping.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-800 to-red-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            {t('home.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-white text-gray-900 px-10 py-4 rounded-2xl font-black text-lg uppercase tracking-wide hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl inline-flex items-center justify-center gap-2"
            >
              {t('home.cta.shopNow')} <Zap size={24} className="text-yellow-500" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-10 py-4 rounded-2xl font-black text-lg uppercase tracking-wide hover:bg-white hover:text-gray-900 transition-all inline-flex items-center justify-center gap-2"
            >
              {t('home.cta.contactUs')} <Mail size={24} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
