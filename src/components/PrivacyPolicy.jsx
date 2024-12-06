// import React from 'react';

import BottomSections from "./BottomSections";


const PrivacyPolicy = () => {
  return (
    <>
    <div className="md:ml-[2%] md:mr-[2%] py-10 px-5 sm:px-10 lg:px-20">
      <div className="max-w-screen-xl mx-auto text-white dark:text-black ">
        <h1 className="bg-gradient-to-r from-[#1fc600] to-[#8AE27A] bg-clip-text text-transparent text-3xl font-bold text-center font-k2d mb-6 sm:text-4xl md:text-5xl">
          Privacy Policy
        </h1>
        <p className="text-lg leading-relaxed mb-6 sm:text-xl">
           ALLDAO is committed to protecting your privacy. This Privacy Policy outlines the types of information we collect, how we use and protect it, and your rights regarding your personal data.
        </p>

        <div className="space-y-8 font-quicksand">
          {/* Information We Collect */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1fc600]">1. Information We Collect</h2>
            <ul className="list-inside list-disc text-lg space-y-2">
              <li>
                <span className="font-bold">Personal Information:</span> Includes name, email address, wallet address, and other registration details.
              </li>
              <li>
                <span className="font-bold">Usage Data:</span> Information on how you interact with our platform, such as IP address, browser type, pages visited, and transactions made.
              </li>
              <li>
                <span className="font-bold">Cookies:</span> We use cookies for account logins and performance monitoring to enhance your experience.
              </li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1fc600]">2. How We Use Your Information</h2>
            <ul className="list-inside list-disc text-lg space-y-2">
              <li>To provide and improve our services.</li>
              <li>To process transactions involving ALLDAO tokens.</li>
              <li>To communicate updates, promotions, and notifications.</li>
              <li>To comply with legal obligations, including KYC and AML regulations.</li>
            </ul>
          </div>

          {/* Data Sharing */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1fc600]">3. Data Sharing</h2>
            <p className="text-lg">
              We do not sell, trade, or transfer your information to outside parties, except in these cases:
            </p>
            <ul className="list-inside list-disc text-lg space-y-2">
              <li>When required by law or to comply with legal processes.</li>
              <li>To trusted third-party providers who assist us, provided they keep the information confidential.</li>
            </ul>
          </div>

          {/* Data Security */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1fc600]">4. Data Security</h2>
            <p className="text-lg">
              We implement robust security measures like encryption, firewalls, and secure servers. However, no method of transmission over the Internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* Your Rights */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1fc600]">5. Your Rights</h2>
            <ul className="list-inside list-disc text-lg space-y-2">
              <li>Access and request a copy of your personal information.</li>
              <li>Correct or update any inaccurate information.</li>
              <li>Request deletion of your personal information, subject to legal requirements.</li>
              <li>Opt-out of marketing communications at any time.</li>
            </ul>
          </div>

          {/* Third-Party Links */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1fc600]">6. Third-Party Links</h2>
            <p className="text-lg">
              Our website may contain links to third-party sites. We are not responsible for their privacy practices and encourage you to review their privacy policies.
            </p>
          </div>

          {/* Cookies Policy */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1fc600]">7. Cookies Policy</h2>
            <p className="text-lg">
              We use cookies to track usage and personalize your experience. You can control cookies via your browser settings, but some features may not function properly without them.
            </p>
          </div>

          {/* Changes to This Policy */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1fc600]">8. Changes to This Policy</h2>
            <p className="text-lg">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, and continued use of our website constitutes acceptance.
            </p>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1fc600]">9. Contact Us</h2>
            <p className="text-lg">
              If you have any questions or concerns, please contact us at{' '}
              <a href="mailto:support@alldaoconcept.finance" className="text-blue-500 underline">support@alldaoconcept.finance</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
    <BottomSections/>
    </>
  );
};

export default PrivacyPolicy;