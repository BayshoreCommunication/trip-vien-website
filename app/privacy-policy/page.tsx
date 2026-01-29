import React from 'react';
import SectionLayout from 'components/shared/SectionLayout';
import Link from 'next/link';
import Breadcrumb from 'components/share/Breadcrumb';

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

const PrivacyPolicy = () => {
  return (
    <>
      <style>{css}</style>
      <Breadcrumb
              src="/images/home/hero/bg.png"
              title="Privacy Policy"
              breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
            />
      <SectionLayout>
        <div className='text-center md:text-left text-md md:text-xl'>
          <div className='my-2'>
            <p className='text-lg text-stone-950 text-center md:text-left'>
              Last updated July 08, 2024
            </p>
          </div>
          <div className=''>
            <p className='text-lg text-stone-950 text-center md:text-left'>
              {`Please review our Privacy Policy as posted on the Site (the
              “Privacy Policy”), which is incorporated herein and also governs
              your use of the Site, to understand Tripathi Vongsyprasom Law, P.A.’s privacy
              practices`}{' '}
              <Link
                href='https://www.forthepeople.com/privacy-policy'
                target='_blank'
                className='hover:underline'
              >
                https://www.forthepeople.com/privacy-policy
              </Link>
              .
            </p>
          </div>
          <div className=''>
            <h5 className='text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left'>
              Restrictions on Use
            </h5>
            <p className='text-lg text-stone-950 text-center md:text-left'>
              You agree not to:
            </p>
            <ul className='text-lg text-stone-950 text-left'>
              <li>
                reproduce, distribute, publically display, or otherwise transfer
                the Site;
              </li>
              <li>
                adapt, alter, modify, reverse engineer, disassemble, or
                decompile the Site;
              </li>
              <li>
                prepare derivative works based on the Site or any Tripathi Vongsyprasom Law, P.A.
                technology;
              </li>
              <li>
                remove, obscure, or modify any copyright, trademark or other
                proprietary rights notices, marks or labels contained on or
                within the Site;
              </li>
              <li>
                frame, mirror, or in-line link the Site, or incorporate into
                another website, application, or other service any Tripathi Vongsyprasom Law, P.A. intellectual property;
              </li>
              <li>
                use the Site for any unlawful, fraudulent, or malicious
                purposes, or to solicit any such activity;
              </li>
              <li>
                attempt to gain unauthorized access to any accounts, features,
                systems, or networks through hacking, password mining, or any
                other means;
              </li>
              <li>
                interfere with any access control measures or attempt to disable
                or circumvent such security features;
              </li>
              <li>
                post, transmit, submit, or include any unlawful, harmful,
                threatening, abusive, harassing, defamatory, vulgar, obscene,
                sexually explicit, profane, hateful, racially, ethnically, or
                otherwise objectionable content, material, or information of any
                kind, or any content, material, or information that may give
                rise to criminal or civil liability;
              </li>
              <li>
                submit or post any false or misleading information; and/or
              </li>
              <li>
                violate, infringe, or misappropriate the intellectual property,
                publicity, privacy, or other proprietary rights of Tripathi Vongsyprasom Law, P.A., its licensors, or any other person or entity.
              </li>
            </ul>
            <p className='text-lg text-stone-950 text-center md:text-left'>
              {`We reserve the right to prohibit access, use, conduct of Tripathi Vongsyprasom Law, P.A. communications, or content that we, in our sole discretion,
              deem to be harmful to the Site, users, us, our brand, our business
              partners and licensors, or any other person or entity, or that
              violates these Terms of Use and/or applicable law.`}
            </p>
            <p className='text-lg text-stone-950 text-center md:text-left'>
              Any unauthorized use automatically terminates the license granted
              to you hereunder.
            </p>
          </div>
          <div className=''>
            <h5 className='text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left'>
              No Relationship or Obligation Arises from Use of the Site
            </h5>

            <p className='text-lg text-stone-950 text-center md:text-left'>
              {`The law differs in every jurisdiction, and you should not rely on
              any opinion except that of an attorney you have retained, who has
              a professional duty to advise you after being fully informed of
              all the pertinent facts, and who is licensed in the applicable
              state, and is familiar with the applicable law. Internet
              subscribers, mobile application users, and online readers should
              seek professional counsel about their legal rights and remedies.
              You should not act or refrain from acting on the basis of any
              information found the Site. Any actions or decisions about your
              legal rights should be based on the particular facts and
              circumstances of your situation, and appropriate legal advice from
              an attorney retained directly by you. Tripathi Vongsyprasom Law, P.A. EXPRESSLY
              DISCLAIMS ALL LIABILITY WITH RESPECT TO ACTIONS TAKEN OR NOT TAKEN
              BASED UPON ANY INFORMATION OR OTHER CONTENTS OF THIS SITE. Viewing
              the Site by Internet e-mail or through the Site does not
              constitute or create an attorney-client relationship with anyone.
              The content and features on the Site do not create, and are not
              intended to create, an attorney-client relationship, and shall not
              be construed as legal advice. The content and features of the
              Site, including means to submit a question or information, do not
              constitute an offer to represent you or otherwise give rise to an
              attorney/client relationship. THE SITE IS PROVIDED "AS IS”. Tripathi Vongsyprasom Law, P.A. MAKES NO WARRANTIES, EXPRESS OR IMPLIED, REGARDING THE
              SITE AND ONLINE SERVICES AND HEREBY DISCLAIMS ALL WARRANTIES OF
              ANY KIND OR NATURE, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
              ACCURACY, AND NON-INFRINGEMENT. WITHOUT LIMITING THE FOREGOING,
              Tripathi Vongsyprasom Law, P.A. DOES NOT GUARANTEE THAT THE ONLINE SERVICES OR
              PRODUCTS WILL MEET YOUR REQUIREMENTS, OR WILL BE ERROR-FREE,
              UNINTERRUPTED, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR
              THAT ANY DEFECTS WILL BE CORRECTED.`}
            </p>
          </div>
          <div className=''>
            <h5 className='text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left'>
              Accounts
            </h5>

            <p className='text-lg text-stone-950 text-center md:text-left'>
              {`To use some features of the Site, you may be required to create an
              account. In connection therewith, you agree to provide and
              maintain true, accurate, current, and complete information about
              yourself. You are responsible for maintaining the confidentiality
              of the information you hold for your account login, including your
              password, and for all Submissions made from your account. You
              agree to notify us iTripathi Vongsyprasom Law, P.A. immediately of any unauthorized
              use of your login. Tripathi Vongsyprasom Law, P.A. may suspend access to your
              account if it suspects illegal or improper use, or for other
              reasons, such as for account management purposes, at its sole
              discretion.`}
            </p>
          </div>
          <div className=''>
            <h5 className='text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left'>
              Confidentiality is Not Guaranteed
            </h5>

            <p className='text-lg text-stone-950 text-center md:text-left'>
              {` Information sent to Tripathi Vongsyprasom Law, P.A., P.A. via Internet e-mail or
              through the Site is not secure and is done on a non-confidential
              basis. Tripathi Vongsyprasom Law, P.A. may make reasonable efforts to keep Tripathi Vongsyprasom Law, P.A. communications private, but because of the nature of
              Internet Tripathi Vongsyprasom Law, P.A. communications and the absence of an
              attorney/client relationship, we cannot promise or guarantee
              confidentiality.`}
            </p>
          </div>
          <div className=''>
            <h5 className='text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left'>
              DISCLAIMER - This Site Does Not Provide Legal Advice
            </h5>

            <p className='text-lg text-stone-950 text-center md:text-left'>
              {`The content provided on the Site, such as documents, text,
              graphics, images, videos, news alerts, immigration information or
              information on litigation concerning the foregoing topics, or
              other materials, is for informational purposes only. The
              information is not intended to be a substitute for professional
              legal advice. Always consult an attorney for legal advice or for
              any questions you may have regarding a legal concern. Never
              disregard professional legal advice, or delay or refrain from
              seeking legal advice because of something you have read or seen on
              the Site. Links to other sites are provided for information only.
              Use of trade names is for identification only and does not
              constitute endorsement by Tripathi Vongsyprasom Law, P.A.. Without limiting the
              generality of the foregoing, the Site may present information
              about pharmaceutical drug recalls, which is for information
              purposes only. Such information is not necessarily the most
              current information on subject and may or may not be updated based
              on the last information concerning such recalls. Do not make any
              make any decisions regarding medication or medical providers based
              on information from the Site including but not limited to
              information we provide about drug recalls.`}
            </p>
          </div>
          <div className=''>
            <h5 className='text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left'>
              Tripathi Vongsyprasom Law, P.A. Is Not Responsible for Content; Limitation on
              Liability
            </h5>

            <p className='text-lg text-stone-950 text-center md:text-left'>
              {`Tripathi Vongsyprasom Law, P.A. may periodically change, remove, or add the
              material on the Site without notice. This material may contain
              technical or typographical errors. Tripathi Vongsyprasom Law, P.A. DOES NOT
              GUARANTEE ITS ACCURACY, COMPLETENESS OR SUITABILITY. Tripathi Vongsyprasom Law, P.A. assumes no liability or responsibility for any errors or
              omissions in the contents of the Site. Your use of the Site is at
              your own risk. Under no circumstances shall Tripathi Vongsyprasom Law, P.A. or any
              other party involved in the creation, production or delivery of
              the Site be liable to you or any other person for any indirect,
              special, incidental, or consequential damages of any kind arising
              from your access to, or use of, the Site. TO THE MAXIMUM EXTENT
              PERMITTED BY APPLICABLE LAW IN NO EVENT SHALL Tripathi Vongsyprasom Law, P.A. BE
              LIABLE FOR ANY SPECIAL, INDIRECT OR CONSEQUENTIAL DAMAGES RELATING
              TO THIS MATERIAL, FOR ANY USE OF THIS WEBSITE, OR FOR ANY OTHER
              LINKED WEBSITE.`}
            </p>
          </div>
          <div className=''>
            <h5 className='text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left'>
              Third-party Web Sites
            </h5>

            <p className='text-lg text-stone-950 text-center md:text-left'>
              {`The Site may contain links to third party web sites for the
              convenience of our users. Tripathi Vongsyprasom Law, P.A. does not endorse any of
              these third party sites and does not imply any association between
              Tripathi Vongsyprasom Law, P.A. and those sites. Tripathi Vongsyprasom Law, P.A. does not control
              these third party web sites and cannot represent that their
              policies and practices will be consistent with these Terms of Use.
              If you use links to access and use such web sites, you do so at
              your own risk. Tripathi Vongsyprasom Law, P.A. is not responsible for the contents
              or availability of any linked sites. These links are provided only
              as a convenience to the recipient. These Terms only apply to the
              Site and do not apply to any linked sites. We encourage you to
              read and understand the terms of use of any linked sites that you
              visit. Links do not imply that we sponsor, endorse, are affiliated
              with or associated with, or are legally authorized to use any
              trademark, trade name, service mark, design, logo, symbol, or
              other copyrighted materials displayed on or accessible through any
              linked site.`}
            </p>
          </div>
          <div className=''>
            <h5 className='text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left'>
              State Laws Vary
            </h5>

            <p className='text-lg text-stone-950 text-center md:text-left'>
              {` Tripathi Vongsyprasom Law, P.A. practices immigration law in all 50 states and
              Washington DC. Tripathi Vongsyprasom Law, P.A. may refer prospective clients to
              other law firms located throughout the country, who form
              relationships with Tripathi Vongsyprasom Law, P.A., and are experienced in handling
              such cases. Tripathi Vongsyprasom Law, P.A. may also undertake legal representation
              in certain cases, and will affiliate with other legal counsel
              located throughout the country to provide legal representation.
              The laws of each State are different. The Site contains
              information about general rules that apply in some states. The
              Site also contains information about legal matters in past cases.
              You cannot assume that the same rules apply, or that the same
              result would occur, in your state or any particular state. If you
              have an immigration issue, you should consult a lawyer as soon as
              possible.`}
            </p>
          </div>
          <div className=''>
            <h5 className='text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left'>
              Tripathi Vongsyprasom Law, P.A. Clients
            </h5>

            <p className='text-lg text-stone-950 text-center md:text-left'>
              {` Only individuals who have entered into a mutually signed retainer
              agreement with Tripathi Vongsyprasom Law, P.A. are Tripathi Vongsyprasom Law, P.A. clients (“Tripathi Vongsyprasom Law, P.A. Clients”). Certain portions of the Site designated may
              be available for use only by Tripathi Vongsyprasom Law, P.A. Clients. When Tripathi Vongsyprasom Law, P.A. Clients use such portions of the Site designated by Tripathi Vongsyprasom Law, P.A. to communicate with us pursuant to our representation of
              a Tripathi Vongsyprasom Law, P.A. Client, we will ensure that any information
              provided pursuant to such attorney/client relationship may not be
              shared with third parties except as is done with such precautions
              to preserve the confidentiality of the relevant information and
              any attorney/client privilege as may attach to such information.
              Tripathi Vongsyprasom Law, P.A. takes reasonable measures to secure and protect the
              information that we collect.`}
            </p>
          </div>
          <div className=''>
            <h5 className='text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left'>
              Legal and Ethical Requirements
            </h5>

            <p className='text-lg text-stone-950 text-center md:text-left'>
              {`Tripathi Vongsyprasom Law, P.A. has tried to comply with all legal and ethical
              requirements in compiling the Site. We welcome our compliance with
              the applicable rules and will update the Site as warranted, upon
              learning of any new or different requirements. To the extent that
              the professional responsibility rules of any jurisdiction require
              us to designate a principal office or an attorney responsible for
              the Site, Tripathi Vongsyprasom Law, P.A., P.A. designates its office in Lakeland,
              Florida (USA), 231 N Kentucky Ave, Ste. 213, Lakeland, FL 33801,
              and attorney Alexander Tripathi.`}
            </p>
          </div>
          <div className=''>
            <h5 className='text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left'>
              Advertising Disclosures
            </h5>

            <p className='text-lg text-stone-950 text-center md:text-left'>
              {`Some materials on the Platform may constitute lawyer advertising.
              The choice of a lawyer is an important decision, and it should
              never be based solely upon an advertisement. Before making your
              choice of any attorney, you should give this matter careful
              thought. The selection of an attorney is an important decision.
              Cases will be handled by attorneys licensed in the local
              jurisdiction. Before you decide, you may ask us to send you free
              written information about our qualifications and experience. FREE
              BACKGROUND INFORMATION IS AVAILABLE UPON REQUEST. No
              representation is made that the lawyers are certified specialists
              or experts in any field of law. And no representation is made that
              the legal services to be performed are greater than the quality of
              legal services performed by other lawyers. Anyone considering a
              lawyer should independently investigate the lawyer’s credentials
              and ability, and not rely upon advertisements or self-proclaimed
              expertise. No representation is made here about your specific
              rights. Every case is different and must be judged on its own
              merits. Prior results do not guarantee a similar outcome.
              Contingent attorney fees are negotiable and not set by law. Costs
              and fees are charged only upon monetary recovery. Not available in
              all states. Cases may be handled in association with, or referred
              to, other law firms as co-counsel or referral counsel.`}
            </p>
          </div>
          <div className=''>
            <h5 className='text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left'>
              Governing Laws in Case of Dispute; Jurisdiction
            </h5>

            <p className='text-lg text-stone-950 text-center md:text-left'>
              {`These Terms of Use shall be governed by and construed in
              accordance with the laws of the State of Florida, USA, without
              regard to any choice of law principles. Any and all disputes
              arising hereunder shall be governed as set forth in the
              Arbitration section below.`}
            </p>
          </div>
          <div className=''>
            <h5 className='text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left'>
              Submissions
            </h5>

            <p className='text-lg text-stone-950 text-center md:text-left'>
              {`You are solely responsible for any information, content, or
              material you transmit to or through the Site (“Submissions”). You
              understand that Submissions are considered non-confidential and
              non-proprietary. Furthermore, you grant Tripathi Vongsyprasom Law, P.A. an
              unrestricted, irrevocable, perpetual, transferable,
              subliscensable, worldwide, royalty-free license to use, copy,
              reproduce, display, publish, publicly perform, transmit, and
              distribute any Submission, without compensation or accounting to
              you or anyone else. You represent and warrant that: (a) you have
              the right to submit the Submission to Tripathi Vongsyprasom Law, P.A. and grant the
              licenses as described above; (b) Tripathi Vongsyprasom Law, P.A. will not need to
              obtain licenses from any third party or pay royalties to any third
              party for its use of the Submission; (c) the Submission does not
              infringe any third party’s rights, including intellectual property
              rights and privacy rights; and (d) the Submission complies with
              these Terms of Use and all applicable laws and regulations.`}
            </p>
            <p>
              {`Tripathi Vongsyprasom Law, P.A. takes no responsibility and assumes no liability for any Submission.
`}
            </p>
          </div>
          <div className=''>
            <h5 className='text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left'>
              Arbitration
            </h5>

            <p className='text-lg text-stone-950 text-center md:text-left'>
              {`Any and all claims by you arising out of or related to the Site or
              your use thereof may be resolved only through a binding
              arbitration proceeding to be conducted under the auspices of
              Arbitration Rules of the American Arbitration Association in
              Florida. Both your agreement to arbitrate all controversies,
              disputes and claims, and the results and awards rendered through
              the arbitration, will be final and binding on you and may be
              specifically enforced by legal proceedings. Arbitration will be
              the sole means of resolving such controversies, disputes and
              claims, and you waive your rights to resolve such controversies,
              disputes and claims by court proceedings or any other means. You
              agree that judgment may be entered on the award in any court of
              competent jurisdiction and, therefore, any award rendered shall be
              binding. The arbitrator may not consolidate more than one person’s
              claims, and may not otherwise preside over any form of a
              representative or class proceeding.`}{' '}
              <strong>{`You understand that by
              agreeing to arbitration as a mechanism to resolve all
              controversies, disputes and claims between us, you are waiving
              certain rights, including the right to bring an action in court,
              the right to a jury trial, the right to broad discovery, and the
              right to an appeal. You understand that in the context of
              arbitration, a case is decided by an arbitrator (one or more), not
              by a judge or a jury.`}</strong>
            </p>
          </div>
          <div className=''>
            <h5 className='text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left'>
              International Use
            </h5>

            <p className='text-lg text-stone-950 text-center md:text-left'>
              {`The Site is controlled, operated, and administered by Tripathi Vongsyprasom Law, P.A. from offices within the United States of America and Bangladesh and is only intended for use therein. We make no representation regarding use of the Site outside of the United States as reasonably measured.`}
            </p>
          </div>
          <div className=''>
            <h5 className='text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left'>
              Other Terms
            </h5>

            <p className='text-lg text-stone-950 text-center md:text-left'>
              {`If, for any reason, a Terms of Use, our Privacy Policy, or any portion thereof to be unenforceable, such provision shall be enforced to the maximum extent permissible so as to give the intended effect thereof, and the remainder of these Terms of Use and Privacy Policy shall continue in full force and effect. Tripathi Vongsyprasom Law, P.A.’s failure to act with respect to a breach by you or others does not waive our right to act with respect to that breach or subsequent or similar breaches. No consent or waiver by Tripathi Vongsyprasom Law, P.A. hereof will be deemed effective unless in writing. These Terms of Use, together with our Privacy Policy, as each is currently posted, constitute the entire agreement between Tripathi Vongsyprasom Law, P.A. and you with respect to your use of the Site and supersede all previous written or oral agreements relating to the subject matter hereof, except that this agreement shall not supersede, restrict, or replace any agreements governing the attorney-client relationship between Tripathi Vongsyprasom Law, P.A. and Tripathi Vongsyprasom Law, P.A. Clients.`}
            </p>
            <p className='text-lg text-stone-950 text-center md:text-left'>
              {`Tripathi Vongsyprasom Law, P.A. may, in its sole discretion and without prior notice, block and/or terminate your access to the Site and if we determine that you have violated these Terms of Use or other terms or agreements or that may be associated therewith or if you use the Site in a way that we deem, in our sole discretion, to be an unacceptable use.`}
            </p>
          </div>
          <div className=''>
            <h5 className='text-stone-950 font-bold text-xl md:text-2xl  text-center md:text-left'>
              Copyright
            </h5>

            <p className='text-lg text-stone-950 text-center md:text-left'>
              {`Copyright ©1998-2020 Tripathi Vongsyprasom Law, P.A., P.A. All rights reserved. All materials presented on this site are copyrighted and owned by Tripathi Vongsyprasom Law, P.A., P.A., unless in the public domain or attributed to another source. Any republication, retransmission, reproduction, downloading, storing or distribution of all or part of any materials found on this site is expressly prohibited.`}
            </p>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default PrivacyPolicy;