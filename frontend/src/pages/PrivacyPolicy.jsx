import { useState, useEffect } from 'react';
import { Shield, FileText } from 'lucide-react';
import useDocumentTitle from '../hooks/useDocumentTitle';

const PrivacyPolicy = () => {
  useDocumentTitle('Privacy Policy');
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPrivacyPolicy();
  }, []);

  const fetchPrivacyPolicy = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:8000/api/privacy-policy/');
      const data = await response.json();
      setContent(data[0] || null);
      setError(null);
    } catch (err) {
      setError('Failed to fetch privacy policy');
      console.error(err);
    } finally {
      setLoading(false);
    }
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-4">
            <div className="bg-primary-100 p-4 rounded-xl">
              <Shield size={32} className="text-primary-600" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-gray-900 tracking-tight">Privacy Policy</h1>
              <p className="text-gray-600 mt-2">Your privacy is important to us</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {content ? (
          <div className="bg-white rounded-2xl shadow-card p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{content.title}</h2>
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-600 whitespace-pre-wrap leading-relaxed">
                {content.content}
              </div>
            </div>
            {content.last_updated && (
              <div className="mt-8 pt-6 border-t border-gray-100 text-sm text-gray-500">
                Last updated: {new Date(content.last_updated).toLocaleDateString()}
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-card p-8 border border-gray-100 text-center">
            <FileText size={64} className="text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Privacy Policy Available</h3>
            <p className="text-gray-600">Please check back later for our privacy policy.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
