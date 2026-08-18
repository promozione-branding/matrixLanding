"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      message:
        "Service is exemplary, best in the industry. Mr. Parveen accepts all feedback with zeal and positivity, timely delivery and client satisfaction is top priority.",
      name: "Ujjwal Sharma",
      image: "/Nitin_jangir.jpg",
    },
    {
      message:
        "Amazing products, best service and competitive price. Matrix Tissues is the best tissue manufacturer in Delhi and NCR.",
      name: "Amit Kumar",
      image: "/client-2.webp",
    },
  ];

  const [current, setCurrent] = useState(0);

  const previousTestimonial = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const testimonial = testimonials[current];

  return (
    <section
      className="relative h-[400px] bg-cover bg-center flex flex-col justify-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/testi.webp')",
      }}
    >
      {/* Heading */}
      <div className="absolute top-8 left-0 w-full text-center text-[32px] font-bold tracking-[1.3px] drop-shadow-[1px_1px_6px_rgba(0,0,0,0.5)]">
        TESTIMONIALS

        <div className="h-1 w-[60px] bg-[#FFD700] mx-auto mt-2 rounded-sm" />
      </div>

      {/* Left Arrow */}
      <button
        type="button"
        onClick={previousTestimonial}
        aria-label="Previous testimonial"
        className="absolute left-2.5 top-1/2 -translate-y-1/2"
      >
        <ArrowLeft size={32} />
      </button>

      {/* Testimonial */}
      <div className="mx-auto max-w-[500px] text-center text-[17px] font-medium mt-[90px] px-10 leading-relaxed drop-shadow-[1px_1px_6px_rgba(0,0,0,0.5)]">
        {testimonial.message}
      </div>

      {/* Right Arrow */}
      <button
        type="button"
        onClick={nextTestimonial}
        aria-label="Next testimonial"
        className="absolute right-2.5 top-1/2 -translate-y-1/2"
      >
        <ArrowRight size={32} />
      </button>

      {/* Client */}
      <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 flex items-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-[50px] h-[50px] rounded-full border-[3px] border-white object-cover shadow-[0_2px_8px_rgba(0,0,0,0.3)] mr-4"
        />

        <span className="text-2xl text-[#FFD700] font-semibold whitespace-nowrap drop-shadow-[1px_1px_6px_rgba(0,0,0,0.4)]">
          {testimonial.name}
        </span>
      </div>
    </section>
  );
};

export default Testimonials;