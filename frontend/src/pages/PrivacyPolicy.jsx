import { Shield } from 'lucide-react';
import useDocumentTitle from '../hooks/useDocumentTitle';

const PrivacyPolicy = () => {
  useDocumentTitle('Privacy Policy');
  const currentYear = new Date().getFullYear();

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
        <div className="bg-white rounded-2xl shadow-card p-8 border border-gray-100">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy Policy for Brotherhood Sports</h2>
            
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p><strong>Last Updated:</strong> January 1, {currentYear}</p>
              
              <p>At Brotherhood Sports, accessible from https://brotherhoodsports.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Brotherhood Sports and how we use it.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Information We Collect</h3>
              <p>We collect information you provide directly to us when you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact us through our website form</li>
                <li>Subscribe to our newsletter</li>
                <li>Request product information</li>
                <li>Make inquiries about our services</li>
              </ul>
              <p className="mt-2">The information we collect may include your name, email address, phone number, and the content of your message.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. How We Use Your Information</h3>
              <p>We use the information we collect in the following ways:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to your inquiries and provide customer support</li>
                <li>To send you product updates and promotional materials (with your consent)</li>
                <li>To improve our products and services based on your feedback</li>
                <li>To monitor and analyze trends, usage, and activities</li>
              </ul>
              <p className="mt-2">We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Data Security</h3>
              <p>We implement a variety of security measures to maintain the safety of your personal information. These include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Secure SSL encryption for data transmission</li>
                <li>Regular security audits and updates</li>
                <li>Restricted access to personal data</li>
                <li>Secure storage systems</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4. Cookies and Web Beacons</h3>
              <p>Like any other website, Brotherhood Sports uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5. Your Privacy Rights</h3>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and review your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-2">To exercise these rights, please contact us at info@brotherhoodsports.com</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6. Third-Party Services</h3>
              <p>We may employ third-party companies and services to facilitate our website, such as:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email marketing services</li>
                <li>Analytics services</li>
                <li>Web hosting services</li>
              </ul>
              <p className="mt-2">These third parties have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">7. Children's Privacy</h3>
              <p>Our website does not address anyone under the age of 18. We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">8. Changes to This Privacy Policy</h3>
              <p>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">9. Contact Us</h3>
              <p>If you have any questions or concerns about our Privacy Policy, please contact us:</p>
              <p className="mt-2"><strong>Email:</strong> info@brotherhoodsports.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Address:</strong> 123 Sports Avenue, Athletic City, AC 12345</p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-100 text-sm text-gray-500">
            Last updated: January 1, {currentYear}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
