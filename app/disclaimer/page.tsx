import Breadcrumb from "components/share/Breadcrumb";
import SectionLayout from "components/shared/SectionLayout";
import Link from "next/link";
import React from "react";

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

const DisclaimersTermsOfUse = () => {
  return (
    <>
      <style>{css}</style>

      <Breadcrumb
        src="/images/home/hero/bg.png"
        title="Disclaimers & Terms"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Disclaimers & Terms" },
        ]}
      />

      <SectionLayout>
        <div className="text-center md:text-left text-md md:text-xl">
          <p className="text-lg text-stone-950 my-4">
            Last Updated: July 08, 2024
          </p>

          {/* CONSUMER COMMUNICATION */}
          <div>
            <h5>CONSUMER COMMUNICATION</h5>
            <p>
              To ensure that consumer inquiries are handled accurately,
              courteously, and promptly, phone calls between you and Tripathi
              Vongsyprasom Law, P.A., including its affiliates, agents, case
              managers, paralegals, and attorneys, may be recorded where
              permitted by law.
            </p>
            <p>
              From time to time, we may contact you by telephone, text message
              (SMS), or email using the contact information you provide.
              Communications may include prerecorded or artificial voice
              messages and may be delivered using an automatic telephone dialing
              system, to the extent permitted by law.
            </p>
            <p>
              By providing your contact information, you certify that the phone
              numbers and email addresses you provide are yours and that you are
              authorized to receive communications at those numbers and
              addresses. You agree that Tripathi Vongsyprasom Law, P.A. may
              communicate with you electronically as permitted by applicable
              law.
            </p>
          </div>

          {/* INFORMATIONAL PURPOSES */}
          <div>
            <h5>CONTENT IS FOR INFORMATIONAL PURPOSES ONLY</h5>
            <p>
              These Disclaimers and Terms of Use (“Terms”) govern your access to
              and use of{" "}
              <Link
                href="https://www.tripvienlaw.com"
                target="_blank"
                className="text-blue-500 underline"
              >
                www.tripvienlaw.com
              </Link>
              , any other websites maintained by the firm that link to these
              Terms, and any related mobile applications (collectively, the
              “Site”).
            </p>
            <p>
              The information provided on this Site is for general informational
              and educational purposes only. It does not constitute legal advice
              and should not be relied upon as such. Use of this Site does not
              create an attorney-client relationship between you and Tripathi
              Vongsyprasom Law, P.A.
            </p>
            <p>
              Nothing on this Site constitutes an offer to provide legal
              services for any specific matter. Content may not reflect the most
              current legal developments.
            </p>
          </div>

          {/* NO DUTY */}
          <div>
            <h5>NO DUTY TO UPDATE</h5>
            <p>
              The materials on this Site are provided “as-is.” We do not
              undertake any obligation to update content to reflect changes in
              the law or subsequent legal developments.
            </p>
          </div>

          {/* ACCEPTANCE */}
          <div>
            <h5>ACCEPTANCE OF TERMS</h5>
            <p>
              By accessing or using this Site, you acknowledge that you have
              read, understood, and agreed to be bound by these Terms. If you do
              not agree, you must discontinue use of the Site immediately.
            </p>
            <p>
              This Site is designed to be accessible to individuals with and
              without disabilities. If you experience accessibility issues,
              please contact us by email so we may assist you.
            </p>
          </div>

          {/* CHANGES */}
          <div>
            <h5>CHANGES TO THESE TERMS</h5>
            <p>
              We reserve the right to update or modify these Terms at any time.
              Changes become effective immediately upon posting and will be
              reflected by the “Last Updated” date above.
            </p>
            <p>
              Continued use of the Site constitutes acceptance of the revised
              Terms. If any provision is deemed unenforceable, the remaining
              provisions remain in effect.
            </p>
          </div>

          {/* PERMITTED USE */}
          <div>
            <h5>PERMITTED USE OF THE SITE</h5>
            <p>
              Tripathi Vongsyprasom Law, P.A. grants you a limited,
              non-exclusive, non-transferable, revocable license to access and
              use the Site solely for personal, non-commercial use.
            </p>
            <p>
              You may not copy, reproduce, distribute, modify, create derivative
              works from, sell, or exploit any portion of the Site without prior
              written permission.
            </p>
            <p>
              We may modify, suspend, or discontinue access to the Site at any
              time without notice.
            </p>
          </div>

          {/* IP */}
          <div>
            <h5>OWNERSHIP AND INTELLECTUAL PROPERTY RIGHTS</h5>
            <p>
              All content, software, systems, technology, trademarks, logos,
              designs, and materials made available through the Site
              (collectively, the “Intellectual Property”) are owned by or
              licensed to Tripathi Vongsyprasom Law, P.A. and protected by U.S.
              and international law.
            </p>
            <p>
              Nothing in these Terms grants you ownership or license rights
              except as expressly stated. Unauthorized use may result in legal
              action.
            </p>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default DisclaimersTermsOfUse;
