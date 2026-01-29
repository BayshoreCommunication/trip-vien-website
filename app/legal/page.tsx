import React from 'react';
import SectionLayout from 'components/shared/SectionLayout';
import Link from 'next/link';
import Breadcrumb from 'components/share/Breadcrumb';

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
    margin-bottom: 5px;
  }
  br{
    padding-top: 6px;
    padding-bottom: 6px;
}

`;

const LegalInformation = () => {
  return (
    <>
      <style>{css}</style>
      <Breadcrumb
        src="/images/home/hero/bg.png"
        title="Legal Information"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Legal Information" }]}
      />
      <SectionLayout>
        <div className='text-center md:text-left'>
          <div className='my-8'>
            <h2 className='font-extrabold'>Legal Information</h2>
          </div>

          <div className='privacy-title'>
            <h5>Privacy Policy</h5>
            <p>
              At Tripathi Vongsyprasom Law, P.A., we respect your privacy and are committed to
              protecting your personal information. Our Privacy Policy outlines
              how we collect, use, disclose, and safeguard your information when
              you visit our website,{' '}
              <Link
                href='/'
                target='_blank'
                className='text-blue-500 underline'
              >
               https://www.tripvienlaw.com
              </Link>
              , or any related media. Please read it carefully. If you have any
              disagreements, kindly do not use the site.
            </p>
            <p>
              We may update this policy at any time. Changes will be effective
              immediately upon posting the updated policy, and the "Last
              Updated" date will be revised. Continuing to use the site after
              changes are posted means you accept those changes. Periodically
              review this policy to stay informed.
            </p>
          </div>
          <div className='privacy-title'>
            <h5>Information Collection</h5>
            <p>We collect information in various ways, including:</p>
            <ul>
              <li>
                <strong>Personal Data: </strong> Information you provide, such
                as name, address, email, and phone number.
              </li>

              <li>
                <strong>Derivative Data: </strong> Information our servers
                collect, like IP address, browser type, and pages visited.
              </li>

              <li>
                <strong>Mobile Device Data: </strong> Device details if
                accessing via mobile, like device ID and location.
              </li>
              <li>
                <strong>Third-Party Data: </strong>
                Information from third parties if you connect your account with
                them.
              </li>
              <li>
                <strong>Contest and Survey Data: </strong>
                Information from your participation in contests or surveys.
              </li>
            </ul>
          </div>
          <div className='privacy-title'>
            <h5>Use of Information</h5>
            <p>We use the collected information to:</p>
            <ul>
              <li>Manage your account and provide services.</li>
              <li>Send marketing and promotional materials.</li>
              <li>Analyze usage trends to improve the site.</li>
              <li>Prevent fraud and ensure security.</li>
              <li>Respond to legal requests and protect our rights.</li>
            </ul>
          </div>

          <div className='privacy-title'>
            <h5>Disclosure of Information</h5>
            <p>We collect information in various ways, including:</p>
            <ul>
              <li>
                <strong>By Law: </strong> To comply with legal processes or
                protect rights.
              </li>
              <li>
                <strong>Third-Party Providers: </strong> With partners providing
                services like payment processing and marketing.
              </li>

              <li>
                <strong>Marketing Communications: </strong> Marketing
                Communications: With your consent for promotional purposes.
              </li>

              <li>
                <strong> Interactions and Postings: </strong> With other users
                as part of site interactions.
              </li>

              <li>
                <strong>Business Transfers: </strong> In case of mergers, sales,
                or bankruptcy.
              </li>

              <li>
                <strong>Third-Party Advertisers: </strong> For targeted
                advertising.
              </li>
            </ul>
          </div>

          <div className='privacy-title'>
            <h5>Cookies and Web Beacons</h5>
            <p>
              We apply cookies, web beacons, tracking pixels, and various other
              tracking technologies to help you personalize the site as well as
              enhance your experience. When you visit the site, these
              technologies do not gather your personal information. Most
              browsers allow cookies by default. You can remove or reject
              cookies, but this may compromise the site's availability and
              execution. Web beacons cannot be disabled, although their impact
              can be minimized by adjusting cookie settings.
            </p>
          </div>

          <div className='privacy-title'>
            <h5>Security</h5>
            <p>
              We use various measures to protect your information, but no system
              is foolproof. Be cautious when sharing information online.
            </p>
          </div>

          <div className='privacy-title'>
            <h5>Children's Privacy</h5>
            <p>
              We strictly discourage collecting any data from children aged
              below 13. Contact us if you believe we have collected such data.
            </p>
          </div>

          <div className='privacy-title'>
            <h5>Do-Not-Track Features</h5>
            <p>Currently, we are not responding to any DNT signals.</p>
          </div>

          <div className='privacy-title'>
            <h5>Managing Your Information</h5>
            <p>
              You can opt out of communications by updating your account
              settings or contacting us. For third-party communications, contact
              the third party directly.
            </p>
          </div>

          <div className='privacy-title'>
            <h5>Privacy Rights</h5>
            <p>
              United States residents can request information on personal data
              shared with third parties for marketing once a year, free of
              charge. Minors can request the removal of publicly posted data.
            </p>
          </div>

          <div className='privacy-title'>
            <h5>Consent</h5>
            <p>
              When you are using our site, we consider your consent to our
              privacy policy. Check this page frequently for updates and
              changes. Please contact us if you have further queries or want
              additional information.
            </p>
          </div>

          <div className='privacy-title'>
            <h5>Comment Policy</h5>
            <p>
              We welcome your comments and feedback on our site. However, we
              expect all users to be respectful and refrain from posting
              offensive or inappropriate content. We reserve the right to remove
              any comments that violate these guidelines.
            </p>
          </div>

          <div className='privacy-title'>
            <h5>Copyright Notice</h5>
            <p>
              All content on this site is the property of Tripathi Vongsyprasom Law, P.A. and is
              protected by copyright laws. Unauthorized use or duplication of
              this content without express and written permission from Tripathi Vongsyprasom Law, P.A.
              is strictly prohibited.
            </p>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default LegalInformation;