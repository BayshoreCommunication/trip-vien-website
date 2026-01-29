import React from "react";
import SectionLayout from "components/shared/SectionLayout";
import Link from "next/link";
import Breadcrumb from "components/share/Breadcrumb";

const css = `
  h2{
    padding-top: 10px;
    font-size: 25px;
    padding-bottom: 10px;
  }
  h5{
    padding-top: 15px;
    font-size: 22px;
    padding-bottom: 15px;
    font-weight: bold;
  }
  p{
    padding-top: 6px;
    padding-bottom: 6px;
  }
  ul{
    list-style-type: disc;
    margin-left: 30px;
  }
  li{
    margin-bottom: 6px;
  }
`;

const PrivacyPolicy = () => {
  return (
    <>
      <style>{css}</style>

      <Breadcrumb
        src="/images/home/hero/bg.png"
        title="Privacy Policy"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />

      <SectionLayout>
        <div className="text-center md:text-left text-md md:text-xl">
          <p className="text-lg text-stone-950 my-4">
            Last Updated: July 08, 2024
          </p>

          {/* INTRO */}
          <div>
            <p>
              This Privacy Policy explains how Tripathi Vongsyprasom Law, P.A.
              (“we,” “us,” or “our”) collects, uses, and safeguards information
              obtained through this website (the “Site”). This Privacy Policy is
              incorporated into and governs your use of the Site.
            </p>
            <p>
              By accessing or using the Site, you agree to the terms of this
              Privacy Policy.
            </p>
          </div>

          {/* CONSUMER COMMUNICATION */}
          <div>
            <h5>CONSUMER COMMUNICATION</h5>
            <p>
              To ensure that consumer inquiries are handled accurately,
              courteously, and promptly, telephone calls between you and
              Tripathi Vongsyprasom Law, P.A., including its affiliates, agents,
              paralegals, and attorneys, may be recorded where permitted by law.
            </p>
            <p>
              We may contact you by phone, text message (SMS), or email using
              the contact information you provide. Communications may include
              prerecorded or artificial voice messages and may be delivered
              using automated dialing technology, as permitted by law.
            </p>
            <p>
              By providing your contact information, you consent to receive such
              communications and confirm that the contact details you provide
              are accurate and authorized.
            </p>
          </div>

          {/* INFORMATIONAL ONLY */}
          <div>
            <h5>INFORMATIONAL CONTENT ONLY – NO LEGAL ADVICE</h5>
            <p>
              The content on this Site is provided for general informational and
              educational purposes only. It does not constitute legal advice and
              should not be relied upon as such.
            </p>
            <p>
              Use of this Site does not create an attorney-client relationship.
              An attorney-client relationship is formed only through a written
              and signed retainer agreement.
            </p>
          </div>

          {/* CONFIDENTIALITY */}
          <div>
            <h5>NO CONFIDENTIALITY GUARANTEE</h5>
            <p>
              Information submitted through this Site, including via forms or
              email, is not guaranteed to be confidential unless and until an
              attorney-client relationship is formally established.
            </p>
            <p>
              While we take reasonable steps to protect communications, internet
              transmissions are inherently insecure and confidentiality cannot
              be guaranteed.
            </p>
          </div>

          {/* RESTRICTIONS */}
          <div>
            <h5>RESTRICTIONS ON USE</h5>
            <p>You agree not to:</p>
            <ul>
              <li>Copy, reproduce, distribute, or display Site content</li>
              <li>Modify, reverse engineer, or create derivative works</li>
              <li>Remove copyright or trademark notices</li>
              <li>Frame or embed the Site in another service</li>
              <li>Use the Site for unlawful or fraudulent purposes</li>
              <li>Attempt unauthorized access to systems or accounts</li>
              <li>Post false, misleading, abusive, or unlawful content</li>
              <li>
                Infringe intellectual property or privacy rights of others
              </li>
            </ul>
            <p>
              Any unauthorized use immediately terminates the license granted to
              you.
            </p>
          </div>

          {/* OWNERSHIP */}
          <div>
            <h5>OWNERSHIP AND INTELLECTUAL PROPERTY</h5>
            <p>
              All content, trademarks, logos, software, and materials on the
              Site are owned by or licensed to Tripathi Vongsyprasom Law, P.A.
              and are protected by U.S. and international law.
            </p>
            <p>
              No rights or licenses are granted except as expressly stated.
              Unauthorized use may result in legal action.
            </p>
          </div>

          {/* ACCOUNTS */}
          <div>
            <h5>ACCOUNTS</h5>
            <p>
              Certain features may require account registration. You agree to
              provide accurate information and maintain the confidentiality of
              your login credentials.
            </p>
            <p>
              We reserve the right to suspend or terminate accounts for misuse,
              illegal activity, or administrative reasons.
            </p>
          </div>

          {/* WARRANTIES */}
          <div>
            <h5>DISCLAIMER OF WARRANTIES</h5>
            <p>
              THE SITE IS PROVIDED “AS IS” AND “AS AVAILABLE.” WE DISCLAIM ALL
              WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, AND
              NON-INFRINGEMENT.
            </p>
          </div>

          {/* LIABILITY */}
          <div>
            <h5>LIMITATION OF LIABILITY</h5>
            <p>
              To the maximum extent permitted by law, Tripathi Vongsyprasom Law,
              P.A. shall not be liable for any direct, indirect, incidental, or
              consequential damages arising from your use of the Site.
            </p>
          </div>

          {/* THIRD PARTY */}
          <div>
            <h5>THIRD-PARTY WEBSITES</h5>
            <p>
              The Site may contain links to third-party websites. We do not
              control or endorse these sites and are not responsible for their
              content or practices.
            </p>
          </div>

          {/* CLIENTS */}
          <div>
            <h5>CLIENT RELATIONSHIPS</h5>
            <p>
              Only individuals who have entered into a signed retainer agreement
              with Tripathi Vongsyprasom Law, P.A. are considered clients.
            </p>
          </div>

          {/* ADVERTISING */}
          <div>
            <h5>ADVERTISING DISCLOSURE</h5>
            <p>
              Some materials on this Site may constitute attorney advertising.
              Prior results do not guarantee a similar outcome.
            </p>
          </div>

          {/* GOVERNING LAW */}
          <div>
            <h5>GOVERNING LAW AND DISPUTE RESOLUTION</h5>
            <p>
              These Terms are governed by the laws of the State of Florida.
              Disputes shall be resolved through binding arbitration in Florida
              under the rules of the American Arbitration Association.
            </p>
          </div>

          {/* SUBMISSIONS */}
          <div>
            <h5>SUBMISSIONS</h5>
            <p>
              Any information submitted through the Site is non-confidential.
              You grant us a perpetual, royalty-free license to use such
              submissions as permitted by law.
            </p>
          </div>

          {/* INTERNATIONAL */}
          <div>
            <h5>INTERNATIONAL USE</h5>
            <p>
              The Site is operated from the United States and intended primarily
              for U.S. users. We make no representations regarding use outside
              the United States.
            </p>
          </div>

          {/* MISC */}
          <div>
            <h5>MISCELLANEOUS</h5>
            <p>
              If any provision is found unenforceable, the remaining provisions
              remain in effect. These Terms constitute the entire agreement
              regarding Site use.
            </p>
          </div>

          {/* COPYRIGHT */}
          <div>
            <h5>COPYRIGHT NOTICE</h5>
            <p>
              © Tripathi Vongsyprasom Law, P.A. All rights reserved.
              Unauthorized reproduction or distribution is prohibited.
            </p>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default PrivacyPolicy;
