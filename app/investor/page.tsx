import React from "react";
import SectionLayout from "components/shared/SectionLayout";
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

const AngelInvestor = () => {
  return (
    <>
      <style>{css}</style>

      <Breadcrumb
        src="/images/home/hero/bg.png"
        title="Angel Investor"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Angel Investor" },
        ]}
      />

      <SectionLayout>
        <div className="text-center md:text-left">
          <h2 className="font-extrabold">
            Understanding Angel Investors and Their Role in Business Planning
          </h2>

          {/* WHAT IS */}
          <div className="privacy-title">
            <h5>What Is an Angel Investor?</h5>
            <p>
              An angel investor is an individual who provides financial support
              to startups or early-stage businesses, typically using personal
              funds. In return, the investor may receive equity, convertible
              debt, or another ownership interest.
            </p>
            <p>
              Unlike venture capital firms, angel investors usually invest
              earlier in a company’s lifecycle and often take a more personal,
              hands-on approach.
            </p>
          </div>

          {/* CHARACTERISTICS */}
          <div className="privacy-title">
            <h5>Key Characteristics of Angel Investors</h5>
            <ul>
              <li>
                <strong>Early-Stage Capital:</strong> Angel investors often
                provide seed funding when traditional financing options are
                limited or unavailable.
              </li>
              <li>
                <strong>Higher Risk Tolerance:</strong> Because many startups do
                not succeed, angel investing involves significant risk. However,
                successful ventures can offer strong long-term returns.
              </li>
              <li>
                <strong>Mentorship and Guidance:</strong> Many angel investors
                contribute more than capital by offering strategic insight,
                business experience, and access to professional networks.
              </li>
              <li>
                <strong>Flexible Investment Structures:</strong> Investments may
                be structured as equity, convertible notes, or other negotiated
                arrangements.
              </li>
            </ul>
          </div>

          {/* WHO */}
          <div className="privacy-title">
            <h5>Who Typically Becomes an Angel Investor?</h5>
            <p>
              Angel investors are commonly accredited investors who meet income
              or net worth thresholds under U.S. securities laws. They often
              include:
            </p>
            <ul>
              <li>Former entrepreneurs reinvesting after a business exit</li>
              <li>
                High-earning professionals such as physicians, attorneys, or
                executives
              </li>
              <li>
                Individuals participating in angel networks or investment
                syndicates
              </li>
            </ul>
          </div>

          {/* PROFILE */}
          <div className="privacy-title">
            <h5>Building an Angel Investment Profile</h5>
            <p>
              Individuals interested in angel investing should develop a clear
              investment profile that includes:
            </p>
            <ul>
              <li>
                <strong>Investment Focus:</strong> Defining preferred
                industries, business models, or stages of investment.
              </li>
              <li>
                <strong>Capital Allocation and Risk Tolerance:</strong>{" "}
                Determining how much capital to invest and acceptable risk
                levels.
              </li>
              <li>
                <strong>Expertise and Strategic Value:</strong> Identifying
                experience that can add value beyond funding.
              </li>
              <li>
                <strong>Due Diligence Process:</strong> Establishing methods for
                reviewing financials, market potential, legal structure, and
                founding teams.
              </li>
            </ul>
          </div>

          {/* BENEFITS */}
          <div className="privacy-title">
            <h5>How Angel Investors Can Benefit Startups</h5>
            <p>
              For startups, working with an angel investor can be
              transformative. Angel funding can help launch or scale a business
              when other financing is unavailable.
            </p>
            <p>
              Beyond capital, mentorship and strategic advice help founders make
              informed decisions, avoid common mistakes, and strengthen
              long-term growth potential.
            </p>
            <p>
              Angel investors may also enhance a company’s credibility, making
              it easier to attract future investors, partners, and customers.
            </p>
          </div>

          {/* LEGAL */}
          <div className="privacy-title">
            <h5>Legal Considerations in Angel Investing</h5>
            <p>
              Angel investing involves important legal and regulatory
              considerations. Tripathi Vongsyprasom Law, P.A. advises investors
              and entrepreneurs on the legal aspects of early-stage investments,
              including:
            </p>
            <ul>
              <li>Investor accreditation requirements</li>
              <li>Disclosure obligations and risk transparency</li>
              <li>Structuring investment agreements and ownership terms</li>
              <li>Compliance with applicable securities and tax regulations</li>
            </ul>
            <p>
              Proper legal guidance helps protect both investors and startups
              while supporting transparent, compliant investment relationships.
            </p>
          </div>

          {/* FINAL */}
          <div className="privacy-title">
            <h5>Final Thoughts</h5>
            <p>
              Angel investors play a critical role in the startup ecosystem by
              providing early funding, experience, and strategic support. When
              investments are structured carefully and supported by sound legal
              guidance, they can form the foundation of long-term business
              success.
            </p>
            <p>
              Understanding the legal framework surrounding angel investing is
              essential for building trust, reducing risk, and creating
              sustainable partnerships.
            </p>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default AngelInvestor;
