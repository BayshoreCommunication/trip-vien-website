import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/*  TOP DISCLAIMER BAR */}
      <div className="bg-[#D80808] text-white text-md md:text-lg text-center px-4 py-4 leading-relaxed ">
        <p className="w-full max-w-6xl text-center mx-auto">
          Disclaimer: Not a licensed attorney in the state of Florida. Licensed
          attorney in the District of Columbia and the state of <br /> Wisconsin
          only. Practices Immigration Law in all 50 states, territories, and
          Embassies/Consulates abroad via Federal Jurisdiction.
        </p>
      </div>

      {/* MAIN FOOTER */}
      <div className="px-4 md:px-6 lg:px-8 py-8">
        <div
          className="max-w-[1640px] mx-auto grid gap-10
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-5
        "
        >
          {/* LOGO + ABOUT */}
          <div className="space-y-5">
            <Image
              src="/images/footer-logo.png"
              alt="Tripathi Yongsyprasom"
              width={1000}
              height={800}
              className="max-w-[150px] md:max-w-[160px]"
            />

            <p className="text-md md:text-lg leading-relaxed text-gray-300">
              Our goal is to deliver strategic, people-focused support for
              immigration, defense, and injury cases. With deep experience in
              business visas, family immigration, and removal defense, we guide
              clients through complex legal systems with confidence.
            </p>
          </div>

          {/* PRACTICE AREAS */}
          <div>
            <h4 className="text-primary font-semibold mb-4 text-lg md:text-2xl">
              Practice Areas
            </h4>
            <ul className="space-y-3 text-sm md:text-lg text-gray-300">
              <li>
                <Link href="#">U.S. Immigration</Link>
              </li>
              <li>
                <Link href="#">DUI / Criminal Defense</Link>
              </li>
              <li>
                <Link href="#">Personal Injury</Link>
              </li>
            </ul>
          </div>

          {/* USEFUL LINKS */}
          <div>
            <h4 className="text-primary font-semibold mb-4 text-lg md:text-2xl">
              Useful Links
            </h4>
            <ul className="space-y-3 text-sm md:text-lg text-gray-300">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/case-studies">Case Studies</Link>
              </li>
              <li>
                <Link href="/attorneys">Attorneys</Link>
              </li>
              <li>
                <Link href="/blog">Blogs</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-primary font-semibold mb-4 text-lg md:text-2xl">
              Company
            </h4>
            <ul className="space-y-3 text-sm md:text-lg text-gray-300">
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/disclaimer">Disclaimers & Terms</Link>
              </li>
              <li>
                <Link href="/investor">Angel Investor</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link href="/legal">Legal Information</Link>
              </li>
            </ul>
          </div>

          {/* CONNECT */}
          <div>
            <h4 className="text-primary font-semibold mb-4 text-lg md:text-2xl">
              Connect
            </h4>
            <ul className="space-y-3 text-sm md:text-lg text-gray-300">
              <li>
                <Link href="mailto:trip@tripvienlaw.com">
                  trip@tripvienlaw.com
                </Link>
              </li>
              <li>
                <Link href="mailto:vien@tripvienlaw.com">
                  vien@tripvienlaw.com
                </Link>
              </li>
              <li>
                <span className="block">
                  1820 Florida Ave S, Ste. C,
                  <br />
                  Lakeland, FL 33803
                </span>
              </li>
            </ul>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3 mt-5">
              {[
                {
                  name: "Facebook",
                  href: "#",
                  icon: "/images/fb.png",
                },
                {
                  name: "Twitter",
                  href: "#",
                  icon: "/images/tw.png",
                },
                {
                  name: "LinkedIn",
                  href: "#",
                  icon: "/images/ld.png",
                },
                {
                  name: "Instagram",
                  href: "#",
                  icon: "/images/in.png",
                },
              ].map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="
        w-9 h-9 rounded-full border border-primary
        flex items-center justify-center
        hover:bg-primary transition
        group
      "
                  aria-label={social.name}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={16}
                    height={16}
                    className="group-hover:invert transition"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT DISCLAIMER BOX */}
      <div className="bg-[#FFFFFF]/20 w-full max-w-[1640px] mx-auto text-gray-200 text-sm md:text-lg px-4 py-5 leading-relaxed">
        <div className="max-w-[1640px] mx-auto">
          All rights reserved by copyright holders! Copyright Disclaimer under
          section 107 of the Copyright Act of 1976, allowance is made for “fair
          use” for purposes such as criticism, comment, news reporting,
          teaching, scholarship, education, and research. All rights reserved to
          the respective copyright owners. Please 
          <Link href="/contact" className="underline">
            Contact My Email
          </Link>{" "}
           if there are any issues or if you'd like a video removed.
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="text-sm md:text-lg text-gray-400 px-4 py-6">
        <div className="max-w-[1640px] mx-auto flex flex-col md:flex-row justify-between gap-3">
          <span className="text-primary">
            © {new Date().getFullYear()} Tripathi Yongsyprasom, P.A. All Rights
            Reserved.
          </span>
          <span>
            Design and Developed by{" "}
            <Link
              href="https://www.bayshorecommunication.com"
              className="text-primary"
            >
              Bayshore Communication
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
