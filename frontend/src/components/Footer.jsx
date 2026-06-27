import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Trophy, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-primary-600 to-secondary-600 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl font-black text-white">BS</span>
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tight uppercase">Brother Sports</h3>
                <div className="text-xs text-gray-400 font-semibold tracking-widest">PREMIUM EQUIPMENT</div>
              </div>
            </div>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              Premium sports products designed for performance, quality, and champions worldwide.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="bg-primary-500/20 p-3 rounded-xl group-hover:bg-primary-500/30 transition-colors">
                  <Mail size={20} className="text-primary-400" />
                </div>
                <span className="font-semibold">info@brothersports.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="bg-blue-500/20 p-3 rounded-xl group-hover:bg-blue-500/30 transition-colors">
                  <Phone size={20} className="text-blue-400" />
                </div>
                <span className="font-semibold">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="bg-green-500/20 p-3 rounded-xl group-hover:bg-green-500/30 transition-colors">
                  <MapPin size={20} className="text-green-400" />
                </div>
                <span className="font-semibold">123 Sports Avenue, Athletic City, AC 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black mb-6 uppercase tracking-wider flex items-center gap-2">
              <Zap size={20} className="text-secondary-400" />
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all inline-flex items-center gap-2 font-semibold">
                  <span className="text-primary-500">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all inline-flex items-center gap-2 font-semibold">
                  <span className="text-primary-500">›</span> Products
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all inline-flex items-center gap-2 font-semibold">
                  <span className="text-primary-500">›</span> Categories
                </Link>
              </li>
              <li>
                <Link to="/catalogs" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all inline-flex items-center gap-2 font-semibold">
                  <span className="text-primary-500">›</span> Catalogs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all inline-flex items-center gap-2 font-semibold">
                  <span className="text-primary-500">›</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-black mb-6 uppercase tracking-wider flex items-center gap-2">
              <Trophy size={20} className="text-secondary-400" />
              Follow Us
            </h4>
            <div className="flex gap-3 flex-wrap mb-8">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all transform hover:scale-110 shadow-lg"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-sky-500 to-sky-600 p-3 rounded-xl hover:from-sky-400 hover:to-sky-500 transition-all transform hover:scale-110 shadow-lg"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-pink-600 to-purple-600 p-3 rounded-xl hover:from-pink-500 hover:to-purple-500 transition-all transform hover:scale-110 shadow-lg"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-blue-700 to-blue-800 p-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-110 shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <div className="p-5 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 rounded-2xl border border-primary-500/30">
              <p className="text-sm font-semibold text-gray-300 mb-3">
                🏆 Join 50,000+ athletes
              </p>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold text-sm transition-colors"
              >
                Start Shopping <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} Brother Sports. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors font-semibold">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors font-semibold">Terms of Service</Link>
              <Link to="/shipping-info" className="text-gray-400 hover:text-white transition-colors font-semibold">Shipping Info</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
