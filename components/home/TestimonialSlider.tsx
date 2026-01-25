"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Reveal from "../motion/Reveal";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Clifton Brown",
    image: "/images/home/testimonial/img.png",
    rating: 5,
    text: `My experience with trip law was a good one. The lawyer is great in terms of case preparation and good communication. My case was approved within 10 months.`,
  },
  {
    name: "Sarah Johnson",
    image: "/images/home/testimonial/img.png",
    rating: 5,
    text: `Excellent legal support and communication throughout my entire process. Highly recommended law firm.`,
  },
];

export default function TestimonialSlider() {
  return (
    <section className="bg-[#000000]">
      <div className="max-w-[1640px] mx-auto px-4 py-8 md:py-16 relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
          }}
          loop
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <div className="max-w-3xl text-left">
                  
                  {/* Avatar */}
                  <Reveal x={-100} opacityFrom={0} duration={3}>
                    <div className="flex items-center gap-4 mb-6">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="rounded-2xl"
                      />
                    </div>
                  </Reveal>

                  {/* Testimonial Text */}
                  <Reveal tag="h2" y={100} opacityFrom={0} duration={3}>
                    <p className="text-white text-xl md:text-2xl lg:text-3xl leading-relaxed font-serif">
                      {item.text}
                    </p>
                  </Reveal>

                  {/* Name + Rating */}
                  <Reveal tag="h2" y={100} opacityFrom={0} duration={3}>
                    <div className="mt-6 flex items-start gap-4">
                      <span className="w-px h-12 bg-gray-500 mt-1" />

                      <div>
                        <p className="text-white font-semibold">
                          {item.name}
                        </p>
                        <div className="flex gap-1 mt-1">
                          {Array.from({ length: item.rating }).map((_, i) => (
                            <span key={i} className="text-primary text-sm">
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Reveal>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="absolute bottom-8 right-4 md:right-8 flex gap-3 z-10">
          <button className="testimonial-prev w-11 h-11 rounded-full bg-[#484848] flex items-center justify-center text-white hover:bg-primary transition">
            ←
          </button>
          <button className="testimonial-next w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary transition">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
