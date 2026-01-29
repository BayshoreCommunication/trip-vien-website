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
    margin-bottom: 5px;
  }
  br{
    padding-top: 6px;
    padding-bottom: 6px;
}

`;

const TermsOfService = () => {
  return (
    <>
      <style>{css}</style>

      <Breadcrumb
        src="/images/home/hero/bg.png"
        title="Terms of Service"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]}
      />
      <SectionLayout>
        <div className="text-center md:text-left">
          <div className="my-8">
            <h2 className="font-extrabold">TERMS OF SERVICE</h2>
            <p>Last updated July 03, 2024</p>
          </div>

          <div className="privacy-title">
            <h5>AGREEMENT TO OUR LEGAL TERMS</h5>
            <p>We are Tripathi Vongsyprasom Law, P.A. ("Company," "we," "us," "our").</p>
            <p>
              We operate the website{" "}
              <Link
                href="/"
                target="_blank"
                className="text-blue-500 underline"
              >
               https://www.tripvienlaw.com
              </Link>
              {`, as well as any other related products and services that refer or
              link to these legal terms (the "Legal Terms") (collectively, the
              "Services").`}
            </p>
            <p>
              {` At Tripathi Vongsyprasom Law, P.A., we aim to combine exceptional immigration services
              with a strong dedication to humanity. Founded by Hardam H.
              Tripathi, a former federal legal professional, our firm is now
              home to some of the most experienced lawyers in the field. Trip
              Law has become a leader in immigration law, built on a foundation
              of excellence, integrity, and a well-earned reputation for
              quality.`}
            </p>
            <p>
              {`You can contact us by phone at (863)-599-6735, email at info@trip-law.com, or by mail to 1820 Florida Ave S, Ste. C, Lakeland, FL 33803, 1820 Florida Ave S, Ste. C, Lakeland, FL 33803, USA.`}
            </p>
            <p>
              {`These Terms constitute a legally binding agreement between you, whether personally or on behalf of an entity ("you"), and Tripathi Vongsyprasom Law, P.A., concerning your access to and use of the Services.`}
            </p>
            <p>
              <strong>{`If you do not agree with all of these legal terms, you are prohibited from using the services and must discontinue use immediately.`}</strong>
            </p>
            <p>
              {`We will provide you with a notice about any modifications to the Services you are using. The amended Legal Terms shall take effect upon publishing or alerting you. By using the Services after the effective date of such modifications, you agree to be bound by the new terms.`}
            </p>
            <p>
              {`Note: The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.`}
            </p>
          </div>
          <div className="privacy-title">
            <h5>1. OUR SERVICES</h5>
            <p>
              The Services are not intended for distribution in jurisdictions
              where it would be contrary to law or regulation. Users accessing
              the Services from other locations are responsible for local laws.
              The Services are not tailored to industry-specific regulations, so
              interactions subject to such laws may not be used.
            </p>
          </div>
          <div className="privacy-title">
            <h5>2. INTELLECTUAL PROPERTY RIGHTS</h5>
            <h5 className="text-center">Our intellectual property</h5>
            <p>
              {`We own or license all intellectual property rights in our Services, including source code, databases, software, website designs, and trademarks. These rights are protected by copyright and trademark laws and treaties worldwide.`}
            </p>
            <h5 className="text-center">Your use of our Services</h5>
            <p>
              {`The company provides a non-exclusive, non-transferable, revocable license to access Services and Content for personal or non-commercial use, with copyright restrictions. Use requires written permission and breach of Intellectual Property Rights results in termination.`}
            </p>
            <h5 className="text-center">Your submissions and contributions</h5>
            <p>
              {`By sending questions, comments, or feedback about the Services, you agree to assign intellectual property rights to us. The Services may invite you to create, submit, post, display, publish, distribute, or broadcast content and materials, including text, writings, video, audio, photographs, music, graphics, comments, and personal information.`}
            </p>
          </div>
          <div className="privacy-title">
            <h5>3. USER REPRESENTATIONS</h5>
            <p>
              {`By using the Services, however, you certify and guarantee that:
              (1) all registration information you submit will be true,
              accurate, current, and complete; (2) you have the legal capacity
              and agree to comply with these Legal Terms; (3) you are not a
              minor in the state or nation in which you reside; (4) you will not
              access the Services through automated or non-human means, whether
              through a bot, script or otherwise; (5) you can not utilize the
              Services for any illegal purpose; and (6) Your usage will not
              violate any applicable law.`}
            </p>
            <p>
              {`If you offer any information that is false, incorrect, or not current, or incomplete, we have the right to suspend or terminate your account and refuse any current or future use of the Services (or any portion thereof).`}
            </p>
          </div>

          <div className="privacy-title">
            <h5>4. USER REGISTRATION</h5>
            <p>
              {`You may need to register to use the Services. You agree to keep your password secure and accept responsibility for any use of your account and password. We have the right to remove, reclaim, or alter any username you pick if we believe it is improper, vulgar, or objectionable.`}
            </p>
          </div>

          <div className="privacy-title">
            <h5>5. PROHIBITED ACTIVITIES</h5>
            <p>
              {`You are not permitted to access or use the Services for any purpose other than those for which we make them available. The Services may not be utilized in connection with any commercial effort other than those expressly sponsored or approved by us.`}
            </p>
            <p>{`As our service user, you should agree to:`}</p>
            <ul>
              <li>
                Without our explicit authorization, you may systematically
                obtain data or other content from the Services to establish or
                assemble a collection, compilation, database, or directory.
              </li>
              <li>
                Trick, swindle, or mislead us and other users, especially when
                attempting to obtain sensitive account information such as user
                passwords.
              </li>
              <li>
                Circumvent, deactivate, or otherwise tamper with
                security-related aspects of the Services, including measures
                that prohibit or limit the use or copying of any Content or
                enforce limitations on the use of the Services and/or the
                Content contained therein.
              </li>
              <li>
                Damage, defame, or in any way impair us or the Services in our
                view.
              </li>
              <li>
                Utilize any data you get from the Services to intimidate,
                mistreat, or hurt someone else.
              </li>
              <li>
                Use our support services improperly, or make up complaints of
                mistreatment or abuse.
              </li>
              <li>
                Make use of the Services in a way that defies any relevant laws
                or rules.
              </li>
              <li>
                Participate in unapproved framing or connecting to the Services.
              </li>
              <li>
                Viruses, Trojan horses, and other materials—such as excessive
                use of capital letters and spamming, which is the posting of
                repetitive text on the internet—that interfere with the
                uninterrupted use and enjoyment of the Services by any party or
                that alter, modify, interfere with, disrupt, or interfere with
                the operation, upkeep, or features of the Services—should not be
                uploaded, transmitted, or attempted to be uploaded.
              </li>
              <li>
                Use the system in any automated way, including by sending
                comments or messages using scripts, or by employing robots, data
                mining, or other comparable techniques for extracting and
                gathering data.
              </li>
              <li>Deleting any content that has copyright.</li>
              <li>
                Utilize the Services in any way that would put you in direct
                competition with us, or utilize the Services and/or the Content
                in any way that would allow you to make money or run a business.
              </li>
              <li>
                Use the Services to promote products and services or to make
                sales offers.
              </li>
            </ul>
          </div>

          <div className="privacy-title">
            <h5>6. USER GENERATED CONTRIBUTIONS</h5>
            <ul>
              <li>
                Contributions must not infringe proprietary rights of third
                parties.
              </li>
              <li>
                Contributors must have the necessary licenses, rights, consents,
                releases, and permissions to use their Contributions.
              </li>
              <li>
                Contributions must have written consent from identifiable
                individuals for inclusion and use.
              </li>
              <li>
                Contributions must not be false, inaccurate, or misleading.
              </li>
              <li>Contributions should not be unsolicited or unauthorized.</li>
              <li>
                Contributions should not be used in pyramid schemes, chain
                letters, spam, mass mailings, or other forms of solicitation.
              </li>
            </ul>
          </div>

          <div className="privacy-title">
            <h5>7. CONTRIBUTION LICENSE</h5>
            <p>
              This license applies to any form, media, or technology now known
              or to be developed in the future, and includes our use of your
              name, business name, and franchise name, if applicable, as well as
              any trademarks, service marks, trade names, logos, and personal
              and commercial pictures that you submit. You relinquish any moral
              rights in your Contributions and guarantee that no moral rights
              were asserted in your Contributions.
            </p>
          </div>

          <div className="privacy-title">
            <h5>8. PRIVACY POLICY</h5>
            <p>
              We care about data privacy and security. Please review our Privacy
              Policy:{" "}
              <Link
                href="/privacy-policy"
                target="_blank"
                className="text-blue-500 underline"
              >
               https://www.tripvienlaw.com/privacy-policy
              </Link>
              . By using the Services, you agree to comply with our Privacy
              Policy, which is included in these Legal Terms. Please be aware
              that the Services are hosted in the United States and United
              States.
            </p>
            <p>
              If you access the Services from a location where the laws or other
              requirements governing the gathering of personal data, use, or
              disclosure differ from those in the United States and the United
              States, your continued use of the Services transfers your data to
              the United States and the United States, and you explicitly agree
              to have your data passed on to and processed in the United States
              and the United States.
            </p>
          </div>

          <div className="privacy-title">
            <h5>9. COPYRIGHT INFRINGEMENTS</h5>
            <p>
              We respect others' intellectual property rights. If you feel that
              any material published on or through the Services violates any
              copyright you own or control, please tell us right away via the
              contact information given or by email.
            </p>
          </div>

          <div className="privacy-title">
            <h5>10. MODIFICATIONS AND INTERRUPTIONS</h5>
            <p>
              We reserve the right to update, modify, or eliminate the contents
              of the Services at any time and for any reason, without prior
              warning. However, we are not obligated to update any information
              about our Services. We shall not be accountable to you or any
              third person for any modification, price change, suspension, or
              termination of the Services.
            </p>
          </div>

          <div className="privacy-title">
            <h5>11. USER DATA</h5>
            <p>
              We will maintain certain data that you transmit to the Services to
              manage the performance of the Services, as well as data relating
              to your use of the Services. Although we perform routine backups
              of data, you are solely responsible for all data that you transmit
              or that relates to any activity you have undertaken using the
              Services.
            </p>
          </div>
          <div className="privacy-title">
            <h5>12. CALIFORNIA USERS AND RESIDENTS</h5>
            <p>
              {`If we are unable to address your issue, please contact the issue
              Assistance Unit of the Division of Consumer Services at the
              California Department of Consumer Affairs. You can reach them in
              writing at 1625 North Market Blvd., Suite N 112, Sacramento, CA
              95834, or by phone at (800) 952-5210 or (916) 445-1254.`}
            </p>
          </div>

          <div className="privacy-title">
            <h5>CONTACT US</h5>
            <p>
              {`To resolve a complaint regarding the Services or to receive further information regarding the use of the Services, please contact us at:`}
            </p>
          </div>
          <div className="privacy-title">
            <p>
              Tripathi Vongsyprasom Law <br />
              1820 Florida Ave S, Ste. C, <br />
              Lakeland, FL 33803
              <br />
              United States
              <br />
              Phone: +1 (727) 334-7327
              <br />
              info@tripvienlaw.com
              <br />
            </p>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default TermsOfService;