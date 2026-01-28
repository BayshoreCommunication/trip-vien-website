import SectionLayout from 'components/shared/SectionLayout';
import Link from 'next/link';
import React from 'react';

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
    margin-bottom: 5px;
  }
  br{
    padding-top: 6px;
    padding-bottom: 6px;
}

`;

const DisclaimersTermsOfUse = () => {
  return (
    <>
      <style>{css}</style>
      <SectionLayout>
        <div className='text-center md:text-left text-md md:text-xl'>
          <div className='my-2'>
            <p className='text-lg text-stone-950 text-center md:text-left'>
              Last updated July 08, 2024
            </p>
          </div>
          <div className=''>
            <h5 className='text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left'>
              Consumer CoTripathi Vongsyprasom Law, P.A.unication
            </h5>
            <p className='text-lg text-stone-950 text-center md:text-left'>
              {`To ensure that consumers’ inquiries are handled accurately, courteously, and promptly, phone calls between you and Tripathi Vongsyprasom Law, P.A. or any of our affiliates, agents, case managers, paralegals, and/or attorneys may be recorded. We may from time to time make calls and/or send text messages to you at any telephone number associated with your account. The manner in which these calls or text (SMS) messages are made to you may include, but is not limited to, the use of prerecorded/artificial voice messages and/or an automatic telephone dialing system. You certify, warrant, and represent that the telephone numbers you have provided to us are your contact numbers. You represent that you are permitted to receive calls at each of the telephone numbers you have provided to us. You agree that Tripathi Vongsyprasom Law, P.A. may send emails to you at any email address you provide us, or use other electronic means of coTripathi Vongsyprasom Law, P.A.unication to the extent permitted by law.`}
            </p>
          </div>
          <div className=''>
            <h5 className='text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left'>
              Content Is Information Only, Not Advice
            </h5>
            <p className='text-lg text-stone-950 text-center md:text-left'>
              {`Thank you for visiting the web site of Tripathi Vongsyprasom Law, P.A., P.A. These
              Terms of Use ("Terms of Use" or “Terms”) are a legal and binding
              agreement between you and Tripathi Vongsyprasom Law, P.A. governing your access to
              and use of the website located at`}{' '}
              <Link
                href='www.trip-law.com'
                target='_blank'
                className='hover:underline'
              >
                www.trip-law.com
              </Link>
              {`, any websites that Tripathi Vongsyprasom Law, P.A. maintains which link to these
              terms, and any mobile applications currently in use or as we may
              introduce from time to time (the website and mobile applications,
              or any portion thereof, the “Site”). The information contained on
              the Site is provided for educational and informational purposes
              only and the contents of the Site are not and should not be
              construed as legal advice. As is described further below, nothing
              on the Site is legal advice or should supplement or inform in
              anyway your legal decisions or a decision to seek legal advice.`}
            </p>

            <p className='text-lg text-stone-950 text-center md:text-left'>
              {`The Site is not an offer to perform services on any matter. This Site contains general information from a variety of sources and might not reflect current legal developments. We do not undertake to update material in our Site to reflect subsequent legal or other developments.`}
            </p>
            <p className='text-lg text-stone-950 text-center md:text-left'>
              {` Please read our Disclaimer below, which is incorporated into these
              Terms, for additional limitations on the use and effect of the
              Site. This “Terms of Use” outlines the conditions on which the
              Site is made available to you. Read the Terms of Use carefully. If
              you use this Site, you are deemed to have agreed to these Terms of
              Use. This Site is designed to be accessible to and usable by
              people with and without disabilities. Please call us at`}{' '}
              <Link
                href={'tel:863.370.2427'}
                className='hover:underline text-blue-500'
              >
                863.370.2427
              </Link>{' '}
              or{' '}
              <Link
                href={'mailto:info@trip-law.com'}
                className='hover:underline text-blue-500'
              >
                email us
              </Link>{' '}
              {` us if you encounter an accessibility or usability issue on this
              site.`}
            </p>
            <p className='text-lg text-stone-950 text-center md:text-left'>
              {`We may update, change, modify, or revise these Terms of Use at any time and for any reason. Any changes will become effective upon posting to the Site, along with the date on which it was most recently revised as indicated by the “Last Updated” heading at the top of these Terms of Use. Your continued access to and/or use of the Site after any such modifications constitute your acceptance of the Terms of Use as modified. It is your responsibility to review the Terms of Use regularly for updates. Please contact us as provided above if you would like information regarding any modifications. If any modification to these Terms of Use is held to be invalid, void, or unenforceable for any reason, such modifications shall be deemed severable and shall not affect the validity and enforceability of these Terms of Use and the remaining provision.`}
            </p>
          </div>
          <div className=''>
            <h5 className='text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left'>
              Use
            </h5>

            <p className='text-lg text-stone-950 text-center md:text-left'>
              {` Tripathi Vongsyprasom Law, P.A. hereby grants you a non-exclusive,
              non-transferable, revocable, limited right and license to access
              and use the Site solely for your personal use in accordance with
              these Terms of Use. You shall not, in any way, otherwise copy,
              reproduce, distribute, transmit, display, perform, reproduce,
              publish, license, modify, create derivative works from, sell, or
              exploit the Site.`}
            </p>
            <p className='text-lg text-stone-950 text-center md:text-left'>
              {`Tripathi Vongsyprasom Law, P.A. may at any time, for any reason, and without notice
              or liability: (a) modify, suspend, or terminate operation of or
              access to the Site and related services, or (b) change, revise, or
              modify the Site and affiliated services.`}
            </p>
          </div>
          <div className=''>
            <h5 className='text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left'>
              Ownership and Intellectual Property Rights
            </h5>

            <p className='text-lg text-stone-950 text-center md:text-left'>
              {`The Site and Tripathi Vongsyprasom Law, P.A. software, systems, technology, and
              know-how (“`}
              <strong>{`Tripathi Vongsyprasom Law, P.A. Technology`}</strong>
              {`”) are owned by or
              licensed to Tripathi Vongsyprasom Law, P.A. and are protected by copyright,
              trademark, trade dress, patent, and/or other intellectual property
              rights and proprietary rights. All trademarks, trade names,
              graphics, logos, and trade dress included in or made available
              through the Site and Online Services are owned by or licensed to
              Tripathi Vongsyprasom Law, P.A. and protected by U.S. and international trademark
              laws (collectively, the “Marks”).`}
            </p>
            <p className='text-lg text-stone-950 text-center md:text-left'>
              {`Except as expressly set forth herein, nothing herein shall be construed to confer any grant or license of any Tripathi Vongsyprasom Law, P.A. Intellectual Property Rights, whether by estoppel, by implication, or otherwise. You are strictly prohibited from using any Tripathi Vongsyprasom Law, P.A. intellectual property except as expressly provided in these Terms of Use. You are also advised that Tripathi Vongsyprasom Law, P.A. and its licensors will aggressively enforce its intellectual property rights to the fullest extent of the law.`}
            </p>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default DisclaimersTermsOfUse;