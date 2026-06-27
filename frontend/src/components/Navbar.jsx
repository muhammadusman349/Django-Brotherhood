import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
              <div className="bg-gradient-to-br from-primary-600 to-secondary-600 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300">
                <span className="text-3xl font-black text-white">BS</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-3xl font-black tracking-tight uppercase text-gray-900">Brother Sports</span>
                <div className="text-xs text-gray-500 font-semibold tracking-widest">PREMIUM EQUIPMENT</div>
              </div>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-2">
            <Link to="/" className="px-6 py-3 rounded-xl font-bold text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200">Home</Link>
            <Link to="/products" className="px-6 py-3 rounded-xl font-bold text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200">Products</Link>
            <Link to="/categories" className="px-6 py-3 rounded-xl font-bold text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200">Categories</Link>
            <Link to="/catalogs" className="px-6 py-3 rounded-xl font-bold text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200">Catalog</Link>
            <Link to="/contact" className="px-6 py-3 rounded-xl font-bold text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-5 rounded-xl text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link to="/" className="block px-4 py-3 rounded-xl hover:bg-primary-50 font-bold text-gray-700 hover:text-primary-600 transition-all" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/products" className="block px-4 py-3 rounded-xl hover:bg-primary-50 font-bold text-gray-700 hover:text-primary-600 transition-all" onClick={() => setIsOpen(false)}>Products</Link>
            <Link to="/categories" className="block px-4 py-3 rounded-xl hover:bg-primary-50 font-bold text-gray-700 hover:text-primary-600 transition-all" onClick={() => setIsOpen(false)}>Categories</Link>
            <Link to="/catalogs" className="block px-4 py-3 rounded-xl hover:bg-primary-50 font-bold text-gray-700 hover:text-primary-600 transition-all" onClick={() => setIsOpen(false)}>Catalog</Link>
            <Link to="/contact" className="block px-4 py-3 rounded-xl hover:bg-primary-50 font-bold text-gray-700 hover:text-primary-600 transition-all" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
