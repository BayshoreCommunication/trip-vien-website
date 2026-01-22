"use client";

import React from "react";
import Image from "next/image";
import { team } from "lib/data";

const AboutSection = () => {
  return (
    <section className="px-4 md:px-6 lg:px-8 py-8">
      <div className="max-w-[1640px] mx-auto space-y-8">
        {team.map((member) => (
          <div
            key={member.id}
            className={`rounded-[28px] p-8 md:p-12 ${
              member.dark
                ? "bg-white text-gray-900"
                : "bg-[#FFF6E5] text-gray-900"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 items-start">
              {/* LEFT IMAGE — STICKY (DESKTOP ONLY) */}
              <div
                className="
                  col-span-1
                  relative
                  rounded-2xl
                  overflow-hidden
                  w-full
                  max-w-md
                  mx-auto
                  lg:mx-0

                  /* desktop behavior */
                  lg:sticky lg:top-32
                "
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={500}
                  height={620}
                  className="object-cover rounded-2xl"
                />
              </div>

              {/* RIGHT CONTENT — SCROLLABLE (DESKTOP ONLY) */}
              <div
                className="
                  col-span-2

                  /* mobile */
                  h-auto
                  overflow-visible

                  /* desktop */
                  lg:h-[620px]
                  lg:overflow-y-auto
                  lg:pr-6

                  no-scrollbar
                "
              >
                <div className="border-b border-[#E7B540] pb-1 mb-4">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl mb-3">
                    {member.name}
                  </h3>

                  <p className="text-xl font-semibold uppercase tracking-wide text-black/80 mb-2">
                    {member.title}
                  </p>
                  <p className="text-base mb-4 opacity-80">
                    {member.subtitle}
                  </p>
                </div>

                {/* BIO */}
                <div className="space-y-4">
                  {member.bio.map((text, i) => (
                    <p key={i} className="leading-relaxed opacity-90">
                      {text}
                    </p>
                  ))}
                </div>

                {/* EXTENDED BIO */}
                {member.extendedBio && (
                  <div className="space-y-4 mt-6">
                    {member.extendedBio.map((text, i) => (
                      <p key={i} className="leading-relaxed opacity-80">
                        {text}
                      </p>
                    ))}
                  </div>
                )}

                {/* PHILOSOPHY */}
                {member.philosophy && (
                  <div className="mt-10">
                    <h4 className="text-xl mb-3">
                      Professional Philosophy
                    </h4>
                    <div className="space-y-3 opacity-90">
                      {member.philosophy.map((text, i) => (
                        <p key={i}>{text}</p>
                      ))}
                    </div>
                  </div>
                )}

                {/* EDUCATION / ADMISSIONS */}
                {(member.education ||
                  member.barAdmissions ||
                  member.courtAdmissions) && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {member.education && (
                      <div>
                        <h4 className="font-semibold mb-2">Education</h4>
                        <ul className="space-y-1 opacity-80">
                          {member.education.map((edu, i) => (
                            <li key={i}>• {edu}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {member.barAdmissions && (
                      <div>
                        <h4 className="font-semibold mb-2">
                          Bar Admissions
                        </h4>
                        <ul className="space-y-1 opacity-80">
                          {member.barAdmissions.map((bar, i) => (
                            <li key={i}>• {bar}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {member.courtAdmissions && (
                      <div>
                        <h4 className="font-semibold mb-2">
                          Court Admissions
                        </h4>
                        <ul className="space-y-1 opacity-80">
                          {member.courtAdmissions.map((court, i) => (
                            <li key={i}>• {court}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
