import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [langDropdown, setLangDropdown] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setLangDropdown(false);
  };

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'ur', name: 'اردو', flag: '🇵🇰' }
  ];

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

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
                <span className="text-3xl font-black tracking-tight uppercase text-gray-900">{t('company.name')}</span>
                <div className="text-xs text-gray-500 font-semibold tracking-widest">{t('company.tagline')}</div>
              </div>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-2">
            <Link to="/" className="px-6 py-3 rounded-xl font-bold text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200">{t('nav.home')}</Link>
            <Link to="/products" className="px-6 py-3 rounded-xl font-bold text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200">{t('nav.products')}</Link>
            <Link to="/categories" className="px-6 py-3 rounded-xl font-bold text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200">{t('nav.categories')}</Link>
            <Link to="/catalogs" className="px-6 py-3 rounded-xl font-bold text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200">{t('nav.catalog')}</Link>
            <Link to="/contact" className="px-6 py-3 rounded-xl font-bold text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200">{t('nav.contact')}</Link>
            
            {/* Language Switcher */}
            <div className="relative ml-4">
              <button
                onClick={() => setLangDropdown(!langDropdown)}
                className="flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200"
              >
                <Globe size={20} />
                <span>{currentLang.flag}</span>
                <span className="hidden lg:inline">{currentLang.name}</span>
              </button>
              
              {langDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-primary-50 transition-all ${
                        i18n.language === lang.code ? 'text-primary-600 bg-primary-50' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span className="font-semibold">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
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
            <Link to="/" className="block px-4 py-3 rounded-xl hover:bg-primary-50 font-bold text-gray-700 hover:text-primary-600 transition-all" onClick={() => setIsOpen(false)}>{t('nav.home')}</Link>
            <Link to="/products" className="block px-4 py-3 rounded-xl hover:bg-primary-50 font-bold text-gray-700 hover:text-primary-600 transition-all" onClick={() => setIsOpen(false)}>{t('nav.products')}</Link>
            <Link to="/categories" className="block px-4 py-3 rounded-xl hover:bg-primary-50 font-bold text-gray-700 hover:text-primary-600 transition-all" onClick={() => setIsOpen(false)}>{t('nav.categories')}</Link>
            <Link to="/catalogs" className="block px-4 py-3 rounded-xl hover:bg-primary-50 font-bold text-gray-700 hover:text-primary-600 transition-all" onClick={() => setIsOpen(false)}>{t('nav.catalog')}</Link>
            <Link to="/contact" className="block px-4 py-3 rounded-xl hover:bg-primary-50 font-bold text-gray-700 hover:text-primary-600 transition-all" onClick={() => setIsOpen(false)}>{t('nav.contact')}</Link>
            
            {/* Mobile Language Switcher */}
            <div className="pt-4 border-t border-gray-100">
              <div className="text-sm font-semibold text-gray-500 mb-2 px-4">Language / اللغة</div>
              <div className="flex flex-col space-y-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                      i18n.language === lang.code ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:bg-primary-50'
                    }`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span className="font-semibold">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
