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

const TermsOfService = () => {
  return (
    <>
      <style>{css}</style>

      <Breadcrumb
        src="/images/home/hero/bg.png"
        title="Terms of Service"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms of Service" },
        ]}
      />

      <SectionLayout>
        <div className="text-center md:text-left">
          <div className="my-8">
            <h2 className="font-extrabold">TERMS OF SERVICE</h2>
            <p>Last Updated: July 03, 2024</p>
          </div>

          {/* AGREEMENT */}
          <div className="privacy-title">
            <h5>AGREEMENT TO LEGAL TERMS</h5>
            <p>
              These Terms of Service constitute a legally binding agreement
              between you, whether individually or on behalf of an entity, and
              <strong> Tripathi Vongsyprasom Law, P.A.</strong> (“Company,”
              “we,” “us,” or “our”), governing your access to and use of{" "}
              <Link href="/" className="text-blue-500 underline">
                https://www.tripvienlaw.com
              </Link>{" "}
              and any related content, products, or services (collectively, the
              “Services”).
            </p>
            <p>
              By accessing or using the Services, you agree to be bound by these
              Terms. If you do not agree, you must discontinue use immediately.
            </p>
            <p>
              The Services are intended only for individuals who are at least 18
              years old.
            </p>
          </div>

          {/* ABOUT */}
          <div className="privacy-title">
            <h5>ABOUT OUR FIRM</h5>
            <p>
              Tripathi Vongsyprasom Law, P.A. was founded on the principle that
              strong legal advocacy should be paired with integrity, compassion,
              and respect. The firm provides immigration, criminal defense, DUI
              defense, and personal injury representation with a client-focused
              approach.
            </p>
          </div>

          {/* NO LEGAL ADVICE */}
          <div className="privacy-title">
            <h5>NO LEGAL ADVICE OR ATTORNEY-CLIENT RELATIONSHIP</h5>
            <p>
              The information provided through the Services is for general
              informational purposes only and does not constitute legal advice.
              Use of the Services does not create an attorney-client
              relationship.
            </p>
            <p>
              An attorney-client relationship is formed only through a written
              and signed retainer agreement.
            </p>
          </div>

          {/* SERVICES */}
          <div className="privacy-title">
            <h5>1. OUR SERVICES</h5>
            <p>
              The Services are provided for informational purposes only and are
              not intended for use in jurisdictions where such use would violate
              applicable law.
            </p>
            <p>
              The Services are not designed to comply with industry-specific
              regulations, including HIPAA or financial regulations.
            </p>
          </div>

          {/* IP */}
          <div className="privacy-title">
            <h5>2. INTELLECTUAL PROPERTY RIGHTS</h5>
            <p>
              All content, trademarks, logos, designs, and materials available
              through the Services are owned by or licensed to the Company and
              are protected by intellectual property laws.
            </p>
            <p>
              You are granted a limited, non-exclusive, non-transferable,
              revocable license to use the Services for personal, non-commercial
              purposes only.
            </p>
          </div>

          {/* SUBMISSIONS */}
          <div className="privacy-title">
            <h5>3. USER SUBMISSIONS</h5>
            <p>
              Any feedback, questions, or materials submitted through the
              Services are considered non-confidential. By submitting content,
              you grant the Company a perpetual, royalty-free license to use
              such content for lawful purposes.
            </p>
          </div>

          {/* REPRESENTATIONS */}
          <div className="privacy-title">
            <h5>4. USER REPRESENTATIONS</h5>
            <ul>
              <li>All information you provide is accurate and current</li>
              <li>You are at least 18 years old</li>
              <li>You will not use automated systems to access the Services</li>
              <li>You will not use the Services for unlawful purposes</li>
            </ul>
            <p>
              We reserve the right to suspend or terminate access for violations
              of these Terms.
            </p>
          </div>

          {/* PROHIBITED */}
          <div className="privacy-title">
            <h5>5. PROHIBITED ACTIVITIES</h5>
            <ul>
              <li>Scraping or copying content without permission</li>
              <li>Attempting to bypass security features</li>
              <li>Uploading malicious code or harmful software</li>
              <li>Using the Services for unauthorized commercial purposes</li>
              <li>Engaging in deceptive, abusive, or harmful conduct</li>
            </ul>
          </div>

          {/* PRIVACY */}
          <div className="privacy-title">
            <h5>6. PRIVACY POLICY</h5>
            <p>
              Your use of the Services is subject to our Privacy Policy:{" "}
              <Link href="/privacy-policy" className="text-blue-500 underline">
                https://www.tripvienlaw.com/privacy-policy
              </Link>
            </p>
          </div>

          {/* MODIFICATIONS */}
          <div className="privacy-title">
            <h5>7. MODIFICATIONS</h5>
            <p>
              We reserve the right to modify or discontinue the Services at any
              time without notice and are not liable for interruptions or
              changes.
            </p>
          </div>

          {/* GOVERNING LAW */}
          <div className="privacy-title">
            <h5>8. GOVERNING LAW</h5>
            <p>
              These Terms are governed by the laws of the State of Florida,
              without regard to conflict-of-law principles.
            </p>
          </div>

          {/* CONTACT */}
          <div className="privacy-title">
            <h5>CONTACT US</h5>
            <p>
              Tripathi Vongsyprasom Law, P.A.
              <br />
              1820 Florida Ave S, Suite C
              <br />
              Lakeland, FL 33803
              <br />
              United States
              <br />
              Email: info@tripvienlaw.com
            </p>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default TermsOfService;
