// import React from "react";

import BottomSections from "./BottomSections";

const TermsConditions = () => {
  return (
   <>
    <div className="md:ml-[2%] md:mr-[2%] py-10 px-5 sm:px-10 lg:px-20">
      <div className="max-w-screen-xl mx-auto text-white dark:text-black">
        <h1 className="bg-gradient-to-r from-[#1fc600] to-[#8AE27A] bg-clip-text text-transparent text-3xl font-k2d font-bold text-center mb-6 sm:text-4xl md:text-5xl">
          Terms of Service
        </h1>
        <p className="text-lg leading-relaxed mb-6 sm:text-xl">
          Welcome to https://www.Alldao.finance, a website-hosted user
          interface (the "Interface" or "App") provided by Alldao ("we", "our",
          or "us"). The Interface provides access to a decentralized protocol
          on various public blockchains, including but not limited to Ethereum,
          that allows users to trade certain compatible digital assets ("the
          Alldao protocol" or the "Protocol"). The Interface is one, but not
          the exclusive, means of accessing the Protocol. To use the Interface,
          you must use non-custodial wallet software, which allows you to
          interact with public blockchains. Your relationship with that
          non-custodial wallet provider is governed by the applicable terms of
          service of that third party, not this Terms of Service Agreement (the
          "Agreement").
        </p>
        <p className="text-lg leading-relaxed mb-6 sm:text-xl">
          This Agreement explains the terms and conditions by which you may
          access and use the Interface. You must read this Agreement carefully.
          By accessing or using the Interface, you signify that you have read,
          understand, and agree to be bound by this Agreement in its entirety.
          If you do not agree, you are not authorized to access or use the
          Interface and should not use the Interface.
        </p>
        <p className="text-lg leading-relaxed mb-6 sm:text-xl font-bold">
          NOTICE: Please read this Agreement carefully as it governs your use
          of the Interface. This Agreement contains important information,
          including a binding arbitration provision and a class action waiver,
          both of which impact your rights as to how disputes are resolved. The
          Interface is only available to you — and you should only access the
          Interface — if you agree completely with these terms.
        </p>

        <div className="space-y-8">
          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1fc600]">
              1. Modification of this Agreement
            </h2>
            <p className="text-lg leading-relaxed">
              We reserve the right, in our sole discretion, to modify this
              Agreement from time to time. If we make any modifications, we will
              notify you by updating the date at the top of the Agreement and by
              maintaining a current version of the Agreement at Alldao's terms
              of services. All modifications will be effective when they are
              posted, and your continued accessing or use of the Interface will
              serve as confirmation of your acceptance of those modifications.
              If you do not agree with any modifications to this Agreement, you
              must immediately stop accessing and using the Interface.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1fc600]">
              2. Eligibility
            </h2>
            <p className="text-lg leading-relaxed">
              To access or use the Interface, you must be able to form a legally
              binding contract with us. Accordingly, you represent that you are
              at least the age of majority in your jurisdiction (e.g., 18 years
              old in the United States) and have the full right, power, and
              authority to enter into and comply with the terms and conditions
              of this Agreement on behalf of yourself and any company or legal
              entity for which you may access or use the Interface.
            </p>
            <p className="text-lg leading-relaxed">
              You further represent that you are not (a) the subject of economic
              or trade sanctions administered or enforced by any governmental
              authority or otherwise designated on any list of prohibited or
              restricted parties (including but not limited to the list
              maintained by the Office of Foreign Assets Control of the U.S.
              Department of the Treasury) or (b) a citizen, resident, or
              organized in a jurisdiction or territory that is the subject of
              comprehensive country-wide, territory-wide, or regional economic
              sanctions by the United States. Finally, you represent that your
              access and use of the Interface will fully comply with all
              applicable laws and regulations, and that you will not access or
              use the Interface to conduct, promote, or otherwise facilitate any
              illegal activity.
            </p>
          </div>

          {/* Add similar sections for all remaining clauses */}
          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1fc600]">
           3. Proprietary Rights
            </h2>
            <p className="text-lg leading-relaxed">
              
We own all intellectual property and other rights in the Interface and its contents, including (but not limited to) software, text, images, trademarks, service marks, copyrights, patents, and designs. This intellectual property is available under the terms of our copyright licenses and our Trademark Guidelines. 

            </p>

          </div>
          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1fc600]">
           4. Additional Rights
            </h2>
            <p className="text-lg leading-relaxed">
              To access or use the Interface, you must be able to form a legally
              We reserve the following rights, which do not constitute obligations of ours: (a) with or without notice to you, to modify, substitute, eliminate or add to the Interface; (b) to review, modify, filter, disable, delete and remove any and all content and information from the Interface; and (c) to cooperate with any law enforcement, court or government investigation or order or third party requesting or directing that we disclose information or content or information that you provide.

            </p>

          </div>
          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1fc600]">
            5. Privacy            </h2>
            <p className="text-lg leading-relaxed">
            When you use the Interface, the only information we collect from you is your blockchain wallet address, completed transaction hashes, and the token names, symbols. We do not collect any personal information from you (e.g., your name or other identifiers that can be linked to you). We do, however, use third-party service providers which may receive or independently obtain your personal information from publicly-available sources. We do not control how these third parties handle your data and you should review their privacy policies to understand how they collect, use, and share your personal information. By accessing and using the Interface, you understand and consent to our data practices and our service providers' treatment of your information.

We use the information we collect to detect, prevent, and mitigate financial crime and other illicit or harmful activities on the Interface. For these purposes, we may share the information we collect with blockchain analytics providers. We share information with these service providers only so that they can help us promote the safety, security, and integrity of the Interface.Please note that when you use the Interface, you are interacting with Ethereum or another public blockchain, which by nature may provide transparency into your transactions. Alldao does not control and is not responsible for any information you make public on blockchains by taking actions through the Interface.
            </p>

          </div>
          {/* ... */}
        </div>
      </div>
    </div>
    <BottomSections/>
   </>
  );
};

export default TermsConditions;