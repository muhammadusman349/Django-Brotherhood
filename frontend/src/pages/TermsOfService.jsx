import { Scale } from 'lucide-react';
import useDocumentTitle from '../hooks/useDocumentTitle';

const TermsOfService = () => {
  useDocumentTitle('Terms of Service');
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-4">
            <div className="bg-primary-100 p-4 rounded-xl">
              <Scale size={32} className="text-primary-600" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-gray-900 tracking-tight">Terms of Service</h1>
              <p className="text-gray-600 mt-2">Please read our terms and conditions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-card p-8 border border-gray-100">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Terms and Conditions for Brotherhood Sports</h2>
            
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p><strong>Last Updated:</strong> January 1, {currentYear}</p>
              
              <p>Welcome to Brotherhood Sports. These terms and conditions outline the rules and regulations for the use of our website, located at https://brotherhoodsports.com.</p>
              <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use Brotherhood Sports if you do not agree to take all of the terms and conditions stated on this page.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Acceptance of Terms</h3>
              <p>By accessing and using the Brotherhood Sports website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this service.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Use License</h3>
              <p>Permission is granted to temporarily download one copy of the materials on Brotherhood Sports website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Disclaimer</h3>
              <p>The materials on Brotherhood Sports website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
              <p className="mt-2">Further, Brotherhood Sports does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4. Limitations</h3>
              <p>In no event shall Brotherhood Sports or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Brotherhood Sports website, even if Brotherhood Sports or an authorized representative has been notified orally or in writing of the possibility of such damage.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5. Accuracy of Materials</h3>
              <p>The materials appearing on Brotherhood Sports website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6. Product Information and Pricing</h3>
              <p>We strive to provide accurate product descriptions, images, and pricing. However, we do not warrant that product descriptions, colors, or other content are accurate, complete, reliable, current, or error-free. All prices are subject to change without notice.</p>
              <p className="mt-2">We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">7. User Accounts</h3>
              <p>If you create an account on our website, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">8. User Comments and Feedback</h3>
              <p>If you send us creative ideas, suggestions, proposals, plans, or other materials (collectively, 'comments'), whether online, by email, by postal mail, or otherwise, you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate, and otherwise use in any medium any comments that you forward to us.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">9. Personal Information</h3>
              <p>Your submission of personal information through the website is governed by our Privacy Policy. By using our website, you consent to the collection and use of your information as described in our Privacy Policy.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">10. Intellectual Property</h3>
              <p>All content, features, and functionality on the Brotherhood Sports website are the exclusive property of Brotherhood Sports and are protected by international copyright, trademark, and other intellectual property laws.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">11. Governing Law</h3>
              <p>These terms and conditions are governed by and construed in accordance with the laws of [Your Country/State] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">12. Indemnification</h3>
              <p>You agree to indemnify, defend, and hold harmless Brotherhood Sports and its parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, employees, and assignees from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your breach of these Terms of Service or your violation of any law or the rights of a third party.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">13. Termination</h3>
              <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">14. Contact Information</h3>
              <p>For any questions regarding these Terms of Service, please contact us:</p>
              <p className="mt-2"><strong>Email:</strong> info@brotherhoodsports.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Address:</strong> 123 Sports Avenue, Athletic City, AC 12345</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">15. Changes to Terms</h3>
              <p>We reserve the right to modify these terms at any time. All changes are effective immediately when we post them. Your continued use of the website following the posting of revised terms means that you accept and agree to the changes.</p>
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

export default TermsOfService;
