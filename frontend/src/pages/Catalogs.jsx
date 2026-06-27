import { useState, useEffect } from 'react';
import { catalogsAPI } from '../services/api';
import { Download, Lock, FileText, Calendar, TrendingUp, MessageCircle, Mail } from 'lucide-react';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Catalogs = () => {
  useDocumentTitle('Catalogs');
  const [catalogs, setCatalogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [passwordModal, setPasswordModal] = useState({ isOpen: false, catalogId: null, password: '' });
  const [downloading, setDownloading] = useState(null);

  useEffect(() => {
    fetchCatalogs();
  }, []);

  const fetchCatalogs = async () => {
    try {
      setLoading(true);
      const response = await catalogsAPI.getAll();
      setCatalogs(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch catalogs');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadClick = (catalog) => {
    if (catalog.is_protected) {
      setPasswordModal({ isOpen: true, catalogId: catalog.id, password: '' });
    } else {
      handleDownload(catalog.id);
    }
  };

  const handleDownload = async (id, password = '') => {
    try {
      setDownloading(id);
      const response = await catalogsAPI.download(id, password);
      
      // Create a blob from the response data
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `catalog-${id}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      setPasswordModal({ isOpen: false, catalogId: null, password: '' });
    } catch (err) {
      if (err.response?.status === 403) {
        alert('Invalid password');
      } else {
        alert('Failed to download catalog');
      }
      console.error(err);
    } finally {
      setDownloading(null);
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    handleDownload(passwordModal.catalogId, passwordModal.password);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">Catalogs</h1>
          <p className="text-gray-600 mt-2">Download our product catalogs</p>
        </div>
      </div>

      {error && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl">
            {error}
          </div>
        </div>
      )}

      {/* Catalogs Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {catalogs.map((catalog) => (
            <div
              key={catalog.id}
              className="bg-white rounded-2xl shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-300 border border-gray-100"
            >
              {/* Cover Image */}
              <div className="relative h-48 overflow-hidden bg-gray-50">
                {catalog.cover_image_url ? (
                  <img
                    src={catalog.cover_image_url}
                    alt={catalog.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <FileText size={64} className="text-gray-300" />
                  </div>
                )}
                {catalog.is_protected && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Lock size={14} />
                    Protected
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{catalog.title}</h3>
                
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {catalog.year}
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp size={16} />
                    {catalog.download_count} downloads
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
                    {catalog.category_display}
                  </span>
                  <button
                    onClick={() => handleDownloadClick(catalog)}
                    disabled={downloading === catalog.id}
                    className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {downloading === catalog.id ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                        Downloading...
                      </>
                    ) : (
                      <>
                        <Download size={18} />
                        Download
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {catalogs.length === 0 && !loading && (
          <div className="text-center py-20">
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <FileText size={48} className="text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No catalogs found</h3>
            <p className="text-gray-600">Check back later for new catalogs</p>
          </div>
        )}
      </div>

      {/* Password Modal */}
      {passwordModal.isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Enter Password</h3>
            <p className="text-gray-600 text-sm mb-4">This catalog is password protected. Enter the password to download or request it from the owner.</p>
            
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                value={passwordModal.password}
                onChange={(e) => setPasswordModal({ ...passwordModal, password: e.target.value })}
                placeholder="Enter catalog password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent mb-4"
                autoFocus
              />
              <div className="flex gap-3 mb-4">
                <button
                  type="button"
                  onClick={() => setPasswordModal({ isOpen: false, catalogId: null, password: '' })}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-all"
                >
                  Download
                </button>
              </div>
            </form>

            <div className="border-t border-gray-200 pt-4 mt-4">
              <p className="text-sm text-gray-600 mb-3 text-center">Don't have the password? Request it from the owner:</p>
              <div className="flex gap-3">
                <a
                  href="https://wa.me/1234567890?text=Hello! I would like to request the password for catalog download."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-medium transition-all"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
                <a
                  href="mailto:info@company.com?subject=Request for Catalog Password&body=Hello! I would like to request the password for catalog download."
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg font-medium transition-all"
                >
                  <Mail size={18} />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Catalogs;
