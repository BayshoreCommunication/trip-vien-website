import React from "react";
import SectionLayout from "components/shared/SectionLayout";
import Link from "next/link";
import Breadcrumb from "components/share/Breadcrumb";

const css = `
  h1{
    font-size: 40px;
    font-weight: 700;
  }
  h2{
    padding-top: 10px;
    font-size: 25px;
    padding-bottom: 10px;
  }
  h5{
    padding-top: 15px;
    font-size: 20px;
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

const LegalInformation = () => {
  return (
    <>
      <style>{css}</style>

      <Breadcrumb
        src="/images/home/hero/bg.png"
        title="Legal Information"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Legal Information" },
        ]}
      />

      <SectionLayout>
        <div className="text-center md:text-left">
          <div className="my-8">
            <h2 className="font-extrabold">Legal Information</h2>
          </div>

          {/* PRIVACY POLICY */}
          <div className="privacy-title">
            <h5>Privacy Policy</h5>
            <p>
              Tripathi Vongsyprasom Law, P.A. respects your privacy and is
              committed to protecting personal information collected through
              this website and related online services.
            </p>
            <p>
              This Legal Information page summarizes our privacy practices. For
              full details, please review our Privacy Policy as it applies to
              your use of{" "}
              <Link href="/" className="text-blue-500 underline">
                https://www.tripvienlaw.com
              </Link>
              .
            </p>
            <p>
              By using this website, you consent to the collection and use of
              information as described. If you do not agree, please discontinue
              use of the site.
            </p>
          </div>

          {/* INFORMATION WE COLLECT */}
          <div className="privacy-title">
            <h5>Information We Collect</h5>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> Information you
                voluntarily provide, such as your name, email address, phone
                number, or other contact details.
              </li>
              <li>
                <strong>Usage and Technical Data:</strong> Information
                automatically collected, including IP address, browser type,
                device information, and pages visited.
              </li>
              <li>
                <strong>Mobile Access Information:</strong> Basic device details
                and approximate location data when accessing the site via
                mobile.
              </li>
              <li>
                <strong>Third-Party Information:</strong> Information received
                through third-party platforms or integrations you choose to use.
              </li>
            </ul>
          </div>

          {/* USE OF INFORMATION */}
          <div className="privacy-title">
            <h5>How We Use Your Information</h5>
            <ul>
              <li>Respond to inquiries and provide requested services</li>
              <li>Communicate regarding your inquiry or legal matter</li>
              <li>Improve website functionality and user experience</li>
              <li>Maintain security and prevent fraud</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
            <p>We do not sell your personal information.</p>
          </div>

          {/* DISCLOSURE */}
          <div className="privacy-title">
            <h5>Disclosure of Information</h5>
            <p>We may share information only as permitted by law, including:</p>
            <ul>
              <li>When required by legal process or court order</li>
              <li>With service providers assisting with website operations</li>
              <li>In connection with a business transfer or reorganization</li>
            </ul>
            <p>All disclosures are limited to lawful and necessary purposes.</p>
          </div>

          {/* COOKIES */}
          <div className="privacy-title">
            <h5>Cookies and Tracking Technologies</h5>
            <p>
              We may use cookies and similar technologies to enhance website
              functionality and improve user experience. You may disable cookies
              through your browser settings, though some site features may not
              function properly.
            </p>
          </div>

          {/* SECURITY */}
          <div className="privacy-title">
            <h5>Security</h5>
            <p>
              We use reasonable administrative and technical safeguards to
              protect your information. However, no method of transmission over
              the internet is completely secure.
            </p>
          </div>

          {/* ATTORNEY CLIENT */}
          <div className="privacy-title">
            <h5>No Attorney-Client Relationship</h5>
            <p>
              Submitting information through this website does not create an
              attorney-client relationship. Such a relationship is established
              only through a signed written agreement.
            </p>
          </div>

          {/* CHILDREN */}
          <div className="privacy-title">
            <h5>Children’s Privacy</h5>
            <p>
              This website is not intended for children under the age of 13. We
              do not knowingly collect personal information from children.
            </p>
          </div>

          {/* DNT */}
          <div className="privacy-title">
            <h5>Do-Not-Track Signals</h5>
            <p>
              At this time, we do not respond to Do-Not-Track browser signals.
            </p>
          </div>

          {/* USER CHOICES */}
          <div className="privacy-title">
            <h5>Your Choices</h5>
            <p>
              You may opt out of non-essential communications by contacting us
              directly. Third-party communications are governed by the
              respective third party’s policies.
            </p>
          </div>

          {/* COPYRIGHT */}
          <div className="privacy-title">
            <h5>Copyright Notice</h5>
            <p>
              All content on this website is the property of Tripathi
              Vongsyprasom Law, P.A. and is protected by copyright laws.
              Unauthorized use, reproduction, or distribution is prohibited.
            </p>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default LegalInformation;
