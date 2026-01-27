"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Reveal from "../motion/Reveal";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Purab Patel",
    rating: 5,
    text: `One of the best immigration lawyer I have ever met. Tripathy made everything very easy and helped us gain U.S. citizenship. Very friendly, professional, and knowledgeable lawyer. Thank you very much. I wish I could give more than 5 stars.`,
  },
  {
    name: "P R",
    rating: 5,
    text: `Very nice job!! Tripathi sir feels like a member of my family. Very easy and fast—he helped fill out all my documents for me and my husband. Highly recommend for citizenship process; it took less than 3 months. I will definitely work with him again. Thank you for supporting us!!`,
  },
  {
    name: "Tanjia Mou",
    rating: 5,
    text: `I’m very grateful to Mr. Trip and his team for their support throughout my IR-1 visa process. They were always professional, patient, and attentive, providing video guidance and helping me prepare for my interview. They carefully ensured all my documents were in order and kept me informed at every step. I truly appreciate their dedication and highly recommend Mr. Trip for anyone seeking assistance with immigration matters.`,
  },
  {
    name: "Clifton Brown",
    rating: 5,
    text: `My experience with Trip Law was a good one. The lawyer is excellent in terms of case preparation and communication. My case was approved within 10 months. I would definitely recommend this firm to anyone in need of immigration assistance.`,
  },
  {
    name: "Taylor Made",
    rating: 5,
    text: `My husband was able to obtain his citizenship thanks to Trip and his team! We are very thankful for their help, dedication, and support throughout the entire process. They truly care about their clients.`,
  },
  {
    name: "Chandara Chea",
    rating: 5,
    text: `Trip and his team have been professional in helping both my sister-in-law and my mother with their immigration cases. Overall, the firm is very knowledgeable and professional. While minor miscommunication happened at times, I am very satisfied with the service. My sister-in-law successfully passed her interview and will be heading to the U.S. soon. Next up is my mom’s case. Thank you for all your help so far.`,
  },
  {
    name: "Pinkesh Patel",
    rating: 5,
    text: `Trip is a great lawyer and the staff is excellent. They handled my wife’s EAD quickly and efficiently. Very professional service and fast results.`,
  },
  {
    name: "Michael McClelland",
    rating: 5,
    text: `I want to thank Trip for all he has done to help get my Application for Permanent Residence approved by U.S. Immigration Services. I was treated in a very friendly and caring way. Trip explained every procedure clearly and encouraged me through all the paperwork. I would recommend Trip to anyone dealing with immigration matters. Thank you for your friendship and support.`,
  },
  {
    name: "Samuel Bissu",
    rating: 5,
    text: `Attorney Tripathy helped me and my family obtain an E-2 visa. Every step of the way was successful because of his attention to detail on every form we submitted. He truly got the job done.`,
  },
  {
    name: "Lubna Rihani",
    rating: 5,
    text: `I love this law firm. Trip and his team helped me obtain my green card in a very fast time. Trip was extremely supportive and understanding throughout the entire process. Thank you very much for caring about me and my family.`,
  },
];

export default function TestimonialSlider() {
  return (
    <section className="bg-black">
      <div className="max-w-[1640px] mx-auto px-4 py-10 md:py-16 relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
          }}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={900}
          loop
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <div className="max-w-4xl w-full">
                  <Reveal y={60} opacityFrom={0} duration={2.5}>
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Name + Rating */}
                      <div className="min-w-[220px] bg-white/20 p-4 py-6 rounded self-start">
                        <p className="text-white font-semibold text-lg">
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

                      {/* Divider */}
                      <span className="hidden md:block w-px bg-primary/50" />

                      {/* Testimonial Text */}
                      <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed font-serif">
                        {item.text}
                      </p>
                    </div>
                  </Reveal>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="absolute bottom-6 right-4 md:right-8 flex gap-3 z-10">
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
