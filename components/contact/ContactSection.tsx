import React from "react";

const ContactSection = () => {
  return (
    <section className="px-4 md:px-6 lg:px-8 py-16">
      <div className="max-w-[1640px] mx-auto">
        <div className="bg-[#FFF6E5] rounded-[28px] p-6 md:p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            {/* LEFT: FORM */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
                Get In Touch
              </h2>

              <p className="text-gray-600 max-w-md mb-8">
                We’re always here to guide you—send us your questions and we’ll
                help you right away.
              </p>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />

                <textarea
                  placeholder="Type your message"
                  rows={5}
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                />

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#E8B949] py-4 text-white font-semibold tracking-wide hover:bg-[#d7aa3f] transition"
                >
                  SEND
                </button>
              </form>
            </div>

            {/* RIGHT: MAP */}
            <div className="relative rounded-2xl overflow-hidden min-h-[420px] lg:min-h-full">
              <iframe
                src="https://www.google.com/maps?q=Common%20Ground%20Playground&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
